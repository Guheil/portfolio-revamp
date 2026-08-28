import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import '@fontsource/syne/400.css';
import '@fontsource/syne/500.css';
import '@fontsource/syne/600.css';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import './globals.css';
import Providers from '@/lib/providers';
import JsonLd from '@/components/SEO/JsonLd';
import GoogleAnalytics from '@/components/Analytics';
import { absoluteUrl, siteConfig } from '@/lib/seo';

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  referrer: 'strict-origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: '/',
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} | ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    images: [siteConfig.ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(bingVerification
      ? { other: { 'msvalidate.01': bingVerification } }
      : {}),
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} Portfolio`,
      description: siteConfig.description,
      inLanguage: 'en',
      publisher: {
        '@id': `${siteConfig.url}/#person`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: absoluteUrl('/hero-image.png'),
      jobTitle: siteConfig.role,
      description: siteConfig.description,
      sameAs: [siteConfig.github, siteConfig.linkedin],
      knowsAbout: [
        'Next.js',
        'React',
        'JavaScript',
        'TypeScript',
        'Python',
        'WordPress',
        'Responsive Web Development',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bacnotan',
        addressRegion: 'La Union',
        addressCountry: 'PH',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <JsonLd data={structuredData} />
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
