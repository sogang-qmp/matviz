import * as THREE from 'three';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';

/**
 * Wulff construction (v0.16.4).
 *
 * Given a set of crystal-faces (Miller indices + per-face surface energy),
 * the Wulff polytope is the intersection of half-spaces n_hkl · x ≤ γ_hkl,
 * where n_hkl is the reciprocal-lattice direction and γ_hkl the energy
 * (in arbitrary units — only ratios matter for shape).
 *
 * Algorithm: enumerate all triples of planes, solve each for the
 * intersection point, and keep points that satisfy all OTHER plane
 * constraints. Those points are the polytope vertices. A bounding box
 * is added as fallback so the result is always bounded.
 *
 * Complexity O(n⁴) for n planes (C(n,3) triples × n containment checks)
 * but n is small for typical Wulff (≤ 14 with cubic system + bounding
 * box); ≤ 1500 ops total.
 *
 * Triangulation handled by Three's ConvexGeometry (QuickHull) — same
 * approach as v0.15.2 polyhedra.
 */

export interface WulffPlane {
  normal: [number, number, number];   // outward normal in world Cartesian (Å⁻¹ scale OK; only direction matters)
  distance: number;                    // plane offset from origin (any consistent unit)
}

const POINT_DEDUP_TOL = 1e-4;           // Å²; coincident vertices from multiple triples
const PLANE_INSIDE_TOL = 1e-4;          // tolerance for "vertex satisfies plane" check

/**
 * Build a Wulff BufferGeometry. Throws if the input planes don't bound
 * a region (no triple-intersection vertices satisfy all constraints).
 */
export function computeWulffGeometry(planes: WulffPlane[], boundingBoxSize: number): THREE.BufferGeometry {
  if (planes.length === 0) {
    throw new Error('Wulff requires at least one plane');
  }

  // Add a bounding box so we always have something to clip; without it,
  // a single plane defines a half-space (unbounded). The box is large
  // enough that for valid Wulff inputs (where user planes do bound the
  // shape), the box's contribution falls outside the user planes and
  // gets discarded; for under-constrained inputs (e.g., one plane), the
  // bounding box gives the user something to see.
  const allPlanes = [...planes, ...boundingBoxPlanes(boundingBoxSize)];

  // Normalize all plane normals so distance comparisons are in consistent
  // units. (Wulff theorem implicitly assumes unit normals.)
  const normalized = allPlanes.map(p => {
    const [nx, ny, nz] = p.normal;
    const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
    if (len < 1e-12) throw new Error(`Wulff plane has zero normal: ${p.normal}`);
    return { normal: [nx / len, ny / len, nz / len] as [number, number, number], distance: p.distance / 1 };
  });

  const verts: [number, number, number][] = [];
  const N = normalized.length;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        const v = solveTriplePlanes(normalized[i], normalized[j], normalized[k]);
        if (!v) continue;
        if (!satisfiesAllPlanes(v, normalized)) continue;
        // Dedup — multiple triples can hit the same vertex
        if (containsApprox(verts, v)) continue;
        verts.push(v);
      }
    }
  }

  if (verts.length < 4) {
    throw new Error(`Wulff produced only ${verts.length} vertices — input planes don't bound a region`);
  }

  // ConvexGeometry handles triangulation + face winding
  const points = verts.map(v => new THREE.Vector3(v[0], v[1], v[2]));
  return new ConvexGeometry(points);
}

/**
 * Solve the 3×3 linear system for the intersection of three planes.
 * Returns null if the system is singular (planes parallel or coincident).
 */
function solveTriplePlanes(p1: WulffPlane, p2: WulffPlane, p3: WulffPlane): [number, number, number] | null {
  const a = p1.normal, b = p2.normal, c = p3.normal;
  // det = a · (b × c)
  const det =
    a[0] * (b[1] * c[2] - b[2] * c[1]) -
    a[1] * (b[0] * c[2] - b[2] * c[0]) +
    a[2] * (b[0] * c[1] - b[1] * c[0]);
  if (Math.abs(det) < 1e-10) return null;
  const invDet = 1 / det;
  // Cramer's rule with right-hand side [d1, d2, d3]
  const d1 = p1.distance, d2 = p2.distance, d3 = p3.distance;
  // Replace column 0 with d
  const x = (d1 * (b[1] * c[2] - b[2] * c[1]) -
             a[1] * (d2 * c[2] - b[2] * d3) +
             a[2] * (d2 * c[1] - b[1] * d3)) * invDet;
  // Replace column 1 with d
  const y = (a[0] * (d2 * c[2] - b[2] * d3) -
             d1 * (b[0] * c[2] - b[2] * c[0]) +
             a[2] * (b[0] * d3 - d2 * c[0])) * invDet;
  // Replace column 2 with d
  const z = (a[0] * (b[1] * d3 - d2 * c[1]) -
             a[1] * (b[0] * d3 - d2 * c[0]) +
             d1 * (b[0] * c[1] - b[1] * c[0])) * invDet;
  return [x, y, z];
}

/**
 * Check that point lies on the inner side of (or exactly on) every plane.
 */
function satisfiesAllPlanes(p: [number, number, number], planes: WulffPlane[]): boolean {
  for (const plane of planes) {
    const dot = p[0] * plane.normal[0] + p[1] * plane.normal[1] + p[2] * plane.normal[2];
    if (dot > plane.distance + PLANE_INSIDE_TOL) return false;
  }
  return true;
}

function containsApprox(verts: [number, number, number][], v: [number, number, number]): boolean {
  for (const u of verts) {
    const dx = u[0] - v[0], dy = u[1] - v[1], dz = u[2] - v[2];
    if (dx * dx + dy * dy + dz * dz < POINT_DEDUP_TOL * POINT_DEDUP_TOL) return true;
  }
  return false;
}

/**
 * 6 axis-aligned bounding-box planes at ±size/2 along x, y, z. Acts as a
 * fallback bound so that user-under-constrained Wulff inputs still
 * produce a visible polytope (rather than throwing for an unbounded
 * region).
 */
function boundingBoxPlanes(size: number): WulffPlane[] {
  const half = size * 0.5;
  return [
    { normal: [1, 0, 0],  distance: half },
    { normal: [-1, 0, 0], distance: half },
    { normal: [0, 1, 0],  distance: half },
    { normal: [0, -1, 0], distance: half },
    { normal: [0, 0, 1],  distance: half },
    { normal: [0, 0, -1], distance: half },
  ];
}

/**
 * Convert (hkl, γ) input + lattice basis into world-Cartesian Wulff planes.
 * The reciprocal-lattice direction h·a* + k·b* + l·c* gives the outward
 * face normal; γ is used as the plane offset (Wulff theorem says distance
 * ∝ surface energy, with proportionality fixed by the user-chosen unit).
 */
export function planesFromMillerIndices(
  hklGamma: Array<{ h: number; k: number; l: number; gamma: number }>,
  lattice: [number, number, number][],
): WulffPlane[] {
  // Reciprocal lattice vectors:
  //   a* = (b × c) / (a · (b × c))
  //   b* = (c × a) / (a · (b × c))
  //   c* = (a × b) / (a · (b × c))
  // We don't need the (2π) physics convention here — only direction +
  // relative magnitude. So compute b×c, c×a, a×b and normalize each by
  // det. Then n_hkl = h·a* + k·b* + l·c*.
  const a = lattice[0], b = lattice[1], c = lattice[2];
  const det =
    a[0] * (b[1] * c[2] - b[2] * c[1]) -
    a[1] * (b[0] * c[2] - b[2] * c[0]) +
    a[2] * (b[0] * c[1] - b[1] * c[0]);
  if (Math.abs(det) < 1e-12) throw new Error('Wulff: lattice is singular (zero cell volume)');
  const inv = 1 / det;
  const aStar: [number, number, number] = [
    (b[1] * c[2] - b[2] * c[1]) * inv,
    (b[2] * c[0] - b[0] * c[2]) * inv,
    (b[0] * c[1] - b[1] * c[0]) * inv,
  ];
  const bStar: [number, number, number] = [
    (c[1] * a[2] - c[2] * a[1]) * inv,
    (c[2] * a[0] - c[0] * a[2]) * inv,
    (c[0] * a[1] - c[1] * a[0]) * inv,
  ];
  const cStar: [number, number, number] = [
    (a[1] * b[2] - a[2] * b[1]) * inv,
    (a[2] * b[0] - a[0] * b[2]) * inv,
    (a[0] * b[1] - a[1] * b[0]) * inv,
  ];
  return hklGamma.map(({ h, k, l, gamma }) => ({
    normal: [
      h * aStar[0] + k * bStar[0] + l * cStar[0],
      h * aStar[1] + k * bStar[1] + l * cStar[1],
      h * aStar[2] + k * bStar[2] + l * cStar[2],
    ] as [number, number, number],
    distance: gamma,
  }));
}
