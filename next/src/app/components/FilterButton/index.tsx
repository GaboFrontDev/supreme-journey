import clsx from 'clsx';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface FilterButtonProps {
  label: string;
  href?: string | undefined;
  className?: string;
  onClick?: () => void;
}

export default function FilterButton({ label, href, className = '', onClick }: FilterButtonProps) {
  const localClasses = 'font-bold text-xs text-black py-[6px] px-4 tracking-tight-032 rounded-full bg-[#EFEFEF] hover:underline transition-colors';
  
  const classes = twMerge(localClasses, className);
  return (
    <Link href={href ?? '#'} onClick={onClick} className={classes}>
      {label}
    </Link>
  );
}
