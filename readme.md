# LCH Color Utilities
Inspired by https://css.land/lch (Lea Verou)

## Getting started
Install via `npm` or `yarn`
```
npm i -S lch-color-utils
yarn add lch-color-utils
```

## Methods
### `lchToRgb`
#### Usage
```
lchToRgb({ l: 90, c: 20, h: 100, isPrecise: false, forceinGamut: true });
```
#### Parameters
```
{
    l: number,
    c: number,
    h: number,
    a?: number,
    forceinGamut?: boolean,
    isPrecise?: boolean,
}
```
| Field  | Description  | Default  |
|---|---|---|
| l | Lightness value for LCH  | `undefined`  |
| c | Chroma value for LCH  | `undefined`  |
| h | Hue value for LCH  | `undefined`  |
| a | Alpha value  | `undefined`  |
| isPrecise | If true, will not round of the RGB percentage value  | `false`  |
| forceinGamut | Moves an lch color into the sRGB gamut by holding the l and h steady, and adjusting the c via binary-search until the color is on the sRGB boundary | `true`  |
#### Response
```
{
    value: number[],
    string: string,
}
```
| Field  | Description |
|---|---|
| value | Array of numbers representing [R, G, B] colors of the LCH provided  |
| string | String value of [R, G, B]. Ex: `rgb(20%, 20%, 20%)` |

### `hexToLch`
#### Usage
```
hexToLch('#FF0000');
```
#### Parameters
| Field  | Description  | Default  |
|---|---|---|
| hex | Hex string to be converted to LCH  | `undefined`  |
#### Response
```
{
    l: number,
    c: number,
    h: number,
    a?: number,
}
```
| Field  | Description |
|---|---|
| l | Lightness value for LCH  |
| c | Chroma value for LCH  |
| h | Hue value for LCH  |
| a | Alpha value  |


### `lchToHex`
#### Usage
```
lchToHex({ l: 90, c: 20, h: 100, isPrecise: false, forceinGamut: true });
```
#### Parameters
```
{
    l: number,
    c: number,
    h: number,
    a?: number,
    forceinGamut?: boolean,
    isPrecise?: boolean,
}
```
| Field  | Description  | Default  |
|---|---|---|
| l | Lightness value for LCH  | `undefined`  |
| c | Chroma value for LCH  | `undefined`  |
| h | Hue value for LCH  | `undefined`  |
| a | Alpha value  | `undefined`  |
| isPrecise | If true, will not round of the RGB percentage value  | `false`  |
| forceinGamut | Moves an lch color into the sRGB gamut by holding the l and h steady, and adjusting the c via binary-search until the color is on the sRGB boundary | `true`  |
#### Response
```
{
    value: string,
    alpha?: number,
}
```
| Field  | Description |
|---|---|
| value | Hex string value of LCH  |
| alpha | Alpha value which should be same as the one provided in your request parameters |