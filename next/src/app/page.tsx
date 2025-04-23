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
    image: '/images/averanda_project.png',
  },
  {
    id: '2',
    title: 'Master Planning',
    content: 'Diseñamos espacios únicos que resuelven necesidades, potencian el uso del espacio y generan valor a largo plazo. Combinando funcionalidad, estética y sostenibilidad para crear entornos que mejoran la calidad de vida y una experiencia única en cada proyecto.',
    image: '/images/diverplaza_project.png',
  },
  {
    id: '3',
    title: 'Master Planning',
    content: 'Diseñamos espacios únicos que resuelven necesidades, potencian el uso del espacio y generan valor a largo plazo. Combinando funcionalidad, estética y sostenibilidad para crear entornos que mejoran la calidad de vida y una experiencia única en cada proyecto.',
    image: '/images/valle_oriente_project.png',
  },
  {
    id: '4',
    title: 'Branding y Diseño Gráfico',
    content: 'Diseñamos espacios únicos que resuelven necesidades, potencian el uso del espacio y generan valor a largo plazo. Combinando funcionalidad, estética y sostenibilidad para crear entornos que mejoran la calidad de vida y una experiencia única en cada proyecto.',
    image: '/images/river_place.png',
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
        <div className='grid grid-cols-5 gap-10 mb-16'>
          <div>
            <h4 className="text-[#989F9C] text-8xl relative">50 
              <span className='text-6xl absolute'>+</span>
            </h4>
            <span className='inline-flex w-[150px] text-base text-black'>Años de experiencia</span>
          </div>
          <div>
            <h4 className="text-[#989F9C] text-8xl relative">16
              <span className='text-6xl absolute'>+</span>
            </h4>
            <span className='text-base text-black'>Países</span>
          </div>
          <div>
            <h4 className="text-[#989F9C] text-8xl relative">4
              <span className='text-6xl absolute'>+</span>
            </h4>
            <span className='inline-flex w-[150px] text-base text-black'>Millones de m² diseñados</span>
          </div>
          <div>
            <h4 className="text-[#989F9C] text-8xl relative">11
              <span className='text-6xl absolute'>+</span>
            </h4>
            <span className='text-base text-black'>Premios</span>
          </div>
          <div>
            <h4 className="text-[#989F9C] text-8xl relative">110
              <span className='text-6xl absolute'>+</span>
            </h4>
            <span className='text-base text-black'>Proyectos en México y LATAM</span>
          </div>
        </div>
      </Section>

      <HeroScroll />

      <Section width='max-w-7xl' paddingBottom='pt-0' paddingTop='pt-0'>
        <div className='grid grid-cols-4 gap-10 mb-16'>
          <div>
            <h4 className="font-bold text-xl">Guadalajara HQ</h4>
            <span className='text-xs text-[#A1A1A1]'>México</span>
          </div>
          <div>
            <h4 className="font-bold text-xl">CDMX</h4>
            <span className='text-xs text-[#A1A1A1]'>México</span>
          </div>
          <div>
            <h4 className="font-bold text-xl">L35 Barcelona</h4>
            <span className='text-xs text-[#A1A1A1]'>España</span>
          </div>
          <div>
            <h4 className="font-bold text-xl">L35 Madrid</h4>
            <span className='text-xs text-[#A1A1A1]'>España</span>
          </div>
        </div>
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
          <h2 className='mb-16 max-w-md text-5xl font-bold text-[#636B69]'>
            Diseñamos desde la colaboración
          </h2>
          <p className='max-w-md text-right text-lg text-black'>
            Escuchamos, entendemos y colaboramos con cada cliente para dar vida
            a espacios que reflejan su esencia y superan expectativas
          </p>
        </div>

        <div
          className='scrollbar-none relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen
            overflow-x-scroll'
        >
          <div className='space-y-6'>
            <Marquee items={items1} direction='left' />
            <Marquee items={items2} direction='right' />
            <Marquee items={items3} direction='left' />
            <Marquee items={items4} direction='right' />
          </div>
        </div>

        <div className='mt-20 flex justify-items-start'>
          <Button label='Ver todos los proyectos' />
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
            image='/images/averanda_project.png'
          />
          <ProjectCard
            title='Diverplaza'
            location='Bogotá, Colombia'
            categories={[
              'Centros Comerciales',
              'Usos Mixtos',
              'Hoteles',
              'Corporativo',
            ]}
            image='/images/diverplaza_project.png'
          />
          <ProjectCard
            title='Galerías Valle Oriente'
            location='Monterrey, Nuevo León, México'
            categories={[
              'Centros Comerciales',
              'Renovación y Expansiones',
              'LATAM',
            ]}
            image='/images/valle_oriente_project.png'
          />
          <ProjectCard
            title='River Place'
            location='Georgetown, Guyana'
            categories={['Centro Comerciales', 'LATAM']}
            image='/images/river_place.png'
          />
        </CarouselWrapper>

        <div className='mt-20 flex justify-items-start'>
          <Button label='Ver todos los proyectos' />
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
