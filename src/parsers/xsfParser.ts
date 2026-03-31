import { CrystalStructure, VolumetricData } from './types';
import { getElementByNumber } from './elements';

export function parseXsf(content: string): CrystalStructure & { volumetric?: VolumetricData } {
  const lines = content.split('\n');
  let lattice: [number, number, number][] = [];
  const species: string[] = [];
  const positions: [number, number, number][] = [];
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

  return { lattice, species, positions, pbc, title, volumetric };
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

  // Data values
  const totalPoints = nx * ny * nz;
  const data = new Float32Array(totalPoints);
  let idx = 0;

  while (i < lines.length && idx < totalPoints) {
    const line = lines[i].trim();
    if (line.startsWith('END_DATAGRID_3D') || line.startsWith('END_BLOCK_DATAGRID_3D')) break;
    const tokens = line.split(/\s+/);
    for (const t of tokens) {
      if (idx < totalPoints && t !== '') {
        data[idx++] = parseFloat(t);
      }
    }
    i++;
  }

  return { origin, lattice: gridLattice, dims: [nx, ny, nz], data };
}
