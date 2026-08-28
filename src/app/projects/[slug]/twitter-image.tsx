import { notFound } from 'next/navigation';
import {
  createProjectSocialImage,
} from '@/components/SEO/ProjectSocialImage';
import { getProjectBySlug } from '@/data/projects';

export const alt = 'Project case study by Xavier Gael San Juan';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return createProjectSocialImage(project);
}
