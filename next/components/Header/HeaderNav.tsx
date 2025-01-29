import Link from 'next/link';
import { AnimatedBox } from '../AnimatedBox';

export const HeaderNav = ({
  navigationLinks,
}: {
  navigationLinks?: INavigationLink[];
}) => {
  return navigationLinks?.map((item, i) => (
    <AnimatedBox key={item.id} delay={((i % navigationLinks.length) + 1) / 10}>
      <Link
        href={`${item.url}`}
        className='text-sm font-bold uppercase leading-7 tracking-[0.08em] transition-colors
          hover:text-c-gray'
      >
        {item.title}
      </Link>
    </AnimatedBox>
  ));
};
