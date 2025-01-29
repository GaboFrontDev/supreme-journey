import { Metadata } from 'next';
import { getAllLocales, getSlugAndLocale, removeEmptyFields } from '../utils';
import { getPageBySlug } from '@/context/page/application/actions/getPageBySlug';
import { APP_BASE_URL } from '@/data/common';

// Dynamic default metadata
export async function dynamicDefaultMetadata({
  params,
}: IPageProps): Promise<Metadata> {
  const allLocales = await getAllLocales();
  const { currentLocale } = getSlugAndLocale(params?.slug, allLocales);

  const { data } = await getPageBySlug('global-metadata', currentLocale);
  const pageMetadata = removeEmptyFields(data[0]?.attributes?.metadata);

  return {
    title: pageMetadata?.title,
    description: pageMetadata?.description,
    keywords: pageMetadata?.keywords,
    robots: pageMetadata?.robots,
    twitter: pageMetadata?.twitter,
    openGraph: {
      ...pageMetadata.openGraph,
      type: 'website',
      locale: currentLocale,
      images: pageMetadata?.openGraph?.images,
    },
    category: pageMetadata?.category,
    classification: pageMetadata?.classification,

    // default metadata auto-generated
    metadataBase: new URL(APP_BASE_URL),
    applicationName: 'aura-imaging',
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      telephone: false,
      date: false,
      email: false,
      address: false,
    },
    icons: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
    // manifest: '/manifest.json',
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
    },
  };
}
