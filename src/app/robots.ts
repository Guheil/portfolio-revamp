import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const allowGptBot = process.env.ALLOW_GPTBOT === 'true';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        // Search discovery remains enabled through OAI-SearchBot above.
        // Potential training crawling is a separate, explicit opt-in.
        userAgent: 'GPTBot',
        ...(allowGptBot ? { allow: '/' } : { disallow: '/' }),
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
