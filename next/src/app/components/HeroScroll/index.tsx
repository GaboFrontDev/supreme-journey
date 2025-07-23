'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Section from '../Section';

export default function HeroScroll() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'start start'],
  });

  const rawScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.75]);
  const rawY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
  const rawY2 = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });
  const y2 = useSpring(rawY2, { stiffness: 80, damping: 20 });
const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [window.innerWidth]);


  return (
    <Section
      width='max-w-7xl overflow-hidden md:overflow-visible'
      paddingTop='pt-0'
      paddingBottom='pb-0'
    >
      <div
        ref={ref}
        className='relative flex h-[250px] items-center justify-center overflow-hidden md:h-[500px]'
      >
        <Image
          src='/images/map_pattern.png'
          alt='Patrón de mapa'
          fill
          className='object-cover'
        />

        <motion.h2
          style={{ scale, y: isMobile ? y2 : y }}
          className='absolute hidden max-w-4xl text-center text-[34px] leading-[30px] text-black
            md:block md:text-[84px] md:leading-[96px]'
        >
          Experiencia global, enfoque local
        </motion.h2>

        <h2
          className='absolute block max-w-4xl text-center text-[34px] leading-[30px] text-black
            md:hidden md:text-[84px] md:leading-[96px]'
        >
          Experiencia global, enfoque local
        </h2>
      </div>
    </Section>
  );
}
