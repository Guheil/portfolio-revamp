import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';
    bg: string;
    bgPaper: string;
    bgCard: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    border: string;
    accent: string;
    accentHover: string;
    fonts: {
      display: string;
      body: string;
    };
  }
}
