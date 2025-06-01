'use client';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Section from '@/app/components/Section';
import Link from 'next/link';
import ProjectCard from '@/app/components/ProjectCard';
import CarouselWrapper from '@/app/components/CarouselWrapper';
import { keysToCategories, projectCards } from '../../consts';
import type { Project } from '@/app/projects/consts';

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
  params,
}: {
  params: { project: string; category: string };
}) {
  let project: Partial<Project> | undefined;
  project = projectCards[params.category as keyof typeof projectCards].find(
    (project) => formatTitleToUrl(project.title) === params.project
  );

  if (!project) {
    return <div>Project not found</div>;
  }

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
                href={`/projects/${params.category}`}
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
                  {keysToCategories[
                    params.category as keyof typeof keysToCategories
                  ] || 'Proyectos'}
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
                  {project.title}
                </span>
              </div>
            </div>
            <h2 className='mb-6 mt-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
              {project.title}
            </h2>
          </div>
          <p className='max-w-2xl text-lg text-black'>{project.rightPanel}</p>
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
            src={project.image ?? '/images/projects/1.png'}
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
                <p className='text-lg text-black'>{project.ficha?.año}</p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>Ubicación</span>
                <p className='text-lg text-black'>{project.ficha?.ubicacion}</p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>
                  Superficie del terreno
                </span>
                <p className='text-lg text-black'>{project.ficha?.landArea}</p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>
                  Superficie construida
                </span>
                <p className='text-lg text-black'>{project.ficha?.builtArea}</p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>Cliente</span>
                <p className='text-lg text-black'>{project.ficha?.cliente}</p>
              </div>
              <div className='space-y-1'>
                <span className='text-base text-[#A1A1A1]'>
                  Tipo de proyecto
                </span>
                <p className='text-lg text-black'>{project.ficha?.tipo}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
              Concepto
            </h2>
            <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
              {project.concepto}
            </h2>
          </div>
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
            src={project.bigImages?.[0] ?? '/images/projects/2.png'}
            alt='Imagen de categoría'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      {project.servicios && (
        <Section width='max-w-7xl'>
          <div className='flex items-center justify-between gap-36'>
            <div className='relative min-h-[564px] min-w-[564px] overflow-hidden rounded-2xl'>
              <Image
                src={project.servicios?.imagen ?? ''}
                alt='Imagen de servicio'
                fill
                className='object-cover'
              />
            </div>
            <div>
              {project.servicios?.description.map((description, index) => (
                <p className='max-w-2xl pb-2 text-lg text-black' key={index}>
                  {description}
                </p>
              ))}
            </div>
          </div>
        </Section>
      )}

      {project.bigImages?.slice(1).map((image, index) => (
        <Section
          width='w-full'
          paddingTop='pt-10'
          paddingBottom='pb-10'
          paddingLeft='pl-0'
          paddingRight='pr-0'
          key={index}
        >
          {image.includes('jpg') || image.includes('png') ? (
            <div className='flex items-center justify-center gap-12'>
              <div className='relative min-h-[800px] min-w-[1124px] overflow-hidden rounded-2xl'>
                <Image
                  src={image}
                  alt='Imagen de categoría'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          ) : (
            <div className='flex items-center justify-between gap-36 mx-55'>
              <div className='relative min-w-[564px] overflow-hidden p-10'>
                <p className='max-w-2xl text-lg text-black'>{image}</p>
              </div>
              <div className='relative min-w-[564px] overflow-hidden '></div>
            </div>
          )}
        </Section>
      ))}

      <Section width='max-w-7xl'>
        <div className='flex gap-52'>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
              Líderes
            </h2>
            <ul className='font-regular space-y-3 text-lg text-black'>
              {project.lideres?.map((lider, index) => (
                <li className='hover:underline' key={index}>
                  <Link href={`/the_study/${formatTitleToUrl(lider)}`}>
                    {lider}
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
              {project.equipo?.map((equipo, index) => (
                <li key={index}>{equipo}</li>
              ))}
            </ul>
          </div>
          {project.premios && (
            <div>
              <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
                Premios
              </h2>
              <ul className='font-regular space-y-3 text-lg text-black'>
                {project.premios?.map((premio, index) => (
                  <li key={index}>{premio}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      <Section width='max-w-7xl' background='bg-[#F5F5F5]'>
        <div className='mb-10 flex'>
          <h2 className='max-w-md text-[32px] font-bold leading-tight text-[#636B69]'>
            Proyectos relacionados
          </h2>
        </div>
        <CarouselWrapper>
          {projectCards[params.category as keyof typeof projectCards].map(
            (project, index) => (
              <ProjectCard
                title={project.title}
                location={project.location ?? ''}
                categories={project.categories ?? []}
                image={project.image ?? ''}
                contentWhite={true}
                key={index}
                parentCategory={params.category}
              />
            )
          )}
        </CarouselWrapper>
      </Section>

      <Footer />
    </>
  );
}
