import Image from 'next/image';
import Header from '@/app/components/Header';
import Section from '@/app/components/Section';
import Link from 'next/link';

export default function AresArchitectsPage() {
  return (
    <>
      <Header forceScrolledStyle />

      <Section width='max-w-7xl' paddingTop='pt-32' paddingBottom='pb-12'>
        <div className='flex items-center justify-between gap-36'>
          <div className='flex-col'>
            <div className='mb-10 flex items-center gap-2'>
              <Link href='/ares_culture' className='flex items-center gap-2'>
                <span className='text-sm font-bold text-[#A1A1A1]'>
                  Cultura Ares
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
                  Formando arquitectos
                </span>
              </div>
            </div>
            <h2 className='mb-6 mt-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
              Formando <br />
              arquitectos
            </h2>
          </div>
          <p className='max-w-2xl text-lg text-black'>
            Impulsamos el poder de la enseñanza para formar mentes creativas y
            críticas, preservando la actividad del dibujo a mano alzada como un
            puente entre la tradición y la innovación, así como una forma de
            pensar y transformar espacios con propósito y autenticidad.
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
        <div className='relative h-[810px] w-full overflow-hidden rounded-t-3xl'>
          <Image
            src='/images/ares_architects/1.png'
            alt='Ares Architects'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-20' paddingBottom='pb-20'>
        <div className='grid grid-cols-2 gap-36'>
          <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
            Creemos en el poder de compartir conocimiento y experiencia para
            motivar a generaciones futuras
          </h2>
          <div className='text-lg text-black [&>p:first-child]:mt-36 [&>p]:my-8'>
            <p>
              En Ares Arquitectos, creemos en el poder de compartir conocimiento
              y experiencia para motivar a las futuras generaciones de
              arquitectos. Nos apasiona mantener viva la tradición del sketch
              como una herramienta esencial para la comprensión de un proyecto,
              que ayuda a comunicar la esencia de un espacio desde sus primeras
              líneas. Lo consideramos una forma de pensamiento visual que
              impulsa la creatividad y fomenta la claridad en la
              conceptualización arquitectónica abriendo la mente a las infinitas
              posibilidades del diseño.
            </p>
            <p>
              Trabajar en un equipo multidisciplinario nos inspira a compartir
              ideas, aprendiendo tanto de la experiencia como de nuevas
              visiones. Este espíritu colaborativo enriquece nuestro enfoque y
              mantiene viva la pasión por el diseño.
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
            src='/images/ares_architects/2.png'
            alt='Ares Architects'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-20' paddingBottom='pb-20'>
        <div className='grid grid-cols-2 gap-36'>
          <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
            Desarrollar una conexión directa con la realidad profesional
          </h2>
          <div className='text-lg text-black [&>p:first-child]:mt-0 [&>p]:my-8'>
            <p>
              Los talleres impartidos por nuestros directores de arquitectura
              tienen un impacto transformador en la formación académica y
              profesional de los estudiantes. A través de ellos, compartimos
              conocimientos prácticos y experiencias reales que fortalecen sus
              habilidades de comunicación, desempeño profesional y criterio
              arquitectónico.
            </p>
            <p>
              Nos enfocamos en que cada estudiante desarrolle las competencias
              fundamentales para su crecimiento como arquitecto, priorizando los
              siguientes aspectos esenciales:
            </p>
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-10' paddingBottom='pb-20'>
        <div className='grid grid-cols-5 gap-36'>
          <div>
            <h4 className="flex items-start text-[#989F9C] text-8xl relative">
              1
              <Image
                src='/icons/arrow_right_big.png'
                alt='Icono de flecha'
                width={30}
                height={26}
                className='object-cover ml-2 mt-2'
              />
            </h4>
            <span className="inline-flex w-[180px] text-base text-black">Conceptualizar y desarrollar un pensamiento crítico</span>
          </div>
          <div>
            <h4 className="flex items-start text-[#989F9C] text-8xl relative">
              2
              <Image
                src='/icons/arrow_right_big.png'
                alt='Icono de flecha'
                width={30}
                height={26}
                className='object-cover ml-2 mt-2'
              />
            </h4>
            <span className="inline-flex w-[180px] text-base text-black">Fomenta el trabajo colaborativo</span>
          </div>
          <div>
            <h4 className="flex items-start text-[#989F9C] text-8xl relative">
              3
              <Image
                src='/icons/arrow_right_big.png'
                alt='Icono de flecha'
                width={30}
                height={26}
                className='object-cover ml-2 mt-2'
              />
            </h4>
            <span className="inline-flex w-[180px] text-base text-black">Aprender de las historias de éxito de los directores</span>
          </div>
          <div>
            <h4 className="flex items-start text-[#989F9C] text-8xl relative">
              4
              <Image
                src='/icons/arrow_right_big.png'
                alt='Icono de flecha'
                width={30}
                height={26}
                className='object-cover ml-2 mt-2'
              />
            </h4>
            <span className="inline-flex w-[180px] text-base text-black">Conectar con los líderes de la industria</span>
          </div>
          <div>
            <h4 className="flex items-start text-[#989F9C] text-8xl relative">
              5
              <Image
                src='/icons/arrow_right_big.png'
                alt='Icono de flecha'
                width={30}
                height={26}
                className='object-cover ml-2 mt-2'
              />
            </h4>
            <span className="inline-flex w-[180px] text-base text-black">Crecer y fortalecer su perfil profesional</span>
          </div>
        </div>
      </Section>

      <Section
        width='max-w-7xl'
        paddingLeft='pl-0'
        paddingRight='pr-0'
        background='bg-[#F5F5F5]'
      >
        <div className='grid grid-cols-[1fr_466px] gap-10'>
          <div className='relative h-[440px] w-full overflow-hidden rounded-3xl'>
            <Image
              src='/images/ares_architects/3.png'
              alt='Image de arquitectura'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative h-[440px] w-full overflow-hidden rounded-3xl'>
            <Image
              src='/images/ares_architects/4.png'
              alt='Image de arquitectura'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </Section>

       
    </>
  );
}
