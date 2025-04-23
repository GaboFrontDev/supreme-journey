'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Section from '../Section';

export default function HeroScroll() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'start start']
  });

  const rawScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.75]);
  const rawY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);

  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  return (
    <Section width="max-w-7xl" paddingTop="pt-0">
      <div
        ref={ref}
        className="relative h-[610px] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/map_pattern.png"
          alt="Patrón de mapa"
          fill
          className="object-cover"
        />

        <motion.h2
          style={{ scale, y }}
          className="absolute max-w-4xl text-[84px] leading-[96px] text-center text-black"
        >
          Experiencia global, enfoque local
        </motion.h2>
      </div>
    </Section>
  );
}
