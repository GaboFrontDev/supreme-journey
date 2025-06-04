import { ArticleController } from '../ArticleController';

const { getArticleById: getById } = new ArticleController();

export async function getArticleById(id: string, locale: string) {
  try {
    const article = await getById(id, locale);
    return article;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}
