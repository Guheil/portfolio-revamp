'use client';

import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Philosophy from '@/components/Philosophy';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIntroComplete(true);
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const lenis = lenisRef.current;

    if (!introComplete) {
      lenis?.stop();
      root.style.overflow = 'hidden';
      body.style.overflow = 'hidden';

      // Fail-safe: never leave the portfolio locked if an intro animation fails.
      const unlockTimer = window.setTimeout(() => {
        setIntroComplete(true);
      }, 5000);

      return () => {
        window.clearTimeout(unlockTimer);
        root.style.overflow = '';
        body.style.overflow = '';
      };
    }

    root.style.overflow = '';
    body.style.overflow = '';
    lenis?.start();

    const refreshId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(refreshId);
      root.style.overflow = '';
      body.style.overflow = '';
    };
  }, [introComplete]);

  return (
    <>
      <Navigation visible={introComplete} />
      <main>
        <Hero
          animate={introComplete}
          onIntroComplete={() => setIntroComplete(true)}
        />
        <TechStack />
        <Projects />
        <Certifications />
        <Philosophy />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
