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

export const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  padding: 7px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 260px;
    height: 100vh;
    background: ${({ theme }) => theme.bg};
    padding: 80px 28px 28px;
    gap: 20px;
    transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border-left: 1px solid ${({ theme }) => theme.border};
    z-index: 999;
  }
`;

export const MobileLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export const Backdrop = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 998;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
    transition: opacity 0.3s ease;
  }
`;
