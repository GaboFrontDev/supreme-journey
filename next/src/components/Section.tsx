interface SectionProps {
  children: React.ReactNode;
  width?: string;
  paddingTop?: string;
  paddingBottom?: string;
  className?: string;
}

export default function Section({
  children,
  width = 'max-w-7xl',
  paddingTop = 'pt-20',
  paddingBottom = 'pb-20',
  className = '',
}: SectionProps) {
  return (
    <section className={`${paddingTop} ${paddingBottom}`}>
      <div className={`mx-auto px-6 ${width} ${className}`}>{children}</div>
    </section>
  );
} 