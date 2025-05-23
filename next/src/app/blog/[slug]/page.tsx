import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Section from '@/app/components/Section';
import BlogCard from '@/app/components/BlogCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import posts from "../../data/posts.json";

export default function SlugBlogPage({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) return notFound();

  function formatDateToSpanish(dateString: string): string {
    const [year, month] = dateString.split("-");
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const monthIndex = parseInt(month, 10) - 1;
    return `${meses[monthIndex]} ${year}`;
  }

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
          {post.title}
        </h2>
        <span className='text-lg font-bold text-[#A1A1A1]'>{formatDateToSpanish(post.date)}</span>
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
            src={post.images[0]}
            alt='Imagen de blog'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-0'>
        <div className='grid grid-cols-2'>
          <div className='my-6 py-5 text-lg text-black [&>p]:my-8'>
           {Array.isArray(post.paragraphs) &&
              post.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
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
            src={post.images[1]}
            alt='Imagen de blog'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      {post.paragraphs_title_2 && (
        <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-0'>
          <div className='grid grid-cols-2'>
            <div className='my-6 py-5 text-lg text-black [&>p]:my-8'>
              <h2 className='mb-6 text-[32px] font-bold leading-tight text-[#636B69]'>
                {post.paragraphs_title_2}
              </h2>
              {Array.isArray(post.paragraphs_2) &&
                post.paragraphs_2.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Section>
      )}

      {post.paragraphs_title_3 && (
        <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-0'>
          <div className='grid grid-cols-2'>
            <div className='my-6 py-5 text-lg text-black [&>p]:my-8'>
              <h2 className='mb-6 text-[32px] font-bold leading-tight text-[#636B69]'>
                {post.paragraphs_title_3}
              </h2>
              {Array.isArray(post.paragraphs_3) &&
                post.paragraphs_2.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Section>
      )}

      {post.images?.slice(2).map((img, index) => (
        <Section
          key={index}
          width='w-full'
          paddingTop='pt-10'
          paddingBottom='pb-10'
          paddingLeft='pl-0'
          paddingRight='pr-0'
        >
        <div className='relative h-[810px] w-full overflow-hidden rounded-t-3xl'>
          <Image
            src={img}
            alt='Imagen de blog'
            fill
            className='object-cover'
            />
        </div>
        </Section>
      ))}

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
            {posts
              .filter(p => p.slug !== post.slug)
              .map((relatedPost, index) => (
              <BlogCard
                key={index}
                images={relatedPost.images}
                date={formatDateToSpanish(relatedPost.date)}
                title={relatedPost.title}
                slug={relatedPost.slug}
              />
            ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}


export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug,
  }));
}