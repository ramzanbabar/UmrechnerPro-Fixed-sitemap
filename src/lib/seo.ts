// SEO Utilities for UmrechnerPro.de

import { Category, Unit } from '@/data/categories';
import { getPairSlug } from '@/data/topPairs';

const SITE_URL = 'https://umrechnerpro.de';
const SITE_NAME = 'UmrechnerPro';
const DEFAULT_DESCRIPTION = 'Kostenlose Einheiten-Umrechner für Länge, Gewicht, Temperatur, Fläche, Volumen und mehr. Präzise Umrechnungen auf UmrechnerPro.de';

// Generate page title for category
export function getCategoryTitle(category: Category): string {
  return `${category.name} umrechnen | ${SITE_NAME}`;
}

// Generate page description for category
export function getCategoryDescription(category: Category): string {
  return category.description;
}

// Generate page title for pair conversion
export function getPairTitle(
  fromUnit: Unit,
  toUnit: Unit,
  category: Category
): string {
  const fromName = fromUnit.name.toLowerCase();
  const toName = toUnit.name.toLowerCase();
  const fromSymbol = fromUnit.symbol;
  const toSymbol = toUnit.symbol;
  
  return `${fromName} in ${toName} umrechnen (${fromSymbol} in ${toSymbol}) | ${SITE_NAME}`;
}

// Generate page description for pair conversion
export function getPairDescription(
  fromUnit: Unit,
  toUnit: Unit,
  category: Category
): string {
  const fromName = fromUnit.name.toLowerCase();
  const toName = toUnit.name.toLowerCase();
  
  return `${fromName.charAt(0).toUpperCase() + fromName.slice(1)} in ${toName} umrechnen. Kostenlose Umrechnung mit Formel, Beispielen und Umrechnungstabelle. Präzise Ergebnisse auf UmrechnerPro.de.`;
}

// Generate canonical URL
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

// Generate hreflang alternates for DACH
export function getHreflangAlternates(path: string): Array<{ hreflang: string; href: string }> {
  const url = getCanonicalUrl(path);
  return [
    { hreflang: 'de-DE', href: url },
    { hreflang: 'de-AT', href: url },
    { hreflang: 'de-CH', href: url },
    { hreflang: 'de', href: url },
    { hreflang: 'x-default', href: url },
  ];
}

// Generate breadcrumb items
export function getBreadcrumbs(items: Array<{ name: string; url: string }>): Array<{ name: string; url: string }> {
  return [{ name: 'Startseite', url: '/' }, ...items];
}

// Generate Open Graph data
export function getOpenGraph(
  title: string,
  description: string,
  url: string,
  type: 'website' | 'article' = 'website'
) {
  return {
    title,
    description,
    url,
    siteName: SITE_NAME,
    type,
    locale: 'de_DE',
  };
}

// Generate Twitter Card data
export function getTwitterCard(title: string, description: string) {
  return {
    card: 'summary_large_image' as const,
    title,
    description,
  };
}

// Generate sitemap URL entry
export function getSitemapUrl(
  path: string,
  lastmod?: string,
  changefreq?: string,
  priority?: number
) {
  return {
    loc: getCanonicalUrl(path),
    lastmod: lastmod || new Date().toISOString().split('T')[0],
    changefreq: changefreq || 'weekly',
    priority: priority || 0.5,
  };
}

// Robots.txt content
export function getRobotsTxt(): string {
  return `# robots.txt for UmrechnerPro.de
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-core.xml
Sitemap: ${SITE_URL}/sitemap-pairs.xml

# Crawl-delay (optional, respected by some bots)
Crawl-delay: 1
`;
}

// Generate meta keywords (not critical for SEO but can be included)
export function getKeywords(baseKeywords: string[]): string {
  return baseKeywords.join(', ');
}

// Generate page title for guide
export function getGuideTitle(title: string): string {
  return `${title} | Ratgeber | ${SITE_NAME}`;
}

// Generate page description for guide
export function getGuideDescription(description: string): string {
  return description;
}

// Generate page title for legal pages
export function getLegalTitle(type: 'impressum' | 'datenschutz' | 'haftungsausschluss' | 'kontakt'): string {
  const titles = {
    impressum: 'Impressum',
    datenschutz: 'Datenschutzerklärung',
    haftungsausschluss: 'Haftungsausschluss',
    kontakt: 'Kontakt',
  };
  return `${titles[type]} | ${SITE_NAME}`;
}
