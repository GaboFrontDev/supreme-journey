import { getCoordinates } from '@/app/utils/coordinates';
import Footer from './index';

export default async function FooterContainer() {
  const offices = await getCoordinates();
  return <Footer offices={offices} />;
} 