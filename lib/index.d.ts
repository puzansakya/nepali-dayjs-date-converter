declare module 'nepali-date-carburettor-xx/ad-to-bs/index' {
  export const ADToBS: (date: string) => string | undefined;

}
declare module 'nepali-date-carburettor-xx/ad-to-bs/index.spec' {
  export {};

}
declare module 'nepali-date-carburettor-xx/bs-to-ad/index' {
  export const BSToAD: (date: string) => string | undefined;

}
declare module 'nepali-date-carburettor-xx/bs-to-ad/index.spec' {
  export {};

}
declare module 'nepali-date-carburettor-xx/get-days-in-month-map/index' {
  export const getDaysInMonthMap: () => Map<any, any>;

}
declare module 'nepali-date-carburettor-xx/get-english-date/index' {
  export const getEnglishDate: (nepYY: number, nepMM: number, nepDD: number) => {
      year: number;
      month: number;
      day: number;
  };

}
declare module 'nepali-date-carburettor-xx/get-english-date/index.spec' {
  export {};

}
declare module 'nepali-date-carburettor-xx/get-nepali-date/index' {
  export const getNepaliDate: (engYY: number, engMM: number, engDD: number) => {
      year: number;
      month: number;
      day: number;
  };

}
declare module 'nepali-date-carburettor-xx/get-nepali-date/index.spec' {
  export {};

}
declare module 'nepali-date-carburettor-xx/index' {
  export { ADToBS } from 'nepali-date-carburettor-xx/ad-to-bs/index';
  export { BSToAD } from 'nepali-date-carburettor-xx/bs-to-ad/index';
  export { getDaysInMonthMap as lookUp } from 'nepali-date-carburettor-xx/get-days-in-month-map/index';

}
declare module 'nepali-date-carburettor-xx/is-eng-date-in-conversion-range/index' {
  export const isEngDateInConversionRange: (yy: number, mm: number, dd: number) => boolean;

}
declare module 'nepali-date-carburettor-xx/is-eng-date-in-conversion-range/index.spec' {
  export {};

}
declare module 'nepali-date-carburettor-xx/is-eng-leap-year/index' {
  export const isEngLeapYear: (year: number) => boolean;

}
declare module 'nepali-date-carburettor-xx/is-eng-leap-year/index.spec' {
  export {};

}
declare module 'nepali-date-carburettor-xx/is-nep-date-in-conversion-range/index' {
  export const isNepDateInConversionRange: (yy: number, mm: number, dd: number) => boolean;

}
declare module 'nepali-date-carburettor-xx/is-nep-date-in-conversion-range/index.spec' {
  export {};

}
declare module 'nepali-date-carburettor-xx/stitch-date/index' {
  export const stitchDate: (yy: number, mm: number, dd: number) => string;

}
declare module 'nepali-date-carburettor-xx/stitch-date/index.spec' {
  export {};

}
declare module 'nepali-date-carburettor-xx/zero-pad/index' {
  export const zeroPad: (x: number) => string;

}
declare module 'nepali-date-carburettor-xx/zero-pad/index.spec' {
  export {};

}
declare module 'nepali-date-carburettor-xx' {
  import main = require('nepali-date-carburettor-xx/src/index');
  export = main;
}