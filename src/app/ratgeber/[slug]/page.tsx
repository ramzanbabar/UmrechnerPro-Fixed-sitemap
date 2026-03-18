import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { guides, getGuideBySlug, getStaticGuideParams } from '@/data/guides';
import { categories } from '@/data/categories';
import { getPairSlug } from '@/data/topPairs';
import { getGuidePageSchemas } from '@/lib/schema';
import { getGuideTitle, getGuideDescription, getCanonicalUrl } from '@/lib/seo';
import SchemaMarkup from '@/components/SchemaMarkup';
import FAQ from '@/components/FAQ';
import { ArrowRight, Clock, User } from 'lucide-react';

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getStaticGuideParams();
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  
  if (!guide) {
    return { title: 'Ratgeber nicht gefunden' };
  }

  const title = getGuideTitle(guide.title);
  const description = getGuideDescription(guide.description);
  const canonical = getCanonicalUrl(`ratgeber/${slug}`);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'de-DE': canonical,
        'de-AT': canonical,
        'de-CH': canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  
  if (!guide) {
    notFound();
  }

  const relatedCategory = categories.find(c => c.slug === guide.category);
  
  // Breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Ratgeber', url: '/ratgeber' },
    { name: guide.title, url: `/ratgeber/${slug}` },
  ];

  // Schema data
  const schemas = getGuidePageSchemas(
    guide.title,
    guide.description,
    slug,
    guide.faq,
    breadcrumbs
  );

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      
      <article className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-muted-foreground flex-wrap">
            <li>
              <Link href="/" className="hover:text-emerald-600">Startseite</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/ratgeber" className="hover:text-emerald-600">Ratgeber</Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">{guide.title}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <header className="mb-8">
              {relatedCategory && (
                <Link 
                  href={`/${relatedCategory.slug}`}
                  className="text-sm text-emerald-600 font-medium hover:underline mb-2 inline-block"
                >
                  {relatedCategory.name}
                </Link>
              )}
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{guide.title}</h1>
              <p className="text-lg text-muted-foreground">{guide.description}</p>
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Lesedauer: ca. 8 Min.
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  UmrechnerPro Redaktion
                </span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-emerald dark:prose-invert max-w-none">
              <p className="lead">{guide.content.intro}</p>
              
              {guide.content.sections.map((section, index) => (
                <section key={index}>
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </section>
              ))}
              
              <h2>Fazit</h2>
              <p>{guide.content.conclusion}</p>
            </div>

            {/* FAQ */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Häufig gestellte Fragen</h2>
              <FAQ faqs={guide.faq} />
            </section>

            {/* Related Links */}
            <div className="mt-12 bg-card border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Verwandte Umrechner</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {guide.relatedPairs.slice(0, 6).map((pair, index) => {
                  const category = categories.find(c => c.slug === pair.categorySlug);
                  if (!category) return null;
                  
                  const fromUnit = category.units.find(u => u.id === pair.fromUnit);
                  const toUnit = category.units.find(u => u.id === pair.toUnit);
                  if (!fromUnit || !toUnit) return null;
                  
                  return (
                    <Link
                      key={index}
                      href={`/${pair.categorySlug}/${getPairSlug(pair.fromUnit, pair.toUnit)}`}
                      className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 hover:underline"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {fromUnit.name} in {toUnit.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Table of Contents */}
            <div className="bg-card border rounded-xl p-6 sticky top-24">
              <h3 className="font-semibold mb-4">Inhaltsverzeichnis</h3>
              <nav className="space-y-2">
                {guide.content.sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className="block text-sm text-muted-foreground hover:text-emerald-600"
                  >
                    {index + 1}. {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Related Categories */}
            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Verwandte Kategorien</h3>
              <div className="flex flex-wrap gap-2">
                {guide.relatedCategories.map((catSlug) => {
                  const cat = categories.find(c => c.slug === catSlug);
                  if (!cat) return null;
                  
                  return (
                    <Link
                      key={catSlug}
                      href={`/${catSlug}`}
                      className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
                    >
                      {cat.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* More Guides */}
            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Weitere Ratgeber</h3>
              <div className="space-y-3">
                {guides.filter(g => g.id !== guide.id).slice(0, 3).map((g) => (
                  <Link
                    key={g.id}
                    href={`/ratgeber/${g.slug}`}
                    className="block text-sm text-muted-foreground hover:text-emerald-600"
                  >
                    {g.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
