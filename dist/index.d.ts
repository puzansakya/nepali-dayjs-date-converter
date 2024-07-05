declare const ad2bs: (date: string) => string;
declare const bs2ad: (date: string) => string;

declare const lookUp: {
    "365": {
        year: number;
        month_days: number[];
    };
    "730": {
        year: number;
        month_days: number[];
    };
    "1095": {
        year: number;
        month_days: number[];
    };
    "1461": {
        year: number;
        month_days: number[];
    };
    "1826": {
        year: number;
        month_days: number[];
    };
    "2191": {
        year: number;
        month_days: number[];
    };
    "2556": {
        year: number;
        month_days: number[];
    };
    "2922": {
        year: number;
        month_days: number[];
    };
    "3287": {
        year: number;
        month_days: number[];
    };
    "3652": {
        year: number;
        month_days: number[];
    };
    "4017": {
        year: number;
        month_days: number[];
    };
    "4383": {
        year: number;
        month_days: number[];
    };
    "4748": {
        year: number;
        month_days: number[];
    };
    "5113": {
        year: number;
        month_days: number[];
    };
    "5478": {
        year: number;
        month_days: number[];
    };
    "5844": {
        year: number;
        month_days: number[];
    };
    "6209": {
        year: number;
        month_days: number[];
    };
    "6574": {
        year: number;
        month_days: number[];
    };
    "6939": {
        year: number;
        month_days: number[];
    };
    "7305": {
        year: number;
        month_days: number[];
    };
    "7670": {
        year: number;
        month_days: number[];
    };
    "8035": {
        year: number;
        month_days: number[];
    };
    "8400": {
        year: number;
        month_days: number[];
    };
    "8766": {
        year: number;
        month_days: number[];
    };
    "9131": {
        year: number;
        month_days: number[];
    };
    "9496": {
        year: number;
        month_days: number[];
    };
    "9862": {
        year: number;
        month_days: number[];
    };
    "10227": {
        year: number;
        month_days: number[];
    };
    "10592": {
        year: number;
        month_days: number[];
    };
    "10957": {
        year: number;
        month_days: number[];
    };
    "11323": {
        year: number;
        month_days: number[];
    };
    "11688": {
        year: number;
        month_days: number[];
    };
    "12053": {
        year: number;
        month_days: number[];
    };
    "12418": {
        year: number;
        month_days: number[];
    };
    "12784": {
        year: number;
        month_days: number[];
    };
    "13149": {
        year: number;
        month_days: number[];
    };
    "13514": {
        year: number;
        month_days: number[];
    };
    "13879": {
        year: number;
        month_days: number[];
    };
    "14245": {
        year: number;
        month_days: number[];
    };
    "14610": {
        year: number;
        month_days: number[];
    };
    "14975": {
        year: number;
        month_days: number[];
    };
    "15340": {
        year: number;
        month_days: number[];
    };
    "15706": {
        year: number;
        month_days: number[];
    };
    "16071": {
        year: number;
        month_days: number[];
    };
    "16436": {
        year: number;
        month_days: number[];
    };
    "16801": {
        year: number;
        month_days: number[];
    };
    "17167": {
        year: number;
        month_days: number[];
    };
    "17532": {
        year: number;
        month_days: number[];
    };
    "17897": {
        year: number;
        month_days: number[];
    };
    "18262": {
        year: number;
        month_days: number[];
    };
    "18628": {
        year: number;
        month_days: number[];
    };
    "18993": {
        year: number;
        month_days: number[];
    };
    "19358": {
        year: number;
        month_days: number[];
    };
    "19723": {
        year: number;
        month_days: number[];
    };
    "20089": {
        year: number;
        month_days: number[];
    };
    "20454": {
        year: number;
        month_days: number[];
    };
    "20819": {
        year: number;
        month_days: number[];
    };
    "21185": {
        year: number;
        month_days: number[];
    };
    "21550": {
        year: number;
        month_days: number[];
    };
    "21915": {
        year: number;
        month_days: number[];
    };
    "22280": {
        year: number;
        month_days: number[];
    };
    "22646": {
        year: number;
        month_days: number[];
    };
    "23011": {
        year: number;
        month_days: number[];
    };
    "23376": {
        year: number;
        month_days: number[];
    };
    "23741": {
        year: number;
        month_days: number[];
    };
    "24107": {
        year: number;
        month_days: number[];
    };
    "24472": {
        year: number;
        month_days: number[];
    };
    "24837": {
        year: number;
        month_days: number[];
    };
    "25202": {
        year: number;
        month_days: number[];
    };
    "25568": {
        year: number;
        month_days: number[];
    };
    "25933": {
        year: number;
        month_days: number[];
    };
    "26298": {
        year: number;
        month_days: number[];
    };
    "26663": {
        year: number;
        month_days: number[];
    };
    "27029": {
        year: number;
        month_days: number[];
    };
    "27394": {
        year: number;
        month_days: number[];
    };
    "27759": {
        year: number;
        month_days: number[];
    };
    "28124": {
        year: number;
        month_days: number[];
    };
    "28490": {
        year: number;
        month_days: number[];
    };
    "28855": {
        year: number;
        month_days: number[];
    };
    "29220": {
        year: number;
        month_days: number[];
    };
    "29585": {
        year: number;
        month_days: number[];
    };
    "29951": {
        year: number;
        month_days: number[];
    };
    "30316": {
        year: number;
        month_days: number[];
    };
    "30681": {
        year: number;
        month_days: number[];
    };
    "31047": {
        year: number;
        month_days: number[];
    };
    "31412": {
        year: number;
        month_days: number[];
    };
    "31777": {
        year: number;
        month_days: number[];
    };
    "32142": {
        year: number;
        month_days: number[];
    };
    "32508": {
        year: number;
        month_days: number[];
    };
    "32873": {
        year: number;
        month_days: number[];
    };
    "33238": {
        year: number;
        month_days: number[];
    };
    "33603": {
        year: number;
        month_days: number[];
    };
    "33969": {
        year: number;
        month_days: number[];
    };
    "34334": {
        year: number;
        month_days: number[];
    };
    "34699": {
        year: number;
        month_days: number[];
    };
    "35064": {
        year: number;
        month_days: number[];
    };
};

declare const isDateInConversionRange: (date: string, isNepali: boolean) => boolean;

export { ad2bs, bs2ad, isDateInConversionRange, lookUp };
