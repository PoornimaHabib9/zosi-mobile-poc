import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from '../themes';
import useAppContext from '../hooks/useAppContext';
import '../assets/css/index.css';

export default function AppThemeProvider({ children }) {
  const { theme } = useAppContext();
  return (
    <ThemeProvider theme={{ ...getTheme(theme) }}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
