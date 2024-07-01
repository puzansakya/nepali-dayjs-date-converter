declare const ADToBS: (date: string) => string | undefined;

declare const BSToAD: (date: string) => string | undefined;

declare const getDaysInMonthMap: () => Map<any, any>;

export { ADToBS, BSToAD, getDaysInMonthMap as lookUp };
