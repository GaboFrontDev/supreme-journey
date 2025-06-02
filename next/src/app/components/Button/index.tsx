'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import Image from 'next/image';

interface ButtonProps {
  label: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  iconFilter?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ 
  label, 
  href = '#', 
  variant = 'primary', 
  iconFilter = false,
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) {
  if (type === 'submit') {
    return (
      <motion.button
      className={clsx(
        `relative inline-block overflow-hidden rounded-full font-bold text-base py-3 ${iconFilter ? 'pl-14 pr-7' : 'px-7'} tracking-tight-032 group`,
        variant === 'primary' && 'text-white bg-[#636B69]',
        variant === 'secondary' && 'text-black bg-[#EFEFEF]',
        className
      )}
      whileHover="hover"
      initial="rest"
      animate="rest"
      type={type}
      disabled={disabled}
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
      {
        iconFilter && 
          <Image 
            src="/icons/filter.png" 
            alt="Ordenar" 
            width={24} 
            height={24} 
            className="object-cover pointer-events-none ml-5 left-0 absolute" 
          />
      }
      <span className="relative z-10">{label}</span>
    </motion.button>
    );
  }
  
  return (
    <motion.a
      href={href}
      className={clsx(
        `relative inline-block overflow-hidden rounded-full font-bold text-base py-3 ${iconFilter ? 'pl-14 pr-7' : 'px-7'} tracking-tight-032 group`,
        variant === 'primary' && 'text-white bg-[#636B69]',
        variant === 'secondary' && 'text-black bg-[#EFEFEF]',
        className
      )}
      whileHover="hover"
      initial="rest"
      animate="rest"
      type={type}
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
      {
        iconFilter && 
          <Image 
            src="/icons/filter.png" 
            alt="Ordenar" 
            width={24} 
            height={24} 
            className="object-cover pointer-events-none ml-5 left-0 absolute" 
          />
      }
      <span className="relative z-10">{label}</span>
    </motion.a>
  );
}
