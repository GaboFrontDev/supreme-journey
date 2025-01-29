'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatedBox } from '@/components/AnimatedBox';
import { HowItWorksCarousel } from '@/context/page/domain/PageEntity';

const containerAnimationVariants = {
  inactive: { opacity: 0 },
  active: { opacity: 1 },
};

const textBoxAnimationVariants = {
  inactive: { opacity: 0, y: 30 },
  active: { opacity: 1, y: 0 },
};

const DELAY = 4000;

export const HiwCarouselSection: React.FC<HowItWorksCarousel> = ({ steps }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % 3);
    }, DELAY);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const getContainerClasses = (direction: string) => {
    return direction === 'right' ? '-right-40' : '-left-40';
  };

  return (
    <section className="container">
      <div className="text-center md:grid md:grid-cols-12">
        <div className="md:col-span-8 md:col-start-3">
          <AnimatedBox className="relative grid">
            {steps?.map((itm, i) => (
              <motion.div
                key={itm.stepTitle}
                variants={containerAnimationVariants}
                initial='inactive'
                animate={currentSlide === i ? 'active' : 'inactive'}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                }}
                className='col-start-1 row-start-1'
              >
                <div className="relative pb-[94%]">
                  {itm?.image?.data?.attributes?.url && (
                    <Image
                      src={itm.image.data.attributes.url}
                      fill
                      alt={itm.image.data.attributes.alternativeText}
                    />
                  )}
                </div>
                <motion.div
                  variants={textBoxAnimationVariants}
                  initial='inactive'
                  animate={currentSlide === i ? 'active' : 'inactive'}
                  transition={{
                    delay: 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                  }}
                  className={`z-10 rounded-xl text-center lg:absolute lg:top-44 lg:max-w-sm lg:border-2
            lg:border-c-gray-200 lg:bg-c-gray-100 lg:p-8 lg:text-left ${getContainerClasses(itm.textPosition)}`}
                >
                  <p className="mb-3 text-3xl lg:whitespace-pre-wrap">
                    {itm.stepTitle}
                  </p>
                  <p className="text-base">{itm.stepDescription}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatedBox>
        </div>
      </div>
    </section>
  );
};
