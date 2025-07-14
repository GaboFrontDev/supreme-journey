'use client';
import Image from 'next/image';
import Section from '@/app/components/Section';
import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';

interface Iniciativa {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  ruta: string;
}

const iniciativas: Iniciativa[] = [
  {
    id: 'dis',
    titulo: 'DIS',
    descripcion: 'Digital Innovation & Sustainability',
    imagen: 'images/ares_culture/2.png',
    ruta: '/ares_sustainability',
  },
  {
    id: 'peva',
    titulo: 'Ares PEVA',
    descripcion: 'Digital Innovation & Sustainability',
    imagen: 'images/ares_culture/3.jpg',
    ruta: '/ares_peva',
  },
  {
    id: 'architects',
    titulo: 'Formando arquitectos',
    descripcion: 'Impulsando nuevas generaciones',
    imagen: 'images/ares_culture/4.png',
    ruta: '/ares_architects',
  },
];

export default function AresCulturePage() {
  const router = useRouter();

  return (
    <>
      <Section width='max-w-7xl' paddingTop='pt-52' paddingBottom='pb-12'>
        <div className='md:flex items-center justify-between gap-36'>
          <div className='flex-col'>
            <h2 className='mb-6 mt-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
              Cultura Ares
            </h2>
          </div>
          <p className='max-w-2xl text-lg text-black'>
            Creemos en la fusión de la creatividad, la enseñanza y la innovación
            tecnológica. Nuestra cultura se basa en el compromiso de explorar
            nuevas formas de pensar, diseñar y crear, promoviendo una visión
            arquitectónica que trasciende generaciones.
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
            src='/images/ares_culture/1.png'
            alt='Ares Culture'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingBottom='pb-20'>
        <div className='flex items-center'>
          <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
            La tradición de la mano alzada, la enseñanza como legado de
            conocimiento y la innovación digital
          </h2>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-10' paddingBottom='pb-48'>
        <div className='md:grid grid-cols-2 gap-10'>
          {iniciativas.map((iniciativa) => (
            <div
              key={iniciativa.id}
              className='w-full md:min-w-[620px] max-w-sm overflow-hidden rounded-xl bg-[#F5F5F5]'
            >
              <div
                className='relative h-[380px] w-full overflow-hidden rounded-2xl'
                onClick={() => router.push(iniciativa.ruta)}
              >
                <Image
                  src={iniciativa.imagen}
                  alt={iniciativa.titulo}
                  fill
                  className='pointer-events-none object-cover'
                />
              </div>
              <div className='p-6'>
                <div className='flex items-start justify-between'>
                  <div className='mb-8'>
                    <h3 className='mb-1 text-xl font-bold text-black'>
                      {iniciativa.titulo}
                    </h3>
                    <p className='text-lg font-light text-[#A1A1A1]'>
                      {iniciativa.descripcion}
                    </p>
                  </div>
                  <Button
                    href={iniciativa.ruta}
                    label='Ver Iniciativa'
                    className='text-xs'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
