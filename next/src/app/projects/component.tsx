'use client';
import { useMemo } from 'react';
import Image from 'next/image';

import { CategoriaProyectoData, StrapiResponse } from './strapi';
import { CategoryComponent } from './categoriaComponent';

import Button from '../components/Button';
import FilterButton from '../components/FilterButton';
import Section from '../components/Section';
import useProjectSearch from '../hooks';

interface ProjectsComponentProps {
  categories: StrapiResponse<CategoriaProyectoData>;
}

interface CategoryFilterProps {
  categories: StrapiResponse<CategoriaProyectoData>;
  selectedCategory: string[];
  onCategoryClick: (category: string) => void;
}

const CategoryFilters = ({ categories, selectedCategory, onCategoryClick }: CategoryFilterProps) => (
  <div className='space-x-4'>
    {categories.data.map((category, index) => (
      <FilterButton
        key={index}
        label={category.attributes.nombre}
        onClick={() => onCategoryClick(category.attributes.nombre)}
        className={
          selectedCategory.includes(category.attributes.nombre)
            ? 'bg-[#636B69] text-white'
            : 'bg-[#EFEFEF] text-black'
        }
      />
    ))}
  </div>
);

export default function ProjectsComponent({
  categories: _categories,
}: ProjectsComponentProps) {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } =
    useProjectSearch();
  let categories = {..._categories};
  // sort categories by orden ascending
  categories.data = categories.data.sort((a, b) => a.attributes.orden - b.attributes.orden);

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
        <CategoryFilters 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
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
