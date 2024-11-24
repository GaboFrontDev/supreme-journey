'use client';

import { useCallback, useState } from 'react';
import { AnimatedBox } from '@/components/AnimatedBox';
import Article from '@/components/Article';
import Button from '@/components/Button';
import { ArticleEntity } from '@/context/article/domain/ArticleEntity';
import { StrapiEntryEntity } from '@/context/shared/domain/StrapiEntity';

const PER_PAGE = 9;

export const ArticlesListSection = ({
  data,
  currentLocale,
}: {
  data: StrapiEntryEntity<ArticleEntity>[];
  currentLocale: string;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const total = data.length;

  const onClickHandler = useCallback(() => {
    setCurrentPage((prevState) => prevState + 1);
  }, []);

  const paginatedData = (() => {
    const startIndex = (currentPage - 1) * PER_PAGE;
    const endIndex = startIndex + PER_PAGE;
    return data.slice(0, endIndex);
  })();

  const isLoadMoreEnabled = total > paginatedData.length;

  return (
    <section className='relative mb-48 mt-16 lg:mt-24'>
      <div
        className='[200px_minmax(284_1fr)] grid grid-cols-[repeat(auto-fill,minmax(284px,1fr))]
          gap-12'
      >
        {paginatedData.map((artcile, i) => (
          <Article
            key={artcile.id}
            data={artcile.attributes}
            animationDelay={((i % 9) + 1) / 9}
            currentLocale={currentLocale}
          />
        ))}
      </div>

      {isLoadMoreEnabled && (
        <AnimatedBox className='mt-12 text-center' marginOffset='0px'>
          <Button onClick={onClickHandler}>Load More</Button>
        </AnimatedBox>
      )}
    </section>
  );
};
