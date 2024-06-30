import { describe, expect, it } from 'vitest';

import { stitchDate } from '.';

describe('Nepali Date Converter', () => {
  it('should return correct stiched date', () => {
    const date = stitchDate(2024, 10, 29);

    expect(date).to.be.equal('2024-10-29');
  });
});
 