import { describe, expect, it } from 'vitest';
import { ADToBS } from '.';
import { zeroPad } from '../zero-pad';
import dayjs from 'dayjs';
import { getDaysInMonthMap } from '../get-days-in-month-map';

const d = ({nepYY, nepMM, nepDD}: any) => {
  
  let totalDayDifference = 0;

  for (let i = 2000; i < nepYY; i++) {
    totalDayDifference += getDaysInMonthMap().get(i)[13];
  }

  for (let i = 1; i < nepMM; i++) {
    totalDayDifference += getDaysInMonthMap().get(nepYY)[i];
  }

  totalDayDifference += nepDD;

  return totalDayDifference
}
describe('Nepali Date Converter', () => {
  it('should convert english string date to correct nepali date', () => {
    expect(ADToBS(`2020-12-15`)).to.equal('2077-08-30');
    
    let j = 0;
    
    for (let i = 16; i <= 30; i++) {
      j++
      expect(ADToBS(`2020-12-${i}`)).to.equal(`2077-09-${zeroPad(j)}`);
    }


    console.log("yyy", d({nepYY: 2077, nepMM: 9, nepDD: 16}))
    console.log( "xxx", dayjs("2020-12-31").diff("1943-04-14", "day"))
    expect(ADToBS('2020-12-31')).to.equal('2077-09-16');

    290+120
    console.log("yyy2", d({nepYY: 2077, nepMM: 9, nepDD: 17}))
    console.log( "xxx2", dayjs("2021-01-01").diff("1943-04-14", "day"))
    expect(ADToBS('2021-01-01')).to.equal('2077-09-17');
    // expect(ADToBS('2024-06-14')).to.equal('2081-02-32');
  });

  it('should throw error beyond max date', () => {
    expect(() => ADToBS('2034-06-14')).toThrowError()
  });
});

