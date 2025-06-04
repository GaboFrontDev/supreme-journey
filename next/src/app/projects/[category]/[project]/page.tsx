import { getProjects } from '@/dynamicRendering/utils';
import ProjectPageComponent from './component';
import { formatSlug } from '@/utils/formatSlug';
import { notFound } from 'next/navigation';

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

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects?.data?.map((project) => ({
    category: formatSlug(
      project.attributes.categoria_proyecto.data[0].attributes.nombre
    ),
    project: formatTitleToUrl(project.attributes.nombre),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { project: string; category: string };
}) {
  const projects = await getProjects();
  const project = projects?.data?.find(
    (project) =>
      formatSlug(
        project.attributes.categoria_proyecto.data[0].attributes.nombre
      ) === params.category &&
      formatTitleToUrl(project.attributes.nombre) === params.project
  );
  if (!project) {
    return notFound();
  }
  return (
    <ProjectPageComponent
      project={project}
      category={project.attributes.categoria_proyecto.data[0].attributes.nombre}
    />
  );
}
