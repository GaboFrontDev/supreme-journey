'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from './components/Button';
import CollapsibleList from './components/Collapsible';
import FilterButton from './components/FilterButton';
import Marquee from './components/Marquee';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import HeroScroll from './components/HeroScroll';
import HeroIntroScroll from './components/HeroIntroScroll';
import CarouselWrapper from './components/CarouselWrapper';
import CompanyStats from './components/CompanyStats';
import OfficesGrid from './components/OfficesGrid';
import { Cliente, DestacadoData } from './strapi';
import { CategoriaProyectoData } from './projects/strapi';
import { formatTitleToUrl } from '@/dynamicRendering/utils';

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
];

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
    content:
      'Diseñamos espacios únicos que resuelven necesidades, potencian el uso del espacio y generan valor a largo plazo. Combinando funcionalidad, estética y sostenibilidad para crear entornos que mejoran la calidad de vida y una experiencia única en cada proyecto.',
    image: '/images/services/1.png',
  },
  {
    id: '2',
    title: 'Diseño de Interiores',
    content:
      'Creamos espacios que combinan estilo, funcionalidad y personalidad. Cada proyecto es pensado cuidadosamente, desde la selección de materiales hasta los detalles finales, para ofrecer ambientes únicos que se adapten a las necesidades y el carácter de cada cliente.',
    image: '/images/hotels/2.png',
  },
  {
    id: '3',
    title: 'Master Planning',
    content:
      'Desarrollamos proyectos de Master Plan que integran diseño, funcionalidad y visión a largo plazo. Creamos entornos donde lo residencial, comercial y recreativo se conectan estratégicamente para fomentar el crecimiento sostenible. Cada proyecto está pensado para adaptarse y evolucionar, asegurando un impacto positivo en el entorno.',
    image: '/images/shopping_centers/3.png',
  },
  {
    id: '4',
    title: 'Branding y Diseño Gráfico',
    content:
      'Creamos marcas que cuentan historias y generan conexiones significativas. Cada proyecto está pensado para construir una narrativa visual que el usuario vivirá, desde el primer contacto hasta su experiencia en el espacio. Nuestro enfoque combina estrategia, diseño y emoción, transformando cada elemento en una herramienta que comunica y refuerza la identidad de la marca.',
    image: '/images/dwelling/4.png',
  },
];

export default function HomeComponent({
  clients,
  destacados,
  categorias,
}: {
  clients: Cliente[];
  destacados: DestacadoData;
  categorias: CategoriaProyectoData[];
}) {
  console.log(destacados.attributes.proyectos.data[0].attributes.categoria_proyecto.data[0].attributes.nombre);
  const [activeServiceId, setActiveServiceId] = useState<string | null>(
    services[0].id
  );
  const activeService = services.find((s) => s.id === activeServiceId);

  const mappedClients = clients.map((client) => ({
    name: client.name,
    bold: client.esNegritas,
  }));

  // separate clients in 4 groups of any size
  const clientsGroups = [
    mappedClients.slice(0, Math.floor(mappedClients.length * 0.25)),
    mappedClients.slice(
      Math.floor(mappedClients.length * 0.25),
      Math.floor(mappedClients.length * 0.5)
    ),
    mappedClients.slice(
      Math.floor(mappedClients.length * 0.5),
      Math.floor(mappedClients.length * 0.75)
    ),
    mappedClients.slice(
      Math.floor(mappedClients.length * 0.75),
      mappedClients.length
    ),
  ];

  return (
    <>
      <HeroIntroScroll />

      <Section width='max-w-7xl' paddingBottom='pt-0'>
        <CompanyStats stats={stats} />
      </Section>

      <HeroScroll />

      <Section width='max-w-7xl' paddingBottom='pt-0' paddingTop='pt-0'>
        <OfficesGrid items={offices} />
        <div className='flex justify-items-start'>
          <Button label='Conoce el estudio' href='/the_study' />
        </div>
      </Section>

      <Section width='max-w-7xl'>
        <h2 className=' text-5xl font-bold text-[#636B69]'>Servicios</h2>
        <div className='flex items-center justify-between gap-36'>
          <CollapsibleList items={services} onChange={setActiveServiceId} />
          <div className='relative min-h-[564px] min-w-[564px] overflow-hidden rounded-2xl'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeService?.id || 'default'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='absolute inset-0'
              >
                <Image
                  src={activeService?.image || ''}
                  alt='Imagen de servicio'
                  fill
                  className='object-cover'
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
          <h2 className='max-w-md text-[40px] font-bold leading-tight text-[#636B69]'>
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
            {clientsGroups.map((group, index) => (
              <Marquee items={group} direction='left' key={index} />
            ))}
          </div>
        </div>

        <div className='mt-20 flex justify-items-start'>
          <Button label='Explora nuestros proyectos' href='/projects' />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingLeft='pl-0' paddingRight='pr-0'>
        <h2 className='mb-16 text-5xl font-bold text-[#636B69]'>
          Proyectos destacados
        </h2>
        <div className='mb-16 space-x-4'>
          {categorias.map((categoria) => (
            <FilterButton href={`/projects/${formatTitleToUrl(categoria.attributes.nombre)}`} label={categoria.attributes.nombre} />
          ))}
        </div>

        <CarouselWrapper>
          {destacados.attributes.proyectos.data.map((project) => (
            <ProjectCard
              title={project.attributes.nombre}
              location={project.attributes.ficha.ubicacion}
              categories={project.attributes.categoria_proyecto.data.map((categoria) => categoria.attributes.nombre)}
              image={project.attributes.miniatura.data.attributes.url}
              parentCategory={project.attributes.categoria_proyecto.data[0].attributes.nombre}
              key={project.id}
            />
          ))}
        </CarouselWrapper>
      </Section>

      <Section width='max-w-4xl' paddingTop='pt-4' paddingBottom='pb-36'>
        <div className='text-center'>
          <h2 className='mb-20 text-5xl text-black'>
            Diseñemos de la mano espacios que trasciendan e historias que
            conectan
          </h2>
          <Button label='Trabajemos Juntos' href='/contact' />
        </div>
      </Section>
    </>
  );
}
