import { createTheme } from '@mui/material/styles';
import {
  createBreakpoints,
  createPalette,
  createSpacing,
  createTypography,
  createZIndexes,
} from 'theme/theming';
import createShadows from 'theme/theming/createShadows';

const Theme = createTheme({
  palette: createPalette(),
  typography: createTypography(),
  zIndex: createZIndexes(),
  spacing: createSpacing(),
  breakpoints: createBreakpoints(),
  shadows: createShadows(),
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          WebkitFontSmoothing: 'antialiased',
          textRendering: 'optimizeLegibility',
          boxSizing: 'border-box',
          '*, *::before, *::after': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
            fontFamily: "'Montserrat', sans-serif",
          },
          '#__next': {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          },
        },
      },
    },
  },
});

export default Theme;
