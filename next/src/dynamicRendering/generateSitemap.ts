import { getArticles } from '@/context/article/application/actions/getArticles';
import { getAllPages } from '@/context/page/application/actions/getAllPages';

export const generateSitemap = async () => {
  const { data: pageRes } = await getAllPages();
  const blogsRes = await getArticles();

  const resData =
    Array.isArray(pageRes) && pageRes?.length
      ? pageRes?.filter(
          (itm) =>
            itm?.attributes?.locale === 'en' &&
            itm?.attributes?.slug !== 'global-metadata'
        )
      : [];
  const blogsData =
    Array.isArray(blogsRes) && blogsRes?.length
      ? blogsRes?.map((blog) => ({
          ...blog,
          attributes: {
            ...blog,
            slug: `blog/${blog.attributes.slug}`,
          },
        }))
      : [];

  const mainAppPages = [...resData, ...blogsData];

  return mainAppPages;
};
