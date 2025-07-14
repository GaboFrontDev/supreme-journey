'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Section from '@/app/components/Section';
import Link from 'next/link';
import CarouselWrapper from '../components/CarouselWrapper';
import PevaCard from '../components/PevaCard';
import GalleryModal from '../components/GalleryModal';

export default function AresPevaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const openModalWithImages = (images: string[]) => {
    setCurrentImages(images);
    setIsModalOpen(true);
  };

  return (
    <>
      <Section width='max-w-7xl' paddingTop='pt-32' paddingBottom='pb-12'>
        <div className='md:flex items-center justify-between gap-36'>
          <div className='flex-col'>
            <div className='mb-10 flex items-center gap-2'>
              <Link href='/ares_culture' className='flex items-center gap-2'>
                <span className='text-sm font-bold text-[#A1A1A1]'>
                  Cultura Ares
                </span>
              </Link>
              <div className='flex items-center gap-2'>
                <Image
                  src='/icons/breadcrumb_left.png'
                  width={24}
                  height={24}
                  alt='Icono de breadcrumb'
                  className='rotate-180 object-cover'
                />
                <span className='text-sm font-bold text-[#A1A1A1]'>
                  Area PEVA
                </span>
              </div>
            </div>
            <h2 className='mb-6 mt-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
              Pensando <br />
              En Voz Alta
            </h2>
          </div>
          <p className='max-w-2xl text-lg text-black'>
            Es una iniciativa de Ares Arquitectos que busca incentivar el dibujo
            a mano alzada entre profesionales y estudiantes de cualquier oficio
            que implique un trabajo creativo. Mostraremos dibujos de diferentes
            colaboradores del equipo realizados a lo largo de más de 40 años de
            experiencia profesional.
          </p>
        </div>
      </Section>

      <Section
        width='w-full'
        paddingTop='pt-10'
        paddingBottom='pb-10'
        paddingLeft='pl-0'
        paddingRight='pr-0'
      >
        <div className='relative h-[810px] w-full overflow-hidden rounded-t-3xl'>
          <Image
            src='/images/ares_peva/1.png'
            alt='Ares PEVA'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingBottom='pb-20'>
        <div className='md:flex items-center'>
          <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
            El dibujo es el primer paso en la creación de una narrativa visual
            que da vida a un espacio
          </h2>
        </div>
      </Section>

      <Section
        width='w-full'
        paddingTop='pt-10'
        paddingBottom='pb-10'
        paddingLeft='pl-0'
        paddingRight='pr-0'
      >
        <div className='relative h-[810px] w-full overflow-hidden rounded-t-3xl'>
          <Image
            src='/images/ares_peva/2.png'
            alt='Ares PEVA'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-20' paddingBottom='pb-20'>
        <div className='md:grid grid-cols-2 gap-36'>
          <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
            Ares Archivos de Arquitectura
          </h2>
          <div className='text-lg text-black [&>p:first-child]:mt-0 [&>p]:my-8'>
            <p>
              El diseño es un proceso en el cual se conciben ideas, se
              visualizan, se representan, se descartan algunas y otras se
              desarrollan para entender el potencial de cada una de éstas, hasta
              así llegar a una solución final. En el transcurso de todos estos
              pasos, se generan un sin fin de esquemas, diagramas, dibujos y
              anotaciones, que expresan todas aquellas ideas que provienen de un
              pensamiento colectivo de un equipo de trabajo diverso.
            </p>
            <p>
              El dibujo a mano alzada, es la forma de expresión que más
              rápidamente plasma en una imagen lo que nuestra mente ha
              visualizado como una idea, es el primer lenguaje con el que se da
              forma a un concepto, permitiendo explorar, comunicar y construir
              un mundo de posibilidades.
            </p>
          </div>
        </div>
      </Section>

      <Section
        width='max-w-7xl'
        paddingLeft='pl-0'
        paddingRight='pr-0'
        background='bg-[#F5F5F5]'
      >
        <div className='mb-20 md:grid grid-cols-[1fr_466px] gap-10'>
          <div>
            <div className='relative h-[440px] w-full overflow-hidden rounded-3xl'>
              <Image
                src='/images/ares_peva/3.png'
                alt='Image de arquitectura'
                fill
                className='object-cover'
              />
            </div>
            <div className='flex items-start justify-between'>
              <div className='mt-4'>
                <h3 className='mb-1 text-lg font-bold text-black'>Merak</h3>
                <p className='text-sm font-light text-[#A1A1A1]'>
                  Carlos Márquez
                </p>
              </div>
              <button
                onClick={() =>
                  openModalWithImages([
                    '/images/ares_peva/3.png',
                    '/images/ares_peva/4.png',
                  ])
                }
                className='relative mt-4 flex h-12 w-12 items-center justify-center rounded-full
                  bg-[#EFEFEF]'
              >
                <Image
                  src='/icons/arrow_expand.png'
                  alt='Icono de flecha'
                  width={24}
                  height={24}
                  className='object-cover'
                />
              </button>
            </div>
          </div>
          <div>
            <div className='relative h-[440px] w-full overflow-hidden rounded-3xl'>
              <Image
                src='/images/ares_peva/4.png'
                alt='Image de arquitectura'
                fill
                className='object-cover'
              />
            </div>
            <div className='flex items-start justify-between'>
              <div className='mt-4'>
                <h3 className='mb-1 text-lg font-bold text-black'>
                  Angelópolis
                </h3>
                <p className='text-sm font-light text-[#A1A1A1]'>
                  Carlos Márquez
                </p>
              </div>
              <button className='relative mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EFEFEF]'>
                <Image
                  src='/icons/arrow_expand.png'
                  alt='Icono de flecha'
                  width={24}
                  height={24}
                  className='object-cover'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='mb-20 grid grid-cols-1'>
          <div>
            <div className='relative h-[440px] w-full overflow-hidden rounded-3xl'>
              <Image
                src='/images/ares_peva/5.png'
                alt='Image de arquitectura'
                fill
                className='object-cover'
              />
            </div>
            <div className='flex items-start justify-between'>
              <div className='mt-4'>
                <h3 className='mb-1 text-lg font-bold text-black'>Teya</h3>
                <p className='text-sm font-light text-[#A1A1A1]'>
                  Pedro Solaegui
                </p>
              </div>
              <button
                className='relative mt-4 flex h-12 w-12 items-center justify-center rounded-full
                  bg-[#EFEFEF]'
              >
                <Image
                  src='/icons/arrow_expand.png'
                  alt='Icono de flecha'
                  width={24}
                  height={24}
                  className='object-cover'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='mb-20 md:grid grid-cols-[466px_1fr] gap-10'>
          <div>
            <div className='relative h-[440px] w-full overflow-hidden rounded-3xl'>
              <Image
                src='/images/ares_peva/6.png'
                alt='Image de arquitectura'
                fill
                className='object-cover'
              />
            </div>
            <div className='md:flex items-start justify-between'>
              <div className='mt-4'>
                <h3 className='mb-1 text-lg font-bold text-black'>ITESO</h3>
                <p className='text-sm font-light text-[#A1A1A1]'>Iván Ortíz</p>
              </div>
              <button
                className='relative mt-4 flex h-12 w-12 items-center justify-center rounded-full
                  bg-[#EFEFEF]'
              >
                <Image
                  src='/icons/arrow_expand.png'
                  alt='Icono de flecha'
                  width={24}
                  height={24}
                  className='object-cover'
                />
              </button>
            </div>
          </div>
          <div>
            <div className='relative h-[440px] w-full overflow-hidden rounded-3xl'>
              <Image
                src='/images/ares_peva/7.png'
                alt='Image de arquitectura'
                fill
                className='object-cover'
              />
            </div>
            <div className='flex items-start justify-between'>
              <div className='mt-4'>
                <h3 className='mb-1 text-lg font-bold text-black'>ITESO</h3>
                <p className='text-sm font-light text-[#A1A1A1]'>
                  Carlos Márquez
                </p>
              </div>
              <button
                className='relative mt-4 flex h-12 w-12 items-center justify-center rounded-full
                  bg-[#EFEFEF]'
              >
                <Image
                  src='/icons/arrow_expand.png'
                  alt='Icono de flecha'
                  width={24}
                  height={24}
                  className='object-cover'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1'>
          <div>
            <div className='relative h-[440px] w-full overflow-hidden rounded-3xl'>
              <Image
                src='/images/ares_peva/8.png'
                alt='Image de arquitectura'
                fill
                className='object-cover'
              />
            </div>
            <div className='flex items-start justify-between'>
              <div className='mt-4'>
                <h3 className='mb-1 text-lg font-bold text-black'>
                  Cumbres Monterrey
                </h3>
                <p className='text-sm font-light text-[#A1A1A1]'>Iván Ortíz</p>
              </div>
              <button
                className='relative mt-4 flex h-12 w-12 items-center justify-center rounded-full
                  bg-[#EFEFEF]'
              >
                <Image
                  src='/icons/arrow_expand.png'
                  alt='Icono de flecha'
                  width={24}
                  height={24}
                  className='object-cover'
                />
              </button>
            </div>
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingLeft='pl-0 md:pl-6' paddingRight='pr-0 md:pr-6'>
        <div className='mb-10 md:flex px-6'>
          <h2 className='max-w-md text-[32px] font-bold leading-tight text-[#636B69]'>
            Inicios conceptuales de proyectos
          </h2>
        </div>
        <CarouselWrapper>
          <PevaCard
            title='Mazatlán'
            author='Jacinto Arenas'
            image='/images/ares_peva/9.png'
          />
          <PevaCard
            title='El Juguete'
            author='Carlos Márquez'
            image='/images/ares_peva/10.png'
          />
        </CarouselWrapper>
      </Section>

      {isModalOpen && (
        <GalleryModal
          images={currentImages}
          onClose={() => setIsModalOpen(false)}
        />
      )}

       
    </>
  );
}
