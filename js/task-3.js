// Task 3 — getElementWidth
//
// Parsing "Npx" strings: approaches compared
//
// parseFloat("50px")          → 50    — best choice for CSS values; parses
//                                       the leading number, ignores the suffix.
//                                       Handles integers and floats alike.
//
// parseInt("8.5px")           → 8     — drops the fractional part, unsuitable
//                                       when decimals matter.
//
// Number("50px".replace("px","")) → 50 — explicit suffix removal + strict
//                                       conversion. Works, but two steps where
//                                       parseFloat does it in one.
//
// Number("50px".slice(0,-2))  → 50    — brittle: assumes the suffix is always
//                                       exactly 2 characters.
//
// Note: JS has no built-in strip_suffix / removesuffix like Python or Rust.
//
// Rust's strip_suffix is especially elegant — it returns Option<&str>, so you
// can simultaneously check that the suffix was present AND get the clean value:
//
//   if let Some(n) = "50px".strip_suffix("px") {
//       // n is "50" — we know for sure it was "px", not "em" or something else
//   }
//
// Python 3.9+ has str.removesuffix("px") — simpler (always returns a string),
// but you don't get the "was it actually there?" signal without a separate check.
//
// In JS, the closest to a suffix-aware removal is a regex with $:
//
//   "50px".replace(/px$/, "")   → "50"   — only strips a trailing "px"
//   "50em".replace(/px$/, "")   → "50em" — no match, unchanged
//
// This avoids the pitfall of plain .replace("px","") which would strip "px"
// anywhere in the string, not just at the end.
//
// For CSS value parsing, parseFloat() is the idiomatic one-stop solution.

function getElementWidth(content, padding, border) {
  return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200

export { getElementWidth };
