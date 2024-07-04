import { describe, expect, it } from 'vitest';
import { ADToBS } from '.';
import { getDaysInMonthMap } from '../get-days-in-month-map';
import dayjs from 'dayjs';

const totalNepDaysFromRef = ({nepYY, nepMM, nepDD}: any) => {
  
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

// const printTable = () => {
//   Array.from(getDaysInMonthMap()).forEach(([key, value]) => {
//     const x =  `${key}, ${value.join(", ")}`
//     console.log(x)
//   })
// }

const dayDiff = (date1:string, date2:string) => {
  const _date1 = new Date(date1);  
  const  _date2 = new Date(date2);  
  //calculate time difference  
  var time_difference = _date1.getTime() - _date2.getTime();  

  //calculate days difference by dividing total milliseconds in a day  
  var days_difference = time_difference / (1000 * 60 * 60 * 24);  
    
  console.log("Number of days between dates <br>" +   
                  date1 + " and " + date2 + " are: "   
                  + days_difference + " days");  

}

describe('Nepali Date Converter', () => {
  it('should convert english string date to correct nepali date', () => {
    // expect(ADToBS(`2020-12-15`)).to.equal('2077-08-30');
    // expect(ADToBS('2020-12-31')).to.equal('2077-09-16');

    // console.log(dayjs("1945-04-12").diff("1944-04-13", "day"))
    // dayDiff("1945-04-12", "1944-04-13")
    console.log(dayjs("1944-01-01").diff("1943-04-14", "day"))
    
    expect(ADToBS('1943-04-20')).to.equal('2000-01-07');
    expect(ADToBS('1943-05-13')).to.equal('2000-01-30');
    expect(ADToBS('1943-05-14')).to.equal('2000-02-01');
    expect(ADToBS('1943-06-14')).to.equal('2000-02-32');
    expect(ADToBS('1943-07-16')).to.equal('2000-04-01');
    expect(ADToBS('1943-08-16')).to.equal('2000-04-32');
    expect(ADToBS('1943-10-17')).to.equal('2000-07-01');
    expect(ADToBS('1943-11-15')).to.equal('2000-07-30');
    expect(ADToBS('1943-11-16')).to.equal('2000-08-01');
    expect(ADToBS('1943-12-15')).to.equal('2000-08-30');
    expect(ADToBS('1943-12-16')).to.equal('2000-09-01');
    expect(ADToBS('1943-12-17')).to.equal('2000-09-02');
    expect(ADToBS('1943-12-31')).to.equal('2000-09-16');
    expect(ADToBS('1944-01-01')).to.equal('2000-09-17');

    expect(ADToBS('1944-01-13')).to.equal('2000-09-29');

    // expect(ADToBS('1944-03-13')).to.equal('2000-12-31');


    // expect(ADToBS('2024-06-14')).to.equal('2081-02-32');
  });

  it('should throw error beyond max date', () => {
    expect(() => ADToBS('2034-06-14')).toThrowError()
  });
});

