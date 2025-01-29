import { getArticleBySlug } from '@/context/article/application/actions/getArticleBySlug';
import {
  getAllLocales,
  getSlugAndLocale,
  summarizeDescription,
} from '../utils';
import { Metadata } from 'next';
import { APP_BASE_URL } from '@/data/common';

// Dynamic blog article metadata
export async function dynamicBlogArticleMetadata({
  params,
}: IPageProps): Promise<Metadata> {
  try {
    const allLocales = await getAllLocales();
    const { pageSlug, currentLocale } = getSlugAndLocale(
      params?.slug,
      allLocales
    );

    const articleSlug = pageSlug.split('/')[1];

    const data = await getArticleBySlug(articleSlug, currentLocale);
    const article = data[0] || [];

    const { Title, Content, Image } = article.attributes;

    return {
      title: Title,
      description: summarizeDescription(Content),
      openGraph: {
        images: Image.data.attributes.url,
        type: 'article',
        locale: currentLocale,
        publishedTime: article.attributes.PublishDate,
        authors: ['Inneractive'],
      },
      alternates: {
        canonical: `${APP_BASE_URL}${article.attributes.slug}`,
        languages: {
          es: `${APP_BASE_URL}${article.attributes.slug}`,
          de: `${APP_BASE_URL}${article.attributes.slug}`,
        },
      },
    };
  } catch (err) {
    console.log('error while fetching Single blog from strapi:', err);
    return {};
  }
}
