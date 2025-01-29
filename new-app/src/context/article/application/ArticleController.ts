import ArticleRepository from '../infrastructure/ArticleRepository';

export class ArticleController {
  constructor() {}

  async getArticleById(id: string, locale: string) {
    return await ArticleRepository.getById(id, locale);
  }

  async getArticleBySlug(id: string, locale: string) {
    return await ArticleRepository.getBySlug(id, locale);
  }

  async getArticles() {
    return await ArticleRepository.getAllArticles();
  }
}
