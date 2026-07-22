/**
 * Embed-build stub for `src/shared/spglibWasm` (v0.21 feat 21.6).
 *
 * The recipes/site sandbox forbids `'wasm-unsafe-eval'` and runs on `file://`
 * with no network, so the embeddable widget omits spglib entirely. esbuild
 * aliases the real module to this stub for the `matviz-embed.js` entry only, so
 * `@spglib/moyo-wasm` (521 KB) never enters the bundle.
 *
 * `withSymmetry()` in `parsers/index.ts` guards on `isSpglibReady()`; with this
 * stub it returns `false`, so structures pass through unchanged — the info pill
 * shows the CIF-declared space group when present, else `P1`. This is exactly
 * the legacy non-fatal fallback, so no renderer/UI change is needed.
 */

export interface DetectedSymmetry {
  spaceGroup: string;
  spaceGroupNumber: number;
  hallNumber: number;
  pearsonSymbol: string;
  wyckoffs: string[];
  siteSymmetrySymbols: string[];
}

export function isSpglibReady(): boolean {
  return false;
}

export function detectSymmetry(): DetectedSymmetry | null {
  return null;
}
