import { AnimatedBox } from "@/components/AnimatedBox";
import CONFIG from "@/config";
import { Hero } from "@/context/page/domain/PageEntity";
import Image from "next/image";

export const HeroSection: React.FC<Hero> = ({ title, media }) => {
  return (
    <section className="container grid justify-center pb-24 pt-64 sm:pb-48 sm:pt-72 lg:grid-cols-12">
      <div className="col-span-8 col-start-3">
        <Image
          src={CONFIG.STRAPI_URL + media.url}
          alt={media.alternativeText}
          fill
          sizes="100vw"
        />
        <AnimatedBox>
          <h1 className="mb-6 text-center text-k-3xl font-semibold leading-none lg:text-k-6xl ">
            {title}
          </h1>
        </AnimatedBox>
      </div>
    </section>
  );
};
