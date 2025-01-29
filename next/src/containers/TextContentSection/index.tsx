import ReactMarkdown from 'react-markdown';
import { TextContent } from '@/context/page/domain/PageEntity';

export const TextContentSection: React.FC<TextContent> = ({
  Title,
  Content,
}) => (
  <section className='container pb-24 pt-48'>
    <div className='mx-auto max-w-3xl'>
      {Title && (
        <h1 className='mb-10 text-4xl font-semibold md:text-6xl'>{Title}</h1>
      )}

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
        {Content}
      </ReactMarkdown>
    </div>
  </section>
);
