import { ArticlesListSection } from '@/components/ArticlesListSection';
import { SearchInput } from '@/components/SearchInput';
import { getArticles } from '@/context/article/application/actions/getArticles';
import { ISearchArticles } from '@/context/page/domain/PageEntity';
import React, { Suspense } from 'react';

export const ArticleSearchSection: React.FC<ISearchArticles> = async ({
  currentLocale,
}) => {
  const data = await getArticles();

  return (
    <div className='container py-40'>
      <Suspense>
        <SearchInput />

        <ArticlesListSection data={data} currentLocale={currentLocale} />
      </Suspense>
    </div>
  );
};
