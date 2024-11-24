import { Montserrat, Manrope } from 'next/font/google';

import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getAllLocales, getSlugAndLocale } from '@/dynamicRendering/utils';
import { AppBackground } from '@/components/AppBackground';

const PrimaryFontFont = Manrope({
  subsets: ['latin'],
  variable: '--font-primary',
});

const SecondaryFontFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-secondary',
});

export const metadata: Metadata = {
  title: 'Kirliantech',
  description: 'Kirliantech description',
};

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
      <body
        className={`${PrimaryFontFont.variable} ${SecondaryFontFont.variable} font-primary
        text-white`}
      >
        <div className='flex min-h-screen flex-col'>
          <Header
            navigationLinks={[]}
            currentLocale={currentLocale}
            allLocales={allLocales}
          />
          <main className='relative z-10 flex-1 overflow-hidden'>
            <AppBackground />
            {children}
          </main>
          <Footer
            navigationLinks={[]}
            currentLocale={currentLocale}
          />
        </div>

      </body>
    </html>
  );
}
