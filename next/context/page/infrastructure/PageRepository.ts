import { StrapiRepository } from '@/context/shared/infrastructure/StrapiRepository';
import { PageEntity } from '../domain/PageEntity';
import { PopulateParmsStr } from './constants';

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

  async getBySlug(slug: string) {
    return await this.getByQuery(
      `filters\[slug\][$eq]=${slug}&${PopulateParmsStr}&locale=es`
    );
  }

  async getAllPages() {
    let articles = await this.get(
      `?populate=*`
    );
    let retry = 0;
    if (!articles.data || articles.data.length < 1) {
      // retry strategy
      while (!articles.data && retry < 5) {
        articles = await this.get(
          `?populate=*`
        );
        retry++;
      }
    }
    return articles;
  }
}

const ArticleRepository = new PageRepositoryClass();
export default ArticleRepository;
