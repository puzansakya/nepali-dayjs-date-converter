import { describe, expect, it } from 'vitest';
import { isEngLeapYear } from '.';

describe('Nepali Date Converter', () => {
  it('should return true for leap year', () => {
    const isEngLeapYearData = isEngLeapYear(2024);
    expect(isEngLeapYearData).to.be.true;
  });
  it('should return false for non leap year', () => {
    const isEngLeapYearData = isEngLeapYear(2023);
    expect(isEngLeapYearData).to.be.false;
  });
});

