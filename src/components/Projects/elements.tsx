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

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.border};
  transform-origin: left;
  transform: scaleX(0);
  will-change: transform;
`;

export const ProjectRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 48px;
  padding: 48px 0;
  cursor: default;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateX(8px);
  }

  @media (max-width: 980px) {
    grid-template-columns: 92px 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 65px 1fr;
    gap: 24px;
    padding: 32px 0;

    &:hover {
      transform: translateX(4px);
    }
  }
`;

export const ProjectIndex = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  font-weight: 800;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1.5px ${({ theme }) => theme.border};
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;

  ${ProjectRow}:hover & {
    -webkit-text-stroke-color: ${({ theme }) => theme.textMuted};
    transform: translateX(-4px);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    -webkit-text-stroke-width: 1px;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProjectMeta = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const ProjectName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.05rem, 2.2vw, 1.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.02em;
  text-transform: uppercase;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;

  ${ProjectRow}:hover & {
    transform: translateX(2px);
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const ProjectPeriod = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.textMuted};
  white-space: nowrap;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const ProjectDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.88rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.75;
  max-width: 560px;
`;

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
`;

export const SkillTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.65rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textMuted};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 4px 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: all 0.35s ease;

  ${ProjectRow}:hover & {
    border-color: ${({ theme }) => theme.textSecondary};
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 6px;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.68rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textMuted};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 5px 14px;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
    transform: translateY(-1px);
  }

  svg {
    font-size: 14px !important;
  }
`;

export const ProjectRepoLink = styled(ProjectLink)`
  color: ${({ theme }) => (theme.mode === 'dark' ? '#d8ecff' : '#0f3558')};
  border-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(114, 186, 255, 0.6)' : 'rgba(29, 86, 141, 0.55)'};
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(30, 68, 108, 0.35)' : 'rgba(201, 225, 247, 0.5)'};
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 0 0 1px rgba(133, 198, 255, 0.18) inset'
      : '0 0 0 1px rgba(33, 98, 161, 0.16) inset'};

  &:hover {
    color: ${({ theme }) => (theme.mode === 'dark' ? '#ffffff' : '#0a2a47')};
    border-color: ${({ theme }) => (theme.mode === 'dark' ? '#9ad1ff' : '#1d5d98')};
    background: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(36, 86, 136, 0.5)' : 'rgba(180, 214, 244, 0.75)'};
    transform: translateY(-2px);
  }
`;
