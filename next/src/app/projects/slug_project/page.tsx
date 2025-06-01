import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Section from '@/app/components/Section';
import Link from 'next/link';
import ProjectCard from '@/app/components/ProjectCard';
import CarouselWrapper from '@/app/components/CarouselWrapper';
import { keysToCategories, projectCards } from '../consts';


type ProjectSection = {
  title: string;
  location: string;
  year: string;
  landArea: string;
  builtArea: string;
  client: string;
  projectType: string[];
  concept: string;
  description: string;
  services: string;
  leaders: string[];
  team: string[];
  gallery: string[];
  mainImages: string[];
  categories: string[];
}

export default function SlugProjectPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header forceScrolledStyle />

      <Section width='max-w-7xl' paddingTop='pt-32' paddingBottom='pb-12'>
        <div className='flex items-center justify-between gap-36'>
          <div className='flex-col'>
            <div className='mb-10 flex items-center gap-2'>
              <Link href='/projects' className='flex items-center gap-2'>
                <span className='text-sm font-bold text-[#A1A1A1]'>
                  Proyectos
                </span>
              </Link>
              <Link
                href='/projects/slug_category'
                className='flex items-center gap-2'
              >
                <Image
                  src='/icons/breadcrumb_left.png'
                  width={24}
                  height={24}
                  alt='Icono de breadcrumb'
                  className='rotate-180 object-cover'
                />
                <span className='text-sm font-bold text-[#A1A1A1]'>
                  Proyectos
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
                  Averanda
                </span>
              </div>
            </div>
            <h2 className='mb-6 mt-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
              Averanda
            </h2>
          </div>
          <p className='max-w-2xl text-lg text-black'>
            El concepto general arquitectónico se fundamentó en crear un espacio
            de usos mixtos que incluye centro comercial, oficinas, vivienda y
            hotel, este espacio cuenta con pasillos abiertos o semi-cubierto y
            un jardín central que manifiesta espacios agradables y tranquilos.
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
            src='/images/projects/1.png'
            alt='Imagen de categoría'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl'>
        <div className='grid grid-cols-[1fr_580px]'>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
              Ficha
            </h2>
            <div className='flex flex-col items-start gap-y-6'>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>Año</span>
                <p className='text-lg text-black'>2019</p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>Ubicación</span>
                <p className='text-lg text-black'>
                  Cuernavaca, Morelos, México
                </p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>
                  Superficie del terreno
                </span>
                <p className='text-lg text-black'>48,916 m²</p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>
                  Superficie construida
                </span>
                <p className='text-lg text-black'>257,356 m²</p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>Cliente</span>
                <p className='text-lg text-black'>Proarquitectura</p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>
                  Tipo de proyecto
                </span>
                <p className='text-lg text-black'>
                  Centro comercial, Usos Mixtos
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
              Concepto
            </h2>
            <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
              Manifestar espacios agradables y tranquilos para ser transitados
              por los usuarios
            </h2>
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-0'>
        <h2 className='mb-16 text-5xl font-bold text-[#636B69]'>Galería</h2>
        <CarouselWrapper>
          <div className='w-[300px] h-[180px] overflow-hidden rounded-xl relative'>
            <Image
              src='/images/projects/2.png'
              alt='Imagen de categoría'
              fill
              className='object-cover'
            />
          </div>
          <div className='w-[300px] h-[180px] overflow-hidden rounded-xl relative'>
            <Image
              src='/images/projects/4.png'
              alt='Imagen de categoría'
              fill
              className='object-cover'
            />
          </div>
          <div className='w-[300px] h-[180px] overflow-hidden rounded-xl relative'>
            <Image
              src='/images/projects/5.png'
              alt='Imagen de categoría'
              fill
              className='object-cover'
            />
          </div>
          <div className='w-[300px] h-[180px] overflow-hidden rounded-xl relative'>
            <Image
              src='/images/projects/1.png'
              alt='Imagen de categoría'
              fill
              className='object-cover'
            />
          </div>
          <div className='w-[300px] h-[180px] overflow-hidden rounded-xl relative'>
            <Image
              src='/images/projects/6.png'
              alt='Imagen de categoría'
              fill
              className='object-cover'
            />
          </div>
        </CarouselWrapper>
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
            src='/images/projects/2.png'
            alt='Imagen de categoría'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl'>
        <h2 className=' text-5xl font-bold text-[#636B69]'>Servicios</h2>
        <div className='flex items-center justify-between gap-36'>
          <div className='relative min-h-[564px] min-w-[564px] overflow-hidden rounded-2xl'>
            <Image
              src='/images/projects/3.png'
              alt='Imagen de servicio'
              fill
              className='object-cover'
            />
          </div>
          <p className='max-w-2xl text-lg text-black'>
            El proyecto se compone por un cuerpo de 2 niveles de área comercial,
            4 niveles de estacionamiento, que incluyen 3 torres de vivienda de
            18 niveles cada una y alrededor de 60 departamentos por torre, una
            torre de oficinas de 10 niveles y 2 hoteles business class. En
            general el centro comercial se levantó en diferentes plataformas que
            se adaptan a la morfología del terreno, además cuenta con pasillos,
            circulaciones verticales y elevadores que se comunican entre sí para
            poder hacer el traslado rápido y fácil entre los diferentes
            estacionamientos y las plantas del área comercial.
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
            src='/images/projects/4.png'
            alt='Imagen de categoría'
            fill
            className='object-cover'
          />
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
            src='/images/projects/5.png'
            alt='Imagen de categoría'
            fill
            className='object-cover'
          />
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
            src='/images/projects/1.png'
            alt='Imagen de categoría'
            fill
            className='object-cover'
          />
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
            src='/images/projects/6.png'
            alt='Imagen de categoría'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl'>
        <div className='flex gap-52'>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
              Líderes
            </h2>
            <ul className='space-y-3 text-lg font-regular text-black'>
              <li>Jacinto Arenas</li>
              <li>Zyanya Quero</li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
              Equipo
            </h2>
            <ul className='space-y-3 text-lg font-regular text-black'>
              <li>Marlene García</li>
              <li>Belén Coronado</li>
              <li>Lourdes Barba</li>
              <li>Ulises Rivera</li>
              <li>Fernando Ayala</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl' background='bg-[#F5F5F5]'>
        <div className='flex mb-10'>
          <h2 className='max-w-md text-[32px] font-bold text-[#636B69] leading-tight'>
            Proyectos relacionados
          </h2>
        </div>
        <CarouselWrapper>
          <ProjectCard
            title='Galerás Valle Oriente'
            location='Monterrey, Nuevo León, México'
            categories={[
              'Centros Comerciales',
              'Usos Mixtos',
              'Hoteles',
              'Corporativo',
            ]}
            image='/images/shopping_centers/2.png'
            contentWhite={true}
          />
          <ProjectCard
            title='Paseo Villalta'
            location='Saltillo, Coahuila, México'
            categories={[
              'Centros Comerciales',
              'Usos Mixtos',
            ]}
            image='/images/mixed_uses/3.png'
            contentWhite={true}
          />
          <ProjectCard
            title='Aqua Living'
            location='Mérida, Yucatán, México'
            categories={[
              'Vivienda',
            ]}
            image='/images/dwelling/3.png'
            contentWhite={true}
          />
          <ProjectCard
            title='Marriot Santo Domingo'
            location='Santo Domingo, República Dominicana'
            categories={['Hoteles']}
            image='/images/hotels/1.png'
            contentWhite={true}
          />
        </CarouselWrapper>
      </Section>

      <Footer />
    </>
  );
}
