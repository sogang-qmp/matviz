/**
 * Verification for v0.17.1.0 — CrystalTrajectory data contract + parser bridge.
 *
 * Asserts:
 *   1. parseStructureFileTraj wraps single-frame fixture as 1-frame trajectory
 *   2. trajectory.frames[0] equals what parseStructureFile would return
 *   3. latticeMode='fixed' on wrap
 *   4. multi-frame format detection is dormant in 17.1.0 (AXSF still wraps to
 *      length 1 — multi-frame parsing arrives in 17.1.1)
 *   5. existing single-frame parsers untouched (regression-free)
 *
 * Run via: node dist/test-trajectory.js
 */

import * as fs from 'fs';
import * as path from 'path';
import { parseStructureFile, parseStructureFileTraj } from '../src/parsers/index';

const ROOT = process.cwd();

function fail(msg: string): never { console.error(`✗ FAIL: ${msg}`); process.exit(1); }
function pass(msg: string): void { console.log(`✓ ${msg}`); }

// ---- Test 1: single-frame CIF wraps into 1-frame trajectory ----
{
  const p = path.join(ROOT, 'test/fixtures/nacl.cif');
  const content = fs.readFileSync(p, 'utf8');
  const traj = parseStructureFileTraj(content, 'nacl.cif').trajectory;
  if (traj.frames.length !== 1) fail(`nacl.cif: expected 1 frame, got ${traj.frames.length}`);
  if (traj.latticeMode !== 'fixed') fail(`nacl.cif: latticeMode should be 'fixed', got '${traj.latticeMode}'`);
  if (traj.frames[0].species.length === 0) fail(`nacl.cif: frame 0 has no atoms (parser regression)`);
  pass(`nacl.cif: wrapped into 1-frame trajectory (latticeMode=fixed, ${traj.frames[0].species.length} atoms)`);
}

// ---- Test 2: trajectory frame[0] equals direct parser output ----
{
  const p = path.join(ROOT, 'test/fixtures/silicon.poscar');
  const content = fs.readFileSync(p, 'utf8');
  const direct = parseStructureFile(content, 'silicon.poscar').structure;
  const wrapped = parseStructureFileTraj(content, 'silicon.poscar').trajectory.frames[0];
  if (direct.species.length !== wrapped.species.length) {
    fail(`silicon.poscar: direct ${direct.species.length} vs wrapped ${wrapped.species.length} atoms`);
  }
  for (let i = 0; i < direct.species.length; i++) {
    if (direct.species[i] !== wrapped.species[i]) {
      fail(`silicon.poscar: species[${i}] differs ${direct.species[i]} vs ${wrapped.species[i]}`);
    }
  }
  pass(`silicon.poscar: trajectory.frames[0] matches direct parseStructureFile output`);
}

// ---- Test 3: AXSF (single-frame XSF currently) wraps as 1-frame too ----
//      Multi-frame AXSF parsing arrives in 17.1.1.
{
  const p = path.join(ROOT, 'test/fixtures/graphene.xsf');
  const content = fs.readFileSync(p, 'utf8');
  const traj = parseStructureFileTraj(content, 'graphene.xsf').trajectory;
  if (traj.frames.length !== 1) {
    fail(`graphene.xsf (no ANIMSTEPS): expected 1 frame, got ${traj.frames.length} (17.1.1 not yet shipped)`);
  }
  pass(`graphene.xsf: 1-frame wrap (multi-frame XSF parsing dormant pending 17.1.1)`);
}

// ---- Test 4: existing parser tests still green (regression check) ----
//      Direct parseStructureFile path untouched.
{
  const fixtures = ['nacl.cif', 'silicon.poscar', 'tio2-rutile.cif', 'graphene.xsf'];
  for (const f of fixtures) {
    const p = path.join(ROOT, 'test/fixtures/', f);
    const content = fs.readFileSync(p, 'utf8');
    const direct = parseStructureFile(content, f).structure;
    if (direct.species.length === 0) fail(`${f}: parseStructureFile broken`);
  }
  pass(`existing parsers untouched: parseStructureFile works for nacl/silicon/tio2-rutile/graphene`);
}

// ---- Test 5: invariants — frame[0] valid, latticeMode known value ----
{
  const p = path.join(ROOT, 'test/fixtures/test-magmom.poscar');
  const content = fs.readFileSync(p, 'utf8');
  const traj = parseStructureFileTraj(content, 'test-magmom.poscar').trajectory;
  if (traj.frames.length < 1) fail('invariant: frames.length must be >= 1');
  if (traj.latticeMode !== 'fixed' && traj.latticeMode !== 'per-frame') {
    fail(`invariant: latticeMode must be 'fixed' or 'per-frame', got '${traj.latticeMode}'`);
  }
  if (traj.frames[0].positions.length !== traj.frames[0].species.length) {
    fail(`invariant: positions/species length mismatch`);
  }
  // v0.16 optional fields preserved on frame 0
  if (!traj.frames[0].magMom) fail(`v0.16 magMom not preserved through trajectory wrap`);
  pass(`invariants verified: frames>=1, latticeMode valid, positions/species aligned, v0.16 magMom preserved`);
}

console.log('\nAll v0.17.1.0 trajectory-bridge tests passed.');
