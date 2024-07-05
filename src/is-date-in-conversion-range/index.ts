import {
  MAX_ENG_YEAR,
  MAX_ENG_MONTH,
  MAX_ENG_DAY,

  MIN_ENG_YEAR,
  MIN_ENG_MONTH,
  MIN_ENG_DAY,

  MAX_NEP_YEAR,
  MAX_NEP_MONTH,
  MAX_NEP_DAY,

  MIN_NEP_YEAR,
  MIN_NEP_MONTH,
  MIN_NEP_DAY,
} from "../constants"

import { zeroPad } from "../zero-pad"

export const isDateInConversionRange = (
  date: string, isNepali: boolean,
): boolean => {

  const [yy, mm, dd] = date.split('-');

  const a = parseInt(`${yy}${mm}${dd}`)

  if (isNepali) {
    const x = parseInt(`${MIN_NEP_YEAR}${zeroPad(MIN_NEP_MONTH)}${zeroPad(MIN_NEP_DAY)}`)
    const y = parseInt(`${MAX_NEP_YEAR}${zeroPad(MAX_NEP_MONTH)}${zeroPad(MAX_NEP_DAY)}`)

    return a >= x && a <= y
    
  } else {
    const x = parseInt(`${MIN_ENG_YEAR}${zeroPad(MIN_ENG_MONTH)}${zeroPad(MIN_ENG_DAY)}`)
    const y = parseInt(`${MAX_ENG_YEAR}${zeroPad(MAX_ENG_MONTH)}${zeroPad(MAX_ENG_DAY)}`)
    
    return a >= x && a <= y
  }
};
