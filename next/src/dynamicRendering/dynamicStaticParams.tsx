import { getArticles } from '@/context/article/application/actions/getArticles';
import { getAllPages } from '@/context/page/application/actions/getAllPages';

const getPagesSlugs = async () => {
  const { data } = await getAllPages();
  const resData = Array.isArray(data) && data?.length ? data : [];

  const slugArray = resData.map((item) => {
    const locale =
      item.attributes.locale === 'en' ? '' : item.attributes.locale;
    const slug =
      item.attributes.slug === 'home' ? [''] : item.attributes.slug.split('/');

    return {
      slug: [locale, ...slug].filter(Boolean),
    };
  });

  return slugArray;
};

const getBlogArticleSlugs = async () => {
  const data = await getArticles();

  const resData = Array.isArray(data) && data?.length ? data : [];

  const slugArray = resData.map((item) => {
    const locale =
      item.attributes.locale === 'en' ? '' : item.attributes.locale;

    const slug = item.attributes.slug;

    return {
      slug: [locale, 'blog', slug].filter(Boolean),
    };
  });

  return slugArray;
};

export async function dynamicStaticParams() {
  const pagesSlugData = await getPagesSlugs();
  const blogArticleSlugs = await getBlogArticleSlugs();

  return [...pagesSlugData, ...blogArticleSlugs];
}
