import { getPageBySlug } from '@/context/page/application/actions/getPageBySlug';
import { getAllLocales, getSlugAndLocale, removeEmptyFields } from '../utils';

// Dynamic metadata
export async function dynamicMainAppMetadata({ params }: IPageProps) {
  try {
    const allLocales = await getAllLocales();
    const { currentLocale, pageSlug } = getSlugAndLocale(
      params?.slug,
      allLocales
    );
    const { data } = await getPageBySlug(pageSlug, currentLocale);

    const metadata = data[0]?.attributes?.metadata || {};

    const filteredMetadata = removeEmptyFields(metadata);

    return filteredMetadata;
  } catch (err) {
    console.log('error while fetching page metadata from strapi:', err);
    return {};
  }
}
