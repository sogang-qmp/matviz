/**
 * Collapsed-by-default chrome for the embeddable widget (v0.21 feat 21.4).
 *
 * Page-inside means the canvas IS the figure; controls recede. On mount only a
 * small ⋯ affordance (top-right) and a low-chrome info caption (bottom-left)
 * show; clicking ⋯ reveals a compact control panel. Esc / click-away / re-click
 * collapse it. Built fresh on top of `CrystalRenderer` — it does NOT port the
 * VSCode webview chrome (phases / comparison / trajectory / wulff panels are
 * overkill for a page figure).
 *
 * Styling: one `<style>` injected per page (inline styles are allowed by the
 * recipes/site sandbox CSP). Colors reference the host CSS vars
 * (`--fg`/`--border`/`--accent`) with fallbacks; aux text uses `opacity` per the
 * house rule, so the chrome adapts to the host light/dark theme for free.
 */
import type { CrystalRenderer } from '../renderer';
import type { DisplayStyle } from '../message';
import type { Colormap } from '../vectorArrowRenderer';

const STYLE_ID = 'matviz-embed-css';
const CSS = `
.mv-root{position:relative}
.mv-info{position:absolute;left:9px;bottom:8px;font:12px/1.4 system-ui,-apple-system,sans-serif;
  opacity:.6;pointer-events:none;color:var(--fg,currentColor);text-shadow:0 0 3px var(--bg,transparent)}
.mv-info b{font-weight:650;opacity:.95}
.mv-toggle{position:absolute;top:8px;right:8px;width:28px;height:28px;display:flex;align-items:center;
  justify-content:center;border:1px solid var(--border,rgba(128,128,128,.35));border-radius:6px;
  background:var(--bg,rgba(127,127,127,.10));color:var(--fg,currentColor);opacity:.5;cursor:pointer;
  font-size:16px;line-height:1;padding:0}
.mv-toggle:hover{opacity:1}
.mv-panel{position:absolute;top:42px;right:8px;display:none;flex-direction:column;gap:9px;padding:11px;
  min-width:186px;border:1px solid var(--border,rgba(128,128,128,.35));border-radius:8px;
  background:var(--bg,#fff);box-shadow:0 6px 20px rgba(0,0,0,.20);
  font:12px system-ui,-apple-system,sans-serif;color:var(--fg,currentColor);z-index:3}
.mv-root[data-open] .mv-panel{display:flex}
.mv-row{display:flex;flex-wrap:wrap;gap:5px;align-items:center}
.mv-lbl{opacity:.6;font-size:11px;min-width:62px}
.mv-chip,.mv-btn{border:1px solid var(--border,rgba(128,128,128,.4));background:transparent;color:inherit;
  cursor:pointer;font-size:11.5px;opacity:.72}
.mv-chip{padding:3px 8px;border-radius:12px}
.mv-btn{padding:3px 9px;border-radius:6px}
.mv-chip:hover,.mv-btn:hover{opacity:1}
.mv-chip[aria-pressed=true],.mv-btn[aria-pressed=true]{opacity:1;border-color:var(--accent,#3a6ea5);color:var(--accent,#3a6ea5);font-weight:600}
.mv-step{display:inline-flex;align-items:center;gap:3px}
.mv-step button{width:20px;height:20px;border:1px solid var(--border,rgba(128,128,128,.4));border-radius:4px;
  background:transparent;color:inherit;cursor:pointer;line-height:1;font-size:13px;padding:0;opacity:.8}
.mv-step button:hover{opacity:1}
.mv-step span{min-width:12px;text-align:center;font-variant-numeric:tabular-nums}
.mv-slider{width:100%;accent-color:var(--accent,#3a6ea5)}
`;

function injectStyleOnce(): void {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = CSS;
  document.head.appendChild(s);
}

const STYLES: Array<{ key: DisplayStyle; label: string }> = [
  { key: 'ball-and-stick', label: 'Ball & stick' },
  { key: 'space-filling', label: 'Space-filling' },
  { key: 'stick', label: 'Stick' },
  { key: 'wireframe', label: 'Wireframe' },
];

export interface EmbedUIOptions {
  collapsed?: boolean;                 // default true
  supercell?: [number, number, number];
}

/** Build the collapsed chrome inside `host`. Returns a cleanup fn. */
export function createEmbedUI(
  host: HTMLElement,
  renderer: CrystalRenderer,
  opts: EmbedUIOptions = {},
): () => void {
  injectStyleOnce();
  host.classList.add('mv-root');

  const el = (tag: string, cls?: string) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    return n;
  };

  // ---- info caption (bottom-left, low chrome) ----
  const info = el('div', 'mv-info');
  const si = renderer.getStructureInfo();
  if (si) {
    const bits = [`<b>${si.formula}</b>`];
    if (si.spaceGroup) bits.push(si.spaceGroup);
    bits.push(`<b>${si.atomCount}</b> atoms`);
    if (si.volume) bits.push(`<b>${si.volume.toFixed(1)}</b> Å³`);
    info.innerHTML = bits.join(' · ');
  }
  host.appendChild(info);

  // ---- toggle affordance (top-right) ----
  const toggle = el('button', 'mv-toggle') as HTMLButtonElement;
  toggle.type = 'button';
  toggle.title = 'Controls';
  toggle.setAttribute('aria-label', 'Toggle controls');
  toggle.textContent = '⋯'; // ⋯
  host.appendChild(toggle);

  // ---- control panel ----
  const panel = el('div', 'mv-panel');

  // style chips
  const styleRow = el('div', 'mv-row');
  const styleLbl = el('span', 'mv-lbl'); styleLbl.textContent = 'Style';
  styleRow.appendChild(styleLbl);
  const chips: HTMLButtonElement[] = [];
  const syncChips = () => {
    const cur = renderer.getDisplayStyle();
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.style === cur)));
  };
  STYLES.forEach(({ key, label }) => {
    const c = el('button', 'mv-chip') as HTMLButtonElement;
    c.type = 'button'; c.textContent = label; c.dataset.style = key;
    c.addEventListener('click', () => { renderer.setDisplayStyle(key); syncChips(); });
    chips.push(c); styleRow.appendChild(c);
  });
  panel.appendChild(styleRow);

  // supercell steppers
  const sc: [number, number, number] = opts.supercell ? [...opts.supercell] : [1, 1, 1];
  const scRow = el('div', 'mv-row');
  const scLbl = el('span', 'mv-lbl'); scLbl.textContent = 'Supercell';
  scRow.appendChild(scLbl);
  (['a', 'b', 'c'] as const).forEach((_, i) => {
    const step = el('span', 'mv-step');
    const dec = el('button') as HTMLButtonElement; dec.type = 'button'; dec.textContent = '−';
    const val = el('span'); val.textContent = String(sc[i]);
    const inc = el('button') as HTMLButtonElement; inc.type = 'button'; inc.textContent = '+';
    const apply = () => { val.textContent = String(sc[i]); renderer.setSupercell([...sc] as [number, number, number]); };
    dec.addEventListener('click', () => { if (sc[i] > 1) { sc[i]--; apply(); } });
    inc.addEventListener('click', () => { if (sc[i] < 8) { sc[i]++; apply(); } });
    step.append(dec, val, inc);
    scRow.appendChild(step);
  });
  panel.appendChild(scRow);

  // iso slider (volumetric only)
  const isoRange = renderer.getIsoRange();
  if (isoRange && isoRange.max > 0) {
    const isoRow = el('div', 'mv-row');
    const isoLbl = el('span', 'mv-lbl'); isoLbl.textContent = 'Isolevel';
    const slider = el('input', 'mv-slider') as HTMLInputElement;
    slider.type = 'range'; slider.min = '0'; slider.max = String(isoRange.max);
    slider.step = String(isoRange.max / 200); slider.value = String(renderer.getIsoLevel());
    slider.addEventListener('input', () => renderer.setIsoLevel(parseFloat(slider.value)));
    isoRow.append(isoLbl, slider);
    panel.appendChild(isoRow);
  }

  // actions
  const actRow = el('div', 'mv-row');
  const resetBtn = el('button', 'mv-btn') as HTMLButtonElement;
  resetBtn.type = 'button'; resetBtn.textContent = 'Reset view';
  resetBtn.addEventListener('click', () => renderer.resetCamera());
  const bondsBtn = el('button', 'mv-btn') as HTMLButtonElement;
  bondsBtn.type = 'button'; bondsBtn.textContent = 'Bonds';
  bondsBtn.addEventListener('click', () => renderer.toggleBonds());
  actRow.append(resetBtn, bondsBtn);

  // Vectors toggle — only when the structure carries per-atom vectors
  // (magmom / forces). Reflects the current show state.
  if (renderer.hasAtomVectors()) {
    const vecBtn = el('button', 'mv-btn') as HTMLButtonElement;
    vecBtn.type = 'button';
    const info = renderer.getAtomVectorInfo();
    vecBtn.textContent = info?.kind === 'magmom' ? 'Moments' : 'Vectors';
    vecBtn.setAttribute('aria-pressed', String(renderer.getShowAtomVectors()));
    vecBtn.addEventListener('click', () => {
      const on = !renderer.getShowAtomVectors();
      renderer.setShowAtomVectors(on);
      vecBtn.setAttribute('aria-pressed', String(on));
    });
    actRow.append(vecBtn);
  }
  panel.appendChild(actRow);

  // Arrow color mode — Red–blue (sign-coded) vs Single (one color). Only shown
  // when the structure carries vectors.
  if (renderer.hasAtomVectors()) {
    const vcRow = el('div', 'mv-row');
    const vcLbl = el('span', 'mv-lbl'); vcLbl.textContent = 'Arrows';
    vcRow.appendChild(vcLbl);
    const modes: Array<[Colormap, string]> = [['redblue', 'Red–blue'], ['single', 'Single']];
    const vchips: HTMLButtonElement[] = [];
    const syncVc = () => {
      const cur = renderer.getVectorColormap();
      vchips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.cm === cur)));
    };
    modes.forEach(([cm, label]) => {
      const c = el('button', 'mv-chip') as HTMLButtonElement;
      c.type = 'button'; c.textContent = label; c.dataset.cm = cm;
      c.addEventListener('click', () => { renderer.setVectorColormap(cm); syncVc(); });
      vchips.push(c); vcRow.appendChild(c);
    });
    syncVc();
    panel.appendChild(vcRow);
  }

  host.appendChild(panel);
  syncChips();

  // ---- collapse / expand ----
  const setOpen = (open: boolean) => {
    if (open) host.setAttribute('data-open', '');
    else host.removeAttribute('data-open');
  };
  setOpen(opts.collapsed === false);

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!host.hasAttribute('data-open'));
  });
  const onDocPointer = (e: Event) => {
    if (!host.hasAttribute('data-open')) return;
    const t = e.target as Node;
    if (!panel.contains(t) && t !== toggle) setOpen(false);
  };
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
  document.addEventListener('pointerdown', onDocPointer);
  document.addEventListener('keydown', onKey);

  return () => {
    document.removeEventListener('pointerdown', onDocPointer);
    document.removeEventListener('keydown', onKey);
    info.remove(); toggle.remove(); panel.remove();
    host.classList.remove('mv-root');
  };
}
