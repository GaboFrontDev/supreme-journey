'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

interface CarouselWrapperProps {
  children: React.ReactNode;
  arrowOffsetY?: string;
}

export default function CarouselWrapper({
  children,
  arrowOffsetY = '50%',
}: CarouselWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
    setDragging(true);
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    setDragging(false);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!isDragging.current || !container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeft.current - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    const delta = direction === 'left' ? -scrollAmount : scrollAmount;

    container.scrollBy({
      left: delta,
      behavior: 'smooth',
    });
  };

  return (
    <div className='relative w-screen select-none'>
      <button
        onClick={() => scroll('left')}
        style={{ top: arrowOffsetY }}
        className='absolute left-24 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center
          justify-center rounded-full bg-white shadow-lg md:flex'
      >
        <Image src='/icons/arrow_left.png' width={24} height={24} alt='Left' />
      </button>

      <button
        onClick={() => scroll('right')}
        style={{ top: arrowOffsetY }}
        className='absolute right-24 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center
          justify-center rounded-full bg-white shadow-lg md:flex'
      >
        <Image
          src='/icons/arrow_right.png'
          width={24}
          height={24}
          alt='Right'
        />
      </button>

      <div
        ref={containerRef}
        className={`scrollbar-hide snap-x snap-mandatory overflow-x-scroll
        md:overflow-x-auto md:pr-0 ${
          dragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className='flex w-max gap-6 pr-0 md:pr-0'>{children}</div>
      </div>
    </div>
  );
}
