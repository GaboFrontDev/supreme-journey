import clsx from 'clsx';

interface FilterButtonProps {
  label: string;
  className?: string;
}

export default function FilterButton({ label, className = '' }: FilterButtonProps) {
  return (
    <button type="button" className={clsx('font-bold text-xs text-black py-[6px] px-4 tracking-tight-032 rounded-full bg-[#EFEFEF] hover:underline', className)}>
      {label}
    </button>
  );
}
