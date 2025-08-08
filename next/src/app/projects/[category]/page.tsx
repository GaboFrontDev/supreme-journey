import CategoryPageComponent from './component';
import { notFound } from 'next/navigation';
import { getCategories } from '@/dynamicRendering/utils';
import { formatSlug } from '@/utils/formatSlug';
import Head from 'next/head';

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

  return (
    <>
      <Head>
        <title>{category.attributes.nombre} - Proyectos ARES</title>
        <meta name='description' content={category.attributes.concepto} />
        <meta name='keywords' content={category.attributes.nombre} />
        <meta
          property='og:title'
          content={`${category.attributes.nombre} - Proyectos ARES`}
        />
        <meta
          property='og:description'
          content={category.attributes.concepto}
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://ares.proyectos.uchile.cl/projects/${params.category}`}
        />
        {category.attributes.portada.data.attributes.previewUrl && (
          <meta
            property='og:image'
            content={category.attributes.portada.data.attributes.previewUrl}
          />
        )}
        <meta
          property='og:image:alt'
          content={category.attributes.nombre}
        />
        <meta
          property='og:image:width'
          content={category.attributes.portada.data.attributes.width.toString()}
        />
        <meta
          property='og:image:height'
          content={category.attributes.portada.data.attributes.height.toString()}
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={category.attributes.nombre} />
        <meta
          name='twitter:description'
          content={category.attributes.concepto}
        />
        {category.attributes.portada.data.attributes.previewUrl && (
          <meta
            name='twitter:image'
            content={category.attributes.portada.data.attributes.previewUrl}
          />
        )}
      </Head>
      <CategoryPageComponent category={category} />
    </>
  );
}
