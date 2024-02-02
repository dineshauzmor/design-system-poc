import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function ThemeProvider({ children, primaryColor }) {
  useEffect(() => {
    if (primaryColor && typeof document !== 'undefined') {
      document.documentElement?.style.setProperty('--colorsPrimary950', primaryColor);
    }
  }, [primaryColor]);
  return <div>{children}</div>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  primaryColor: PropTypes.string
};

ThemeProvider.defaultProps = {
  primaryColor: ''
};
