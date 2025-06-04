import Image from 'next/image';
import { BigImageComponent } from '@/types/strapiBlog';
import Section from '../Section';

interface BigImageSectionProps {
  component: BigImageComponent;
}

export default function BigImageSection({ component }: BigImageSectionProps) {
  const { imagen } = component;
  const imageUrl = imagen.data.attributes.url;
  const imageWidth = imagen.data.attributes.width;
  const imageHeight = imagen.data.attributes.height;
  return (
    <Section
      width='w-full'
      className='px-0'
    >
      <div className='relative h-[810px] w-full overflow-hidden'>
        <Image
          src={imageUrl}
          alt={component.alt}
          fill
          className='object-cover'
          sizes='(max-width: 1280px) 100vw, 1280px'
          priority
        />
      </div>
    </Section>
  );
}
