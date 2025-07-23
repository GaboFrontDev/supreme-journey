import Image from 'next/image';
import { CenteredImageComponent } from '@/types/strapiBlog';
import Section from '../Section';

interface CenteredImageProps {
  component: CenteredImageComponent;
}

export default function CenteredImage({ component }: CenteredImageProps) {
  const { image } = component;
  const imageUrl = image.data.attributes.url;

  return (
    <Section width="max-w-7xl" data-testid="centered-image-section">
      <div className="relative w-full md:aspect-[16/9] aspect-[16/10] overflow-hidden md:rounded-2xl" data-testid="centered-image-section-image">
        <Image
          src={imageUrl}
          alt={component.alt}
          fill
          className="object-contain md:object-cover"
          sizes="(max-width: 2048px) 100vw, 1280px"
          priority
          quality={100}
        />
      </div>
    </Section>
  );
} 