import { ArrowRightIcon } from '@/Icons/ArrowRightIcon';
import { AnimatedBox } from '@/components/AnimatedBox';
import Button from '@/components/Button';
import Image from 'next/image';
import { ProductsSlides } from '@/context/page/domain/PageEntity';

export const FeaturesSection: React.FC<ProductsSlides> = ({
  slideItem,
  currentLocale,
}) => (
  <section className="container mb-20">
    {slideItem.map((feature) => (
      <div
        key={feature.title}
        className="flex flex-col-reverse border-t border-t-c-gray-300 py-10 last:border-b
          last:border-b-c-gray-300 md:grid md:grid-cols-12"
      >
        <div className="flex flex-col items-start px-6 md:col-span-5">
          <AnimatedBox>
            <h2 className="mb-4 mt-6 text-5xl">{feature.title}</h2>
          </AnimatedBox>
          <AnimatedBox delay={0.05}>
            <p className="text-xl font-semibold capitalize text-c-blue-600">
              {feature.title}
            </p>
          </AnimatedBox>
          <AnimatedBox delay={0.1}>
            <p className="mb-6 mt-auto pt-6 text-base text-c-gray-800">
              {feature.description}
            </p>
          </AnimatedBox>
          <AnimatedBox delay={0.15}>
            <Button
              currentLocale={currentLocale}
            >
              {feature.buttonText}
            </Button>
          </AnimatedBox>
        </div>
        <div className="px-6 md:col-span-6 md:col-start-7">
          <AnimatedBox className="relative pb-[84%]" delay={0.17}>
            {feature?.media?.data?.attributes?.url && (
              <Image
                src={feature.media.data.attributes.url}
                fill
                alt={feature.media.data.attributes.alternativeText}
              />
            )}
          </AnimatedBox>
        </div>
      </div>
    ))}
  </section>
);
