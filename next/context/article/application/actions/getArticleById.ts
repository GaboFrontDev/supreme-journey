import { ArticleController } from '../ArticleController';

const { getArticleById: getById } = new ArticleController();

export async function getArticleById(id: string) {
  try {
    const article = await getById(id);
    if (!article) {
      console.log({ article });
    }
    return article;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}