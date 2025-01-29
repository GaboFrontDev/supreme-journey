import { AnimatedBox } from '@/components/AnimatedBox';
import { TestimonialCarousel } from './TestimonialCarousel';
import { WhatClientsSay } from '@/context/page/domain/PageEntity';

export const FeedbackSection: React.FC<WhatClientsSay> = ({
  title,
  description,
  reviews,
}) => {
  return (
    <section className="md:pt-28">
      <div className="container">
        <AnimatedBox>
          <h2
            className="mb-5 text-center text-3xl leading-tight tracking-[-1.44px] md:text-5xl
              lg:text-6xl"
          >
            {title}
          </h2>
        </AnimatedBox>

        <AnimatedBox>
          <p className="text-center text-lg tracking-[-0.072px] text-c-gray-900">
            {description}
          </p>
        </AnimatedBox>
      </div>

      <TestimonialCarousel data={reviews} />
    </section>
  );
};
