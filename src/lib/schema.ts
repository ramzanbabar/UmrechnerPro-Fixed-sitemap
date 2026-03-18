// Schema.org Structured Data for UmrechnerPro.de
// Generates JSON-LD markup for SEO

import { Category, Unit } from '@/data/categories';
import { getCanonicalUrl, getBreadcrumbs } from './seo';
import { getFormula } from './convert';

const SITE_URL = 'https://umrechnerpro.de';
const SITE_NAME = 'UmrechnerPro';

// WebSite schema for homepage
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Kostenlose Einheiten-Umrechner für Länge, Gewicht, Temperatur und mehr',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/suche?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// BreadcrumbList schema
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const breadcrumbs = getBreadcrumbs(items);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

// WebPage schema for category pages
export function getCategoryPageSchema(category: Category) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${category.name} umrechnen`,
    description: category.description,
    url: getCanonicalUrl(category.slug),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      '@type': 'Thing',
      name: category.name,
      description: `Umrechnung von ${category.name.toLowerCase()}`,
    },
  };
}

// SoftwareApplication / WebApplication schema for pair conversion pages
export function getConverterSchema(
  fromUnit: Unit,
  toUnit: Unit,
  category: Category
) {
  const appName = `${fromUnit.name} in ${toUnit.name} Umrechner`;
  const appUrl = getCanonicalUrl(`${category.slug}/${fromUnit.id}-in-${toUnit.id}`);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: appName,
    description: `Online Umrechner für ${fromUnit.name.toLowerCase()} in ${toUnit.name.toLowerCase()}. Kostenlose und präzise Umrechnung.`,
    url: appUrl,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    featureList: [
      'Sofortige Umrechnung',
      'Präzise Ergebnisse',
      'Umrechnungsformel',
      'Beispiele',
      'Umrechnungstabelle',
    ],
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

// FAQPage schema
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Article schema for guides
export function getArticleSchema(
  title: string,
  description: string,
  slug: string,
  publishDate: string = '2024-01-01',
  modifiedDate?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: getCanonicalUrl(`ratgeber/${slug}`),
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: 'de',
  };
}

// HowTo schema for conversion instructions
export function getHowToSchema(
  fromUnit: Unit,
  toUnit: Unit,
  category: Category
) {
  const formula = getFormula(fromUnit, toUnit, category.slug);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `${fromUnit.name} in ${toUnit.name} umrechnen`,
    description: `Anleitung zur Umrechnung von ${fromUnit.name.toLowerCase()} in ${toUnit.name.toLowerCase()}`,
    step: [
      {
        '@type': 'HowToStep',
        name: 'Wert eingeben',
        text: `Geben Sie den Wert in ${fromUnit.name.toLowerCase()} ein, den Sie umrechnen möchten.`,
      },
      {
        '@type': 'HowToStep',
        name: 'Berechnung',
        text: `Der Wert wird automatisch mit der Formel ${formula} umgerechnet.`,
      },
      {
        '@type': 'HowToStep',
        name: 'Ergebnis',
        text: `Das Ergebnis wird in ${toUnit.name.toLowerCase()} angezeigt.`,
      },
    ],
  };
}

// Organization schema
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['German'],
    },
  };
}

// Combine multiple schemas into one JSON-LD block
export function combineSchemas(...schemas: object[]) {
  return schemas.map(schema => JSON.stringify(schema)).join('\n');
}

// Get all schemas for a pair conversion page
export function getPairPageSchemas(
  fromUnit: Unit,
  toUnit: Unit,
  category: Category,
  faqs: Array<{ question: string; answer: string }>
) {
  return [
    getConverterSchema(fromUnit, toUnit, category),
    getBreadcrumbSchema([
      { name: category.name, url: `/${category.slug}` },
      { name: `${fromUnit.name} in ${toUnit.name}`, url: `/${category.slug}/${fromUnit.id}-in-${toUnit.id}` },
    ]),
    getFAQSchema(faqs),
    getHowToSchema(fromUnit, toUnit, category),
  ];
}

// Get all schemas for a category page
export function getCategoryPageSchemas(category: Category) {
  return [
    getCategoryPageSchema(category),
    getBreadcrumbSchema([
      { name: category.name, url: `/${category.slug}` },
    ]),
    getFAQSchema(category.faq),
  ];
}

// Get all schemas for a guide page
export function getGuidePageSchemas(
  title: string,
  description: string,
  slug: string,
  faqs: Array<{ question: string; answer: string }>,
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return [
    getArticleSchema(title, description, slug),
    getBreadcrumbSchema(breadcrumbs),
    getFAQSchema(faqs),
  ];
}
