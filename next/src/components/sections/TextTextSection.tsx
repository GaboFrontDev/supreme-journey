import { TextTextComponent } from '@/types/strapiBlog';
import Section from '../Section';
import ReactMarkdown from 'react-markdown';

interface TextTextSectionProps {
  component: TextTextComponent;
}

export default function TextTextSection({ component }: TextTextSectionProps) {
  return (
    <Section width="max-w-7xl">
      <div className="grid grid-cols-2 gap-16">
        <div className="prose prose-lg flex flex-col items-center justify-center">
          <ReactMarkdown>{component.leftText}</ReactMarkdown>
        </div>
        <div className="prose prose-lg flex flex-col items-center justify-center">
          <ReactMarkdown>{component.rightText}</ReactMarkdown>
        </div>
      </div>
    </Section>
  );
} 