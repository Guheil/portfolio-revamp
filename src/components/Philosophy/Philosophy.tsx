'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhilosophyQuote } from './interface';
import {
  Section,
  Stage,
  QuoteStack,
  QuoteSlide,
  QuoteText,
  QuoteSpeaker,
  RevealLayer,
  RevealHalfLeft,
  RevealHalfRight,
  RevealSeam,
} from './elements';

gsap.registerPlugin(ScrollTrigger);

const quotes: PhilosophyQuote[] = [
  {
    topic: 'Work',
    text: 'The only way to do great work is to love what you do.',
    speaker: 'Steve Jobs',
  },
  {
    topic: 'Life',
    text: "Your time is limited, so do not waste it living someone else's life.",
    speaker: 'Steve Jobs',
  },
  {
    topic: 'Philosophy',
    text: 'Programs must be written for people to read, and only incidentally for machines to execute.',
    speaker: 'Harold Abelson and Gerald Jay Sussman',
  },
];

const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const leftRevealRef = useRef<HTMLDivElement>(null);
  const rightRevealRef = useRef<HTMLDivElement>(null);
  const seamRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const leftReveal = leftRevealRef.current;
    const rightReveal = rightRevealRef.current;
    const seam = seamRef.current;
    const stack = stackRef.current;
    if (!section || !stage || !leftReveal || !rightReveal || !seam || !stack) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const quoteEls = gsap.utils.toArray<HTMLElement>('[data-philosophy-quote]');
      if (quoteEls.length < 2) return;

      gsap.fromTo(
        [leftReveal, rightReveal],
        {
          xPercent: 0,
          autoAlpha: 1,
          filter: 'blur(0px)',
        },
        {
          xPercent: (index) => (index === 0 ? -102 : 102),
          rotationY: (index) => (index === 0 ? -18 : 18),
          autoAlpha: 0,
          filter: 'blur(4px)',
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1.1,
          },
        }
      );

      gsap.fromTo(
        seam,
        {
          autoAlpha: 0.58,
          filter: 'blur(0px)',
        },
        {
          autoAlpha: 0,
          filter: 'blur(6px)',
          duration: 0.95,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1.1,
          },
        }
      );

      gsap.fromTo(
        stack,
        {
          autoAlpha: 0.2,
          y: 16,
          filter: 'blur(16px)',
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'top 42%',
            scrub: 1.1,
          },
        }
      );

      gsap.set(quoteEls, {
        autoAlpha: 0,
        y: 8,
        scale: 0.992,
        filter: 'blur(12px)',
      });
      gsap.set(quoteEls[0], {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.65,
        },
      });

      tl.to({}, { duration: 0.9 });

      quoteEls.forEach((quoteEl, index) => {
        if (index >= quoteEls.length - 1) return;

        const next = quoteEls[index + 1];
        const step = index * 1.75 + 0.9;

        tl.to(
          quoteEl,
          {
            autoAlpha: 0,
            y: -8,
            scale: 1.008,
            filter: 'blur(12px)',
            duration: 1.25,
            ease: 'none',
          },
          step
        );

        tl.fromTo(
          next,
          {
            autoAlpha: 0,
            y: 8,
            scale: 0.992,
            filter: 'blur(12px)',
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.25,
            ease: 'none',
          },
          step
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="philosophy" ref={sectionRef}>
      <Stage ref={stageRef}>
        <QuoteStack ref={stackRef}>
          {quotes.map((quote) => (
            <QuoteSlide key={quote.topic} data-philosophy-quote>
              <QuoteText>&ldquo;{quote.text}&rdquo;</QuoteText>
              <QuoteSpeaker>{quote.speaker}</QuoteSpeaker>
            </QuoteSlide>
          ))}
        </QuoteStack>
        <RevealLayer aria-hidden="true">
          <RevealHalfLeft ref={leftRevealRef} />
          <RevealHalfRight ref={rightRevealRef} />
          <RevealSeam ref={seamRef} />
        </RevealLayer>
      </Stage>
    </Section>
  );
};

export default Philosophy;
