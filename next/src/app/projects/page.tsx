'use client';
import Image from 'next/image';
import Button from '../components/Button';
import CarouselWrapper from '../components/CarouselWrapper';
import FilterButton from '../components/FilterButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';
import { categories } from './consts';
import useProjectSearch from '../hooks';

export default function ProjectPage() {
  const {
    filteredMixedUses,
    filteredHotels,
    filteredDwellings,
    filteredCentrosComerciales,
    filteredLatam,
    filteredRetail,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
  } = useProjectSearch();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      }
      return [...prev, category];
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Header forceScrolledStyle />

      <Section width='max-w-7xl' paddingTop='pt-52'>
        <div className='flex items-center'>
          <h2 className='max-w-md text-[40px] font-bold leading-tight text-[#636B69]'>
            Explora nuestros proyectos
          </h2>
        </div>
        <div className='relative mb-10 mt-20 flex items-center'>
          <Image
            src='icons/search.png'
            alt='Buscar'
            width={24}
            height={24}
            className='pointer-events-none absolute ml-4 object-cover'
          />
          <input
            type='text'
            placeholder='Buscar un proyecto en específico'
            className='h-12 w-full rounded-full border border-[#e0e0e0] pl-12 pr-4 text-base
              transition-all placeholder:text-[#A1A1A1] hover:bg-[#e0e0e0] focus:outline-0'
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className='space-x-4'>
          {categories.map((category) => (
            <FilterButton
              key={category}
              label={category}
              onClick={() => handleCategoryClick(category)}
              className={
                selectedCategory.includes(category)
                  ? 'bg-[#636B69] text-white'
                  : 'bg-[#EFEFEF] text-black'
              }
            />
          ))}
        </div>
      </Section>

      {filteredMixedUses.length > 0 && (
        <Section width='max-w-7xl' paddingTop='pt-0'>
          <div className='mb-16 flex items-center justify-between'>
            <h2 className='text-5xl font-bold text-[#636B69]'>Usos Mixtos</h2>
            <Button
              href='/projects/mixedUses'
              label='Ver todos'
              variant='secondary'
            />
          </div>
          <CarouselWrapper arrowOffsetY='75%'>
            {filteredMixedUses.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                location={project.location}
                categories={project.categories}
                image={project.image}
                parentCategory='mixedUses'
              />
            ))}
          </CarouselWrapper>
        </Section>
      )}

      {filteredHotels.length > 0 && (
        <Section width='max-w-7xl'>
          <div className='mb-16 flex items-center justify-between'>
            <h2 className='text-5xl font-bold text-[#636B69]'>Hoteles</h2>
            <Button
              href='/projects/hotels'
              label='Ver todos'
              variant='secondary'
            />
          </div>
          <CarouselWrapper arrowOffsetY='75%'>
            {filteredHotels.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                location={project.location}
                categories={project.categories}
                image={project.image}
                parentCategory='hotels'
              />
            ))}
          </CarouselWrapper>
        </Section>
      )}

      {filteredDwellings.length > 0 && (
        <Section width='max-w-7xl' paddingTop='pt-0'>
          <div className='mb-10 flex items-center justify-between'>
            <h2 className='max-w-md text-[32px] font-bold leading-tight text-[#636B69]'>
              Vivienda
            </h2>
            <Button
              href='/projects/dwellings'
              label='Ver todos'
              variant='secondary'
            />
          </div>
          <CarouselWrapper>
            {filteredDwellings.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                location={project.location}
                categories={project.categories}
                image={project.image}
                parentCategory='dwellings'
              />
            ))}
          </CarouselWrapper>
        </Section>
      )}

      {filteredCentrosComerciales.length > 0 && (
        <Section width='max-w-7xl' paddingTop='pt-0'>
          <div className='mb-10 flex items-center justify-between'>
            <h2 className='max-w-md text-[32px] font-bold leading-tight text-[#636B69]'>
              Centros Comerciales
            </h2>
            <Button
              href='/projects/centrosComerciales'
              label='Ver todos'
              variant='secondary'
            />
          </div>
          <CarouselWrapper>
            {filteredCentrosComerciales.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                location={project.location}
                categories={project.categories}
                image={project.image}
                parentCategory='centrosComerciales'
              />
            ))}
          </CarouselWrapper>
        </Section>
      )}

      {filteredLatam.length > 0 && (
        <Section width='max-w-7xl' paddingTop='pt-0'>
          <div className='mb-10 flex items-center justify-between'>
            <h2 className='max-w-md text-[32px] font-bold leading-tight text-[#636B69]'>
              LATAM
            </h2>
            <Button
              href='/projects/latam'
              label='Ver todos'
              variant='secondary'
            />
          </div>
          <CarouselWrapper>
            {filteredLatam.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                location={project.location}
                categories={project.categories}
                image={project.image}
                parentCategory='latam'
              />
            ))}
          </CarouselWrapper>
        </Section>
      )}

      {filteredRetail.length > 0 && (
        <Section width='max-w-7xl' paddingTop='pt-0'>
          <div className='mb-10 flex items-center justify-between'>
            <h2 className='max-w-md text-[32px] font-bold leading-tight text-[#636B69]'>
              Retail
            </h2>
            <Button
              href='/projects/retail'
              label='Ver todos'
              variant='secondary'
            />
          </div>
          <CarouselWrapper>
            {filteredRetail.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                location={project.location}
                categories={project.categories}
                image={project.image}
                parentCategory='retail'
              />
            ))}
          </CarouselWrapper>
        </Section>
      )}

      <Section width='max-w-4xl' paddingBottom='pb-36'>
        <div className='text-center'>
          <h2 className='mb-20 text-5xl text-black'>
            Transformemos en conjunto las ideas en diseños que trasciendan
          </h2>
          <Button label='Trabajemos Juntos' href='/contact' />
        </div>
      </Section>

      <Footer />
    </>
  );
}
