'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  CTASection,
  CTATitle,
  CTAWord,
  CTALine,
  CTABody,
  CTAButtons,
  CTAPrimary,
  CTASecondary,
} from './elements';

gsap.registerPlugin(ScrollTrigger);

const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = sectionRef.current!.querySelectorAll('[data-cta-reveal]');
      const line = sectionRef.current!.querySelector('[data-cta-line]');

      /* ── staggered content reveal ── */
      gsap.fromTo(
        reveals,
        { opacity: 0, y: 44, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      /* ── center line draws in ── */
      if (line) {
        gsap.to(line, {
          scaleX: 1,
          duration: 0.8,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 68%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      /* ── subtle parallax on the title ── */
      const titleEl = sectionRef.current!.querySelector('[data-cta-title]');
      if (titleEl) {
        gsap.to(titleEl, {
          y: -24,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <CTASection id="contact" ref={sectionRef}>
      <CTATitle data-cta-title>
        <CTAWord data-cta-reveal>Let&apos;s</CTAWord>
        <CTAWord data-cta-reveal>Connect</CTAWord>
      </CTATitle>
      <CTALine data-cta-line />
      <CTABody data-cta-reveal>
        Open to new opportunities and collaborations.
        Let&apos;s build something extraordinary together.
      </CTABody>
      <CTAButtons data-cta-reveal>
        <CTAPrimary
          href="https://www.linkedin.com/in/xavier-gael-san-juan-823b43286/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ fontSize: 18 }} />
          LinkedIn
        </CTAPrimary>
        <CTASecondary
          href="https://github.com/guheil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ fontSize: 18 }} />
          GitHub
        </CTASecondary>
      </CTAButtons>
    </CTASection>
  );
};

export default CTA;
