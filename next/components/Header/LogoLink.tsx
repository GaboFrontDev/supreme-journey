import { AppLogoIcon } from '@/Icons/AppLogo';
import Link from 'next/link';
import React from 'react';

export const LogoLink = ({
  className,
  url,
}: {
  className?: string;
  url: string;
}) => {
  return (
    <div className={className}>
      <Link href={url} className='flex items-center'>
        <AppLogoIcon />
      </Link>
    </div>
  );
};
