import PageRepository from '../infrastructure/PageRepository';

export class PageController {
  constructor() {}

  async getPageBySlug(id: string, locale: string) {
    return await PageRepository.getBySlug(id, locale);
  }

  async getPages() {
    return await PageRepository.getAllPages();
  }
}
