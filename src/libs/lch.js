const { LCH_to_sRGB } = require('../drafts.csswg.org/utilities');

function alphaToString(a = 100) {
  return (a < 100 ? ` / ${a}%` : "");
}

function isLchWithinRgb(l, c, h) {
  var rgb = LCH_to_sRGB([+l, +c, +h]);
  const ε = .000005;
  return rgb.reduce((a, b) => a && b >= (0 - ε) && b <= (1 + ε), true);
}

function forceIntoGamut(l, c, h, isLchWithin) {
  // Moves an lch color into the sRGB gamut
  // by holding the l and h steady,
  // and adjusting the c via binary-search
  // until the color is on the sRGB boundary.
  if (isLchWithin(l, c, h)) {
    return [l, c, h, true];
  }

  let hiC = c;
  let loC = 0;
  const ε = .0001;
  c /= 2;

  // .0001 chosen fairly arbitrarily as "close enough"
  while (hiC - loC > ε) {
    if (isLchWithin(l, c, h)) {
      loC = c;
    }
    else {
      hiC = c;
    }
    c = (hiC + loC) / 2;
  }

  return [l, c, h, false];
}

function percentToHex(percentage) {
  var decimalValue = Math.round(percentage * 255 / 100);
  var hexValue = percentage < 7
    ? "0" + decimalValue.toString(16).toUpperCase()
    : decimalValue.toString(16).toUpperCase();
  return hexValue;
}

function sRGB_to_hex (rgb) {
  check_sRGB_bounds(...rgb)
  let values = rgb[3] !== 1 ? rgb : rgb.slice(0, 3)

  return '#' + values.map(x => Math.round(x * 255).toString(16).toUpperCase().padStart(2, '0')).join('')
}

function calculatePercent(value, isPrecise = true) {
  var result = Math.round(value * 10000) / 100;;
  if (isPrecise) return result;
  return Math.round(result);
}

function getRgbPercentageFromLch(l, c, h, a = 100, forceInGamut = true, isPrecise = true) {
  let isWithinSRGB = undefined;
  if (forceInGamut) [l, c, h, isWithinSRGB] = forceIntoGamut(l, c, h, isLchWithinRgb);
  var res = LCH_to_sRGB([+l, +c, +h]);
  return { value: res.map((c) => calculatePercent(c, isPrecise)), isWithinSRGB };
}

function lchToHex(l, c, h, a = 100, forceInGamut = true, isPrecise = true) {
  var res = getRgbPercentageFromLch(l, c, h, a, forceInGamut, isPrecise);
  const r = percentToHex(res.value[0]);
  const g = percentToHex(res.value[1]);
  const b = percentToHex(res.value[2]);
  return {
    value: `#${r}${g}${b}`,
    alpha: a,
  };
}

function lchToRgb(l, c, h, a = 100, forceInGamut = true, isPrecise = true) {
  var res = getRgbPercentageFromLch(l, c, h, a, forceInGamut, isPrecise);
  var str = "rgb(" + res.value.map(x => `${x}%`).join(" ") + alphaToString(a) + ")";
  return { value: res.value, string: str };
}

module.exports = {
  lchToRgb,
  lchToHex,
};
