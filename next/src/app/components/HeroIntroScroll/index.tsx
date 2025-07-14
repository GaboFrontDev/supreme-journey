'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Button from '../Button';

const component = {
  title: 'Success is not final, failure is not fatal',
  description: 'It is the courage to continue that counts',
  image: '/images/hero.png',
  button: {
    label: 'Trabajemos Juntos',
    href: '/contact', 
  },
};

export default function HeroIntroScroll() {
  const { title, description, image, button } = component;
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yTitle = useSpring(useTransform(scrollYProgress, [0, 0.35], [400, 0]), {
    stiffness: 90,
    damping: 18,
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 0.75], [1, 1.25]), {
    stiffness: 80,
    damping: 20,
  });

  const opacityIn = useTransform(scrollYProgress, [0.36, 0.45], [0, 1]);
  const opacityOut = useTransform(scrollYProgress, [0.45, 0.5], [1, 1]);

  const opacityText = useTransform(scrollYProgress, (value) => {
    if (value < 0.36) return 0;
    if (value >= 0.5) return 1;
    return opacityIn.get() * opacityOut.get();
  });

  const shadowOpacity = useTransform(scrollYProgress, [0.01, 0.1], [0, 0.5]);

  return (
    <div ref={ref} className='relative h-[240vh] w-full'>
      <div className='sticky top-0 h-screen w-full'>
        <div className='absolute inset-0 overflow-hidden'>
          <motion.div 
            style={{ scale }} 
            className='absolute inset-0 z-0 flex items-center justify-center bg-black'
          >
            {false ? (
              <video
                src={image}
                autoPlay
                muted
                loop
                playsInline
                className='object-cover w-full h-full'
              />
            ) : (
              <Image
                src='/images/hero.png'
                alt='Hero background'
                fill
                className='object-cover'
                priority
              />
            )}
          </motion.div>

          <motion.div
            style={{ opacity: shadowOpacity }}
            className="absolute inset-0 z-10 bg-black/50 pointer-events-none"
          />

          <div className="absolute inset-0 z-10 flex items-center">
            <div className="max-w-7xl px-6 w-full mx-auto">
              <motion.h1
                style={{ y: yTitle }}
                className='max-w-md text-[56px] leading-[64px] font-bold text-white mb-8'
              >
                {title}
              </motion.h1>

              <motion.div
                style={{ opacity: opacityText }}
                className='max-w-xl'
              >
                <p className='text-lg text-white mb-8'>
                  {description}
                </p>
                <Button 
                  label={button.label || ''} 
                  variant="secondary" 
                  href={button.href} 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
