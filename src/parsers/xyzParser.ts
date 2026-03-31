import { CrystalStructure } from './types';

export function parseXyz(content: string): CrystalStructure {
  const lines = content.split('\n').map(l => l.trim());
  let i = 0;

  // Line 0: number of atoms
  const nAtoms = parseInt(lines[0]);
  i++;

  // Line 1: comment (may contain lattice info)
  const comment = lines[1] || '';
  i++;

  // Try to extract lattice from extended XYZ format
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

  for (let j = 0; j < nAtoms && i < lines.length; j++, i++) {
    const tokens = lines[i].split(/\s+/);
    if (tokens.length < 4) continue;

    let symbol = tokens[0];
    // Might be atomic number
    if (/^\d+$/.test(symbol)) {
      // Basic lookup - just use the number as-is for now
      symbol = 'X';
    } else {
      symbol = symbol.charAt(0).toUpperCase() + symbol.slice(1).toLowerCase();
    }

    species.push(symbol);
    positions.push([parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3])]);
  }

  return { lattice, species, positions, pbc, title: comment };
}
