import styled from 'styled-components';

export const NavWrapper = styled.nav<{ $visible: boolean; $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${({ $scrolled }) => ($scrolled ? '14px 0' : '22px 0')};
  background: ${({ $scrolled, theme }) =>
    $scrolled ? (theme.mode === 'dark' ? 'rgba(8,11,22,0.92)' : 'rgba(250,250,250,0.92)') : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(16px)' : 'none')};
  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled ? `1px solid ${theme.border}` : 'none'};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '-100%')});
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const NavInner = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.03em;
  text-transform: uppercase;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkItem = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ThemeToggle = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.border};
  background: transparent;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.text};
  }
`;

export const MobileMenuBtn = styled.button<{ $open: boolean }>`
  display: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 32px;
  height: 24px;
  position: relative;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 0;
  }
`;

export const BurgerLine = styled.span<{ $open: boolean; $index: number }>`
  display: block;
  height: 2px;
  background: ${({ theme }) => theme.text};
  border-radius: 1px;
  transform-origin: center;
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);

  /* Line widths: staggered asymmetry when closed */
  width: ${({ $open, $index }) => {
    if ($open) return '100%';
    if ($index === 0) return '100%';
    if ($index === 1) return '60%';
    return '80%';
  }};

  /* Spacing between lines */
  margin-top: ${({ $index }) => ($index === 0 ? '0' : '6px')};

  /* Morph to X when open */
  ${({ $open, $index }) => {
    if (!$open) return '';
    if ($index === 0) return 'transform: translateY(8px) rotate(45deg);';
    if ($index === 1) return 'opacity: 0; transform: scaleX(0);';
    if ($index === 2) return 'transform: translateY(-8px) rotate(-45deg);';
    return '';
  }}
`;

export const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    inset: 0;
    overflow: hidden;
    background: ${({ theme }) => theme.bg};
    padding: 0 24px;
    z-index: 999;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    filter: ${({ $open }) => ($open ? 'blur(0px)' : 'blur(16px)')};
    pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
    transition:
      opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      filter 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

export const MobileLinkRow = styled.div<{ $open: boolean; $index: number }>`
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 18px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  filter: ${({ $open }) => ($open ? 'blur(0px)' : 'blur(10px)')};
  transition:
    opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${({ $index }) => 0.1 + $index * 0.09}s,
    filter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${({ $index }) => 0.1 + $index * 0.09}s;

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.border};
  }
`;

export const MobileLinkNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.7rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textMuted};
  letter-spacing: 0.06em;
  min-width: 24px;
`;

export const MobileLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.1rem, 6vw, 2.4rem);
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.03em;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const MobileMenuFooter = styled.div<{ $open: boolean }>`
  margin-top: 48px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textMuted};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  filter: ${({ $open }) => ($open ? 'blur(0px)' : 'blur(10px)')};
  transition:
    opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.38s,
    filter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.38s;
`;

export const Backdrop = styled.div<{ $open: boolean }>`
  display: none;
`;
