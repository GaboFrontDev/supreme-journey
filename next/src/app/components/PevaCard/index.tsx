import Image from "next/image";
import Button from "../Button";

interface ProjectCardProps {
  title: string;
  author: string;
  image: string;
}

export default function PevaCard({ title, author, image }: ProjectCardProps) {
  return (
    <div className='min-w-[620px] max-w-sm rounded-xl overflow-hidden bg-[#F5F5F5]'>
      <div className="w-full h-[380px] overflow-hidden rounded-2xl relative">
        <Image src={image} alt={title} fill className="object-cover pointer-events-none" />
      </div>
      <div className="px-4 py-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-xl text-black mb-1">{title}</h3>
            <p className="font-light text-lg text-[#A1A1A1]">{author}</p>
          </div>
          <button className='relative flex h-12 w-12 mt-4 items-center justify-center rounded-full bg-[#EFEFEF]'>
            <Image
              src='/icons/arrow_expand.png'
              alt='Icono de flecha'
              width={24}
              height={24}
              className='object-cover'
            />
          </button>
        </div>
      </div>
    </div>
  );
}
