'use client';

import { WhatClientsSayReviews } from '@/context/page/domain/PageEntity';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useMeasure from 'react-use-measure';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export const TestimonialCarousel = ({
  data,
}: {
  data: WhatClientsSayReviews[];
}) => {
  let [ref, { width }] = useMeasure();

  const totalWidth = width / 2 - 24;

  const containerVariants = {
    visible: {
      x: [0, -totalWidth],
      transition: {
        staggerChildren: 0.1,
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 75,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className='flex gap-6 py-20'
        ref={ref}
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ margin: '0px 0px -50px 0px' }}
      >
        {[...data, ...data].map((itm, i) => (
          <motion.div key={i} className='w-96' variants={cardVariants}>
            <div className="flex flex-col rounded-xl bg-white p-10 shadow-testimonial">
              <p className="text-2xl font-light">“{itm.reviewContent}“</p>
              <div className="mt-10 flex select-none items-center">
                {itm?.avatar?.data?.attributes?.url ? (
                  <Image
                    src={itm?.avatar?.data?.attributes?.url}
                    width={56}
                    height={56}
                    alt={itm?.avatar?.data?.attributes?.alternativeText}
                    className="mr-6 h-14 w-14 flex-shrink-0 select-none rounded-full"
                  />
                ) : (
                  <div className="mr-6 h-14 w-14 flex-shrink-0 select-none rounded-full bg-c-gray-950" />
                )}

                <div>
                  <p className="mb-1 text-lg font-semibold">{itm.userName}</p>
                  <p className="text-lg text-c-gray-900">{itm.position}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
