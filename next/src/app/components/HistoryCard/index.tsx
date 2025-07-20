'use client';

import Image from 'next/image';

interface SecondaryCard {
  title: string;
  description: string;
  image: string;
}

interface ProjectHistoryItem {
  year: string;
  yearColor?: string;
  lineColor?: string;
  cards: SecondaryCard[];
  id?: string;
}

export default function HistoryItem({
  year,
  yearColor,
  lineColor,
  cards,
  id,
}: ProjectHistoryItem) {
  const isDouble = cards.length > 1;

  return (
    <div className={`${isDouble ? 'w-[800px]' : 'w-[400px]'} px-4 select-none scroll-smooth`} id={id}>
      <div className="mb-20 border-b border-[#EFEFEF]">
        <h2
          className="relative inline-block text-[70px]"
          style={{ color: yearColor || '#407978' }}
        >
          {year}
          <span
            className="absolute bottom-0 left-0 h-2 w-full rounded-full"
            style={{ backgroundColor: lineColor || '#407978' }}
          />
        </h2>
      </div>
      <div className={`${isDouble ? 'flex' : ''}`}>
        {cards.map((card, index) => (
          <div key={index} className="border-r border-[#EFEFEF] px-5">
            <h2 className="h-[56px] text-lg font-bold text-black">{card.title}</h2>
            <p className="mb-4 h-[120px] text-base text-black">{card.description}</p>
            <div className="relative w-[358px] h-[380px] overflow-hidden rounded-xl">
              <Image src={card.image} alt={card.title} fill className="object-cover pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
