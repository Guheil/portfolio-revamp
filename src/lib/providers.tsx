'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import gsap from 'gsap';
import { lightTheme, darkTheme } from './theme';
import StyledComponentsRegistry from './registry';

/* ─── light / dark styled-components tokens ─── */
const lightSC = {
  mode: 'light' as const,
  bg: '#fafafa',
  bgPaper: '#ffffff',
  bgCard: '#f0f0f0',
  text: '#0a0a0a',
  textSecondary: '#555555',
  textMuted: '#888888',
  border: '#e0e0e0',
  accent: '#0a0a0a',
  accentHover: '#333333',
  fonts: { display: '"Syne", sans-serif', body: '"Outfit", sans-serif' },
};

const darkSC = {
  mode: 'dark' as const,
  bg: '#080b16',
  bgPaper: '#0d1224',
  bgCard: '#111830',
  text: '#e8e8e8',
  textSecondary: '#8892a8',
  textMuted: '#5a6478',
  border: '#1a2340',
  accent: '#e8e8e8',
  accentHover: '#c0c0c0',
  fonts: { display: '"Syne", sans-serif', body: '"Outfit", sans-serif' },
};

export type ThemeMode = 'light' | 'dark';

interface ThemeCtx {
  mode: ThemeMode;
  toggle: (e?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeCtx>({ mode: 'light', toggle: () => {} });

export const useThemeMode = () => useContext(ThemeContext);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');
  const modeRef = useRef(mode);
  modeRef.current = mode;

  useEffect(() => {
    const saved = localStorage.getItem('theme') as ThemeMode | null;
    if (saved === 'dark' || saved === 'light') {
      setMode(saved);
      document.body.classList.toggle('dark', saved === 'dark');
    }
  }, []);

  const toggle = useCallback((e?: React.MouseEvent) => {
    const current = modeRef.current;
    const next: ThemeMode = current === 'light' ? 'dark' : 'light';
    const newBg = next === 'dark' ? '#080b16' : '#fafafa';

    /* circle-wipe origin from the toggle button */
    const rect = (e?.currentTarget as HTMLElement)?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const r = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      zIndex: '99999',
      pointerEvents: 'none',
      background: newBg,
      clipPath: `circle(0px at ${x}px ${y}px)`,
    });
    document.body.appendChild(overlay);

    gsap.to(overlay, {
      clipPath: `circle(${r + 200}px at ${x}px ${y}px)`,
      duration: 0.65,
      ease: 'power3.inOut',
      onComplete: () => {
        /* instant switch behind the overlay */
        document.body.style.transition = 'none';
        setMode(next);
        localStorage.setItem('theme', next);
        document.body.classList.toggle('dark', next === 'dark');
        void document.body.offsetHeight;
        document.body.style.transition = '';

        gsap.to(overlay, {
          opacity: 0,
          duration: 0.35,
          delay: 0.05,
          ease: 'power2.out',
          onComplete: () => overlay.remove(),
        });
      },
    });
  }, []);

  const muiTheme = mode === 'dark' ? darkTheme : lightTheme;
  const scTheme = mode === 'dark' ? darkSC : lightSC;

  const ctx = useMemo(() => ({ mode, toggle }), [mode, toggle]);

  return (
    <ThemeContext.Provider value={ctx}>
      <StyledComponentsRegistry>
        <MUIThemeProvider theme={muiTheme}>
          <SCThemeProvider theme={scTheme}>
            <CssBaseline />
            {children}
          </SCThemeProvider>
        </MUIThemeProvider>
      </StyledComponentsRegistry>
    </ThemeContext.Provider>
  );
}
