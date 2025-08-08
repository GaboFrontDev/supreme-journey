import { StrapiResponse } from '@/types/strapiBlog';
import BlogPageComponent from './component';
import { fetchWithToken } from '@/dynamicRendering/utils';
import qs from 'qs';
import { listQueryParams } from './consts';
import Head from 'next/head';

const fetchFromStrapi = async () => {
  const response = await fetchWithToken(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?${qs.stringify(listQueryParams)}`
  );
  const data = (await response) as StrapiResponse;
  return data;
};

export default async function BlogPage() {
  const blogs = await fetchFromStrapi();
  const imageUrl = blogs.data[0].attributes.miniatura.data.attributes;
  const imageName = blogs.data[0].attributes.nombre;
  return (
    <>
      <Head>
        <title lang='es'>Ares Arquitectos - Blog</title>
        <title lang='en'>Ares Arquitectos - Blog</title>
        <meta name='description' content='Página de blog' lang='es' />
        <meta name='description' content='Blog page' lang='en' />
        <meta property='og:type' content='website' />
        {imageUrl.previewUrl && (
          <meta property='og:image' content={imageUrl.previewUrl} />
        )}
        <meta property='og:image:alt' content={imageName} />
        <meta
          property='og:image:width'
          content={imageUrl.width.toString()}
        />
        <meta
          property='og:image:height'
          content={imageUrl.height.toString()}
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={imageName} />
        <meta
          name='twitter:description'
          content='Página de blog' lang='es'
        />
        <meta
          name='twitter:description'
          content='Blog Page' lang='en'
        />
        {imageUrl.previewUrl && (
          <meta
            name='twitter:image'
            content={imageUrl.previewUrl}
          />
        )}
      </Head>
      <BlogPageComponent posts={blogs} />;
    </>
  );
}
