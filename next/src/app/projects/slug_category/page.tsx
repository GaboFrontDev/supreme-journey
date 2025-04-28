import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Section from '@/app/components/Section';
import Link from 'next/link';
import Button from '@/app/components/Button';
import ProjectCard from '@/app/components/ProjectCard';

export default function SlugCategoryPage() {
  return (
    <>
      <Header forceScrolledStyle />

      <Section width='max-w-7xl' paddingTop='pt-52' paddingBottom='pb-12'>
        <div className='flex items-center justify-between gap-36'>
          <div className='flex-col'>
            <div className='mb-10 flex items-center gap-2'>
              <Link href='/projects' className='flex items-center gap-2'>
                <Image
                  src='/icons/breadcrumb_left.png'
                  width={24}
                  height={24}
                  alt='Icono de breadcrumb'
                  className='object-cover'
                />
                <span className='text-sm font-bold text-[#A1A1A1]'>Proyectos</span>
              </Link>
            </div>
            <h2 className='mb-6 mt-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
              Usos Mixtos
            </h2>
          </div>
          <p className='max-w-2xl text-lg text-black'>
            La integración física y funcional de espacios residenciales,
            comerciales, culturales y de transporte, diseñados para crear
            entornos equilibrados y dinámicos que fomentan la convivencia, la
            movilidad eficiente y el desarrollo sotenible.
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
            src='/images/categories/1.png'
            alt='Imagen de categoría'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section
        width='max-w-7xl'
        paddingBottom='pb-20'
      >
        <div className='flex items-center'>
          <h2 className='max-w-2xl text-[40px] font-regular text-black leading-tight'>
            Cada proyecto de Usos Mixtos redefine la vida urbana, creando espacios que integran funciones y mejoran la calidad de vida.
          </h2>
        </div>
        <div className="flex items-center mt-20 gap-4">
          <div className="relative flex-1">
            <Image 
              src="/icons/search.png" 
              alt="Buscar" 
              width={24} 
              height={24} 
              className="object-cover pointer-events-none ml-4 absolute top-1/2 -translate-y-1/2" 
            />
            <input 
              type="text" 
              placeholder="Buscar un proyecto en específico" 
              className="w-full h-12 text-base rounded-full pl-12 pr-4 focus:outline-0 border border-[#e0e0e0] placeholder:text-[#A1A1A1] hover:bg-[#e0e0e0] transition-all"
            />
          </div>
          <Button label="Ordenar" variant="secondary" iconFilter />
        </div>
      </Section>
      
      <Section width='max-w-7xl' paddingTop="pt-0">
        <div className='grid grid-cols-2 gap-10'>
          <ProjectCard
            title='Averanda'
            location='Cuernavaca, Morelos, México'
            categories={['Usos Mixtos']}
            image='/images/mixed_uses/1.png'
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
            title='The Point'
            location='CDMX, México'
            categories={[
              'Usos Mixtos',
              'Vivienda',
            ]}
            image='/images/mixed_uses/2.png'
          />
        </div>
        <div className="w-[250px] mx-auto text-center mt-32 mb-20 cursor-pointer">
          <div className="h-2 overflow-hidden rounded-full bg-[#EFEFEF] relative">
            <span className="inline-flex w-[50px] h-2 left-0 rounded-full bg-[#989F9C] absolute"></span>
          </div>
          <p className="text-sm mt-4">Cargando más elementos</p>
        </div>
      </Section>

      <Footer />
    </>
  );
}
