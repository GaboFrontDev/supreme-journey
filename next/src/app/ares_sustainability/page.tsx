import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Section from '@/app/components/Section';
import Link from 'next/link';

export default function AresSustainabilityPage() {
  return (
    <>
      <Header forceScrolledStyle />

      <Section width='max-w-7xl' paddingTop='pt-52' paddingBottom='pb-12'>
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
                <span className='text-sm font-bold text-[#A1A1A1]'>DIS</span>
              </div>
            </div>
            <h2 className='mb-6 mt-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
              Diseño <br />
              sostenible
            </h2>
          </div>
          <p className='max-w-2xl text-lg text-black'>
            Integramos Digital Innovation & Sustainability (DIS) en nuestros
            procesos, utilizando tecnología BIM para optimizar el diseño, la
            construcción y la gestión de proyectos. Esto nos permite no solo
            crear espacios funcionales y estéticamente impactantes, sino también
            sostenibles y eficientes.
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
            src='/images/ares_sustainability/1.png'
            alt='Ares Sustainability'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-20' paddingBottom='pb-20'>
        <div className='grid grid-cols-2 gap-36'>
          <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
            DIS Digital Innovation & Sustainability
          </h2>
          <div className='text-lg text-black [&>p:first-child]:mt-36 [&>p]:my-8'>
            <p>
              Este concepto en Arquitectura hace referencia a la integración de
              tecnologías digitales innovadoras con prácticas sostenibles, con
              el objetivo de mejorar la eficiencia, reducir el impacto ambiental
              y optimizar el proceso de diseño y construcción; impulsar
              soluciones que aborden desafíos ecológicos y fomenten un
              crecimiento responsable.
            </p>
            <p>
              Como equipo, creemos en el poder de la tecnología así como el uso
              de la Inteligencia Artificial para transformar ideas en realidades
              tangibles que respeten el entorno y mejoren la vida de las
              personas.
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
            src='/images/ares_sustainability/2.png'
            alt='Ares Sustainability'
            fill
            className='object-cover'
          />
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-20' paddingBottom='pb-20'>
        <div className='grid grid-cols-2 gap-36'>
          <h2 className='font-regular max-w-2xl text-[40px] leading-tight text-black'>
            BIM Building Information Modeling
          </h2>
          <div className='text-lg text-black [&>p:first-child]:mt-0 [&>p]:my-8'>
            <p>
              Es un proceso inteligente que nos permite crear un modelo que,
              además de ser tridimensional, contenga la información necesaria
              para planificar, diseñar, construir y administrar edificios e
              infraestructura con más eficiencia.
            </p>
            <p>
              A lo largo de más de 20 años de trayectoria, hemos modelado más de
              650,000 m. de proyectos en Revit, adquiriendo y desarrollando
              múltiples conocimientos especializados que nos permiten ofrecer
              una variedad de servicios basados en la metodología BIM a diversos
              sectores del dise.o, desarrollo y construcción. Además de nuestra
              experiencia en la metodología BIM, contamos con un amplio
              conocimiento en proyectos ejecutivos enfocados en desarrollos
              inmobiliarios de alto valor.
            </p>
            <p>
              Estas dos fortalezas no solo nos capacitan para modelar un
              proyecto, sino también para comprender los requerimientos técnicos
              que deben resolverse en cada uno de los proyectos que llevamos a
              cabo.
            </p>
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-10' paddingBottom='pb-20'>
        <div className='grid grid-cols-5 gap-36'>
          <div>
            <h4 className='relative flex items-start text-8xl text-[#989F9C]'>
              1
              <Image
                src='/icons/arrow_right_big.png'
                alt='Icono de flecha'
                width={30}
                height={26}
                className='ml-2 mt-2 object-cover'
              />
            </h4>
            <span className='inline-flex w-[180px] text-base text-black'>
              Documentos de construcción
            </span>
          </div>
          <div>
            <h4 className='relative flex items-start text-8xl text-[#989F9C]'>
              2
              <Image
                src='/icons/arrow_right_big.png'
                alt='Icono de flecha'
                width={30}
                height={26}
                className='ml-2 mt-2 object-cover'
              />
            </h4>
            <span className='inline-flex w-[180px] text-base text-black'>
              Trabajo colaborativo y control de documentos con BIM 360
            </span>
          </div>
          <div>
            <h4 className='relative flex items-start text-8xl text-[#989F9C]'>
              3
              <Image
                src='/icons/arrow_right_big.png'
                alt='Icono de flecha'
                width={30}
                height={26}
                className='ml-2 mt-2 object-cover'
              />
            </h4>
            <span className='inline-flex w-[180px] text-base text-black'>
              Realidad Virtual (VR) y Realidad Aumentada (AR)
            </span>
          </div>
          <div>
            <h4 className='relative flex items-start text-8xl text-[#989F9C]'>
              4
              <Image
                src='/icons/arrow_right_big.png'
                alt='Icono de flecha'
                width={30}
                height={26}
                className='ml-2 mt-2 object-cover'
              />
            </h4>
            <span className='inline-flex w-[180px] text-base text-black'>
              Modelado de proyectos de ingeniería y detección de interferencias
            </span>
          </div>
          <div>
            <h4 className='relative flex items-start text-8xl text-[#989F9C]'>
              5
              <Image
                src='/icons/arrow_right_big.png'
                alt='Icono de flecha'
                width={30}
                height={26}
                className='ml-2 mt-2 object-cover'
              />
            </h4>
            <span className='inline-flex w-[180px] text-base text-black'>
              Predicción y análisis
            </span>
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
              src='/images/ares_sustainability/3.png'
              alt='Image de arquitectura'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative h-[440px] w-full overflow-hidden rounded-3xl'>
            <Image
              src='/images/ares_sustainability/4.png'
              alt='Image de arquitectura'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
