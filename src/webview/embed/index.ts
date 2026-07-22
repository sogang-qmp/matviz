/**
 * matviz embeddable widget — v0.21 (feat 21.1).
 *
 * Self-contained IIFE exposing `window.MatViz`. Renders a crystal structure into
 * a page element from INLINE data — no VSCode, no extension host, no network,
 * `file://`-safe. Parsing runs in-page; rendering reuses the same
 * `CrystalRenderer` as the VSCode webview and CLI.
 *
 * Recipe idiom (mirrors sogang-qmp/recipes + 112-Gd2C-H/site):
 *
 *   <div id="fig1-viewer" style="position:relative;height:440px"></div>
 *   <script type="text/plain" id="fig1-data">
 *   ...CIF / POSCAR / XSF text...
 *   </script>
 *   <script src="../../assets/lib/matviz-embed.js"></script>
 *   <script>MatViz.mount("fig1", { theme: "auto" })</script>
 *
 * Theme follows the host: `theme:"auto"` reads `<html data-theme>` (the site
 * shell's signal) and `prefers-color-scheme`, and reacts live. The canvas
 * background already tracks the page `body` background (renderer reads it), so
 * the widget blends into the page card in both themes.
 *
 * Scope note (21.1): this is the render core + minimal theme wiring. The
 * collapsed-by-default chrome (21.4) and the full mount API surface (21.3) land
 * in later features.
 */
import { CrystalRenderer } from '../renderer';
import { parseStructureFileTraj } from '../../parsers/index';
import { createEmbedUI } from './ui';
import type { DisplayStyle } from '../message';
import type { ColorPalette } from '../../shared/elements-palette';

export interface MountOptions {
  /** Structure text. If omitted, read from `#{prefix}-data` textContent. */
  data?: string;
  /** Format hint (`cif`/`poscar`/`xsf`/...) for parser dispatch; else content sniff. */
  format?: string;
  /** Explicit filename for parser dispatch (overrides `format`). */
  filename?: string;
  /** `auto` (default) follows the host; `light`/`dark` pin it. */
  theme?: ThemeMode;
  /** Host attribute carrying the theme (default `data-theme`). */
  themeAttribute?: string;
  /** Element whose attribute is observed (default `document.documentElement`). */
  themeTarget?: Element;
  supercell?: [number, number, number];
  style?: DisplayStyle;
  /** Isosurface level for volumetric data. */
  iso?: number;
  /** Start with the control panel collapsed (default true — page-inside figure). */
  collapsed?: boolean;
  /** Show the per-atom vector overlay (magnetic moments / forces). Default: on
   *  when the structure carries non-zero vectors; pass `false` to suppress. */
  vectors?: boolean;
}

export type ThemeMode = 'auto' | 'light' | 'dark';

export interface MatvizInstance {
  prefix: string;
  renderer: CrystalRenderer;
  setTheme(theme: ThemeMode): void;
  dispose(): void;
}

// Format hint → a filename the parser dispatcher recognizes by extension.
const FILENAME_BY_FORMAT: Record<string, string> = {
  cif: 'structure.cif',
  poscar: 'POSCAR', contcar: 'CONTCAR', vasp: 'structure.vasp',
  xsf: 'structure.xsf', axsf: 'structure.axsf',
  xyz: 'structure.xyz', pdb: 'structure.pdb',
  cube: 'structure.cube', chgcar: 'CHGCAR',
  'geometry.in': 'geometry.in', aims: 'geometry.in',
};

/**
 * Make the a/b/c axis indicator draggable with **right-click** (parity with the
 * VSCode webview). A capture-phase pointerdown over the gizmo rect claims the
 * drag and `stopImmediatePropagation()` so neither the renderer's rotation
 * (left) nor OrbitControls' pan (right, bubble-phase) fires; a right-click
 * anywhere else falls through to normal pan. The canvas `contextmenu` is
 * suppressed so the browser menu doesn't interrupt the drag. Offset math
 * mirrors `main.ts` (bottom-right anchor).
 */
function attachAxisDrag(canvas: HTMLCanvasElement, renderer: CrystalRenderer): () => void {
  let dragging = false, pid = -1, grabX = 0, grabY = 0;
  const overGizmo = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left, py = e.clientY - rect.top;
    const a = renderer.getAxisIndicatorRect();
    return px >= a.x && px <= a.x + a.w && py >= a.y && py <= a.y + a.h ? { px, py, a } : null;
  };
  const onDown = (e: PointerEvent) => {
    if (e.button !== 2) return; // right-click
    const hit = overGizmo(e);
    if (!hit) return;
    dragging = true; pid = e.pointerId;
    grabX = hit.px - hit.a.x; grabY = hit.py - hit.a.y;
    canvas.setPointerCapture(e.pointerId);
    e.preventDefault(); e.stopImmediatePropagation();
  };
  const onMove = (e: PointerEvent) => {
    if (!dragging || e.pointerId !== pid) {
      // hover affordance
      if (!dragging) canvas.style.cursor = overGizmo(e) ? 'move' : '';
      return;
    }
    const rect = canvas.getBoundingClientRect();
    const newX = (e.clientX - rect.left) - grabX;
    const newY = (e.clientY - rect.top) - grabY;
    const size = renderer.getAxisIndicatorSize();
    const baseX = canvas.clientWidth - 16 - size;
    const baseY = canvas.clientHeight - 16 - size;
    renderer.setAxisIndicatorOffset(baseX - newX, baseY - newY);
    e.preventDefault(); e.stopImmediatePropagation();
  };
  const onUp = (e: PointerEvent) => {
    if (e.pointerId !== pid) return;
    dragging = false; pid = -1;
    try { canvas.releasePointerCapture(e.pointerId); } catch { /* ignore */ }
  };
  const onContextMenu = (e: Event) => e.preventDefault();
  const opts = { capture: true } as const;
  canvas.addEventListener('pointerdown', onDown, opts);
  canvas.addEventListener('pointermove', onMove, opts);
  canvas.addEventListener('pointerup', onUp, opts);
  canvas.addEventListener('pointercancel', onUp, opts);
  canvas.addEventListener('contextmenu', onContextMenu);
  return () => {
    canvas.removeEventListener('pointerdown', onDown, opts);
    canvas.removeEventListener('pointermove', onMove, opts);
    canvas.removeEventListener('pointerup', onUp, opts);
    canvas.removeEventListener('pointercancel', onUp, opts);
    canvas.removeEventListener('contextmenu', onContextMenu);
  };
}

function resolveTheme(mode: ThemeMode, target: Element, attr: string): ColorPalette {
  if (mode === 'light' || mode === 'dark') return mode;
  const v = target.getAttribute(attr);
  if (v === 'dark' || v === 'light') return v;
  return typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function mount(prefix: string, opts: MountOptions = {}): MatvizInstance | null {
  const host = document.getElementById(prefix + '-viewer');
  if (!host) {
    console.error(`[matviz] mount("${prefix}"): no element #${prefix}-viewer`);
    return null;
  }

  const dataEl = document.getElementById(prefix + '-data');
  const text = (opts.data ?? dataEl?.textContent ?? '').trim();
  if (!text) {
    console.error(`[matviz] mount("${prefix}"): no structure data (pass opts.data or add #${prefix}-data)`);
    return null;
  }

  const filename = opts.filename
    ?? (opts.format ? (FILENAME_BY_FORMAT[opts.format.toLowerCase()] ?? 'structure.' + opts.format) : 'structure');

  let result: ReturnType<typeof parseStructureFileTraj>;
  try {
    result = parseStructureFileTraj(text, filename);
  } catch (e) {
    console.error(`[matviz] mount("${prefix}"): parse failed —`, e);
    return null;
  }

  // Canvas fills the host card; renderer self-wires orbit/zoom/pick + resize.
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'width:100%;height:100%;display:block';
  if (!host.style.position) host.style.position = 'relative';
  host.appendChild(canvas);

  const renderer = new CrystalRenderer(canvas);
  const axisDragCleanup = attachAxisDrag(canvas, renderer);

  const themeTarget = opts.themeTarget ?? document.documentElement;
  const themeAttr = opts.themeAttribute ?? 'data-theme';
  let themeMode: ThemeMode = opts.theme ?? 'auto';
  const applyTheme = () => {
    // Palette drives atom colors; canvas bg auto-follows the page body bg.
    renderer.setColorPalette(resolveTheme(themeMode, themeTarget, themeAttr));
    renderer.updateTheme();
  };
  applyTheme();

  if (opts.supercell) renderer.setSupercell(opts.supercell);
  if (opts.style) renderer.setDisplayStyle(opts.style);

  renderer.loadTrajectory(result.trajectory);

  if (result.volumetric) {
    renderer.loadVolumetric(result.volumetric);
    if (typeof opts.iso === 'number') renderer.setIsoLevel(opts.iso);
  }

  // Per-atom vectors (magmom / forces): show by default when the structure
  // carries them — that's usually the point of the figure. `vectors:false` opts out.
  if (opts.vectors !== false && renderer.hasAtomVectors()) {
    renderer.setShowAtomVectors(true);
  }

  // Collapsed-by-default chrome (21.4). Built after load so the info caption +
  // iso slider reflect the parsed structure.
  const uiCleanup = createEmbedUI(host, renderer, {
    collapsed: opts.collapsed,
    supercell: opts.supercell,
  });

  // Reactive theme (21.5, minimal): observe the host attribute + OS preference.
  const cleanups: Array<() => void> = [];
  if (themeMode === 'auto') {
    const obs = new MutationObserver(applyTheme);
    obs.observe(themeTarget, { attributes: true, attributeFilter: [themeAttr, 'class'] });
    cleanups.push(() => obs.disconnect());
    if (typeof window.matchMedia === 'function') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const onChange = () => applyTheme();
      mq.addEventListener('change', onChange);
      cleanups.push(() => mq.removeEventListener('change', onChange));
    }
  }

  return {
    prefix,
    renderer,
    setTheme(t: ThemeMode) { themeMode = t; applyTheme(); },
    dispose() {
      cleanups.forEach((fn) => fn());
      axisDragCleanup();
      uiCleanup();
      canvas.remove();
    },
  };
}

// ---- Global surface (window.MatViz) ------------------------------------
const instances = new Map<string, MatvizInstance>();

function mountTracked(prefix: string, opts?: MountOptions): MatvizInstance | null {
  instances.get(prefix)?.dispose();
  const inst = mount(prefix, opts);
  if (inst) instances.set(prefix, inst);
  return inst;
}

function setTheme(prefix: string, theme: ThemeMode): void {
  instances.get(prefix)?.setTheme(theme);
}

const api = { mount: mountTracked, setTheme, version: '0.21.0' };
(window as unknown as { MatViz: typeof api }).MatViz = api;

export default api;
