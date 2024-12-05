import PageRepository from '../infrastructure/PageRepository';

export class PageController {
  constructor() {}

  async getPageBySlug(id: string) {
    return await PageRepository.getBySlug(id);
  }

  async getPages() {
    return await PageRepository.getAllPages();
  }
}
