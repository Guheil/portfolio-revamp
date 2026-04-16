'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { IconType } from 'react-icons';
import {
  SiClaude,
  SiClickup,
  SiDjango,
  SiElementor,
  SiFastapi,
  SiFirebase,
  SiFigma,
  SiGithubcopilot,
  SiMui,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOdoo,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTrello,
  SiWordpress,
} from 'react-icons/si';
import { TbApi, TbHexagon, TbStack3 } from 'react-icons/tb';
import {
  Section,
  Container,
  IntroBlock,
  ContentBlock,
  SectionLabel,
  SectionTitle,
  CategoryLabel,
  ChipGrid,
  Chip,
  ChipContent,
  ChipIcon,
  Divider,
} from './elements';

gsap.registerPlugin(ScrollTrigger);

type SkillItem = {
  label: string;
  icon?: IconType;
};

type SkillCategory = {
  label: string;
  items: SkillItem[];
};

const skills: SkillCategory[] = [
  {
    label: 'Frontend',
    items: [
      { label: 'React', icon: SiReact },
      { label: 'Next.js', icon: SiNextdotjs },
      { label: 'WordPress', icon: SiWordpress },
      { label: 'Elementor', icon: SiElementor },
      { label: 'Figma', icon: SiFigma },
      { label: 'Tailwind CSS', icon: SiTailwindcss },
      { label: 'MUI', icon: SiMui },
      { label: 'shadcn/ui', icon: SiShadcnui },
    ],
  },
  {
    label: 'Backend & APIs',
    items: [
      { label: 'Python', icon: SiPython },
      { label: 'Django', icon: SiDjango },
      { label: 'Odoo', icon: SiOdoo },
      { label: 'FastAPI', icon: SiFastapi },
      { label: 'PHP', icon: SiPhp },
      { label: 'REST API', icon: TbApi },
      { label: 'PERN Stack', icon: TbStack3 },
      { label: 'MERN Stack', icon: TbStack3 },
    ],
  },
  {
    label: 'Databases & BaaS',
    items: [
      { label: 'MySQL', icon: SiMysql },
      { label: 'MongoDB', icon: SiMongodb },
      { label: 'PostgreSQL', icon: SiPostgresql },
      { label: 'Supabase', icon: SiSupabase },
      { label: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    label: 'Architecture & Testing Tools',
    items: [
      { label: 'System Architecture', icon: TbHexagon },
      { label: 'Postman', icon: SiPostman },
    ],
  },
  {
    label: 'Workflow & Collaboration',
    items: [
      { label: 'ClickUp', icon: SiClickup },
      { label: 'Trello', icon: SiTrello },
    ],
  },
  {
    label: 'AI-Driven Software',
    items: [
      { label: 'Claude', icon: SiClaude },
      { label: 'Codex', icon: SiOpenai },
      { label: 'GitHub Copilot', icon: SiGithubcopilot },
    ],
  },
];

const TechStack: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = ref.current!.querySelectorAll('[data-skills-heading]');
      const chips = ref.current!.querySelectorAll('[data-chip]');

      gsap.fromTo(
        heading,
        {
          opacity: 0.3,
          y: 22,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 90%',
            end: 'top 66%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        chips,
        {
          opacity: 0.2,
          y: 24,
          scale: 0.98,
          filter: 'blur(14px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.9,
          stagger: 0.03,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 88%',
            end: 'top 44%',
            scrub: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="skills" ref={ref}>
      <Container>
        <IntroBlock>
          <SectionLabel data-skills-heading>What I work with</SectionLabel>
          <SectionTitle data-skills-heading>Skills</SectionTitle>
        </IntroBlock>

        <ContentBlock>
          {skills.map((category, i) => (
            <React.Fragment key={category.label}>
              <CategoryLabel>{category.label}</CategoryLabel>
              <ChipGrid>
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Chip key={`${category.label}-${item.label}`} data-chip>
                      <ChipContent>
                        {Icon ? (
                          <ChipIcon aria-hidden="true">
                            <Icon />
                          </ChipIcon>
                        ) : null}
                        <span>{item.label}</span>
                      </ChipContent>
                    </Chip>
                  );
                })}
              </ChipGrid>
              {i < skills.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ContentBlock>
      </Container>
    </Section>
  );
};

export default TechStack;
