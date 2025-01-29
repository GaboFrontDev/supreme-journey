'use client';

import { useEffect, useState } from 'react';
import { HeaderNav } from './HeaderNav';
import { LogoLink } from './LogoLink';

export const Header = ({
  navigationLinks,
}: Partial<ILayout>) => {
  const [isScrolled, setIsScrolled] = useState(false);

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


  const headerContainnerClasses = isScrolled ? 'py-4 bg-c-dark' : 'py-9';

  return (
    <header className={'sticky left-0 top-0 z-20'}>
      <div
        className={`${headerContainnerClasses} absolute left-0 top-0 z-10 w-full transition-all`}
      >
        <div className='container relative flex items-center justify-between'>
          <LogoLink
            url={'/'}
            className='z-10 left-10 flex items-center'
          />

          <div className='flex justify-between gap-10 items-center'>
            <HeaderNav
              navigationLinks={navigationLinks}
            />
          </div>

        </div>
      </div>
    </header>
  );
};
