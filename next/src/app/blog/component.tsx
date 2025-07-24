'use client';
import { useMemo, useState } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import BlogCard from '../components/BlogCard';
import FilterButton from '../components/FilterButton';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Image from 'next/image';
import { StrapiResponse } from '@/types/strapiBlog';

interface BlogPageComponentProps {
  posts: StrapiResponse;
}

export default function BlogPageComponent({ posts }: BlogPageComponentProps) {
  const [search, setSearch] = useState('');

  // Transformar los datos de Strapi al formato que necesitamos
  const transformedPosts = useMemo(() => {
    return posts.data.map((post) => {
      return {
        slug: post.attributes.slug,
        title: post.attributes.nombre || '',
        date: post.attributes.createdAt,
        image: post.attributes.miniatura?.data?.attributes?.url || '',
        paragraphs: post.attributes.preview || '',
        fecha: post.attributes.fecha || '',
      };
    });
  }, [posts]);

  const sortedPosts = useMemo(() => {
    return [...transformedPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [transformedPosts]);

  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);

  function formatDateToSpanish(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('es-ES', options);
  }

  function truncateText(text: string, maxLength: number): string {
    return text.length > maxLength
      ? text.slice(0, maxLength).trim() + '...'
      : text;
  }

  const filteredPosts = useMemo(() => {
    if (search) {
      return remainingPosts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    return remainingPosts;
  }, [search, remainingPosts]);

  if (!featuredPost) return null;

  return (
    <>
      <Section paddingBottom='pb-12'>
        <h2 className=' max-w-md text-4xl font-bold leading-tight text-[#636B69]'>
          Blog
        </h2>
      </Section>
      <Section width='max-w-7xl' paddingTop='pt-12' paddingBottom='pb-12'>
        <div className='items-center justify-between gap-36 md:flex'>
          <div className='relative min-h-[530px] w-full overflow-hidden rounded-2xl md:min-w-[564px]'>
            {featuredPost.image && (
              <Image
                src={featuredPost.image}
                alt='Imagen de blog'
                fill
                className='object-cover'
              />
            )}
          </div>
          <div className='flex flex-col items-start gap-6'>
            <span className='text-lg text-[#A1A1A1]'>
              {formatDateToSpanish(featuredPost.fecha)}
            </span>
            <h2 className=' max-w-md text-4xl font-bold leading-tight text-[#636B69]'>
              {featuredPost.title}
            </h2>
            <FilterButton label='Usos Mixtos' />
            {featuredPost.paragraphs && featuredPost.paragraphs.length > 0 && (
              <p className='my-6 hidden py-5 text-lg text-black'>
                {truncateText(featuredPost.paragraphs, 200)}
              </p>
            )}
            <Button
              href={`/blog/${featuredPost.slug}`}
              label='Continuar Leyendo'
            />
          </div>
        </div>
        <div className='mt-20 items-center gap-4 md:flex'>
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-0'>
        <div className='grid-cols-2 gap-x-32 gap-y-10 md:grid'>
          {filteredPosts.length === 0 && (
            <div className='col-span-2'>
              <p className='text-lg text-black'>No se encontraron resultados</p>
            </div>
          )}
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={index}
              images={[post.image]}
              date={formatDateToSpanish(post.fecha)}
              title={post.title}
              slug={post.slug}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
