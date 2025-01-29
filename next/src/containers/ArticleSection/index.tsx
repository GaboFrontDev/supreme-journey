import { ArrowRightIcon } from '@/Icons/ArrowRightIcon';

import { AnimatedArticle } from '@/components/AnimatedArticle';
import { ArticleEntity } from '@/context/article/domain/ArticleEntity';
import { StrapiEntryEntity } from '@/context/shared/domain/StrapiEntity';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export const ArticleSection = ({
  data,
}: {
  data: StrapiEntryEntity<ArticleEntity>;
}) => {
  const articleImage = data.Image.data;

  return (
    <AnimatedArticle className="container pt-28">
      <Link
        href='/blog'
        className="mb-10 ml-auto flex items-center gap-2 pl-1 transition-opacity hover:opacity-50"
      >
        <ArrowRightIcon className="rotate-180" /> Back to blog
      </Link>
      <div className="justify-center lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8 lg:col-start-3">
          <h1 className="text-5xl leading-none md:text-6xl lg:text-[4.75rem]">
            {data.Title}
          </h1>
        </div>

        <div className="-mx-4 mb-10 mt-14 lg:col-span-10 lg:col-start-2 lg:mx-0">
          <div className="relative aspect-video">
            <Image
              src={articleImage.url}
              fill
              alt={articleImage.alternativeText}
              className="object-cover"
            />
            <div className="h-full w-full bg-black" />
          </div>
        </div>

        <div className="lg:col-span-8 lg:col-start-3">
          <ReactMarkdown className="parsedown">
            {data.Content}
          </ReactMarkdown>
        </div>
      </div>
    </AnimatedArticle>
  );
};
