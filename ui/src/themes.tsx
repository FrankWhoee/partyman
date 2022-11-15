import {createTheme, Theme} from '@mui/material/styles';


export type ThemeKey = 'dark' | 'light';

declare module '@mui/material/styles' {
    interface Palette {
        attacker: Palette['primary'];
        defender: Palette['primary'];
    }
    interface PaletteOptions {
        attacker: PaletteOptions['primary'];
        defender: PaletteOptions['primary'];
    }
}

export const themeMap: Record<ThemeKey, Theme> = {
    light: createTheme({
        palette: {
            mode: 'light',
            attacker: {
                main:'#ef5351',
            },
            defender: {
                main: '#16e5b4'
            }
        }
    }),
    dark: createTheme({
        palette: {
            mode: 'dark',
            attacker: {
                main:'#ef5351',
            },
            defender: {
                main: '#16e5b4'
            }
        }
    }),
}
