import { categoryQueryParams, projectQueryParams } from "@/app/blog/consts";
import { CategoriaProyectoData, PageData, StrapiResponse } from "@/app/projects/strapi";
import qs from "qs";

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

export const fetchWithToken = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
    ...options,
  });
  return response.json() as Promise<T>;
};


export const getProjects = async () => {
  const response = await fetchWithToken(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/proyects?${qs.stringify(projectQueryParams)}`);
  const data = await response as StrapiResponse<PageData>;
  return data;
}

export const getCategories = async () => {
  const response = await fetchWithToken(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categoria-proyectos?${qs.stringify(categoryQueryParams)}`);
  const data = await response as StrapiResponse<CategoriaProyectoData>;
  return data;
}