import Image from "next/image";
import Button from "../Button";

interface BlogCardProps {
  images: string[];
  date: string;
  title: string;
  slug: string;
  buttonLabel?: string;
}

export default function BlogCard({
  images,
  date,
  title,
  slug,
  buttonLabel = "Continuar Leyendo",
}: BlogCardProps) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="min-w-[196px] min-h-[218px] overflow-hidden rounded-2xl relative">
        <Image
          src={images[0]}
          alt="Imagen de blog"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 h-[180px] items-start justify-between relative">
        <div>
          <span className="text-sm text-[#A1A1A1]">{date}</span>
          <h2 className="max-w-md text-[20px] font-bold text-[#636B69] mt-2">
            {title}
          </h2>
        </div>
        <Button href={`/blog/${slug}`} label={buttonLabel} variant="secondary" className="text-sm" />
      </div>
    </div>
  );
}
