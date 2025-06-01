import { SectionComponent } from '@/types/strapiBlog';
import TextTextSection from './TextTextSection';
import BigImageSection from './BigImageSection';
import ImageImageSection from './ImageImageSection';
import TextImageSection from './TextImageSection';
import ImageTextSection from './ImageTextSection';
import MarkdownSection from './MarkdownSection';

interface SectionRendererProps {
  component: SectionComponent;
}

export default function SectionRenderer({ component }: SectionRendererProps) {
  switch (component.__component) {
    case 'shared.text-text':
      return <TextTextSection component={component} />;
    case 'shared.bigimage':
      return <BigImageSection component={component} />;
    case 'shared.image-image':
      return <ImageImageSection component={component} />;
    case 'shared.text-image':
      return <TextImageSection component={component} />;
    case 'shared.image-text':
      return <ImageTextSection component={component} />;
    case 'shared.markdown':
      return <MarkdownSection component={component} />;
    default:
      return null;
  }
} 