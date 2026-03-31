// CPU Marching Cubes implementation for isosurface extraction
// Input: 3D Float32Array grid, lattice vectors, isolevel
// Output: positions and normals as Float32Arrays

import { edgeTable, triTable } from './mcTables';

export interface MarchingCubesResult {
  positions: Float32Array;
  normals: Float32Array;
}

export function marchingCubes(
  data: Float32Array,
  dims: [number, number, number],
  origin: [number, number, number],
  lattice: [number, number, number][],
  isoLevel: number
): MarchingCubesResult {
  const [nx, ny, nz] = dims;
  const positions: number[] = [];
  const normals: number[] = [];

  // Voxel step vectors
  const dx = [lattice[0][0] / nx, lattice[0][1] / nx, lattice[0][2] / nx];
  const dy = [lattice[1][0] / ny, lattice[1][1] / ny, lattice[1][2] / ny];
  const dz = [lattice[2][0] / nz, lattice[2][1] / nz, lattice[2][2] / nz];

  function getVal(ix: number, iy: number, iz: number): number {
    return data[ix * ny * nz + iy * nz + iz];
  }

  function getPos(ix: number, iy: number, iz: number): [number, number, number] {
    return [
      origin[0] + ix * dx[0] + iy * dy[0] + iz * dz[0],
      origin[1] + ix * dx[1] + iy * dy[1] + iz * dz[1],
      origin[2] + ix * dx[2] + iy * dy[2] + iz * dz[2],
    ];
  }

  function interpolate(
    p1: [number, number, number], p2: [number, number, number],
    v1: number, v2: number
  ): [number, number, number] {
    if (Math.abs(v2 - v1) < 1e-10) {
      return p1;
    }
    const t = (isoLevel - v1) / (v2 - v1);
    return [
      p1[0] + t * (p2[0] - p1[0]),
      p1[1] + t * (p2[1] - p1[1]),
      p1[2] + t * (p2[2] - p1[2]),
    ];
  }

  for (let ix = 0; ix < nx - 1; ix++) {
    for (let iy = 0; iy < ny - 1; iy++) {
      for (let iz = 0; iz < nz - 1; iz++) {
        // 8 corner values
        const v = [
          getVal(ix, iy, iz),
          getVal(ix + 1, iy, iz),
          getVal(ix + 1, iy + 1, iz),
          getVal(ix, iy + 1, iz),
          getVal(ix, iy, iz + 1),
          getVal(ix + 1, iy, iz + 1),
          getVal(ix + 1, iy + 1, iz + 1),
          getVal(ix, iy + 1, iz + 1),
        ];

        // Determine cube index
        let cubeIndex = 0;
        for (let i = 0; i < 8; i++) {
          if (v[i] < isoLevel) cubeIndex |= (1 << i);
        }

        if (edgeTable[cubeIndex] === 0) continue;

        // 8 corner positions
        const p = [
          getPos(ix, iy, iz),
          getPos(ix + 1, iy, iz),
          getPos(ix + 1, iy + 1, iz),
          getPos(ix, iy + 1, iz),
          getPos(ix, iy, iz + 1),
          getPos(ix + 1, iy, iz + 1),
          getPos(ix + 1, iy + 1, iz + 1),
          getPos(ix, iy + 1, iz + 1),
        ];

        // Interpolate vertices on edges
        const vertList: [number, number, number][] = new Array(12);
        const edges = edgeTable[cubeIndex];

        if (edges & 1) vertList[0] = interpolate(p[0], p[1], v[0], v[1]);
        if (edges & 2) vertList[1] = interpolate(p[1], p[2], v[1], v[2]);
        if (edges & 4) vertList[2] = interpolate(p[2], p[3], v[2], v[3]);
        if (edges & 8) vertList[3] = interpolate(p[3], p[0], v[3], v[0]);
        if (edges & 16) vertList[4] = interpolate(p[4], p[5], v[4], v[5]);
        if (edges & 32) vertList[5] = interpolate(p[5], p[6], v[5], v[6]);
        if (edges & 64) vertList[6] = interpolate(p[6], p[7], v[6], v[7]);
        if (edges & 128) vertList[7] = interpolate(p[7], p[4], v[7], v[4]);
        if (edges & 256) vertList[8] = interpolate(p[0], p[4], v[0], v[4]);
        if (edges & 512) vertList[9] = interpolate(p[1], p[5], v[1], v[5]);
        if (edges & 1024) vertList[10] = interpolate(p[2], p[6], v[2], v[6]);
        if (edges & 2048) vertList[11] = interpolate(p[3], p[7], v[3], v[7]);

        // Generate triangles
        const tri = triTable[cubeIndex];
        for (let i = 0; tri[i] !== -1; i += 3) {
          const a = vertList[tri[i]];
          const b = vertList[tri[i + 1]];
          const c = vertList[tri[i + 2]];

          positions.push(a[0], a[1], a[2]);
          positions.push(b[0], b[1], b[2]);
          positions.push(c[0], c[1], c[2]);

          // Compute face normal
          const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
          const ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
          const nx = ab[1] * ac[2] - ab[2] * ac[1];
          const ny = ab[2] * ac[0] - ab[0] * ac[2];
          const nz = ab[0] * ac[1] - ab[1] * ac[0];
          const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
          normals.push(nx / len, ny / len, nz / len);
          normals.push(nx / len, ny / len, nz / len);
          normals.push(nx / len, ny / len, nz / len);
        }
      }
    }
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
  };
}
