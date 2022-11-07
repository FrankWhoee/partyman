import {ThemeProvider, createTheme, Theme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export type ThemeKey = 'dark' | 'light';

export const themeMap: Record<ThemeKey, Theme> = {
    light: createTheme({
        palette: {
            mode: 'light'
        },
    }),
    dark: createTheme({
        palette: {
            mode: 'dark',
        },
    }),
}


