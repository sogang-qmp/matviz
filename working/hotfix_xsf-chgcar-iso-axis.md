# Hotfix — XSF/CHGCAR isosurface axis order (2026-04-16)

## Symptom

User opened `h2_PARCHG.0054.0019.xsf` (a VASP PARCHG for a 12-layer Gd2CH2/H slab, grid 49×49×673) and reported that the isosurface looked wrong. The max-density region did not coincide with the H atoms the PARCHG was built from.

## Root cause

`src/webview/marchingCubes.ts` indexes the volumetric data array in C order:

```ts
function getVal(ix, iy, iz) { return data[ix * ny * nz + iy * nz + iz]; }
```

But the two parsers that feed it were storing file tokens linearly as read:

- `src/parsers/xsfParser.ts` — XSF spec writes `data(ix,iy,iz)` with **ix fastest**, iz slowest (Fortran order).
- `src/parsers/chgcarParser.ts` — VASP CHGCAR writes **ix fastest** as well.

So the stored 1-D index corresponded to Fortran layout (`ix + iy*nx + iz*nx*ny`) while the marching-cubes lookup assumed C layout. The axes were effectively permuted.

`src/parsers/cubeParser.ts` was already correct — Gaussian Cube writes `ix` slowest / `iz` fastest, which is native C order.

## Why it was latent

The only volumetric test fixture was `test/fixtures/LiF-polaron-isolevel.xsf`, which has a 128×128×128 grid. When `nx == ny == nz`, the Fortran↔C permutation produces a valid but rotated/reflected surface; for a roughly spherical polaron wavefunction it looked plausible. The bug only becomes visually obvious on anisotropic grids (slabs, interfaces, nanowires) — exactly the user's PARCHG case.

## Fix

Reorder into C layout at parse time so the rest of the pipeline stays unchanged:

```ts
let ix = 0, iy = 0, iz = 0, count = 0;
for (const t of tokens) {
  if (count < totalPoints && t !== '') {
    data[ix * ny * nz + iy * nz + iz] = parseFloat(t);
    count++;
    ix++;
    if (ix === nx) { ix = 0; iy++; if (iy === ny) { iy = 0; iz++; } }
  }
}
```

Applied in:
- `src/parsers/xsfParser.ts` — `parseDatagrid3D`
- `src/parsers/chgcarParser.ts` — charge density loop

## Verification

Wrote a small script that parses the raw XSF datagrid (Fortran order), reorders into C layout, finds the maximum voxel, and converts its fractional coordinates to Cartesian:

- Max voxel → Cartesian `(1.82, 1.05, 8.12) Å`
- Nearest H atom in file → `(1.85, 1.07, 8.09) Å`

Agreement is within one voxel spacing. Before the fix, that same voxel would have mapped to Fortran index `(33, 37, 228)` — an empty region of the vacuum, explaining the nonsensical isosurface.

`npm run build` and `npx tsc --noEmit` both clean. `npm run install-all` rebuilt the VSIX and reinstalled the extension + skill.

## Follow-up considerations

- Consider adding an anisotropic-grid fixture (e.g. a slab PARCHG trimmed to a smaller grid) to `test/fixtures/` so this class of bug cannot regress unnoticed. Deferred — would need a small synthetic XSF since the user's file is 22 MB.
- The CLI renderer (`scripts/render.ts`) benefits from the fix automatically since it consumes the same parsers and `marchingCubes`.
