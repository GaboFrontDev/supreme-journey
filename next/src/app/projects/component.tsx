'use client';
import Image from 'next/image';
import Button from '../components/Button';
import CarouselWrapper from '../components/CarouselWrapper';
import FilterButton from '../components/FilterButton';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';
import useProjectSearch from '../hooks';
import { CategoriaProyectoData, PageData, StrapiResponse } from './strapi';
import { formatSlug } from '@/utils/formatSlug';
import { useMemo } from 'react';

interface ProjectsComponentProps {
  categories: StrapiResponse<CategoriaProyectoData>;
}

interface ProjectProps {
  category: CategoriaProyectoData;
  searchTerm: string;
}

const CategoryComponent = ({ category, searchTerm }: ProjectProps) => {
  const projects = useMemo(() => {
    return category.attributes.proyectos_ares.data.filter((item) =>
      item.attributes.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [category, searchTerm]);

  if (projects.length === 0) {
    return null;
  }

  return (
    <Section width='max-w-7xl' paddingTop='pt-0' key={category.id}>
      <div className='mb-16 flex items-center justify-between'>
        <h2 className='text-5xl font-bold text-[#636B69]'>
          {category.attributes.nombre}
        </h2>
        <Button
          href={`/projects/${formatSlug(category.attributes.nombre)}`}
          label='Ver todos'
          variant='secondary'
        />
      </div>
      <CarouselWrapper arrowOffsetY='75%'>
        {projects.map((project) => (
          <ProjectCard
            key={project.attributes.nombre}
            title={project.attributes.nombre}
            location={project.attributes.ficha.ubicacion}
            categories={project.attributes.categoria_proyecto.data.map(
              (category) => category.attributes.nombre
            )}
            image={
              project.attributes.miniatura.data.attributes.formats.medium.url
            }
            parentCategory={formatSlug(category.attributes.nombre)}
          />
        ))}
      </CarouselWrapper>
    </Section>
  );
};

export default function ProjectsComponent({
  categories,
}: ProjectsComponentProps) {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } =
    useProjectSearch();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory([category]);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const categoriesRendered = useMemo(() => {
    return categories.data.map((category, index) => (
      <CategoryComponent
        key={index}
        category={category}
        searchTerm={searchQuery}
      />
    ));
  }, [categories, searchQuery]);

  return (
    <>
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
          {categories.data.map((category, index) => (
            <FilterButton
              key={index}
              label={category.attributes.nombre}
              onClick={() => handleCategoryClick(category.attributes.nombre)}
              className={
                selectedCategory.includes(category.attributes.nombre)
                  ? 'bg-[#636B69] text-white'
                  : 'bg-[#EFEFEF] text-black'
              }
            />
          ))}
        </div>
      </Section>
      {categoriesRendered.length > 0 ? (
        categoriesRendered
      ) : (
        <Section width='max-w-7xl' paddingTop='pt-20'>
          <div className='text-center'>
            <h2 className='text-3xl text-[#636B69]'>
              No se encontraron proyectos que coincidan con tu búsqueda.
            </h2>
          </div>
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
    </>
  );
}
