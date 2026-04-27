/**
 * v0.20 (19.3) — property-panel undo/redo stack.
 *
 * Generic single-stack design (undo + redo capped at `cap` total entries).
 * Scope: side-panel property edits only — element color/radius/visibility,
 * per-pair bond min/max/enable. Camera, selection, supercell, display style
 * are intentionally excluded so Ctrl+Z behaves predictably ("undo my last
 * panel edit" rather than "undo any session change").
 *
 * Each `record(undo, redo)` call:
 *   - pushes a new entry onto the undo stack
 *   - clears the redo stack (linear history — no branching)
 *   - drops the oldest entry if cap exceeded.
 */

export interface UndoEntry {
  undo: () => void;
  redo: () => void;
}

export class UndoStack {
  private undos: UndoEntry[] = [];
  private redos: UndoEntry[] = [];
  private readonly cap: number;

  constructor(cap = 50) {
    this.cap = cap;
  }

  record(undo: () => void, redo: () => void) {
    this.undos.push({ undo, redo });
    if (this.undos.length > this.cap) this.undos.shift();
    this.redos = [];
  }

  /** Returns true if an undo was performed. */
  undo(): boolean {
    const e = this.undos.pop();
    if (!e) return false;
    e.undo();
    this.redos.push(e);
    return true;
  }

  /** Returns true if a redo was performed. */
  redo(): boolean {
    const e = this.redos.pop();
    if (!e) return false;
    e.redo();
    this.undos.push(e);
    return true;
  }

  canUndo(): boolean { return this.undos.length > 0; }
  canRedo(): boolean { return this.redos.length > 0; }
  clear() { this.undos = []; this.redos = []; }
}
