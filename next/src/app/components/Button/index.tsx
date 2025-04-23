'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps {
  label: string;
  href?: string;
  className?: string;
}

export default function Button({ label, href = '#', className = '' }: ButtonProps) {
  return (
    <motion.a
      href={href}
      className={clsx(
        'relative inline-block overflow-hidden rounded-full font-bold text-base text-white py-3 px-7 tracking-tight-032 bg-[#636B69] group',
        className
      )}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.span
        variants={{
          rest: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 0.15 },
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute inset-0 bg-white opacity-20 origin-center scale-x-0 rounded-full group-hover:scale-x-100 z-0"
      />
      <span className="relative z-10">{label}</span>
    </motion.a>
  );
}
