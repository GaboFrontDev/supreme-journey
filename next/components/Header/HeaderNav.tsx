import Link from 'next/link';
import { AnimatedBox } from '../AnimatedBox';
import { getUrlLocaleFromLang } from '@/dynamicRendering/utils';

export const HeaderNav = ({
  navigationLinks,
  currentLocale,
}: {
  navigationLinks?: INavigationLink[];
  currentLocale: string;
}) => {
  const urlLocale = getUrlLocaleFromLang(currentLocale);

  return navigationLinks?.map((itm, i) => (
    <AnimatedBox key={itm.id} delay={((i % navigationLinks.length) + 1) / 10}>
      <Link
        href={`${urlLocale}/${itm.url}`}
        className='text-sm font-bold uppercase leading-7 tracking-[0.08em] transition-colors
          hover:text-c-gray'
      >
        {itm.title}
      </Link>
    </AnimatedBox>
  ));
};
