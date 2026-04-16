'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ProjectItem } from './interface';
import {
  Section,
  Container,
  IntroBlock,
  ContentBlock,
  SectionLabel,
  SectionTitle,
  Divider,
  ProjectRow,
  ProjectIndex,
  ProjectContent,
  ProjectMeta,
  ProjectName,
  ProjectPeriod,
  ProjectDesc,
  SkillTags,
  SkillTag,
  ProjectLinks,
  ProjectLink,
  ProjectRepoLink,
} from './elements';

gsap.registerPlugin(ScrollTrigger);

const projects: ProjectItem[] = [
  {
    name: 'Produkto Elyukal',
    description:
      'A mobile application supporting local farmers and producers, helping them showcase and sell products directly to consumers while bridging the gap between farm and table.',
    period: 'Jan 2025 - May 2025',
    skills: ['FastAPI', 'UI/UX', 'React Native', 'Firebase', 'Python'],
    repo: 'https://github.com/guheil/produkto-elyukal',
  },
  {
    name: 'BYND Digital Marketing',
    description:
      'Building responsive, SEO-optimized websites at BYND Digital Marketing Services using WordPress, React.js, and modern web technologies for various clients.',
    period: 'Sep 2025 - Present',
    skills: ['WordPress', 'React.js', 'JavaScript', 'CSS', 'SEO'],
  },
  {
    name: 'LunaStay Booking Dashboard',
    description:
      'A reservation dashboard for small lodging teams with room status tracking, booking analytics, and quick check-in/check-out actions.',
    period: 'Nov 2025 - Feb 2026',
    skills: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Chart.js'],
    demo: 'https://lunastay-booking-demo.vercel.app',
    repo: 'https://github.com/guheil/lunastay-booking-dashboard',
  },
  {
    name: 'DevTrack Kanban Suite',
    description:
      'A collaborative issue board built for lightweight sprint planning, drag-and-drop task flow, and release progress tracking.',
    period: 'Aug 2025 - Oct 2025',
    skills: ['React', 'Firebase', 'DnD Kit', 'Tailwind CSS'],
    repo: 'https://github.com/guheil/devtrack-kanban-suite',
  },
  {
    name: 'VistaCraft Portfolio Builder',
    description:
      'A visual landing page builder for creators with reusable section blocks, theme presets, and instant mobile preview.',
    period: 'Mar 2026 - Present',
    skills: ['Next.js', 'Framer Motion', 'Styled Components', 'Vercel'],
    demo: 'https://vistacraft-portfolio-demo.vercel.app',
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !listRef.current) return;

      const heading = sectionRef.current.querySelectorAll('[data-project-heading]');
      const rows = listRef.current.querySelectorAll('[data-row]');
      const lines = listRef.current.querySelectorAll('[data-line]');

      gsap.fromTo(
        heading,
        {
          opacity: 0.3,
          y: 20,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            end: 'top 68%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        lines,
        {
          opacity: 0.3,
          scaleX: 0.14,
        },
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.9,
          stagger: 0.04,
          ease: 'none',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 90%',
            end: 'top 58%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        rows,
        {
          opacity: 0.2,
          x: -34,
          y: 22,
          filter: 'blur(16px)',
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.95,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 90%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="projects" ref={sectionRef}>
      <Container>
        <IntroBlock>
          <SectionLabel data-project-heading>What I have built</SectionLabel>
          <SectionTitle data-project-heading>Selected Works</SectionTitle>
        </IntroBlock>

        <ContentBlock ref={listRef}>
          {projects.map((p, i) => (
            <React.Fragment key={i}>
              <Divider data-line />
              <ProjectRow data-row>
                <ProjectIndex data-reveal>
                  {String(i + 1).padStart(2, '0')}
                </ProjectIndex>
                <ProjectContent>
                  <ProjectMeta data-reveal>
                    <ProjectName>{p.name}</ProjectName>
                    <ProjectPeriod>{p.period}</ProjectPeriod>
                  </ProjectMeta>
                  <ProjectDesc data-reveal>{p.description}</ProjectDesc>
                  <SkillTags data-reveal>
                    {p.skills.map((s) => (
                      <SkillTag key={s}>{s}</SkillTag>
                    ))}
                  </SkillTags>
                  {(p.demo || p.repo) && (
                    <ProjectLinks data-reveal>
                      {p.demo && (
                        <ProjectLink
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LaunchIcon /> Live Demo
                        </ProjectLink>
                      )}
                      {p.repo && (
                        <ProjectRepoLink
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon /> Repository
                        </ProjectRepoLink>
                      )}
                    </ProjectLinks>
                  )}
                </ProjectContent>
              </ProjectRow>
            </React.Fragment>
          ))}
          <Divider data-line />
        </ContentBlock>
      </Container>
    </Section>
  );
};

export default Projects;
