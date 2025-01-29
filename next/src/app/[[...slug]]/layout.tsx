import { Figtree } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FOOTER_MOCK_DATA, HEADER_MOCK_DATA } from '@/data/common';
import { getAllLocales, getSlugAndLocale } from '@/dynamicRendering/utils';
import { RefererAndLandingTracker } from '@/components/RefererAndLandingTracker';
import { dynamicDefaultMetadata } from '@/dynamicRendering/metadata/dynamicDefaultMetadata';

const PrimaryFont = Figtree({
  subsets: ['latin'],
  variable: '--font-primary',
});

export async function generateMetadata({ params }: IPageProps) {
  return await dynamicDefaultMetadata({ params });
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: ISlugParamType;
}>) {
  const allLocales = await getAllLocales();
  const { currentLocale } = getSlugAndLocale(params?.slug, allLocales);

  return (
    <html lang={currentLocale}>
      <head>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='icon' type='image/png' href='/favicon.png' />
      </head>
      <body className={`${PrimaryFont.variable} font-primary`}>
        <div className='flex min-h-screen flex-col'>
          <Header
            navigationLinks={HEADER_MOCK_DATA.navigationLinks}
            currentLocale={currentLocale}
            allLocales={allLocales}
          />
          <main className='relative z-10 flex-1'>{children}</main>
          <Footer
            navigationLinks={FOOTER_MOCK_DATA.navigationLinks}
            currentLocale={currentLocale}
          />
        </div>

        <RefererAndLandingTracker />
      </body>
    </html>
  );
}
