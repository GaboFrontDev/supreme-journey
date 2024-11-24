import { getUrlLocaleFromLang } from '@/dynamicRendering/utils';
import { Fragment } from 'react';

export const Footer = ({
  navigationLinks,
  currentLocale,
}: {
  navigationLinks: INavigationLink[];
  currentLocale: string;
}) => {
  const urlLocale = getUrlLocaleFromLang(currentLocale);

  return (
    <footer className='z-10 mt-auto flex justify-center gap-3 bg-c-dark py-9'>
      {navigationLinks?.map((itm, i) => (
        <Fragment key={itm.id}>
          <a
            href={`${urlLocale}/${itm.url}`}
            target='_blank'
            className='cursor-pointer text-xl text-white/50 hover:text-gray-900'
          >
            {itm.title}
          </a>

          {navigationLinks.length - 1 !== i && (
            <span className='text-xl text-white/50'>·</span>
          )}
        </Fragment>
      ))}
    </footer>
  );
};
