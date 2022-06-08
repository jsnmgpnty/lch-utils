export declare type LchColor = {
    l: number;
    c: number;
    h: number;
    a?: number;
};
export declare type LchColorSRGB = LchColor & {
    isWithinLch?: boolean;
};
export declare type SRGBColor = {
    r: number;
    g: number;
    b: number;
    a?: number;
};
export declare type WithinLchFunctionType = (l: number, c: number, h: number) => boolean;
export declare type LchConversionResult = {
    value: number[];
    isWithinSRGB?: boolean;
};
export declare type LchConvertRequest = LchColor & {
    a?: number;
    isPrecise?: boolean;
    forceinGamut?: boolean;
};
export declare type LchConvertToHexResult = {
    value: string;
    alpha?: number;
};
export declare type LchConvertToSRGBResult = {
    value: number[];
    string: string;
};
