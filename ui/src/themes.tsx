import {
    createTheme, Theme,
} from '@mui/material/styles';


export type ThemeKey = 'dark' | 'light';

export const valorantColours = {
    attacker: '#ef5351',
    defender: '#16e5b4'
}

export const themeMap: Record<ThemeKey, Theme> = {
    light: createTheme({
        palette: {
            mode: 'light'
        }
    }),
    dark: createTheme({
        palette: {
            mode: 'dark'
        }
    }),
}
