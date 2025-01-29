'use client';
import { motion, MotionProps } from 'framer-motion';

interface IAnimatedBox extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedArticle = ({
  children,
  delay = 0,
  className = '',
  ...rest
}: IAnimatedBox) => {
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, type: 'spring', stiffness: 100, damping: 20 }}
      {...rest}
    >
      {children}
    </motion.article>
  );
};
