import { PageController } from '../PageController';

const { getPages: getAll } = new PageController();

export async function getAllPages() {
  try {
    const pages = await getAll();
    if (!pages.data.length) {
      console.log({ pages });
    }
    return pages;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}
