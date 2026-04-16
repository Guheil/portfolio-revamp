'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { IntroAnimationProps } from './interface';
import { Overlay, LogoText } from './elements';

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    /* ── smooth reveal: blur dissolves, scale settles, letter-spacing tightens ── */
    tl.to(logoRef.current, {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      letterSpacing: '-0.02em',
      duration: 1.4,
      ease: 'power2.out',
    });

    /* brief hold */
    tl.to({}, { duration: 0.35 });

    /* ── exit: text drifts up + softly blurs away, overlay fades ── */
    tl.to(logoRef.current, {
      y: -20,
      filter: 'blur(10px)',
      opacity: 0,
      duration: 0.5,
      ease: 'power3.in',
    });

    tl.to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete,
      },
      '-=0.2'
    );

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <Overlay ref={overlayRef}>
      <LogoText ref={logoRef}>GAEL</LogoText>
    </Overlay>
  );
};

export default IntroAnimation;
