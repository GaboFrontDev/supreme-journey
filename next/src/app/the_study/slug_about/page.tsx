import Button from '@/app/components/Button';
import CarouselWrapper from '@/app/components/CarouselWrapper';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Section from '@/app/components/Section';
import Image from 'next/image';
import Link from 'next/link';

const directors = [
  {
    name: 'Arturo Martínes',
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

export default function SlugAboutPage() {
  return (
    <>
      <Header forceScrolledStyle />

      <Section width='max-w-7xl' paddingTop='pt-52' paddingBottom='pb-0'>
        <div className='mb-10 flex items-center gap-2'>
          <Link href='/the_study' className='flex items-center gap-2'>
            <Image
              src='/icons/breadcrumb_left.png'
              width={24}
              height={24}
              alt='Icono de breadcrumb'
              className='object-cover'
            />
            <span className='text-sm font-bold text-[#A1A1A1]'>El Estudio</span>
          </Link>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-12'>
        <div className='flex items-start justify-between gap-36'>
          <div>
            <h2 className='my-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
              Jacinto Arenas
            </h2>
            <span className='text-lg font-bold text-[#A1A1A1]'>CEO</span>
            <div className='text-lg text-black [&>p]:my-8'>
              <p>
                Jacinto Arenas ha llevado a cabo su desarrollo profesional en
                Ares Arquitectos, firma especializada en el diseño
                arquitectónico y de interiores de géneros como centros
                comerciales, usos mixtos, hoteles, vivienda vertical y espacios
                de retail entre otros.
              </p>
              <p>
                Bajo su dirección, Ares Arquitectos se ha convertido en una de
                las empresas líderes del ramo de la arquitectura en México,
                además de haber realizado proyectos en 14 países.
              </p>
              <p>
                Ares ha recibido en 6 ocasiones el ICSC Latin America Shopping
                Center Awards, en otras tres ha sido galardonado con el premio
                CIDI de Interiorismo, además de haber recibido el reconocimiento
                “INSPIRA” Trayectorias 2013 de la revista México Design.
              </p>
              <h2 className='my-6 text-[20px] font-bold leading-tight text-[#636B69]'>
                Estudios
              </h2>
              <p>
                Es arquitecto egresado del Instituto de Estudios Superiores de
                Occidente (ITESO), además de contar con la maestría “Executive
                MBA” impartida por la escuela de negocios IPADE y el “Diplomado
                en Evaluación y Formulación de Proyectos de Inversión” de la
                Universidad Panamericana de Guadalajara
              </p>
            </div>
          </div>
          <div className='relative min-h-[564px] min-w-[564px]'>
            <div className='overflow-hidden rounded-2xl'>
              <Image
                src='/images/the_study/directors/1.png'
                alt='Jacinto Arenas'
                width={564}
                height={564}
                className='object-cover'
              />
            </div>
            <div className='flex justify-end mt-4 gap-3'>
              <Link href="#" className='text-sm font-bold text-[#A1A1A1] hover:underline'>Instagram</Link>
              <Link href="#" className='text-sm font-bold text-[#A1A1A1] hover:underline'>Linkedin</Link>
              <Link href="#" className='text-sm font-bold text-[#A1A1A1] hover:underline'>Facebook</Link>
            </div>
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-48'>
        <h2 className='mb-14 mt-2 text-[40px] font-bold leading-tight text-[#636B69]'>
          Otros biografías
        </h2>
        <CarouselWrapper>
          {directors.map((director, index) => (
            <div key={index} className='flex flex-col'>
              <div className='relative mb-4 w-[400px] h-[380px] overflow-hidden rounded-xl'>
                <Image
                  src={director.image}
                  alt='Imagen de servicio'
                  fill
                  className='object-cover pointer-events-none'
                />
              </div>
              <div className='flex flex-col items-start'>
                <h2 className='text-lg font-bold text-black'>
                  {director.name}
                </h2>
                <span className='text-[#A1A1A1]'>{director.position}</span>
                <Button href={director.link} label='Ver biografía' className='mt-8' />
              </div>
            </div>
          ))}
        </CarouselWrapper>
      </Section>

      <Footer />
    </>
  );
}
