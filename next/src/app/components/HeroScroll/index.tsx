'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Section from '../Section';

export default function HeroScroll() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'start start']
  });

  const rawScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.75]);
  const rawY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
  const rawY2 = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });
  const y2 = useSpring(rawY2, { stiffness: 80, damping: 20 });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [window.innerWidth]);

  return (
    <Section width="max-w-7xl overflow-hidden md:overflow-visible" paddingTop="pt-0">
      <div
        ref={ref}
        className="relative md:h-[610px] h-[250px] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/map_pattern.png"
          alt="Patrón de mapa"
          fill
          className="object-cover"
        />

        <motion.h2
          style={{ scale, y: isMobile ? y2 : y }}
          className="md:block hidden absolute max-w-4xl text-[34px] md:text-[84px] leading-[30px] md:leading-[96px] text-center text-black"
        >
          Experiencia global, enfoque local
        </motion.h2>

        <h2
          className="md:hidden block absolute max-w-4xl text-[34px] md:text-[84px] leading-[30px] md:leading-[96px] text-center text-black"
        >
          Experiencia global, enfoque local
        </h2>
      </div>
    </Section>
  );
}
