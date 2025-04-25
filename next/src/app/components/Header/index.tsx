'use client';

import { useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../Button';

export default function Header() {
  const { scrollY } = useScroll();

  const SCROLL_TRIGGER = 2100;
  const [isScrolled, setIsScrolled] = useState(false);

  const [logoSrc, setLogoSrc] = useState('/images/brand_white.png');
  const [translateSrc, setTranslateSrc] = useState('/icons/translate_white.png');
  const [variantButton, setVariantButton] = useState<'primary' | 'secondary'>('secondary');
  const [textColorClass, setTextColorClass] = useState('text-white');
  const [backgroundColorClass, setBackgroundColorClass] = useState('bg-white/10');

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      if (latest > SCROLL_TRIGGER) {
        setIsScrolled(true);
        setLogoSrc('/images/brand.png');
        setTranslateSrc('/icons/translate.png');
        setVariantButton('primary');
        setTextColorClass('text-[#636B69]');
        setBackgroundColorClass('bg-white');
      } else {
        setIsScrolled(false);
        setLogoSrc('/images/brand_white.png');
        setTranslateSrc('/icons/translate_white.png');
        setVariantButton('secondary');
        setTextColorClass('text-white');
        setBackgroundColorClass('bg-white/10');
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div
      className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 w-full max-w-7xl px-6 py-3 shadow-lg rounded-full backdrop-blur-sm ${backgroundColorClass}`}
    >
      <div className="flex justify-between items-center">
        <Image
          src={logoSrc}
          alt="Ares Logo"
          width={118}
          height={23}
          priority
        />
        <nav className="flex items-center space-x-4 font-bold text-base [&>a]:py-1 [&>a]:px-3 [&>a]:rounded-full [&>a]:transition-all">
          <a href="#" className={`flex items-center hover:bg-[#EFEFEF] ${textColorClass}`}>
            Proyectos
            <Image
              src="/icons/arrow_down.png"
              alt="Arrow"
              width={20}
              height={20}
              priority
            />
          </a>
          <a href="#" className={`hover:bg-[#EFEFEF] ${textColorClass}`}>El Estudio</a>
          <a href="#" className={`flex items-center hover:bg-[#EFEFEF] ${textColorClass}`}>
            Cultura Ares
            <Image
              src="/icons/arrow_down.png"
              alt="Arrow"
              width={20}
              height={20}
              priority
            />
          </a>
          <a href="#" className={`hover:bg-[#EFEFEF] ${textColorClass}`}>Blog</a>
        </nav>
        <div className='flex items-center space-x-6'>
          <a href="#" className={`flex items-center font-bold py-1 px-3 gap-2 rounded-full hover:bg-[#EFEFEF] transition-all ${textColorClass}`}>
            <Image
              src={translateSrc}
              alt="Translate"
              width={20}
              height={20}
              priority
            />
            ES
            <Image
              src="/icons/arrow_down.png"
              alt="Arrow"
              width={20}
              height={20}
              priority
            />
          </a>
          <Button label="Hablemos" variant={variantButton} />
        </div>
      </div>
    </motion.div>
  );
}
