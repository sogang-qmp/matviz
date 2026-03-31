import { CrystalRenderer } from './renderer';
import { ExtensionMessage, DisplayStyle, CameraMode } from './message';

declare function acquireVsCodeApi(): {
  postMessage(msg: unknown): void;
  getState(): unknown;
  setState(state: unknown): void;
};

const vscode = acquireVsCodeApi();

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const info = document.getElementById('info') as HTMLDivElement;
const tooltip = document.getElementById('tooltip') as HTMLDivElement;

function sizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
sizeCanvas();
window.addEventListener('resize', sizeCanvas);

const renderer = new CrystalRenderer(canvas);

// --- Side panel controls ---

// Supercell
const scA = document.getElementById('sc-a') as HTMLInputElement;
const scB = document.getElementById('sc-b') as HTMLInputElement;
const scC = document.getElementById('sc-c') as HTMLInputElement;
function updateSupercell() {
  renderer.setSupercell([parseInt(scA.value) || 1, parseInt(scB.value) || 1, parseInt(scC.value) || 1]);
}
scA.addEventListener('change', updateSupercell);
scB.addEventListener('change', updateSupercell);
scC.addEventListener('change', updateSupercell);

// Display style
const styleSelect = document.getElementById('display-style') as HTMLSelectElement;
if (styleSelect) {
  styleSelect.addEventListener('change', () => renderer.setDisplayStyle(styleSelect.value as DisplayStyle));
}

// Camera toggle
const cameraBtn = document.getElementById('camera-toggle') as HTMLButtonElement;
if (cameraBtn) {
  cameraBtn.addEventListener('click', () => {
    const mode: CameraMode = renderer.getCameraMode() === 'orthographic' ? 'perspective' : 'orthographic';
    renderer.setCameraMode(mode);
    cameraBtn.textContent = mode === 'orthographic' ? 'Ortho' : 'Persp';
    cameraBtn.classList.toggle('active', mode === 'orthographic');
  });
}

// Visibility checkboxes
const bondsCheck = document.getElementById('bonds-check') as HTMLInputElement;
const labelsCheck = document.getElementById('labels-check') as HTMLInputElement;
const polyCheck = document.getElementById('poly-check') as HTMLInputElement;

if (bondsCheck) bondsCheck.addEventListener('change', () => renderer.toggleBonds());
if (labelsCheck) labelsCheck.addEventListener('change', () => renderer.toggleLabels());
if (polyCheck) polyCheck.addEventListener('change', () => renderer.togglePolyhedra());

// --- Top bar controls ---

// Axis views
const axisButtons = ['a', 'b', 'c', 'a*', 'b*', 'c*'] as const;
for (const axis of axisButtons) {
  const btn = document.getElementById(`view-${axis}`) as HTMLButtonElement;
  if (btn) btn.addEventListener('click', () => renderer.viewAlongAxis(axis));
}

// Standard orientation
const stdBtn = document.getElementById('std-orient') as HTMLButtonElement;
if (stdBtn) stdBtn.addEventListener('click', () => renderer.standardOrientation());

// Step angle / zoom inputs
const stepAngleInput = document.getElementById('step-angle') as HTMLInputElement;
const stepZoomInput = document.getElementById('step-zoom') as HTMLInputElement;

function getStepAngle(): number { return parseFloat(stepAngleInput?.value) || 15; }
function getStepZoom(): number { return (parseFloat(stepZoomInput?.value) || 10) / 100; }

// Rotation buttons
const rotMap: Record<string, [number, 'x' | 'y' | 'z']> = {
  'rot-up':    [-1, 'x'],
  'rot-down':  [1,  'x'],
  'rot-left':  [-1, 'y'],
  'rot-right': [1,  'y'],
  'rot-ccw':   [-1, 'z'],
  'rot-cw':    [1,  'z'],
};
for (const [id, [sign, axis]] of Object.entries(rotMap)) {
  const btn = document.getElementById(id) as HTMLButtonElement;
  if (btn) btn.addEventListener('click', () => renderer.rotateCamera(sign * getStepAngle(), axis));
}

// Zoom buttons
const zoomInBtn = document.getElementById('zoom-in') as HTMLButtonElement;
const zoomOutBtn = document.getElementById('zoom-out') as HTMLButtonElement;
const zoomFitBtn = document.getElementById('zoom-fit') as HTMLButtonElement;

if (zoomInBtn) zoomInBtn.addEventListener('click', () => renderer.zoom(1 - getStepZoom()));
if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => renderer.zoom(1 + getStepZoom()));
if (zoomFitBtn) zoomFitBtn.addEventListener('click', () => renderer.resetCamera());

// Screenshot
const screenshotBtn = document.getElementById('screenshot-btn') as HTMLButtonElement;
if (screenshotBtn) {
  screenshotBtn.addEventListener('click', () => {
    const dataUrl = renderer.exportScreenshot(2);
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'crystal_screenshot.png';
    link.click();
  });
}

// --- Keyboard controls ---
window.addEventListener('keydown', (e) => {
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
  const step = e.shiftKey ? 1 : getStepAngle();
  switch (e.key) {
    case 'ArrowUp':    renderer.rotateCamera(-step, 'x'); e.preventDefault(); break;
    case 'ArrowDown':  renderer.rotateCamera(step,  'x'); e.preventDefault(); break;
    case 'ArrowLeft':  renderer.rotateCamera(-step, 'y'); e.preventDefault(); break;
    case 'ArrowRight': renderer.rotateCamera(step,  'y'); e.preventDefault(); break;
    case '+': case '=': renderer.zoom(1 - getStepZoom()); e.preventDefault(); break;
    case '-':           renderer.zoom(1 + getStepZoom()); e.preventDefault(); break;
    case 'Escape':
      renderer.clearSelection();
      renderer.clearMeasurements();
      tooltip.style.display = 'none';
      break;
  }
});

// --- Picking callbacks ---
renderer.setAtomSelectCallback((data) => {
  if (data) {
    tooltip.style.display = 'block';
    tooltip.style.left = '150px';
    tooltip.style.bottom = '8px';
    tooltip.style.top = 'auto';
    const f = data.fractional;
    tooltip.innerHTML = `<b>${data.element}</b> #${data.index}<br>` +
      `Cart: (${data.cartesian[0].toFixed(3)}, ${data.cartesian[1].toFixed(3)}, ${data.cartesian[2].toFixed(3)})<br>` +
      `Frac: (${f[0].toFixed(4)}, ${f[1].toFixed(4)}, ${f[2].toFixed(4)})`;
    vscode.postMessage({ type: 'atomSelected', data });
  } else {
    tooltip.style.display = 'none';
  }
});

renderer.setMeasurementCallback((data) => {
  const unit = data.type === 'distance' ? ' \u00C5' : '\u00B0';
  tooltip.style.display = 'block';
  tooltip.innerHTML += `<br>${data.type}: ${data.value.toFixed(3)}${unit}`;
  vscode.postMessage({ type: 'measurement', data });
});

// --- Theme ---
const mq = window.matchMedia('(prefers-color-scheme: dark)');
mq.addEventListener('change', () => renderer.updateTheme());
new MutationObserver(() => renderer.updateTheme())
  .observe(document.body, { attributes: true, attributeFilter: ['class', 'data-vscode-theme-kind'] });

// --- State persistence ---
function saveState() { vscode.setState(renderer.getState()); }
const debouncedSave = debounce(saveState, 500);
window.addEventListener('pointerup', debouncedSave);
window.addEventListener('wheel', debouncedSave);

const savedState = vscode.getState() as ReturnType<typeof renderer.getState> | null;
if (savedState) {
  renderer.restoreState(savedState);
  if (scA && savedState.supercell) {
    scA.value = String(savedState.supercell[0]);
    scB.value = String(savedState.supercell[1]);
    scC.value = String(savedState.supercell[2]);
  }
  if (styleSelect && savedState.displayStyle) styleSelect.value = savedState.displayStyle;
  if (cameraBtn && savedState.cameraMode) {
    cameraBtn.textContent = savedState.cameraMode === 'orthographic' ? 'Ortho' : 'Persp';
    cameraBtn.classList.toggle('active', savedState.cameraMode === 'orthographic');
  }
}

function debounce(fn: () => void, ms: number): () => void {
  let timer: number;
  return () => { clearTimeout(timer); timer = window.setTimeout(fn, ms); };
}

// --- Extension messages ---
window.addEventListener('message', (event) => {
  const msg = event.data as ExtensionMessage;
  switch (msg.type) {
    case 'loadStructure': {
      renderer.loadStructure(msg.data);
      const si = renderer.getStructureInfo();
      if (si) {
        const cp = si.cellParams;
        let txt = `${si.formula} | ${si.atomCount} atoms | ${si.spaceGroup}`;
        if (cp) txt += ` | a=${cp.a.toFixed(2)} b=${cp.b.toFixed(2)} c=${cp.c.toFixed(2)}`;
        txt += ` | V=${si.volume.toFixed(1)} \u00C5\u00B3`;
        info.textContent = txt;
      } else {
        info.textContent = `${msg.data.species.length} atoms | ${msg.data.title || ''}`;
      }
      break;
    }
    case 'resetCamera': renderer.resetCamera(); break;
    case 'toggleBonds': renderer.toggleBonds(); break;
    case 'viewAlongDirection': renderer.viewAlongDirection(msg.uvw); break;
    case 'viewNormalToPlane': renderer.viewNormalToPlane(msg.hkl); break;
    case 'addLatticePlane': renderer.addLatticePlane(msg.hkl, msg.distance); break;
    case 'clearLatticePlanes': renderer.clearLatticePlanes(); break;
    case 'loadVolumetric': renderer.loadVolumetric(msg.data); break;
  }
});

vscode.postMessage({ type: 'ready' });
