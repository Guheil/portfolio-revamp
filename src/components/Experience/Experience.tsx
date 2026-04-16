'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExperienceItem } from './interface';
import {
  Section,
  Container,
  IntroBlock,
  SectionLabel,
  SectionTitle,
  SectionDesc,
  Deck,
  Card,
  CardIndex,
  CardTop,
  RoleBlock,
  Role,
  Company,
  Period,
  Location,
  Summary,
  Impact,
  Stack,
  StackTag,
} from './elements';

gsap.registerPlugin(ScrollTrigger);

const experience: ExperienceItem[] = [
  {
    company: 'BYND Digital Marketing Services',
    role: 'Frontend Developer',
    period: 'Sep 2025 - Present',
    location: 'La Union, Philippines',
    summary:
      'Built conversion-focused websites and landing systems using WordPress, Elementor, React, and Next.js while balancing speed, SEO, and brand consistency for client campaigns.',
    impact:
      'Reduced delivery time by creating reusable UI patterns and a cleaner content workflow for repeat client launches.',
    stack: ['WordPress', 'Elementor', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    company: 'Produkto Elyukal',
    role: 'Full-Stack Developer',
    period: 'Jan 2025 - May 2025',
    location: 'Capstone Project',
    summary:
      'Engineered platform features for local producers, including product management and user-facing flows, with a strong focus on accessible UI and stable API behavior.',
    impact:
      'Helped turn a concept into a working product experience that connected local sellers with real users.',
    stack: ['FastAPI', 'Python', 'Firebase', 'UI/UX', 'REST API'],
  },
  {
    company: 'Freelance & Personal Builds',
    role: 'Backend and Systems Engineer',
    period: '2024 - Present',
    location: 'Remote',
    summary:
      'Designed API-first services and operational back-office flows with Django, Odoo, Supabase, and PostgreSQL, emphasizing modular architecture and maintainable data models.',
    impact:
      'Improved reliability and long-term scalability by applying a structured architecture approach from day one.',
    stack: ['Django', 'Odoo', 'PostgreSQL', 'Supabase', 'Postman', 'System Architecture'],
  },
];

const Experience: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-exp-heading]',
        { opacity: 0.25, y: 22, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 84%',
            toggleActions: 'play none none none',
          },
        }
      );

      const panels = gsap.utils.toArray<HTMLElement>('[data-exp-panel]');
      panels.forEach((panel, index) => {
        const drift = index % 2 === 0 ? -26 : 26;

        gsap.fromTo(
          panel,
          {
            opacity: 0.22,
            x: drift,
            y: 70,
            rotate: index % 2 === 0 ? -1.4 : 1.4,
            filter: 'blur(18px)',
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            filter: 'blur(0px)',
            ease: 'none',
            scrollTrigger: {
              trigger: panel,
              start: 'top 90%',
              end: 'top 54%',
              scrub: true,
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="experience" ref={ref}>
      <Container>
        <IntroBlock data-exp-heading>
          <SectionLabel>What I have built</SectionLabel>
          <SectionTitle>Experience</SectionTitle>
          <SectionDesc>
            Not a timeline. This is a snapshot of real execution from client
            delivery, product building, and systems work.
          </SectionDesc>
        </IntroBlock>

        <Deck>
          {experience.map((item, index) => (
            <Card
              key={`${item.company}-${item.role}`}
              $tilt={index % 2 === 0 ? -0.6 : 0.6}
              data-exp-panel
            >
              <CardIndex>{String(index + 1).padStart(2, '0')}</CardIndex>
              <CardTop>
                <RoleBlock>
                  <Role>{item.role}</Role>
                  <Company>{item.company}</Company>
                </RoleBlock>
                <Period>{item.period}</Period>
              </CardTop>
              <Location>{item.location}</Location>
              <Summary>{item.summary}</Summary>
              <Impact>{item.impact}</Impact>
              <Stack>
                {item.stack.map((tech) => (
                  <StackTag key={`${item.company}-${tech}`}>{tech}</StackTag>
                ))}
              </Stack>
            </Card>
          ))}
        </Deck>
      </Container>
    </Section>
  );
};

export default Experience;
