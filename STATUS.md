# Project Status

- **Version**: v0.12.0 (released) — v0.13 in progress (CLI renderer feature complete, version bump pending)
- **Phase**: v0.13 — headless CLI renderer + Claude skill landed
- **People**: Seungwoo Shin (twinace98)
- **Repo**: https://github.com/twinace98/matviz.git

## How to resume next session

1. Read in order: `CLAUDE.md` (architecture + workflow) → `Plan.md` (roadmap) → this file → active `plans/` pair if any.
2. Auto-memory loads from `~/.claude/projects/-home-swshin-matviz/memory/`.
3. **Next action**: decide whether to (a) bump to v0.13.0 + commit/push CLI renderer, or (b) extend CLI with deferred features (labels, polyhedra, isosurface) before release. See `working/v0.13_feat1_cli-renderer.md` for what shipped.

## Completed

- **v0.1** (2026-04-15): Initial CIF/POSCAR/XSF viewer with ball-and-stick rendering
- **v0.2–v0.10** (2026-04-15): Full feature set — performance, camera, bonds, polyhedra, selection, symmetry, volumetric, properties, export
- **v0.11** (2026-04-15): UI overhaul — dark/light palette toggle, rotation sensitivity fix, clipping fix for large supercells
- **v0.12** (2026-04-16): Rendering fixes, license cleanup, boundary wrap logic, stick style fix, bond defaults (`rA+rB+0.3`), adaptive top-bar, collapsible side panel, canvas sizing fix
- **v0.13 feat 1** (2026-04-16): Headless CLI renderer (`scripts/render.ts` → `dist/render.js`) via Puppeteer + SwiftShader; Claude skill `matviz-render` for AI-driven structure visualization

## Pending (from Plan.md)

- [ ] **v0.13** — UX polish (TBD: layout improvements, responsive sizing, etc.)
- [ ] **v0.14** — Advanced rendering (sphere impostors, WebGPU, etc.)
- [ ] **v0.15** — Extended crystallography (thermal ellipsoids, partial occupancy, magnetic moments)
- [ ] **v0.16** — Animation & multi-structure (MD trajectory, multi-phase overlay)
- [ ] **v0.17** — Editor integration (split-pane, VSCode settings namespace, undo/redo)

## Decisions locked in

- **Bond defaults** (locked 2026-04-16 from v0.12): `min: 0.1, max: (rA+rB)+0.3` — adjusted from earlier `min: 0.4, max: (rA+rB)*1.2`.
- **Boundary default on** (locked 2026-04-16 from v0.12): `showBoundaryAtoms = true` with fractional wrap into [0,1).
- **Canvas sizing** (locked 2026-04-16 from v0.12): CSS `width/height: 100%` drives layout; `renderer.setSize(w, h, false)` preserves it.

## Open questions

- Proportional UI scaling — decided against for now; using flex-wrap + collapsible panel instead. Revisit if users request.
- Side panel overlaying canvas vs. dedicated layout — currently overlay with toggle; option 1 (canvas offset) deferred.
