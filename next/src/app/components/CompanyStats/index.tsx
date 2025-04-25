interface Stat {
  value: string;
  label: string;
}

interface CompanyStatsProps {
  stats: Stat[];
}

export default function CompanyStats({ stats }: CompanyStatsProps) {
  return (
    <div className="grid grid-cols-5 gap-10 mb-16">
      {stats.map((stat, index) => (
        <div key={index}>
          <h4 className="text-[#989F9C] text-8xl relative">
            {stat.value}
            <span className="text-6xl absolute">+</span>
          </h4>
          <span className='inline-flex w-[150px] text-base text-black'>
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
