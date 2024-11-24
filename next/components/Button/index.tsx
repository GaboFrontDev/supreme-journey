import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import Link from 'next/link';
import { getUrlLocaleFromLang } from '@/dynamicRendering/utils';
import { LoaderIcon } from '@/Icons/LoaderIcon';

type ButtonVariant = 'primary' | 'secondary';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  url?: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  currentLocale?: string;
  isLoading?: boolean;
}

type ButtonVariantClasses = {
  [k in ButtonVariant]: string;
};

export const Button: FC<IButton> = ({
  url = '',
  className = '',
  variant = 'primary',
  children,
  currentLocale,
  isLoading,
  ...rest
}) => {
  const buttonVariantClasses: ButtonVariantClasses = {
    primary: 'bg-white text-c-additional hover:bg-white/90 active:bg-white/80',
    secondary: 'bg-white/4 text-white hover:bg-white/8 active:bg-white/12',
  };

  const commonClassNames = `relative inline-flex items-center justify-center pointer-events-auto h-auto min-w-48 cursor-pointer select-none rounded-[12.5rem]
      px-4 py-4 text-center font-secondary !text-sm !font-semibold uppercase
      !leading-6 tracking-[0.08em] transition-all ${buttonVariantClasses[variant]} ${className}`;

  const urlLocale = currentLocale && url && getUrlLocaleFromLang(currentLocale);
  const urlWithLocalization = url?.startsWith('/')
    ? urlLocale + url
    : url || '';

  return url ? (
    <Link href={urlWithLocalization} className={commonClassNames}>
      <span className={isLoading ? 'text-transparent' : ''}>{children}</span>
      {isLoading && (
        <LoaderIcon className='absolute left-1/2 top-0 h-full -translate-x-1/2' />
      )}
    </Link>
  ) : (
    <button className={commonClassNames} {...rest}>
      <span className={isLoading ? 'text-transparent' : ''}>{children}</span>
      {isLoading && (
        <LoaderIcon className='absolute left-1/2 top-0 h-full -translate-x-1/2' />
      )}
    </button>
  );
};

export default Button;
