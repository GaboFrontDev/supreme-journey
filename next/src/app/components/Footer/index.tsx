'use client';

import { type Offices } from '@/app/utils/coordinates';
import { CollapsableOffices } from './collapsableOffices';

interface FooterProps {
  offices: Offices;
}

export default function Footer({ offices }: FooterProps) {
  return (
    <footer className='rounded-t-3xl bg-black px-6 pb-8 pt-10 text-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='md:hidden'>
          <CollapsableOffices offices={offices} />
        </div>
        <div className='hidden gap-10 text-sm md:grid md:grid-cols-4'>
          {offices.slice(0, 4).map((office, index) => (
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
        <div className='hidden pb-8 pt-20 md:block'>
          <h4 className='text-xl font-bold'>Mapa de navegación</h4>
        </div>
        <div className='gap-10 text-sm md:grid md:grid-cols-4'>
          <ul className='hidden space-y-3 text-base font-bold text-c-gray-200 md:block'>
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
          <ul className='hidden space-y-3 text-base font-bold text-c-gray-200 md:block'>
            <li>
              <a href='/projects/usos-mixtos' className='hover:underline'>
                Usos Mixtos
              </a>
            </li>
            <li>
              <a
                href='/projects/centros-comerciales'
                className='hover:underline'
              >
                Centros comerciales
              </a>
            </li>
            <li>
              <a href='/projects/vivienda' className='hover:underline'>
                Vivienda
              </a>
            </li>
            <li>
              <a href='/projects/hoteles' className='hover:underline'>
                Hoteles
              </a>
            </li>
            <li>
              <a href='/projects/master-planning' className='hover:underline'>
                Master planning
              </a>
            </li>
          </ul>
          <ul className='hidden space-y-3 text-base font-bold text-c-gray-200 md:block'>
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
              <a href='/projects/deportivo' className='hover:underline'>
                Deportivo
              </a>
            </li>
            <li>
              <a href='/projects/movilidad' className='hover:underline'>
                Movilidad
              </a>
            </li>
            <li>
              <a
                href='/projects/renovaciones-y-expansiones'
                className='hover:underline'
              >
                Renovaciones y expansiones
              </a>
            </li>
          </ul>
          <ul className='pt-4 text-sm font-bold text-c-gray-200 md:space-y-3 md:text-base'>
            <li>
              <a
                href='https://www.instagram.com/aresarquitectos'
                className='hover:underline '
                target='_blank'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/aresarquitectoss/?locale=es_LA'
                className='hover:underline'
                target='_blank'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/company/ares-arquitectos/?viewAsMember=true'
                className='hover:underline'
                target='_blank'
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
          <div className='gap-10 text-sm md:grid md:grid-cols-4 space-between flex'>
            <a
              href='#'
              className='md:p-6 text-xs font-bold text-c-gray-200 hover:underline'
            >
              Uso de cookies
            </a>
            <a
              href='#'
              className='md:p-6 text-xs font-bold text-c-gray-200 hover:underline text-right'
            >
              Aviso de privacidad
            </a>
            <p className='hidden md:block md:p-6 text-base text-[#A1A1A1] text-left'>Ares 2025 ©</p>
          </div>
        </div>

        <div className='md:hidden py-2'>
            <p className='text-base text-[#A1A1A1] text-left'>Ares 2025 ©</p>

        </div>
      </div>
    </footer>
  );
}
