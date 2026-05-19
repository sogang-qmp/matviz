import {
  CrystalStructure, CrystalTrajectory, VolumetricData, AtomVectorField,
  VolumetricLoadOptions, VOLUMETRIC_SAFETY_MAX_GRID_POINTS, chooseStride,
} from './types';
import { getElementByNumber } from '../shared/elements-data';
import { iterLines, findBytes } from './lineIterator';

const DATAGRID_MARKER = new TextEncoder().encode('BEGIN_BLOCK_DATAGRID_3D');

/**
 * Auto-detect trailing vector data in a batch of PRIMCOORD/ATOMS atom rows.
 * The XSF spec calls cols 5–7 "atomic forces", but ASE-written XSF reuses the
 * same slots for magnetic moments (collinear → 1 trailing column, non-collinear
 * → 3). We surface them as a generic vector field; the user can interpret the
 * arrows as forces or moments based on their source. Returns null when token
 * counts are mixed or no atom carries trailing data.
 */
function extractAtomVectorsFromRows(rows: string[][]): AtomVectorField | null {
  if (rows.length === 0) return null;
  let minExtra = Infinity;
  for (const r of rows) {
    const extra = r.length - 4;
    if (extra < 0) return null;
    if (extra < minExtra) minExtra = extra;
  }
  if (minExtra >= 3) {
    const values: Array<[number, number, number]> = [];
    for (const r of rows) {
      const mx = parseFloat(r[4]);
      const my = parseFloat(r[5]);
      const mz = parseFloat(r[6]);
      if (!Number.isFinite(mx) || !Number.isFinite(my) || !Number.isFinite(mz)) return null;
      values.push([mx, my, mz]);
    }
    if (values.every(v => Math.abs(v[0]) + Math.abs(v[1]) + Math.abs(v[2]) < 1e-8)) return null;
    return { kind: 'generic', label: 'Atomic vector (col 5–7)', values };
  }
  if (minExtra === 1) {
    const values: Array<[number, number, number]> = [];
    for (const r of rows) {
      const m = parseFloat(r[4]);
      if (!Number.isFinite(m)) return null;
      values.push([0, 0, m]);
    }
    if (values.every(v => Math.abs(v[2]) < 1e-8)) return null;
    return { kind: 'generic', label: 'Atomic scalar (col 5, along z)', values };
  }
  return null;
}

export function parseXsf(content: string): CrystalStructure & { volumetric?: VolumetricData } {
  const lines = content.split('\n');
  let lattice: [number, number, number][] = [];
  const species: string[] = [];
  const positions: [number, number, number][] = [];
  const atomRows: string[][] = [];
  let pbc: [boolean, boolean, boolean] = [false, false, false];
  let title = '';

  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();

    if (line === 'CRYSTAL') {
      pbc = [true, true, true];
      i++; continue;
    }
    if (line === 'SLAB') {
      pbc = [true, true, false];
      i++; continue;
    }
    if (line === 'POLYMER') {
      pbc = [true, false, false];
      i++; continue;
    }
    if (line === 'MOLECULE' || line === 'ATOMS') {
      pbc = [false, false, false];
      i++; continue;
    }

    if (line === 'PRIMVEC' || line === 'CONVVEC') {
      lattice = [];
      for (let j = 1; j <= 3; j++) {
        const vals = lines[i + j].trim().split(/\s+/).map(Number);
        lattice.push([vals[0], vals[1], vals[2]]);
      }
      i += 4; continue;
    }

    if (line.startsWith('PRIMCOORD') || line.startsWith('CONVCOORD')) {
      i++;
      const header = lines[i].trim().split(/\s+/);
      const natoms = parseInt(header[0]);
      i++;

      for (let j = 0; j < natoms; j++) {
        const tokens = lines[i + j].trim().split(/\s+/);
        const first = tokens[0];

        // First token can be atomic number or element symbol
        let symbol: string;
        if (/^\d+$/.test(first)) {
          symbol = getElementByNumber(parseInt(first)).symbol;
        } else {
          symbol = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
        }

        species.push(symbol);
        positions.push([
          parseFloat(tokens[1]),
          parseFloat(tokens[2]),
          parseFloat(tokens[3]),
        ]);
        atomRows.push(tokens);
      }
      i += natoms; continue;
    }

    // Non-periodic ATOMS section (just atom lines without header)
    if (line && !line.startsWith('#') && !line.startsWith('_') && species.length === 0) {
      const tokens = line.split(/\s+/);
      if (tokens.length >= 4) {
        const first = tokens[0];
        if (/^\d+$/.test(first) || /^[A-Z][a-z]?$/.test(first)) {
          let symbol: string;
          if (/^\d+$/.test(first)) {
            symbol = getElementByNumber(parseInt(first)).symbol;
          } else {
            symbol = first;
          }
          species.push(symbol);
          positions.push([parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3])]);
          atomRows.push(tokens);
          i++; continue;
        }
      }
    }

    i++;
  }

  if (lattice.length === 0) {
    lattice = [[10, 0, 0], [0, 10, 0], [0, 0, 10]];
  }

  // Parse BLOCK_DATAGRID_3D if present
  let volumetric: VolumetricData | undefined;
  const datagridIdx = content.indexOf('BEGIN_BLOCK_DATAGRID_3D');
  if (datagridIdx >= 0) {
    volumetric = parseDatagrid3D(content.slice(datagridIdx));
  }

  const atomVectors = extractAtomVectorsFromRows(atomRows) ?? undefined;

  return { lattice, species, positions, pbc, title, volumetric, atomVectors };
}

/**
 * AXSF multi-frame parser. AXSF extends XSF with `ANIMSTEPS N` plus one
 * PRIMCOORD block per frame; lattice is either specified once (fixed-cell)
 * or as numbered `PRIMVEC k` blocks (per-frame). Fixed-cell frames share
 * the same lattice reference so the renderer's cell wireframe doesn't
 * rebuild per frame.
 */
export function parseXsfTraj(content: string): { trajectory: CrystalTrajectory; volumetric?: VolumetricData } {
  const lines = content.split('\n');
  let pbc: [boolean, boolean, boolean] = [true, true, true];
  let title = '';

  // First scan: detect ANIMSTEPS + crystal type
  let animSteps = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('ANIMSTEPS')) {
      const tokens = line.split(/\s+/);
      animSteps = parseInt(tokens[1] || '0');
    }
    if (line === 'SLAB') pbc = [true, true, false];
    else if (line === 'POLYMER') pbc = [true, false, false];
    else if (line === 'MOLECULE' || line === 'ATOMS') pbc = [false, false, false];
  }

  if (animSteps <= 1) {
    // Single-frame: delegate to parseXsf and wrap.
    const r = parseXsf(content);
    const { volumetric, ...structure } = r;
    return {
      trajectory: { frames: [structure], latticeMode: 'fixed' },
      volumetric,
    };
  }

  // Multi-frame: walk linearly, building lattice + frames as we encounter
  // PRIMVEC / PRIMCOORD blocks.
  let sharedLattice: [number, number, number][] | null = null;
  const perFrameLattices: ([number, number, number][] | null)[] = new Array(animSteps).fill(null);
  const frameAtoms: { species: string[]; positions: [number, number, number][]; rows: string[][] }[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith('PRIMVEC') || line.startsWith('CONVVEC')) {
      // Detect optional frame index: "PRIMVEC 1" → per-frame
      const tokens = line.split(/\s+/);
      const lat: [number, number, number][] = [];
      for (let j = 1; j <= 3; j++) {
        const vals = lines[i + j].trim().split(/\s+/).map(Number);
        lat.push([vals[0], vals[1], vals[2]]);
      }
      if (tokens.length > 1 && /^\d+$/.test(tokens[1])) {
        const idx = parseInt(tokens[1]) - 1; // 1-based to 0-based
        if (idx >= 0 && idx < animSteps) perFrameLattices[idx] = lat;
      } else {
        sharedLattice = lat;
      }
      i += 4; continue;
    }

    if (line.startsWith('PRIMCOORD') || line.startsWith('CONVCOORD')) {
      const tokens = line.split(/\s+/);
      const frameIdx = tokens.length > 1 && /^\d+$/.test(tokens[1])
        ? parseInt(tokens[1]) - 1
        : frameAtoms.length;
      i++;
      const header = lines[i].trim().split(/\s+/);
      const natoms = parseInt(header[0]);
      i++;

      const species: string[] = [];
      const positions: [number, number, number][] = [];
      const rows: string[][] = [];
      for (let j = 0; j < natoms; j++) {
        const lineTokens = lines[i + j].trim().split(/\s+/);
        const first = lineTokens[0];
        let symbol: string;
        if (/^\d+$/.test(first)) {
          symbol = getElementByNumber(parseInt(first)).symbol;
        } else {
          symbol = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
        }
        species.push(symbol);
        positions.push([
          parseFloat(lineTokens[1]),
          parseFloat(lineTokens[2]),
          parseFloat(lineTokens[3]),
        ]);
        rows.push(lineTokens);
      }
      // Pad frameAtoms array if frameIdx is out of order
      while (frameAtoms.length <= frameIdx) {
        frameAtoms.push({ species: [], positions: [], rows: [] });
      }
      frameAtoms[frameIdx] = { species, positions, rows };
      i += natoms; continue;
    }

    i++;
  }

  // Resolve lattice mode
  const hasPerFrameLattice = perFrameLattices.some(l => l !== null);
  const latticeMode: 'fixed' | 'per-frame' = hasPerFrameLattice ? 'per-frame' : 'fixed';

  const fallback: [number, number, number][] = sharedLattice || [[10,0,0],[0,10,0],[0,0,10]];

  // Build frames; share lattice ref when fixed (renderer optimization
  // depends on object identity).
  const frames: CrystalStructure[] = [];
  for (let k = 0; k < animSteps; k++) {
    if (!frameAtoms[k] || frameAtoms[k].species.length === 0) continue;
    const lat = hasPerFrameLattice
      ? (perFrameLattices[k] || sharedLattice || fallback)
      : fallback;
    const atomVectors = extractAtomVectorsFromRows(frameAtoms[k].rows) ?? undefined;
    frames.push({
      lattice: lat,
      species: frameAtoms[k].species,
      positions: frameAtoms[k].positions,
      pbc,
      title,
      atomVectors,
    });
  }

  // Volumetric (rare in multi-frame AXSF) — if present, attach only via
  // the parent helper since trajectory itself doesn't carry it.
  let volumetric: VolumetricData | undefined;
  const datagridIdx = content.indexOf('BEGIN_BLOCK_DATAGRID_3D');
  if (datagridIdx >= 0) {
    volumetric = parseDatagrid3D(content.slice(datagridIdx));
  }

  return { trajectory: { frames, latticeMode }, volumetric };
}

function parseDatagrid3D(block: string): VolumetricData | undefined {
  const lines = block.split('\n');
  let i = 0;

  // Find BEGIN_DATAGRID_3D
  while (i < lines.length && !lines[i].trim().startsWith('BEGIN_DATAGRID_3D')) i++;
  if (i >= lines.length) return undefined;
  i++;

  // Grid dimensions
  const dimTokens = lines[i].trim().split(/\s+/).map(Number);
  const nx = dimTokens[0], ny = dimTokens[1], nz = dimTokens[2];
  i++;

  // Origin
  const origTokens = lines[i].trim().split(/\s+/).map(Number);
  const origin: [number, number, number] = [origTokens[0], origTokens[1], origTokens[2]];
  i++;

  // 3 spanning vectors
  const gridLattice: [number, number, number][] = [];
  for (let v = 0; v < 3; v++) {
    const vTokens = lines[i].trim().split(/\s+/).map(Number);
    gridLattice.push([vTokens[0], vTokens[1], vTokens[2]]);
    i++;
  }

  // Data values — XSF writes with ix fastest (Fortran order). Store in C order
  // (ix slowest, iz fastest) so `data[ix*ny*nz + iy*nz + iz]` works downstream.
  const totalPoints = nx * ny * nz;
  const data = new Float32Array(totalPoints);
  let ix = 0, iy = 0, iz = 0;
  let count = 0;

  while (i < lines.length && count < totalPoints) {
    const line = lines[i].trim();
    if (line.startsWith('END_DATAGRID_3D') || line.startsWith('END_BLOCK_DATAGRID_3D')) break;
    const tokens = line.split(/\s+/);
    for (const t of tokens) {
      if (count < totalPoints && t !== '') {
        data[ix * ny * nz + iy * nz + iz] = parseFloat(t);
        count++;
        ix++;
        if (ix === nx) { ix = 0; iy++; if (iy === ny) { iy = 0; iz++; } }
      }
    }
    i++;
  }

  return { origin, lattice: gridLattice, dims: [nx, ny, nz], data };
}

/**
 * Byte-path single-frame XSF parser (v0.22 Tier 2). Use when the file is
 * too large to materialize as a single JS string (V8 ceiling ~512 MiB).
 * Header portion is decoded as a small string and fed to the existing
 * `parseXsf` (structure / atoms / lattice unchanged); only the DATAGRID
 * grid blob is processed line-by-line over the byte buffer.
 */
export function parseXsfFromBytes(
  bytes: Uint8Array,
  options?: VolumetricLoadOptions,
): CrystalStructure & { volumetric?: VolumetricData } {
  const datagridOffset = findBytes(bytes, DATAGRID_MARKER);
  if (datagridOffset < 0) {
    return parseXsf(new TextDecoder('utf-8', { fatal: false }).decode(bytes));
  }
  const headerStr = new TextDecoder('utf-8', { fatal: false }).decode(bytes.subarray(0, datagridOffset));
  const header = parseXsf(headerStr);
  const volumetric = parseDatagrid3DFromBytes(bytes.subarray(datagridOffset), options);
  return { ...header, volumetric };
}

function parseDatagrid3DFromBytes(blockBytes: Uint8Array, options?: VolumetricLoadOptions): VolumetricData | undefined {
  const lines = iterLines(blockBytes);
  const cap = options?.maxGridPoints ?? VOLUMETRIC_SAFETY_MAX_GRID_POINTS;

  let nx = 0, ny = 0, nz = 0;
  const origin: [number, number, number] = [0, 0, 0];
  const gridLattice: [number, number, number][] = [];
  let stage: 'find-begin' | 'dims' | 'origin' | 'vec1' | 'vec2' | 'vec3' | 'data' = 'find-begin';

  let data: Float32Array | null = null;
  let stride = 1;
  let outNx = 0, outNy = 0, outNz = 0;
  let totalPoints = 0;
  let ix = 0, iy = 0, iz = 0;
  let count = 0;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (stage === 'find-begin') {
      if (line.startsWith('BEGIN_DATAGRID_3D')) stage = 'dims';
      continue;
    }
    if (stage === 'dims') {
      const t = line.split(/\s+/).map(Number);
      nx = t[0]; ny = t[1]; nz = t[2];
      totalPoints = nx * ny * nz;
      stride = chooseStride(nx, ny, nz, cap);
      outNx = Math.ceil(nx / stride);
      outNy = Math.ceil(ny / stride);
      outNz = Math.ceil(nz / stride);
      data = new Float32Array(outNx * outNy * outNz);
      stage = 'origin';
      continue;
    }
    if (stage === 'origin') {
      const t = line.split(/\s+/).map(Number);
      origin[0] = t[0]; origin[1] = t[1]; origin[2] = t[2];
      stage = 'vec1';
      continue;
    }
    if (stage === 'vec1' || stage === 'vec2' || stage === 'vec3') {
      const t = line.split(/\s+/).map(Number);
      gridLattice.push([t[0], t[1], t[2]]);
      stage = stage === 'vec1' ? 'vec2' : stage === 'vec2' ? 'vec3' : 'data';
      continue;
    }
    if (line.startsWith('END_DATAGRID_3D') || line.startsWith('END_BLOCK_DATAGRID_3D')) break;
    if (count >= totalPoints) break;
    const tokens = line.split(/\s+/);
    for (const t of tokens) {
      if (count >= totalPoints || t === '') continue;
      // Source ordering (XSF Fortran): ix fastest in the file stream;
      // storage is C order (iz fastest in memory). Apply stride during
      // ingestion: emit only when all three indices are multiples of stride.
      if (ix % stride === 0 && iy % stride === 0 && iz % stride === 0) {
        const oi = ix / stride, oj = iy / stride, ok = iz / stride;
        data![oi * outNy * outNz + oj * outNz + ok] = parseFloat(t);
      }
      count++;
      ix++;
      if (ix === nx) { ix = 0; iy++; if (iy === ny) { iy = 0; iz++; } }
    }
  }

  if (!data) return undefined;
  const result: VolumetricData = {
    origin, lattice: gridLattice, dims: [outNx, outNy, outNz], data,
  };
  if (stride > 1) {
    result.stride = stride;
    result.originalDims = [nx, ny, nz];
  }
  return result;
}
