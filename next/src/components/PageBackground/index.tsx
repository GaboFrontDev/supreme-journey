'use client';
import { motion } from 'framer-motion';

export const PageBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='home-page-bg'
    />
  );
};
