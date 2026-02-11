'use client';

import Image from '@/core/Image';
import Button from '../Button';
import { useRouter } from 'next/dist/client/components/navigation';

interface BlogCardProps {
  images: string[];
  date: string;
  title: string;
  slug: string;
  buttonLabel?: string;
  data ?: any;
}

export default function BlogCardComponent({
  images,
  date,
  title,
  slug,
  buttonLabel = 'Continuar Leyendo',
  data,
}: BlogCardProps) {
  console.log('BlogCard data:', data); // Log the data prop to see its contents
  // lazy import useRouter to avoid hydration issues
  const router = useRouter();
  return (
    <div className='items-center justify-between gap-6 px-2 py-8 md:flex md:px-0 md:py-0'>
      <div
        className='relative min-h-[218px] min-w-[196px] cursor-pointer overflow-hidden rounded-2xl'
        onClick={() => {
          router.push(`/blog/${slug}`);
        }}
      >
        <Image
          src={images[0]}
          alt='Imagen de blog'
          fill
          className='object-cover'
        />
      </div>
      <div className='relative flex flex-1 flex-col items-start justify-between gap-4'>
        <div>
          <span className='text-sm text-[#A1A1A1]'>{date}</span>
          <h2
            className='mt-2 max-w-md text-[20px] font-bold text-[#636B69] cursor-pointer'
            onClick={() => router.push(`/blog/${slug}`)}
          >
            {title}
          </h2>
        </div>
        <Button
          href={`/blog/${slug}`}
          label={buttonLabel}
          variant='secondary'
          className='text-sm'
        />
      </div>
    </div>
  );
}
