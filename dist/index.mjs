// src/converter/index.ts
import dayjs from "dayjs";

// src/converter/look-up.ts
var dataset = {
  "365": {
    "year": 2e3,
    "month_days": [
      0,
      30,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      365
    ]
  },
  "730": {
    "year": 2001,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "1095": {
    "year": 2002,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "1461": {
    "year": 2003,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "1826": {
    "year": 2004,
    "month_days": [
      0,
      30,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      365
    ]
  },
  "2191": {
    "year": 2005,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "2556": {
    "year": 2006,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "2922": {
    "year": 2007,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "3287": {
    "year": 2008,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      29,
      30,
      30,
      29,
      29,
      31,
      365
    ]
  },
  "3652": {
    "year": 2009,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "4017": {
    "year": 2010,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "4383": {
    "year": 2011,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "4748": {
    "year": 2012,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      29,
      30,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "5113": {
    "year": 2013,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "5478": {
    "year": 2014,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "5844": {
    "year": 2015,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "6209": {
    "year": 2016,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      29,
      30,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "6574": {
    "year": 2017,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "6939": {
    "year": 2018,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "7305": {
    "year": 2019,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      366
    ]
  },
  "7670": {
    "year": 2020,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "8035": {
    "year": 2021,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "8400": {
    "year": 2022,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      30,
      365
    ]
  },
  "8766": {
    "year": 2023,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      366
    ]
  },
  "9131": {
    "year": 2024,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "9496": {
    "year": 2025,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "9862": {
    "year": 2026,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "10227": {
    "year": 2027,
    "month_days": [
      0,
      30,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      365
    ]
  },
  "10592": {
    "year": 2028,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "10957": {
    "year": 2029,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      32,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "11323": {
    "year": 2030,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "11688": {
    "year": 2031,
    "month_days": [
      0,
      30,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      365
    ]
  },
  "12053": {
    "year": 2032,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "12418": {
    "year": 2033,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "12784": {
    "year": 2034,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "13149": {
    "year": 2035,
    "month_days": [
      0,
      30,
      32,
      31,
      32,
      31,
      31,
      29,
      30,
      30,
      29,
      29,
      31,
      365
    ]
  },
  "13514": {
    "year": 2036,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "13879": {
    "year": 2037,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "14245": {
    "year": 2038,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "14610": {
    "year": 2039,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      29,
      30,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "14975": {
    "year": 2040,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "15340": {
    "year": 2041,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "15706": {
    "year": 2042,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "16071": {
    "year": 2043,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      29,
      30,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "16436": {
    "year": 2044,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "16801": {
    "year": 2045,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "17167": {
    "year": 2046,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "17532": {
    "year": 2047,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "17897": {
    "year": 2048,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "18262": {
    "year": 2049,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      30,
      365
    ]
  },
  "18628": {
    "year": 2050,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      366
    ]
  },
  "18993": {
    "year": 2051,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "19358": {
    "year": 2052,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "19723": {
    "year": 2053,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      30,
      365
    ]
  },
  "20089": {
    "year": 2054,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      366
    ]
  },
  "20454": {
    "year": 2055,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "20819": {
    "year": 2056,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      32,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "21185": {
    "year": 2057,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "21550": {
    "year": 2058,
    "month_days": [
      0,
      30,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      365
    ]
  },
  "21915": {
    "year": 2059,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "22280": {
    "year": 2060,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "22646": {
    "year": 2061,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "23011": {
    "year": 2062,
    "month_days": [
      0,
      30,
      32,
      31,
      32,
      31,
      31,
      29,
      30,
      29,
      30,
      29,
      31,
      365
    ]
  },
  "23376": {
    "year": 2063,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "23741": {
    "year": 2064,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "24107": {
    "year": 2065,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "24472": {
    "year": 2066,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      29,
      30,
      30,
      29,
      29,
      31,
      365
    ]
  },
  "24837": {
    "year": 2067,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "25202": {
    "year": 2068,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "25568": {
    "year": 2069,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "25933": {
    "year": 2070,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      29,
      30,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "26298": {
    "year": 2071,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "26663": {
    "year": 2072,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "27029": {
    "year": 2073,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "27394": {
    "year": 2074,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "27759": {
    "year": 2075,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "28124": {
    "year": 2076,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      30,
      365
    ]
  },
  "28490": {
    "year": 2077,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      366
    ]
  },
  "28855": {
    "year": 2078,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "29220": {
    "year": 2079,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "29585": {
    "year": 2080,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      30,
      365
    ]
  },
  "29951": {
    "year": 2081,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      366
    ]
  },
  "30316": {
    "year": 2082,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "30681": {
    "year": 2083,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "31047": {
    "year": 2084,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "31412": {
    "year": 2085,
    "month_days": [
      0,
      30,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      365
    ]
  },
  "31777": {
    "year": 2086,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "32142": {
    "year": 2087,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "32508": {
    "year": 2088,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "32873": {
    "year": 2089,
    "month_days": [
      0,
      30,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      30,
      29,
      31,
      365
    ]
  },
  "33238": {
    "year": 2090,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "33603": {
    "year": 2091,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "33969": {
    "year": 2092,
    "month_days": [
      0,
      31,
      32,
      31,
      32,
      31,
      30,
      30,
      30,
      29,
      29,
      30,
      31,
      366
    ]
  },
  "34334": {
    "year": 2093,
    "month_days": [
      0,
      31,
      31,
      31,
      32,
      31,
      31,
      29,
      30,
      30,
      29,
      29,
      31,
      365
    ]
  },
  "34699": {
    "year": 2094,
    "month_days": [
      0,
      31,
      31,
      32,
      31,
      31,
      31,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  },
  "35064": {
    "year": 2095,
    "month_days": [
      0,
      31,
      31,
      32,
      32,
      31,
      30,
      30,
      29,
      30,
      29,
      30,
      30,
      365
    ]
  }
};
var queryMonthDays = (year) => {
  if (typeof year === "string") {
    year = parseInt(year);
  }
  const value_arr = Object.values(dataset);
  const found = value_arr.find((o) => {
    return o.year === year;
  });
  return found?.month_days;
};
var queryDays = (year, month) => {
  if (typeof year === "string") {
    year = parseInt(year);
  }
  if (typeof month === "string") {
    month = parseInt(month);
  }
  return queryMonthDays(year)?.[month];
};
var lookUp = {
  dataset,
  queryMonthDays,
  queryDays
};
var look_up_default = lookUp;

// src/zero-pad/index.ts
var zero_pad = (x) => {
  return x > 9 ? `${x}` : `0${x}`;
};

// src/converter/index.ts
var en_ref_date = "1943-04-14";
var binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (arr[high] > target) {
    return high;
  } else {
    return low;
  }
};
var ad2bs = (date) => {
  const total_days = dayjs(date).diff(en_ref_date, "day");
  const accumulator_arr = Object.keys(look_up_default.dataset).map((o) => parseInt(o));
  const value_arr = Object.values(look_up_default.dataset);
  const found_index = binarySearch(accumulator_arr, total_days);
  let diff = total_days - accumulator_arr[found_index];
  let adjusted_diff = diff < 0 ? total_days - accumulator_arr[found_index - 1] : diff;
  let nep_mm = 1;
  let nep_dd = 1;
  while (adjusted_diff > 0) {
    const daysInMonth = value_arr[found_index].month_days[nep_mm];
    nep_dd++;
    if (nep_dd > daysInMonth) {
      nep_mm++;
      nep_dd = 1;
    }
    if (nep_mm > 12) {
      nep_mm = 1;
    }
    adjusted_diff--;
  }
  let resolved_year = value_arr[found_index].year;
  return `${resolved_year}-${zero_pad(nep_mm)}-${zero_pad(nep_dd)}`;
};
var bs2ad = (date) => {
  const [year, month, day] = date.split("-");
  const accumulator_arr = Object.keys(look_up_default.dataset).map((o) => parseInt(o));
  const value_arr = Object.values(look_up_default.dataset);
  const found_index = value_arr.findIndex((o) => {
    return o.year === parseInt(year);
  });
  const found_year = value_arr[found_index];
  let total_days_for_previous_year = accumulator_arr[found_index - 1];
  let nep_mm = 1;
  let numbe_of_days_to_add = 0;
  while (nep_mm < parseInt(month)) {
    numbe_of_days_to_add += found_year.month_days[nep_mm];
    nep_mm++;
  }
  let nep_dd = 1;
  while (nep_dd < parseInt(day)) {
    numbe_of_days_to_add++;
    nep_dd++;
  }
  const resolved_total_days = total_days_for_previous_year + numbe_of_days_to_add;
  const en_date = dayjs(en_ref_date).add(resolved_total_days, "day").format("YYYY-MM-DD");
  return en_date;
};

// src/constants/index.ts
var MAX_ENG_YEAR = 2033;
var MAX_ENG_MONTH = 4;
var MAX_ENG_DAY = 13;
var MIN_ENG_YEAR = 1943;
var MIN_ENG_MONTH = 4;
var MIN_ENG_DAY = 13;
var MAX_NEP_YEAR = 2090;
var MAX_NEP_MONTH = 12;
var MAX_NEP_DAY = 31;
var MIN_NEP_YEAR = 2e3;
var MIN_NEP_MONTH = 1;
var MIN_NEP_DAY = 1;

// src/is-date-in-conversion-range/index.ts
var isDateInConversionRange = (date, isNepali) => {
  const [yy, mm, dd] = date.split("-");
  const a = parseInt(`${yy}${mm}${dd}`);
  if (isNepali) {
    const x = parseInt(`${MIN_NEP_YEAR}${zero_pad(MIN_NEP_MONTH)}${zero_pad(MIN_NEP_DAY)}`);
    const y = parseInt(`${MAX_NEP_YEAR}${zero_pad(MAX_NEP_MONTH)}${zero_pad(MAX_NEP_DAY)}`);
    return a >= x && a <= y;
  } else {
    const x = parseInt(`${MIN_ENG_YEAR}${zero_pad(MIN_ENG_MONTH)}${zero_pad(MIN_ENG_DAY)}`);
    const y = parseInt(`${MAX_ENG_YEAR}${zero_pad(MAX_ENG_MONTH)}${zero_pad(MAX_ENG_DAY)}`);
    return a >= x && a <= y;
  }
};
export {
  ad2bs as ADToBS,
  bs2ad as BSToAD,
  MAX_ENG_DAY,
  MAX_ENG_MONTH,
  MAX_ENG_YEAR,
  MAX_NEP_DAY,
  MAX_NEP_MONTH,
  MAX_NEP_YEAR,
  MIN_ENG_DAY,
  MIN_ENG_MONTH,
  MIN_ENG_YEAR,
  MIN_NEP_DAY,
  MIN_NEP_MONTH,
  MIN_NEP_YEAR,
  ad2bs,
  bs2ad,
  isDateInConversionRange,
  look_up_default as lookUp,
  zero_pad
};
