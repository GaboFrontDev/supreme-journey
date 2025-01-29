import Link from 'next/link';
import { AnimatedBox } from '../AnimatedBox';
import { getUrlLocaleFromLang } from '@/dynamicRendering/utils';

export const HeaderNav = ({ navigationLinks, currentLocale }: ILayout) => {
  const urlLocale = getUrlLocaleFromLang(currentLocale);

  return navigationLinks?.map((itm, i) => (
    <AnimatedBox key={itm.id} delay={((i % navigationLinks.length) + 1) / 10}>
      <Link href={`${urlLocale}/${itm.url}`}>{itm.title}</Link>
    </AnimatedBox>
  ));
};
