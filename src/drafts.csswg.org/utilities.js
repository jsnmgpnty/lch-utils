// https://drafts.csswg.org/css-color-4/utilties.js

const { gam_sRGB, XYZ_to_lin_sRGB, D50_to_D65, Lab_to_XYZ, LCH_to_Lab } = require("./conversions");

function LCH_to_sRGB(LCH) {
  // convert an array of CIE LCH values
  // to CIE Lab, and then to XYZ,
  // adapt from D50 to D65,
  // then convert XYZ to linear-light sRGB
  // and finally to gamma corrected sRGB
  // for in-gamut colors, components are in the 0.0 to 1.0 range
  // out of gamut colors may have negative components
  // or components greater than 1.0
  // so check for that :)

  return gam_sRGB(XYZ_to_lin_sRGB(D50_to_D65(Lab_to_XYZ(LCH_to_Lab(LCH)))));
}

export {
  LCH_to_sRGB,
};
