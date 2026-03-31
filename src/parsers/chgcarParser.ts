import { CrystalStructure, VolumetricData } from './types';
import { parsePoscar } from './poscarParser';

export function parseChgcar(content: string): { structure: CrystalStructure; volumetric: VolumetricData } {
  // CHGCAR = POSCAR header + blank line + grid dimensions + charge data
  const lines = content.split('\n');

  // Find the blank line separating POSCAR from charge data
  // POSCAR ends after atom coordinates, then optional blank line, then grid line
  let poscarEnd = -1;
  let atomsStarted = false;
  let atomCount = 0;
  let expectedAtoms = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Line 6 or 7 has atom counts
    if (i === 5 || i === 6) {
      const tokens = line.split(/\s+/);
      if (tokens.every(t => /^\d+$/.test(t))) {
        expectedAtoms = tokens.reduce((sum, t) => sum + parseInt(t), 0);
      }
    }

    // After coordinate mode line, count atom lines
    if (i >= 7 && !atomsStarted && /^[dDcCkK]/.test(line)) {
      atomsStarted = true;
      continue;
    }

    if (atomsStarted && atomCount < expectedAtoms) {
      atomCount++;
      if (atomCount === expectedAtoms) {
        poscarEnd = i + 1;
        break;
      }
    }
  }

  if (poscarEnd < 0) poscarEnd = 8;

  // Parse POSCAR part
  const poscarContent = lines.slice(0, poscarEnd).join('\n');
  const structure = parsePoscar(poscarContent);

  // Parse volumetric data
  // Skip blank lines after POSCAR
  let gridLine = poscarEnd;
  while (gridLine < lines.length && lines[gridLine].trim() === '') gridLine++;

  const gridTokens = lines[gridLine].trim().split(/\s+/).map(Number);
  const nx = gridTokens[0];
  const ny = gridTokens[1];
  const nz = gridTokens[2];
  gridLine++;

  // Read charge density values
  const totalPoints = nx * ny * nz;
  const data = new Float32Array(totalPoints);
  let idx = 0;

  for (let i = gridLine; i < lines.length && idx < totalPoints; i++) {
    const line = lines[i].trim();
    if (line === '' || line.startsWith('augmentation')) break;
    const tokens = line.split(/\s+/);
    for (const t of tokens) {
      if (idx < totalPoints) {
        data[idx++] = parseFloat(t);
      }
    }
  }

  // Normalize by volume
  const lat = structure.lattice;
  const a = lat[0], b = lat[1], c = lat[2];
  const vol = Math.abs(
    a[0] * (b[1] * c[2] - b[2] * c[1]) -
    a[1] * (b[0] * c[2] - b[2] * c[0]) +
    a[2] * (b[0] * c[1] - b[1] * c[0])
  );
  const scale = 1 / vol;
  for (let i = 0; i < data.length; i++) {
    data[i] *= scale;
  }

  const volumetric: VolumetricData = {
    origin: [0, 0, 0],
    lattice: structure.lattice,
    dims: [nx, ny, nz],
    data,
  };

  return { structure, volumetric };
}
