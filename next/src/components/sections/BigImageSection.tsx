import Image from 'next/image';
import { BigImageComponent } from '@/types/strapiBlog';

interface BigImageSectionProps {
  component: BigImageComponent;
}

export default function BigImageSection({ component }: BigImageSectionProps) {
  const { imagen } = component;
  const imageUrl = imagen.data.attributes.url;
  return (
    <div className='relative h-[300px] md:h-[810px] w-full select-none overflow-hidden rounded-t-3xl' data-testid="big-image-section">
        <Image
          src={imageUrl}
          alt={component.alt}
          fill
          className='object-contain md:object-cover'
          sizes='(max-width: 1280px) 100vw, 1280px'
          priority
          quality={100}
          loading='eager'
        />
      </div>
  );
}
