import styled from 'styled-components';

export const Section = styled.section`
  padding: 110px 24px;

  @media (max-width: 768px) {
    padding: 72px 24px;
  }
`;

export const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(240px, 310px) minmax(0, 1fr);
  gap: 42px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const IntroBlock = styled.div`
  position: sticky;
  top: 110px;
  align-self: start;

  @media (max-width: 980px) {
    position: static;
  }
`;

export const SectionLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 10px;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.04em;
  line-height: 0.95;
  margin-bottom: 14px;
`;

export const SectionDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  line-height: 1.72;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 280px;
`;

export const Deck = styled.div`
  display: grid;
  gap: 18px;
`;

export const Card = styled.article<{ $tilt: number }>`
  position: relative;
  --accent-blue: #1f3b70;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 26px;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(10, 12, 18, 0.95)' : 'rgba(255, 255, 255, 0.97)'};
  transform: rotate(${({ $tilt }) => $tilt}deg);
  transform-origin: 50% 50%;
  will-change: transform, filter, opacity;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-blue);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 22px;
    transform: none;
  }
`;

export const CardIndex = styled.div`
  position: absolute;
  top: 10px;
  right: 12px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--accent-blue);
  opacity: 0.16;
  user-select: none;
`;

export const CardTop = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 14px;
`;

export const RoleBlock = styled.div`
  min-width: 0;
`;

export const Role = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.05rem, 2.3vw, 1.45rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.02em;
  margin-bottom: 5px;
`;

export const Company = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Period = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const Location = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.76rem;
  color: ${({ theme }) => theme.textMuted};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const Summary = styled.p`
  position: relative;
  z-index: 2;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  line-height: 1.74;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 16px;
`;

export const Impact = styled.div`
  position: relative;
  z-index: 2;
  border-left: 2px solid #1f3b70;
  padding-left: 12px;
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.84rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.text};
`;

export const Stack = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const StackTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textMuted};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 4px 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;
