import { TextTextComponent } from '@/types/strapiBlog';
import Section from '../Section';
import ReactMarkdown from 'react-markdown';

interface TextTextSectionProps {
  component: TextTextComponent;
}

export default function TextTextSection({ component }: TextTextSectionProps) {
  return (
    <Section width="max-w-7xl" paddingBottom='pb-8' paddingTop='pt-8'>
      <div className="md:grid grid-cols-2 gap-16">
        <div className="prose prose-lg flex flex-col items-center justify-center">
          <ReactMarkdown className='parsedown'>{component.leftText}</ReactMarkdown>
        </div>
        <div className="prose prose-lg flex flex-col items-center justify-center">
          <ReactMarkdown className='parsedown'>{component.rightText}</ReactMarkdown>
        </div>
      </div>
    </Section>
  );
} 