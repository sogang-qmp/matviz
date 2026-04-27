import { CrystalStructure, CrystalTrajectory, AtomVectorField } from './types';

// Per-atom vector fields recognized in extended-XYZ Properties. Map from the
// schema field name to display metadata. Anything else is ignored.
const VECTOR_FIELD_MAP: Record<string, { kind: AtomVectorField['kind']; label: string; unit?: string }> = {
  magmom:        { kind: 'magmom',       label: 'Magnetic moment',  unit: 'μB' },
  magmoms:       { kind: 'magmom',       label: 'Magnetic moment',  unit: 'μB' },
  forces:        { kind: 'force',        label: 'Force',            unit: 'eV/Å' },
  force:         { kind: 'force',        label: 'Force',            unit: 'eV/Å' },
  velocities:    { kind: 'velocity',     label: 'Velocity',         unit: 'Å/fs' },
  velo:          { kind: 'velocity',     label: 'Velocity',         unit: 'Å/fs' },
  displacements: { kind: 'displacement', label: 'Displacement',     unit: 'Å' },
};

/**
 * Parse a single XYZ frame starting at line index `start`. Returns the
 * frame and the line index of the next frame (or lines.length if EOF).
 * Used by both parseXyz (first frame) and parseXyzTraj (all frames).
 *
 * Per-frame layout:
 *   line[start]:    N (atom count)
 *   line[start+1]:  comment (may contain Lattice="..." pbc="...")
 *   line[start+2..start+1+N]: atom rows ("species x y z [extra]")
 */
/**
 * Parse the extended-XYZ `Properties=...` schema in the comment line and
 * locate the leftmost recognized per-atom vector field (magmom, forces,
 * velocities, displacements). Schema is colon-separated triples
 * `name:type:width`, e.g. `species:S:1:pos:R:3:forces:R:3`. Width 1 is a
 * collinear scalar (promoted to [0,0,v]); width 3 is a vector. Returns null
 * when no Properties tag is present or no recognized vector field exists.
 */
function findVectorColumn(comment: string): { offset: number; width: 1 | 3; meta: { kind: AtomVectorField['kind']; label: string; unit?: string } } | null {
  const m = comment.match(/Properties=([^\s]+)/i);
  if (!m) return null;
  const parts = m[1].split(':');
  if (parts.length < 3) return null;
  let offset = 0;
  for (let p = 0; p + 2 < parts.length; p += 3) {
    const name = parts[p];
    const width = parseInt(parts[p + 2]);
    if (!Number.isFinite(width) || width <= 0) return null;
    const meta = VECTOR_FIELD_MAP[name.toLowerCase()];
    if (meta && (width === 1 || width === 3)) {
      return { offset, width: width as 1 | 3, meta };
    }
    offset += width;
  }
  return null;
}

function parseXyzFrame(lines: string[], start: number): { frame: CrystalStructure; next: number } {
  let i = start;
  const nAtoms = parseInt(lines[i]);
  if (!Number.isFinite(nAtoms) || nAtoms <= 0) {
    throw new Error(`XYZ: invalid atom count at line ${i + 1}: "${lines[i]}"`);
  }
  i++;

  const comment = lines[i] || '';
  i++;

  let lattice: [number, number, number][] = [[20, 0, 0], [0, 20, 0], [0, 0, 20]];
  let pbc: [boolean, boolean, boolean] = [false, false, false];

  const latticeMatch = comment.match(/Lattice="([^"]+)"/i);
  if (latticeMatch) {
    const vals = latticeMatch[1].split(/\s+/).map(Number);
    if (vals.length === 9) {
      lattice = [
        [vals[0], vals[1], vals[2]],
        [vals[3], vals[4], vals[5]],
        [vals[6], vals[7], vals[8]],
      ];
      pbc = [true, true, true];
    }
  }

  const pbcMatch = comment.match(/pbc="([^"]+)"/i);
  if (pbcMatch) {
    const vals = pbcMatch[1].split(/\s+/);
    pbc = [vals[0] === 'T', vals[1] === 'T', vals[2] === 'T'];
  }

  const species: string[] = [];
  const positions: [number, number, number][] = [];
  const vecCol = findVectorColumn(comment);
  const vecValues: Array<[number, number, number]> = [];

  for (let j = 0; j < nAtoms; j++) {
    if (i + j >= lines.length) {
      throw new Error(`XYZ: frame at line ${start + 1} truncated (expected ${nAtoms} atoms)`);
    }
    const tokens = lines[i + j].split(/\s+/);
    if (tokens.length < 4) continue;

    let symbol = tokens[0];
    if (/^\d+$/.test(symbol)) {
      symbol = 'X';
    } else {
      symbol = symbol.charAt(0).toUpperCase() + symbol.slice(1).toLowerCase();
    }

    species.push(symbol);
    positions.push([parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3])]);

    if (vecCol) {
      const o = vecCol.offset;
      if (vecCol.width === 3) {
        const vx = parseFloat(tokens[o]);
        const vy = parseFloat(tokens[o + 1]);
        const vz = parseFloat(tokens[o + 2]);
        vecValues.push([
          Number.isFinite(vx) ? vx : 0,
          Number.isFinite(vy) ? vy : 0,
          Number.isFinite(vz) ? vz : 0,
        ]);
      } else {
        const v = parseFloat(tokens[o]);
        vecValues.push([0, 0, Number.isFinite(v) ? v : 0]);
      }
    }
  }
  i += nAtoms;

  const hasNonzeroVec = vecCol && vecValues.some(v =>
    Math.abs(v[0]) + Math.abs(v[1]) + Math.abs(v[2]) > 1e-8
  );

  return {
    frame: {
      lattice, species, positions, pbc, title: comment,
      ...(hasNonzeroVec ? { atomVectors: { ...vecCol!.meta, values: vecValues } } : {}),
    },
    next: i,
  };
}

export function parseXyz(content: string): CrystalStructure {
  const lines = content.split('\n').map(l => l.trim());
  return parseXyzFrame(lines, 0).frame;
}

/**
 * v0.17.1.3 — multi-frame extended XYZ parser. ASE writes trajectories as
 * concatenated single-frame XYZ blocks: each frame begins with the atom
 * count line. We walk frames sequentially until EOF.
 *
 * latticeMode: 'fixed' if every frame's parsed Lattice matrix is bit-equal
 * to frame 0's; 'per-frame' otherwise. Frames with the same lattice values
 * STILL get distinct lattice arrays in this parser (one per frame); after
 * detection we collapse to a shared REFERENCE for fixed-cell so the
 * renderer's setFrame optimization works.
 */
export function parseXyzTraj(content: string): CrystalTrajectory {
  const lines = content.split('\n').map(l => l.trim());
  const frames: CrystalStructure[] = [];

  let i = 0;
  // Skip leading blank lines
  while (i < lines.length && lines[i].length === 0) i++;
  if (i >= lines.length) throw new Error('XYZ: empty file');

  while (i < lines.length) {
    // Frame must start with a positive integer atom count
    if (lines[i].length === 0) { i++; continue; }
    const peek = parseInt(lines[i]);
    if (!Number.isFinite(peek) || peek <= 0) {
      // Trailing junk / non-XYZ content — stop parsing
      break;
    }
    const { frame, next } = parseXyzFrame(lines, i);
    frames.push(frame);
    i = next;
  }

  if (frames.length === 0) {
    throw new Error('XYZ: no valid frames found');
  }

  // Detect fixed-cell: all frame lattices bit-equal to frame 0's.
  let isFixed = true;
  for (let f = 1; f < frames.length && isFixed; f++) {
    const a = frames[0].lattice, b = frames[f].lattice;
    for (let r = 0; r < 3 && isFixed; r++) {
      for (let c = 0; c < 3 && isFixed; c++) {
        if (a[r][c] !== b[r][c]) isFixed = false;
      }
    }
  }

  if (isFixed) {
    // Share the lattice REFERENCE so renderer.setFrame can short-circuit
    // cell wireframe rebuild (CrystalTrajectory invariant).
    const sharedLat = frames[0].lattice;
    for (let f = 1; f < frames.length; f++) {
      frames[f] = { ...frames[f], lattice: sharedLat };
    }
  }

  return { frames, latticeMode: isFixed ? 'fixed' : 'per-frame' };
}
