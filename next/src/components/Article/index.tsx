import Link from 'next/link';
import { ArticleAnimationBox } from './ArticleAnimationBox';
import Image from 'next/image';
import { ArticleEntity } from '@/context/article/domain/ArticleEntity';
import { StrapiEntryEntity } from '@/context/shared/domain/StrapiEntity';
import { getUrlLocaleFromLang } from '@/dynamicRendering/utils';

type ArticleVariantType = 'horizontal' | 'vertical';
type ArticleThemeType = 'light' | 'dark';

interface IArticle {
  data: StrapiEntryEntity<ArticleEntity>;
  animationDelay?: number;
  variant?: ArticleVariantType;
  theme?: ArticleThemeType;
  isHero?: boolean;
  currentLocale: string;
}

const Article = ({
  data,
  animationDelay = 0.1,
  variant = 'vertical',
  theme = 'dark',
  isHero,
  currentLocale,
}: IArticle) => {
  const isHorizontal = variant === 'horizontal';
  const isLightTheme = theme === 'light';

  const titleClasses = `${isHero ? 'lg:text-5xl lg:leading-[1.1]' : ''} text-2xl mb-3 line-clamp-2 min-h-14 capitalize ${isLightTheme ? 'text-white' : ''}`;

  const urlLocale = getUrlLocaleFromLang(currentLocale);

  return (
    <ArticleAnimationBox animationDelay={animationDelay}>
      <Link
        href={`${urlLocale}/blog/${data.slug}`}
        className={`${isHorizontal ? 'flex-col md:flex-row md:gap-6' : 'flex-col'} flex outline-none
        transition-opacity hover:opacity-75`}
      >
        <div
          className={`${isHorizontal ? 'md:w-[42%]' : 'mb-5'} relative aspect-video flex-shrink-0
          overflow-hidden rounded-xl bg-c-gray-950`}
        >
          <Image
            src={data.Image.data.url}
            fill
            alt={data.Title}
            className="object-cover"
          />
        </div>
        <div>
          <div className="mb-2 text-sm text-c-gray-500">
            {data.PublishDate}
          </div>

          <h3 className={titleClasses} title={data.Title}>
            {data.Title}
          </h3>

          <p
            className={`line-clamp-2 text-sm leading-[22px] ${
              isLightTheme ? 'text-c-gray-500' : 'text-c-gray-900'
            }`}
            title={data.Content}
          >
            {data.Content}
          </p>
        </div>
      </Link>
    </ArticleAnimationBox>
  );
};

export default Article;
