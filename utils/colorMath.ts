
// A type for RGB color values
interface RGB {
  r: number;
  g: number;
  b: number;
}

/**
 * Converts a HEX color string to an RGB object.
 * Handles 3-digit (#RGB) and 6-digit (#RRGGBB) formats.
 * @param hex - The hex color string (e.g., "#FFF", "#A855F7").
 * @returns An RGB object or null if the format is invalid.
 */
export const hexToRgb = (hex: string): RGB | null => {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    return null;
  }

  let hexValue = hex.substring(1);

  // If 3-digit hex, convert to 6-digit
  if (hexValue.length === 3) {
    hexValue = hexValue.split('').map(char => char + char).join('');
  }

  const hexInt = parseInt(hexValue, 16);
  return {
    r: (hexInt >> 16) & 255,
    g: (hexInt >> 8) & 255,
    b: hexInt & 255,
  };
};

/**
 * Calculates the relative luminance of a color.
 * Formula from WCAG 2.1 documentation: https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 * @param r - Red value (0-255).
 * @param g - Green value (0-255).
 * @param b - Blue value (0-255).
 * @returns The relative luminance (0-1).
 */
export const getLuminance = (r: number, g: number, b: number): number => {
  const sRGB = [r, g, b].map(val => {
    const s = val / 255.0;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
};

/**
 * Calculates the contrast ratio between two luminance values.
 * Formula from WCAG 2.1 documentation: https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 * @param l1 - Luminance of the first color.
 * @param l2 - Luminance of the second color.
 * @returns The contrast ratio.
 */
export const getContrastRatio = (l1: number, l2: number): number => {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
};
