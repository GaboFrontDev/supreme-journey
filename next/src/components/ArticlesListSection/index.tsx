'use client';

import Article from '@/components/Article';
import Button from '@/components/Button';
import { useCallback, useEffect, useState } from 'react';
import { AnimatedBox } from '../AnimatedBox';
import { ArticleEntity } from '@/context/article/domain/ArticleEntity';
import { StrapiEntryEntity } from '@/context/shared/domain/StrapiEntity';
import { useSearchParams } from 'next/navigation';

interface IArticlesListSection {
  data: StrapiEntryEntity<ArticleEntity>[];
  currentLocale: string;
}

const PER_PAGE = 9;

export const ArticlesListSection = ({
  data,
  currentLocale,
}: IArticlesListSection) => {
  const [currentPage, setCurrentPage] = useState(1);

  const p = useSearchParams();
  const searchTerm = p.get('q')?.toLowerCase() || '';

  const filteredData = data.filter((itm) =>
    itm.attributes.Title.toLowerCase().includes(searchTerm)
  );

  const total = filteredData.length;

  const onClickHandler = useCallback(() => {
    setCurrentPage((prevState) => prevState + 1);
  }, []);

  const paginatedData = (() => {
    const startIndex = (currentPage - 1) * PER_PAGE;
    const endIndex = startIndex + PER_PAGE;
    return filteredData.slice(0, endIndex);
  })();

  const isLoadMoreEnabled = total > paginatedData.length;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  if (!paginatedData.length) {
    return (
      <AnimatedBox>
        <p className="py-16 text-center text-lg">
          Nothing found. Try searching with a different keyword.
        </p>
      </AnimatedBox>
    );
  }

  return (
    <section className="relative">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(285px,1fr))] gap-5">
        {paginatedData.map((artcile, i) => (
          <Article
            key={artcile.id}
            data={artcile}
            animationDelay={((i % 9) + 1) / 10}
            currentLocale={currentLocale}
          />
        ))}
      </div>

      {isLoadMoreEnabled && (
        <AnimatedBox className="mt-12 text-center">
          <Button onClick={onClickHandler} className="min-w-40">
            Load More
          </Button>
        </AnimatedBox>
      )}
    </section>
  );
};
