import { AnimatedBox } from '@/components/AnimatedBox';
import Button from '@/components/Button';
import { SimpleHero } from '@/context/page/domain/PageEntity';

export const SimpleHeroSection: React.FC<SimpleHero> = ({
  title,
  description,
  heroButtons,
  currentLocale,
}) => {
  return (
    <section className="container pb-40 pt-32 lg:pt-44">
      <div className="text-center md:grid md:grid-cols-12">
        <div className="md:col-span-8 md:col-start-3">
          {title && (
            <AnimatedBox>
              <h1 className="mb-6 text-5xl leading-none md:text-6xl md:text-[4.75rem]">
                {title}
              </h1>
            </AnimatedBox>
          )}

          <AnimatedBox delay={0.05}>
            <p className="text-xl text-c-gray-900">{description}</p>
          </AnimatedBox>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row md:justify-center">
            {heroButtons?.map((itm, i) => (
              <AnimatedBox key={i} delay={((i % 2) + 2) / 10}>
                <Button
                  key={itm.Text}
                  url={itm.Link}
                  size='xl'
                  className="w-full min-w-40 sm:w-auto"
                  variant={itm.Primary ? 'primary' : 'secondary'}
                  currentLocale={currentLocale}
                >
                  {itm.Text}
                </Button>
              </AnimatedBox>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
