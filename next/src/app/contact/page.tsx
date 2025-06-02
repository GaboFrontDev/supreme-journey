
import { fetchWithToken } from '@/dynamicRendering/utils';
import { StrapiResponse } from './strapi';
import { mapStyles, offices as localOffices, services } from './consts';
import ContactComponent from './component';

type Offices = typeof localOffices;

const getCoordinates = async () => {
  const response = await fetchWithToken<StrapiResponse>(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/coordenada?populate=*`
  );
  return response.data.attributes.data as Offices;
};

export default async function ContactPage() {
  const remoteOffices = await getCoordinates() || [];
  const offices = remoteOffices;

  const stylesrequest = await fetchWithToken<StrapiResponse>(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/json-snazzy-map?populate=*`
  );
  const styles = stylesrequest.data.attributes.data;

  return <ContactComponent offices={offices} styles={styles} />;
}
