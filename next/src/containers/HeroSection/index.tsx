import { SmallFolderBlock } from './SmallFolderBlock';
import { FolderCarousel } from './FolderCarousel';
import { AnimatedBox } from '@/components/AnimatedBox';
import { DeviceCarousel } from './DeviceCarousel';

import { PageBackground } from '@/components/PageBackground';
import { Hero } from '@/context/page/domain/PageEntity';
import Button from '@/components/Button';

export const HeroSection: React.FC<Hero> = ({
  title,
  subTitle,
  heroButtons,
  heroDeviceCarousel,
  heroFolderCarousel,
  smallFolder,
  currentLocale,
}) => {
  return (
    <section className="container pt-32 lg:pt-44">
      <PageBackground />
      <div className="flex flex-col sm:pl-[40%] lg:grid lg:grid-cols-12 lg:pl-0">
        <div className="lg:col-span-7 lg:col-start-2">
          <AnimatedBox delay={0.05} className="mb-6">
            <h1 className="text-5xl leading-tight md:text-6xl lg:text-[4.75rem]">
              {title}
            </h1>
          </AnimatedBox>

          <AnimatedBox delay={0.1} className="mb-14 max-w-xl">
            <p className="text-xl">{subTitle}</p>
          </AnimatedBox>

          <div className="flex flex-col gap-4 sm:flex-row">
            {heroButtons?.map((itm, i) => (
              <AnimatedBox key={i} delay={i / 10 + 0.15}>
                <Button
                  key={itm.Text}
                  className="w-full min-w-40 sm:w-auto"
                  currentLocale={currentLocale}
                >
                  {itm.Text}
                </Button>
              </AnimatedBox>
            ))}
          </div>
        </div>

        <div className="mt-[500px] sm:mt-10 lg:col-span-4">
          <AnimatedBox delay={0.25}>
            <DeviceCarousel data={heroDeviceCarousel} />
          </AnimatedBox>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6 sm:-mt-16 lg:grid-cols-12 lg:gap-0">
        <AnimatedBox
          delay={0.3}
          className="col-span-5 drop-shadow-folder lg:col-span-7"
        >
          <FolderCarousel data={heroFolderCarousel} />
        </AnimatedBox>

        <AnimatedBox
          delay={0.35}
          className="-order-1 col-span-5 drop-shadow-folder sm:col-span-3 lg:order-1 lg:col-span-4
            lg:col-start-9"
        >
          <SmallFolderBlock {...smallFolder} />
        </AnimatedBox>
      </div>
    </section>
  );
};
