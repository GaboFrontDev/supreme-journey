'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { memo, useEffect, useState } from 'react';
import { HeroFolderCarousel } from '@/context/page/domain/PageEntity';

const AUTOPLAY_TIMEOUT = 5000;

const animationVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 20, opacity: 0 },
};

export const FolderCarousel = memo(
  ({ data }: { data: HeroFolderCarousel[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }, AUTOPLAY_TIMEOUT);

      return () => clearInterval(intervalId); // Cleanup on unmount
    }, [data.length]);

    return (
      <div className='relative'>
        <div
          className='clip-folder-small sm:clip-folder-big drop relative grid bg-white px-8 pb-4 pt-4
            sm:p-8'
        >
          {data?.map((slide, i) => (
            <motion.div
              initial={{ zIndex: 0 }}
              animate={{ zIndex: i === activeIndex ? 1 : 0 }}
              key={slide.id}
              className='col-start-1 row-start-1 grid sm:grid-cols-7'
            >
              <div className='col-span-3 mb-6 flex flex-col sm:mb-0 sm:pt-16'>
                <span className='mb-4 text-right text-c-blue-500 sm:mb-0 sm:text-left'>
                  SOFTWARE
                </span>

                <motion.h2
                  variants={animationVariants}
                  initial='hidden'
                  animate={i === activeIndex ? 'visible' : 'hidden'}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                  }}
                  className='mb-4 mt-auto text-[2.5rem] tracking-[-0.4px]'
                >
                  {slide.alternativeText}
                </motion.h2>

                <motion.p
                  variants={animationVariants}
                  initial='hidden'
                  animate={i === activeIndex ? 'visible' : 'hidden'}
                  transition={{
                    delay: 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                  }}
                  className='pr-9 text-base text-c-gray-900'
                >
                  {slide.caption}
                </motion.p>
              </div>

              <div
                className='relative col-span-4 aspect-[19/17] overflow-hidden rounded-2xl border
                  border-c-gray-100'
              >
                {slide?.photo?.data?.attributes.url ? (
                  <Image
                    src={slide.photo.data.attributes.url}
                    fill
                    alt='customize_expirience'
                  />
                ) : (
                  <div className='absolute left-0 top-0 size-full bg-c-gray-950' />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className='mt-5 flex items-center'>
          <p className='w-1/5 flex-shrink-0 text-lg '>
            {(activeIndex + 1).toString().padStart(2, '0')}/
            {data?.length.toString().padStart(2, '0')}
          </p>

          <div className='relative flex h-[6px] flex-1 rounded-xl bg-c-gray-500'>
            <motion.div
              initial={{ left: 0 }}
              animate={{ left: (activeIndex / data.length) * 100 + '%' }}
              className='absolute h-full rounded-xl bg-black'
              style={{ width: `${(1 / data.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    );
  }
);

FolderCarousel.displayName = 'FolderCarousel';
