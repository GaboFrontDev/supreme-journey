import { AnimatedBox } from '../AnimatedBox';

type HeroProps = {
  title: string;
  description: string;
  image: string;
  showDescription?: boolean;
};

const Hero = ({ title, description, image, showDescription = false }: HeroProps) => {
  return (
    <div className='z-1 relative left-0 top-0 h-full w-full max-w-[1440px] max-h-[1024px] overflow-hidden'>
      <div className='w-[1440px] h-[1024px] bg-[url(https://picsum.photos/1440/1024)] bg-fixed'>
      </div>
      <div className='w-[1440px] h-[1024px] bg-black/50'>
        <AnimatedBox className='absolute bottom-24 left-36 p-4'>
            <h1 className='text-white text-6xl font-bold w-2/3'>{title}</h1>
            {showDescription && <p className='text-white text-14'>{description}</p>}
        </AnimatedBox>
      </div>
    </div>
  );
};

export default Hero;
