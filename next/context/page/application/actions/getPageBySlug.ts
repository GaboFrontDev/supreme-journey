import { PageController } from '../PageController';

const { getPageBySlug: getBySlug } = new PageController();

export async function getPageBySlug(slug: string) {
  try {
    const page = await getBySlug(slug);
    if (!page.data.length) {
      console.log({ page });
    }
    return page;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}
