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
  volumetric?: VolumetricData;  // first-frame volumetric only
}

// Cells past this size skip spglib — analyze_cell cost is non-monotone in
// atom count (~240 ms at 216, ~7 s at 512 for diamond Fd-3m supercells).
const SYMMETRY_MAX_ATOMS = 256;

function withSymmetry(structure: CrystalStructure): CrystalStructure {
  if (!isSpglibReady()) return structure;
  if (structure.spaceGroup && structure.spaceGroup !== 'P1') return structure;
  if (structure.species.length === 0) return structure;
  if (structure.species.length > SYMMETRY_MAX_ATOMS) return structure;
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

// Trajectory-aware entry point. Single-frame formats wrap into a length-1
// trajectory; symmetry is detected on frame 0 only and copied to the rest
// to avoid per-frame jitter.
export function parseStructureFileTraj(content: string, filename: string): ParseTrajectoryResult {
  const r = parseStructureFileTrajRaw(content, filename);
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

  if (lower.endsWith('.xsf') || lower.endsWith('.axsf')) {
    return parseXsfTraj(content);
  }
  if (lower === 'xdatcar') {
    return { trajectory: parseXdatcarTraj(content) };
  }
  if (lower.endsWith('.xyz')) {
    return { trajectory: parseXyzTraj(content) };
  }
  // Content-based fallback for trajectory files with non-standard names.
  if (content.includes('Direct configuration=') || content.includes('Cartesian configuration=')) {
    return { trajectory: parseXdatcarTraj(content) };
  }
  if (content.includes('ANIMSTEPS')) {
    return parseXsfTraj(content);
  }

  // Single-frame fallback wrapped as length-1 trajectory.
  const single = parseStructureFile(content, filename);
  return {
    trajectory: { frames: [single.structure], latticeMode: 'fixed' },
    volumetric: single.volumetric,
  };
}
