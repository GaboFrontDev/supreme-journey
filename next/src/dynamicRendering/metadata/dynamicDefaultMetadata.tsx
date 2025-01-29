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

  const pageMetadata = {
    title: 'demo',
    description: 'demo',
    keywords: 'demo',
    robots: 'demo',
    twitter: 'demo',
    openGraph: {
      images: 'demo',
      type: 'website',
      locale: currentLocale,
    },
    category: 'demo',
    classification: 'demo',
    metadataBase: new URL(APP_BASE_URL),
    applicationName: 'demo',
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
  };

  return {
    title: pageMetadata?.title,
    description: pageMetadata?.description,
    keywords: pageMetadata?.keywords,
    robots: pageMetadata?.robots,
    twitter: null,
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
