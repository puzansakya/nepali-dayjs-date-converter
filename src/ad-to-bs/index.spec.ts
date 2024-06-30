import { describe, expect, it } from 'vitest';
import { ADToBS } from '.';

describe('Nepali Date Converter', () => {
  it('should convert english string date to correct nepali date', () => {
    const response = ADToBS('2024-06-14');
    expect(response).to.equal('2081-02-32');
  });
});

