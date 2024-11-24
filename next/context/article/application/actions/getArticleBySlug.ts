import { ArticleController } from '../ArticleController';

const { getArticleBySlug: getBySlug } = new ArticleController();

export async function getArticleBySlug(slug: string, locale: string) {
  try {
    const article = await getBySlug(slug, locale);
    if (!article.data.length) {
      console.log({ article });
    }
    return article;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}
