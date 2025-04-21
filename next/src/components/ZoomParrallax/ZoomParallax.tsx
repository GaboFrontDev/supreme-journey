import { motion } from 'framer-motion';

function ZoomParallax({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative h-[100vh] w-[100vw]'>
      <div className='sticky top-0 h-[100vh] w-[100vw] bg-c-red-800 z-10'>{children}</div>
    </div>
  );
}

export default ZoomParallax;
