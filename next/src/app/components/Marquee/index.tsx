'use client';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: { name: string; bold?: boolean }[];
  direction?: 'left' | 'right';
}

export default function Marquee({
  items,
  direction = 'left',
}: MarqueeProps) {
  const duplicated = [...items, ...items];
  const animationX = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: animationX }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: 'linear',
        }}
      >
        {duplicated.map((item, index) => (
          <div
            key={index}
            className={`inline-flex whitespace-nowrap text-lg text-[#636B69] py-2 px-6 tracking-tight-032 rounded-full bg-white ${ item.bold ? 'font-bold' : '' }`}
          >
            {item.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}