import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  title: string;
  location: string;
  categories?: string[];
  image: string;
  contentWhite?: boolean;
  parentCategory?: string;
}

const formatTitleToUrl = (title: string) => {
  // replace tildes too
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/~/g, '')
    .replace('i', 'i')
    .replace('é', 'e')
    .replace('ú', 'u')
    .replace('ó', 'o')
    .replace('á', 'a')
    .replace('í', 'i')
    .replace('ñ', 'n')
    .replace('ü', 'u')
    .replace('ç', 'c')
    .replace('ñ', 'n');
};

const categoryToUrl = (category: string) => {
  switch (category) {
    case 'Usos Mixtos':
      return 'mixedUses';
    case 'Centros Comerciales':
      return 'centrosComerciales';
    case 'Hoteles':
      return 'hotels';
    case 'Vivienda':
      return 'dwellings';
    case 'LATAM':
      return 'latam';
    case 'Retail':
      return 'retail';
    default:
      return '';
  }
};

export default function ProjectCard({
  title,
  location,
  categories,
  image,
  contentWhite = false,
  parentCategory,
}: ProjectCardProps) {
  const router = useRouter();
  return (
    <div
      className={`min-w-[620px] max-w-sm overflow-hidden rounded-xl ${
        contentWhite ? 'bg-white' : 'bg-[#F5F5F5]'
      } select-none`}
    >
      <div
        className='relative h-[380px] w-full overflow-hidden rounded-2xl cursor-pointer'
        onClick={() => {
          router.push(`/projects/${parentCategory}/${formatTitleToUrl(title)}`);
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className='pointer-events-none object-cover'
        />
      </div>
      <div className='p-6'>
        <div className='flex items-start justify-between'>
          <div className='mb-8'>
            <h3 className='mb-1 text-xl font-bold text-black'>{title}</h3>
            <p className='text-lg font-light text-[#A1A1A1]'>{location}</p>
          </div>
          <Button
            href={`/projects/${parentCategory}/${formatTitleToUrl(title)}`}
            label='Ver proyecto'
            className='text-xs'
          />
        </div>
        <div className='flex flex-wrap gap-2'>
          {categories?.map((cat, i) => {
            const categoryUrl = categoryToUrl(cat);
            return categoryUrl ? (
              <Link
                key={i}
                href={`/projects/${categoryUrl}`}
                className='rounded-full border border-black/15 px-4 py-[6px] text-xs font-semibold
                  text-black hover:underline'
              >
                {cat}
              </Link>
            ) : (
              <span
                key={i}
                className='rounded-full border border-black/15 px-4 py-[6px] text-xs font-semibold
                  text-black'
              >
                {cat}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
