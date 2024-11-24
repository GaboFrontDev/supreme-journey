import { AnimatedBox } from '@/components/AnimatedBox';
import { Review } from '@/context/page/domain/PageEntity';
import Image from 'next/image';

export const TestimonialsSection: React.FC<Review> = ({ title, items }) => {
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

          <AnimatedBox className='flex flex-wrap gap-6' delay={0.1}>
            {items.map((review, i) => (
              <blockquote
                key={i}
                className='flex-grow basis-80 rounded-xl border border-white/8 bg-c-gray/2 p-8'
              >
                <Image
                  src='/assets/images/blockquote_icon.svg'
                  width={28}
                  height={28}
                  alt='blockquote icon'
                />
                <p className='mb-8 mt-6 text-lg leading-tight tracking-[0.02em]'>
                  {review.reviewContent}
                </p>
                <p className='font-secondary text-sm font-bold uppercase leading-tight tracking-[0.08em]'>
                  {review.userName}
                </p>
              </blockquote>
            ))}
          </AnimatedBox>
        </div>
      </div>
    </section>
  );
};
