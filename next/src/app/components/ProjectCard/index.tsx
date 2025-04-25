import Image from "next/image";
import Button from "../Button";

interface ProjectCardProps {
  title: string;
  location: string;
  categories: string[];
  image: string;
}

export default function ProjectCard({ title, location, categories, image }: ProjectCardProps) {
  return (
    <div className="min-w-[620px] max-w-sm rounded-xl overflow-hidden bg-[#F5F5F5]">
      <div className="w-full h-[380px] overflow-hidden rounded-2xl relative">
        <Image src={image} alt={title} fill className="object-cover pointer-events-none" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="mb-8">
            <h3 className="font-bold text-xl text-black mb-1">{title}</h3>
            <p className="font-light text-lg text-[#A1A1A1]">{location}</p>
          </div>
          <Button label='Ver proyecto' className="text-xs" />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <span key={i} className="font-semibold text-xs text-black px-4 py-[6px] rounded-full border border-black/15 hover:underline">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
