import '@/styles/globals.css';
import { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from './components/Footer';
import { getCoordinates } from './utils/coordinates';
import Header from './components/Header';
import { getCategories } from '@/dynamicRendering/utils';

export const metadata = {
  title: 'Ares Arquitectos',
  description:
    'Basada en Guadalajara, Jalisco, México, la empresa ha diseñado los más exitosos proyectos comerciales del país, creciendo de la mano de los desarrolladores inmobiliarios que los han hecho realidad, lo que nos ha llevado a posicionarnos como líder de la industria.',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const offices = await getCoordinates();
  const categories = await getCategories();
  const sortedCategories = categories.data.sort((a, b) => a.attributes.orden - b.attributes.orden);
  // check if page is home 
  return (
    <html lang='es'>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
      <body className='min-h-screen bg-white'>
        <Header categories={sortedCategories.map((category) => category.attributes.nombre)} />
        <main>{children}</main>
        <Footer offices={offices} />
      </body>
    </html>
  );
}
