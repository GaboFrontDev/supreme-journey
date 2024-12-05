import { getPageBySlug } from '@/context/page/application/actions/getPageBySlug';
import { STRAPI_COMPONENTS_MAP } from '@/dynamicRendering/componentsMap';

export default async function DynamicPage({ params }: IPageProps) {
  const { data } = await getPageBySlug(params.slug);
  const PAGE_SECTIONS = data[0]?.sections;

  return PAGE_SECTIONS?.map((data) => {
    const Component = STRAPI_COMPONENTS_MAP[data?.__component] as React.FC<
      typeof data
    >;

    return Component ? (
      <Component
        key={data.__component}
        {...data}
      />
    ) : null;
  });
}
