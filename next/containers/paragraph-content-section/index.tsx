import Button from '@/components/Button';
import Image from 'next/image';
import { AnimatedBox } from '@/components/AnimatedBox';
import { Paragraph } from '@/context/page/domain/PageEntity';

export const ParagraphContentSection: React.FC<Paragraph> = ({
  title,
  description,
  images,
  buttons,
  currentLocale,
}) => {
  return (
    <section className='container py-24'>
      <div className='grid lg:grid-cols-12'>
        <div className='col-span-8 col-start-3'>
          <AnimatedBox>
            <h2 className='mb-10 text-k-2xl font-semibold leading-tight tracking-[-0.01em] sm:text-k-3xl'>
              {title}
            </h2>
          </AnimatedBox>

          <AnimatedBox>
            <p className='tracking-[0.02em] text-c-gray'>{description}</p>
          </AnimatedBox>

          {images?.data && (
            <div className='mt-12 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8'>
              {images?.data?.map((image, i) => (
                <AnimatedBox key={image.id} delay={((i % 2) + 1) / 10}>
                  <Image
                    src={image.attributes.url}
                    width={image.attributes.width}
                    height={image.attributes.height}
                    alt={image.attributes.alternativeText}
                    className='w-full rounded-xl border border-white/8'
                  />
                </AnimatedBox>
              ))}
            </div>
          )}

          {buttons && (
            <div className='mt-12 flex gap-6'>
              {buttons.map((itm, i) => (
                <AnimatedBox key={itm.Text} delay={((i % 2) + 1) / 10}>
                  <Button
                    url={itm.Link}
                    variant={itm.Primary ? 'primary' : 'secondary'}
                    currentLocale={currentLocale}
                  >
                    {itm.Text}
                  </Button>
                </AnimatedBox>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
