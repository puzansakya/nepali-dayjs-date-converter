import { describe, expect, it } from 'vitest';
import { BSToAD } from '.';

describe('Nepali Date Converter', () => {
  it('should convert nepali string date to correct english date', () => {
    const response = BSToAD('2081-02-32');

    expect(response).to.be.equal('2024-06-14');
  });
});
