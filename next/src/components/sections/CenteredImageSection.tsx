import Image from 'next/image';
import { CenteredImageComponent } from '@/types/strapiBlog';
import Section from '../Section';

interface BigImageSectionProps {
  component: CenteredImageComponent;
}

export default function BigImageSection({ component }: BigImageSectionProps) {
  const { image } = component;
  const imageUrl = image.data.attributes.url;
  const imageWidth = image.data.attributes.width;
  const imageHeight = image.data.attributes.height;

  return (
    <Section width="max-w-7xl">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={imageUrl}
          alt={component.alt}
          fill
          className="object-cover"
          sizes="(max-width: 2048px) 100vw, 1280px"
          priority
        />
      </div>
    </Section>
  );
} 