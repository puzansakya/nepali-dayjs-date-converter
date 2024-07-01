"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ADToBS: () => ADToBS,
  BSToAD: () => BSToAD,
  lookUp: () => getDaysInMonthMap
});
module.exports = __toCommonJS(src_exports);

// src/get-nepali-date/index.ts
var import_dayjs = __toESM(require("dayjs"));

// src/get-days-in-month-map/index.ts
var getDaysInMonthMap = () => {
  const daysInMonthMap = /* @__PURE__ */ new Map();
  daysInMonthMap.set(
    1969,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    1970,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1971,
    [0, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1972,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    1973,
    [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365]
  );
  daysInMonthMap.set(
    1974,
    [0, 30, 32, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1975,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1976,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    1977,
    [0, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31, 365]
  );
  daysInMonthMap.set(
    1978,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1979,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1980,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    1981,
    [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1982,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1983,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1984,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    1985,
    [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1986,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1987,
    [0, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1988,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    1989,
    [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1990,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1991,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1992,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366]
  );
  daysInMonthMap.set(
    1993,
    [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1994,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1995,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1996,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366]
  );
  daysInMonthMap.set(
    1997,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1998,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    1999,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2e3,
    [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365]
  );
  daysInMonthMap.set(
    2001,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2002,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2003,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2004,
    [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365]
  );
  daysInMonthMap.set(
    2005,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2006,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2007,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2008,
    [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365]
  );
  daysInMonthMap.set(
    2009,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2010,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2011,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2012,
    [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2013,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2014,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2015,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2016,
    [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2017,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2018,
    [0, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2019,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366]
  );
  daysInMonthMap.set(
    2020,
    [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2021,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2022,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2023,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366]
  );
  daysInMonthMap.set(
    2024,
    [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2025,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2026,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2027,
    [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365]
  );
  daysInMonthMap.set(
    2028,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2029,
    [0, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2030,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2031,
    [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365]
  );
  daysInMonthMap.set(
    2032,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2033,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2034,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2035,
    [0, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365]
  );
  daysInMonthMap.set(
    2036,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2037,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2038,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2039,
    [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2040,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2041,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2042,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2043,
    [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2044,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2045,
    [0, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2046,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2047,
    [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2048,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2049,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2050,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366]
  );
  daysInMonthMap.set(
    2051,
    [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2052,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2053,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2054,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366]
  );
  daysInMonthMap.set(
    2055,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2056,
    [0, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2057,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2058,
    [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365]
  );
  daysInMonthMap.set(
    2059,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2060,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2061,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2062,
    [0, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31, 365]
  );
  daysInMonthMap.set(
    2063,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2064,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2065,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2066,
    [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365]
  );
  daysInMonthMap.set(
    2067,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2068,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2069,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2070,
    [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2071,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2072,
    [0, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2073,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2074,
    [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2075,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2076,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2077,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366]
  );
  daysInMonthMap.set(
    2078,
    [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2079,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2080,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2081,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366]
  );
  daysInMonthMap.set(
    2082,
    [0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2083,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2084,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2085,
    [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365]
  );
  daysInMonthMap.set(
    2086,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2087,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2088,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2089,
    [0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365]
  );
  daysInMonthMap.set(
    2090,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2091,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2092,
    [0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366]
  );
  daysInMonthMap.set(
    2093,
    [0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365]
  );
  daysInMonthMap.set(
    2094,
    [0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365]
  );
  daysInMonthMap.set(
    2095,
    [0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365]
  );
  return daysInMonthMap;
};

// src/is-eng-date-in-conversion-range/index.ts
var isEngDateInConversionRange = (yy, mm, dd) => {
  return yy >= 1913 && yy <= 2033 && mm >= 1 && mm <= 12 && dd >= 1 && dd <= 31;
};

// src/zero-pad/index.ts
var zeroPad = (x) => {
  return x > 9 ? `${x}` : `0${x}`;
};

// src/stitch-date/index.ts
var stitchDate = (yy, mm, dd) => {
  const separator = "-";
  return `${yy}${separator}${zeroPad(mm)}${separator}${zeroPad(dd)}`;
};

// src/get-nepali-date/index.ts
var getNepaliDate = (engYY, engMM, engDD) => {
  const tempModel = {
    year: -1,
    month: -1,
    day: -1
  };
  if (isEngDateInConversionRange(engYY, engMM, engDD)) {
    const startingEngYear = 1913;
    const startingEngMonth = 4;
    const startingEngDay = 13;
    const startingNepYear = 1970;
    const startingNepMonth = 1;
    const startingNepDay = 1;
    let nepYY, nepMM, nepDD;
    const base = new Date(
      stitchDate(startingEngYear, startingEngMonth, startingEngDay)
    );
    const newDate = new Date(stitchDate(engYY, engMM, engDD));
    let totalEngDaysCount = Math.ceil((0, import_dayjs.default)(newDate).diff(base, "day", true));
    nepYY = startingNepYear;
    nepMM = startingNepMonth;
    nepDD = startingNepDay;
    const lookUp = getDaysInMonthMap();
    const yearsDiff = engYY - startingEngYear;
    const nepYYThreshold = startingNepYear + yearsDiff - (engYY > 4 ? 1 : 0);
    while (totalEngDaysCount !== 0) {
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
    throw new Error("Invalid English Date");
  }
};

// src/ad-to-bs/index.ts
var import_dayjs2 = __toESM(require("dayjs"));
var ADToBS = (date) => {
  if (!date) {
    return;
  }
  const [yy, mm, dd] = (0, import_dayjs2.default)(date).format("YYYY-MM-DD").split("-");
  const convetedDate = getNepaliDate(parseInt(yy), parseInt(mm), parseInt(dd));
  return stitchDate(convetedDate.year, convetedDate.month, convetedDate.day);
};

// src/get-english-date/index.ts
var import_dayjs3 = __toESM(require("dayjs"));

// src/is-nep-date-in-conversion-range/index.ts
var isNepDateInConversionRange = (yy, mm, dd) => {
  return yy >= 1970 && yy <= 2090 && mm >= 1 && mm <= 12 && dd >= 1 && dd <= 32;
};

// src/get-english-date/index.ts
var getEnglishDate = (nepYY, nepMM, nepDD) => {
  if (isNepDateInConversionRange(nepYY, nepMM, nepDD)) {
    const startingEngYear = 1943;
    const startingEngMonth = 4;
    const startingEngDay = 14;
    const startingNepYear = 2e3;
    const tempModel = {
      year: -1,
      month: -1,
      day: -1
    };
    let totalDayDifference = 0;
    for (let i = startingNepYear; i < nepYY; i++) {
      totalDayDifference += getDaysInMonthMap().get(i)[13];
    }
    for (let i = 1; i < nepMM; i++) {
      totalDayDifference += getDaysInMonthMap().get(nepYY)[i];
    }
    totalDayDifference += nepDD;
    const [year, month, day] = (0, import_dayjs3.default)(
      stitchDate(startingEngYear, startingEngMonth, startingEngDay)
    ).add(totalDayDifference - 1, "day").format("YYYY-MM-DD").split("-");
    tempModel.year = +year;
    tempModel.month = +month;
    tempModel.day = +day;
    return tempModel;
  } else {
    throw new Error("Nepali date is not in conversion range");
  }
};

// src/bs-to-ad/index.ts
var BSToAD = (date) => {
  if (!date) {
    return;
  }
  const [yy, mm, dd] = date.split("-");
  const convetedDate = getEnglishDate(parseInt(yy), parseInt(mm), parseInt(dd));
  return stitchDate(convetedDate.year, convetedDate.month, convetedDate.day);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ADToBS,
  BSToAD,
  lookUp
});
