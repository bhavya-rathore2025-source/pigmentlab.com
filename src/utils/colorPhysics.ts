import { Color, mix } from 'spectral.js';

export interface ColorWeight {
  hex: string;
  weight: number;
}

export interface ColorDetails {
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  cmyk: { c: number; m: number; y: number; k: number };
  oklch: { l: number; c: number; h: number };
}

// Clamp helper
export function clamp(v: number, min = 0, max = 1): number {
  return Math.max(min, Math.min(max, v));
}

// Convert HEX to RGB
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let clean = hex.replace(/^#/, '').trim();
  if (clean.length === 3) {
    clean = clean.split('').map((c) => c + c).join('');
  }
  const num = parseInt(clean, 16);
  if (isNaN(num) || clean.length !== 6) {
    return { r: 0, g: 0, b: 0 };
  }
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

// Convert RGB to HEX
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const clamped = Math.round(Math.max(0, Math.min(255, n)));
    return clamped.toString(16).padStart(2, '0');
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

// Convert RGB to HSL
export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

// Convert HSL to RGB
export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h = (h % 360 + 360) % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (h < 60) {
    r = c; g = x; b = 0;
  } else if (h < 120) {
    r = x; g = c; b = 0;
  } else if (h < 180) {
    r = 0; g = c; b = x;
  } else if (h < 240) {
    r = 0; g = x; b = c;
  } else if (h < 300) {
    r = x; g = 0; b = c;
  } else {
    r = c; g = 0; b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

// Convert RGB to CMYK
export function rgbToCmyk(r: number, g: number, b: number): { c: number; m: number; y: number; k: number } {
  const r_ = r / 255;
  const g_ = g / 255;
  const b_ = b / 255;
  const k = 1 - Math.max(r_, g_, b_);
  if (k >= 0.999) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }
  const c = (1 - r_ - k) / (1 - k);
  const m = (1 - g_ - k) / (1 - k);
  const y = (1 - b_ - k) / (1 - k);

  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100),
  };
}

// Convert CMYK to RGB
export function cmykToRgb(c: number, m: number, y: number, k: number): { r: number; g: number; b: number } {
  c /= 100;
  m /= 100;
  y /= 100;
  k /= 100;
  const r = 255 * (1 - c) * (1 - k);
  const g = 255 * (1 - m) * (1 - k);
  const b = 255 * (1 - y) * (1 - k);
  return {
    r: Math.round(Math.max(0, Math.min(255, r))),
    g: Math.round(Math.max(0, Math.min(255, g))),
    b: Math.round(Math.max(0, Math.min(255, b))),
  };
}

// Convert sRGB to Linear RGB
function srgbToLinear(c: number): number {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

// Convert Linear RGB to sRGB
function linearToSrgb(c: number): number {
  const clamped = Math.max(0, Math.min(1, c));
  const v = clamped <= 0.0031308 ? clamped * 12.92 : 1.055 * Math.pow(clamped, 1 / 2.4) - 0.055;
  return Math.round(v * 255);
}

// Convert sRGB to OKLab
export function rgbToOklab(r: number, g: number, b: number): [number, number, number] {
  const lr = srgbToLinear(r);
  const lg = srgbToLinear(g);
  const lb = srgbToLinear(b);

  const l_ = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m_ = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s_ = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);

  const L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_;
  const bVal = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_;

  return [L, a, bVal];
}

// Convert OKLab to sRGB
export function oklabToRgb(L: number, a: number, bVal: number): { r: number; g: number; b: number } {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * bVal;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * bVal;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * bVal;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  const lr = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const lg = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const lb = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;

  return {
    r: linearToSrgb(lr),
    g: linearToSrgb(lg),
    b: linearToSrgb(lb),
  };
}

// Convert RGB to OKLCH
export function rgbToOklch(r: number, g: number, b: number): { l: number; c: number; h: number } {
  const [L, a, bVal] = rgbToOklab(r, g, b);
  const C = Math.sqrt(a * a + bVal * bVal);
  let h = (Math.atan2(bVal, a) * 180) / Math.PI;
  if (h < 0) h += 360;
  return {
    l: Math.round(L * 100) / 100,
    c: Math.round(C * 1000) / 1000,
    h: Math.round(h),
  };
}

// -------------------------------------------------------------
// 1. PHYSICAL PIGMENT MIXING (Kubelka-Munk theory via Spectral.js)
// -------------------------------------------------------------
export function mixPigmentsKubelkaMunk(colors: ColorWeight[]): string {
  if (!colors.length) return '#FFFFFF';
  if (colors.length === 1) return colors[0].hex;

  const totalWeight = colors.reduce((acc, c) => acc + (c.weight > 0 ? c.weight : 0), 0);
  if (totalWeight <= 0) return colors[0].hex;

  try {
    const spectralInputs = colors
      .filter((c) => c.weight > 0)
      .map((c) => [new Color(c.hex), c.weight / totalWeight] as [Color, number]);

    if (spectralInputs.length === 0) return colors[0].hex;
    if (spectralInputs.length === 1) return spectralInputs[0][0].toString();

    // @ts-ignore
    const result = mix(...spectralInputs);
    return result.toString();
  } catch (err) {
    console.warn('Kubelka-Munk blend fallback to OKLCH:', err);
    return mixOklch(colors);
  }
}

// -------------------------------------------------------------
// 2. MODERN WEB CSS MIXING (OKLCH Perceptual)
// -------------------------------------------------------------
export function mixOklch(colors: ColorWeight[]): string {
  if (!colors.length) return '#FFFFFF';
  const totalWeight = colors.reduce((acc, c) => acc + (c.weight > 0 ? c.weight : 0), 0);
  if (totalWeight <= 0) return colors[0].hex;

  let totalL = 0;
  let totalA = 0;
  let totalB = 0;

  for (const c of colors) {
    if (c.weight <= 0) continue;
    const factor = c.weight / totalWeight;
    const rgb = hexToRgb(c.hex);
    const [l, a, bVal] = rgbToOklab(rgb.r, rgb.g, rgb.b);
    totalL += l * factor;
    totalA += a * factor;
    totalB += bVal * factor;
  }

  const blendedRgb = oklabToRgb(totalL, totalA, totalB);
  return rgbToHex(blendedRgb.r, blendedRgb.g, blendedRgb.b);
}

// -------------------------------------------------------------
// 3. DIGITAL LINEAR MIXING (Screen RGB)
// -------------------------------------------------------------
export function mixRgb(colors: ColorWeight[]): string {
  if (!colors.length) return '#FFFFFF';
  const totalWeight = colors.reduce((acc, c) => acc + (c.weight > 0 ? c.weight : 0), 0);
  if (totalWeight <= 0) return colors[0].hex;

  let r2 = 0;
  let g2 = 0;
  let b2 = 0;

  for (const c of colors) {
    if (c.weight <= 0) continue;
    const factor = c.weight / totalWeight;
    const rgb = hexToRgb(c.hex);
    r2 += rgb.r * rgb.r * factor;
    g2 += rgb.g * rgb.g * factor;
    b2 += rgb.b * rgb.b * factor;
  }

  return rgbToHex(Math.sqrt(r2), Math.sqrt(g2), Math.sqrt(b2));
}

// -------------------------------------------------------------
// 4. PRINT INK MIXING (Subtractive CMYK)
// -------------------------------------------------------------
export function mixCmyk(colors: ColorWeight[]): string {
  if (!colors.length) return '#FFFFFF';
  const totalWeight = colors.reduce((acc, c) => acc + (c.weight > 0 ? c.weight : 0), 0);
  if (totalWeight <= 0) return colors[0].hex;

  let cSum = 0;
  let mSum = 0;
  let ySum = 0;
  let kSum = 0;

  for (const col of colors) {
    if (col.weight <= 0) continue;
    const factor = col.weight / totalWeight;
    const rgb = hexToRgb(col.hex);
    const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
    cSum += cmyk.c * factor;
    mSum += cmyk.m * factor;
    ySum += cmyk.y * factor;
    kSum += cmyk.k * factor;
  }

  const outRgb = cmykToRgb(cSum, mSum, ySum, kSum);
  return rgbToHex(outRgb.r, outRgb.g, outRgb.b);
}

// -------------------------------------------------------------
// 5. WCAG 2.1 CONTRAST RATIO & RATING
// -------------------------------------------------------------
function getLuminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function getWcagContrast(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

export function getContrastRating(ratio: number): {
  ratioText: string;
  aaNormal: boolean;
  aaLarge: boolean;
  aaaNormal: boolean;
  aaaLarge: boolean;
} {
  const rounded = Math.round(ratio * 100) / 100;
  return {
    ratioText: `${rounded.toFixed(2)}:1`,
    aaNormal: ratio >= 4.5,
    aaLarge: ratio >= 3.0,
    aaaNormal: ratio >= 7.0,
    aaaLarge: ratio >= 4.5,
  };
}

// -------------------------------------------------------------
// 6. COLOR BLINDNESS SIMULATOR (Brettel/Viénot)
// -------------------------------------------------------------
export function simulateColorBlindness(
  hex: string,
  type: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'achromatopsia'
): string {
  if (type === 'normal') return hex;
  const rgb = hexToRgb(hex);
  let r = rgb.r / 255;
  let g = rgb.g / 255;
  let b = rgb.b / 255;

  let simR = r;
  let simG = g;
  let simB = b;

  if (type === 'protanopia') {
    simR = 0.56667 * r + 0.43333 * g + 0.0 * b;
    simG = 0.55833 * r + 0.44167 * g + 0.0 * b;
    simB = 0.0 * r + 0.24167 * g + 0.75833 * b;
  } else if (type === 'deuteranopia') {
    simR = 0.625 * r + 0.375 * g + 0.0 * b;
    simG = 0.7 * r + 0.3 * g + 0.0 * b;
    simB = 0.0 * r + 0.3 * g + 0.7 * b;
  } else if (type === 'tritanopia') {
    simR = 0.95 * r + 0.05 * g + 0.0 * b;
    simG = 0.0 * r + 0.43333 * g + 0.56667 * b;
    simB = 0.0 * r + 0.475 * g + 0.525 * b;
  } else if (type === 'achromatopsia') {
    const grey = 0.299 * r + 0.587 * g + 0.114 * b;
    simR = grey;
    simG = grey;
    simB = grey;
  }

  return rgbToHex(simR * 255, simG * 255, simB * 255);
}

// -------------------------------------------------------------
// 7. ITTEN RYB COLOR WHEEL MAPPING
// Traditional Bauhaus 12-hue artist color wheel
// -------------------------------------------------------------
// Maps Itten angle (0-360) where:
// 0° = Red, 60° = Orange, 120° = Yellow, 180° = Green, 240° = Blue, 300° = Violet
// into RGB Hue (0-360)
const ITTEN_KEYPOINTS: [number, number][] = [
  [0, 0],       // Red -> RGB 0°
  [30, 16],     // Red-Orange
  [60, 32],     // Orange -> RGB ~32°
  [90, 48],     // Yellow-Orange -> RGB ~48°
  [120, 60],    // Yellow -> RGB 60°
  [150, 95],    // Yellow-Green -> RGB ~95°
  [180, 130],   // Green -> RGB 130° (opposite Red in Itten!)
  [210, 180],   // Blue-Green -> RGB 180°
  [240, 220],   // Blue -> RGB 220° (opposite Orange in Itten!)
  [270, 260],   // Blue-Violet -> RGB 260°
  [300, 290],   // Violet -> RGB 290° (opposite Yellow in Itten!)
  [330, 330],   // Red-Violet -> RGB 330°
  [360, 360],
];

export function ittenAngleToRgbHue(angle: number): number {
  const norm = ((angle % 360) + 360) % 360;
  for (let i = 0; i < ITTEN_KEYPOINTS.length - 1; i++) {
    const [iA, rA] = ITTEN_KEYPOINTS[i];
    const [iB, rB] = ITTEN_KEYPOINTS[i + 1];
    if (norm >= iA && norm <= iB) {
      const t = (norm - iA) / (iB - iA);
      return rA + t * (rB - rA);
    }
  }
  return norm;
}

export function rgbHueToIttenAngle(rgbHue: number): number {
  const norm = ((rgbHue % 360) + 360) % 360;
  for (let i = 0; i < ITTEN_KEYPOINTS.length - 1; i++) {
    const [iA, rA] = ITTEN_KEYPOINTS[i];
    const [iB, rB] = ITTEN_KEYPOINTS[i + 1];
    if (norm >= rA && norm <= rB) {
      const t = (norm - rA) / (rB - rA);
      return iA + t * (iB - iA);
    }
  }
  return norm;
}

// -------------------------------------------------------------
// 8. TINTS, SHADES & TONES GENERATOR (Tailwind-like 50 to 900)
// -------------------------------------------------------------
export function generatePaletteScale(hex: string): { label: string; hex: string }[] {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  const steps = [
    { label: '50', lightnessFactor: 0.95 },
    { label: '100', lightnessFactor: 0.90 },
    { label: '200', lightnessFactor: 0.80 },
    { label: '300', lightnessFactor: 0.70 },
    { label: '400', lightnessFactor: 0.60 },
    { label: '500', lightnessFactor: 0.50 }, // base reference
    { label: '600', lightnessFactor: 0.40 },
    { label: '700', lightnessFactor: 0.30 },
    { label: '800', lightnessFactor: 0.20 },
    { label: '900', lightnessFactor: 0.10 },
  ];

  return steps.map(({ label, lightnessFactor }) => {
    // Interpolate towards white or black
    let targetR: number, targetG: number, targetB: number;
    if (lightnessFactor >= 0.5) {
      // tint towards white
      const t = (lightnessFactor - 0.5) * 2;
      targetR = rgb.r + (255 - rgb.r) * t;
      targetG = rgb.g + (255 - rgb.g) * t;
      targetB = rgb.b + (255 - rgb.b) * t;
    } else {
      // shade towards black
      const t = (0.5 - lightnessFactor) * 2;
      targetR = rgb.r * (1 - t);
      targetG = rgb.g * (1 - t);
      targetB = rgb.b * (1 - t);
    }
    return {
      label,
      hex: rgbToHex(targetR, targetG, targetB),
    };
  });
}

