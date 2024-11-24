import { AnimatedArticle } from '@/components/AnimatedArticle';
import { AnimatedBox } from '@/components/AnimatedBox';
import { ArticleEntity } from '@/context/article/domain/ArticleEntity';
import { StrapiEntryEntity } from '@/context/shared/domain/StrapiEntity';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export const ArticleSection = ({
  data,
}: {
  data: StrapiEntryEntity<ArticleEntity>;
}) => {
  const articleImage = data.attributes.Image.data.attributes;
  return (
    <AnimatedArticle>
      <div className='grid justify-center lg:grid-cols-12'>
        <div className='col-span-8 col-start-3'>
          <h1
            className='text-k-3xl font-semibold leading-none tracking-[0.02em] lg:text-center
              lg:text-k-6xl'
          >
            {data.attributes.Title}
          </h1>
        </div>

        <div
          className='relative col-span-10 col-start-2 my-14 aspect-video overflow-hidden rounded-xl
            sm:my-28'
        >
          <Image
            src={articleImage.url}
            fill
            alt={articleImage.alternativeText}
            className='object-cover'
          />
        </div>

        <div className='col-span-8 col-start-3'>
          <ReactMarkdown className='parsedown'>
            {data.attributes.Content}
          </ReactMarkdown>
        </div>
      </div>
    </AnimatedArticle>
  );
};
