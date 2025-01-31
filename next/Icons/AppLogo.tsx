import { motion } from "framer-motion";

const draw = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const drawIcon = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export const AppLogoIcon = ({ className }: { className?: string }) => (
  <motion.svg
    width="100"
    height="40"
    viewBox="0 0 100 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    initial="hidden"
    animate="visible"
    transition={{
      staggerChildren: 0.03,
    }}
  >
    <motion.path
      variants={drawIcon}
      d="M22.29,2.71v2.25c-2.25-1.87-5.13-2.98-8.28-2.98C6.82,1.98,1,7.8,1,14.99C1,22.17,6.82,28,14.01,28
			c3.15,0,6.03-1.11,8.28-2.98v2.37h4.72V2.71H22.29z M22.29,15.84c-0.43,4.2-3.98,7.48-8.28,7.48c-4.61,0-8.33-3.73-8.33-8.33
			s3.72-8.33,8.33-8.33c4.31,0,7.85,3.28,8.28,7.48c0.03,0.28,0.04,0.56,0.04,0.85C22.34,15.28,22.33,15.56,22.29,15.84z"
      fill="white"
    />
    <motion.path
      variants={drawIcon}
      d="M69.67,19.58c-1.26,2.65-3.59,3.97-6.97,3.97c-2.4,0-4.33-0.64-5.75-1.91c-1.43-1.27-2.21-2.94-2.38-5.02h19.9
		c0.12-0.74,0.17-1.44,0.17-2.06c0-3.59-1.12-6.55-3.35-8.92c-2.24-2.37-5.28-3.54-9.16-3.54c-3.73,0-6.78,1.24-9.11,3.71
		c-2.33,2.46-3.5,5.55-3.5,9.26c0,3.85,1.21,6.98,3.64,9.38c2.43,2.39,5.52,3.54,9.39,3.54l0,0c2.93,0,5.4-0.69,7.42-2.06
		c2.02-1.36,3.47-3.01,4.35-4.95c0,0,0.24-0.7,0.16-1.39H69.67z M56.93,8.48c1.38-1.29,3.11-1.94,5.23-1.94
		c2.19,0,3.95,0.62,5.26,1.87c1.31,1.24,2.05,2.85,2.21,4.81H54.57C54.76,11.35,55.55,9.77,56.93,8.48z"
      fill="white"
    />
    <motion.path
      variants={drawIcon}
      d="M97.3,15.89c-1.13-1-2.69-1.79-4.7-2.39l-6.47-1.89c-1.75-0.55-2.62-1.36-2.62-2.44c0-0.79,0.4-1.48,1.2-2.08
		c0.8-0.6,1.82-0.91,3.05-0.91c1.44,0,2.69,0.33,3.75,1.01c1.06,0.67,1.84,1.48,2.34,2.46h4.78C98.56,9,98.44,8.72,98.34,8.31
		c-0.73-1.84-2.03-3.35-3.9-4.5c-1.86-1.15-4.08-1.72-6.63-1.72c-2.57,0-4.77,0.69-6.59,2.1c-1.82,1.41-2.71,3.09-2.71,5.05
		c0,3.04,1.94,5.14,5.81,6.31l6.54,1.96c1.11,0.33,1.91,0.72,2.41,1.15C93.76,19.1,94,19.7,94,20.44c0,0.93-0.47,1.72-1.42,2.37
		c-0.94,0.65-2.17,0.98-3.68,0.98c-1.68,0-3.16-0.43-4.44-1.32c-1.15-0.8-1.96-1.79-2.44-2.96h-1.4h-3.58
		c0.08,0.49,0.22,0.99,0.22,0.99c0.64,2.08,2.01,3.85,4.13,5.31c2.12,1.46,4.56,2.2,7.32,2.2L88.82,28c2.95,0,5.38-0.74,7.29-2.22
		c1.91-1.48,2.88-3.33,2.88-5.55C99,18.33,98.43,16.9,97.3,15.89z"
      fill="white"
    />
    <motion.path
      variants={drawIcon}
      d="M45.32,2.44c-0.15,0-0.29,0-0.43,0.01c-0.06,0-0.11-0.01-0.17-0.01c-0.11,0-0.21,0.01-0.32,0.01
		c-0.17,0-0.34,0.01-0.51,0.02c-0.22,0.01-0.45,0.02-0.67,0.04c-0.39,0.04-0.77,0.09-1.15,0.15c-1.63,0.31-3.23,1.03-4.47,2.29V4.72
		V2.72l-4.75,0v8.22v9.38v7.08h4.75v-0.98v-7.21v-2.05v-1.96c0-0.45,0.02-0.93,0.05-1.41c0.22-2.95,1.66-5.3,4.63-6.11
		c0.54-0.15,2.92-0.91,6.39,0.14V2.95C47.64,2.67,46.53,2.5,45.32,2.44z"
      fill="white"
    />
  </motion.svg>
);
