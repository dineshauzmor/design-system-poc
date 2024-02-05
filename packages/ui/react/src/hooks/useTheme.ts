import { useEffect } from 'react';

export default function useTheme({ primaryColor }: { primaryColor?: string }) {
  const tintVariants = {
    50: 0.95, //95%
    100: 0.9, //90%
    200: 0.7, //70%
    300: 0.5, //50%
    400: 0.3, //30%
    600: 0.1, //10%
    700: 0.3, //30%
    800: 0.5, //50%
    900: 0.7 //70%
  };

  const getTintVariantColor = (color: string, intensity: number, tintColor: 'white' | 'black') => {
    /**
     * It will add white or black based on tintColor param to the passed color and return new color mix
     * @param color base color
     * @param intensity ranging from 0 - 1
     * @param tintColor color that we want to add to base color to make it darker or lighter.
     * @returns tinted color
     */
    return `color-mix(in srgb, ${color}, ${tintColor} ${intensity * 100}%)`;
  };

  const getPalette = (baseColor: string, keyPrefix?: string) => {
    /**
     * Returns a color palette of base color ranging from 50 to 900 where base color is being 500.
     * @param baseColor
     * @param keyPrefix
     * @returns color palette ranging from 50 to 900.
     */
    return {
      [`${keyPrefix}50`]: getTintVariantColor(baseColor, tintVariants[50], 'white'),
      [`${keyPrefix}100`]: getTintVariantColor(baseColor, tintVariants[100], 'white'),
      [`${keyPrefix}200`]: getTintVariantColor(baseColor, tintVariants[200], 'white'),
      [`${keyPrefix}300`]: getTintVariantColor(baseColor, tintVariants[300], 'white'),
      [`${keyPrefix}400`]: getTintVariantColor(baseColor, tintVariants[400], 'white'),
      [`${keyPrefix}500`]: baseColor,
      [`${keyPrefix}600`]: getTintVariantColor(baseColor, tintVariants[600], 'black'),
      [`${keyPrefix}700`]: getTintVariantColor(baseColor, tintVariants[700], 'black'),
      [`${keyPrefix}800`]: getTintVariantColor(baseColor, tintVariants[800], 'black'),
      [`${keyPrefix}900`]: getTintVariantColor(baseColor, tintVariants[900], 'black')
    };
  };
  console.log({
    val: getPalette(
      document.documentElement?.style.getPropertyValue('--colorsPrimary950'),
      '--colorsPrimary'
    )
  });
  useEffect(() => {
    if (primaryColor && typeof document !== 'undefined') {
      const arr = getPalette(
        document.documentElement?.style.getPropertyValue('--colorsPrimary950'),
        '--colorsPrimary'
      );

      Object.entries(arr).map(([key, val]) =>
        document.documentElement?.style.setProperty(key, val)
      );
      // document.documentElement?.style.setProperty('--colorsPrimary950', primaryColor);
    }
  }, [primaryColor]);
}
