import Image from "next/image";
import Button from "../components/Button";
import CarouselWrapper from "../components/CarouselWrapper";
import FilterButton from "../components/FilterButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

export default function ProjectPage() {
  return (
    <>
      <Header forceScrolledStyle />

      <Section
        width='max-w-7xl'
        paddingTop="pt-52"
      >
        <div className='flex items-center'>
          <h2 className='max-w-md text-[40px] font-bold text-[#636B69] leading-tight'>
            Explora nuestros proyectos
          </h2>
        </div>
        <div className="flex items-center mt-20 mb-10 relative">
          <Image src="icons/search.png" alt="Buscar" width={24} height={24} className="object-cover pointer-events-none ml-4 absolute" />
          <input 
            type="text" 
            placeholder="Buscar un proyecto en específico" 
            className="w-full h-12 text-base rounded-full pl-12 pr-4 focus:outline-0 border border-[#e0e0e0] placeholder:text-[#A1A1A1] hover:bg-[#e0e0e0] transition-all"
          />
        </div>
        <div className='space-x-4'>
          <FilterButton label='Usos Mixtos' href="/projects/slug_category" />
          <FilterButton label='Centros Comerciales' />
          <FilterButton label='Vivienda' />
          <FilterButton label='Hoteles' />
          <FilterButton label='Master plan' />
          <FilterButton label='LATAM' />
          <FilterButton label='Retail' />
          <FilterButton label='Renovaciones y Expansiones' />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop="pt-0">
        <div className='flex items-center justify-between mb-10'>
          <h2 className='max-w-md text-[32px] font-bold text-[#636B69] leading-tight'>
            Usos Mixtos
          </h2>
          <Button href="/projects/slug_category" label='Ver todos' variant="secondary" />
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
      </Section>

      <Section width='max-w-7xl' paddingTop="pt-0">
        <div className='flex items-center justify-between mb-10'>
          <h2 className='max-w-md text-[32px] font-bold text-[#636B69] leading-tight'>
            Hoteles
          </h2>
          <Button label='Ver todos' />
        </div>
        <CarouselWrapper>
          <ProjectCard
            title='Marriot Santo Domingo'
            location='Santo Domingo, República Dominicana'
            categories={['Hoteles']}
            image='/images/hotels/1.png'
          />
          <ProjectCard
            title='Residence Inn Cancún'
            location='Cancún, Quintana Roo, México'
            categories={[
              'Hoteles',
            ]}
            image='/images/hotels/2.png'
          />
          <ProjectCard
            title='Aloft Santo Domingo'
            location='Santo Domingo, República Dominicana'
            categories={[
              'Hoteles',
            ]}
            image='/images/hotels/3.png'
          />
          <ProjectCard
            title='NOBU Los Cabos'
            location='Los Cabos, Baja California Sur, México'
            categories={[
              'Hoteles',
            ]}
            image='/images/hotels/4.png'
          /> 
        </CarouselWrapper>
      </Section>

      <Section width='max-w-7xl' paddingTop="pt-0">
        <div className='flex items-center justify-between mb-10'>
          <h2 className='max-w-md text-[32px] font-bold text-[#636B69] leading-tight'>
            Vivienda
          </h2>
          <Button label='Ver todos' />
        </div>
        <CarouselWrapper>
          <ProjectCard
            title='Cumbres Cancún'
            location='Cancún, Quintana Roo, México'
            categories={['Usos Mixtos']}
            image='/images/dwelling/1.png'
          />
          <ProjectCard
            title='Union Square'
            location='Zapopan, Jalisco, México'
            categories={[
              'Vivienda',
              'Usos Mixtos',
            ]}
            image='/images/dwelling/2.png'
          />
          <ProjectCard
            title='Aqua Living'
            location='Mérida, Yucatán, México'
            categories={[
              'Vivienda',
            ]}
            image='/images/dwelling/3.png'
          />
          <ProjectCard
            title='Merak'
            location='Zapopan, Jalisco, México'
            categories={[
              'Vivienda',
            ]}
            image='/images/dwelling/4.png'
          />
        </CarouselWrapper>
      </Section>

      <Section width='max-w-7xl' paddingTop="pt-0">
        <div className='flex items-center justify-between mb-10'>
          <h2 className='max-w-md text-[32px] font-bold text-[#636B69] leading-tight'>
            Usos Mixtos
          </h2>
          <Button label='Ver todos' variant="secondary" />
        </div>
        <CarouselWrapper>
          <ProjectCard
            title='Averanda'
            location='Cuernavaca, Morelos, México'
            categories={['Usos Mixtos']}
            image='/images/shopping_centers/1.png'
          />
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
          />
          <ProjectCard
            title='Diverplaza'
            location='Bogotá, Colombia'
            categories={[
              'Centros Comerciales',
              'Renovación y Expansiones',
              'LATAM',
            ]}
            image='/images/shopping_centers/3.png'
          />
          <ProjectCard
            title='River Place'
            location='Georgetown, Guyana'
            categories={[
              'Centros Comerciales',
              'LATAM',
            ]}
            image='/images/shopping_centers/4.png'
          />
        </CarouselWrapper>
      </Section>

      <Section width='max-w-4xl' paddingBottom='pb-36'>
        <div className='text-center'>
          <h2 className='mb-20 text-5xl text-black'>
            Transformemos en conjunto las ideas en diseños que trasciendan
          </h2>
          <Button label='Trabajemos Juntos' />
        </div>
      </Section>

      <Footer />
    </>
  );
}
