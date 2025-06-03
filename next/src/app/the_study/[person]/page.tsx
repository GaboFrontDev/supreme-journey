import Button from '@/app/components/Button';
import CarouselWrapper from '@/app/components/CarouselWrapper';
import Header from '@/app/components/Header';
import Section from '@/app/components/Section';
import Image from 'next/image';
import Link from 'next/link';
import { directors, associates } from './const';
import {Person} from './types';

const getRandomListWithoutPerson = (list: Person[], person: Person) => {
  return list.filter((item) => item.name !== person.name).sort(() => Math.random() - 0.5);
}

const formatNameToURL = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
}

// get initial props so slugs are dynamic
export function generateStaticParams() {
  const slugs = directors.map((person, index) => ({
    // clean tildes too 
    person: formatNameToURL(person.name),
  }));
  const slugs2 = associates.map((person, index) => ({
    // clean tildes too 
    person: formatNameToURL(person.name),
  }));
  return [...slugs, ...slugs2];
}


export default function PersonPage({ params }: { params: { person: string } }) {
  let person = directors.find((director) => formatNameToURL(director.name) === params.person);
  let fromDirectors = true;
  if (!person) {
    person = associates.find((associate) => formatNameToURL(associate.name) === params.person);
    fromDirectors = false;
  }
  if (!person) {
    return <div>Person not found</div>;
  }
  return (
    <>
      <Header forceScrolledStyle />

      <Section width='max-w-7xl' paddingTop='pt-32' paddingBottom='pb-0'>
        <div className='mb-10 flex items-center gap-2'>
          <Link href='/the_study' className='flex items-center gap-2'>
            <Image
              src='/icons/breadcrumb_left.png'
              width={24}
              height={24}
              alt='Icono de breadcrumb'
              className='object-cover'
            />
            <span className='text-sm font-bold text-[#A1A1A1]'>El Estudio</span>
          </Link>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-12'>
        <div className='flex items-start justify-between gap-36'>
          <div>
            <h2 className='my-2 max-w-2xl text-[40px] font-bold leading-tight text-[#636B69]'>
              {person.name}
            </h2>
            <span className='text-lg font-bold text-[#A1A1A1]'>{person.position}</span>
            <div className='text-lg text-black [&>p]:my-8'>
              <p>
                {person.description[0]}
              </p>
              <p>{person.description[1]}</p>
              <p>{person.description[2]}</p>
              {person.description[3] && (
                <>  
                <h2 className='my-6 text-[20px] font-bold leading-tight text-[#636B69]'>
                  Estudios
                </h2>
                  <p>
                    {person.description[3]}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className='relative min-h-[564px] min-w-[564px]'>
            <div className='overflow-hidden rounded-2xl'>
              <Image
                src={person.detail || person.image}
                alt={person.name}
                width={564}
                height={564}
                className='object-cover'
              />
            </div>
            <div className='flex justify-end mt-4 gap-3'>
              <Link href={person.link.Instagram || ''} target='_blank' className='text-sm font-bold text-[#A1A1A1] hover:underline'>Instagram</Link>
              <Link href={person.link.LinkedIn || ''} target='_blank' className='text-sm font-bold text-[#A1A1A1] hover:underline'>Linkedin</Link>
              <Link href={person.link.Facebook || ''} target='_blank' className='text-sm font-bold text-[#A1A1A1] hover:underline'>Facebook</Link>
            </div>
          </div>
        </div>
      </Section>

      <Section width='max-w-7xl' paddingTop='pt-0' paddingBottom='pb-48'>
        <h2 className='mb-14 mt-2 text-[40px] font-bold leading-tight text-[#636B69]'>
          Otras biografías
        </h2>
        <CarouselWrapper>
          {getRandomListWithoutPerson(fromDirectors ? directors : associates, person).map((director, index) => (
            <div key={index} className='flex flex-col select-none'>
              <div className='relative mb-4 w-[400px] h-[380px] overflow-hidden rounded-xl'>
                <Image
                  src={director.image}
                  alt='Imagen de servicio'
                  fill
                  className='object-cover pointer-events-none'
                />
              </div>
              <div className='flex flex-col items-start'>
                <h2 className='text-lg font-bold text-black'>
                  {director.name}
                </h2>
                <span className='text-[#A1A1A1]'>{director.position}</span>
                <Button href={`/the_study/${formatNameToURL(director.name)}`} label='Ver biografía' className='mt-8' />
              </div>
            </div>
          ))}
        </CarouselWrapper>
      </Section>

       
    </>
  );
}
