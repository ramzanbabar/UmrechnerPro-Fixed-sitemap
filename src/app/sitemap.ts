import { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { topPairs, getPairSlug } from '@/data/topPairs';
import { guides } from '@/data/guides';

const SITE_URL = 'https://umrechnerpro.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemaps: MetadataRoute.Sitemap = [
    // Core pages
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/kategorien`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/ratgeber`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Legal pages
    {
      url: `${SITE_URL}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/haftungsausschluss`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  // Category pages
  categories.forEach((category) => {
    sitemaps.push({
      url: `${SITE_URL}/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // All conversion pair pages
  topPairs.forEach((pair) => {
    sitemaps.push({
      url: `${SITE_URL}/${pair.categorySlug}/${getPairSlug(pair.fromUnit, pair.toUnit)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  // Guide pages
  guides.forEach((guide) => {
    sitemaps.push({
      url: `${SITE_URL}/ratgeber/${guide.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return sitemaps;
}
