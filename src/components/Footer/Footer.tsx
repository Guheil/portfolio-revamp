'use client';

import React from 'react';
import { FooterWrap, FooterInner, Copy, FooterLinks, FooterLink } from './elements';

const Footer: React.FC = () => (
  <FooterWrap>
    <FooterInner>
      <Copy>&copy; {new Date().getFullYear()} Xavier Gael San Juan</Copy>
      <FooterLinks>
        <FooterLink
          href="https://www.linkedin.com/in/xavier-gael-san-juan-823b43286/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </FooterLink>
        <FooterLink href="https://github.com/guheil" target="_blank" rel="noopener noreferrer">
          GitHub
        </FooterLink>
      </FooterLinks>
    </FooterInner>
  </FooterWrap>
);

export default Footer;
