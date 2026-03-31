# vscode-matviz Roadmap

## Current state (v0.1.0)

- CIF, POSCAR, XSF parsing (explicit atom positions only, no symmetry expansion)
- Ball-and-stick rendering (InstancedMesh atoms, individual Mesh per bond half)
- Unit cell wireframe, supercell expansion (1-5x per axis)
- PerspectiveCamera with OrbitControls (rotate/zoom/pan)
- VSCode theme-aware UI overlay (atom count, supercell inputs)

### Known performance issues

1. **Bond draw call explosion**: each bond half = individual `Mesh` + individual `MeshPhongMaterial`. A 3x3x3 NaCl supercell (~400 bonds) = ~800 draw calls just for bonds. Target is <100 total draw calls per frame.
2. **O(N^2) bond search**: `buildBonds()` checks every atom pair. 2000 atoms = ~2M distance checks. No spatial indexing.
3. **Continuous rendering**: `requestAnimationFrame` loop runs at 60fps even when nothing changes. Wastes GPU/battery.
4. **No material reuse**: `new MeshPhongMaterial()` per bond half. GPU must compile and track each separately.
5. **Fixed geometry detail**: `SphereGeometry(1, 24, 16)` regardless of atom count. At 10k atoms this is ~10M triangles for spheres alone.

---

## v0.2 — Performance Foundation

Fix the rendering pipeline before adding features. Every subsequent phase builds on this.

### Goals

1. **On-demand rendering**: stop the continuous `requestAnimationFrame` loop. Render only when dirty: camera change, structure load, resize, UI interaction. Pattern: `controls.addEventListener('change', requestRenderIfNotRequested)` with a `renderRequested` flag to coalesce frames. When `enableDamping` is on, `controls.update()` inside the render callback triggers further `change` events — the flag prevents infinite loops ([Three.js manual pattern](https://threejs.org/manual/en/rendering-on-demand.html)).

2. **Instanced bonds**: replace per-bond `Mesh` with `InstancedMesh`. Group bond halves by element color — one `InstancedMesh` per color. Use `setMatrixAt()` for position/orientation/scale, `setColorAt()` for per-instance color on a shared `MeshPhongMaterial({ vertexColors: false })`. A single `CylinderGeometry(0.08, 0.08, 1, 8)` shared across all bond instances. Target: bond draw calls = number of unique element colors (typically 2-8), not number of bonds.

3. **Material cache**: create one `MeshPhongMaterial` per element color, store in a `Map<string, MeshPhongMaterial>`. Reuse across atoms and bonds. Dispose only on structure change.

4. **Cell-list spatial hashing for bond detection**: uniform grid with cell size = max bond cutoff. Each atom hashes to `(floor(x/cell), floor(y/cell), floor(z/cell))`. Check 27 neighboring cells. Implementation: `Map<string, number[]>` keyed by `${ix},${iy},${iz}`. Reduces O(N^2) to O(N) for uniform-density structures. ~60 lines of TypeScript, no library needed.

5. **Adaptive geometry LOD**: scale sphere segment count by atom count — `segments = N < 500 ? 32 : N < 2000 ? 16 : 8`. Same for cylinder radial segments. Set globally at rebuild time (not per-instance LOD objects, which don't work with InstancedMesh).

6. **Proper resource disposal**: track all geometries/materials in arrays. On rebuild, dispose everything before creating new objects. Check `renderer.info.memory.geometries` and `.textures` for leaks.

### Quality gates

**Automated (loop checks):**
- [ ] `npm run build` exits 0
- [ ] `npx tsc --noEmit` exits 0
- [ ] `grep -r "new THREE.Mesh(.*bondGroup\|bondGroup.add(new THREE.Mesh" src/` returns nothing (no individual bond meshes)
- [ ] `grep -r "requestAnimationFrame" src/webview/renderer.ts` appears only inside a conditional / on-demand path, not in a self-calling `animate()` loop
- [ ] `grep -r "new MeshPhongMaterial" src/webview/renderer.ts` count ≤ 5 (material cache, not per-bond allocation)
- [ ] `grep -rn "Map<string.*number\[\]>" src/webview/` finds cell-list spatial hash implementation
- [ ] `grep -rn "segments.*<.*500\|segments.*<.*2000" src/webview/renderer.ts` confirms adaptive LOD logic exists

**Manual (reinstall + open fixtures):**
- [ ] NaCl 5x5x5 supercell (2000 atoms): initial render <1s, 60fps during rotation
- [ ] Open DevTools → console: `renderer.info.render.calls` < 50 for NaCl 5x5x5
- [ ] Stop interacting for 5s → Performance tab shows no rAF activity (idle = 0 frames)
- [ ] Change supercell 1x1x1 → 3x3x3 → 1x1x1: `renderer.info.memory.geometries` returns to starting value
- [ ] All 3 test fixtures (nacl.cif, silicon.poscar, graphene.xsf) render correctly

---

## v0.3 — View Modes & Camera

### Goals

1. **Orthographic camera**: add `OrthographicCamera`, make it default (matches VESTA). Perspective as toggle button. Ortho frustum computed from scene bounding box. Both cameras share the same `OrbitControls` instance — update controls.object on switch. FOV slider visible only in perspective mode.

2. **Display styles** (4 modes, selector dropdown):
   - **Ball-and-stick** (current default): covalent-radius spheres + bond cylinders.
   - **Space-filling**: vdW-radius spheres, no bonds. Reuses atom `InstancedMesh`, just changes scale. Skip `buildBonds()` entirely.
   - **Stick**: thick cylinders for bonds (radius ~0.15), small atom spheres (radius ~0.15) at junctions. Unbonded atoms shown at normal size.
   - **Wireframe**: bonds as `LineSegments` with gradient color (vertex colors), atoms as wireframe spheres (`material.wireframe = true`).
   - Performance constraint: switching styles must not re-run bond detection. Cache bond list from last `rebuild()`, regenerate visuals only.

3. **Atom labels**: use sprite-based labels (canvas texture on `SpriteMaterial`), not `CSS2DRenderer` — CSS2D creates a DOM element per label and degrades past ~200 labels. Sprites scale with zoom and integrate with depth buffer. Generate label textures on-demand per element (cache in a `Map<string, Texture>`). Toggle on/off via overlay button.

4. **Depth cueing**: `THREE.Fog` or `THREE.FogExp2` with color matching `getComputedStyle(document.body).backgroundColor`. Update fog color on VSCode theme change.

### Quality gates

**Automated (loop checks):**
- [ ] `npm run build` exits 0
- [ ] `npx tsc --noEmit` exits 0
- [ ] `grep -rn "OrthographicCamera" src/webview/renderer.ts` confirms ortho camera exists
- [ ] `grep -rn "buildBonds\|detectBonds" src/webview/renderer.ts` — bond detection is NOT called inside display style switch logic (cache reuse)
- [ ] `grep -rn "SpriteMaterial\|CanvasTexture" src/webview/` confirms sprite-based labels (not CSS2DRenderer)
- [ ] `grep -rn "CSS2DRenderer" src/` returns nothing
- [ ] `grep -rn "Fog\|FogExp2" src/webview/renderer.ts` confirms fog implementation
- [ ] `grep -rn "ball-and-stick\|space-filling\|stick\|wireframe" src/webview/` confirms 4 style modes exist

**Manual (reinstall + open fixtures):**
- [ ] Orthographic is default on fresh open; perspective toggle preserves scene center
- [ ] Switch styles rapidly (ball-and-stick → space-filling → stick → wireframe): no lag, no bond re-detection flash
- [ ] Space-filling: `renderer.info.render.calls` same as ball-and-stick minus bond draw calls
- [ ] Labels readable on graphene.xsf; toggle on/off works
- [ ] Fog color matches VSCode theme; switch light↔dark theme → fog updates
- [ ] All 4 styles x 2 camera modes x 3 fixtures = 24 combinations render correctly

---

## v0.4 — Navigation & Interaction

### Goals

1. **Axis-aligned quick views**: 6 buttons (a, b, c, a*, b*, c*) or keyboard shortcuts. Compute reciprocal lattice vectors: `a* = 2pi * (b x c) / V`. Animate camera transition with `THREE.Vector3.lerp` over ~300ms (use `requestAnimationFrame` mini-loop, then stop).

2. **Constrained rotation**: Shift+drag = lock to nearest principal axis (compare dx vs dy, zero the smaller). Ctrl+drag = rotate around screen-Z (set `controls.enableRotate = false`, manually rotate around camera forward vector).

3. **Crystallographic direction commands**: register `matviz.viewAlongDirection` and `matviz.viewNormalToPlane` in `package.json`. Use `vscode.window.showInputBox` for [uvw] / (hkl) input. Convert to cartesian direction via lattice matrix multiplication.

4. **Keyboard controls**: arrow keys = rotate 15deg, Shift+arrows = 1deg, +/- = zoom. Must call `requestRenderIfNotRequested()` after each.

### Quality gates

**Automated (loop checks):**
- [ ] `npm run build` exits 0
- [ ] `npx tsc --noEmit` exits 0
- [ ] `grep -rn "viewAlongDirection\|viewNormalToPlane" src/` + `package.json` — commands registered
- [ ] `grep -rn "lerp\|slerp" src/webview/` confirms animated camera transitions (not instant snaps)
- [ ] `grep -rn "ArrowUp\|ArrowDown\|ArrowLeft\|ArrowRight" src/webview/` confirms keyboard handler
- [ ] `grep -rn "requestRenderIfNotRequested\|requestRender" src/webview/` — keyboard handlers trigger render

**Manual (reinstall + open fixtures):**
- [ ] Quick view buttons: click "a" → camera looks down the a-axis on NaCl
- [ ] Animated transition: smooth ~300ms lerp, 60fps, no jank
- [ ] Keyboard: arrows rotate, shift+arrows fine-rotate, +/- zooms
- [ ] Constrained rotation: shift+drag = pure single-axis rotation
- [ ] All navigation works in both ortho and perspective modes

---

## v0.5 — Bonds & Polyhedra

### Goals

1. **Per-pair bond parameters**: replace global `bondTolerance = 1.2` with a `Map<string, {min: number, max: number}>` keyed by sorted element pair (e.g., `"Cl-Na"`). Auto-populate from covalent radii on first load. UI: small panel listing detected pairs with editable min/max inputs. Changing a cutoff triggers bond rebuild (reuses spatial hash, re-runs only neighbor checks).

2. **Periodic boundary bond search**: for each atom within `maxCutoff` of a cell face, generate image positions by adding/subtracting lattice vectors. Include images in the spatial hash. Only needed for atoms near boundaries — check fractional coordinates.

3. **Bond styling**: unicolor (single material per bond), bicolor (current split), line mode (`LineSegments`). Configurable bond radius (updates `CylinderGeometry` scale via instance matrix, no new geometry). Store style preference in webview state.

4. **Coordination polyhedra**: from bond list, identify central atom + neighbors. Compute convex hull (simple for tetrahedral/octahedral — hardcode common cases, use general algorithm for others). Render as `Mesh` with `MeshPhongMaterial({ transparent: true, opacity: 0.4, side: DoubleSide })`. Per-element polyhedron color. Toggle visibility. Edge outlines via `EdgesGeometry` + `LineSegments`.

### Quality gates

**Automated (loop checks):**
- [ ] `npm run build` exits 0
- [ ] `npx tsc --noEmit` exits 0
- [ ] `grep -rn "Map<string.*min.*max\|bondParams\|bondCutoffs" src/webview/` confirms per-pair parameter map
- [ ] `grep -rn "image\|periodic.*bond\|lattice.*offset" src/webview/renderer.ts` confirms periodic boundary search
- [ ] `grep -rn "ConvexHull\|convexHull\|polyhedr" src/webview/` confirms polyhedra implementation
- [ ] `grep -rn "EdgesGeometry\|LineSegments" src/webview/renderer.ts` confirms polyhedra edge outlines
- [ ] `grep -rn "DoubleSide\|transparent.*true\|opacity" src/webview/renderer.ts` confirms transparency setup

**Manual (reinstall + open fixtures):**
- [ ] NaCl: edit Na-Cl cutoff → bonds update in <100ms (no flash/full rebuild)
- [ ] NaCl: bonds cross periodic cell faces (compare with VESTA screenshot)
- [ ] Silicon: tetrahedral polyhedra render, faces correct, transparency clean
- [ ] `renderer.info.memory.geometries` stable across 10x bond cutoff changes
- [ ] Toggle polyhedra on/off: atoms/bonds unaffected

---

## v0.6 — Selection & Measurement

### Goals

1. **Atom picking via GPU color picking**: CPU raycasting against `InstancedMesh` is O(N) per click and sufficient for <10k atoms, but GPU picking scales better and avoids edge cases with overlapping projections. Implementation:
   - Offscreen `WebGLRenderTarget` at 1x1 pixel (or small region around click).
   - Override all materials with a `ShaderMaterial` that encodes instance ID as RGB color (R = id & 0xFF, G = (id >> 8) & 0xFF, B = (id >> 16) & 0xFF). Supports up to 16M instances.
   - `renderer.readRenderTargetPixels()` → decode color → atom index.
   - Picking render uses simplified geometry (lower LOD) for speed.
   - Fallback: built-in `Raycaster.intersectObject` works with `InstancedMesh` since r126 — use this first, switch to GPU picking if latency >16ms.

2. **Selection highlight**: set picked instance's color to a bright outline color via `setColorAt()`, restore on deselect. Show info overlay: element, site index, fractional coords (requires inverse lattice matrix), cartesian coords.

3. **Distance measurement**: click 2 atoms → `Line` with `LineDashedMaterial` between them + sprite label showing distance in Angstroms. Store measurements in an array; clear on structure reload.

4. **Angle / dihedral**: click 3 atoms → angle at vertex B. Click 4 → torsion. Arc visualization via `CurvePath` + `TubeGeometry`.

### Quality gates

**Automated (loop checks):**
- [ ] `npm run build` exits 0
- [ ] `npx tsc --noEmit` exits 0
- [ ] `grep -rn "WebGLRenderTarget\|readRenderTargetPixels\|Raycaster" src/webview/` confirms picking implementation
- [ ] `grep -rn "setColorAt\|instanceColor" src/webview/renderer.ts` confirms selection highlight via instance color
- [ ] `grep -rn "LineDashedMaterial\|measurement" src/webview/` confirms distance measurement line
- [ ] `grep -rn "fractional\|inverseLattice\|invLattice" src/webview/` confirms fractional coord conversion

**Manual (reinstall + open fixtures):**
- [ ] Click atom on NaCl → highlight + info overlay shows element, index, coords
- [ ] Click 2 atoms → dashed line + label shows distance; Na-Cl = 2.82 +/- 0.01 A
- [ ] Click 3 atoms → angle label appears at vertex B
- [ ] Picking responds in <16ms (DevTools Performance → measure click-to-highlight)
- [ ] Measurements persist through rotation; clear on supercell change
- [ ] No visible flicker from pick render pass

---

## v0.7 — Symmetry & Crystallography

### Goals

1. **Symmetry operation parser**: parse `_symmetry_equiv_pos_as_xyz` strings ("x,y,z", "-x+1/2,y,-z+1/2"). Tokenize into affine 4x4 matrix (rotation 3x3 + translation 3x1). Apply to asymmetric unit fractional coords, then convert to cartesian.

2. **Space group expansion**: multiply asymmetric unit by all symmetry operations. Remove duplicates (fractional coords within tolerance, modulo 1). Fallback: if no symmetry info in CIF, use explicit positions (current behavior).

3. **Lattice planes**: insert by Miller indices (hkl) + distance slider. Compute plane normal from reciprocal lattice. Render as `PlaneGeometry` clipped to unit cell bounds with `MeshPhongMaterial({ transparent: true, opacity: 0.5, side: DoubleSide })`. Multiple simultaneous planes with different colors.

4. **Unit cell info panel**: overlay showing space group, a/b/c/alpha/beta/gamma, volume (scalar triple product), atom count, chemical formula (aggregate species list). Update on structure load.

### Quality gates

**Automated (loop checks):**
- [ ] `npm run build` exits 0
- [ ] `npx tsc --noEmit` exits 0
- [ ] `grep -rn "_symmetry_equiv_pos_as_xyz\|symmetry_equiv" src/parsers/cifParser.ts` confirms symmetry parsing
- [ ] `grep -rn "applySymmetry\|expandSymmetry\|symOps" src/parsers/` confirms expansion logic
- [ ] `grep -rn "PlaneGeometry\|latticePlane\|millerPlane" src/webview/` confirms lattice plane rendering
- [ ] `grep -rn "spaceGroup\|formula\|volume" src/webview/` confirms info panel data
- [ ] Test fixture exists: `ls test/fixtures/*symmetry*` or a CIF with symmetry ops

**Manual (reinstall + open fixtures):**
- [ ] CIF with symmetry ops: atom count matches VESTA after expansion
- [ ] CIF without symmetry: renders identically to v0.6 (regression check)
- [ ] Symmetry expansion <200ms (console timing)
- [ ] Lattice plane (111) on NaCl: correct orientation vs VESTA
- [ ] Info panel: correct a/b/c/alpha/beta/gamma for all 3 test fixtures

---

## v0.8 — Volumetric Data

### Goals

1. **Parsers**: VASP CHGCAR (FFT grid after ion positions), Gaussian Cube (header + volumetric grid), XSF `BLOCK_DATAGRID_3D` (extend existing XSF parser). All parse into a common `VolumetricData` type: `{ origin, lattice, dims: [nx,ny,nz], data: Float32Array }`.

2. **Marching cubes isosurface**: CPU implementation using `Float32Array` grid. Lookup table for 256 cube configurations. Output `BufferGeometry` with positions + normals. Performance target: 64^3 grid (~260k voxels) in <500ms. For larger grids (128^3), consider Web Worker or chunked processing to avoid blocking UI.

3. **Iso-level slider**: adjusting the slider re-runs marching cubes and replaces the surface geometry. Debounce slider input (~100ms). Two surfaces for +/- values (wavefunctions): positive surface in red/blue, negative in blue/red. Adjustable opacity.

4. **2D cross-sections**: color-mapped slice on (hkl) plane. Sample volumetric data along plane, map to color via transfer function. Render as textured `PlaneGeometry`. Color map options: blue-white-red, viridis, grayscale.

### Quality gates

**Automated (loop checks):**
- [ ] `npm run build` exits 0
- [ ] `npx tsc --noEmit` exits 0
- [ ] `grep -rn "CHGCAR\|chgcar" src/parsers/` confirms CHGCAR parser
- [ ] `grep -rn "Cube\|cube" src/parsers/` confirms Gaussian Cube parser
- [ ] `grep -rn "BLOCK_DATAGRID_3D\|datagrid" src/parsers/xsfParser.ts` confirms XSF volumetric
- [ ] `grep -rn "VolumetricData\|volumetric" src/parsers/types.ts` confirms shared type
- [ ] `grep -rn "marchingCubes\|MarchingCubes\|isosurface" src/webview/` confirms MC implementation
- [ ] `grep -rn "Float32Array" src/parsers/` confirms typed-array grid storage
- [ ] Test fixtures: `ls test/fixtures/*.cube test/fixtures/CHGCAR*` — at least one volumetric fixture

**Manual (reinstall + open fixtures):**
- [ ] Open CHGCAR → isosurface renders in <500ms for 64^3 grid
- [ ] Iso-level slider: drag → surface updates smoothly (debounced, no structure reload)
- [ ] +/- mode: two distinct colored lobes visible
- [ ] 128^3 grid: renders in <3s, webview stays under 200MB
- [ ] Cross-section plane on (hkl): correct orientation

---

## v0.9 — Properties & Customization

### Goals

1. **Atom properties panel**: per-element color picker, radius slider, visibility toggle. Radius modes: covalent, vdW, ionic, custom. Changes update `InstancedMesh` in-place — modify instance matrices (scale) and instance colors without rebuilding geometry. Call `instanceMatrix.needsUpdate = true` + `instanceColor.needsUpdate = true`.

2. **Bond properties panel**: per-pair style, radius, color, distance cutoffs. Add/remove bond specifications. Reuses bond parameter map from v0.5.

3. **Rendering settings**: background color picker, ambient/directional light intensity sliders, antialiasing toggle (requires renderer recreation — warn user). Shadow toggle.

4. **Session persistence**: save full UI state (display style, supercell, bond cutoffs, element colors, camera position) via `vscode.getState()`/`setState()`. Restore on tab re-focus. Use `retainContextWhenHidden` in webview options to preserve WebGL context across tab switches.

### Quality gates

**Automated (loop checks):**
- [ ] `npm run build` exits 0
- [ ] `npx tsc --noEmit` exits 0
- [ ] `grep -rn "instanceMatrix.needsUpdate\|instanceColor.needsUpdate" src/webview/renderer.ts` confirms in-place updates (no rebuild)
- [ ] `grep -rn "getState\|setState" src/webview/main.ts` confirms state persistence
- [ ] `grep -rn "retainContextWhenHidden" src/editor/crystalEditorProvider.ts` confirms context preservation
- [ ] `grep -rn "color.*picker\|radius.*slider\|visibility.*toggle" src/webview/` confirms property panel UI

**Manual (reinstall + open fixtures):**
- [ ] Change atom color → instant update (<50ms), no scene flash
- [ ] Change atom radius → instant scale update, no geometry disposal
- [ ] Close tab → reopen same file → all settings restored (style, colors, supercell, camera)
- [ ] Switch to another tab and back → WebGL context intact (no re-render from scratch)
- [ ] Open 2 different files → change settings on one → other file unaffected

---

## v0.10 — More Formats & Export

### Goals

1. **New parsers**: XYZ, PDB (CRYST1 cell + ATOM/HETATM), Quantum ESPRESSO pw.x output, FHI-aims geometry.in. Each parser → `CrystalStructure`. Register in `parsers/index.ts` + `package.json` selectors.

2. **Export**: screenshot via `renderer.domElement.toDataURL('image/png')` (render one frame at higher resolution for quality). Export structure to CIF / POSCAR (serialize `CrystalStructure`). Copy fractional/cartesian coords to clipboard.

3. **Test fixtures**: one fixture per new format in `test/fixtures/`.

### Quality gates

**Automated (loop checks):**
- [ ] `npm run build` exits 0
- [ ] `npx tsc --noEmit` exits 0
- [ ] `grep -rn "parseXyz\|parseXYZ" src/parsers/` confirms XYZ parser
- [ ] `grep -rn "parsePdb\|parsePDB" src/parsers/` confirms PDB parser
- [ ] `grep -rn "parseQE\|quantumEspresso\|pwscf" src/parsers/` confirms QE parser
- [ ] `grep -rn "parseAims\|fhiAims\|geometry.in" src/parsers/` confirms FHI-aims parser
- [ ] `grep -rn "toDataURL\|screenshot\|exportPng" src/webview/` confirms screenshot export
- [ ] `grep -rn "exportCif\|exportPoscar\|writeCif\|writePoscar" src/` confirms structure export
- [ ] `ls test/fixtures/*.xyz test/fixtures/*.pdb` — fixtures exist for new formats
- [ ] `grep -rn "\.xyz\|\.pdb" package.json` — new file extensions registered in customEditors

**Manual (reinstall + open fixtures):**
- [ ] Open each new fixture → renders correctly, no parse errors
- [ ] Export NaCl to CIF → reopen exported file → identical rendering
- [ ] Screenshot → valid PNG, matches what's on screen
- [ ] Existing .cif/.poscar/.xsf files still detected and parsed correctly

---

## Performance budget (all phases)

| Metric | Target | How to measure |
|---|---|---|
| Draw calls | <100 per frame | `renderer.info.render.calls` |
| Idle GPU | 0 frames rendered | Performance tab: no rAF activity |
| Bond detection (N atoms) | O(N), <200ms for 10k | `performance.now()` around `buildBonds()` |
| Atom picking | <16ms (1 frame) | `performance.now()` around pick handler |
| Isosurface 64^3 | <500ms | `performance.now()` around marching cubes |
| Memory (no volumetric) | <100MB webview heap | `performance.memory` or DevTools |
| Style switch | <50ms | No bond re-detection, geometry reuse |
| Geometry LOD | Adaptive segments: 32/16/8 by atom count | Visual + triangle count check |

---

## Backlog / Future

- Sphere impostors: replace `SphereGeometry` with billboard quads + fragment-shader ray-sphere intersection. Pixel-perfect at any zoom, massive triangle reduction. Requires custom `ShaderMaterial` with `gl_FragDepth` writes (disables early-Z — profile before committing). Reference: [Three.js forum](https://discourse.threejs.org/t/coding-jam-pixel-perfect-spheres-without-high-res-geometry/10154)
- `InstancedMesh2` (three.ez): enhanced InstancedMesh with built-in BVH raycasting, per-instance frustum culling, LOD, sorting. Could replace manual instancing + picking code. Evaluate when API stabilizes.
- WebGPU migration: Three.js WebGPU backend for compute-shader bond detection, GPU marching cubes. Not urgent — WebGL2 sufficient for current scale.
- Thermal ellipsoids (anisotropic displacement parameters from CIF)
- Partial occupancy display (pie-chart spheres or transparency)
- Magnetic moment vectors on atoms
- Crystal morphology (external crystal shape from Miller indices)
- Animation: MD trajectory playback (multi-frame XSF, XDATCAR)
- Split-pane: text editor + 3D view side by side
- Multi-phase: overlay multiple structures
- Undo/redo for property changes
- VSCode settings integration (`matviz.*` configuration namespace)

---

## References

- [Three.js on-demand rendering manual](https://threejs.org/manual/en/rendering-on-demand.html)
- [Three.js InstancedMesh docs](https://threejs.org/docs/pages/InstancedMesh.html)
- [Sphere impostor rendering (Three.js forum)](https://discourse.threejs.org/t/coding-jam-pixel-perfect-spheres-without-high-res-geometry/10154)
- [InstancedMesh picking discussion (Three.js forum)](https://discourse.threejs.org/t/best-way-to-do-instanced-mesh-picking-in-2024/59917)
- [three-mesh-bvh (GitHub)](https://github.com/gkjohnson/three-mesh-bvh)
- [InstancedMesh2 with BVH/LOD (Three.js forum)](https://discourse.threejs.org/t/three-ez-instancedmesh2-enhanced-instancedmesh-with-frustum-culling-fast-raycasting-bvh-sorting-visibility-management-lod-skinning-and-more/69344)
- [BatchedMesh docs](https://threejs.org/docs/pages/BatchedMesh.html)
- [100 Three.js performance tips (2026)](https://www.utsubo.com/blog/threejs-best-practices-100-tips)
- [3Dmol.js paper](https://academic.oup.com/bioinformatics/article/31/8/1322/213186)
- [Mol* (molstar) repo](https://github.com/molstar/molstar)
