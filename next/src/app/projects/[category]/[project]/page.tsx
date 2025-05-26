import { projectCards } from '../../consts';
import ProjectPageComponent from './component';

const formatTitleToUrl = (title: string) => {
  // replace tildes too
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/~/g, '')
    .replace('i', 'i')
    .replace('é', 'e')
    .replace('ú', 'u')
    .replace('ó', 'o')
    .replace('á', 'a')
    .replace('í', 'i')
    .replace('ñ', 'n')
    .replace('ü', 'u')
    .replace('ç', 'c')
    .replace('ñ', 'n');
};

export function generateStaticParams() {
  const slugs = projectCards.mixedUses.map((project) => ({
    category: 'mixedUses',
    project: formatTitleToUrl(project.title),
  }));
  const slugs2 = projectCards.hotels.map((project) => ({
    category: 'hotels',
    project: formatTitleToUrl(project.title),
  }));
  const slugs3 = projectCards.dwellings.map((project) => ({
    category: 'dwellings',
    project: formatTitleToUrl(project.title),
  }));
  const slugs4 = projectCards.centrosComerciales.map((project) => ({
    category: 'centrosComerciales',
    project: formatTitleToUrl(project.title),
  }));
  const slugs5 = projectCards.latam.map((project) => ({
    category: 'latam',
    project: formatTitleToUrl(project.title),
  }));
  const slugs6 = projectCards.retail.map((project) => ({
    category: 'retail',
    project: formatTitleToUrl(project.title),
  }));
  return [...slugs, ...slugs2, ...slugs3, ...slugs4, ...slugs5, ...slugs6];
}

export default function ProjectPage({
  params,
}: {
  params: { project: string, category: string };
}) {
  return <ProjectPageComponent params={params} />;
}
