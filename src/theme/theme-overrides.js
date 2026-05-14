import { createPaletteChannel } from 'minimal-shared/utils';

// ----------------------------------------------------------------------

export const themeOverrides = {
  colorSchemes: {
    light: {
      palette: {
        primary: createPaletteChannel({
          lighter: '#E3F2FD',
          light: '#64B5F6',
          main: '#2196F3',
          dark: '#1565C0',
          darker: '#0D47A1',
          contrastText: '#FFFFFF',
        }),
      },
    },
    dark: {
      palette: {
        primary: createPaletteChannel({
          lighter: '#E3F2FD',
          light: '#64B5F6',
          main: '#2196F3',
          dark: '#1565C0',
          darker: '#0D47A1',
          contrastText: '#FFFFFF',
        }),
      },
    },
  },
};
