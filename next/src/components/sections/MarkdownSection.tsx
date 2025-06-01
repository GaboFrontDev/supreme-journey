'use client';
import ReactMarkdown from 'react-markdown';
import { MarkdownComponent } from '@/types/strapiBlog';

interface ComponentProps {
  component: MarkdownComponent;
}

export default function MarkdownSection({ component }: ComponentProps) {
  const { content } = component;

  return (
    <section className='container pb-24 pt-12'>
      <div className='mx-auto max-w-3xl'>
        <ReactMarkdown
          className='parsedown'
          components={{
            a: (props) => (
              <a href={props.href} target='_blank' rel='noopener noreferrer'>
                {props.children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
}
