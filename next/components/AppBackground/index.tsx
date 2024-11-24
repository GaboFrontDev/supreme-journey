'use client';
import { motion } from 'framer-motion';

const containerScene = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export const AppBackground = () => {
  return (
    <div className='app-backgound'>
      <motion.div
        variants={containerScene}
        initial='hidden'
        animate='show'
        className='layout-background'
      >
        <motion.span
          variants={listItem}
          className='layout-background-circle-1'
        />
        <motion.span
          variants={listItem}
          className='layout-background-circle-2'
        />
        <motion.span
          variants={listItem}
          className='layout-background-circle-3'
        />
        <motion.span
          variants={listItem}
          className='layout-background-circle-4'
        />
      </motion.div>
      <div className='app-lights' />
    </div>
  );
};
