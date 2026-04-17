import styled from 'styled-components';

export const CTASection = styled.section`
  position: relative;
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 24px;
  text-align: center;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    min-height: 56vh;
    padding: 80px 20px;
  }

  @media (max-width: 380px) {
    padding: 64px 16px;
  }
`;

export const CTATitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  width: 100%;
`;

export const CTAWord = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 800;
  font-size: clamp(2.6rem, 9vw, 7rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  will-change: transform, opacity, filter;

  @media (max-width: 600px) {
    font-size: clamp(1.6rem, 11vw, 4rem);
  }

  @media (max-width: 380px) {
    font-size: clamp(1.4rem, 10vw, 3rem);
  }
`;

export const CTALine = styled.div`
  width: 48px;
  height: 2px;
  background: ${({ theme }) => theme.text};
  margin: 36px 0 32px;
  transform-origin: center;
  transform: scaleX(0);
  will-change: transform;
`;

export const CTABody = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.88rem, 1.4vw, 1rem);
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.8;
  max-width: 400px;
  margin-bottom: 40px;
  will-change: transform, opacity, filter;
`;

export const CTAButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  will-change: transform, opacity, filter;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }
`;

export const CTAPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 52px;
  padding: 0 32px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.bg};
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1.5px solid ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.text};
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CTASecondary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 52px;
  padding: 0 32px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1.5px solid ${({ theme }) => theme.border};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.bg};
    border-color: ${({ theme }) => theme.text};
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
