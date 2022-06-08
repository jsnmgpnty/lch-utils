import { lchToHex } from './index';

const COLOR_SCALES = [
  { label: '50', value: 98 },
  { label: '100', value: 95 },
  { label: '200', value: 89 },
  { label: '300', value: 79 },
  { label: '400', value: 69 },
  { label: '500', value: 59 },
  { label: '600', value: 49 },
  { label: '700', value: 39 },
  { label: '800', value: 29 },
  { label: '900', value: 19 },
  { label: '950', value: 9 },
];

const PALETTE = [
  {
    title: 'primary light',
    l: 96,
    c: 20,
    h: 198,
    expectedBase: '#C4FFFF',
    expectedValues: [
      '#E3FFFF',
      '#C2FCFC',
      '#B0EBEB',
      '#96CFCF',
      '#7AB3B3',
      '#619999',
      '#477D7D',
      '#2E6666',
      '#0F4D4D',
      '#003636',
      '#001F1F',
    ],
  },
  {
    title: 'primary dark',
    l: 13,
    c: 47,
    h: 309,
    expectedBase: '#300D57',
    expectedValues: [
      '#FCF7FF',
      '#F7EDFF',
      '#EDD9FF',
      '#DEB5FF',
      '#C496EB',
      '#A87DCF',
      '#8C63B3',
      '#734A99',
      '#59337D',
      '#401C63',
      '#29054D',
    ],
  },
  {
    title: 'moss',
    l: 69,
    c: 45,
    h: 181,
    expectedBase: '#0DBDA8',
    expectedValues: [
      '#E6FFFA',
      '#B8FFF0',
      '#66F7E0',
      '#42DBC4',
      '#0DBDA8',
      '#00A18F',
      '#008575',
      '#00695C',
      '#004F45',
      '#00362E',
      '#001F1A',
    ],
  },
  {
    title: 'grapefruit',
    l: 86,
    c: 21,
    h: 21,
    expectedBase: '#FFC9C9',
    expectedValues: [
      '#FFF7F7',
      '#FFEDED',
      '#FFD6D6',
      '#EBB5B8',
      '#CF9C9C',
      '#B38282',
      '#966969',
      '#7D4F52',
      '#63383B',
      '#4A2124',
      '#330D0F',
    ],
  },
  {
    title: 'watermelon',
    l: 65,
    c: 65,
    h: 28,
    expectedBase: '#FF6E6B',
    expectedValues: [
      '#FFF7F7',
      '#FFEDEB',
      '#FFD6D1',
      '#FFADA8',
      '#FF827D',
      '#ED5C5C',
      '#CF3D45',
      '#B01C2E',
      '#8C001F',
      '#610012',
      '#3B0300',
    ],
  },
  {
    title: 'lilac',
    l: 80,
    c: 35,
    h: 299,
    expectedBase: '#D1BDFF',
    expectedValues: [
      '#FAF7FF',
      '#F5EDFF',
      '#E6DBFF',
      '#CFBAFC',
      '#B39EE0',
      '#9685C4',
      '#7D6BA8',
      '#63548F',
      '#4A3D75',
      '#33265C',
      '#1A1242',
    ],
  },
  {
    title: 'grape',
    l: 31,
    c: 103,
    h: 307,
    expectedBase: '#6108CF',
    expectedValues: [
      '#FCF7FF',
      '#F7EDFF',
      '#EDD9FF',
      '#D9B5FF',
      '#C791FF',
      '#B06EFF',
      '#9647FF',
      '#7A29E6',
      '#5C00C9',
      '#40008F',
      '#240059',
    ],
  },
];

describe('Convert LCH to hex', () => {
  PALETTE.forEach((palette) => {
    it(`should convert ${palette.title} base color to hex`, () => {
      const result = lchToHex({ l: palette.l, c: palette.c, h: palette.h });
      expect(result.value).toBe(palette.expectedBase);
    });

    COLOR_SCALES.forEach((scale, i) => {
      it(`should convert ${palette.title} ${scale.label} color to hex`, () => {
        const result = lchToHex({ l: scale.value, c: palette.c, h: palette.h });
        expect(result.value).toBe(palette.expectedValues[i]);
      });
    });
  });
});
