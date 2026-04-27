export interface CrystalStructure {
  lattice: [number, number, number][];  // 3 lattice vectors in Angstroms
  species: string[];                     // element symbol per atom
  positions: [number, number, number][]; // cartesian positions in Angstroms
  pbc: [boolean, boolean, boolean];
  title?: string;
  spaceGroup?: string;
  cellParams?: { a: number; b: number; c: number; alpha: number; beta: number; gamma: number };
  symmetryOps?: string[];  // e.g., ["x,y,z", "-x+1/2,y,-z+1/2"]

  // v0.16 optional extensions — populated by parsers when source data carries
  // these properties. Renderer/UI must guard with `?.[i]` since these arrays
  // are absent (undefined) for parsers/files that don't supply them. When
  // present, length must equal species.length (parser-enforced invariant).
  //
  // 16.1 thermal ellipsoids: Anisotropic displacement parameters Uᵢⱼ in Å².
  //   `null` entry means "no aniso data for this atom" — use isotropic sphere
  //   for that site even when other atoms have ellipsoids.
  thermalAniso?: Array<{ U11: number; U22: number; U33: number; U12: number; U13: number; U23: number } | null>;
  // 16.2 partial occupancy: 0..1 per atom. Atoms with occupancy < 1.0 may
  //   share coordinates with other species (mixed sites). Default behavior
  //   (showPartialOccupancy=false) renders only the dominant species per site.
  occupancy?: number[];
  // Generic per-atom vector overlay (v0.18 generalization — was 16.3 magMom).
  //   `kind` tags semantic origin; renderer is agnostic. `label`/`unit` decorate
  //   the side-panel UI. `values` is one Cartesian vector per atom; [0,0,0]
  //   means no overlay for that atom.
  atomVectors?: AtomVectorField;
}

export interface AtomVectorField {
  kind: 'magmom' | 'force' | 'velocity' | 'displacement' | 'generic';
  label?: string;
  unit?: string;
  values: Array<[number, number, number]>;
}

export interface VolumetricData {
  origin: [number, number, number];
  lattice: [number, number, number][];
  dims: [number, number, number];
  data: Float32Array;
}

/**
 * v0.17 multi-frame wrapper. Single-frame files wrap into a length-1
 * trajectory so all downstream code can iterate uniformly.
 *
 * Invariants (parser-enforced; webview/CLI relies on these):
 * - frames.length ≥ 1
 * - frames[i].species.length is identical across all i (atom invariance)
 * - frames[i].positions.length === frames[i].species.length
 * - latticeMode === 'fixed' ⇒ frames[i].lattice === frames[0].lattice
 *   (object reference equality so renderer can short-circuit cell rebuild)
 *
 * v0.16 optional fields (thermalAniso, occupancy, atomVectors) live per-frame.
 * The first cut consumes only frame[0]'s optionals; per-frame variation is
 * deferred to v0.17.x (extended XYZ properties pipeline).
 */
export interface CrystalTrajectory {
  frames: CrystalStructure[];
  latticeMode: 'fixed' | 'per-frame';
}
