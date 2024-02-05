import { useEffect } from 'react';

export default function useTheme({ primaryColor }: { primaryColor?: string }) {
  const scaleSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  function generatePalette(baseColor) {
    // Convert the base color to an RGB array
    const rgb = hexToRgb(baseColor);

    // Define the scale steps (Tailwind CSS scale from 50 to 900)

    // Generate palette by adjusting the lightness based on the scale steps
    const palette = scaleSteps.map((step) => {
      const adjustedColor = adjustLightness(rgb, step);
      return rgbToHex(adjustedColor);
    });

    return palette;
  }

  function hexToRgb(hex) {
    // Convert a hex color to an RGB array
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }

  function adjustLightness(rgb, scaleStep) {
    // Adjust the lightness of the base color based on the scale step
    const [r, g, b] = rgb;
    const lightness = scaleStep / 1000; // Tailwind CSS uses a scale from 50 to 900

    return [Math.round(r * lightness), Math.round(g * lightness), Math.round(b * lightness)];
  }

  function rgbToHex(rgb) {
    // Convert an RGB array to a hex color
    return '#' + rgb.map((component) => component.toString(16).padStart(2, '0')).join('');
  }

  const rootStyles = getComputedStyle(document.documentElement);
  console.log({
    color: rootStyles.getPropertyValue('--colorsPrimary950'),
    val: generatePalette(rootStyles.getPropertyValue('--colorsPrimary950'))
  });
  useEffect(() => {
    if (primaryColor && typeof document !== 'undefined') {
      const arr = generatePalette(primaryColor);

      arr.map((val, ind) =>
        document.documentElement?.style.setProperty(`--colorsPrimary${scaleSteps[ind]}`, val)
      );
      // document.documentElement?.style.setProperty('--colorsPrimary950', primaryColor);
    }
  }, [primaryColor]);
}
