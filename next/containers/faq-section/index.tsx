'use client';
import { Accordeon } from '@/components/Accordion';
import { AnimatedBox } from '@/components/AnimatedBox';
import { FAQ } from '@/context/page/domain/PageEntity';

export const FaqSection: React.FC<FAQ> = ({ title, faqItems }) => {
  return (
    <section className='container py-24'>
      <div className='grid lg:grid-cols-12'>
        <div className='col-span-8 col-start-3'>
          <AnimatedBox>
            <h2
              className='mb-14 text-center text-k-2xl font-semibold leading-tight tracking-[-0.01em]
                sm:text-k-3xl'
            >
              {title}
            </h2>
          </AnimatedBox>

          <AnimatedBox delay={0.1}>
            <Accordeon data={faqItems} />
          </AnimatedBox>
        </div>
      </div>
    </section>
  );
};
