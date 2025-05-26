import type { CategoryKey } from './consts';
import CategoryPageComponent from './component';
import { notFound } from 'next/navigation';

const categories = [
    { category: 'mixedUses' },
    { category: 'centrosComerciales' },
    { category: 'hotels' },
    { category: 'dwellings' },
    { category: 'retail' },
    { category: 'latam' },
  ];

export function generateStaticParams() {
  return categories;
}
export default function CategoryPage({
  params,
}: {
  params: { category: CategoryKey };
}) {
  if (!categories.map((category) => category.category).includes(params.category)) {
    return notFound();
  }

  return <CategoryPageComponent params={params} />;
}
