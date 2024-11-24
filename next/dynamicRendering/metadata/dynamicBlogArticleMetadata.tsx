import { getArticleBySlug } from '@/context/article/application/actions/getArticleBySlug';
import { getAllLocales, getSlugAndLocale } from '../utils';

// Dynamic metadata
export async function dynamicBlogArticleMetadata({ params }: IPageProps) {
  try {
    const allLocales = await getAllLocales();
    const { pageSlug, currentLocale } = getSlugAndLocale(
      params?.slug,
      allLocales
    );

    const articleSlug = pageSlug.split('/')[1];

    const { data } = await getArticleBySlug(articleSlug, currentLocale);
    const article = data[0].attributes;

    const { Title, Content, Image } = article;

    return {
      title: Title,

      openGraph: {
        images: Image.data.attributes.url,
      },
    };
  } catch (err) {
    console.log('error while fetching Single blog from strapi:', err);
    return {};
  }
}
