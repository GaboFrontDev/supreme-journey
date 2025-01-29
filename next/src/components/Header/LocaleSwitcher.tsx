'use client';

import { memo } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getUrlLocaleFromLang } from '@/dynamicRendering/utils';

export const LocaleSwitcher = memo(
  ({
    langList,
    currentLang,
  }: {
    langList?: LocaleItem[];
    currentLang: string;
  }) => {
    const pathname = usePathname();
    const currentLocale = getUrlLocaleFromLang(currentLang);

    const pathWithoutLang = !currentLocale
      ? pathname
      : `/${pathname.split('/').slice(2).join('/')}`;

    return (
      <div className='group relative z-10 flex items-center px-3 py-2'>
        <GlobeIcon className='z-10 transition-colors group-hover:text-black' />

        <div
          className='pointer-events-none absolute right-0 top-0 flex flex-col rounded-lg bg-white
            opacity-0 transition-all group-hover:pointer-events-auto group-hover:pt-10
            group-hover:opacity-100'
        >
          {langList?.map(({ lang, code }) => (
            <Link
              className='hover:bg-c-primary flex px-4 py-1 text-lg text-black transition-colors
                hover:bg-c-blue-500 hover:text-white'
              href={`${code === 'en' ? '' : `/${code}`}${pathWithoutLang}`}
              key={code}
            >
              {lang.split(' ')[0]}
            </Link>
          ))}
        </div>
      </div>
    );
  }
);
LocaleSwitcher.displayName = 'LocaleSwitcher';

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='currentColor'
    viewBox='0 0 256 256'
    className={className}
  >
    <path d='M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z' />
  </svg>
);
