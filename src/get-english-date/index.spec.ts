/* eslint-disable @typescript-eslint/no-unused-expressions */
import { describe, expect, it } from 'vitest';
import {getEnglishDate} from '.';
import {stitchDate} from '../stitch-date';

describe('Nepali Date Converter', () => {
    it('should convert given nepali date to correct english date', () => {
        const getEnglishDateData = getEnglishDate(2080, 11, 10);

        const date = stitchDate(
            getEnglishDateData.year,
            getEnglishDateData.month,
            getEnglishDateData.day,
        );

        expect(date).to.be.equal('2024-02-22');

        const result2 = getEnglishDate(2081, 2, 32);
        const date2 = stitchDate(
            result2.year,
            result2.month,
            result2.day,
        );

        expect(date2).to.be.equal('2024-06-14');

        const result3 = getEnglishDate(2079, 9, 30);
        const date3 = stitchDate(
            result3.year,
            result3.month,
            result3.day,
        );

        expect(date3).to.be.equal('2023-01-14');
    });
});
 