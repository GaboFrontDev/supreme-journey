import { ArticleController } from '../ArticleController';

const { getArticles: getAll } = new ArticleController();

export async function getArticles() {
  try {
    const articles = await getAll();
    if (!articles.data.length) {
      console.log({ articles });
    }
    return articles;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}
