import Article from '@/components/Article';
import { getArticles } from '@/context/article/application/actions/getArticles';

export const RelatedPostsSection = async ({
  currentLocale,
}: {
  currentLocale: string;
}) => {
  const articlesData = (await getArticles()).data;

  const relatedData = articlesData.slice(0, 3);
  return (
    <div
      className='[200px_minmax(284_1fr)] grid grid-cols-[repeat(auto-fill,minmax(284px,1fr))]
        gap-12'
    >
      {relatedData.map((itm) => (
        <Article
          key={itm.id}
          data={itm.attributes}
          currentLocale={currentLocale}
        />
      ))}
    </div>
  );
};
