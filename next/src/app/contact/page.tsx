import { fetchWithToken } from '@/dynamicRendering/utils';
import { StrapiResponse } from './strapi';
import { offices as localOffices } from './consts';
import ContactComponent from './component';
import { getCoordinates } from '../utils/coordinates';

type Offices = typeof localOffices;

export default async function ContactPage() {
  const remoteOffices = (await getCoordinates()) || [];
  const offices = remoteOffices;

  const stylesrequest = await fetchWithToken<StrapiResponse>(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/json-snazzy-map?populate=*`
  );
  const styles = stylesrequest.data.attributes.data;

  return <ContactComponent offices={offices} styles={styles} />;
}
