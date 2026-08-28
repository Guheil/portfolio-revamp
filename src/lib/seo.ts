const DEFAULT_SITE_URL = 'https://xavier-gael.vercel.app';

const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteConfig = {
  name: 'Xavier Gael San Juan',
  shortName: 'Gael',
  role: 'Front-End Developer',
  description:
    'Front-end developer in La Union, Philippines building responsive web applications and digital products with Next.js, React, Python, and WordPress.',
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    vercelProductionUrl ||
    DEFAULT_SITE_URL
  ).replace(/\/$/, ''),
  locale: 'en_PH',
  location: 'Bacnotan, La Union, Philippines',
  github: 'https://github.com/guheil',
  linkedin: 'https://www.linkedin.com/in/xavier-gael-san-juan-823b43286/',
  ogImagePath: '/opengraph-image',
} as const;

export const absoluteUrl = (path = '/') => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
};
