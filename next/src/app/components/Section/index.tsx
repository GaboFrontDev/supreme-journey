import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  background?: string;
  width?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({
  background = 'bg-white',
  width = 'max-w-7xl',
  paddingTop = 'pt-28',
  paddingBottom = 'pb-28',
  paddingLeft = 'pl-6',
  paddingRight = 'pr-6',
  children,
}: SectionProps) {
  return (
    <section className={clsx(paddingTop, paddingBottom, paddingLeft, paddingRight, background, 'mx-auto rounded-t-3xl')}>
      <div className={clsx(width, 'mx-auto')}>{children}</div>
    </section>
  );
}
