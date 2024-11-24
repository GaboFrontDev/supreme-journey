import { StrapiRepository } from '@/context/shared/infrastructure/StrapiRepository';
import { ArticleEntity } from '../domain/ArticleEntity';

class ArticleRepositoryClass extends StrapiRepository<ArticleEntity> {
  rels = {
    collection: {
      name: '[collection]',
      field: '[id]',
    },
    category: {
      name: '[category]',
    },
  };

  constructor() {
    super('kirliantech-blog');
  }

  async getById(id: string) {
    return await this.getSingleItem(`/${id}?populate=*`);
  }

  async getBySlug(slug: string, locale: string) {
    return await this.getByQuery(
      `filters\[slug\][$eq]=${slug}&populate=*&locale=${locale}`
    );
  }

  async getAllArticles() {
    let articles = await this.get(
      `?populate=*&pagination[page]=1&pagination[pageSize]=100&locale=all`
    );
    let retry = 0;
    if (!articles.data || articles.data.length < 1) {
      // retry strategy
      while (!articles.data && retry < 5) {
        articles = await this.get(
          `?populate=*&pagination[page]=1&pagination[pageSize]=100&locale=all`
        );
        retry++;
      }
    }
    return articles;
  }
}

const ArticleRepository = new ArticleRepositoryClass();
export default ArticleRepository;
