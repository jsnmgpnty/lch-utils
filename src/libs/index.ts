import {
  LchColorSRGB,
  LchConversionResult,
  LchConvertRequest,
  LchConvertToHexResult,
  LchConvertToSRGBResult,
  WithinLchFunctionType,
} from '../types';
import { LCH_to_sRGB } from '../drafts.csswg.org/utilities';

const DEFAULT_ARGS: LchConvertRequest = {
  l: 0,
  c: 0,
  h: 0,
  a: 100,
  forceinGamut: true,
  isPrecise: false,
};

function alphaToString(a = 100) {
  return a < 100 ? ` / ${a}%` : '';
}

function isLchWithinRgb(l: number, c: number, h: number): boolean {
  const rgb = LCH_to_sRGB([+l, +c, +h]) as Array<number>;
  const ε = 0.000005;
  return rgb.reduce((a, b) => a && b >= 0 - ε && b <= 1 + ε, true);
}

function forceIntoGamut(l: number, c: number, h: number, isLchWithin: WithinLchFunctionType): LchColorSRGB {
  // Moves an lch color into the sRGB gamut
  // by holding the l and h steady,
  // and adjusting the c via binary-search
  // until the color is on the sRGB boundary.
  if (isLchWithin(l, c, h)) {
    return { l, c, h, isWithinLch: true };
  }

  let hiC = c;
  let loC = 0;
  const ε = 0.0001;
  c /= 2;

  // .0001 chosen fairly arbitrarily as "close enough"
  while (hiC - loC > ε) {
    if (isLchWithin(l, c, h)) {
      loC = c;
    } else {
      hiC = c;
    }
    c = (hiC + loC) / 2;
  }

  return { l, c, h, isWithinLch: false };
}

function percentToHex(percentage: number): string {
  const decimalValue = Math.round((percentage * 255) / 100);
  const hexValue =
    percentage < 7 ? '0' + decimalValue.toString(16).toUpperCase() : decimalValue.toString(16).toUpperCase();
  return hexValue;
}

function calculatePercent(value: number, isPrecise = true): number {
  const result = Math.round(value * 10000) / 100;
  if (isPrecise) return result;
  return Math.round(result);
}

function getRgbPercentageFromLch(args: LchConvertRequest): LchConversionResult {
  const request = { ...DEFAULT_ARGS, ...args };
  let lchColor: LchColorSRGB = { l: request.l, c: request.c, h: request.h };
  if (request.forceinGamut) {
    const r = forceIntoGamut(request.l, request.c, request.h, isLchWithinRgb);
    lchColor = { ...lchColor, ...r };
  }
  const res = LCH_to_sRGB([request.l, request.c, request.h]) as Array<number>;
  return { value: res.map((c) => calculatePercent(c, request.isPrecise)), isWithinSRGB: lchColor.isWithinLch };
}

export function lchToHex(args: LchConvertRequest): LchConvertToHexResult {
  const res = getRgbPercentageFromLch(args);
  const r = percentToHex(res.value[0]);
  const g = percentToHex(res.value[1]);
  const b = percentToHex(res.value[2]);
  return {
    value: `#${r}${g}${b}`,
    alpha: args.a,
  };
}

export function lchToRgb(args: LchConvertRequest): LchConvertToSRGBResult {
  const res = getRgbPercentageFromLch(args);
  const str = 'rgb(' + res.value.map((x) => `${x}%`).join(' ') + alphaToString(args.a) + ')';
  return { value: res.value, string: str };
}
