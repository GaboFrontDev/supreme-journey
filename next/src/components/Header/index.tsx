'use client';

import { Suspense, useCallback, useEffect, useState } from 'react';
import { MenuButton } from './MenuButton';
import { HeaderNav } from './HeaderNav';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import { AnimatePresence, motion } from 'framer-motion';
import { HeaderRouteChangeListener } from './HeaderRouteChangeListener';
import Link from 'next/link';
import { AppLogoIcon } from '@/Icons/AppLogo';
import Button from '@/components/Button';
import { AnimatedBox } from '../AnimatedBox';
import { CONTACT_SALES_EMAIL_URL, GET_PRICING_ANCHOR } from '@/data/global';
import { getUrlLocaleFromLang } from '@/dynamicRendering/utils';
import { LocaleSwitcher } from './LocaleSwitcher';

export const Header = ({
  currentLocale,
  allLocales,
  navigationLinks,
}: ILayout) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const urlLocale = getUrlLocaleFromLang(currentLocale);

  useEffect(() => {
    // initialy check scroll position
    setIsScrolled(window.scrollY > 1);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const headerContainnerClasses = isScrolled ? 'py-4 bg-c-gray-50' : 'py-9';

  const onPageChangeHandler = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className={'sticky left-0 top-0 z-20'}>
      <Suspense>
        <HeaderRouteChangeListener onPageChangeHandler={onPageChangeHandler} />
      </Suspense>
      <div
        className={`${headerContainnerClasses} absolute left-0 top-0 z-10 w-full transition-all`}
      >
        <div className='container relative flex items-center justify-between'>
          <Link href={urlLocale || '/'} className='z-10 flex items-center mr-auto'>
            <AppLogoIcon />
          </Link>

          <div className='mx-auto hidden items-center gap-12 lg:flex'>
            <HeaderNav
              currentLocale={currentLocale}
              navigationLinks={navigationLinks}
            />
          </div>

          <AnimatedBox delay={0.05} className='ml-auto mr-2 md:mr-4'>
            <LocaleSwitcher currentLang={currentLocale} langList={allLocales} />
          </AnimatedBox>

          <div className='hidden items-center gap-2 lg:flex'>
            <AnimatedBox delay={0.2}>
              <Button url={GET_PRICING_ANCHOR} variant='secondary'>
                Contact Sales
              </Button>
            </AnimatedBox>
            <AnimatedBox delay={0.25}>
              <Button url={CONTACT_SALES_EMAIL_URL}>Get Pricing</Button>
            </AnimatedBox>
          </div>

          <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className='h-11 w-11 lg:hidden'
            transition={{ type: 'spring' }}
          >
            <MenuButton
              onClickHandler={() => setIsOpen((prevState) => !prevState)}
            />
            <AnimatePresence>
              {isOpen && (
                <HeaderMobileMenu
                  currentLocale={currentLocale}
                  navigationLinks={navigationLinks}
                />
              )}
            </AnimatePresence>
          </motion.nav>
        </div>
      </div>
    </header>
  );
};
