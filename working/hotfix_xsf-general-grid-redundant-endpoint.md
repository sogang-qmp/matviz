# Hotfix — XSF general-grid redundant-endpoint trimming

**Date**: 2026-07-22
**File**: `src/parsers/xsfParser.ts`
**Fixture**: `test/fixtures/band15_Gamma.xsf` (PWSCF `3D_PWSCF` wavefunction, 41×41×65 grid)

## Symptom

Isosurfaces parsed from PWSCF/Wannier90 XSF datagrids sat slightly *inside*
the atoms — the density looked squeezed toward the cell origin by ~2.4 %,
most visible on atoms near the far cell edge. Reported on exciton /
wavefunction loads.

## Root cause

Two different grid conventions collide:

| Convention | Points | Intervals | Endpoint |
|-----------|--------|-----------|----------|
| CHGCAR / FFT grid (e.g. `LiF-polaron-isolevel.xsf`, 64³) | N | N | not stored (implied `N → 0`) |
| XSF "general datagrid" (XCrySDen/PWSCF/Wannier90) | N | **N−1** | **stored, duplicated** (`data[0] == data[N−1]`) |

`marchingCubes()` uses `step = lattice / N` with a periodic wrap (index
`N → 0`) — the **CHGCAR** convention. Feeding a general-grid array in
unchanged therefore places sample `k` at `k·cell/N` instead of the true
`k·cell/(N−1)`, compressing the whole field by `N/(N−1)`
(41 → ~2.4 %, 65 → ~1.5 %). Atoms use the real cell, so the iso drifts off them.

`band15_Gamma.xsf` confirmed the diagnosis numerically:
`max|data[0-plane] − data[N−1-plane]| == 0.0` on all three axes → the boundary
plane is an exact duplicate.

Note: the pre-existing `snapGridLatticeToCell()` (which corrects a *span
magnitude* quirk in some Wannier90 writers) is a **no-op here** — this file's
spanning vectors already equal `PRIMVEC`. The bug is the dims off-by-one, not
the span, so span-snapping alone never fixed it.

## Fix

New `trimRedundantPeriodicPlanes(vd)` in `xsfParser.ts`:

- Per axis, compares the `i=0` plane to the `i=N−1` plane within a
  data-relative tolerance (`1e-5 · max|data|`). If they match, that axis carries
  the duplicated closure point → drop the last plane (`N → N−1`).
- Spanning vectors are **left unchanged** — they still describe the full cell
  edge, now correctly spanned by `N−1` intervals, so `step = lattice/(N−1)` and
  the `pbc` wrap land exactly on the cell.
- Detection is data-driven, so genuinely non-redundant grids are untouched.
- Applied only in the XSF parser (`parseDatagrid3D` string path +
  `parseDatagrid3DFromBytes` when `stride === 1`); CHGCAR/cube parsers keep their
  own N-interval convention. Skipped when downsampling (`stride > 1`) because
  decimation breaks the exact endpoint duplication.

## Verification

- `band15_Gamma.xsf`: dims `41,41,65 → 40,40,64`; iso rings now concentric with
  the Gd atoms (was offset down-left); 2×2×1 supercell tiles seamlessly (no
  boundary seam).
- `LiF-polaron-isolevel.xsf` (64³ FFT grid): **unchanged** — planes differ, so
  `trimRedundantPeriodicPlanes` early-returns the same object (byte-identical
  behavior, guaranteed no regression).
- `npx tsc --noEmit` clean; `npm run build` clean.

## Follow-ups (not done here)

- CLI `render.ts` inline marching cubes is the same shared module, so it picks
  up the fix for free — no separate CLI change needed.
- `test/fixtures/band15_Gamma.xsf` added as the redundant-endpoint regression
  fixture (1.5 MB).
