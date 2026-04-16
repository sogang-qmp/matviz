# Project Status

- **Version**: v0.13.0 (released 2026-04-16) — CLI renderer + isosurface axis-order hotfix
- **Phase**: v0.14 kickoff pending — scope shifted: UX polish (originally v0.13) now v0.14
- **People**: Seungwoo Shin (twinace98)
- **Repo**: https://github.com/twinace98/matviz.git

## How to resume next session

1. Read in order: `CLAUDE.md` (architecture + workflow) → `Plan.md` (roadmap) → this file → active `plans/` pair if any.
2. Auto-memory loads from `~/.claude/projects/-home-swshin-matviz/memory/`.
3. **Next action**: kickoff v0.14 (UX polish) — draft `plans/v0.14_ux-polish.md` pair from the Plan.md v0.14 section, request approval, then start features. Alternatively, extend the CLI renderer with deferred features (labels, polyhedra, isosurface) as a v0.13.x patch if priority shifts.

## Completed

- **v0.1** (2026-04-15): Initial CIF/POSCAR/XSF viewer with ball-and-stick rendering
- **v0.2–v0.10** (2026-04-15): Full feature set — performance, camera, bonds, polyhedra, selection, symmetry, volumetric, properties, export
- **v0.11** (2026-04-15): UI overhaul — dark/light palette toggle, rotation sensitivity fix, clipping fix for large supercells
- **v0.12** (2026-04-16): Rendering fixes, license cleanup, boundary wrap logic, stick style fix, bond defaults (`rA+rB+0.3`), adaptive top-bar, collapsible side panel, canvas sizing fix
- **v0.13** (2026-04-16): Headless CLI renderer (`scripts/render.ts` → `dist/render.js`) via Puppeteer + SwiftShader; Claude skill `matviz-render`; XSF/CHGCAR isosurface axis-order hotfix (Fortran→C layout at parse time)

## Hotfixes

- **2026-04-16 — XSF/CHGCAR isosurface axis order** (shipped in v0.13.0): XSF and CHGCAR store volumetric data in Fortran order (ix fastest); `marchingCubes` indexes in C order. The mismatch permuted axes and was invisible for the cubic 128³ test fixture but produced wrong isosurfaces on anisotropic grids (e.g. 49×49×673 slab PARCHG). Fixed in `xsfParser.ts` and `chgcarParser.ts` by reordering into C layout at parse time. Cube parser was already correct. Log: `working/hotfix_xsf-chgcar-iso-axis.md`.

## Pending (from Plan.md)

- [ ] **v0.14** — UX polish (side panel layout mode, responsive toolbar, shortcut discoverability, state persistence, perf budget)
- [ ] **v0.15** — Advanced rendering (sphere impostors, WebGPU, etc.)
- [ ] **v0.16** — Extended crystallography (thermal ellipsoids, partial occupancy, magnetic moments)
- [ ] **v0.17** — Animation & multi-structure (MD trajectory, multi-phase overlay)
- [ ] **v0.18** — Editor integration (split-pane, VSCode settings namespace, undo/redo)

## Decisions locked in

- **Bond defaults** (locked 2026-04-16 from v0.12): `min: 0.1, max: (rA+rB)+0.3` — adjusted from earlier `min: 0.4, max: (rA+rB)*1.2`.
- **Boundary default on** (locked 2026-04-16 from v0.12): `showBoundaryAtoms = true` with fractional wrap into [0,1).
- **Canvas sizing** (locked 2026-04-16 from v0.12): CSS `width/height: 100%` drives layout; `renderer.setSize(w, h, false)` preserves it.

## Open questions

- Proportional UI scaling — decided against for now; using flex-wrap + collapsible panel instead. Revisit if users request.
- Side panel overlaying canvas vs. dedicated layout — currently overlay with toggle; option 1 (canvas offset) deferred.
