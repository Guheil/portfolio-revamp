'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
  BurgerLine,
  MobileMenu,
  MobileLinkRow,
  MobileLinkNumber,
  MobileLink,
  MobileMenuFooter,
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

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

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
            <MobileMenuBtn
              $open={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <BurgerLine $open={mobileOpen} $index={0} />
              <BurgerLine $open={mobileOpen} $index={1} />
              <BurgerLine $open={mobileOpen} $index={2} />
            </MobileMenuBtn>
          </NavRight>
        </NavInner>
      </NavWrapper>
      <Backdrop $open={mobileOpen} onClick={() => setMobileOpen(false)} />
      <MobileMenu $open={mobileOpen}>
        {links.map((l, i) => (
          <MobileLinkRow key={l.href} $open={mobileOpen} $index={i}>
            <MobileLinkNumber>{String(i + 1).padStart(2, '0')}</MobileLinkNumber>
            <MobileLink onClick={() => handleLinkClick(l.href)}>
              {l.label}
            </MobileLink>
          </MobileLinkRow>
        ))}
        <MobileMenuFooter $open={mobileOpen}>
          Xavier Gael San Juan
        </MobileMenuFooter>
      </MobileMenu>
    </>
  );
};

export default Navigation;
