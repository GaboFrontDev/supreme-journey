import { Figtree } from 'next/font/google';
import '@/styles/globals.css';
import { getAllLocales, getSlugAndLocale } from '@/dynamicRendering/utils';
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
          <main className='relative z-10 flex-1'>{children}</main>
        </div>

      </body>
    </html>
  );
}
