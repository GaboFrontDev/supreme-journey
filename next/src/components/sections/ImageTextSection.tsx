import Image from 'next/image';
import { ImageTextComponent } from '@/types/strapiBlog';
import Section from '../Section';
import ReactMarkdown from 'react-markdown';

interface ImageTextSectionProps {
  component: ImageTextComponent;
}

export default function ImageTextSection({ component }: ImageTextSectionProps) {
  const { text, image } = component;

  return (
    <Section width="max-w-7xl">
      <div className="md:grid grid-cols-2 gap-16">
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={image.data.attributes.url}
              alt={image.data.attributes.alternativeText || ''}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 640px"
            />
          </div>
        )}
        {text && (
          <div className="prose prose-lg flex flex-col items-center justify-center">
            <ReactMarkdown className='parsedown'>{text}</ReactMarkdown>
          </div>
        )}
      </div>
    </Section>
  );
} 