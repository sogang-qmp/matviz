import * as vscode from 'vscode';
import { CrystalStructure, VolumetricData } from '../parsers/types';
import { parseStructureFile } from '../parsers/index';
import path from 'path';

class CrystalDocument implements vscode.CustomDocument {
  constructor(
    public readonly uri: vscode.Uri,
    public readonly structure: CrystalStructure,
    public readonly volumetric?: VolumetricData
  ) {}

  dispose() {}
}

export class CrystalEditorProvider implements vscode.CustomReadonlyEditorProvider<CrystalDocument> {
  private activeWebview: vscode.Webview | undefined;

  constructor(private readonly context: vscode.ExtensionContext) {}

  async openCustomDocument(
    uri: vscode.Uri,
    _openContext: vscode.CustomDocumentOpenContext,
    _token: vscode.CancellationToken
  ): Promise<CrystalDocument> {
    const data = await vscode.workspace.fs.readFile(uri);
    const content = new TextDecoder('utf-8').decode(data);
    const filename = path.basename(uri.fsPath);
    const result = parseStructureFile(content, filename);
    return new CrystalDocument(uri, result.structure, result.volumetric);
  }

  async resolveCustomEditor(
    document: CrystalDocument,
    webviewPanel: vscode.WebviewPanel,
    _token: vscode.CancellationToken
  ): Promise<void> {
    this.activeWebview = webviewPanel.webview;

    webviewPanel.webview.options = {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.joinPath(this.context.extensionUri, 'dist'),
        vscode.Uri.joinPath(this.context.extensionUri, 'media'),
      ],
    };

    webviewPanel.webview.html = this.getHtml(webviewPanel.webview);

    webviewPanel.webview.onDidReceiveMessage((msg) => {
      if (msg.type === 'ready') {
        webviewPanel.webview.postMessage({
          type: 'loadStructure',
          data: document.structure,
        });
        if (document.volumetric) {
          webviewPanel.webview.postMessage({
            type: 'loadVolumetric',
            data: {
              origin: document.volumetric.origin,
              lattice: document.volumetric.lattice,
              dims: document.volumetric.dims,
              data: Array.from(document.volumetric.data),
            },
          });
        }
      }
    });

    webviewPanel.onDidChangeViewState(() => {
      if (webviewPanel.visible) {
        this.activeWebview = webviewPanel.webview;
      }
    });

    webviewPanel.onDidDispose(() => {
      if (this.activeWebview === webviewPanel.webview) {
        this.activeWebview = undefined;
      }
    });
  }

  postMessageToActive(message: unknown) {
    this.activeWebview?.postMessage(message);
  }

  private getHtml(webview: vscode.Webview): string {
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.context.extensionUri, 'dist', 'webview.js')
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.context.extensionUri, 'media', 'styles.css')
    );
    const nonce = getNonce();

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}'; img-src ${webview.cspSource} blob: data:;">
  <link href="${styleUri}" rel="stylesheet">
  <title>Crystal Structure</title>
</head>
<body>
  <canvas id="canvas"></canvas>

  <!-- Top toolbar (VESTA-style) -->
  <div id="top-bar">
    <div class="bar-group" title="Axis Views">
      <button id="view-a" class="bar-btn axis-btn">a</button>
      <button id="view-b" class="bar-btn axis-btn">b</button>
      <button id="view-c" class="bar-btn axis-btn">c</button>
      <button id="view-a*" class="bar-btn axis-btn">a*</button>
      <button id="view-b*" class="bar-btn axis-btn">b*</button>
      <button id="view-c*" class="bar-btn axis-btn">c*</button>
    </div>
    <span class="bar-sep"></span>
    <div class="bar-group" title="Standard Orientation">
      <button id="std-orient" class="bar-btn" title="Standard orientation (c-axis up, view from a*)">&#x2302;</button>
    </div>
    <span class="bar-sep"></span>
    <div class="bar-group" title="Step Rotation">
      <button id="rot-up" class="bar-btn" title="Rotate up">&#x2191;</button>
      <button id="rot-down" class="bar-btn" title="Rotate down">&#x2193;</button>
      <button id="rot-left" class="bar-btn" title="Rotate left">&#x2190;</button>
      <button id="rot-right" class="bar-btn" title="Rotate right">&#x2192;</button>
      <button id="rot-ccw" class="bar-btn" title="Rotate CCW">&#x21BA;</button>
      <button id="rot-cw" class="bar-btn" title="Rotate CW">&#x21BB;</button>
      <label class="bar-label">Step(&deg;):
        <input type="number" id="step-angle" value="15" min="1" max="90" step="1" class="bar-input">
      </label>
    </div>
    <span class="bar-sep"></span>
    <div class="bar-group" title="Zoom">
      <button id="zoom-in" class="bar-btn" title="Zoom in">+</button>
      <button id="zoom-out" class="bar-btn" title="Zoom out">&minus;</button>
      <button id="zoom-fit" class="bar-btn" title="Fit to view">&#x2922;</button>
      <label class="bar-label">Step(%):
        <input type="number" id="step-zoom" value="10" min="1" max="50" step="1" class="bar-input">
      </label>
    </div>
    <span class="bar-sep"></span>
    <div class="bar-group">
      <button id="screenshot-btn" class="bar-btn" title="Screenshot">&#x1F4F7;</button>
    </div>
  </div>

  <!-- Left sidebar controls -->
  <div id="side-panel">
    <div id="info"></div>
    <div class="panel-section">
      <div class="panel-label">Style</div>
      <select id="display-style" class="panel-select">
        <option value="ball-and-stick" selected>Ball &amp; Stick</option>
        <option value="space-filling">Space-filling</option>
        <option value="stick">Stick</option>
        <option value="wireframe">Wireframe</option>
      </select>
    </div>
    <div class="panel-section">
      <div class="panel-label">Camera</div>
      <button id="camera-toggle" class="panel-btn active">Ortho</button>
    </div>
    <div class="panel-section">
      <div class="panel-label">Visibility</div>
      <div class="toggle-group">
        <label class="toggle"><input type="checkbox" id="bonds-check" checked><span>Bonds</span></label>
        <label class="toggle"><input type="checkbox" id="labels-check"><span>Labels</span></label>
        <label class="toggle"><input type="checkbox" id="poly-check"><span>Polyhedra</span></label>
      </div>
    </div>
    <div class="panel-section">
      <div class="panel-label">Supercell</div>
      <div class="sc-row">
        <input type="number" id="sc-a" value="1" min="1" max="5" class="sc-input" title="a">
        <input type="number" id="sc-b" value="1" min="1" max="5" class="sc-input" title="b">
        <input type="number" id="sc-c" value="1" min="1" max="5" class="sc-input" title="c">
      </div>
    </div>
  </div>

  <div id="tooltip" style="display:none;"></div>
  <script nonce="${nonce}" src="${scriptUri}"></script>
</body>
</html>`;
  }
}

function getNonce(): string {
  let text = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
}
