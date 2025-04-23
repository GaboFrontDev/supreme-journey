'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../Button';

export default function Header() {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const backgroundColor = useTransform(backgroundOpacity, (o) => `rgba(255, 255, 255, ${0.14 * o})`);

  return (
    <motion.div
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-full max-w-7xl px-6 py-3 shadow-lg rounded-full backdrop-blur-sm bg-white/70"
      >
      <div className="flex justify-between items-center">
        <Image
          src="/images/brand.png"
          alt="Ares Logo"
          width={100}
          height={19}
          priority
        />
        <nav className="flex items-center space-x-6 font-bold text-base text-[#636B69]">
          <a href="#" className='flex items-center'>
            Proyectos
            <Image
              src="/icons/arrow_down.png"
              alt="Ares Logo"
              width={20}
              height={20}
              priority
            />
          </a>
          <a href="#">El Estudio</a>
          <a href="#" className='flex items-center'>
            Cultura Ares
            <Image
              src="/icons/arrow_down.png"
              alt="Ares Logo"
              width={20}
              height={20}
              priority
            />
          </a>
          <a href="#">Blog</a>
        </nav>
        <div className='flex items-center space-x-6'>
          <a href="#" className='flex items-center font-bold text-[#636B69] gap-2'>
            <Image
              src="/icons/translate.png"
              alt="Ares Logo"
              width={20}
              height={20}
              priority
            />
            ES
            <Image
              src="/icons/arrow_down.png"
              alt="Ares Logo"
              width={20}
              height={20}
              priority
            />
          </a>
          <Button label='Hablemos' />
        </div>
      </div>
    </motion.div>
  );
}
