'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Section from '../components/Section';
import Button from '../components/Button';
import Footer from '../components/Footer';
import FilterButton from '../components/FilterButton';
import CarouselWrapper from '../components/CarouselWrapper';
import HistoryItem from '../components/HistoryCard';
import ProcessSteps from '../components/ProcessSteps';
import { associates } from './[person]/const';
import { years, historyItems } from './consts';

const directors = [
  {
    name: 'Jacinto Arenas',
    image: '/images/the_study/directors/1.png',
    position: 'CEO',
    link: 'the_study/slug_about',
  },
  {
    name: 'Arturo Martínez',
    image: '/images/the_study/directors/2.png',
    position: 'Principal Partner',
    link: '',
  },
  {
    name: 'Raúl Méndez',
    image: '/images/the_study/directors/3.png',
    position: 'Principal Partners / Business Developer',
    link: '',
  },
  {
    name: 'Pedro Solaegui',
    image: '/images/the_study/directors/4.png',
    position: 'Principal Partner / Business Developer',
    link: '',
  },
  {
    name: 'Iván Ortíz',
    image: '/images/the_study/directors/5.png',
    position: 'Principal Partner / BD LATAM y Retail',
    link: '',
  },
  {
    name: 'Carlos Márquez',
    image: '/images/the_study/directors/6.png',
    position: 'Principal Partner',
    link: '',
  },
];

const architects = [
  {
    name: 'Jacobo Villa',
    image: '/images/the_study/architect/1.png',
    position: 'Arquitecto',
  },
  {
    name: 'Alejandro Arenas',
    image: '/images/the_study/architect/2.png',
    position: 'Arquitecto',
  },
  {
    name: 'Beatriz Verduzco',
    image: '/images/the_study/architect/3.png',
    position: 'Arquitecto',
  },
  {
    name: 'Griselda Juárez',
    image: '/images/the_study/architect/4.png',
    position: 'Arquitecto',
  },
  {
    name: 'Vidal Montero',
    image: '/images/the_study/architect/5.png',
    position: 'Arquitecto',
  },
  {
    name: 'Fabiola Féliz',
    image: '/images/the_study/architect/6.png',
    position: 'Arquitecto',
  },
  {
    name: 'Andrea Camarena',
    image: '/images/the_study/architect/7.png',
    position: 'Arquitecto',
  },
  {
    name: 'Miguel Guajardo',
    image: '/images/the_study/architect/8.png',
    position: 'Arquitecto',
  },
  {
    name: 'Rigoberto Saldívas',
    image: '/images/the_study/architect/9.png',
    position: 'Arquitecto',
  },
  {
    name: 'Iván Torres',
    image: '/images/the_study/architect/10.png',
    position: 'Arquitecto',
  },
  {
    name: 'Ulises Rivera',
    image: '/images/the_study/architect/11.png',
    position: 'Arquitecto',
  },
  {
    name: 'Diana Pacheco',
    image: '/images/the_study/architect/12.png',
    position: 'Arquitecto',
  },
];

const professionals = [
  {
    title: 'Arquitecto',
    imageUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.87936882796!2d-103.3895095241311!3d20.71512258085691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afb402bea60b%3A0xc14c66c13f1080b7!2sAv.%20de%20las%20Am%C3%A9ricas%201250%2C%20San%20Miguel%20de%20la%20Colina%2C%2045160%20Zapopan%2C%20Jal.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2scl!4v1745774152456!5m2!1ses-419!2scl',
  },
  {
    title: 'Diseño & Acabados',
    imageUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.7148299543737!2d-99.17937382416082!3d19.381496681887068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff9d1cae5a15%3A0x2a1eba8b97486c3b!2sAv.%20Insurgentes%20Sur%201079%2C%20Noche%20Buena%2C%20Benito%20Ju%C3%A1rez%2C%2003720%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2scl!4v1745775289153!5m2!1ses-419!2scl',
  },
  {
    title: 'Diseño Gráfico & Marketing',
    imageUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.9856514065677!2d2.1541527765579067!3d41.39611797129864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a297339addff%3A0x2d30bf3eef38db19!2sAv.%20Diagonal%2C%20466%2C%20Gracia%2C%2008006%20Barcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2scl!4v1745775347889!5m2!1ses-419!2scl',
  },
  {
    title: 'Operaciones',
    imageUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.468296291743!2d-3.714212823483541!3d40.42062827143904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287af374619b%3A0xd6ecf46c1434e218!2sPl.%20de%20la%20Marina%20Espa%C3%B1ola%2C%203%2C%20Centro%2C%2028013%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2scl!4v1745775420489!5m2!1ses-419!2scl',
  },
];


const acabados = [
  {
    name: 'Itza López',
    image: '/images/Itza-Lopez.jpg',
    position: 'Diseñador Líder',
  },
  {
    name: 'Fernando Ayala',
    image: '/images/Fernando-Ayala.jpg',
    position: 'Diseñador',
  },
  {
    name: 'Alejandro Arenas',
    image: '/images/Alejandro-Arenas.jpg',
    position: 'Diseñador',
  },
  {
    name: 'Nadya Aguilar',
    image: '/images/Nadya-Aguilar.jpg',
    position: 'Diseñador',
  },
  {
    name: 'Diana Talavera',
    image: '/images/Diana-Talavera.jpg',
    position: 'Diseñador',
  },
  {
    name: 'Gabriela Arregui',
    image: '/images/Gabriela-Arregui.jpg',
    position: 'Diseñador',
  },
  {
    name: 'Ofelia Aguilar',
    image: '/images/Aguilar.jpg',
    position: 'Acabados',
  },
];

const disenos = [
  {
    name: 'Andrea Sotelo',
    image: '/images/Andrea-Sotelo.jpg',
    position: 'Gerente de Diseño Gráfico',
  },
  {
    name: 'Lourdes Barba',
    image: '/images/Lourdes-Barba.jpg',
    position: 'Diseñadora Gráfica Senior',
  },
  {
    name: 'Belén Coronado',
    image: '/images/Belen-Coronado.jpg',
    position: 'Diseñadora Gráfica',
  },
  
];

const operaciones = [
  {
    name: 'Pedro López',
    image: '/images/Pedro-Lopez.jpg',
    position: 'Director de Operaciones',
  },
  {
    name: 'Ana Fernández',
    image: '/images/Ana-Fernandez.jpg',
    position: 'Recursos Humanos',
  },
  {
    name: 'José Barrios',
    image: '/images/Jose-Barrios.jpg',
    position: 'Contador',
  },
  {
    name: 'Sandra Salazar',
    image: '/images/Sandra-Salazar.jpg',
    position: 'Contador',
  },
  {
    name: 'Dana Plascencia',
    image: '/images/Dana-Plascencia.jpg',
    position: 'Administración',
  },
  {
    name: 'Martín Salazar',
    image: '/images/Martin-Salazar.jpg',
    position: 'Administración',
  },
  {
    name: 'Alma Ramos',
    image: '/images/Alma-Something.jpg',
    position: 'Administración',
  },
  {
    name: 'Marco Mendoza',
    image: '/images/Marco-Mendoza.jpg',
    position: 'Gerente de TI',
  },
];


export default function TheStudyPage() {
  const [clickedYear, setClickedYear] = useState(years[0]);
  
  const [selectedProfessional, setSelectedProfessional] = useState(
    professionals[0]
  );

  return (
    <>
      <Header scrollLimit={1000} />

      <div className='relative h-[120vh] w-screen'>
        <Image
          src='/images/the_study/1.png'
          alt='Imagen de categoría'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/40' />

        <div className='absolute inset-0 z-10 flex items-center'>
          <div className='mx-auto w-full max-w-7xl px-6'>
            <h1 className='mb-8 max-w-md text-[56px] font-bold leading-[64px] text-white'>
              50 años de experiencia
            </h1>
            <p className='mb-8 max-w-xl text-lg text-white'>
              Desde 1974, Ares Arquitectos ha sido una firma líder en
              arquitectura, diseño de interiores y diseño urbano, ofreciendo
              soluciones integrales que destacan por su innovación y calidad.
            </p>
          </div>
        </div>
      </div>

      <Section width='max-w-7xl'>
        <div className='flex items-center justify-between gap-36'>
          <div className='flex flex-col gap-16'>
            <h2 className='max-w-3xl text-5xl font-bold text-[#636B69]'>
              Con sede en Guadalajara, Jalisco, México
            </h2>
            <p className='max-w-2xl text-lg text-black'>
              Ares ha sido el motor creativo detrás de algunos de los proyectos
              comerciales y de retail más exitosos del país. Su crecimiento ha
              ido de la mano con destacados desarrolladores inmobiliarios y
              reconocidas marcas, consolidándose como un referente en la
              industria.
            </p>
          </div>
          <div className='relative min-h-[564px] min-w-[564px]'>
            <div className='overflow-hidden rounded-2xl'>
              <Image
                src='/images/the_study/2.png'
                alt='Imagen de servicio'
                fill
                className='object-cover'
              />
            </div>
            <p className='absolute -bottom-8 right-0 text-sm font-bold text-[#A1A1A1]'>
              Plaza Patria
            </p>
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl'>
        <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black mb-20'>
          Nos motiva la calidad, la innovación y la excelencia en el diseño
        </h2>
        <ProcessSteps />
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-20' paddingBottom='pt-0'>
        <h2 className='mb-16 text-5xl font-bold text-[#636B69]' id='history'>
          Ares, <br /> a través del tiempo
        </h2>
        <div className='mb-16 space-x-4'>
          {years.map((year) => (
            <FilterButton
              key={year}
              label={year}
              className='hover:no-underline scroll-smooth'
              href={`#history-${year}`}
              isActive={clickedYear === year}
              onClick={() => setClickedYear(year)}
            />
          ))}
        </div>
        <CarouselWrapper arrowOffsetY="75%">
          {historyItems.map((item) => (
            <HistoryItem
              key={item.year}
              year={item.year}
              yearColor={clickedYear === item.year ? '#407978' : item.yearColor}
              lineColor={clickedYear === item.year ? '#407978' : item.lineColor}
              cards={item.cards}
              id={`history-${item.year}`}
            />
          ))}
        </CarouselWrapper>
      </Section>

      <Section width='max-w-7xl' paddingBottom='pt-0'>
        <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
          Somos creativos que juntos diseñan procesos que impulsan resultados
        </h2>
        <div className='mb-10 mt-28'>
          <h2 className='mb-10 text-[32px] font-bold leading-tight text-[#636B69]'>
            Directores
          </h2>
          <div className='grid grid-cols-3 gap-10'>
            {directors.map((director, index) => (
              <div key={index} className='flex flex-col'>
                <div className='relative mb-4 h-[380px] w-full overflow-hidden rounded-xl'>
                  <Image
                    src={director.image}
                    alt='Imagen de servicio'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='flex flex-col items-start'>
                  <h2 className='text-lg font-bold text-black'>
                    {director.name}
                  </h2>
                  <span className='text-[#A1A1A1]'>{director.position}</span>

                  <Button
                    href={`/the_study/${director.name.toLowerCase().replace(/\s+/g, '-').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')}`}
                    label='Ver biografía'
                    className='mt-8'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mb-10 mt-28'>
          <h2 className='mb-10 text-[32px] font-bold leading-tight text-[#636B69]'>
            Asociados
          </h2>
          <div className='grid grid-cols-3 gap-10'>
            {associates.map((directo, index) => (
              <div key={index} className='flex flex-col'>
                <div className='relative mb-4 h-[380px] w-full overflow-hidden rounded-xl'>
                  <Image
                    src={directo.image}
                    alt='Imagen de servicio'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='flex flex-col items-start'>
                  <h2 className='text-lg font-bold text-black'>
                    {directo.name}
                  </h2>
                  <span className='text-[#A1A1A1]'>{directo.position}</span>

                  <Button
                    label='Ver biografía'
                    href={`/the_study/${directo.name.toLowerCase().replace(/\s+/g, '-').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')}`}
                    className='mt-8'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingBottom='pt-0'>
        <div className='mb-16 flex items-center justify-between'>
          {professionals.map((professional, index) => {
            const isActive = professional.title === selectedProfessional.title;

            return (
              <div
                key={index}
                className='flex cursor-pointer items-center gap-4'
                onClick={() => setSelectedProfessional(professional)}
              >
                <div
                  className='relative flex h-8 min-h-8 w-8 min-w-8 items-center justify-center rounded-full
                    bg-[#EFEFEF]'
                >
                  <Image
                    src={
                      isActive
                        ? '/icons/arrow_downward_active.png'
                        : '/icons/arrow_downward_alt.png'
                    }
                    alt='Icono de flecha'
                    width={10}
                    height={10}
                    className='pointer-events-none object-cover'
                  />
                </div>
                <div>
                  <h4
                    className={`text-xl font-bold ${isActive ? 'text-[#407978]' : 'text-[#636B69]'}`}
                  >
                    {professional.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-48'>
        <div className='grid grid-cols-3 gap-10'>
          {architects.map((architect, index) => (
            <div key={index} className='flex flex-col'>
              <div className='relative mb-4 h-[380px] w-full overflow-hidden rounded-xl'>
                <Image
                  src={architect.image}
                  alt={architect.name}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-col items-start'>
                <h2 className='text-lg font-bold text-black'>
                  {architect.name}
                </h2>
                <span className='text-[#A1A1A1]'>{architect.position}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-48'>
        <div className='grid grid-cols-3 gap-10'>
          {acabados.map((acabado, index) => (
            <div key={index} className='flex flex-col'>
              <div className='relative mb-4 h-[380px] w-full overflow-hidden rounded-xl'>
                <Image
                  src={acabado.image}
                  alt={acabado.name}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-col items-start'>
                <h2 className='text-lg font-bold text-black'>
                  {acabado.name}
                </h2>
                <span className='text-[#A1A1A1]'>{acabado.position}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-48'>
        <div className='grid grid-cols-3 gap-10'>
          {disenos.map((diseno, index) => (
            <div key={index} className='flex flex-col'>
              <div className='relative mb-4 h-[380px] w-full overflow-hidden rounded-xl'>
                <Image
                  src={diseno.image}
                  alt={diseno.name}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-col items-start'>
                <h2 className='text-lg font-bold text-black'>
                  {diseno.name}
                </h2>
                <span className='text-[#A1A1A1]'>{diseno.position}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-48'>
        <div className='grid grid-cols-3 gap-10'>
          {operaciones.map((operacion, index) => (
            <div key={index} className='flex flex-col'>
              <div className='relative mb-4 h-[380px] w-full overflow-hidden rounded-xl'>
                <Image
                  src={operacion.image}
                  alt={operacion.name}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-col items-start'>
                <h2 className='text-lg font-bold text-black'>
                  {operacion.name}
                </h2>
                <span className='text-[#A1A1A1]'>{operacion.position}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </>
  );
}
