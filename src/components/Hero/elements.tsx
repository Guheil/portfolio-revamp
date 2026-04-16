import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const HeroCenter = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 24px;
`;

export const HeroPortrait = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
  will-change: transform, opacity, filter;

  img {
    display: block;
    height: clamp(440px, 72vh, 860px);
    width: auto;
    object-fit: contain;
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.5 : 0.42)};
    filter: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'grayscale(50%) brightness(1.3)'
        : 'grayscale(60%) contrast(1.1)'};
    transition: opacity 0.4s ease, filter 0.4s ease;
    mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  }

  @media (max-width: 600px) {
    img {
      height: clamp(320px, 60vh, 560px);
    }
  }
`;

export const HeroBigName = styled.h1`
  position: relative;
  z-index: 2;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 800;
  font-size: clamp(4rem, 16vw, 14rem);
  line-height: 0.9;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  perspective: 1000px;
  transform-style: preserve-3d;
  will-change: transform, opacity, filter;

  @media (max-width: 600px) {
    font-size: clamp(3rem, 20vw, 7rem);
  }
`;

export const HeroNameTilt = styled.span`
  display: inline-block;
  transform-style: preserve-3d;
  will-change: transform;
`;

export const HeroRole = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: clamp(1rem, 3vw, 2.4rem);
  color: ${({ theme }) => theme.textSecondary};
  letter-spacing: -0.01em;
  margin-top: 16px;
  text-transform: uppercase;
  will-change: transform, opacity, filter;

  @media (max-width: 600px) {
    font-size: clamp(0.85rem, 4.5vw, 1.4rem);
    margin-top: 10px;
  }
`;

export const HeroMeta = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textMuted};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-top: 28px;
  will-change: transform, opacity, filter;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    margin-top: 18px;
  }
`;

/* bottom bar across the viewport */
export const HeroBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 32px 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 24px;
    gap: 20px;
  }
`;

export const ScrollHint = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  will-change: transform, opacity;
`;

export const ScrollBar = styled.div`
  width: 2px;
  height: 32px;
  background: ${({ theme }) => theme.text};
  border-radius: 1px;
`;

export const ScrollLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  line-height: 1.5;
`;

export const HeroBio = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.65;
  max-width: 380px;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const HeroCTA = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  will-change: transform, opacity;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`;

export const CTABtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  padding: 0 24px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.bg};
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    flex: 1;
    justify-content: center;
  }
`;

export const CTABtnOutline = styled(CTABtn)`
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};

  &:hover {
    border-color: ${({ theme }) => theme.text};
    opacity: 1;
  }
`;
