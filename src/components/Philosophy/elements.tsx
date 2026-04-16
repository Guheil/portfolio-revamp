import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  min-height: 320vh;
`;

export const Stage = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 92px 24px;
`;

export const QuoteStack = styled.div`
  position: relative;
  z-index: 1;
  width: min(940px, 100%);
  min-height: 320px;
  display: grid;
  place-items: center;
`;

export const QuoteSlide = styled.article`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  will-change: transform, opacity, filter;

  &:first-of-type {
    opacity: 1;
  }
`;

export const QuoteText = styled.blockquote`
  margin: 0;
  max-width: 900px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.45rem, 4.2vw, 3.2rem);
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text};
  text-wrap: balance;
`;

export const QuoteSpeaker = styled.cite`
  margin-top: 24px;
  font-style: normal;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textSecondary};
`;

export const RevealLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  perspective: 1200px;
`;

export const RevealHalf = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background: ${({ theme }) => theme.bg};
  will-change: transform, opacity, filter;
`;

export const RevealHalfLeft = styled(RevealHalf)`
  left: 0;
  transform: translateX(-102%);
  transform-origin: right center;
`;

export const RevealHalfRight = styled(RevealHalf)`
  right: 0;
  transform: translateX(102%);
  transform-origin: left center;
`;

export const RevealSeam = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: min(38vh, 320px);
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.border};
  opacity: 0;
  will-change: opacity, filter;
`;
