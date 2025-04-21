export async function getAllLocales(): Promise<LocaleItem[]> {
  try {
    const resp = await fetch(`${process.env.STRAPI_API_URL}/i18n/locales`, {
      headers: {
        Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    });
    const parsedResp = await resp.json();

    if (parsedResp.length) {
      const localCodes = parsedResp.map((localItem: any) => ({
        code: localItem.code,
        lang: localItem.name,
      }));
      return localCodes;
    }

    return [];
  } catch (err) {
    console.log('err:', err);
    return [];
  }
}

export const getSlugAndLocale = (
  slug: string[],
  localesCollection: LocaleItem[]
) => {
  const flatLocalesList = localesCollection?.map((itm) => itm.code) || [];

  const localeFromSlug = slug ? slug[0] : 'en';

  const currentLocale = flatLocalesList.includes(localeFromSlug)
    ? localeFromSlug
    : 'en';

  const pageSlug = currentLocale === 'en' ? slug : slug.slice(1);

  return {
    currentLocale,
    pageSlug: pageSlug?.join('/') || 'home',
  };
};

export const getUrlLocaleFromLang = (currentLang: string) => {
  const urlLocale = currentLang === 'en' ? '' : `/${currentLang}`;

  return urlLocale;
};

type AnyObject = { [key: string]: any };

export function removeEmptyFields<T extends AnyObject>(
  obj: T | null
): Partial<T> {
  if (obj === null) {
    return {};
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      acc[key as keyof T] = value;
    }
    return acc;
  }, {} as Partial<T>);
}

export const summarizeDescription = (desc: string) => {
  const splittedDesc = desc.split(' ');
  let summarized = '';

  for (const word of splittedDesc) {
    if (summarized.length + word.length > 155)
      return summarized.trim() + ` ...`;
    else summarized += `${word} `;
  }

  return summarized.trim();
};
