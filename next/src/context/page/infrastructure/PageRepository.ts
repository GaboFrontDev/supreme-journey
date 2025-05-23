import { StrapiRepository } from '@/context/shared/infrastructure/StrapiRepository';
import { PageEntity } from '../domain/PageEntity';
import { AuraImaging } from './constants';

class PageRepositoryClass extends StrapiRepository<PageEntity> {
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
    super('page');
  }

  async getBySlug(slug: string, locale: string) {
    return await this.getByQuery(
      `filters\[slug\][$eq]=${slug}&${AuraImaging.PopulateParmsStr}&locale=${locale}`
    );
  }

  async getAllPages() {
    let articles = await this.get(
      `?populate=*&pagination[page]=1&pagination[pageSize]=100&locale=all`
    );
    let retry = 0;
    if (!articles.data || articles.data.length < 1) {
      // retry strategy
      while (!articles && retry < 5) {
        articles = await this.get(
          `?populate=*&pagination[page]=1&pagination[pageSize]=100&locale=all`
        );
        retry++;
      }
    }
    return articles;
  }
}

const ArticleRepository = new PageRepositoryClass();
export default ArticleRepository;
