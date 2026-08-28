import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/SEO/JsonLd';
import { projects } from '@/data/projects';
import { absoluteUrl, siteConfig } from '@/lib/seo';
import styles from './projects.module.css';

export const metadata: Metadata = {
  title: 'Selected Projects',
  description:
    'Selected web, mobile, scheduling, inventory, hospitality, and CMS projects built by Xavier Gael San Juan using Next.js, React, Python, WordPress, Odoo, and related technologies.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    type: 'website',
    url: '/projects',
    title: `Selected Projects | ${siteConfig.name}`,
    description:
      'Explore selected web, mobile, scheduling, inventory, hospitality, and CMS projects built by Xavier Gael San Juan.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Selected Projects | ${siteConfig.name}`,
    description:
      'Explore selected web, mobile, scheduling, inventory, hospitality, and CMS projects built by Xavier Gael San Juan.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${absoluteUrl('/projects')}#collection`,
      url: absoluteUrl('/projects'),
      name: `Selected Projects | ${siteConfig.name}`,
      description: metadata.description,
      isPartOf: {
        '@id': `${siteConfig.url}/#website`,
      },
      about: {
        '@id': `${siteConfig.url}/#person`,
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${absoluteUrl('/projects')}#projects`,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          '@id': `${absoluteUrl(`/projects/${project.slug}`)}#project`,
          url: absoluteUrl(`/projects/${project.slug}`),
          name: project.name,
          description: project.seoDescription,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteConfig.url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projects',
          item: absoluteUrl('/projects'),
        },
      ],
    },
  ],
};

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <JsonLd data={structuredData} />
      <div className={styles.container}>
        <header className={styles.intro} data-project-reveal>
          <h1 className={styles.title}>Selected Projects</h1>
          <p className={styles.lead}>
            Selected client and academic work across scheduling, hospitality, inventory,
            mobile AR, and CMS delivery. Each case study focuses on the problem,
            the system built, and the decisions behind it.
          </p>
        </header>

        <ol className={styles.projectList} aria-label="Portfolio projects">
          {projects.map((project, index) => (
            <li
              className={styles.projectItem}
              key={project.slug}
              data-project-reveal
            >
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <article className={styles.projectBody}>
                <h2 className={styles.projectHeading}>
                  <Link
                    href={`/projects/${project.slug}`}
                    data-analytics-event="case_study_open"
                    data-analytics-label={project.shortName}
                    data-analytics-type="projects-index-title"
                    data-analytics-destination={`/projects/${project.slug}`}
                  >
                    {project.name}
                  </Link>
                </h2>
                <p className={styles.description}>{project.description}</p>
                <p className={styles.meta}>{project.period}</p>
                <div className={styles.tags} aria-label="Technologies and focus areas">
                  {project.skills.map((skill) => (
                    <span className={styles.tag} key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>

              <Link
                className={styles.action}
                href={`/projects/${project.slug}`}
                data-analytics-event="case_study_open"
                data-analytics-label={project.shortName}
                data-analytics-type="projects-index-action"
                data-analytics-destination={`/projects/${project.slug}`}
              >
                Read project <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
