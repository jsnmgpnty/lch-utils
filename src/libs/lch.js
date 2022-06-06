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
    return [l, c, h];
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

  return [l, c, h];
}

function percentToHex(percentage) {
  var decimalValue = Math.round(percentage * 255 / 100);
  var hexValue = percentage < 7
    ? "0" + decimalValue.toString(16).toUpperCase()
    : decimalValue.toString(16).toUpperCase();
  return hexValue;
}

function getRgbPercentageFromLch(l, c, h, a = 100, forceInGamut = true) {
  if (forceInGamut) [l, c, h] = forceIntoGamut(l, c, h, isLchWithinRgb);
  return LCH_to_sRGB([+l, +c, +h]);
}

function lchToHex(l, c, h, a = 100, forceInGamut = true) {
  var res = getRgbPercentageFromLch(l, c, h, a, forceInGamut);
  var value = res.map((c) => Math.round(c * 10000) / 100);
  const r = percentToHex(value[0]);
  const g = percentToHex(value[1]);
  const b = percentToHex(value[2]);
  return {
    value: `#${r}${g}${b}`,
    alpha: a,
  };
}

function lchToRgb(l, c, h, a = 100, forceInGamut = true) {
  var res = getRgbPercentageFromLch(l, c, h, a, forceInGamut);
  var str = "rgb(" + res.map(x => {
    return Math.round(x * 10000) / 100 + "%";
  }).join(" ") + alphaToString(a) + ")";
  var value = res.map((c) => Math.round(c * 10000) / 100);
  return { value, string: str };
}

module.exports = {
  lchToRgb,
  lchToHex,
};
