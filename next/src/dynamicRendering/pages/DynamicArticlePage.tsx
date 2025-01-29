import { ArticleSection } from '@/containers/ArticleSection';
import { getArticleBySlug } from '@/context/article/application/actions/getArticleBySlug';
import { getAllLocales, getSlugAndLocale } from '@/dynamicRendering/utils';

export default async function DynamicArticlePage({ params }: IPageProps) {
  const allLocales = await getAllLocales();
  const { pageSlug, currentLocale } = getSlugAndLocale(
    params?.slug,
    allLocales
  );

  const articleSlug = pageSlug.split('/')[1];

  const data = await getArticleBySlug(articleSlug, currentLocale);

  return <ArticleSection data={data[0]} />;
}
