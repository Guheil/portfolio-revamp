'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
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
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Certifications', href: '/#certifications' },
];

const Navigation: React.FC<NavigationProps> = ({ visible }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggle } = useThemeMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = useCallback(
    (href: string, event?: React.MouseEvent<HTMLAnchorElement>) => {
      setMobileOpen(false);

      const isHomeRoute = pathname === '/';
      const hash = href.includes('#') ? `#${href.split('#')[1]}` : '';
      const isHomeAnchor = isHomeRoute && Boolean(hash);
      const isHomeLogo = isHomeRoute && href === '/';

      if (!isHomeAnchor && !isHomeLogo) {
        return;
      }

      event?.preventDefault();

      if (isHomeLogo) {
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth',
        });
        window.history.replaceState(null, '', '/');
        return;
      }

      const el = document.querySelector(hash);
      if (!el) return;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      window.history.replaceState(null, '', hash);
    },
    [pathname]
  );

  return (
    <>
      <NavWrapper
        $visible={visible}
        $scrolled={scrolled}
        aria-label="Primary navigation"
      >
        <NavInner>
          <Logo href="/" onClick={(event) => handleLinkClick('/', event)} aria-label="Go to homepage">
            Gael.
          </Logo>
          <NavLinks>
            {links.map((link) => (
              <NavLinkItem
                key={link.href}
                href={link.href}
                onClick={(event) => handleLinkClick(link.href, event)}
              >
                {link.label}
              </NavLinkItem>
            ))}
          </NavLinks>
          <NavRight>
            <ThemeToggle onClick={(event) => toggle(event)} aria-label="Toggle theme">
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
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <BurgerLine $open={mobileOpen} $index={0} />
              <BurgerLine $open={mobileOpen} $index={1} />
              <BurgerLine $open={mobileOpen} $index={2} />
            </MobileMenuBtn>
          </NavRight>
        </NavInner>
      </NavWrapper>
      <Backdrop $open={mobileOpen} onClick={() => setMobileOpen(false)} />
      <MobileMenu id="mobile-navigation" $open={mobileOpen} aria-hidden={!mobileOpen}>
        {links.map((link, index) => (
          <MobileLinkRow key={link.href} $open={mobileOpen} $index={index}>
            <MobileLinkNumber>{String(index + 1).padStart(2, '0')}</MobileLinkNumber>
            <MobileLink
              href={link.href}
              onClick={(event) => handleLinkClick(link.href, event)}
              tabIndex={mobileOpen ? 0 : -1}
            >
              {link.label}
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
