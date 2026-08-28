import { ImageResponse } from 'next/og';
import type { PortfolioProject } from '@/data/projects';
import { siteConfig } from '@/lib/seo';

export const projectSocialImageSize = {
  width: 1200,
  height: 630,
};

export function createProjectSocialImage(project: PortfolioProject) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#080b16',
          color: '#f5f5f5',
          padding: '72px 78px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 23,
            letterSpacing: '-0.02em',
          }}
        >
          <span>GAEL.</span>
          <span style={{ color: '#9aa3b7' }}>PROJECT CASE STUDY</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: project.name.length > 34 ? 58 : 70,
              lineHeight: 1.03,
              fontWeight: 700,
              letterSpacing: '-0.05em',
              maxWidth: 1020,
            }}
          >
            {project.name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#c4cad6',
              lineHeight: 1.35,
              maxWidth: 1040,
            }}
          >
            {project.skills.slice(0, 4).join(' · ')}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#9aa3b7',
            fontSize: 21,
          }}
        >
          <span>{siteConfig.name}</span>
          <span>{project.context}</span>
        </div>
      </div>
    ),
    projectSocialImageSize
  );
}
