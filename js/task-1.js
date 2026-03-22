// Task 1 — makeTransaction
// Demonstrates different approaches to string formatting in JavaScript.

// --- Approach 1: String concatenation ---
// The oldest and most basic way. Works everywhere, but becomes hard to read
// when there are many variables or the string is long.
function makeTransactionV1(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return (
    'You ordered ' + quantity + ' droids worth ' + totalPrice + ' credits!'
  );
}

// --- Approach 2: Template literals (ES6+) ---
// Backtick strings with ${expression} interpolation. Readable, supports
// multiline out of the box, and allows any expression inside ${}.
// The modern standard — preferred in virtually all contemporary JS code.
function makeTransactionV2(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// --- Approach 3: Array.join ---
// Builds the string from an array of parts. Useful when pieces are generated
// dynamically (e.g. in a loop), but overkill for a simple sentence — harder
// to read than a template literal with no real benefit here.
function makeTransactionV3(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return ['You ordered', quantity, 'droids worth', totalPrice, 'credits!'].join(
    ' ',
  );
}

// --- Approach 4: String.prototype.concat() ---
// A method-based equivalent of the + operator. Exists since ES1, but almost
// nobody uses it — more verbose than concatenation with no added benefit.
// Mainly a curiosity: proof that strings are objects with methods.
function makeTransactionV4(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return ''.concat(
    'You ordered ',
    quantity,
    ' droids worth ',
    totalPrice,
    ' credits!',
  );
}

// --- Approach 5: String.prototype.replace() with placeholders ---
// A sprintf-style pattern: define a template with placeholders, then replace
// them with values. Overkill here, but valuable when the template comes from
// an external source (i18n, configs) and you don't control its structure.
function makeTransactionV5(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return 'You ordered {quantity} droids worth {totalPrice} credits!'
    .replace('{quantity}', quantity)
    .replace('{totalPrice}', totalPrice);
}

// --- Approach 6: Tagged template literals ---
// The tag function receives static string parts and interpolated values as
// separate arguments, giving full control over how they are combined.
// Here we just reconstruct the string, but real-world uses include HTML
// sanitization (lit-html), CSS-in-JS (styled-components), and SQL escaping.
// This is a language-level mechanism for building DSLs, not just formatting.
function passthrough(strings, ...values) {
  return strings.reduce(
    (result, str, i) => result + str + (values[i] ?? ''),
    '',
  );
}

function makeTransactionV6(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return passthrough`You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// --- Final version (best practice) ---
// Template literals are the clear winner for this kind of task:
// readable, concise, and expressive.
function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

export {
  makeTransaction,
  makeTransactionV1,
  makeTransactionV2,
  makeTransactionV3,
  makeTransactionV4,
  makeTransactionV5,
  makeTransactionV6,
};
