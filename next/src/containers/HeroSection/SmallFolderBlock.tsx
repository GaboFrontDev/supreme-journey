import { ArrowRightIcon } from '@/Icons/ArrowRightIcon';
import { SmallFolder } from '@/context/page/domain/PageEntity';
import Image from 'next/image';
import Link from 'next/link';

export const SmallFolderBlock = (props: SmallFolder) => (
  <div className="clip-folder-right-lg relative mt-8 bg-white p-8 sm:-mt-36 lg:mt-36">
    <div className="relative h-48 w-[80%] overflow-hidden rounded-2xl bg-c-gray-950">
      {props?.image?.data?.attributes?.url ? (
        <Image
          src={props.image.data.attributes.url}
          fill
          alt={props.title}
          className="object-cover"
        />
      ) : (
        <div className="absolute left-0 top-0 size-full bg-c-gray-950" />
      )}
    </div>
    <Link
      href={props?.Link}
      className="mt-4 flex items-center justify-between text-base"
    >
      {props?.title}
      <ArrowRightIcon />
    </Link>

    <div
      className="absolute right-8 top-14 inline-flex h-6 w-6 items-center justify-center
        rounded-full bg-c-gray-100 text-xs"
    >
      1
    </div>
  </div>
);
