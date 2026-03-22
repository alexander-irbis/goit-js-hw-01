import { describe, it, expect } from 'vitest';
import {
  makeTransaction,
  makeTransactionV1,
  makeTransactionV2,
  makeTransactionV3,
  makeTransactionV4,
  makeTransactionV5,
  makeTransactionV6,
} from '../js/task-1.js';

const expected = (qty, price) =>
  `You ordered ${qty} droids worth ${qty * price} credits!`;

describe.each([
  { name: 'makeTransaction', fn: makeTransaction },
  { name: 'V1 (concatenation)', fn: makeTransactionV1 },
  { name: 'V2 (template literal)', fn: makeTransactionV2 },
  { name: 'V3 (array join)', fn: makeTransactionV3 },
  { name: 'V4 (String.concat)', fn: makeTransactionV4 },
  { name: 'V5 (replace placeholders)', fn: makeTransactionV5 },
  { name: 'V6 (tagged template)', fn: makeTransactionV6 },
])('$name', ({ fn }) => {
  it('returns correct string for 5 droids at 3000', () => {
    expect(fn(5, 3000)).toBe(expected(5, 3000));
  });

  it('returns correct string for 1 droid at 500', () => {
    expect(fn(1, 500)).toBe(expected(1, 500));
  });

  it('returns correct string for 0 droids', () => {
    expect(fn(0, 1000)).toBe(expected(0, 1000));
  });
});
