import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Section from '@/app/components/Section';
import BlogCard from '@/app/components/BlogCard';
import Link from 'next/link';

const posts = [
  {
    image: '/images/blog/2.png',
    date: 'Mayo 2024',
    title:
      'Reconversión de los Centros Comerciales: Una experiencia análoga en un mundo digital.',
  },
  {
    image: '/images/blog/3.png',
    date: 'Octubre 2024',
    title: 'Nuevas experiencias culinarias.',
  },
  {
    image: '/images/blog/4.png',
    date: 'Junio 2024',
    title: 'Nuevas estrategias en los Centros Comerciales.',
  },
  {
    image: '/images/blog/5.png',
    date: 'Abril 2024',
    title: 'El futuro como lo conocíamos cambió.',
  },
];

export default function SlugBlogPage() {
  return (
    <>
      <Header forceScrolledStyle />

      <Section width='max-w-7xl' paddingTop='pt-52' paddingBottom='pb-12'>
        <div className='flex items-center mb-10 gap-2'>
          <Link href="/blog" className='flex items-center gap-2'>
            <Image
              src='/icons/breadcrumb_left.png'
              width={24}
              height={24}
              alt='Icono de breadcrumb'
              className='object-cover'
            />
            <span className='font-bold text-sm text-[#A1A1A1]'>Blog</span>
          </Link>
        </div>
        <h2 className='mb-6 mt-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
          Desarrollos de Usos Mixtos: Integradores de comunidades
        </h2>
        <span className='text-lg font-bold text-[#A1A1A1]'>Agosto 2024</span>
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
            src='/images/blog/slug_image/1.png'
            alt='Imagen de blog'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-0'>
        <div className='grid grid-cols-2'>
          <div className='my-6 py-5 text-lg text-black [&>p]:my-8'>
            <p>
              En un contexto de urbanización acelerada, los desarrollos de usos
              mixtos se perfilan como una solución esencial para optimizar el
              uso del suelo y mejorar la calidad de vida urbana. Al integrar
              espacios comerciales, residenciales y de oficinas en un entorno
              cohesivo, estos proyectos no solo generan comunidades sostenibles
              y dinámicas, sino que también maximizan la eficiencia territorial
              reduciendo la necesidad de largos desplazamientos.
            </p>
            <p>
              Más allá de optimizar el uso del terreno, los desarrollos de usos
              mixtos impulsan el crecimiento de las economías locales, casi de
              barrio, beneficiando a su comunidad inmediata. Si estos proyectos
              se desarrollan de manera inteligente, se generan distritos
              atractivos y vibrantes brindando a sus usuarios un entorno lleno
              de lugares que cubren la mayoría de sus necesidades y que están a
              tiro de piedra.
            </p>
            <p>
              La incorporación de tecnología a todos los niveles y diferentes
              soluciones de sostenibilidad energética son cada vez más un común
              denominador en este tipo de proyectos, asegurando que todo el
              entorno no solo sea funcional sino también que sea responsivo a
              una comunidad emergente, cada vez más habitudo a estar vinculado
              con soluciones digitales y cada vez más consciente del cuidado de
              los recursos naturales.
            </p>
            <p>
              Todo lo anterior no son solamente más amenidades sino que se han
              vuelto un gran diferenciador para quienes quieren vivir o rentar
              en estos lugares y que inclinan la balanza para su selección. Este
              enfoque de planificación más consciente abona a construir entornos
              que favorezcan tanto el bienestar de las personas y la prosperidad
              de las comunidades en las que se insertan estos proyectos.
            </p>
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
            src='/images/blog/slug_image/2.png'
            alt='Imagen de blog'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-0'>
        <div className='grid grid-cols-2'>
          <div className='my-6 py-5 text-lg text-black [&>p]:my-8'>
            <h2 className='mb-6 text-[32px] font-bold leading-tight text-[#636B69]'>
              Averanda: Un modelo de innovación
            </h2>
            <p>
              Averanda fue Diseñado por Ares Arquitectos en colaboración con
              Proarquitectura, empresa desarrolladora de este proyecto ubicado
              en Cuernavaca, que integra un centro comercial con distintas
              marcas nacionales e internacionales de renombre, además, varias
              torres residenciales 2 hoteles y un edificio de suites, creando un
              entorno único en un espacio al aire libre.
            </p>
            <p>
              El principal reto fue optimizar cada espacio entendiendo la gran
              escala del proyecto pero tambien cuidando los pequeños detalles,
              para crear un entorno fresco con una atmósfera única que perdure y
              trascienda su tiempo, mejorando la experiencia y calidad de vida a
              sus usuarios. Nuestro proyecto ha sido reconocido como el mejor
              proyecto inmobiliario de México en 2023 por la Asociación de
              Desarrolladores Inmobiliarios de México (ADI) , y ha obtenido el{' '}
              <b>Premio Oro</b> en los Latin America & Caribbean Shopping Center
              Awards, un prestigioso galardón internacional en la industria de
              centros comerciales otorgado por el Internacional Council of
              Shopping Centers (ICSC por sus siglas en inglés).
            </p>
            <p>
              <b>Averanda</b> no solo es un ejemplo de integración eficiente,
              sino que también establece un nuevo estándar en la creación de
              espacios que combinan lo comercial, residencial y recreativo,
              ofreciendo una experiencia inigualable en la región.
            </p>
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
            src='/images/blog/slug_image/3.png'
            alt='Imagen de blog'
            fill
            className='object-cover'
          />
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
            src='/images/blog/slug_image/4.png'
            alt='Imagen de blog'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingBottom='pb-4'>
        <div className='grid grid-cols-[1fr_280px_280px] gap-8'>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
              Elaborado por
            </h2>
            <div className='flex-col items-start'>
              <div className='w-[172px] h-[172px] overflow-hidden mb-4 rounded-xl relative'>
              <Image
                src='/images/teams/1.png'
                alt='Imagen de team'
                fill
                className='object-cover'
              />
              </div>
              <h2 className='font-bold text-base text-black'>Jacinto Arenas</h2>
              <span className='text-[#A1A1A1]'>CEO</span>
            </div>
          </div>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>  
              Involucrados
            </h2>
            <ul className='space-y-3 text-lg font-regular text-black'>
              <li>Marlene García</li>
              <li>Belén Coronado</li>
              <li>Lourdes Barba</li>
              <li>Ulises Rivera</li>
              <li>Fernando Ayala</li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-[20px] font-bold leading-tight text-[#A1A1A1]'>
              Mercados relacionados
            </h2>
            <ul className='space-y-3 text-lg font-regular text-black'>
              <li>Centros comerciales</li>
              <li>Retail</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingBottom='pb-48'>
        <h2 className='mb-14 mt-2 text-[40px] font-bold leading-tight text-[#636B69]'>
          Artículos relacionados
        </h2>
        <div className='grid grid-cols-2 gap-x-32 gap-y-10'>
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              date={post.date}
              title={post.title}
            />
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
