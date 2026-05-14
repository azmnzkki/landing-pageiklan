import { HelmetProvider } from 'react-helmet-async';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { createTheme } from 'src/theme/create-theme';
import { themeConfig } from 'src/theme/theme-config';

export default function App({ children }) {
  const theme = createTheme(themeConfig);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </HelmetProvider>
  );
}
