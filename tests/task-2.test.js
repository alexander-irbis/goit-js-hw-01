import { describe, it, expect } from 'vitest';
import { getShippingMessage } from '../js/task-2.js';

describe('getShippingMessage', () => {
  it('calculates total for Australia', () => {
    expect(getShippingMessage('Australia', 120, 50)).toBe(
      'Shipping to Australia will cost 170 credits',
    );
  });

  it('calculates total for Germany', () => {
    expect(getShippingMessage('Germany', 80, 20)).toBe(
      'Shipping to Germany will cost 100 credits',
    );
  });

  it('calculates total for Sweden', () => {
    expect(getShippingMessage('Sweden', 100, 20)).toBe(
      'Shipping to Sweden will cost 120 credits',
    );
  });

  it('handles zero delivery fee', () => {
    expect(getShippingMessage('Japan', 200, 0)).toBe(
      'Shipping to Japan will cost 200 credits',
    );
  });
});
