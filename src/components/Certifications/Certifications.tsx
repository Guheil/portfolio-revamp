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
  CertLink,
  CertDate,
  CertSkills,
  CertSkillTag,
} from './elements';

gsap.registerPlugin(ScrollTrigger);

const certifications: CertItem[] = [
  {
    name: 'DICT Diagnostics Exam Passer',
    issuer: 'Department of Information and Communications Technology - Philippines',
    date: 'Issued Jun 2025',
    skills: ['Object-Oriented Programming (OOP)', 'Problem Solving'],
  },
  {
    name: 'IBM Front-End Developer Professional Certificate',
    issuer: 'IBM (Coursera)',
    date: 'In Progress - Target 2026',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    url: 'https://www.coursera.org/professional-certificates/ibm-frontend-developer',
  },
  {
    name: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta (Coursera)',
    date: 'In Progress - Target 2026',
    skills: ['Responsive Web Design', 'JavaScript', 'React', 'Version Control'],
    url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
  },
  {
    name: 'Microsoft Front-End Developer Professional Certificate',
    issuer: 'Microsoft (Coursera)',
    date: 'In Progress - Target 2026',
    skills: ['Frontend Architecture', 'JavaScript', 'Accessibility', 'GitHub'],
    url: 'https://www.coursera.org/professional-certificates/microsoft-front-end-developer',
  },
  {
    name: 'Google UX Design Professional Certificate',
    issuer: 'Google (Coursera)',
    date: 'In Progress - Target 2026',
    skills: ['UX Research', 'Wireframing', 'Figma', 'Prototyping'],
    url: 'https://www.coursera.org/professional-certificates/google-ux-design',
  },
  {
    name: 'AWS Certified Cloud Practitioner (CLF-C02)',
    issuer: 'Amazon Web Services',
    date: 'In Progress - Target 2026',
    skills: ['Cloud Fundamentals', 'AWS Services', 'Security Basics'],
    url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft Learn',
    date: 'In Progress - Target 2026',
    skills: ['Cloud Concepts', 'Azure Services', 'Governance and Compliance'],
    url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/',
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
          <SectionTitle data-cert-heading>Certifications</SectionTitle>
        </IntroBlock>

        <ContentBlock ref={listRef}>
          {certifications.map((c, i) => (
            <CertCard key={i} data-cert>
              <CertInfo>
                <CertName>{c.name}</CertName>
                <CertIssuer>{c.issuer}</CertIssuer>
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
