'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { Photos } from '@/context/page/domain/PageEntity';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export const ScrollSection: React.FC<Photos> = ({ values }) => {
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

  const imagesdata = [...values.data, ...values.data];

  return (
    <section className='flex overflow-hidden'>
      <motion.div
        className='flex h-[10.625rem] gap-6 sm:h-[13.5rem]'
        ref={ref}
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ margin: '0px 0px -50px 0px' }}
      >
        {imagesdata?.map((image, i) => (
          <motion.div
            key={i}
            className='relative aspect-video flex-shrink-0'
            variants={cardVariants}
          >
            <Image
              src={image.attributes.url}
              fill
              alt={image.attributes.alternativeText}
              priority
              className='w-full rounded-xl border border-white/8'
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
