import { describe, expect, it } from 'vitest';
import { main } from '.';

describe('Mock', () => {
    it('should prepare correct mock data', async () => {
        const res = await main()
        console.log(JSON.stringify(res, null, 2))
        // expect(isEngDateInConversionRangeData).to.be.true;
    });
});

