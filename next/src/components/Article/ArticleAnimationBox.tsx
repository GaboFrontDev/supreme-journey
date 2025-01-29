'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ArticleAnimationBox = ({
  animationDelay = 0.1,
  className,
  children,
}: {
  animationDelay?: number;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: animationDelay, type: 'spring', damping: 20 }}
    >
      {children}
    </motion.div>
  );
};
