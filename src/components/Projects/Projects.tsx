'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projects } from '@/data/projects';
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
  ProjectCaseStudyLink,
} from './elements';

gsap.registerPlugin(ScrollTrigger);

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
            <React.Fragment key={p.slug}>
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
                  <ProjectLinks data-reveal>
                    <ProjectCaseStudyLink
                      href={`/projects/${p.slug}`}
                      data-analytics-event="case_study_open"
                      data-analytics-label={p.shortName}
                      data-analytics-type="case-study"
                      data-analytics-destination={`/projects/${p.slug}`}
                    >
                      View Case Study
                    </ProjectCaseStudyLink>
                      {p.demo && (
                        <ProjectLink
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-analytics-event="project_external_click"
                          data-analytics-label={p.shortName}
                          data-analytics-type="live-demo"
                          data-analytics-destination={p.demo}
                        >
                          <LaunchIcon /> Live Demo
                        </ProjectLink>
                      )}
                      {p.repo && (
                        <ProjectRepoLink
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-analytics-event="project_external_click"
                          data-analytics-label={p.shortName}
                          data-analytics-type="repository"
                          data-analytics-destination={p.repo}
                        >
                          <GitHubIcon /> Repository
                        </ProjectRepoLink>
                      )}
                    </ProjectLinks>
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
