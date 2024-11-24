import Link from 'next/link';
import { ArticleAnimationBox } from './ArticleAnimationBox';
import { ArticleEntity } from '@/context/article/domain/ArticleEntity';
import Image from 'next/image';
import { getUrlLocaleFromLang } from '@/dynamicRendering/utils';

const Article = ({
  data,
  animationDelay = 0.1,
  currentLocale,
}: {
  data: ArticleEntity;
  animationDelay?: number;
  currentLocale: string;
}) => {
  const imageData = data.Image.data.attributes;

  const urlLocale = getUrlLocaleFromLang(currentLocale);

  return (
    <ArticleAnimationBox animationDelay={animationDelay}>
      <Link
        href={`${urlLocale}/blog/${data.slug}`}
        className='flex h-full flex-col rounded-xl outline-none transition-opacity hover:opacity-80
          focus-visible:ring-2 focus-visible:ring-c-secondary'
      >
        <div
          className='relative mb-6 aspect-video overflow-hidden rounded-xl border border-white/8
            bg-c-gray/2'
        >
          <Image
            src={imageData.url}
            fill
            alt={imageData.alternativeText}
            className='object-cover'
          />
        </div>

        <p className='mb-4 line-clamp-2 text-k-xl font-semibold tracking-[-0.01em]'>
          {data.Title}
        </p>
        <p className='mt-auto line-clamp-2 text-base tracking-[0.02em] text-c-gray'>
          {data.Content}
        </p>
      </Link>
    </ArticleAnimationBox>
  );
};

export default Article;
