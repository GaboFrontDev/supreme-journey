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


  return {
    currentLocale: 'es',
    pageSlug: slug || 'home',
  };
};


type AnyObject = { [key: string]: any };
