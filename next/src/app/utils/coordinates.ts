import { fetchWithToken } from '@/dynamicRendering/utils';
import { StrapiResponse } from '@/app/contact/strapi';
import { offices } from '@/app/contact/consts';

export type Offices = typeof offices;

export const getCoordinates = async (): Promise<Offices> => {
  const response = await fetchWithToken<StrapiResponse>(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/coordenada?populate=*`
  );
  return response.data.attributes.data as Offices;
};
