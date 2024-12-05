import { getAllPages } from '@/context/page/application/actions/getAllPages';

const getPagesSlugs = async () => {
  const { data } = await getAllPages();
  const resData = Array.isArray(data) && data?.length ? data : [];
  const slugArray = resData.map((item) => {
    
    return {
      slug: [item.slug]
    };
  });

  return slugArray;
};

export async function dynamicStaticParams() {
  const pagesSlugData = await getPagesSlugs();
  
  return [...pagesSlugData];
}
