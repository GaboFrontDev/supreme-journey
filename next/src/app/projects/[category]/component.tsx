'use client';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Section from '@/app/components/Section';
import Link from 'next/link';
import Button from '@/app/components/Button';
import ProjectCard from '@/app/components/ProjectCard';
import useProjectSearch from '@/app/hooks';
import { categories } from './consts';
import type { CategoryKey } from './consts';
import { CategoriaProyectoData, PageData } from '../strapi';
import { formatSlug } from '@/utils/formatSlug';
import { useMemo } from 'react';

const HeadSection = ({
  category,
  description,
}: {
  category: string;
  description: string;
}) => {
  return (
    <Section width='max-w-7xl' paddingTop='pt-32' paddingBottom='pb-12' paddingLeft='pl-6 md:pl-0' paddingRight='pr-6 md:pr-0'>
      <div className='md:flex items-center justify-between gap-36'>
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
              <span className='text-sm font-bold text-[#A1A1A1]'>
                Proyectos
              </span>
            </Link>
          </div>
          <h2 className='mb-6 mt-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
            {category}
          </h2>
        </div>
        <p className='max-w-2xl md:text-lg text-black text-md'>{description}</p>
      </div>
    </Section>
  );
};

const ProjectList = ({
  projects,
  category,
}: {
  projects: PageData[];
  category: string;
}) => {
  return (
    <Section width='max-w-7xl' paddingTop='pt-0'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard
            key={project.attributes.nombre}
            title={project.attributes.nombre}
            location={project.attributes.ficha.ubicacion}
            categories={project.attributes.categoria_proyecto.data.map(
              (cat) => cat.attributes.nombre
            )}
            image={
              project.attributes.miniatura.data.attributes.url
            }
            parentCategory={category}
          />
        ))}
      </div>
    </Section>
  );
};

export default function CategoryPageComponent({
  category,
}: {
  category: CategoriaProyectoData;
}) {
  const { searchQuery, setSearchQuery } = useProjectSearch();

  const categoryData = category.attributes;

  const projects = useMemo(() => {
    return category.attributes.proyectos_ares.data.filter((project) => {
      const projectName = project.attributes.nombre.toLowerCase();
      const query = searchQuery.toLowerCase();
      return projectName.includes(query);
    });
  }, [category.attributes.proyectos_ares.data, searchQuery]);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <HeadSection
        category={categoryData.nombre}
        description={categoryData.concepto}
      />

      <Section
        width='w-full'
        paddingTop='pt-10'
        paddingBottom='pb-10'
        paddingLeft='pl-0'
        paddingRight='pr-0'
      >
        <div className='relative h-[300px] md:h-[810px] w-full overflow-hidden rounded-t-xl md:rounded-t-3xl md:rounded-t-none'>
          <Image
            src={categoryData.portada.data.attributes.url}
            alt='Imagen de categoría'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingBottom='pb-20'>
        <div className='md:flex items-center'>
          <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
            {categoryData.texto}
          </h2>
        </div>
        <div className='mt-20 md:flex items-center gap-4'>
          <div className='relative flex-1'>
            <Image
              src='/icons/search.png'
              alt='Buscar'
              width={24}
              height={24}
              className='pointer-events-none absolute top-1/2 ml-4 -translate-y-1/2 object-cover'
            />
            <input
              type='text'
              placeholder='Buscar un proyecto en específico'
              className='h-12 w-full rounded-full border border-[#e0e0e0] pl-12 pr-4 text-base
                transition-all placeholder:text-[#A1A1A1] hover:bg-[#e0e0e0] focus:outline-0'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button label='Ordenar' variant='secondary' iconFilter />
        </div>
      </Section>

      <ProjectList
        projects={projects}
        category={formatSlug(categoryData.nombre)}
      />
    </>
  );
}
