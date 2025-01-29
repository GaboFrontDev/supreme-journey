import { LoaderIcon } from '@/Icons/LoaderIcon';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import Link from 'next/link';
import { getUrlLocaleFromLang } from '@/dynamicRendering/utils';

type ButtonVariantType = 'primary' | 'secondary';
type ButtonSizeType = 'default' | 'xl';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  url?: string;
  className?: string;
  isLoading?: boolean;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  icon?: ReactNode;
  children: ReactNode;
  currentLocale?: string;
}

type ButtonVariantClassesType = {
  [k in ButtonVariantType]: string;
};

type ButtonSizeClassesType = {
  [k in ButtonSizeType]: string;
};

export const Button: FC<IButton> = ({
  url = '',
  className = '',
  variant = 'primary',
  size = 'default',
  isLoading,
  children,
  icon,
  currentLocale,
  ...rest
}) => {
  const buttonVariantClassNames: ButtonVariantClassesType = {
    primary:
      'bg-c-blue-500 hover:bg-c-blue-600 active:bg-c-blue-700 text-white',
    secondary:
      'border border-current-color hover:text-c-gray-800 active:text-c-gray-600 text-c-gray-950',
  };

  const buttonSizeClassNames: ButtonSizeClassesType = {
    default: 'h-9 px-4 text-sm rounded-3xl',
    xl: 'h-14 px-6 text-lg rounded-[40px]',
  };

  const commonClassNames = `relative inline-flex items-center justify-center gap-3 outline-none
  ring-c-gray-200 ring-offset-1 transition-colors focus-visible:ring-2
  ${buttonVariantClassNames[variant]} ${buttonSizeClassNames[size]} ${className}`;

  const urlLocale = currentLocale && url && getUrlLocaleFromLang(currentLocale);
  const urlWithLocalization = url?.startsWith('/')
    ? urlLocale + url
    : url || '';

  return url ? (
    <Link href={urlWithLocalization} className={commonClassNames}>
      <span className={isLoading ? 'text-transparent' : ''}>{children}</span>
      {isLoading && (
        <LoaderIcon className="absolute left-1/2 top-0 h-full -translate-x-1/2" />
      )}
      {icon}
    </Link>
  ) : (
    <button className={commonClassNames} {...rest}>
      <span className={isLoading ? 'text-transparent' : ''}>{children}</span>
      {isLoading && (
        <LoaderIcon className="absolute left-1/2 top-0 h-full -translate-x-1/2" />
      )}
      {icon}
    </button>
  );
};

export default Button;
