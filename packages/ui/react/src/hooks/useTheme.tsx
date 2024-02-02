import { useEffect } from 'react';

export default function useTheme({ primaryColor }: { primaryColor?: string }) {
  useEffect(() => {
    if (primaryColor && typeof document !== 'undefined') {
      document.documentElement?.style.setProperty('--colorsPrimary950', primaryColor);
    }
  }, [primaryColor]);
}
