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
      slug: page.attributes.slug,
      attributes: page.attributes,
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

  const sections = attributes.datosSeccion.data.attributes.data;
  return (
    <main>
      <Header forceScrolledStyle />
      <Section width='max-w-7xl' paddingTop='pt-32' paddingBottom='pb-0'>
        <div className='mb-10 flex items-center gap-2'>
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
            <h2 className='my-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
              {attributes.datosSeccion.data.attributes.name}
            </h2>
            <span className='text-lg font-bold text-[#A1A1A1]'>
              {formatDateToSpanish(attributes.createdAt)}
            </span>
          </div>
        </div>
      </Section>
      {sections.map((section, index) => (
        <SectionRenderer
          key={`${section.__component}-${index}`}
          component={section}
        />
      ))}

      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-48'>
        <h2 className='mb-14 mt-2 text-[40px] font-bold leading-tight text-[#636B69]'>
          Artículos relacionados
        </h2>
        <CarouselWrapper>
          {attributes.articulos_relacionados.data.map((blog, index) => (
            <BlogCard
              key={index}
              images={[blog.attributes.miniatura.data.attributes.url]}
              date={formatDateToSpanish(blog.attributes.createdAt)}
              title={blog.attributes.datosSeccion.data.attributes.name}
              slug={blog.attributes.slug}
            />
          ))}
        </CarouselWrapper>
      </Section>

       
    </main>
  );
}
