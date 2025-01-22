'use client';

import { motion, MotionProps } from 'framer-motion';

export type IAnimatedBox = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  marginOffset?: string;
}

const animationVariant = {
  initial: { opacity: 0, y: 30 },
  inView: { opacity: 1, y: 0 },
};

export const AnimatedBox = ({
  children,
  delay = 0,
  className = '',
  marginOffset = '0px 0px -50px 0px',
  ...rest
}: IAnimatedBox) => {
  return (
    <motion.div
      className={className}
      variants={animationVariant}
      initial='initial'
      whileInView='inView'
      transition={{
        delay: delay,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
      viewport={{ margin: marginOffset }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;