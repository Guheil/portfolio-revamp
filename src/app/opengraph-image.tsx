import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/seo';

export const alt = `${siteConfig.name} | ${siteConfig.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const subtitle = `${siteConfig.role} \u00B7 Next.js \u00B7 React \u00B7 Modern Web Applications`;

export default function OpenGraphImage() {
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
            fontSize: 24,
            letterSpacing: '-0.02em',
          }}
        >
          <span>GAEL.</span>
          <span style={{ color: '#9aa3b7' }}>PORTFOLIO</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: '-0.055em',
              maxWidth: 950,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#c4cad6',
              letterSpacing: '-0.02em',
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#9aa3b7',
            fontSize: 22,
          }}
        >
          <span>{siteConfig.location}</span>
          <span>{siteConfig.url.replace(/^https?:\/\//, '')}</span>
        </div>
      </div>
    ),
    size
  );
}
