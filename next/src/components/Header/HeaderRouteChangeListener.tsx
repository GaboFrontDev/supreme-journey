'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function HeaderRouteChangeListener({
  onPageChangeHandler,
}: {
  onPageChangeHandler: () => void;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    onPageChangeHandler();
  }, [onPageChangeHandler, pathname, searchParams]);

  return null;
}
