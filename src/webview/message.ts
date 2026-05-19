import { CrystalStructure, CrystalTrajectory, VolumetricData } from '../parsers/types';

export type DisplayStyle = 'ball-and-stick' | 'space-filling' | 'stick' | 'wireframe';
export type CameraMode = 'orthographic' | 'perspective';
export type BondStyle = 'bicolor' | 'unicolor' | 'line';

export type ExtensionMessage =
  | { type: 'loadStructure'; data: CrystalStructure }
  | { type: 'loadVolumetric'; data: { origin: [number, number, number]; lattice: [number, number, number][]; dims: [number, number, number]; data: Float32Array } }
  | { type: 'resetCamera' }
  | { type: 'toggleBonds' }
  | { type: 'viewAlongDirection'; uvw: [number, number, number] }
  | { type: 'viewNormalToPlane'; hkl: [number, number, number] }
  | { type: 'addLatticePlane'; hkl: [number, number, number]; distance?: number }
  | { type: 'clearLatticePlanes' }
  | { type: 'setWulff'; planes: Array<{ h: number; k: number; l: number; gamma: number }> }
  | { type: 'clearWulff' }
  | { type: 'loadTrajectory'; data: CrystalTrajectory }
  | { type: 'setFrame'; index: number }
  | { type: 'addPhase'; data: CrystalStructure; offset?: [number, number, number]; opacity?: number }
  | { type: 'clearPhases' }
  | { type: 'compareToPhase' }
  | { type: 'clearComparison' }
  | { type: 'setPhaseVisible'; index: number; visible: boolean }
  | { type: 'setPhaseOpacity'; index: number; opacity: number }
  | { type: 'removePhase'; index: number };

// Webview → extension messages (handled in crystalEditorProvider's
// onDidReceiveMessage).
export type WebviewMessage =
  | { type: 'ready' }
  | { type: 'atomSelected'; data: { index: number; element: string; cartesian: [number, number, number]; fractional: [number, number, number] } | null }
  | { type: 'measurement'; data: { type: 'distance' | 'angle' | 'dihedral'; value: number; atoms: number[] } }
  | { type: 'openAsText' }
  | { type: 'addPhaseRequest' }
  | { type: 'comparisonResult'; ok: boolean; reason?: string };
