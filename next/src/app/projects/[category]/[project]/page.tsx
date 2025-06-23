import { getProjects, getCategories } from '@/dynamicRendering/utils';
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
    const categories = await getCategories();

  // Generamos todas las permutaciones posibles de categoría y proyecto
  const allPermutations = categories.data.flatMap((category) => {
    const categorySlug = formatSlug(category.attributes.nombre);
    const projects = category.attributes.proyectos_ares.data.map((project) => project.attributes);
    // Para cada categoría, generamos una entrada con cada proyecto
    return projects.map((project) => ({
      category: categorySlug,
      project: formatTitleToUrl(project.nombre),
    }));
  });
  console.log(allPermutations);
  return allPermutations;
}

export default async function ProjectPage({
  params,
}: {
  params: { project: string; category: string };
}) {
  const projects = await getProjects();
  const project = projects?.data?.find((project) => {
    return formatTitleToUrl(project.attributes.nombre) === params.project;
  });
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
