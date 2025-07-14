'use client';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Section from '@/app/components/Section';
import Link from 'next/link';
import ProjectCard from '@/app/components/ProjectCard';
import CarouselWrapper from '@/app/components/CarouselWrapper';
import { PageData } from '../../strapi';
import SectionRenderer from '@/components/sections/SectionRenderer';

const formatTitleToUrl = (title: string) => {
  // replace tildes too
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/~/g, '')
    .replace('i', 'i')
    .replace('é', 'e')
    .replace('ú', 'u')
    .replace('ó', 'o')
    .replace('á', 'a')
    .replace('í', 'i')
    .replace('ñ', 'n')
    .replace('ü', 'u')
    .replace('ç', 'c')
    .replace('ñ', 'n');
};

export default function ProjectPage({
  project,
  category,
}: {
  project: PageData;
  category: string;
}) {
  if (!project) {
    return <div>Project not found</div>;
  }

  const sections = project.attributes.secciones || [];

  return (
    <>

      <Section width='max-w-7xl' paddingTop='pt-32' paddingBottom='pb-12'>
        <div className='md:flex items-center justify-between gap-36'>
          <div className='flex-col'>
            <div className='mb-10 flex items-center gap-2'>
              <Link href='/projects' className='flex items-center gap-2'>
                <span className='text-sm font-bold text-[#A1A1A1]'>
                  Proyectos
                </span>
              </Link>
              <Link
                href={`/projects/${formatTitleToUrl(category)}`}
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
                  {category || 'Proyectos'}
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
                  {project.attributes.nombre}
                </span>
              </div>
            </div>
            <h2 className='mb-6 mt-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
              {project.attributes.nombre}
            </h2>
          </div>
          <p className='max-w-2xl text-lg text-black'>
            {project.attributes.texto}
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
        <div className='relative h-[810px] w-full select-none overflow-hidden rounded-t-3xl'>
          <Image
            src={
              project.attributes.miniatura.data.attributes.url ??
              '/images/projects/1.png'
            }
            alt='Imagen de categoría'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl'>
        <div className='md:grid grid-cols-[1fr_580px]'>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
              Ficha
            </h2>
            <div className='flex flex-col items-start gap-y-6'>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>Año</span>
                <p className='text-lg text-black'>
                  {project.attributes.ficha?.year ||  project.attributes.ficha?.año}
                </p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>Ubicación</span>
                <p className='text-lg text-black'>
                  {project.attributes.ficha?.ubicacion}
                </p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>
                  Superficie del terreno
                </span>
                <p className='text-lg text-black'>
                  {project.attributes.ficha?.landArea}
                </p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>
                  Superficie construida
                </span>
                <p className='text-lg text-black'>
                  {project.attributes.ficha?.builtArea}
                </p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>Cliente</span>
                <p className='text-lg text-black'>
                  {project.attributes.ficha?.cliente}
                </p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>
                  Tipo de proyecto
                </span>
                <p className='text-lg text-black'>
                  {project.attributes.ficha?.tipo}
                </p>
              </div>
              {project.attributes.ficha?.habitaciones && (
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>
                  Habitaciones
                </span>
                <p className='text-lg text-black'>
                  {project.attributes.ficha?.habitaciones}
                </p>
              </div>
              )}
            </div>
          </div>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
              Concepto
            </h2>
            <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
              {project.attributes.concepto}
            </h2>
          </div>
        </div>
      </Section>
      {sections.map((section, index) => (
        <SectionRenderer
          key={`${section.__component}-${index}`}
          component={section}
        />
      ))}

      <Section width='max-w-7xl'>
        <div className='md:flex gap-52'>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
              Líderes
            </h2>
            <ul className='font-regular space-y-3 text-lg text-black'>
              {project.attributes.lideres.data.map((lider, index) => (
                <li className='hover:underline' key={index}>
                  <Link
                    href={`/the_study/${formatTitleToUrl(lider.attributes.nombre)}`}
                  >
                    {lider.attributes.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
              Equipo
            </h2>
            <ul className='font-regular space-y-3 text-lg text-black'>
              {project.attributes.equipo?.map((nombre, index) => (
                <li key={index}>{nombre}</li>
              ))}
            </ul>
          </div>
          {project.attributes.premios && (
            <div>
              <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
                Premios
              </h2>
              <ul className='font-regular space-y-3 text-lg text-black'>
                {project.attributes.premios?.map((premio, index) => (
                  <li key={index}>{premio}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      <Section width='max-w-7xl' background='bg-[#F5F5F5]' paddingLeft='pl-0 md:pl-6' paddingRight='pr-0 md:pr-6'>
        <div className='mb-10 md:flex px-6'>
          <h2 className='max-w-md text-[32px] font-bold leading-tight text-[#636B69]'>
            Proyectos relacionados
          </h2>
        </div>
        <CarouselWrapper>
          {project.attributes.proyectos_relacionados.data.map(
            (project_rel, index) => (
              <ProjectCard
                title={project_rel.attributes.nombre}
                location={project_rel.attributes.ficha.ubicacion ?? ''}
                categories={
                  project_rel.attributes.categoria_proyecto.data.map(
                    (categoria) => categoria.attributes.nombre
                  ) ?? []
                }
                image={
                  project_rel.attributes.miniatura.data.attributes.url ?? ''
                }
                contentWhite={true}
                key={index}
                parentCategory={formatTitleToUrl(category)}
              />
            )
          )}
        </CarouselWrapper>
      </Section>
    </>
  );
}
