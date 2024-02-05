import { useEffect } from 'react';

export default function useTheme({ primaryColor }: { primaryColor?: string }) {
  const scaleSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  function generatePalette(baseColor) {
    const rgb = hexToRgb(baseColor);

    const palette = scaleSteps.map((step) => {
      const adjustedColor = adjustLightness(rgb, step);
      return rgbToHex(adjustedColor);
    });

    return palette;
  }

  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }

  function adjustLightness(rgb, scaleStep) {
    const [r, g, b] = rgb;
    const lightness = 1 - scaleStep / 1000;

    return [Math.round(r * lightness), Math.round(g * lightness), Math.round(b * lightness)];
  }

  function rgbToHex(rgb) {
    return '#' + rgb.map((component) => component.toString(16).padStart(2, '0')).join('');
  }

  console.log({
    val: generatePalette(document.documentElement?.style.getPropertyValue('--colorsPrimary950'))
  });
  useEffect(() => {
    if (primaryColor && typeof document !== 'undefined') {
      const arr = generatePalette(
        document.documentElement?.style.getPropertyValue('--colorsPrimary950')
      );

      arr.map((val, ind) =>
        document.documentElement?.style.setProperty(`--colorsPrimary${scaleSteps[ind]}`, val)
      );
      // document.documentElement?.style.setProperty('--colorsPrimary950', primaryColor);
    }
  }, [primaryColor]);
}
