
import { getCategories, getProjects } from '@/dynamicRendering/utils';
import ProjectsComponent from './component';

export default async function ProjectPage() {
  const categories = await getCategories();
  return <ProjectsComponent categories={categories} />;
}
