import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';
import { PageAttributes, StrapiResponse } from '@/types/strapiBlog';
import qs from 'qs';
import { queryParams } from '../consts';
import SectionRenderer from '@/components/sections/SectionRenderer';
import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';
import { fetchWithToken } from '@/dynamicRendering/utils';
import CarouselWrapper from '@/app/components/CarouselWrapper';
import BlogCard from '@/app/components/BlogCard';

function formatDateToSpanish(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('es-ES', options);
}

export async function generateStaticParams(): Promise<
  { slug: string; attributes: PageAttributes }[]
> {
  const res = await fetchWithToken(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?${qs.stringify(queryParams)}`
  );
  const data = (await res) as StrapiResponse;
  const slugs = data.data.map((page) => {
    return {
      slug: page?.attributes.slug,
      attributes: page?.attributes,
    };
  });
  return slugs;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetchWithToken(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?filters[slug][$eq]=${params.slug}&${qs.stringify(queryParams)}`
  );
  const data = (await res) as StrapiResponse;
  const page = data.data[0];

  const { attributes } = page;
  if (!page) {
    return notFound();
  }

  const sections = attributes.secciones;
  return (
    <main>
      <Section width='max-w-7xl' paddingTop='pt-32' paddingBottom='pb-0'>
        <div className='mb-10 md:flex items-center gap-2'>
          <Link href='/blog' className='flex items-center gap-2'>
            <Image
              src='/icons/breadcrumb_left.png'
              width={24}
              height={24}
              alt='Icono de breadcrumb'
              className='object-cover'
            />
            <span className='text-sm font-bold text-[#A1A1A1]'>Blog</span>
          </Link>
        </div>
      </Section>
      <Section width='max-w-7xl' paddingTop='pt-12'>
        <div className='flex items-start justify-between gap-36'>
          <div>
            <h2 className='my-2 max-w-2xl text-4xl font-bold leading-tight text-[#636B69]'>
              {attributes.nombre}
            </h2>
            <span className='text-lg font-bold text-[#A1A1A1]'>
              {formatDateToSpanish(attributes.fecha || attributes.createdAt)}
            </span>
          </div>
        </div>
      </Section>
      {sections?.map((section, index) => (
        <SectionRenderer
          key={`${section.__component}-${index}`}
          component={section}
        />
      ))}

      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-48'>
        <div className='md:grid grid-cols-2 gap-10'>
          <div className='md:grid grid-cols-3 gap-10'>
            <div className='space-y-4'>
              <p className='text-md font-bold text-[#A1A1A1]'>Elaborado por</p>
              <div className='relative aspect-square w-full max-w-[500px] overflow-hidden rounded-lg'>
                <Image
                  src={
                    attributes.autor.data?.attributes.foto.data?.attributes.url
                  }
                  alt='author'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='space-y-1'>
                <p className='text-md font-bold text-black'>
                  {attributes.autor.data?.attributes.nombre}
                </p>
                <p className='text-sm text-[#A1A1A1]'>
                  {attributes.autor.data?.attributes.titulo}
                </p>
              </div>
            </div>
          </div>
          <div className='md:grid grid-cols-2 gap-10'>
            <div className='space-y-2'>
              <p className='text-md mb-6 font-bold text-[#A1A1A1]'>
                Involucrados
              </p>
              {attributes.involucrados?.map((involucrado, index) => (
                <p key={index} className='text-md text-black'>
                  {involucrado}
                </p>
              ))}
            </div>
            <div className='space-y-2'>
              <p className='text-md mb-6 font-bold text-[#A1A1A1]'>
                Mercado relacionado
              </p>
              {attributes.categoria_proyectos.data?.map((categoria, index) => (
                <p key={index} className='text-md text-black'>
                  {categoria?.attributes.nombre}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-48'>
        <h2 className='mb-14 mt-2 text-4xl font-bold leading-tight text-[#636B69]'>
          Artículos relacionados
        </h2>
        <div className='md:grid grid-cols-2 gap-10'>
          {attributes.relacionados.data?.map((blog, index) => (
            <BlogCard
              key={index}
              images={[blog?.attributes.miniatura.data?.attributes.url]}
              date={formatDateToSpanish(blog?.attributes.createdAt)}
              title={blog?.attributes.nombre}
              slug={blog?.attributes.slug}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
