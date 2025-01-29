import { dynamicStaticParams } from '@/dynamicRendering/dynamicStaticParams';
import { getAllLocales, getSlugAndLocale } from '@/dynamicRendering/utils';
import DynamicArticlePage from '@/dynamicRendering/pages/DynamicArticlePage';
import DynamicPage from '@/dynamicRendering/pages/DynamicPage';
import { dynamicBlogArticleMetadata } from '@/dynamicRendering/metadata/dynamicBlogArticleMetadata';
import { dynamicMainAppMetadata } from '@/dynamicRendering/metadata/dynamicMainAppMetadata';

export const revalidate = 3600;

export async function generateMetadata({ params }: IPageProps) {
  const allLocales = await getAllLocales();
  const { pageSlug } = getSlugAndLocale(params?.slug, allLocales);


  return await dynamicMainAppMetadata({ params });
}

export async function generateStaticParams() {
  return dynamicStaticParams();
}

export default async function Page({ params }: IPageProps) {
  const allLocales = await getAllLocales();
  const { pageSlug } = getSlugAndLocale(params?.slug, allLocales);

  return DynamicPage({
    params,
  });
}
