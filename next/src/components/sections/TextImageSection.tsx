import Image from 'next/image';
import { TextImageComponent } from '@/types/strapiBlog';
import Section from '../Section';

interface TextImageSectionProps {
  component: TextImageComponent;
}

export default function TextImageSection({ component }: TextImageSectionProps) {
  const { text, image } = component;
  return (
    <Section width='max-w-7xl text-image-section'>
      <div className='grid grid-cols-2 gap-16'>
        <div className='prose prose-lg'>
          <p>{text}</p>
        </div>
        <div className='relative aspect-[4/3] overflow-hidden rounded-2xl'>
          <Image
            src={image.data.attributes.url}
            alt={image.data.attributes.alternativeText || ''}
            fill
            className='object-cover'
            sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 640px'
          />
        </div>
      </div>
    </Section>
  );
}
