import '@/styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Ares Arquitectos',
  description: 'Basada en Guadalajara, Jalisco, México, la empresa ha diseñado los más exitosos proyectos comerciales del país, creciendo de la mano de los desarrolladores inmobiliarios que los han hecho realidad, lo que nos ha llevado a posicionarnos como líder de la industria.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white">
        <main>{children}</main>
      </body>
    </html>
  );
}