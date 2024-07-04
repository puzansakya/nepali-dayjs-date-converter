import dayjs from 'dayjs';
import { getDaysInMonthMap } from '../get-days-in-month-map';
import { isEngDateInConversionRange } from '../is-eng-date-in-conversion-range';
import { stitchDate } from '../stitch-date';

export const getNepaliDate = (
  engYY: number,
  engMM: number,
  engDD: number,
): {
  year: number;
  month: number;
  day: number;
} => {
  const tempModel = {
    year: -1,
    month: -1,
    day: -1,
  };

  if (isEngDateInConversionRange(engYY, engMM, engDD)) {
    const startingEngYear = 1943;
    const startingEngMonth = 4;
    const startingEngDay = 14;

    // start day of week for 1913/4/13 is Sunday  as 1

    const startingNepYear = 2000;
    const startingNepMonth = 1;
    const startingNepDay = 1;

    let nepYY, nepMM, nepDD;

    const base = new Date(
      stitchDate(startingEngYear, startingEngMonth, startingEngDay),
    );
    const eng_stiched_date = new Date(stitchDate(engYY, engMM, engDD));

    let totalEngDaysCount = dayjs(eng_stiched_date).diff(base, 'day');


    // if (dayjs(eng_stiched_date).isAfter(dayjs("2020-12-31")) && dayjs(eng_stiched_date).isBefore(dayjs("2022-01-01"))) {
    //   totalEngDaysCount ++
    // } 

    nepYY = startingNepYear;
    nepMM = startingNepMonth;
    nepDD = startingNepDay;




    const lookUp = getDaysInMonthMap();

    {
      2000: "1944-04-13",
      2001: "1945-04-13",
    }
    // added block
    const yearsDiff = engYY - startingEngYear;
    const nepYYThreshold = startingNepYear + yearsDiff - (engMM < 4 ? 1 : 0);
    // added block

    // console.log({
    //   totalEngDaysCount,engYY, nepYY, nepMM, nepYYThreshold, yearsDiff
    // })
    
    while (totalEngDaysCount > 0) {
      if (nepYY < nepYYThreshold) {
        nepDD = 1;
        nepMM = 1;
        nepYY++;

        totalEngDaysCount = totalEngDaysCount - lookUp.get(nepYY)[13];
      } else {
        const daysInMonth = lookUp.get(nepYY)[nepMM];
        nepDD++;

        if (nepDD > daysInMonth) {
          nepMM++;
          nepDD = 1;
        }
        if (nepMM > 12) {
          nepYY++;
          nepMM = 1;
        }

        totalEngDaysCount--;
      }
    }

    tempModel.year = nepYY;
    tempModel.month = nepMM;
    tempModel.day = nepDD;

    return tempModel;
  } else {
    throw new Error('Invalid English Date');
  }
};
