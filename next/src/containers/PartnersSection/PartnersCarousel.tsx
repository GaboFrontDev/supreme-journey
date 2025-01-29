'use client';

import { MediaArray } from '@/context/page/domain/PageEntity';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useMeasure from 'react-use-measure';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export const PartnersCarousel = ({ data: { data } }: { data: { data: MediaArray } }) => {
  let [ref, { width }] = useMeasure();

  const totalWidth = width / 2 + 12;

  return (
    <div
      className="relative flex overflow-hidden pb-28 before:absolute before:right-0 before:z-10
        before:h-full before:w-16 before:bg-gradient-to-r before:from-transparent
        before:to-c-gray-50 after:absolute after:left-0 after:h-full after:w-16
        after:bg-gradient-to-r after:from-c-gray-50 after:to-transparent"
    >
      <motion.div
        className='marquee-animtion flex items-center gap-6 pt-10'
        style={
          {
            '--marquee-final-point': `${-totalWidth}px`,
          } as React.CSSProperties
        }
        ref={ref}
        initial='hidden'
        whileInView='visible'
        transition={{ staggerChildren: 0.1 }}
        viewport={{ margin: '0px 0px -50px 0px' }}
      >
        {[...data, ...data].map((itm, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            style={{ width: itm.attributes.width }}
          >
            <Image
              src={itm.attributes.url}
              width={itm.attributes.width}
              height={itm.attributes.height}
              alt={itm.attributes.alternativeText}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
