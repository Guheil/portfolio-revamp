import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0a0a0a' },
    background: { default: '#fafafa', paper: '#ffffff' },
    text: { primary: '#0a0a0a', secondary: '#555555' },
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
    h1: { fontFamily: '"Syne", sans-serif', fontWeight: 800 },
    h2: { fontFamily: '"Syne", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
    button: { fontFamily: '"Outfit", sans-serif', fontWeight: 500, textTransform: 'none' as const },
  },
  shape: { borderRadius: 8 },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#e8e8e8' },
    background: { default: '#080b16', paper: '#0d1224' },
    text: { primary: '#e8e8e8', secondary: '#8892a8' },
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
    h1: { fontFamily: '"Syne", sans-serif', fontWeight: 800 },
    h2: { fontFamily: '"Syne", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
    button: { fontFamily: '"Outfit", sans-serif', fontWeight: 500, textTransform: 'none' as const },
  },
  shape: { borderRadius: 8 },
});
