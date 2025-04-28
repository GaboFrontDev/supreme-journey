import clsx from 'clsx';
import Link from 'next/link';

interface FilterButtonProps {
  label: string;
  href?: string | undefined;
  className?: string;
}

export default function FilterButton({ label, href, className = '' }: FilterButtonProps) {
  return (
    <Link href={href ?? '#'} className={clsx('font-bold text-xs text-black py-[6px] px-4 tracking-tight-032 rounded-full bg-[#EFEFEF] hover:underline', className)}>
      {label}
    </Link>
  );
}
