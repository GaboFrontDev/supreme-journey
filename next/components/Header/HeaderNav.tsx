import Link from 'next/link';
import { AnimatedBox } from '../AnimatedBox';

export const HeaderNav = ({
  navigationLinks,
}: {
  navigationLinks?: INavigationLink[];
}) => {

  return navigationLinks?.map((itm, i) => (
    <AnimatedBox key={itm.id} delay={((i % navigationLinks.length) + 1) / 10}>
      <Link
        href={`${itm.url}`}
        className='text-sm font-bold uppercase leading-7 tracking-[0.08em] transition-colors
          hover:text-c-gray'
      >
        {itm.title}
      </Link>
    </AnimatedBox>
  ));
};
