# vscode-matviz

VESTA-inspired crystal structure viewer as a VSCode extension.

## Architecture

Two execution contexts, two bundles:

- **Extension host** (Node.js): `src/extension.ts`, `src/editor/`, `src/parsers/` — reads files, parses structures, manages webview lifecycle. Bundle: `dist/extension.js` (CJS, externalizes `vscode`).
- **Webview** (browser): `src/webview/` — Three.js rendering, user interaction. Bundle: `dist/webview.js` (IIFE, includes Three.js).

Data flow: file → parser → `CrystalStructure` JSON → `postMessage` → webview → Three.js scene.

### Key types

- `CrystalStructure` (`src/parsers/types.ts`): the universal intermediate — lattice vectors, species[], cartesian positions[], pbc.
- `CrystalEditorProvider` (`src/editor/crystalEditorProvider.ts`): `CustomReadonlyEditorProvider<CrystalDocument>`. File association via `package.json` `contributes.customEditors`.
- `CrystalRenderer` (`src/webview/renderer.ts`): owns the Three.js scene. Groups: `atomGroup` (InstancedMesh per element), `bondGroup` (split-color cylinders), `cellGroup` (LineSegments wireframe).

### Element data duplication

`src/parsers/elements.ts` (Node.js) and `src/webview/elements-data.ts` (browser) both contain element lookups. They are separate because the two bundles target different platforms. Keep them in sync.

## Build

```
npm run build       # esbuild dual-entry (extension + webview)
npx tsc --noEmit    # type check only
npx @vscode/vsce package --no-dependencies  # produce .vsix
```

## Quality gates

Before any commit:
1. `npm run build` — must succeed
2. `npx tsc --noEmit` — zero errors
3. Manual: open a test fixture (test/fixtures/) in VSCode, verify rendering

## Conventions

- All parsers output `CrystalStructure`. New format support = new parser + register in `src/parsers/index.ts`.
- Webview communicates via typed messages (`src/webview/message.ts`). Add new message types there when extending the protocol.
- Three.js objects go into the appropriate group (`atomGroup`, `bondGroup`, `cellGroup`) and get cleaned up in `clearGroup()`.
- Atom rendering uses `InstancedMesh` — one per element type. Do not create individual `Mesh` per atom.
- Bond detection is O(N²); skip for structures >2000 atoms. Use spatial hashing if this limit needs raising.
- CSP in webview HTML must remain strict. Use nonce for scripts.

## File formats supported

CIF, POSCAR/CONTCAR/VASP, XSF. Auto-detection fallback in `src/parsers/index.ts`.

## Test fixtures

`test/fixtures/` — nacl.cif, silicon.poscar, graphene.xsf. Add new fixtures for each new format or edge case.

## Reinstall cycle

```
npm run build && npx @vscode/vsce package --no-dependencies && code --install-extension vscode-matviz-0.1.0.vsix --force
```
Then reopen an editor tab to pick up changes.
