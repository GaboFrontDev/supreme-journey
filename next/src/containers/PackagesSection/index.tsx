import { AnimatedBox } from '@/components/AnimatedBox';
import { Packages } from '@/context/page/domain/PageEntity';
import Image from 'next/image';

export const PackagesSection: React.FC<Packages> = ({
  title,
  description,
  packages,
}) => (
  <section className="container pb-20 pt-10 md:pt-28">
    <AnimatedBox>
      <h2
        className="mb-5 text-center text-3xl leading-tight tracking-[-1.44px] md:text-5xl
          lg:text-6xl"
      >
        {title}
      </h2>
    </AnimatedBox>

    <AnimatedBox>
      <p className="mb-16 text-center text-lg tracking-[-0.072px] text-c-gray-900 md:mb-20">
        {description}
      </p>
    </AnimatedBox>

    <div className="flex flex-col gap-8 lg:flex-row">
      {packages?.map((itm, i) => (
        <AnimatedBox
          key={itm.title}
          className="flex flex-col flex-1 rounded-3xl border border-c-gray-200 bg-white px-6 pt-6 lg:px-12
            lg:pt-12"
          delay={((i % 2) + 1) / 10}
        >
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-c-blue-500">
            <Image
              src='assets/images/center_focus_strong.svg'
              width={24}
              height={24}
              alt='camera focus icon'
            />
          </div>
          <h3 className="mb-4 text-[2.5rem] font-semibold tracking-[-0.4px] text-c-gray-950">
            {itm.title}
          </h3>
          <p className="mb-6 text-base text-c-gray-950">{itm.description}</p>
          <div className="mb-auto flex flex-col gap-3 pb-6">
            {itm.tagList?.map((tag) => (
              <p key={tag} className="text-c-blue-500">
                {tag}
              </p>
            ))}
          </div>

          {itm?.image?.data?.attributes?.url && (
            <Image
              className="mx-auto mt-6"
              src={itm.image?.data?.attributes.url}
              width={itm.image?.data?.attributes.width}
              height={itm.image?.data?.attributes.height}
              alt={itm.image?.data?.attributes.alternativeText}
            />
          )}
        </AnimatedBox>
      ))}
    </div>
  </section>
);
