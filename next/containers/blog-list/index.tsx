import { getArticles } from '@/context/article/application/actions/getArticles';
import { ArticlesListSection } from '@/containers/articles-list-section';
import { AnimatedBox } from '@/components/AnimatedBox';
import { IBlogArticles } from '@/context/page/domain/PageEntity';

export const BlogArticles: React.FC<IBlogArticles> = async ({
  title,
  subtitle,
  currentLocale,
}) => {
  const articles = await getArticles();

  return (
    <div className='container pt-48'>
      <section className='text-center'>
        <AnimatedBox>
          <h1 className='mb-8 text-center text-k-3xl font-semibold leading-none lg:text-k-6xl'>
            {title}
          </h1>
        </AnimatedBox>

        {subtitle && (
          <AnimatedBox delay={0.1}>
            <p className='text-lg text-c-gray'>{subtitle}</p>
          </AnimatedBox>
        )}
      </section>

      <ArticlesListSection data={articles.data} currentLocale={currentLocale} />
    </div>
  );
};
