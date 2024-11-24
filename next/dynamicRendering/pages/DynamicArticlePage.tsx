import { getArticleBySlug } from '@/context/article/application/actions/getArticleBySlug';

import { getAllLocales, getSlugAndLocale } from '@/dynamicRendering/utils';
import { ArticleSection } from '@/containers/article-section';
import { RelatedPostsSection } from '@/containers/related-posts-section';

export default async function DynamicArticlePage({ params }: IPageProps) {
  const allLocales = await getAllLocales();
  const { pageSlug, currentLocale } = getSlugAndLocale(
    params?.slug,
    allLocales
  );

  const articleSlug = pageSlug.split('/')[1];

  const { data } = await getArticleBySlug(articleSlug, currentLocale);

  return (
    <div className='container py-48'>
      <ArticleSection data={data[0]} />

      <section className='mt-48'>
        <h2 className='mb-12 text-center text-k-2xl font-semibold leading-tight sm:text-k-3xl'>
          What Else to Read?
        </h2>

        <RelatedPostsSection currentLocale={currentLocale} />
      </section>
    </div>
  );
}
