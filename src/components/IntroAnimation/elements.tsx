import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bg};
  overflow: hidden;
`;

export const LogoText = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(4rem, 15vw, 11rem);
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1;
  opacity: 0;
  filter: blur(30px);
  transform: scale(1.06);
  will-change: filter, opacity, transform;
`;
