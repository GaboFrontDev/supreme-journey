'use client';
import Image from "next/image";
import Button from "../components/Button";
import FilterButton from "../components/FilterButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import BlogCard from "../components/BlogCard";
import posts from "../data/posts.json";
import { useMemo, useState } from "react";

export default function BlogPage() {

  const [search, setSearch] = useState('');
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);

  function formatDateToSpanish(dateString: string): string {
    const [year, month] = dateString.split("-");
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const monthIndex = parseInt(month, 10) - 1;
    return `${meses[monthIndex]} ${year}`;
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
            <Image
              src={featuredPost.images[0]}
              alt="Imagen de blog"
              fill
              className="object-cover"
            />
          </div>
          <div className='flex flex-col items-start'>
            <span className="text-lg text-[#A1A1A1]"> {formatDateToSpanish(featuredPost.date)}</span>
            <h2 className='max-w-md text-[40px] font-bold text-[#636B69] leading-tight mt-2 mb-6'>
              {featuredPost.title}
            </h2>
            <FilterButton label='Usos Mixtos' />
            {Array.isArray(featuredPost.paragraphs) && (
              <p className="text-lg text-black py-5 my-6">
                {truncateText(featuredPost.paragraphs[0], 200)}
              </p>
            )}
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
              images={post.images}
              date={formatDateToSpanish(post.date)}
              title={post.title}
              slug={post.slug}
            />
          ))}
        </div>
        <div className="w-[250px] mx-auto text-center mt-32 mb-20 cursor-pointer">
          <div className="h-2 overflow-hidden rounded-full bg-[#EFEFEF] relative">
            <span className="inline-flex w-[50px] h-2 left-0 rounded-full bg-[#989F9C] absolute"></span>
          </div>
          <p className="text-sm mt-4">Cargando más elementos</p>
        </div>
      </Section>

      <Footer />
    </>
  );
}
