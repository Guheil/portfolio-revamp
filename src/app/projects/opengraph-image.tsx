import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/seo';

export const alt = `Selected Projects - ${siteConfig.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 78px',
          background: '#080b16',
          color: '#f5f5f5',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 23 }}>
          <span>GAEL.</span>
          <span style={{ color: '#9aa3b7' }}>PORTFOLIO</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: '-0.055em' }}>
            Selected Projects
          </div>
          <div style={{ fontSize: 30, color: '#c4cad6' }}>
            Web · Mobile · Scheduling · Inventory · CMS
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9aa3b7', fontSize: 21 }}>
          <span>{siteConfig.name}</span>
          <span>{siteConfig.location}</span>
        </div>
      </div>
    ),
    size
  );
}
