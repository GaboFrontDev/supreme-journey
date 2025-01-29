import { ArrowRightIcon } from '@/Icons/ArrowRightIcon';
import { AnimatedBox } from '@/components/AnimatedBox';
import Article from '@/components/Article';
import { SearchInput } from '@/components/SearchInput';
import { getArticles } from '@/context/article/application/actions/getArticles';
import { IBlogArticles } from '@/context/page/domain/PageEntity';

import Link from 'next/link';
import { Suspense } from 'react';

export const BlogArticlesList: React.FC<IBlogArticles> = async ({
  currentLocale,
  title,
  subtitle,
}) => {
  const data = await getArticles();

  const heroData = data[0];
  const postsData = data?.slice(1);

  return (
    <div className="container py-40">
      <AnimatedBox>
        <h2
          className="mb-5 text-center text-3xl leading-tight tracking-[-1.44px] md:text-5xl
            lg:text-6xl"
        >
          {title}
        </h2>
      </AnimatedBox>
      <AnimatedBox delay={0.1}>
        <p className="mx-auto mb-16 max-w-[800px] text-center text-xl text-c-gray-900">
          {subtitle}
        </p>
      </AnimatedBox>

      <Suspense>
        <SearchInput />
      </Suspense>

      <AnimatedBox className="mb-8 text-right" delay={0.2}>
        <Link
          href='/search'
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-50"
        >
          View all articles <ArrowRightIcon />
        </Link>
      </AnimatedBox>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Article
          data={heroData}
          isHero
          animationDelay={0.2}
          currentLocale={currentLocale}
        />

        <div className="flex flex-col">
          {postsData.map((itm, i) => (
            <>
              <Article
                key={itm.id}
                data={itm}
                variant='horizontal'
                animationDelay={i / 10 + 0.25}
                currentLocale={currentLocale}
              />
              <AnimatedBox delay={i / 10 + 0.25} className="last:hidden">
                <hr className="my-6 border-t border-c-gray-500" />
              </AnimatedBox>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
