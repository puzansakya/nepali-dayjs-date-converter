import { describe, expect, it } from 'vitest';

import { isNepDateInConversionRange } from '.';

describe('Nepali Date Converter', () => {
  it('should return true if nep date is in conversion range', () => {
    const isNepDateInConversionRangeData = isNepDateInConversionRange(
      2080,
      10,
      29,
    );
    expect(isNepDateInConversionRangeData).to.be.true;
  });
  it('should return false if nep date is not in conversion range', () => {
    const isNepDateInConversionRangeData = isNepDateInConversionRange(
      2091,
      10,
      29,
    );
    expect(isNepDateInConversionRangeData).to.be.false;
  });
});