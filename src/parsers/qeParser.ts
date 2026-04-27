import { CrystalStructure } from './types';

const BOHR_TO_ANG = 0.529177249;

/**
 * Quantum ESPRESSO input/output parser.
 *
 * Lattice priority:
 *   1. CELL_PARAMETERS (highest — pw.x output writes the relaxed cell here)
 *   2. ibrav code from &SYSTEM (input files where lattice is implicit)
 *
 * ibrav coverage: 0, ±1, 2, ±3, 4, ±5, 6, 7, 8, ±9, 91, 10, 11, ±12, ±13, 14.
 * Lattice parameters resolve from EITHER celldm(1..6) (Bohr-based) OR
 * the alternative A,B,C,cosAB,cosAC,cosBC (Å + direct cosines) — never both.
 *
 * ATOMIC_POSITIONS unit handling: alat (default) | bohr | angstrom | crystal.
 */
export function parseQE(content: string): CrystalStructure {
  const lines = content.split('\n');
  let lattice: [number, number, number][] = [];
  const species: string[] = [];
  const positions: [number, number, number][] = [];
  const title = 'QE input/output';

  // --- Pass 1: scan the whole file for namelist parameters and section markers ---
  // Locate the *last* CELL_PARAMETERS / ATOMIC_POSITIONS so pw.x output
  // (multiple ionic steps) yields the final relaxed structure.
  let lastCellIdx = -1;
  let lastPosIdx = -1;
  let ibrav = 0;
  const celldm: number[] = [0, 0, 0, 0, 0, 0];   // celldm(1)..(6) — index shifted to 0-based
  const abc: { A?: number; B?: number; C?: number; cosAB?: number; cosAC?: number; cosBC?: number } = {};

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    // Strip Fortran-style comment ('!') and trim
    const line = raw.replace(/!.*$/, '').trim();
    if (line === '') continue;

    if (line.startsWith('CELL_PARAMETERS')) lastCellIdx = i;
    if (line.startsWith('ATOMIC_POSITIONS')) lastPosIdx = i;

    // Namelist tokens may share lines via commas: "ibrav=1, nat=12, ntyp=5"
    // Process each comma-separated chunk independently.
    for (const chunk of line.split(/[,;]/)) {
      const ibravM = chunk.match(/\bibrav\s*=\s*(-?\d+)/i);
      if (ibravM) ibrav = parseInt(ibravM[1]);

      const cdM = chunk.match(/\bcelldm\s*\(\s*(\d)\s*\)\s*=\s*([0-9.eEdD+\-]+)/i);
      if (cdM) {
        const idx = parseInt(cdM[1]);
        if (idx >= 1 && idx <= 6) celldm[idx - 1] = parseFortranFloat(cdM[2]);
      }

      // A/B/C and cosAB/cosAC/cosBC — direct Å + cosine form. Match standalone
      // names (avoid colliding with `nat`, `cosAB_`, etc.) by requiring "=".
      const directM = chunk.match(/\b(A|B|C|cosAB|cosAC|cosBC)\s*=\s*([0-9.eEdD+\-]+)/);
      if (directM) {
        const key = directM[1] as keyof typeof abc;
        abc[key] = parseFortranFloat(directM[2]);
      }
    }
  }

  // --- Build lattice ---
  if (lastCellIdx >= 0) {
    // Explicit CELL_PARAMETERS wins (matches pw.x output's final cell).
    const header = lines[lastCellIdx].toLowerCase();
    const isBohr = header.includes('bohr');
    const isAlat = header.includes('alat');
    const alat = celldm[0] > 0 ? celldm[0] * BOHR_TO_ANG : (abc.A ?? 1.0);
    const scale = isBohr ? BOHR_TO_ANG : isAlat ? alat : 1.0;

    lattice = [];
    for (let j = 1; j <= 3; j++) {
      const vals = lines[lastCellIdx + j].trim().split(/\s+/).map(parseFortranFloat);
      lattice.push([vals[0] * scale, vals[1] * scale, vals[2] * scale]);
    }
  } else if (ibrav !== 0) {
    // Generate lattice from the Bravais code + dimensional parameters.
    const params = resolveLatticeParams(celldm, abc);
    if (params) lattice = buildLatticeFromIbrav(ibrav, celldm, abc, params);
  }

  // --- ATOMIC_POSITIONS ---
  if (lastPosIdx >= 0) {
    const mode = lines[lastPosIdx].toLowerCase();
    const isCrystal = mode.includes('crystal');
    const isBohr = mode.includes('bohr');
    const isAng = mode.includes('angstrom');
    // QE default when no unit specified is `alat`. The existing implementation
    // silently treated this as Å — fixed here.
    const isAlat = !isCrystal && !isBohr && !isAng;
    const alat = celldm[0] > 0 ? celldm[0] * BOHR_TO_ANG : (abc.A ?? 1.0);
    const cartScale = isBohr ? BOHR_TO_ANG : isAlat ? alat : 1.0;

    for (let j = lastPosIdx + 1; j < lines.length; j++) {
      const line = lines[j].replace(/!.*$/, '').trim();
      if (line === '' || line.startsWith('End') || line.startsWith('CELL') ||
          line.startsWith('ATOMIC') || line.startsWith('K_POINTS') ||
          line.startsWith('OCCUPATIONS') || line.startsWith('CONSTRAINTS') ||
          line.startsWith('HUBBARD') || line.startsWith('SOLVENTS') ||
          line.startsWith('&')) break;
      const tokens = line.split(/\s+/);
      if (tokens.length < 4) break;

      const symbol = tokens[0].charAt(0).toUpperCase() + tokens[0].slice(1).toLowerCase();
      species.push(symbol);

      const x = parseFortranFloat(tokens[1]);
      const y = parseFortranFloat(tokens[2]);
      const z = parseFortranFloat(tokens[3]);

      if (isCrystal && lattice.length === 3) {
        positions.push([
          x * lattice[0][0] + y * lattice[1][0] + z * lattice[2][0],
          x * lattice[0][1] + y * lattice[1][1] + z * lattice[2][1],
          x * lattice[0][2] + y * lattice[1][2] + z * lattice[2][2],
        ]);
      } else {
        positions.push([x * cartScale, y * cartScale, z * cartScale]);
      }
    }
  }

  if (lattice.length !== 3 || positions.length === 0) {
    throw new Error(
      'Quantum ESPRESSO parser: missing lattice or atoms. Expected either ' +
      'CELL_PARAMETERS (ibrav=0) or ibrav>0 with celldm/(A,B,C,...) plus ATOMIC_POSITIONS.'
    );
  }

  return { lattice, species, positions, pbc: [true, true, true], title };
}

/**
 * Fortran's "1.0d-12" double-precision suffix isn't recognized by JS parseFloat.
 * Translate `d|D` → `e` before parsing. Also handles plain decimals.
 */
function parseFortranFloat(s: string): number {
  return parseFloat(s.replace(/[dD]/, 'e'));
}

/**
 * Unify celldm and (A,B,C,cosAB,cosAC,cosBC) into a single (a,b,c + cosines)
 * representation in Å. Returns null when neither form supplied a length scale.
 *
 * For celldm form:
 *   a = celldm(1) × Bohr→Å
 *   b = celldm(2) × a   (celldm(2) is b/a; default to a if not set)
 *   c = celldm(3) × a   (celldm(3) is c/a)
 *   cosines come from celldm(4..6) — but each ibrav puts them in DIFFERENT
 *   slots, so we expose them as raw celldm[3..5] and let each case pick.
 *
 * For A,B,C form: direct Å values + direct cosines.
 */
interface LatticeParams { a: number; b: number; c: number; }
function resolveLatticeParams(
  cd: number[],
  abc: { A?: number; B?: number; C?: number },
): LatticeParams | null {
  if (cd[0] > 0) {
    const a = cd[0] * BOHR_TO_ANG;
    const b = cd[1] > 0 ? cd[1] * a : a;
    const c = cd[2] > 0 ? cd[2] * a : a;
    return { a, b, c };
  }
  if (abc.A != null && abc.A > 0) {
    return { a: abc.A, b: abc.B ?? abc.A, c: abc.C ?? abc.A };
  }
  return null;
}

/**
 * Lattice vectors per QE Bravais index. Source: QE pw.x INPUT_PW manual,
 * "ibrav" table (see comment in conversation 2026-04-27 for the full text).
 *
 * The cosine-bearing ibrav values pull from raw celldm slots: each case
 * documents which slot it consumes, since the slot↔angle mapping varies
 * across ibrav (e.g. celldm(4) means cos(γ)=cos(ab) for ibrav=12, but
 * cos(α)=cos(bc) for ibrav=14). When the alt-form (A,B,C,cosAB,...) is
 * used, we synthesize compatible celldm(4..6) below.
 */
function buildLatticeFromIbrav(
  ibrav: number,
  cd: number[],
  abc: { cosAB?: number; cosAC?: number; cosBC?: number },
  p: LatticeParams,
): [number, number, number][] {
  const { a, b, c } = p;
  // Resolve cosines: prefer celldm slot when set, otherwise fall back to the
  // alt-form cosine that semantically matches each ibrav case. The slot↔angle
  // mapping varies, so we name the resolved cosines by their physical meaning.
  // pick(): use celldm if non-zero, else the alt-form value, else 0.
  const pick = (slot: number, alt?: number): number =>
    slot !== 0 ? slot : (alt ?? 0);
  // For ibrav=±5 (trigonal R, all 3 inter-axis angles equal), the user may
  // supply the angle in any of cosAB/cosAC/cosBC under the alt form; accept
  // whichever is set.
  const trigonalCos = pick(cd[3], abc.cosBC ?? abc.cosAB ?? abc.cosAC);
  // Per-case slots:
  const cosAB_for_12_13 = pick(cd[3], abc.cosAB);   // ibrav=12,13 → celldm(4)=cos(γ)=cosAB
  const cosAC_for_neg = pick(cd[4], abc.cosAC);     // ibrav=-12,-13 → celldm(5)=cos(β)=cosAC
  // ibrav=14 needs all three (α, β, γ):
  const cosAlpha = pick(cd[3], abc.cosBC);          // celldm(4)=cos(α)=cosBC
  const cosBeta  = pick(cd[4], abc.cosAC);          // celldm(5)=cos(β)=cosAC
  const cosGamma = pick(cd[5], abc.cosAB);          // celldm(6)=cos(γ)=cosAB

  switch (ibrav) {
    case 1: // cubic P (sc)
      return [[a, 0, 0], [0, a, 0], [0, 0, a]];

    case 2: // cubic F (fcc)
      return [
        [-a/2, 0, a/2],
        [0,    a/2, a/2],
        [-a/2, a/2, 0],
      ];

    case 3: // cubic I (bcc)
      return [
        [a/2,  a/2, a/2],
        [-a/2, a/2, a/2],
        [-a/2, -a/2, a/2],
      ];

    case -3: // bcc, more symmetric axis
      return [
        [-a/2, a/2,  a/2],
        [a/2,  -a/2, a/2],
        [a/2,  a/2,  -a/2],
      ];

    case 4: // hexagonal & trigonal P (celldm(3) = c/a)
      return [
        [a, 0, 0],
        [-a/2, a*Math.sqrt(3)/2, 0],
        [0, 0, c],
      ];

    case 5:   // trigonal R, 3-fold along c (celldm(4) = cos(γ))
    case -5: {
      const cg = trigonalCos;
      const tx = Math.sqrt((1 - cg) / 2);
      const ty = Math.sqrt((1 - cg) / 6);
      const tz = Math.sqrt((1 + 2 * cg) / 3);
      if (ibrav === 5) {
        return [
          [a*tx, -a*ty, a*tz],
          [0,    2*a*ty, a*tz],
          [-a*tx, -a*ty, a*tz],
        ];
      }
      // ibrav = -5: 3-fold along <111>
      const aP = a / Math.sqrt(3);
      const u = tz - 2*Math.sqrt(2)*ty;
      const v = tz + Math.sqrt(2)*ty;
      return [
        [aP*u, aP*v, aP*v],
        [aP*v, aP*u, aP*v],
        [aP*v, aP*v, aP*u],
      ];
    }

    case 6: // tetragonal P (celldm(3) = c/a)
      return [[a, 0, 0], [0, a, 0], [0, 0, c]];

    case 7: // tetragonal I (bct, celldm(3) = c/a)
      return [
        [a/2,  -a/2, c/2],
        [a/2,  a/2,  c/2],
        [-a/2, -a/2, c/2],
      ];

    case 8: // orthorhombic P (celldm(2)=b/a, celldm(3)=c/a)
      return [[a, 0, 0], [0, b, 0], [0, 0, c]];

    case 9:  // orthorhombic base-centered (bco)
      return [
        [a/2,  b/2, 0],
        [-a/2, b/2, 0],
        [0,    0,   c],
      ];

    case -9: // bco, alternate
      return [
        [a/2, -b/2, 0],
        [a/2,  b/2, 0],
        [0,    0,   c],
      ];

    case 91: // orthorhombic A-type one-face base-centered
      return [
        [a, 0, 0],
        [0, b/2, -c/2],
        [0, b/2,  c/2],
      ];

    case 10: // orthorhombic face-centered (fco)
      return [
        [a/2, 0, c/2],
        [a/2, b/2, 0],
        [0,   b/2, c/2],
      ];

    case 11: // orthorhombic body-centered (bco-I)
      return [
        [a/2,  b/2,  c/2],
        [-a/2, b/2,  c/2],
        [-a/2, -b/2, c/2],
      ];

    case 12: { // monoclinic P, unique-c (celldm(4)=cos(ab)=cos(γ))
      const g = Math.acos(cosAB_for_12_13);
      return [
        [a, 0, 0],
        [b*Math.cos(g), b*Math.sin(g), 0],
        [0, 0, c],
      ];
    }

    case -12: { // monoclinic P, unique-b (celldm(5)=cos(ac)=cos(β))
      const beta = Math.acos(cosAC_for_neg);
      return [
        [a, 0, 0],
        [0, b, 0],
        [c*Math.cos(beta), 0, c*Math.sin(beta)],
      ];
    }

    case 13: { // monoclinic base-centered, unique-c (celldm(4)=cos(γ))
      const g = Math.acos(cosAB_for_12_13);
      return [
        [a/2, 0, -c/2],
        [b*Math.cos(g), b*Math.sin(g), 0],
        [a/2, 0, c/2],
      ];
    }

    case -13: { // monoclinic base-centered, unique-b (celldm(5)=cos(β))
      const beta = Math.acos(cosAC_for_neg);
      return [
        [a/2,  b/2, 0],
        [-a/2, b/2, 0],
        [c*Math.cos(beta), 0, c*Math.sin(beta)],
      ];
    }

    case 14: { // triclinic — celldm(4)=cos(α), (5)=cos(β), (6)=cos(γ)
      const ca = cosAlpha;
      const cb = cosBeta;
      const cg = cosGamma;
      const sg = Math.sqrt(1 - cg*cg);
      const v3z = c * Math.sqrt(
        Math.max(0, 1 + 2*ca*cb*cg - ca*ca - cb*cb - cg*cg)
      ) / sg;
      return [
        [a, 0, 0],
        [b*cg, b*sg, 0],
        [c*cb, c*(ca - cb*cg)/sg, v3z],
      ];
    }

    default:
      throw new Error(`Quantum ESPRESSO parser: ibrav=${ibrav} not recognized (supported: 0, ±1, 2, ±3, 4, ±5, 6, 7, 8, ±9, 91, 10, 11, ±12, ±13, 14).`);
  }
}
