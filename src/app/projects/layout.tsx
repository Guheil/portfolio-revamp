import type { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectMotion from '@/components/ProjectMotion';

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation visible />
      <ProjectMotion />
      {children}
      <Footer />
    </>
  );
}
