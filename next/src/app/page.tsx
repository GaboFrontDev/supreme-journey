import HomeComponent from './component';
import { getClientes } from '@/dynamicRendering/utils';

export default async function HomePage() {
  const clients = await getClientes();
  return (
    <HomeComponent clients={clients.data.attributes.data} />
  )
}
