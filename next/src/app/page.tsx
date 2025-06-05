import HomeComponent from './component';
import { getClientes, getDestacados, getCategories } from '@/dynamicRendering/utils';

export default async function HomePage() {
  const clients = await getClientes();
  const destacados = await getDestacados();
  const categorias = await getCategories();
  return (
    <HomeComponent clients={clients.data.attributes.data} destacados={destacados.data} categorias={categorias.data} />
  )
}
