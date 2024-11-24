import { getPageBySlug } from '@/context/page/application/actions/getPageBySlug';
import { STRAPI_COMPONENTS_MAP } from '@/dynamicRendering/componentsMap';

import { getAllLocales, getSlugAndLocale } from '@/dynamicRendering/utils';

export default async function DynamicPage({ params }: IPageProps) {
  const allLocales = await getAllLocales();
  const { currentLocale, pageSlug } = getSlugAndLocale(
    params?.slug,
    allLocales
  );

  const { data } = await getPageBySlug(pageSlug, currentLocale);

  const PAGE_SECTIONS = data[0]?.attributes.PageSections;

  return PAGE_SECTIONS?.map((data) => {
    const Component = STRAPI_COMPONENTS_MAP[data?.__component] as React.FC<
      typeof data
    >;

    return Component ? (
      <Component
        key={data.__component}
        {...data}
        currentLocale={currentLocale}
      />
    ) : null;
  });
}
