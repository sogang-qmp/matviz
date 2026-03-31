import { CrystalStructure } from './types';

export function parseAims(content: string): CrystalStructure {
  const lines = content.split('\n');
  const lattice: [number, number, number][] = [];
  const species: string[] = [];
  const positions: [number, number, number][] = [];
  const fracPositions: [number, number, number][] = [];
  let hasFractional = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('#') || trimmed === '') continue;

    const tokens = trimmed.split(/\s+/);

    if (tokens[0] === 'lattice_vector') {
      lattice.push([
        parseFloat(tokens[1]),
        parseFloat(tokens[2]),
        parseFloat(tokens[3]),
      ]);
    }

    if (tokens[0] === 'atom') {
      const symbol = tokens[4].charAt(0).toUpperCase() + tokens[4].slice(1).toLowerCase();
      species.push(symbol);
      positions.push([
        parseFloat(tokens[1]),
        parseFloat(tokens[2]),
        parseFloat(tokens[3]),
      ]);
    }

    if (tokens[0] === 'atom_frac') {
      hasFractional = true;
      const symbol = tokens[4].charAt(0).toUpperCase() + tokens[4].slice(1).toLowerCase();
      species.push(symbol);
      fracPositions.push([
        parseFloat(tokens[1]),
        parseFloat(tokens[2]),
        parseFloat(tokens[3]),
      ]);
    }
  }

  // Convert fractional to cartesian if needed
  if (hasFractional && lattice.length === 3) {
    for (const f of fracPositions) {
      positions.push([
        f[0] * lattice[0][0] + f[1] * lattice[1][0] + f[2] * lattice[2][0],
        f[0] * lattice[0][1] + f[1] * lattice[1][1] + f[2] * lattice[2][1],
        f[0] * lattice[0][2] + f[1] * lattice[1][2] + f[2] * lattice[2][2],
      ]);
    }
  }

  if (lattice.length === 0) {
    // Non-periodic system
    return {
      lattice: [[20, 0, 0], [0, 20, 0], [0, 0, 20]],
      species,
      positions,
      pbc: [false, false, false],
      title: 'FHI-aims geometry',
    };
  }

  return {
    lattice,
    species,
    positions,
    pbc: [true, true, true],
    title: 'FHI-aims geometry',
  };
}
