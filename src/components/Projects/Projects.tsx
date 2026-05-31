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
    name: 'Kmaris Immigration App',
    description:
      'Designed and deployed a full-stack immigration platform that digitized the end-to-end U.S. visa workflow for Kmaris, enabling real-time application tracking across 150+ client cases with a fully paperless system.',
    period: 'BYND Digital • Jul 2025 - Present',
    skills: ['Next.js', 'MongoDB', 'Workflow Automation', 'Application Tracking'],
  },
  {
    name: 'The Oracle PTRC Appointment App',
    description:
      'Architected a real-time scheduling platform for a physical therapy clinic, replacing Google Sheets with a live booking calendar that manages 30+ daily appointments and eliminates double-bookings.',
    period: 'BYND Digital • Jul 2025 - Present',
    skills: ['Next.js', 'SQL', 'Booking Dashboard', 'Scheduling System'],
  },
  {
    name: 'APP Construction Supplies Inventory System',
    description:
      'Delivered a real-time inventory management system for a local construction supplies business, tracking 300+ SKUs with automated low-stock alerts and analytics dashboards while replacing manual inventory workflows.',
    period: 'BYND Digital • Jul 2025 - Present',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Inventory Analytics'],
  },
  {
    name: 'Produkto Elyukal',
    description:
      'Built an augmented reality mobile application that showcases local products in La Union, featuring a Mapbox-powered shop navigator that helps tourists and residents explore regional goods directly from their phones.',
    period: 'Academic Project • 2025',
    skills: ['React Native', 'Supabase', 'FastAPI', 'ViroReact', 'Mapbox'],
  },
  {
    name: 'DOST HR Website',
    description:
      'Created a government job listing portal that lets applicants browse openings, upload documents, track application status, and receive automated email notifications for each stage of the process.',
    period: 'DOST Region 1 • Jun 2024 - Aug 2024',
    skills: ['HTML5', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
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
