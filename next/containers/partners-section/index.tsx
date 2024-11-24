import Image from 'next/image';
import { AnimatedBox } from '@/components/AnimatedBox';
import { Magazines } from '@/context/page/domain/PageEntity';

export const PartnersSection: React.FC<Magazines> = ({ images }) => (
  <section className='container grid justify-center px-6 pb-24 pt-20 lg:grid-cols-12'>
    <div className='col-span-8 col-start-3'>
      <div className='flex flex-wrap justify-center gap-6 sm:justify-between'>
        {images?.data?.map((image, i) => (
          <AnimatedBox key={i} delay={i / 10 + 0.1}>
            <Image
              src={image.attributes.url}
              width={image.attributes.width}
              height={image.attributes.height}
              alt={image.attributes.alternativeText}
            />
          </AnimatedBox>
        ))}
      </div>
    </div>
  </section>
);
