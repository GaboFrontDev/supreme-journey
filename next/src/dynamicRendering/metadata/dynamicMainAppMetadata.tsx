import { getPageBySlug } from '@/context/page/application/actions/getPageBySlug';
import { getAllLocales, getSlugAndLocale, removeEmptyFields } from '../utils';
import { Metadata } from 'next';
import { APP_BASE_URL } from '@/data/common';

// Dynamic main app metadata
export async function dynamicMainAppMetadata({
  params,
}: IPageProps): Promise<Metadata> {
  try {
    const allLocales = await getAllLocales();
    const { pageSlug, currentLocale } = getSlugAndLocale(
      params?.slug,
      allLocales
    );

    const { data } = await getPageBySlug(pageSlug, currentLocale);

    const metadata = data[0]?.attributes?.metadata || {};
    const slug = data[0]?.attributes?.slug || '';
    const pageSlugUrl = slug === 'home' ? '' : slug;
    const filteredMetadata = removeEmptyFields(metadata);

    return {
      ...filteredMetadata,
      alternates: {
        canonical: `${APP_BASE_URL}${pageSlugUrl}`,
        languages: {
          es: `${APP_BASE_URL}es/${pageSlugUrl}`,
          de: `${APP_BASE_URL}de/${pageSlugUrl}`,
        },
      },
    };
  } catch (err) {
    console.log('error while fetching page metadata from strapi:', err);
    return {};
  }
}
