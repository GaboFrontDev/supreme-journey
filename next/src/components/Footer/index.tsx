import { getUrlLocaleFromLang } from '@/dynamicRendering/utils';

export const Footer = ({
  navigationLinks,
  currentLocale,
}: {
  navigationLinks: INavigationLink[];
  currentLocale: string;
}) => {
  const urlLocale = getUrlLocaleFromLang(currentLocale);

  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="mt-auto border-t border-c-gray-800 bg-c-gray-950 pb-7 pt-5">
      <div className="container flex flex-wrap items-center justify-center gap-9">
        {navigationLinks?.map((itm, i) => (
          <a
            key={itm.id}
            href={`${urlLocale}/${itm.url}`}
            target='_blank'
            className="cursor-pointer text-xs leading-6 text-white transition-colors
              hover:text-c-gray-300"
          >
            {itm.title}
          </a>
        ))}

        <p className="text-xs leading-6 text-c-gray-500">
          {year} Inneractive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
