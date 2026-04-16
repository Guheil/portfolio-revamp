import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 24px;

  @media (max-width: 768px) {
    padding: 60px 24px;
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

export const ContentBlock = styled.div`
  min-width: 0;
`;

export const SectionLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin-bottom: 12px;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.03em;
  margin-bottom: 0;
`;

export const CategoryLabel = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
  margin-top: 36px;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const ChipGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.border};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSecondary};
  cursor: default;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
  }
`;

export const ChipContent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const ChipIcon = styled.span`
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textSecondary};
  background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)')};
  clip-path: polygon(25% 6%, 75% 6%, 96% 50%, 75% 94%, 25% 94%, 4% 50%);

  svg {
    width: 11px;
    height: 11px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.border};
  margin: 36px 0;
`;
