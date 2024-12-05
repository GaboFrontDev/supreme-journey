import { AnimatedBox } from '@/components/AnimatedBox';
import { Paragraph } from '@/context/page/domain/PageEntity';

export const ParagraphContentSection: React.FC<Paragraph> = ({
  content,
}) => {
  return (
    <section className='container py-24'>
      <div className='grid lg:grid-cols-12'>
        <div className='col-span-8 col-start-3'>
          <AnimatedBox>
            <p className='tracking-[0.02em] text-c-gray'>{content}</p>
          </AnimatedBox>
        </div>
      </div>
    </section>
  );
};
