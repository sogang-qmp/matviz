import { CrystalStructure, CrystalTrajectory, VolumetricData } from './types';
import { detectSymmetry, isSpglibReady } from '../shared/spglibWasm';
import { parseCif } from './cifParser';
import { parsePoscar } from './poscarParser';
import { parseXsf, parseXsfTraj } from './xsfParser';
import { parseXdatcar, parseXdatcarTraj } from './xdatcarParser';
import { parseChgcar } from './chgcarParser';
import { parseCube } from './cubeParser';
import { parseXyz, parseXyzTraj } from './xyzParser';
import { parsePdb } from './pdbParser';
import { parseQE } from './qeParser';
import { parseAims } from './aimsParser';

export interface ParseResult {
  structure: CrystalStructure;
  volumetric?: VolumetricData;
}

export interface ParseTrajectoryResult {
  trajectory: CrystalTrajectory;
  volumetric?: VolumetricData;  // first-frame volumetric only (v0.17 scope)
}

/**
 * v0.20 post-parser symmetry pass. Runs spglib (`@spglib/moyo-wasm`) on
 * every parsed structure that didn't already get a `spaceGroup` from its
 * source file. CIF wins on conflict — its `_space_group_name_*` is taken
 * as authoritative even when spglib would disagree.
 *
 * No-op when spglib hasn't been initialized in the current host process
 * (`initSpglib*()` not yet called). The post-pass returns the original
 * structure unchanged in that case so the rest of the pipeline keeps
 * working — info pill simply falls back to 'P1' as in pre-v0.20.
 */
function withSymmetry(structure: CrystalStructure): CrystalStructure {
  if (!isSpglibReady()) return structure;
  // Defer to whatever the parser already extracted (typically only CIF).
  if (structure.spaceGroup && structure.spaceGroup !== 'P1') return structure;
  if (structure.species.length === 0) return structure;
  const sym = detectSymmetry(structure.lattice, structure.positions, structure.species);
  if (!sym) return structure;
  return {
    ...structure,
    spaceGroup: sym.spaceGroup,
    spaceGroupNumber: sym.spaceGroupNumber,
    hallNumber: sym.hallNumber,
  };
}

function withSymmetryResult(r: ParseResult): ParseResult {
  return { ...r, structure: withSymmetry(r.structure) };
}

export function parseStructureFile(content: string, filename: string): ParseResult {
  return withSymmetryResult(parseStructureFileRaw(content, filename));
}

function parseStructureFileRaw(content: string, filename: string): ParseResult {
  const lower = filename.toLowerCase();

  if (lower.endsWith('.cif')) {
    return { structure: parseCif(content) };
  }
  if (lower.endsWith('.xsf') || lower.endsWith('.axsf')) {
    const result = parseXsf(content);
    const { volumetric, ...structure } = result;
    return { structure, volumetric };
  }
  if (lower.endsWith('.cube') || lower.endsWith('.cub')) {
    const result = parseCube(content);
    return result;
  }
  if (lower.endsWith('.xyz')) {
    return { structure: parseXyz(content) };
  }
  if (lower.endsWith('.pdb') || lower.endsWith('.ent')) {
    return { structure: parsePdb(content) };
  }
  if (
    lower.endsWith('.out') ||
    lower.endsWith('.pw') ||
    lower.endsWith('.stdout') ||
    lower.endsWith('.stdin')
  ) {
    return { structure: parseQE(content) };
  }
  if (lower === 'geometry.in' || lower.endsWith('.in')) {
    // FHI-aims signature
    if (content.includes('atom ') || content.includes('lattice_vector')) {
      return { structure: parseAims(content) };
    }
    // Otherwise treat as Quantum ESPRESSO input
    return { structure: parseQE(content) };
  }
  if (
    lower.endsWith('.poscar') ||
    lower.endsWith('.vasp') ||
    lower === 'poscar' ||
    lower === 'contcar'
  ) {
    return { structure: parsePoscar(content) };
  }
  if (lower === 'xdatcar') {
    return { structure: parseXdatcar(content) };
  }
  if (lower === 'chgcar' || lower === 'aeccar0' || lower === 'aeccar2' || lower === 'parchg') {
    const result = parseChgcar(content);
    return result;
  }

  // Auto-detection
  if (content.includes('_cell_length_a') || content.includes('_atom_site')) {
    return { structure: parseCif(content) };
  }
  if (content.includes('PRIMVEC') || content.includes('PRIMCOORD') || content.includes('CRYSTAL')) {
    const result = parseXsf(content);
    const { volumetric, ...structure } = result;
    return { structure, volumetric };
  }

  // Default: try POSCAR
  return { structure: parsePoscar(content) };
}

export { CrystalStructure, CrystalTrajectory, VolumetricData } from './types';

/**
 * Trajectory-aware entry point for v0.17 multi-frame formats. Format-specific
 * multi-frame parsers plug in here as they land:
 *   - 17.1.1 AXSF (multi-frame XSF) ✅
 *   - 17.1.2 XDATCAR
 *   - 17.1.3 extended XYZ
 * Other formats wrap their single-frame output into a length-1 trajectory.
 * Existing call sites that don't need multi-frame can keep using
 * parseStructureFile() — backward compatible.
 */
export function parseStructureFileTraj(content: string, filename: string): ParseTrajectoryResult {
  const r = parseStructureFileTrajRaw(content, filename);
  // Trajectory policy (locked decision A): detect symmetry on frame 0 only,
  // copy the result to all frames. Avoids per-frame jitter during MD/relax
  // playback where the symmetry is invariant.
  if (r.trajectory.frames.length > 0) {
    const f0 = withSymmetry(r.trajectory.frames[0]);
    r.trajectory.frames[0] = f0;
    if (f0.spaceGroup && r.trajectory.frames.length > 1) {
      for (let i = 1; i < r.trajectory.frames.length; i++) {
        r.trajectory.frames[i] = {
          ...r.trajectory.frames[i],
          spaceGroup: f0.spaceGroup,
          spaceGroupNumber: f0.spaceGroupNumber,
          hallNumber: f0.hallNumber,
        };
      }
    }
  }
  return r;
}

function parseStructureFileTrajRaw(content: string, filename: string): ParseTrajectoryResult {
  const lower = filename.toLowerCase();

  // 17.1.1 — AXSF multi-frame dispatch. parseXsfTraj also handles single-frame
  // XSF (delegates to parseXsf + wrap), so route both extensions here.
  if (lower.endsWith('.xsf') || lower.endsWith('.axsf')) {
    return parseXsfTraj(content);
  }
  // 17.1.2 — XDATCAR (VASP MD) is intrinsically multi-frame.
  if (lower === 'xdatcar') {
    return { trajectory: parseXdatcarTraj(content) };
  }
  // 17.1.3 — extended XYZ (ASE format). parseXyzTraj works for both
  // single-frame plain XYZ and multi-frame ASE trajectories.
  if (lower.endsWith('.xyz')) {
    return { trajectory: parseXyzTraj(content) };
  }
  // 17.3.1 — content-based auto-detection for trajectory formats with
  // non-standard filenames. CLI users often copy XDATCAR to my_md.dat or
  // similar; AXSF can lose its extension. Marker strings are unambiguous.
  if (content.includes('Direct configuration=') || content.includes('Cartesian configuration=')) {
    return { trajectory: parseXdatcarTraj(content) };
  }
  if (content.includes('ANIMSTEPS')) {
    return parseXsfTraj(content);
  }

  // Fallback: single-frame parser + wrap.
  const single = parseStructureFile(content, filename);
  return {
    trajectory: { frames: [single.structure], latticeMode: 'fixed' },
    volumetric: single.volumetric,
  };
}
