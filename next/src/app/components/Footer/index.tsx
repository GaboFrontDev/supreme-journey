'use client';

import { type Offices } from '@/app/utils/coordinates';

interface FooterProps {
  offices: Offices;
}

export default function Footer({ offices }: FooterProps) {
  return (
    <footer className='rounded-t-3xl bg-black px-6 pb-8 pt-10 text-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-4 gap-10 text-sm'>
          {offices.slice(0, 44).map((office, index) => (
            <div className='space-y-5' key={index}>
              <div className='space-y-6'>
                <h4 className='text-xl font-bold'>{office.title}</h4>
                <p className='text-xs leading-5 text-c-gray-200'>
                  {office.address}
                </p>
              </div>
              <div className='space-y-4'>
                <p className='text-xs font-bold'>{office.name}</p>
                <ul className='space-y-1 text-xs leading-5 text-c-gray-200'>
                  <li>{office.phone}</li>
                  <li>
                    <a href={`mailto:${office.email}`}>{office.email}</a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className='pb-8 pt-20'>
          <h4 className='text-xl font-bold'>Mapa de navegación</h4>
        </div>
        <div className='grid grid-cols-4 gap-10 text-sm'>
          <ul className='space-y-3 text-base font-bold text-c-gray-200'>
            <li>
              <a href='/projects' className='hover:underline'>
                Proyectos
              </a>
            </li>
            <li>
              <a href='/the_study' className='hover:underline'>
                El Estudio
              </a>
            </li>
            <li>
              <a href='/culture' className='hover:underline'>
                Cultura Ares
              </a>
            </li>
            <li>
              <a href='/blog' className='hover:underline'>
                Blog
              </a>
            </li>
            <li>
              <a href='/contact' className='hover:underline'>
                Contacto
              </a>
            </li>
          </ul>
          <ul className='space-y-3 text-base font-bold text-c-gray-200'>
            <li>
              <a href='/projects/mixedUses' className='hover:underline'>
                Usos Mixtos
              </a>
            </li>
            <li>
              <a
                href='/projects/centrosComerciales'
                className='hover:underline'
              >
                Centros comerciales
              </a>
            </li>
            <li>
              <a href='/projects/dwellings' className='hover:underline'>
                Vivienda
              </a>
            </li>
            <li>
              <a href='/projects/hotels' className='hover:underline'>
                Hoteles
              </a>
            </li>
            <li>
              <a href='/projects' className='hover:underline'>
                Master plan
              </a>
            </li>
          </ul>
          <ul className='space-y-3 text-base font-bold text-c-gray-200'>
            <li>
              <a href='/projects/latam' className='hover:underline'>
                LATAM
              </a>
            </li>
            <li>
              <a href='/projects/retail' className='hover:underline'>
                Retail
              </a>
            </li>
            <li>
              <a href='/projects' className='hover:underline'>
                Deportivo
              </a>
            </li>
            <li>
              <a href='/projects' className='hover:underline'>
                Movilidad
              </a>
            </li>
            <li>
              <a href='/projects' className='hover:underline'>
                Renovaciones y expansiones
              </a>
            </li>
          </ul>
          <ul className='space-y-3 text-base font-bold text-c-gray-200'>
            <li>
              <a
                href='https://www.instagram.com/aresarquitectos'
                className='hover:underline'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/aresarquitectoss/?locale=es_LA'
                className='hover:underline'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/company/ares-arquitectos/?viewAsMember=true'
                className='hover:underline'
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href='https://x.com/AresArquitectos'
                className='hover:underline'
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className='pt-20'>
          <div className='grid grid-cols-4 gap-10 text-sm'>
            <p className='text-xs font-bold text-c-gray-200'>Ares 2025 ©</p>
            <a
              href='#'
              className='text-xs font-bold text-c-gray-200 hover:underline'
            >
              Uso de cookies
            </a>
            <a
              href='#'
              className='text-xs font-bold text-c-gray-200 hover:underline'
            >
              Aviso de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
