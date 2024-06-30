import { describe, expect, it } from 'vitest';
import { isEngDateInConversionRange } from '.';

describe('Nepali Date Converter', () => {
  it('should return true if date is in conversion range', () => {
    const isEngDateInConversionRangeData = isEngDateInConversionRange(
      2024,
      10,
      29,
    );
    expect(isEngDateInConversionRangeData).to.be.true;
  });
  it('should return false if date is not in conversion range', () => {
    const isEngDateInConversionRangeData = isEngDateInConversionRange(
      2124,
      10,
      29,
    );
    expect(isEngDateInConversionRangeData).to.be.false;
  });
});

 