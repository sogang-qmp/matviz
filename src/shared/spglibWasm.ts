/**
 * Spglib (via @spglib/moyo-wasm) symmetry detection — shared between the
 * webview and the CLI renderer. Same TypeScript wrapper, two callers; only
 * the WASM URL bootstrap differs:
 *   - webview: `init('<webview-resource-uri>/moyo_wasm_bg.wasm')`
 *   - CLI:     `init('file:///abs/path/to/moyo_wasm_bg.wasm')` or via
 *              `initSync(buffer)` from `fs.readFileSync(...)`.
 *
 * Locked to package `@spglib/moyo-wasm@^0.7.9` (spglib org's official Rust
 * port). API surface used: `analyze_cell(cellJson, symprec, setting) →
 * MoyoDataset`. Wyckoff labels and operations are returned alongside space
 * group / Hermann-Mauguin so v0.20.x bonus features unlock without a
 * second WASM call.
 */

import init, { initSync, analyze_cell, type MoyoDataset } from '@spglib/moyo-wasm';

let ready: Promise<void> | null = null;

/**
 * One-time initializer — idempotent. Pass either a URL (webview / fetch
 * path) or a precompiled `WebAssembly.Module` / buffer (Node CLI).
 *
 * Webview recipe:
 *   await initSpglib(webviewUri.toString())
 * CLI recipe:
 *   import { readFileSync } from 'node:fs';
 *   initSpglibSync(readFileSync(wasmPath));
 */
export function initSpglib(urlOrBuffer: string | URL | BufferSource): Promise<void> {
  if (ready) return ready;
  ready = (async () => {
    if (typeof urlOrBuffer === 'string' || urlOrBuffer instanceof URL) {
      await init({ module_or_path: urlOrBuffer });
    } else {
      // wasm-bindgen accepts BufferSource as InitInput too; init() handles it.
      await init({ module_or_path: urlOrBuffer });
    }
  })();
  return ready;
}

/**
 * Synchronous initializer for environments where the WASM bytes are already
 * loaded (Node FS, inline base64). Throws if the buffer fails to instantiate.
 */
export function initSpglibSync(buffer: BufferSource): void {
  initSync({ module: buffer });
  ready = Promise.resolve();
}

/** Has spglib been initialized in this session? Cheap synchronous check. */
export function isSpglibReady(): boolean {
  return ready !== null;
}

export interface DetectedSymmetry {
  spaceGroup: string;        // Hermann-Mauguin, e.g. "Fd-3m"
  spaceGroupNumber: number;  // 1..230
  hallNumber: number;        // 1..530
  pearsonSymbol: string;     // e.g. "cF8" for diamond
  wyckoffs: string[];        // per-atom Wyckoff letter (e.g. "8a")
  siteSymmetrySymbols: string[]; // per-atom site-symmetry symbol
}

/**
 * Detect crystallographic symmetry. Returns null when:
 *   - spglib is not yet initialized (caller should `await initSpglib` first), or
 *   - moyo throws (degenerate lattice, zero-volume cell, NaN positions).
 *
 * Inputs are Cartesian; we convert to fractional internally because moyo
 * expects fractional coordinates per its `MoyoCell.positions` schema.
 */
export function detectSymmetry(
  lattice: [number, number, number][],
  cartesianPositions: [number, number, number][],
  species: string[],
  symprec = 1e-3,
): DetectedSymmetry | null {
  if (!isSpglibReady()) return null;
  if (cartesianPositions.length === 0) return null;

  const inv = invert3x3(lattice);
  if (!inv) return null;

  // Cartesian → fractional. With basis vectors as ROWS of `lattice`, the
  // standard r_cart = f_a*a + f_b*b + f_c*c relationship is r = (lattice^T) f
  // — so f = (lattice^T)^{-1} r = (lattice^{-1})^T r. Hence we index the
  // inverse by [k][j] (transposed) rather than [j][k] when multiplying.
  const fractional: [number, number, number][] = cartesianPositions.map(p => [
    inv[0][0] * p[0] + inv[1][0] * p[1] + inv[2][0] * p[2],
    inv[0][1] * p[0] + inv[1][1] * p[1] + inv[2][1] * p[2],
    inv[0][2] * p[0] + inv[1][2] * p[1] + inv[2][2] * p[2],
  ]);

  const numbers = species.map(symbolToZ);

  const cell = {
    lattice: {
      basis: [
        lattice[0][0], lattice[0][1], lattice[0][2],
        lattice[1][0], lattice[1][1], lattice[1][2],
        lattice[2][0], lattice[2][1], lattice[2][2],
      ] as [number, number, number, number, number, number, number, number, number],
    },
    positions: fractional,
    numbers,
  };

  let dataset: MoyoDataset;
  try {
    dataset = analyze_cell(JSON.stringify(cell), symprec, 'Spglib');
  } catch {
    return null;
  }

  return {
    // moyo emits HM with spaces ("I m -3 m"); strip to compact form
    // ("Im-3m") so it matches matviz's existing CIF-parser output and the
    // info-pill rendering convention.
    spaceGroup: dataset.hm_symbol.replace(/\s+/g, ''),
    spaceGroupNumber: dataset.number,
    hallNumber: dataset.hall_number,
    pearsonSymbol: dataset.pearson_symbol,
    wyckoffs: dataset.wyckoffs,
    siteSymmetrySymbols: dataset.site_symmetry_symbols,
  };
}

// --- helpers ---

function invert3x3(m: [number, number, number][]): [number, number, number][] | null {
  const a = m[0][0], b = m[0][1], c = m[0][2];
  const d = m[1][0], e = m[1][1], f = m[1][2];
  const g = m[2][0], h = m[2][1], i = m[2][2];
  const det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
  if (Math.abs(det) < 1e-12) return null;
  const invDet = 1 / det;
  return [
    [(e * i - f * h) * invDet, (c * h - b * i) * invDet, (b * f - c * e) * invDet],
    [(f * g - d * i) * invDet, (a * i - c * g) * invDet, (c * d - a * f) * invDet],
    [(d * h - e * g) * invDet, (b * g - a * h) * invDet, (a * e - b * d) * invDet],
  ];
}

// Element symbol → atomic number. Trimmed to elements seen in matviz fixtures
// + everything 1..103. This mirrors `src/shared/elements-data.ts` but we only
// need the Z mapping here (no radius/color).
const Z_MAP: Record<string, number> = {
  H:1,He:2,Li:3,Be:4,B:5,C:6,N:7,O:8,F:9,Ne:10,
  Na:11,Mg:12,Al:13,Si:14,P:15,S:16,Cl:17,Ar:18,
  K:19,Ca:20,Sc:21,Ti:22,V:23,Cr:24,Mn:25,Fe:26,Co:27,Ni:28,Cu:29,Zn:30,
  Ga:31,Ge:32,As:33,Se:34,Br:35,Kr:36,
  Rb:37,Sr:38,Y:39,Zr:40,Nb:41,Mo:42,Tc:43,Ru:44,Rh:45,Pd:46,Ag:47,Cd:48,
  In:49,Sn:50,Sb:51,Te:52,I:53,Xe:54,
  Cs:55,Ba:56,La:57,Ce:58,Pr:59,Nd:60,Pm:61,Sm:62,Eu:63,Gd:64,Tb:65,Dy:66,
  Ho:67,Er:68,Tm:69,Yb:70,Lu:71,
  Hf:72,Ta:73,W:74,Re:75,Os:76,Ir:77,Pt:78,Au:79,Hg:80,Tl:81,Pb:82,Bi:83,
  Po:84,At:85,Rn:86,
  Fr:87,Ra:88,Ac:89,Th:90,Pa:91,U:92,Np:93,Pu:94,Am:95,Cm:96,Bk:97,Cf:98,
  Es:99,Fm:100,Md:101,No:102,Lr:103,
};

function symbolToZ(symbol: string): number {
  return Z_MAP[symbol] ?? 0;
}
