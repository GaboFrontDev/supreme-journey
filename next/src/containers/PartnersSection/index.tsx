import { AnimatedBox } from '@/components/AnimatedBox';
import { PartnersCarousel } from './PartnersCarousel';
import { Magazines } from '@/context/page/domain/PageEntity';

export const PartnersSection: React.FC<Magazines> = ({ title, images }) => (
  <section className="container pt-28">
    <AnimatedBox>
      <p className="text-center text-xl font-medium">{title}</p>
    </AnimatedBox>

    <PartnersCarousel data={images} />
  </section>
);
