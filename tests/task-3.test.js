import { describe, it, expect } from 'vitest';
import { getElementWidth } from '../js/task-3.js';

describe('getElementWidth', () => {
  it('calculates width with integer values', () => {
    expect(getElementWidth('50px', '8px', '4px')).toBe(74);
  });

  it('calculates width with fractional border', () => {
    expect(getElementWidth('60px', '12px', '8.5px')).toBe(101);
  });

  it('calculates width with zero padding and border', () => {
    expect(getElementWidth('200px', '0px', '0px')).toBe(200);
  });

  it('calculates width with fractional content', () => {
    expect(getElementWidth('100.5px', '10px', '5px')).toBe(130.5);
  });
});
