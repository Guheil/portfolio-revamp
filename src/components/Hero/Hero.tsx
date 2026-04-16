'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { HeroProps } from './interface';
import Image from 'next/image';
import {
  HeroSection,
  HeroCenter,
  HeroPortrait,
  HeroBigName,
  HeroNameTilt,
  HeroRole,
  HeroMeta,
  HeroBottom,
  ScrollHint,
  ScrollBar,
  ScrollLabel,
  HeroBio,
  HeroCTA,
  CTABtn,
  CTABtnOutline,
} from './elements';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC<HeroProps> = ({ animate, onIntroComplete }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const tiltRef = useRef<HTMLSpanElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const onIntroCompleteRef = useRef(onIntroComplete);

  useEffect(() => {
    onIntroCompleteRef.current = onIntroComplete;
  }, [onIntroComplete]);

  useEffect(() => {
    const nameEl = nameRef.current;
    const tiltEl = tiltRef.current;
    if (!nameEl || !tiltEl) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover)').matches;
    if (prefersReducedMotion || !canHover) return;

    const maxRotateX = 10;
    const maxRotateY = 14;
    const maxTranslateX = 12;
    const maxTranslateY = 8;

    const rotateXTo = gsap.quickTo(tiltEl, 'rotationX', { duration: 0.35, ease: 'power3.out' });
    const rotateYTo = gsap.quickTo(tiltEl, 'rotationY', { duration: 0.35, ease: 'power3.out' });
    const xTo = gsap.quickTo(tiltEl, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(tiltEl, 'y', { duration: 0.35, ease: 'power3.out' });
    const zTo = gsap.quickTo(tiltEl, 'z', { duration: 0.35, ease: 'power3.out' });

    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

    const reset = () => {
      rotateXTo(0);
      rotateYTo(0);
      xTo(0);
      yTo(0);
      zTo(0);
      gsap.to(tiltEl, { scale: 1, duration: 0.35, ease: 'power3.out' });
    };

    const onPointerEnter = () => {
      zTo(16);
      gsap.to(tiltEl, { scale: 1.02, duration: 0.25, ease: 'power2.out' });
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = nameEl.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;

      const normalizedX = clamp((relativeX - 0.5) * 2, -1, 1);
      const normalizedY = clamp((relativeY - 0.5) * 2, -1, 1);

      rotateYTo(normalizedX * maxRotateY);
      rotateXTo(-normalizedY * maxRotateX);
      xTo(normalizedX * maxTranslateX);
      yTo(normalizedY * maxTranslateY);
    };

    const onPointerLeave = () => {
      reset();
    };

    nameEl.addEventListener('pointerenter', onPointerEnter);
    nameEl.addEventListener('pointermove', onPointerMove);
    nameEl.addEventListener('pointerleave', onPointerLeave);

    return () => {
      nameEl.removeEventListener('pointerenter', onPointerEnter);
      nameEl.removeEventListener('pointermove', onPointerMove);
      nameEl.removeEventListener('pointerleave', onPointerLeave);
      gsap.killTweensOf(tiltEl);
    };
  }, []);

  /* ─── Phase 1: GAEL is the loader — runs once on mount ─── */
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    /* GAEL: blur-to-clear — the name itself is the loading state */
    tl.fromTo(
      nameRef.current,
      { opacity: 0, filter: 'blur(30px)', scale: 1.06 },
      { opacity: 1, filter: 'blur(0px)', scale: 1, duration: 1.4, ease: 'power2.out' }
    );

    /* brief hold — let the name breathe */
    tl.to({}, { duration: 0.25 });

    /* portrait materializes behind */
    tl.fromTo(
      portraitRef.current,
      { opacity: 0, scale: 1.12, filter: 'blur(18px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out' },
      '-=0.15'
    );

    /* role text */
    tl.fromTo(
      roleRef.current,
      { opacity: 0, y: 24, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, ease: 'power3.out' },
      '-=0.7'
    );

    /* location meta */
    tl.fromTo(
      metaRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    );

    /* bottom bar */
    tl.fromTo(
      bottomRef.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' },
      '-=0.2'
    );

    /* signal page that intro is done — scroll unlocks */
    tl.call(() => onIntroCompleteRef.current?.());

    return () => { tl.kill(); };
  }, []);

  /* ─── Phase 2: Scroll-driven exit (set up after intro completes) ─── */
  useEffect(() => {
    if (!animate) return;

    const ctx = gsap.context(() => {
      const scrub = 0.9;

      gsap.fromTo(
        bottomRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: 30,
          immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '28% top', scrub },
        }
      );

      gsap.fromTo(
        metaRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -24,
          immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: '5% top', end: '32% top', scrub },
        }
      );

      gsap.fromTo(
        roleRef.current,
        { opacity: 1, y: 0, filter: 'blur(0px)' },
        {
          opacity: 0,
          y: -36,
          filter: 'blur(6px)',
          immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: '8% top', end: '40% top', scrub },
        }
      );

      gsap.fromTo(
        nameRef.current,
        { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        {
          opacity: 0,
          y: -50,
          scale: 0.96,
          filter: 'blur(10px)',
          immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: '12% top', end: '52% top', scrub },
        }
      );

      gsap.fromTo(
        portraitRef.current,
        { opacity: 1, scale: 1, filter: 'blur(0px)' },
        {
          opacity: 0,
          scale: 0.92,
          filter: 'blur(18px)',
          immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: '12% top', end: '58% top', scrub },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [animate]);

  return (
    <HeroSection ref={sectionRef}>
      <HeroCenter>
        <HeroPortrait ref={portraitRef} style={{ opacity: 0 }}>
          <Image
            src="/hero-image.png"
            alt="Xavier Gael San Juan"
            width={500}
            height={620}
            priority
            draggable={false}
          />
        </HeroPortrait>
        <HeroBigName ref={nameRef} style={{ opacity: 0 }}>
          <HeroNameTilt ref={tiltRef}>GAEL</HeroNameTilt>
        </HeroBigName>
        <HeroRole ref={roleRef} style={{ opacity: 0 }}>Front-End Developer</HeroRole>
        <HeroMeta ref={metaRef} style={{ opacity: 0 }}>
          Bacnotan, La Union &bull; Philippines
        </HeroMeta>
      </HeroCenter>

      <HeroBottom ref={bottomRef} style={{ opacity: 0 }}>
        <ScrollHint>
          <ScrollBar />
          <ScrollLabel>Scroll<br />to explore</ScrollLabel>
        </ScrollHint>

        <HeroBio>
          Passionate software developer who loves coding and creating with
          React, Next.js, Python, and Firebase. Driven by curiosity and a
          desire to solve problems.
        </HeroBio>

        <HeroCTA>
          <CTABtnOutline href="/resume.pdf" download>
            <DownloadRoundedIcon sx={{ fontSize: 16 }} />
            Resume
          </CTABtnOutline>
          <CTABtnOutline
            href="https://github.com/guheil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ fontSize: 16 }} />
            GitHub
          </CTABtnOutline>
          <CTABtn
            href="https://www.linkedin.com/in/xavier-gael-san-juan-823b43286/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ fontSize: 16 }} />
            LinkedIn
          </CTABtn>
        </HeroCTA>
      </HeroBottom>
    </HeroSection>
  );
};

export default Hero;
