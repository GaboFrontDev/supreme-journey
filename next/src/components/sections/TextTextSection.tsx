import { TextTextComponent } from '@/types/strapiBlog';
import Section from '../Section';

interface TextTextSectionProps {
  component: TextTextComponent;
}

export default function TextTextSection({ component }: TextTextSectionProps) {
  return (
    <Section width="max-w-7xl">
      <div className="grid grid-cols-2 gap-16">
        <div className="prose prose-lg">
          <p>{component.leftText}</p>
        </div>
        <div className="prose prose-lg">
          <p>{component.rightText}</p>
        </div>
      </div>
    </Section>
  );
} 