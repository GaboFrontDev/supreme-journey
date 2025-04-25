'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps {
  label: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  label, 
  href = '#', 
  variant = 'primary', 
  className = ''
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      className={clsx(
        'relative inline-block overflow-hidden rounded-full font-bold text-base py-3 px-7 tracking-tight-032 group',
        variant === 'primary' && 'text-white bg-[#636B69]',
        variant === 'secondary' && 'text-black bg-[#EFEFEF]',
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
        className={clsx(
          "absolute inset-0 origin-center scale-x-0 rounded-full group-hover:scale-x-100 z-0",
          variant === 'primary' && 'bg-white opacity-20',
          variant === 'secondary' && 'bg-c-gray-600 opacity-20'
        )}
      />
      <span className="relative z-10">{label}</span>
    </motion.a>
  );
}
