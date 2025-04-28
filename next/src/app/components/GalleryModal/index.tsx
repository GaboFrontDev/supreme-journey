'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import CarouselWrapper from '../CarouselWrapper';

interface GalleryModalProps {
  images: string[];
  onClose: () => void;
}

export default function GalleryModal({ images, onClose }: GalleryModalProps) {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      >
        <div className="relative w-full max-w-7xl p-6">
          <button 
            onClick={onClose}
            className="absolute flex items-center justify-center h-12 w-12 pt-[3px] -top-12 right-6 text-[#636B69] text-3xl rounded-full bg-[#EFEFEF]"
          >
            <span>×</span>
          </button>
          <CarouselWrapper>
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="relative w-[1000px] h-[600px] flex-shrink-0 overflow-hidden rounded-xl"
              >
                <Image src={img} alt={`Imagen ${idx}`} fill className="object-cover pointer-events-none" />
              </div>
            ))}
          </CarouselWrapper>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
