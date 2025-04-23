import '@/styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Aura Imaging',
  description: 'Sitio en construcción',
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