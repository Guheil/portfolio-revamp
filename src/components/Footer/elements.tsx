import styled from 'styled-components';

export const FooterWrap = styled.footer`
  padding: 40px 24px;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

export const FooterInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

export const Copy = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textMuted};
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const FooterLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textMuted};
  transition: color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;
