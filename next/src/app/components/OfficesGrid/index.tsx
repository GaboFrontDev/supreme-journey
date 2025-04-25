interface Office {
  title: string;
  country: string;
}

interface OfficesGridProps {
  items: Office[];
}

export default function OfficesGrid({ items }: OfficesGridProps) {
  return (
    <div className='grid grid-cols-4 gap-10 mb-16'>
      {items.map((office, index) => (
        <div key={index}>
          <h4 className='font-bold text-xl'>{office.title}</h4>
          <span className='text-xs text-[#A1A1A1]'>{office.country}</span>
        </div>
      ))}
    </div>
  );
}