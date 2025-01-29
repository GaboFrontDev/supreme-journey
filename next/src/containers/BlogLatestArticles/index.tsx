import { ArrowRightIcon } from '@/Icons/ArrowRightIcon';

import { AnimatedBox } from '@/components/AnimatedBox';
import Article from '@/components/Article';
import { getArticles } from '@/context/article/application/actions/getArticles';
import { LatestArticles } from '@/context/page/domain/PageEntity';
import Link from 'next/link';

export const BlogLatestArticles: React.FC<LatestArticles> = async ({
  title,
  description,
  currentLocale,
}) => {
  const data = await getArticles();

  const articleData = data.slice(0, 3);

  return (
    <section className="bg-c-gray-950 py-20">
      <div className="container">
        <AnimatedBox>
          <h2
            className="mb-5 text-3xl leading-tight tracking-[-1.44px] text-white md:text-5xl
              lg:text-6xl"
          >
            {title}
          </h2>
        </AnimatedBox>
        <div className="mb-14 flex justify-between text-white">
          <AnimatedBox>
            <p>{description}</p>
          </AnimatedBox>
          <AnimatedBox>
            <Link
              href='/blog'
              className="hidden items-center gap-2 underline transition-opacity hover:opacity-50
                md:inline-flex"
            >
              View all articles <ArrowRightIcon />
            </Link>
          </AnimatedBox>
        </div>

        <AnimatedBox>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(285px,1fr))] gap-5">
            {articleData.map((itm, i) => (
              <Article
                key={itm.id}
                data={itm}
                variant='vertical'
                theme='light'
                animationDelay={i / 10 + 0.25}
                currentLocale={currentLocale}
              />
            ))}
          </div>
        </AnimatedBox>

        <AnimatedBox className="mt-8 text-center">
          <Link
            href='/blog'
            className="inline-flex items-center gap-2 text-white underline transition-opacity
              hover:opacity-50 md:hidden"
          >
            View all articles <ArrowRightIcon />
          </Link>
        </AnimatedBox>
      </div>
    </section>
  );
};
