'use client';
import { useMemo, useState } from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import BlogCard from "../components/BlogCard";
import FilterButton from "../components/FilterButton";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Image from "next/image";
import { StrapiResponse } from "@/types/strapiBlog";

interface BlogPageComponentProps {
  posts: StrapiResponse;
}

export default function BlogPageComponent({ posts }: BlogPageComponentProps) {
  const [search, setSearch] = useState('');

  // Transformar los datos de Strapi al formato que necesitamos
  const transformedPosts = useMemo(() => {
    return posts.data.map(post => {

      return {
        slug: post.attributes.slug,
        title: post.attributes.nombre,
        date: post.attributes.createdAt,
        image: post.attributes.miniatura?.data?.attributes?.url || '',
        paragraphs: post.attributes.preview || '',
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
    return text.length > maxLength ? text.slice(0, maxLength).trim() + "..." : text;
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
      <Header forceScrolledStyle />

      <Section
        width='max-w-7xl'
        paddingTop="pt-52"
        paddingBottom="pb-12"
      >
        <div className="flex items-center justify-between gap-36">
          <div className="min-w-[564px] min-h-[530px] overflow-hidden rounded-2xl relative">
            {featuredPost.image && (
              <Image
                src={featuredPost.image}
                alt="Imagen de blog"
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className='flex flex-col items-start'>
            <span className="text-lg text-[#A1A1A1]">
              {formatDateToSpanish(featuredPost.date)}
            </span>
            <h2 className='max-w-md text-[40px] font-bold text-[#636B69] leading-tight mt-2 mb-6'>
              {featuredPost.title}
            </h2>
            <FilterButton label='Usos Mixtos' />
              <p className="text-lg text-black py-5 my-6">
                {truncateText(featuredPost.paragraphs, 200)}
              </p>
            <Button href={`/blog/${featuredPost.slug}`} label="Continuar Leyendo" />
          </div>
        </div>
        <div className="flex items-center mt-20 gap-4">
          <div className="relative flex-1">
            <Image 
              src="/icons/search.png" 
              alt="Buscar" 
              width={24} 
              height={24} 
              className="object-cover pointer-events-none ml-4 absolute top-1/2 -translate-y-1/2" 
            />
            <input 
              type="text" 
              placeholder="Buscar un proyecto en específico" 
              className="w-full h-12 text-base rounded-full pl-12 pr-4 focus:outline-0 border border-[#e0e0e0] placeholder:text-[#A1A1A1] hover:bg-[#e0e0e0] transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button label="Ordenar" variant="secondary" iconFilter />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop="pt-0">
        <div className="grid grid-cols-2 gap-y-10 gap-x-32">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={index}
              images={[post.image]}
              date={formatDateToSpanish(post.date)}
              title={post.title}
              slug={post.slug}
            />
          ))}
        </div>
      </Section>

       
    </>
  );
}