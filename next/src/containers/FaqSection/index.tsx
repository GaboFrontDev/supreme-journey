import { Accordeon } from '@/components/Accordeon';
import { AnimatedBox } from '@/components/AnimatedBox';
import { FAQ } from '@/context/page/domain/PageEntity';

export const FaqSection: React.FC<FAQ> = ({
  Title,
  helpText,
  helpTitle,
  FaqItems,
}) => {
  return (
    <section className="container md:py-28">
      <div className="grid gap-9 lg:grid-cols-2 lg:gap-32">
        <div className="flex flex-col">
          <AnimatedBox>
            <h2 className="mb-auto text-3xl leading-tight tracking-[-1.44px] md:text-5xl lg:text-6xl">
              {Title?.HeadingText}
            </h2>
          </AnimatedBox>
          <div className="mt-auto">
            <AnimatedBox>
              <p className="mb-4 text-lg font-semibold">{helpTitle}</p>
            </AnimatedBox>
            <AnimatedBox>
              <p className="text-c-gray-900">{helpText}</p>
            </AnimatedBox>
          </div>
        </div>

        <AnimatedBox delay={0.1}>
          <Accordeon data={FaqItems} />
        </AnimatedBox>
      </div>
    </section>
  );
};
