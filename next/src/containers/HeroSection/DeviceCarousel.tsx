'use client';

import { memo, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@/Icons/ArrowRightIcon';
import Link from 'next/link';
import { HeroMediaCarousel } from '@/context/page/domain/PageEntity';

const AUTOPLAY_TIMEOUT = 5000;

export const DeviceCarousel = memo(
  ({ data }: { data: HeroMediaCarousel[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const paginationItemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }, AUTOPLAY_TIMEOUT);

      return () => clearInterval(intervalId); // Cleanup on unmount
    }, [data.length]);

    useEffect(() => {
      if (paginationItemRefs.current[activeIndex]) {
        const parentElement =
          paginationItemRefs.current[activeIndex]?.parentElement; // The parent div that holds all pagination items
        const element = paginationItemRefs.current[activeIndex];

        if (parentElement && element) {
          const elementGap = 8; // The gap between each pagination item
          const elementWidth = element.clientWidth;

          if (activeIndex === 0) {
            parentElement.scrollTo({
              left: 0, // Scroll to the end of the parent container
              behavior: 'smooth',
            });
          } else {
            // Scroll the parent div to bring the active element into view
            parentElement.scrollTo({
              left: elementWidth + elementGap,
              behavior: 'smooth', // Optional for smooth scrolling
            });
          }
        }
      }
    }, [activeIndex]);

    return (
      <div className='group'>
        <div className='mx-auto flex w-64 gap-2 overflow-hidden'>
          {data?.map((itm, i) => (
            <div
              ref={(el) => (paginationItemRefs.current[i] = el)}
              className='relative h-20 w-20 shrink-0 overflow-hidden rounded-full border
                border-c-gray-200 bg-white p-6'
              key={itm.id}
            >
              <Image
                src={itm.photo.data.attributes.url}
                fill
                alt={itm.photo.data.attributes.alternativeText}
                className='object-contain px-2 py-4'
              />

              <div className='pointer-events-none absolute -bottom-2 -left-2 -right-2 -top-2'>
                <svg
                  viewBox='0 0 48 48'
                  className={`countdown group-[.isHovered]:[animation-play-state:paused] ${
                    activeIndex === i ? 'block' : ''
                  }`}
                  style={
                    {
                      '--animation-duration': `${AUTOPLAY_TIMEOUT}ms`,
                    } as React.CSSProperties
                  }
                >
                  <circle cx='24' cy='24' r='19'></circle>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className='grid'>
          {data?.map((itm, i) => (
            <div
              key={itm.id}
              className={`col-start-1 row-start-1 opacity-0 transition-opacity duration-500 ${
                activeIndex === i ? 'z-10 opacity-100' : 'z-0'
              }`}
            >
              <div className='w-100 duration-300s relative mt-20 aspect-[39/28] lg:mt-28 '>
                <Image
                  src={itm.photo.data.attributes.url}
                  fill
                  alt={itm.photo.data.attributes.alternativeText}
                />
              </div>
              <div className='sm:pl-[40%] lg:pl-0'>
                <p className='mb-6 mt-8 whitespace-pre-wrap text-[2rem] font-medium leading-tight'>
                  {itm.alternativeText}
                </p>
                <Link
                  href='#'
                  className='inline-flex items-center gap-2 text-sm'
                >
                  Get Pricing <ArrowRightIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

DeviceCarousel.displayName = 'DeviceCarousel';
