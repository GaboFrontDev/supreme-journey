'use client';
import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ProjectCardProps {
  title: string;
  location: string;
  categories?: string[];
  image: string;
  contentWhite?: boolean;
  parentCategory?: string;
}

const formatTitleToUrl = (title: string) => {
  // replace tildes too
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/~/g, '')
    .replace('i', 'i')
    .replace('é', 'e')
    .replace('ú', 'u')
    .replace('ó', 'o')
    .replace('á', 'a')
    .replace('í', 'i')
    .replace('ñ', 'n')
    .replace('ü', 'u')
    .replace('ç', 'c')
    .replace('ñ', 'n');
};

export default function ProjectCard({
  title,
  location,
  categories,
  image,
  contentWhite = false,
  parentCategory,
}: ProjectCardProps) {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [window.innerWidth]);

  return (
    <div
      className={`w-[85dvw] overflow-hidden rounded-xl md:min-w-[620px] ${
        contentWhite ? 'bg-white' : 'bg-[#F5F5F5]'
      } select-none`}
    >
      <div
        className='relative h-[300px] w-full cursor-pointer overflow-hidden rounded-2xl
          md:h-[380px] md:w-full'
        onClick={() => {
          router.push(`/projects/${parentCategory}/${formatTitleToUrl(title)}`);
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className='pointer-events-none object-cover'
        />
      </div>
      <div className='p-6'>
        <div className='flex items-start justify-between'>
          <div className='mb-8'>
            <h3 className='mb-1 text-xl font-bold text-black'>{title}</h3>
            <p className='text-lg font-light text-[#A1A1A1]'>{location}</p>
          </div>
          {!isMobile && <Button
            href={`/projects/${parentCategory}/${formatTitleToUrl(title)}`}
            label='Ver proyecto'
            className='text-xs p-0 md:py-2 md:px-4'
          />}
        </div>
        <div className='flex flex-wrap gap-2 md:flex-nowrap'>
          {categories
            ?.slice(0, isMobile ? 1 : categories.length)
            .map((cat, i) => {
              const categoryUrl = formatTitleToUrl(cat);
              return categoryUrl ? (
                <Link
                  key={i}
                  href={`/projects/${categoryUrl}`}
                  className='rounded-full border border-black/15 px-4 py-[6px] text-xs font-semibold
                    text-black hover:underline'
                >
                  {cat}
                </Link>
              ) : (
                <span
                  key={i}
                  className='rounded-full border border-black/15 px-4 py-[6px] text-xs font-semibold
                    text-black'
                >
                  {cat}
                </span>
              );
            })}
          {isMobile && categories && categories.length > 1 && (
            <span
              className='rounded-full border border-black/15 px-4 py-[6px] text-xs font-semibold
                text-black'
            >
              +{categories.length - 1}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
