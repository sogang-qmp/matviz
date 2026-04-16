# vscode-matviz — Master Plan

## Context

VESTA-inspired crystal structure viewer as a VSCode extension. Goal: provide computational materials scientists with a fast, integrated 3D viewer that handles common file formats without leaving the editor.

**Decisions locked in**:
- Two-bundle architecture (Node.js extension host + browser webview) — not changing
- Three.js as rendering engine — committed
- `InstancedMesh` for atoms, instanced cylinders for bonds — performance-critical
- On-demand rendering (no continuous rAF loop)

**Critical caveats**:
- Webview CSP must remain strict (nonce-only scripts)
- Element data is duplicated across bundles (`elements.ts` / `elements-data.ts`) — must stay in sync
- Bond detection is O(N) via spatial hashing but skipped for >5000 atoms

---

## Completed versions

| Version | Summary |
|---------|---------|
| v0.1 | Initial viewer: CIF/POSCAR/XSF, ball-and-stick, supercell |
| v0.2 | Performance: on-demand rendering, instanced bonds, spatial hashing, adaptive LOD |
| v0.3 | View modes: ortho camera, 4 display styles, atom labels, depth fog |
| v0.4 | Navigation: axis views, constrained rotation, keyboard controls |
| v0.5 | Bonds & polyhedra: per-pair parameters, periodic boundary search, coordination polyhedra |
| v0.6 | Selection & measurement: atom picking, distance/angle/dihedral |
| v0.7 | Symmetry: CIF symmetry expansion, lattice planes, unit cell info |
| v0.8 | Volumetric: CHGCAR/Cube/XSF isosurface via marching cubes |
| v0.9 | Properties: per-element color/radius/visibility, per-bond parameters, session persistence |
| v0.10 | Formats & export: XYZ, PDB, QE, FHI-aims parsers; screenshot; CIF/POSCAR export |
| v0.11 | UI overhaul: dark/light palette, rotation sensitivity fix, clipping fix |
| v0.12 | Rendering fixes: boundary wrap, stick style, bond defaults, adaptive top-bar, collapsible side panel, canvas sizing |
| v0.13 | Headless CLI renderer (Puppeteer + SwiftShader), Claude `matviz-render` skill; XSF/CHGCAR isosurface axis-order hotfix (Fortran→C layout) |

---

## v0.14 — UX polish

**Goal**: Improve daily-use ergonomics — responsive layout, side panel behavior, toolbar discoverability.

| # | Feature | Success criterion |
|---|---------|-------------------|
| 14.1 | Side panel layout mode (canvas offset vs overlay) | Canvas never hidden by panel; drag-resize works |
| 14.2 | Responsive toolbar breakpoints (compact/normal/wide) | All buttons accessible at 400px–2000px editor width |
| 14.3 | Keyboard shortcut discoverability (tooltips, help overlay) | First-time user can discover all shortcuts in <30s |
| 14.4 | State persistence improvements | Camera position, panel collapsed state, all settings restored on reopen |
| 14.5 | Performance profiling & budget enforcement | Draw calls <100, idle GPU = 0 frames, memory <100MB |

**Exit criterion**: All features work across light/dark themes at editor widths from 400px to 2000px.

---

## v0.15 — Advanced rendering

**Goal**: GPU-efficient rendering for large structures (>10k atoms).

| # | Feature | Success criterion |
|---|---------|-------------------|
| 15.1 | Sphere impostors (billboard + fragment shader) | Pixel-perfect spheres, triangle count reduced 10x vs geometry spheres |
| 15.2 | GPU-accelerated picking | Picking <5ms for 50k atoms |
| 15.3 | Frustum culling for instanced meshes | No rendering of off-screen atoms |
| 15.4 | WebGPU backend evaluation | Prototype renders on WebGPU; decision gate on whether to commit |

**Decision gate after 15.4**: WebGPU stable enough for production? If yes, migrate pipeline. If no, stay WebGL2 and revisit in 6 months.

**Exit criterion**: 50k-atom structure renders at 30fps during rotation.

---

## v0.16 — Extended crystallography

**Goal**: Display advanced crystallographic properties.

| # | Feature | Success criterion |
|---|---------|-------------------|
| 16.1 | Thermal ellipsoids (anisotropic displacement from CIF) | Ellipsoids match VESTA for reference structure |
| 16.2 | Partial occupancy display | Pie-chart spheres or transparency for mixed sites |
| 16.3 | Magnetic moment vectors | Arrows on atoms, correct direction and relative magnitude |
| 16.4 | Crystal morphology (external shape from Miller indices) | Wulff construction renders correctly for cubic example |

**Exit criterion**: All features toggle independently without affecting base rendering.

---

## v0.17 — Animation & multi-structure

**Goal**: Support dynamic structures and comparisons.

| # | Feature | Success criterion |
|---|---------|-------------------|
| 17.1 | MD trajectory playback (multi-frame XSF, XDATCAR) | Smooth playback at 30fps, scrub slider, play/pause |
| 17.2 | Multi-phase overlay | Two structures rendered simultaneously with offset/transparency |
| 17.3 | Structure comparison mode | Side-by-side or overlay with difference highlighting |

**Exit criterion**: 1000-frame XDATCAR plays without memory leak.

---

## v0.18 — Editor integration

**Goal**: Deep VSCode integration for power users.

| # | Feature | Success criterion |
|---|---------|-------------------|
| 18.1 | Split-pane: text editor + 3D view | Edit CIF text, 3D view updates live |
| 18.2 | VSCode settings namespace (`matviz.*`) | All defaults configurable; settings UI works |
| 18.3 | Undo/redo for property changes | Ctrl+Z restores previous colors/radii/cutoffs |
| 18.4 | Marketplace publishing | Extension installable from VSCode marketplace |

**Exit criterion**: Published on marketplace with all documented features working.

---

## Critical decision gates

1. **After 15.4 (WebGPU evaluation)** — pass criterion: WebGPU renders all test fixtures correctly with ≥30fps on Chrome. On fail: stay WebGL2, remove WebGPU code.
2. **Before 18.4 (marketplace publishing)** — pass criterion: all test fixtures render correctly, no console errors, README accurate. On fail: fix before publishing.

---

## Verification strategy

- **v0.14**: Manual testing at multiple editor widths (400/800/1200/2000px) across light/dark themes.
- **v0.15**: Performance benchmarks with `renderer.info` and `performance.now()` on 10k/50k atom structures.
- **v0.16**: Visual comparison with VESTA screenshots for reference structures.
- **v0.17**: Memory profiling during 1000-frame playback; leak detection via heap snapshots.
- **v0.18**: VSCode marketplace validation checklist; end-to-end install test on clean machine.

---

## Performance budget

| Metric | Target | Measurement |
|--------|--------|-------------|
| Draw calls | <100 per frame | `renderer.info.render.calls` |
| Idle GPU | 0 frames | Performance tab: no rAF activity |
| Bond detection | O(N), <200ms for 10k atoms | `performance.now()` |
| Atom picking | <16ms | `performance.now()` |
| Isosurface 64³ | <500ms | `performance.now()` |
| Memory (no volumetric) | <100MB | DevTools heap |
| Style switch | <50ms, no bond re-detection | Visual + timing |
