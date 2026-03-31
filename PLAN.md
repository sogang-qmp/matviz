# vscode-matviz Roadmap

## Current state (v0.1.0)

- CIF, POSCAR, XSF parsing (no symmetry expansion — explicit atom positions only)
- Ball-and-stick rendering (InstancedMesh atoms, split-color bond cylinders)
- Unit cell wireframe, supercell expansion (1–5x per axis)
- Perspective camera with OrbitControls (rotate/zoom/pan)
- VSCode theme-aware UI overlay

---

## v0.2 — View & Display Modes

### Orthographic / Perspective toggle
- Add `OrthographicCamera` alongside existing `PerspectiveCamera`
- UI toggle button in control overlay
- Orthographic should be default (matches VESTA)
- Perspective: configurable FOV slider

### Display styles
- **Ball-and-stick** (current default)
- **Space-filling**: atom radius = full vdW radius, no bonds
- **Stick**: bonds as thick cylinders, atoms hidden (except unbonded)
- **Wireframe**: bonds as lines with gradient color, atoms as wireframe spheres
- Style selector dropdown in UI overlay

### Atom labels
- Toggle to show element symbol on each atom
- Use `CSS2DRenderer` from Three.js (HTML labels that track 3D positions)
- Labels should respect theme colors

### Depth cueing
- Fog that fades distant atoms toward background color
- Improves depth perception in orthographic mode

---

## v0.3 — Rotation & Navigation

### Axis-aligned quick views
- Buttons or keyboard shortcuts to snap camera along a, b, c, a*, b*, c*
- Compute reciprocal lattice vectors from direct lattice
- Animate transition (short lerp)

### Constrained rotation
- Hold Shift + drag to lock rotation to nearest principal axis (X, Y, or Z)
- Hold Ctrl + drag to rotate around the viewing axis (Z-screen)

### Orientation by crystallographic direction
- Command: "View along [uvw]" — project along a lattice direction
- Command: "View normal to (hkl)" — project along plane normal
- Input via command palette or small dialog

### Keyboard controls
- Arrow keys: rotate by step (configurable, default 15°)
- Shift+arrows: fine rotation (1°)
- +/−: zoom

---

## v0.4 — Bonds & Polyhedra

### Bond search parameters
- Per-pair min/max distance (instead of global covalent radius heuristic)
- UI: small bond settings panel listing detected pairs with editable cutoffs
- Periodic boundary bond search: check images for atoms near cell faces

### Bond styling options
- Unicolor cylinder (single color per bond)
- Bicolor cylinder (current default — split at midpoint)
- Line mode (thin lines, for wireframe style)
- Configurable bond radius

### Coordination polyhedra
- From bond specifications: central atom + bonded neighbors → convex hull
- Render as semi-transparent `MeshPhongMaterial` faces
- Per-element polyhedron color
- Toggle: show/hide polyhedra, show/hide internal atoms and bonds
- Edge rendering (dark outlines on polyhedron edges)

---

## v0.5 — Symmetry & Crystallography

### Space group expansion
- Parse `_symmetry_space_group_name_H-M` and `_symmetry_equiv_pos_as_xyz` from CIF
- Apply symmetry operations to asymmetric unit → full unit cell
- Need a symmetry operation parser (e.g., "x,y,z", "-x+1/2,y,-z+1/2")
- Fall back to explicit positions if no symmetry info

### Lattice planes
- Insert planes by Miller indices (hkl) + distance from origin
- Render as semi-transparent colored quads clipped to unit cell
- Interactive: adjustable distance slider
- Multiple simultaneous planes

### Unit cell info panel
- Overlay or side panel showing:
  - Space group, lattice parameters (a, b, c, α, β, γ)
  - Cell volume
  - Number of atoms, formula
  - Point group

---

## v0.6 — Selection & Measurement

### Atom picking
- Raycaster click detection on InstancedMesh
- Highlight selected atom (outline or glow)
- Show: element, site index, fractional coordinates, cartesian coordinates

### Distance measurement
- Click two atoms → draw dashed line + label with bond length (Å)
- Persistent until cleared

### Angle measurement
- Click three atoms A–B–C → show angle at B
- Arc visualization + label

### Dihedral angle
- Click four atoms A–B–C–D → torsion angle

---

## v0.7 — Volumetric Data

### File format support
- VASP CHGCAR parser (charge density on FFT grid)
- Gaussian Cube parser (molecular orbitals, electron density)
- XSF 3D datagrid (already have XSF structure parser, extend for BLOCK_DATAGRID_3D)

### Isosurface rendering
- Marching cubes algorithm (or use Three.js `MarchingCubes` / custom implementation)
- Configurable iso-level with slider
- Two-color display for +/− values (e.g., wavefunctions)
- Adjustable opacity

### 2D cross-sections
- Color-mapped slice through volumetric data on arbitrary (hkl) plane
- Color map selector (blue-green-red, grayscale, etc.)

---

## v0.8 — Properties & Customization

### Atom properties panel
- Per-element: color picker, radius slider, visibility toggle
- Radius mode: covalent, vdW, ionic, custom
- Persist preferences per session (webview state)

### Bond properties panel
- Per-pair: style, radius, color, distance cutoffs
- Add/remove bond specifications

### Rendering settings
- Background color picker
- Lighting intensity sliders (ambient, directional)
- Antialiasing toggle
- Shadow toggle

---

## v0.9 — More Formats & Export

### Additional input formats
- XYZ (simple molecular format)
- PDB (protein data bank — atoms + CRYST1 for cell)
- Quantum ESPRESSO `pw.x` output
- FHI-aims geometry.in

### Export
- Screenshot to PNG (canvas.toDataURL)
- Export structure to CIF or POSCAR (write from CrystalStructure)
- Copy fractional/cartesian coordinates to clipboard

---

## Backlog / Future

- Thermal ellipsoids (anisotropic displacement parameters from CIF)
- Partial occupancy display (pie-chart spheres or transparency)
- Magnetic moment vectors on atoms
- Crystal morphology (external crystal shape from Miller indices)
- Animation: MD trajectory playback (multi-frame XSF, XDATCAR)
- Split-pane: text editor + 3D view side by side for same file
- Multi-phase: overlay multiple structures with different colors
- Undo/redo for property changes
- VSCode settings integration (`matviz.*` configuration namespace)
