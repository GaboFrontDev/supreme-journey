import { Montserrat, Manrope } from 'next/font/google';

import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/Header';
import { getAllPages } from '@/context/page/application/actions/getAllPages';

const PrimaryFontFont = Manrope({
  subsets: ['latin'],
  variable: '--font-primary',
});

const SecondaryFontFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-secondary',
});

export const metadata: Metadata = {
  title: 'Ares',
  description: 'Ares Architectos',
};


export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const pages = await getAllPages();
  const navigationLinks: INavigationLink[] = pages.data.map((page) => {
    return {
      id: +page.id,
      title: page.title,
      url: page.slug,
    };
  });
  return (
    <html lang={'es'}>
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
            navigationLinks={navigationLinks}
            currentLocale={'es'}
            allLocales={[]}
          />
          <main className='relative z-10 flex-1 overflow-hidden'>
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
