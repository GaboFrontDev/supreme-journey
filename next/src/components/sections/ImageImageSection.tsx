import Image from 'next/image';
import { ImageImageComponent } from '@/types/strapiBlog';
import Section from '../Section';

interface ImageImageSectionProps {
  component: ImageImageComponent;
}

export default function ImageImageSection({ component }: ImageImageSectionProps) {
  const { leftImage, rightImage } = component;

  return (
    <Section width="max-w-7xl">
      <div className="grid grid-cols-2 gap-8">
        {leftImage && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={leftImage.data.attributes.url}
              alt={leftImage.data.attributes.alternativeText || ''}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 640px"
            />
          </div>
        )}
        {rightImage && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={rightImage.data.attributes.url}
              alt={rightImage.data.attributes.alternativeText || ''}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 640px"
            />
          </div>
        )}
      </div>
    </Section>
  );
} 