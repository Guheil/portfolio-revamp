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
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (!introComplete) {
      lenis.stop();
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      return;
    }

    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    lenis.start();

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
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
        <Footer />
      </main>
    </>
  );
}
