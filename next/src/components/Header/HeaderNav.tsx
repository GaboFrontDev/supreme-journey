import Link from 'next/link';
import { AnimatedBox } from '../AnimatedBox';
import { getUrlLocaleFromLang } from '@/dynamicRendering/utils';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button';
import { AppLogoIcon } from '@/Icons/AppLogo';

const Links = ({ navigationLinks, currentLocale, className }: ILayout) => {
  const urlLocale = getUrlLocaleFromLang(currentLocale);
  const classes = twMerge('flex items-center justify-center', className);
  return navigationLinks?.map((itm, i) => (
    <section className={classes} key={i}>
      <Link href={`${urlLocale}/${itm.url}`}>{itm.title}</Link>
    </section>
  ));
};

const Logo = () => {
  return (
    <section>
      <Link href={`/`}>
        <AppLogoIcon className='' />
      </Link>
    </section>
  );
};

const ContactButton = () => {
  return (
    <Button className='rounded-full bg-white text-black h-12'>Hablemos</Button>
  );
};

export const HeaderNav = ({
  navigationLinks,
  currentLocale,
  className,
}: ILayout) => {
  return (
    <section className='bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center h-3/4 w-[80vw] px-2 py-2 z-10'>
      <div className='grid w-full grid-cols-12 items-center justify-center text-base text-white'>
        <div className='col-span-3 flex items-center justify-start'>
          <Logo />
        </div>
        <div className='no-wrap col-span-6 grid grid-cols-4 items-center justify-center gap-1'>
          <Links
            navigationLinks={navigationLinks}
            currentLocale={currentLocale}
            className={className}
          />
        </div>

        <div className='col-span-3 flex items-center justify-end'>
          <ContactButton />
        </div>
      </div>
    </section>
  );
};
