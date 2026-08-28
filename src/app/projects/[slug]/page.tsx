import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/SEO/JsonLd';
import { getProjectBySlug, projects } from '@/data/projects';
import { absoluteUrl, siteConfig } from '@/lib/seo';
import styles from '../projects.module.css';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      robots: { index: false, follow: false },
    };
  }

  const path = `/projects/${project.slug}`;

  return {
    title: project.name,
    description: project.seoDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'article',
      url: path,
      title: `${project.name} | ${siteConfig.name}`,
      description: project.seoDescription,
      siteName: `${siteConfig.name} Portfolio`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} | ${siteConfig.name}`,
      description: project.seoDescription,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const projectUrl = absoluteUrl(`/projects/${project.slug}`);
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${projectUrl}#project`,
        url: projectUrl,
        mainEntityOfPage: projectUrl,
        name: project.name,
        headline: project.name,
        description: project.description,
        abstract: project.overview,
        inLanguage: 'en-PH',
        creator: {
          '@id': `${siteConfig.url}/#person`,
        },
        isPartOf: {
          '@id': `${siteConfig.url}/#website`,
        },
        about: project.skills.map((skill) => ({
          '@type': 'Thing',
          name: skill,
        })),
        keywords: project.skills.join(', '),
        ...(project.demo ? { sameAs: [project.demo] } : {}),
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
          {
            '@type': 'ListItem',
            position: 3,
            name: project.name,
            item: projectUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className={styles.page}>
      <JsonLd data={structuredData} />
      <article className={styles.container}>
        <header className={styles.detailHero} data-project-reveal>
          <Link className={styles.backLink} href="/projects">
            <span aria-hidden="true">←</span> All projects
          </Link>

          <h1 className={styles.detailTitle}>{project.name}</h1>
          <p className={styles.detailLead}>{project.description}</p>

          <dl className={styles.factList} aria-label="Project facts">
            <div className={styles.factItem}>
              <dt>Role</dt>
              <dd>{project.caseStudy.role}</dd>
            </div>
            <div className={styles.factItem}>
              <dt>Deliverable</dt>
              <dd>{project.caseStudy.deliverable}</dd>
            </div>
            <div className={styles.factItem}>
              <dt>Context</dt>
              <dd>{project.context}</dd>
            </div>
            <div className={styles.factItem}>
              <dt>Period</dt>
              <dd>{project.period}</dd>
            </div>
          </dl>

          <div className={styles.tags} aria-label="Technologies and focus areas">
            {project.skills.map((skill) => (
              <span className={styles.tag} key={skill}>
                {skill}
              </span>
            ))}
          </div>

          {(project.demo || project.repo) && (
            <div className={styles.projectLinks}>
              {project.demo && (
                <a
                  className={styles.externalLink}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="project_external_click"
                  data-analytics-label={project.shortName}
                  data-analytics-type="live-demo"
                  data-analytics-destination={project.demo}
                >
                  Visit live website
                </a>
              )}
              {project.repo && (
                <a
                  className={styles.externalLink}
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="project_external_click"
                  data-analytics-label={project.shortName}
                  data-analytics-type="repository"
                  data-analytics-destination={project.repo}
                >
                  View repository
                </a>
              )}
            </div>
          )}
        </header>

        <section className={styles.detailGrid} data-project-reveal>
          <h2 className={styles.sectionTitle}>Project overview</h2>
          <div className={styles.proseStack}>
            <p className={styles.sectionBody}>{project.overview}</p>
          </div>
        </section>

        <section className={styles.detailGrid} data-project-reveal>
          <h2 className={styles.sectionTitle}>The challenge</h2>
          <div className={styles.proseStack}>
            {project.caseStudy.challenge.map((paragraph) => (
              <p className={styles.sectionBody} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className={styles.detailGrid} data-project-reveal>
          <h2 className={styles.sectionTitle}>How I approached it</h2>
          <div className={styles.proseStack}>
            {project.caseStudy.approach.map((paragraph) => (
              <p className={styles.sectionBody} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className={styles.detailGrid} data-project-reveal>
          <h2 className={styles.sectionTitle}>Core workflows</h2>
          <div className={styles.workflowList}>
            {project.caseStudy.workflows.map((workflow) => (
              <section className={styles.workflowItem} key={workflow.title}>
                <h3 className={styles.workflowTitle}>{workflow.title}</h3>
                <p className={styles.sectionBody}>{workflow.description}</p>
              </section>
            ))}
          </div>
        </section>

        <section className={styles.detailGrid} data-project-reveal>
          <h2 className={styles.sectionTitle}>Technical implementation</h2>
          <ul className={styles.highlights}>
            {project.caseStudy.technicalNotes.map((note) => (
              <li className={styles.highlight} key={note}>
                <span className={styles.highlightMarker} aria-hidden="true">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.detailGrid} data-project-reveal>
          <h2 className={styles.sectionTitle}>Result</h2>
          <ul className={styles.highlights}>
            {project.caseStudy.outcome.map((outcome) => (
              <li className={styles.highlight} key={outcome}>
                <span className={styles.highlightMarker} aria-hidden="true">•</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.detailGrid} data-project-reveal>
          <h2 className={styles.sectionTitle}>Technology</h2>
          <div>
            <div className={styles.tags} aria-label="Project technology">
              {project.skills.map((skill) => (
                <span className={styles.tag} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              <Link
                className={styles.internalLink}
                href="/#projects"
                data-analytics-event="portfolio_navigation"
                data-analytics-label="Homepage projects"
                data-analytics-type="internal"
                data-analytics-destination="/#projects"
              >
                Homepage projects
              </Link>
              <Link
                className={styles.internalLink}
                href="/projects"
                data-analytics-event="portfolio_navigation"
                data-analytics-label="All projects"
                data-analytics-type="internal"
                data-analytics-destination="/projects"
              >
                All projects
              </Link>
            </div>
          </div>
        </section>

        <nav className={styles.projectPager} aria-label="More project case studies" data-project-reveal>
          <Link
            className={styles.pagerLink}
            href={`/projects/${previousProject.slug}`}
            data-analytics-event="case_study_pager"
            data-analytics-label={previousProject.shortName}
            data-analytics-type="previous"
            data-analytics-destination={`/projects/${previousProject.slug}`}
          >
            <span className={styles.pagerDirection}>Previous project</span>
            <span className={styles.pagerName}>{previousProject.shortName}</span>
          </Link>
          <Link
            className={styles.pagerLink}
            href={`/projects/${nextProject.slug}`}
            data-analytics-event="case_study_pager"
            data-analytics-label={nextProject.shortName}
            data-analytics-type="next"
            data-analytics-destination={`/projects/${nextProject.slug}`}
          >
            <span className={styles.pagerDirection}>Next project</span>
            <span className={styles.pagerName}>{nextProject.shortName}</span>
          </Link>
        </nav>
      </article>
    </main>
  );
}
