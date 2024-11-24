import React, { FC } from 'react';
import { MotionProps, motion } from 'framer-motion';

interface MenuButton {
  onClickHandler: () => void;
}

interface IPath extends MotionProps {
  d?: string;
}

const Path: FC<IPath> = (props) => (
  <motion.path
    fill='currentColor'
    strokeWidth={2}
    stroke='currentColor'
    {...props}
  />
);

export const MenuButton = ({ onClickHandler }: MenuButton) => {
  return (
    <motion.button
      className='relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/4
        focus:outline-none'
      variants={{
        closed: {
          rotate: 0,
        },
        open: {
          rotate: 180,
        },
      }}
      onClick={onClickHandler}
    >
      <svg width='22' height='19' viewBox='0 0 22 19'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M4 17L18 3Z' },
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M4 3L18 16.846Z' },
          }}
        />
      </svg>
    </motion.button>
  );
};
