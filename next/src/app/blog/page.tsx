import Image from "next/image";
import Button from "../components/Button";
import FilterButton from "../components/FilterButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import BlogCard from "../components/BlogCard";

const posts = [
  { 
    image: "/images/blog/2.png", 
    date: "Mayo 2024", 
    title: "Reconversión de los Centros Comerciales: Una experiencia análoga en un mundo digital.", 
  },
  { 
    image: "/images/blog/3.png", 
    date: "Octubre 2024", 
    title: "Nuevas experiencias culinarias.", 
  },
  { 
    image: "/images/blog/4.png", 
    date: "Junio 2024", 
    title: "Nuevas estrategias en los Centros Comerciales.", 
  },
  { 
    image: "/images/blog/5.png", 
    date: "Abril 2024", 
    title: "El futuro como lo conocíamos cambió.", 
  },
  { 
    image: "/images/blog/6.png", 
    date: "Agosto 2024", 
    title: "La nueva tasa de retorno del futuro.", 
  },
  { 
    image: "/images/blog/7.png", 
    date: "Febrero 2024", 
    title: "Hacia una nueva década para la construcción sustentable.", 
  },
];

export default function BlogPage() {
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
              src="/images/blog/1.png"
              alt="Imagen de blog"
              fill
              className="object-cover"
            />
          </div>
          <div className='flex flex-col items-start'>
            <span className="text-lg text-[#A1A1A1]">Agosto 2024</span>
            <h2 className='max-w-md text-[40px] font-bold text-[#636B69] leading-tight mt-2 mb-6'>
              Desarrollos de Usos Mixtos: Integradores de comunidades
            </h2>
            <FilterButton label='Usos Mixtos' />
            <p className="text-lg text-black py-5 my-6">En un contexto de urbanización acelerada, los desarrollos de usos mixtos se perfilan como una solución esencial para optimizar el uso del suelo y mejorar la calidad de vida urbana…</p>
            <Button href="/blog/slug_blog" label="Continuar Leyendo" />
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
            />
          </div>
          <Button label="Ordenar" variant="secondary" iconFilter />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop="pt-0">
        <div className="grid grid-cols-2 gap-y-10 gap-x-32">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              date={post.date}
              title={post.title}
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
