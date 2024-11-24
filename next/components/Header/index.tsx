'use client';

import { Suspense, useCallback, useEffect, useState } from 'react';
import { MenuButton } from './MenuButton';
import { HeaderNav } from './HeaderNav';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import { motion } from 'framer-motion';
import { HeaderRouteChangeListener } from './HeaderRouteChangeListener';
import { LogoLink } from './LogoLink';
import { getUrlLocaleFromLang } from '@/dynamicRendering/utils';
import { AnimatedBox } from '../AnimatedBox';
import { LocaleSwitcher } from './LocaleSwitcher';

export const Header = ({
  navigationLinks,
  currentLocale,
  allLocales,
}: ILayout) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const urlLocale = getUrlLocaleFromLang(currentLocale);

  useEffect(() => {
    // initialy check scroll position
    setIsScrolled(window.scrollY > 150);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const headerContainnerClasses = isScrolled ? 'py-4 bg-c-dark' : 'py-9';

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
        <div className='container relative flex items-center md:justify-between'>
          <LogoLink
            url={urlLocale || '/'}
            className='z-10 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2'
          />

          <div className='hidden items-center md:flex md:w-full md:justify-between'>
            <HeaderNav
              navigationLinks={navigationLinks}
              currentLocale={currentLocale}
            />
          </div>

          <AnimatedBox delay={0.25} className='ml-auto md:ml-3'>
            <LocaleSwitcher currentLang={currentLocale} langList={allLocales} />
          </AnimatedBox>

          <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className='h-11 w-11 md:hidden'
          >
            <MenuButton
              onClickHandler={() => setIsOpen((prevState) => !prevState)}
            />
            {isOpen && (
              <HeaderMobileMenu
                navigationLinks={navigationLinks}
                currentLocale={currentLocale}
              />
            )}
          </motion.nav>
        </div>
      </div>
    </header>
  );
};
