'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ArticleAnimationBox = ({
  animationDelay = 0.1,
  children,
}: {
  animationDelay?: number;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: animationDelay,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};
