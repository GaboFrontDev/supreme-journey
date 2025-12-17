import HomeComponent from './component';
import { getClientes, getDestacados, getCategories } from '@/dynamicRendering/utils';
import { getHomeContent } from './home/getHomeContent';

export default async function HomePage() {
  const clients = await getClientes();
  const destacados = await getDestacados();
  const categorias = await getCategories();
  const pageContent = await getHomeContent();
  return (
    <HomeComponent clients={clients.data.attributes.data} destacados={destacados.data} categorias={categorias.data} pageContent={pageContent} />
  )
}
