'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function CarouselWrapper({ children }: { children: React.ReactNode }) {
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

    const scrollAmount = 500;
    const delta = direction === 'left' ? -scrollAmount : scrollAmount;

    container.scrollBy({
      left: delta,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
      <button
        onClick={() => scroll('left')}
        className="flex items-center justify-center absolute w-12 h-12 top-1/2 left-4 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg"
      >
        <Image src="/icons/arrow_left.png" width={24} height={24} alt="Left" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="flex items-center justify-center absolute w-12 h-12 top-1/2 right-4 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg"
      >
        <Image src="/icons/arrow_right.png" width={24} height={24} alt="Right" />
      </button>

      <div
        ref={containerRef}
        className={`scrollbar-hide overflow-x-auto snap-x snap-mandatory ${ dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="flex w-max gap-6 pl-[calc((100vw-1280px)/2)] pr-6">
          {children}
        </div>
      </div>
    </div>
  );
}
