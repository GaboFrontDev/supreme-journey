'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from './components/Button';
import CollapsibleList from './components/Collapsible';
import FilterButton from './components/FilterButton';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import HeroScroll from './components/HeroScroll';
import HeroIntroScroll from './components/HeroIntroScroll';
import Header from './components/Header';
import CarouselWrapper from './components/CarouselWrapper';
import CompanyStats from './components/CompanyStats';
import OfficesGrid from './components/OfficesGrid';

const stats = [
  { value: '50', label: 'Años de experiencia', fixedWidth: true },
  { value: '16', label: 'Países' },
  { value: '4', label: 'Millones de m² diseñados', fixedWidth: true },
  { value: '11', label: 'Premios' },
  { value: '110', label: 'Proyectos en México y LATAM' },
];

const offices = [
  { title: 'Guadalajara HQ', country: 'México' },
  { title: 'CDMX', country: 'México' },
  { title: 'L35 Barcelona', country: 'España' },
  { title: 'L35 Madrid', country: 'España' },
]

const items1 = [
  { name: 'Artha Capital' },
  { name: 'Charros Jalisco' },
  { name: 'Grupo Chedraui', bold: true },
  { name: 'Chivas' },
  { name: 'City Express' },
  { name: 'Walmart', bold: true },
  { name: 'Constructora Stiva' },
];

const items2 = [
  { name: 'GM Capital' },
  { name: 'Grupo Al-Con' },
  { name: 'Coppel', bold: true },
  { name: 'Ocesa' },
  { name: 'Grupo Carso' },
  { name: 'Nike', bold: true },
  { name: 'Claro Colombia' },
];

const items3 = [
  { name: 'Grupo Omnilife' },
  { name: 'Hoteles Marriot' },
  { name: 'Hoteles Hilton' },
  { name: 'Kiva Grupo Inmobiliario' },
  { name: 'Orange Investments' },
  { name: 'Parks Desarrolladora' },
  { name: 'Constructora Stiva' },
];

const items4 = [
  { name: 'Prosperia' },
  { name: 'RCD Hotels' },
  { name: 'Liverpool' },
  { name: 'The American School Foundation Guadalajara' },
  { name: 'Grupo Arco Investment' },
  { name: 'Unicomer' },
  { name: 'Grupo Inmobiliario Gigante' },
];

const services = [
  {
    id: '1',
    title: 'Arquitectura',
    content: 'Diseñamos espacios únicos que resuelven necesidades, potencian el uso del espacio y generan valor a largo plazo. Combinando funcionalidad, estética y sostenibilidad para crear entornos que mejoran la calidad de vida y una experiencia única en cada proyecto.',
    image: '/images/services/1.png',
  },
  {
    id: '2',
    title: 'Master Planning',
    content: 'Diseñamos espacios únicos que resuelven necesidades, potencian el uso del espacio y generan valor a largo plazo. Combinando funcionalidad, estética y sostenibilidad para crear entornos que mejoran la calidad de vida y una experiencia única en cada proyecto.',
    image: '/images/hotels/2.png',
  },
  {
    id: '3',
    title: 'Master Planning',
    content: 'Diseñamos espacios únicos que resuelven necesidades, potencian el uso del espacio y generan valor a largo plazo. Combinando funcionalidad, estética y sostenibilidad para crear entornos que mejoran la calidad de vida y una experiencia única en cada proyecto.',
    image: '/images/shopping_centers/3.png',
  },
  {
    id: '4',
    title: 'Branding y Diseño Gráfico',
    content: 'Diseñamos espacios únicos que resuelven necesidades, potencian el uso del espacio y generan valor a largo plazo. Combinando funcionalidad, estética y sostenibilidad para crear entornos que mejoran la calidad de vida y una experiencia única en cada proyecto.',
    image: '/images/dwelling/4.png',
  },
];

export default function HomePage() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(services[0].id);
  const activeService = services.find((s) => s.id === activeServiceId);

  return (
    <>
      <Header />

      <HeroIntroScroll />

      <Section width='max-w-7xl' paddingBottom='pt-0'>
        <CompanyStats stats={stats} />
      </Section>

      <HeroScroll />

      <Section width='max-w-7xl' paddingBottom='pt-0' paddingTop='pt-0'>
        <OfficesGrid  items={offices} />
        <div className='flex justify-items-start'>
          <Button label='Conoce el estudio' />
        </div>
      </Section>

      <Section width='max-w-7xl'>
        <h2 className=' text-5xl font-bold text-[#636B69]'>Servicios</h2>
        <div className='flex items-center justify-between gap-36'>
          <CollapsibleList items={services} onChange={setActiveServiceId} />
          <div className="min-w-[564px] min-h-[564px] overflow-hidden rounded-2xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService?.id || 'default'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeService?.image || ''}
                  alt="Imagen de servicio"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Section>

      <Section
        width='max-w-7xl'
        paddingLeft='pl-0'
        paddingRight='pr-0'
        background='bg-[#F5F5F5]'
      >
        <div className='mb-20 flex items-center justify-between'>
          <h2 className='max-w-md text-[40px] font-bold text-[#636B69] leading-tight'>
            Diseñamos desde la colaboración
          </h2>
          <p className='max-w-md text-right text-lg text-black'>
            Escuchamos, entendemos y colaboramos con cada cliente para dar vida
            a espacios que reflejan su esencia y superan expectativas
          </p>
        </div>

        <div className='scrollbar-none relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen overflow-x-scroll'>
          <div className='space-y-6'>
            <Marquee items={items1} direction='left' />
            <Marquee items={items2} direction='right' />
            <Marquee items={items3} direction='left' />
            <Marquee items={items4} direction='right' />
          </div>
        </div>

        <div className='mt-20 flex justify-items-start'>
          <Button label='Ver todos los proyectos' href='/projects' />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingLeft='pl-0' paddingRight='pr-0'>
        <h2 className='mb-16 text-5xl font-bold text-[#636B69]'>
          Proyectos destacados
        </h2>
        <div className='mb-16 space-x-4'>
          <FilterButton label='Usos Mixtos' />
          <FilterButton label='Centros Comerciales' />
          <FilterButton label='Vivienda' />
          <FilterButton label='Hoteles' />
          <FilterButton label='Master plan' />
          <FilterButton label='LATAM' />
          <FilterButton label='Retail' />
          <FilterButton label='Renovaciones y Expansiones' />
        </div>

        <CarouselWrapper>
          <ProjectCard
            title='Averanda'
            location='Cuernavaca, Morelos, México'
            categories={['Usos Mixtos']}
            image='/images/mixed_uses/1.png'
          />
          <ProjectCard
            title='The Point'
            location='CDMX, México'
            categories={[
              'Usos Mixtos',
              'Vivienda',
            ]}
            image='/images/mixed_uses/2.png'
          />
          <ProjectCard
            title='Paseo Villalta'
            location='Saltillo, Coahuila, México'
            categories={[
              'Centros Comerciales',
              'Usos Mixtos',
            ]}
            image='/images/mixed_uses/3.png'
          />
          <ProjectCard
            title='Galerías Valle Oriente'
            location='Monterrey, Nuevo León, México'
            categories={[
              'Centros Comerciales',
              'Usos Mixtos',
              'Hoteles',
              'Corporativo',
            ]}
            image='/images/mixed_uses/4.png'
          />
        </CarouselWrapper>

        <div className='mt-20 flex justify-items-start'>
          <Button label='Ver todos los proyectos' href='/projects' />
        </div>
      </Section>

      <Section width='max-w-4xl' paddingTop='pt-4' paddingBottom='pb-36'>
        <div className='text-center'>
          <h2 className='mb-20 text-5xl text-black'>
            Diseñemos de la mano espacios que trasciendan e historias que
            conectan
          </h2>
          <Button label='Trabajemos Juntos' />
        </div>
      </Section>

      <Footer />
    </>
  );
}
