'use client';
import Image from "next/image";
import Button from "../components/Button";
import CarouselWrapper from "../components/CarouselWrapper";
import FilterButton from "../components/FilterButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { categories, projectCards } from './consts';
import { useMemo, useState } from "react";

export default function ProjectPage() {

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      }
      return [...prev, category];
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredMixedUses = useMemo(() => projectCards.mixedUses.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedCategory.length === 0 ? true : selectedCategory.some(category => project.categories?.includes(category)))
  ), [searchQuery, selectedCategory]);

  const filteredHotels = useMemo(() => projectCards.hotels.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedCategory.length === 0 ? true : selectedCategory.some(category => project.categories?.includes(category)))
  ), [searchQuery, selectedCategory]);

  const filteredDwellings = useMemo(() => projectCards.dwellings.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedCategory.length === 0 ? true : selectedCategory.some(category => project.categories?.includes(category)))
  ), [searchQuery, selectedCategory]);

  const filteredCentrosComerciales = useMemo(() => projectCards.centrosComerciales.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedCategory.length === 0 ? true : selectedCategory.some(category => project.categories?.includes(category)))
  ), [searchQuery, selectedCategory]);

  const filteredLatam = useMemo(() => projectCards.latam.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedCategory.length === 0 ? true : selectedCategory.some(category => project.categories?.includes(category)))
  ), [searchQuery, selectedCategory]);

  const filteredRetail = useMemo(() => projectCards.retail.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedCategory.length === 0 ? true : selectedCategory.some(category => project.categories?.includes(category)))
  ), [searchQuery, selectedCategory]);
  
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
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className='space-x-4'>
          {categories.map((category) => (
            <FilterButton key={category} label={category} onClick={() => handleCategoryClick(category)} className={selectedCategory.includes(category) ? 'bg-[#636B69] text-white' : 'bg-[#EFEFEF] text-black'} />
          ))}
        </div>
      </Section>

      {filteredMixedUses.length > 0 && (
      <Section width='max-w-7xl' paddingTop="pt-0">
        <div className='mb-16 flex items-center justify-between'>
          <h2 className='text-5xl font-bold text-[#636B69]'>Usos Mixtos</h2>
          <Button href="/projects/slug_category" label='Ver todos' variant="secondary" />
        </div>
        <CarouselWrapper arrowOffsetY="75%">
          {filteredMixedUses.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              location={project.location}
              categories={project.categories}
              image={project.image}
            />
          ))}
        </CarouselWrapper>
      </Section>
      )}

      {filteredHotels.length > 0 && (
      <Section width='max-w-7xl'>
        <div className='mb-16 flex items-center justify-between'>
          <h2 className='text-5xl font-bold text-[#636B69]'>Hoteles</h2>
          <Button href="/projects/slug_category" label='Ver todos' variant="secondary" />
        </div>
        <CarouselWrapper arrowOffsetY="75%">
          {filteredHotels.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              location={project.location}
              categories={project.categories}
              image={project.image}
            />
          ))}
        </CarouselWrapper>
      </Section>
      )}

      {filteredDwellings.length > 0 && (
      <Section width='max-w-7xl' paddingTop="pt-0">
        <div className='flex items-center justify-between mb-10'>
          <h2 className='max-w-md text-[32px] font-bold text-[#636B69] leading-tight'>
            Vivienda
          </h2>
          <Button label='Ver todos' />
        </div>
        <CarouselWrapper>
          {filteredDwellings.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              location={project.location}
              categories={project.categories}
              image={project.image}
            />
          ))}
        </CarouselWrapper>
      </Section>
      )}

      {filteredCentrosComerciales.length > 0 && (
      <Section width='max-w-7xl' paddingTop="pt-0">
        <div className='flex items-center justify-between mb-10'>
          <h2 className='max-w-md text-[32px] font-bold text-[#636B69] leading-tight'>
            Centros Comerciales
          </h2>
          <Button label='Ver todos' />  
        </div>
        <CarouselWrapper>
          {filteredCentrosComerciales.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              location={project.location}
              categories={project.categories}
              image={project.image}
            />
          ))}
        </CarouselWrapper>
      </Section>
      )}

      {filteredLatam.length > 0 && (
      <Section width='max-w-7xl' paddingTop="pt-0">
        <div className='flex items-center justify-between mb-10'>
          <h2 className='max-w-md text-[32px] font-bold text-[#636B69] leading-tight'>
            LATAM
          </h2>
          <Button label='Ver todos' />  
        </div>
        <CarouselWrapper>
          {filteredLatam.map((project) => ( 
            <ProjectCard
              key={project.title}
              title={project.title}
              location={project.location}
              categories={project.categories}
              image={project.image}
            />
          ))}
        </CarouselWrapper>
      </Section>
      )}

      {filteredRetail.length > 0 && (
      <Section width='max-w-7xl' paddingTop="pt-0">
        <div className='flex items-center justify-between mb-10'>
          <h2 className='max-w-md text-[32px] font-bold text-[#636B69] leading-tight'>
            Retail
          </h2>
          <Button label='Ver todos' />
        </div>
        <CarouselWrapper>
          {filteredRetail.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              location={project.location}
              categories={project.categories}
              image={project.image}
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
          <Button label='Trabajemos Juntos' />
        </div>
      </Section>

      <Footer />
    </>
  );
}
