import ArticleRepository from '../infrastructure/ArticleRepository';

export class ArticleController {
  constructor() {}

  async getArticleById(id: string) {
    return await ArticleRepository.getById(id);
  }

  async getArticleBySlug(id: string, locale: string) {
    return await ArticleRepository.getBySlug(id, locale);
  }

  async getArticles() {
    return await ArticleRepository.getAllArticles();
  }
}
