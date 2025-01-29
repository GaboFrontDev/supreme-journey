import { APP_BASE_URL } from '@/data/common';
import { generateSitemap } from '@/dynamicRendering/generateSitemap';
import type { MetadataRoute } from 'next';

export default async function sitemap({}: any): Promise<MetadataRoute.Sitemap> {
  const mainAppPages = await generateSitemap();

  return mainAppPages.map((page) => {
    const pageSlug =
      page.slug === 'home' ? '' : page.slug;

    return {
      url: `${APP_BASE_URL}${pageSlug}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${APP_BASE_URL}es/${pageSlug}`,
          de: `${APP_BASE_URL}de/${pageSlug}`,
        },
      },
    };
  });
}
