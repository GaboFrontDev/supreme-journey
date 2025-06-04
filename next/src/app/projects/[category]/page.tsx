import CategoryPageComponent from './component';
import { notFound } from 'next/navigation';
import { getCategories } from '@/dynamicRendering/utils';
import { formatSlug } from '@/utils/formatSlug';

export async function generateStaticParams() {
  const categories = await getCategories();
  const slugs = categories.data.map((category) => ({
    category: formatSlug(category.attributes.nombre),
  }));

  return slugs;
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categories = await getCategories();
  const category = categories.data.find(
    (category) => formatSlug(category.attributes.nombre) === params.category
  );
  if (!category) {
    return notFound();
  }

  return <CategoryPageComponent category={category} />;
}
