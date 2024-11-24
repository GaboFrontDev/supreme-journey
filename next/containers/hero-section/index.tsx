import { AnimatedBox } from '@/components/AnimatedBox';
import Button from '@/components/Button';
import { Hero } from '@/context/page/domain/PageEntity';

export const HeroSection: React.FC<Hero> = ({
  title,
  subtitle,
  heroButtons,
  currentLocale,
}) => {
  return (
    <section className='container grid justify-center pb-24 pt-64 sm:pb-48 sm:pt-72 lg:grid-cols-12'>
      <div className='col-span-8 col-start-3'>
        <AnimatedBox>
          <h1 className='mb-6 text-center text-k-3xl font-semibold leading-none lg:text-k-6xl '>
            {title}
          </h1>
        </AnimatedBox>

        <AnimatedBox delay={0.1}>
          <p className='mb-10 text-center text-lg tracking-[0.02em] text-c-gray'>
            {subtitle}
          </p>
        </AnimatedBox>

        <div className='grid justify-normal gap-6 sm:flex sm:justify-center'>
          {heroButtons.map((itm, i) => (
            <AnimatedBox key={i} delay={((i % 2) + 2) / 10}>
              <Button
                key={itm.Text}
                url={itm.Link}
                className='w-full sm:w-auto'
                variant={itm.Primary ? 'primary' : 'secondary'}
                currentLocale={currentLocale}
              >
                {itm.Text}
              </Button>
            </AnimatedBox>
          ))}
        </div>
      </div>
    </section>
  );
};
