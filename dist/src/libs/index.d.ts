import { LchColor, LchConvertRequest, LchConvertToHexResult, LchConvertToSRGBResult } from '../types';
export declare function hexToLch(hex: string): LchColor;
export declare function lchToHex(args: LchConvertRequest): LchConvertToHexResult;
export declare function lchToRgb(args: LchConvertRequest): LchConvertToSRGBResult;
