import { Montserrat, Manrope } from 'next/font/google';

import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/Header';

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
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            navigationLinks={[{ id: 1, title: 'Inicio', url: '/' }, { id: 2, title: 'Proyectos', url: '/proyectos' }, { id: 3, title: 'Contacto', url: '/contacto' }]}
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
