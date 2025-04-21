import { AnimatedBox } from '@/components/AnimatedBox';
import Button from '@/components/Button';
import { WhatItIs } from '@/context/page/domain/PageEntity';
import Image from 'next/image';

export const HowItWorksSection: React.FC<WhatItIs> = ({
  title,
  description,
  cards,
  currentLocale,
}) => {
  const parts = title.split(/(Aura Imaging Camera)/g);

  return (
    <section className="pb-10 md:container md:py-20 ">
      <div
        className="rounded-[40px] border-[20px] border-white bg-gradient-to-r from-c-blue-50
          to-c-gray-50 px-4 pb-4 pt-20 shadow-custom1 md:px-16 md:pb-16 lg:rounded-[48px]
          lg:border-[24px]"
      >
        <AnimatedBox>
          <h2 className="mb-5 text-center text-4xl leading-tight tracking-[-1.44px] md:text-5xl">
            {parts.map((part, index) =>
              part === 'Aura Imaging Camera' ? (
                <span key={index} className="text-c-blue-600">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </h2>
        </AnimatedBox>

        <AnimatedBox>
          <p className="mb-16 text-center text-lg tracking-[-0.072px] text-c-gray-900 md:mb-20">
            {description}
          </p>
        </AnimatedBox>

        <div className="flex flex-col gap-6 lg:flex-row">
          {cards.map((itm, i) => (
            <AnimatedBox
              key={itm.title}
              className={`relative flex aspect-[3/4] flex-1 flex-col overflow-hidden rounded-3xl p-8
              ${cards.length - 1 === i ? 'clip-folder-image' : ''}`}
              delay={((i % 3) + 1) / 10}
            >
              {itm?.image?.data?.attributes?.url ? (
                <Image
                  src={itm.image.data.attributes.url}
                  alt={itm.image.data.attributes.alternativeText}
                  fill
                />
              ) : (
                <div className="absolute left-0 top-0 size-full bg-c-gray-950" />
              )}
              <div className="relative mt-auto">
                <p className="whitespace-pre-wrap text-2xl font-medium leading-normal text-white">
                  {itm.title}
                </p>
                <p className="mt-3 text-base tracking-[-0.064px] text-c-gray-50">
                  {itm.description}
                </p>

                {itm.buttonLabel && itm.buttonUrl && (
                  <Button
                    className="mt-6"
                    currentLocale={currentLocale}
                  >
                    {itm.buttonLabel}
                  </Button>
                )}
              </div>
            </AnimatedBox>
          ))}
        </div>
      </div>
    </section>
  );
};
