'use client';

import React, { useState, useEffect, useCallback } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useThemeMode } from '@/lib/providers';
import { NavigationProps } from './interface';
import {
  NavWrapper,
  NavInner,
  Logo,
  NavLinks,
  NavLinkItem,
  NavRight,
  ThemeToggle,
  MobileMenuBtn,
  MobileMenu,
  MobileLink,
  Backdrop,
} from './elements';

const links = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
];

const Navigation: React.FC<NavigationProps> = ({ visible }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggle } = useThemeMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <NavWrapper $visible={visible} $scrolled={scrolled}>
        <NavInner>
          <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Gael.
          </Logo>
          <NavLinks>
            {links.map((l) => (
              <NavLinkItem key={l.href} onClick={() => handleLinkClick(l.href)}>
                {l.label}
              </NavLinkItem>
            ))}
          </NavLinks>
          <NavRight>
            <ThemeToggle onClick={(e) => toggle(e)} aria-label="Toggle theme">
              {mode === 'dark' ? (
                <LightModeOutlinedIcon sx={{ fontSize: 18 }} />
              ) : (
                <DarkModeOutlinedIcon sx={{ fontSize: 18 }} />
              )}
            </ThemeToggle>
            <MobileMenuBtn onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </MobileMenuBtn>
          </NavRight>
        </NavInner>
      </NavWrapper>
      <Backdrop $open={mobileOpen} onClick={() => setMobileOpen(false)} />
      <MobileMenu $open={mobileOpen}>
        {links.map((l) => (
          <MobileLink key={l.href} onClick={() => handleLinkClick(l.href)}>
            {l.label}
          </MobileLink>
        ))}
      </MobileMenu>
    </>
  );
};

export default Navigation;
