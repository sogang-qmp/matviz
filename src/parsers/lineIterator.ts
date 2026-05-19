/**
 * Byte-level line iteration utilities for parsing files that may exceed
 * V8's MAX_STRING_LENGTH (~512 MiB on x64). Used by the *FromBytes
 * volumetric parser variants (v0.22 Tier 2). A single yielded line is
 * still materialized as a JS string, so the helper is only safe for
 * formats where individual lines stay well under the string ceiling —
 * which is true for ASCII scientific volumetric formats (cube, XSF,
 * CHGCAR) where lines hold at most a handful of floats.
 */

/**
 * Yield UTF-8 decoded lines from a byte buffer. Handles `\n`, `\r\n`,
 * and bare `\r` line endings. The trailing partial line (no terminator)
 * is yielded last. BOM at start of buffer is stripped by TextDecoder.
 */
export function* iterLines(buf: Uint8Array): IterableIterator<string> {
  const decoder = new TextDecoder('utf-8', { fatal: false });
  let start = 0;
  for (let i = 0; i < buf.length; i++) {
    const b = buf[i];
    if (b === 0x0A) {
      const end = i > start && buf[i - 1] === 0x0D ? i - 1 : i;
      yield decoder.decode(buf.subarray(start, end));
      start = i + 1;
    } else if (b === 0x0D && (i + 1 === buf.length || buf[i + 1] !== 0x0A)) {
      yield decoder.decode(buf.subarray(start, i));
      start = i + 1;
    }
  }
  if (start < buf.length) {
    yield decoder.decode(buf.subarray(start));
  }
}

/** First occurrence of `needle` in `haystack` starting at `from`. -1 if not found. */
export function findBytes(haystack: Uint8Array, needle: Uint8Array, from = 0): number {
  if (needle.length === 0) return from;
  const last = haystack.length - needle.length;
  outer: for (let i = from; i <= last; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) continue outer;
    }
    return i;
  }
  return -1;
}

/**
 * Return the byte offset of the start of the (1-indexed) N-th line after
 * `from`. Used to slice off a header portion of length-known line count.
 * Returns -1 if the buffer has fewer than N line terminators after `from`.
 */
export function offsetAfterLines(buf: Uint8Array, n: number, from = 0): number {
  let lines = 0;
  for (let i = from; i < buf.length; i++) {
    const b = buf[i];
    if (b === 0x0A) {
      lines++;
      if (lines === n) return i + 1;
    } else if (b === 0x0D && (i + 1 === buf.length || buf[i + 1] !== 0x0A)) {
      // Bare \r (classic Mac line ending) — counts as a line terminator
      // for parity with iterLines.
      lines++;
      if (lines === n) return i + 1;
    }
  }
  return -1;
}
