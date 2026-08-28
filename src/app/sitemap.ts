import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { absoluteUrl, siteConfig } from '@/lib/seo';

const PROJECT_ROUTES_UPDATED_AT = new Date('2026-08-29T00:55:00+08:00');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: PROJECT_ROUTES_UPDATED_AT,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: absoluteUrl('/projects'),
      lastModified: PROJECT_ROUTES_UPDATED_AT,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified: PROJECT_ROUTES_UPDATED_AT,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
