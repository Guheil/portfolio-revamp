'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CertItem } from './interface';
import {
  Section,
  Container,
  IntroBlock,
  ContentBlock,
  SectionLabel,
  SectionTitle,
  CertCard,
  CertInfo,
  CertName,
  CertIssuer,
  CertSummary,
  CertLink,
  CertDate,
  CertSkills,
  CertSkillTag,
} from './elements';

gsap.registerPlugin(ScrollTrigger);

const certifications: CertItem[] = [
  {
    name: 'DICT ICT Proficiency Diagnostic Exam | Passer',
    issuer: 'Department of Information and Communications Technology (DICT)',
    summary:
      'Passed the foundational evaluation in programming logic, data structures, OOP, networking, and database systems, qualifying toward the DICT ICT Proficiency Certification and Civil Service EDP Specialist Eligibility.',
    date: 'Passed Mar 2025',
    skills: ['Programming Logic', 'Data Structures', 'OOP', 'Networking', 'Databases'],
  },
  {
    name: 'SILLAG Provincial Startup Summit & Hackathon | Regional Qualifier',
    issuer: 'SILLAG Region 1 • La Union Leg',
    summary:
      'Co-developed BantAI, recognized as one of the top two student innovations at the La Union leg of SILLAG Region 1 2024, and advanced to represent the province in the regional finals.',
    date: 'Qualified May 2024',
    skills: ['Hackathon', 'Product Ideation', 'Startup Pitching', 'Team Collaboration'],
  },
  {
    name: 'Natural Language Processing Seminar | Attendee',
    issuer: 'National University & Bicol University at Lorma Colleges',
    summary:
      'Completed a two-day intensive NLP seminar covering language modeling, text preprocessing, and applied natural language processing tools.',
    date: 'Attended Oct 2023',
    skills: ['Language Modeling', 'Text Preprocessing', 'NLP Tools'],
  },
];

const Certifications: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = ref.current!.querySelectorAll('[data-cert-heading]');
      const cards = listRef.current!.querySelectorAll('[data-cert]');

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
            trigger: ref.current,
            start: 'top 90%',
            end: 'top 68%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        cards,
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
            end: 'top 56%',
            scrub: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="certifications" ref={ref}>
      <Container>
        <IntroBlock>
          <SectionLabel data-cert-heading>Credentials</SectionLabel>
          <SectionTitle data-cert-heading>Certifications & Activities</SectionTitle>
        </IntroBlock>

        <ContentBlock ref={listRef}>
          {certifications.map((c, i) => (
            <CertCard key={i} data-cert>
              <CertInfo>
                <CertName>{c.name}</CertName>
                <CertIssuer>{c.issuer}</CertIssuer>
                {c.summary && <CertSummary>{c.summary}</CertSummary>}
                {c.url && (
                  <CertLink href={c.url} target="_blank" rel="noreferrer">
                    Program details
                  </CertLink>
                )}
                {c.skills.length > 0 && (
                  <CertSkills>
                    {c.skills.map((s) => (
                      <CertSkillTag key={s}>{s}</CertSkillTag>
                    ))}
                  </CertSkills>
                )}
              </CertInfo>
              <CertDate>{c.date}</CertDate>
            </CertCard>
          ))}
        </ContentBlock>
      </Container>
    </Section>
  );
};

export default Certifications;
