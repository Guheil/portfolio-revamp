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

export const CertCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 24px 28px;
  margin-bottom: 12px;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.text};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const CertInfo = styled.div`
  flex: 1;
`;

export const CertName = styled.h4`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 4px;
`;

export const CertIssuer = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const CertLink = styled.a`
  display: inline-block;
  margin-top: 6px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.78rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.text};
  }
`;

export const CertDate = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textMuted};
  white-space: nowrap;
`;

export const CertSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`;

export const CertSkillTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.textMuted};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 2px 8px;
`;
