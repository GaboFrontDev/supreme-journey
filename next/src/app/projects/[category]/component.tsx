'use client';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Section from '@/app/components/Section';
import Link from 'next/link';
import Button from '@/app/components/Button';
import ProjectCard from '@/app/components/ProjectCard';
import useProjectSearch from '@/app/hooks';
import { categories } from './consts';
import type { CategoryKey } from './consts';

const HeadSection = ({
  category,
  description,
}: {
  category: CategoryKey;
  description: string;
}) => {
  const { keyToCategory } = useProjectSearch();

  return (
    <Section width='max-w-7xl' paddingTop='pt-32' paddingBottom='pb-12'>
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
              <span className='text-sm font-bold text-[#A1A1A1]'>
                Proyectos
              </span>
            </Link>
          </div>
          <h2 className='mb-6 mt-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
            {keyToCategory[category as keyof typeof keyToCategory]}
          </h2>
        </div>
        <p className='max-w-2xl text-lg text-black'>{description}</p>
      </div>
    </Section>
  );
};

const ProjectList = ({ projects, category }: { projects: any[]; category: CategoryKey }) => {
  return (
    <Section width='max-w-7xl' paddingTop='pt-0'>
      <div className='grid grid-cols-2 gap-10'>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            location={project.location}
            categories={project.categories}
            image={project.image}
            parentCategory={category}
          />
        ))}
      </div>
    </Section>
  );
};

export default function CategoryPageComponent({
  params,
}: {
  params: { category: CategoryKey };
}) {
  const { category } = params;
  const { searchQuery, setSearchQuery, projectsToKey } = useProjectSearch();

  const categoryData = categories[category];

  const projects = projectsToKey[category as keyof typeof projectsToKey];

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Header forceScrolledStyle />

      <HeadSection category={category} description={categoryData.description} />

      <Section
        width='w-full'
        paddingTop='pt-10'
        paddingBottom='pb-10'
        paddingLeft='pl-0'
        paddingRight='pr-0'
      >
        <div className='relative h-[810px] w-full overflow-hidden rounded-t-3xl'>
          <Image
            src={categoryData.image}
            alt='Imagen de categoría'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingBottom='pb-20'>
        <div className='flex items-center'>
          <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
            {categoryData.secondDescription}
          </h2>
        </div>
        <div className='mt-20 flex items-center gap-4'>
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

      <ProjectList projects={projects} category={category} />

      <Footer />
    </>
  );
}
