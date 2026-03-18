import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getTopPairsForCategory, getPairSlug } from '@/data/topPairs';
import { getGuidesForCategory } from '@/data/guides';
import { getCategoryPageSchemas } from '@/lib/schema';
import { getCanonicalUrl } from '@/lib/seo';
import SchemaMarkup from '@/components/SchemaMarkup';
import Converter from '@/components/Converter';
import FAQ from '@/components/FAQ';
import { Ruler, Scale, Thermometer, Square, Droplet, Gauge, Clock, Zap, ArrowRight, Sparkles, BookOpen, Coins, ChefHat, HardDrive, Fuel, Activity, Footprints, CircleDot, Percent, ChevronRight, Calculator, Layers, Wrench, ArrowUp } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  laenge: <Ruler className="w-6 h-6" />,
  gewicht: <Scale className="w-6 h-6" />,
  temperatur: <Thermometer className="w-6 h-6" />,
  flaeche: <Square className="w-6 h-6" />,
  volumen: <Droplet className="w-6 h-6" />,
  geschwindigkeit: <Gauge className="w-6 h-6" />,
  zeit: <Clock className="w-6 h-6" />,
  druck: <Gauge className="w-6 h-6" />,
  energie: <Zap className="w-6 h-6" />,
  leistung: <Zap className="w-6 h-6" />,
  waehrung: <Coins className="w-6 h-6" />,
  kochen: <ChefHat className="w-6 h-6" />,
  datenvolumen: <HardDrive className="w-6 h-6" />,
  verbrauch: <Fuel className="w-6 h-6" />,
  frequenz: <Activity className="w-6 h-6" />,
  schuhgroesse: <Footprints className="w-6 h-6" />,
  winkel: <CircleDot className="w-6 h-6" />,
  prozent: <Percent className="w-6 h-6" />,
  dichte: <Layers className="w-6 h-6" />,
  kraft: <ArrowUp className="w-6 h-6" />,
  drehmoment: <Wrench className="w-6 h-6" />,
};

interface CategoryPageProps {
  params: Promise<{
    kategorie: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    kategorie: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { kategorie } = await params;
  const category = getCategoryBySlug(kategorie);
  
  if (!category) {
    return { title: 'Kategorie nicht gefunden' };
  }

  const canonical = getCanonicalUrl(kategorie);

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical,
      languages: {
        'de-DE': canonical,
        'de-AT': canonical,
        'de-CH': canonical,
      },
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url: canonical,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { kategorie } = await params;
  const category = getCategoryBySlug(kategorie);
  
  if (!category) {
    notFound();
  }

  const topPairs = getTopPairsForCategory(kategorie, 30);
  const relatedGuides = getGuidesForCategory(kategorie, 2);
  
  // Get all pair combinations
  const allPairs: Array<{ from: string; to: string; fromName: string; toName: string }> = [];
  for (let i = 0; i < category.units.length; i++) {
    for (let j = 0; j < category.units.length; j++) {
      if (i !== j) {
        allPairs.push({
          from: category.units[i].id,
          to: category.units[j].id,
          fromName: category.units[i].name,
          toName: category.units[j].name,
        });
      }
    }
  }

  return (
    <>
      <SchemaMarkup schemas={getCategoryPageSchemas(category)} />
      
      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm animate-fade-in">
          <ol className="flex items-center gap-2 text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4" />
            </li>
            <li className="text-foreground font-medium">{category.name}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="hero-gradient rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden animate-fade-in-up">
          <div className="relative z-10">
            <div className="flex items-center gap-5 mb-5">
              <div className="icon-gradient w-16 h-16 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                {categoryIcons[category.id]}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{category.h1}</h1>
              </div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {category.description}
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="px-5 py-2.5 bg-white/70 dark:bg-black/20 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-2 border border-white/50 dark:border-white/10">
                <Calculator className="w-4 h-4 text-primary" />
                {category.units.length} Einheiten
              </div>
              <div className="px-5 py-2.5 bg-white/70 dark:bg-black/20 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-2 border border-white/50 dark:border-white/10">
                <Sparkles className="w-4 h-4 text-primary" />
                {allPairs.length.toLocaleString('de-DE')} Umrechnungen
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 lg:space-y-16">
            {/* Converter Section */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{category.name}-Umrechner</h2>
              <Converter category={category} />
            </section>

            {/* Quick Conversions */}
            <section className="grid sm:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              {topPairs.slice(0, 4).map((pair, index) => {
                const fromUnit = category.units.find(u => u.id === pair.fromUnit);
                const toUnit = category.units.find(u => u.id === pair.toUnit);
                if (!fromUnit || !toUnit) return null;
                
                return (
                  <Link
                    key={index}
                    href={`/${kategorie}/${getPairSlug(pair.fromUnit, pair.toUnit)}`}
                    className="card-modern group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <span className="text-xs font-medium text-primary mb-2 block">Schnellzugriff</span>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {fromUnit.name} in {toUnit.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {fromUnit.symbol} → {toUnit.symbol}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                );
              })}
            </section>

            {/* What is this category */}
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Was ist {category.name}?</h2>
              <p className="text-muted-foreground leading-relaxed">{category.content.intro}</p>
            </section>

            {/* Usage Section */}
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Anwendungsbereiche der {category.name}-Umrechnung</h2>
              <p className="text-muted-foreground leading-relaxed">{category.content.usage}</p>
            </section>

            {/* Examples Section */}
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Praktische Beispiele für {category.name}-Umrechnungen</h2>
              <p className="text-muted-foreground leading-relaxed">{category.content.examples}</p>
            </section>

            {/* Popular Conversions */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Beliebte {category.name}-Umrechnungen</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {topPairs.slice(0, 16).map((pair, index) => {
                  const fromUnit = category.units.find(u => u.id === pair.fromUnit);
                  const toUnit = category.units.find(u => u.id === pair.toUnit);
                  if (!fromUnit || !toUnit) return null;
                  
                  return (
                    <Link
                      key={index}
                      href={`/${kategorie}/${getPairSlug(pair.fromUnit, pair.toUnit)}`}
                      className="group flex items-center justify-between bg-card border rounded-xl p-4 hover:border-primary/50 hover:shadow-md transition-all"
                    >
                      <div>
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {fromUnit.name} in {toUnit.name}
                        </span>
                        <span className="block text-sm text-muted-foreground mt-1">
                          {fromUnit.symbol} → {toUnit.symbol}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* All Conversions */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Alle {category.name}-Umrechnungen</h2>
              <p className="text-muted-foreground mb-6">
                {allPairs.length.toLocaleString('de-DE')} verschiedene Umrechnungen verfügbar
              </p>
              <div className="bg-card border rounded-2xl overflow-hidden">
                <div className="max-h-[600px] overflow-y-auto p-6 scrollbar-thin">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
                    {allPairs.map((pair, index) => (
                      <Link
                        key={index}
                        href={`/${kategorie}/${pair.from}-in-${pair.to}`}
                        className="text-sm text-primary hover:text-primary/80 hover:underline py-1 truncate transition-colors"
                      >
                        {pair.fromName} → {pair.toName}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Häufig gestellte Fragen zur {category.name}-Umrechnung</h2>
              <FAQ faqs={category.faq} />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Available Units */}
            <div className="bg-card border rounded-2xl overflow-hidden sticky top-24">
              <div className="p-5 border-b bg-muted/30">
                <h3 className="font-semibold">Verfügbare Einheiten</h3>
                <p className="text-xs text-muted-foreground mt-1">{category.units.length} Einheiten in dieser Kategorie</p>
              </div>
              <div className="divide-y max-h-80 overflow-y-auto scrollbar-thin">
                {category.units.map((unit) => (
                  <div key={unit.id} className="flex items-center justify-between px-5 py-3 text-sm">
                    <div>
                      <span className="font-medium">{unit.name}</span>
                      {unit.isBase && <span className="ml-2 text-xs text-primary font-medium">(Basis)</span>}
                    </div>
                    <span className="text-muted-foreground font-mono bg-muted px-2.5 py-1 rounded-lg text-xs">{unit.symbol}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Guides */}
            {relatedGuides.length > 0 && (
              <div className="bg-card border rounded-2xl overflow-hidden">
                <div className="p-5 border-b bg-muted/30">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold">Ratgeber</h3>
                  </div>
                </div>
                <div className="divide-y">
                  {relatedGuides.map((guide) => (
                    <Link
                      key={guide.id}
                      href={`/ratgeber/${guide.slug}`}
                      className="block px-5 py-4 hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-sm font-medium text-primary">
                        {guide.title}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{guide.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other Categories */}
            <div className="bg-card border rounded-2xl overflow-hidden">
              <div className="p-5 border-b bg-muted/30">
                <h3 className="font-semibold">Andere Kategorien</h3>
              </div>
              <div className="divide-y">
                {categories.filter(c => c.id !== category.id).slice(0, 6).map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/${cat.slug}`}
                    className="flex items-center gap-3 px-5 py-3.5 hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg icon-container flex items-center justify-center text-primary">
                      {categoryIcons[cat.id]}
                    </div>
                    <span className="text-sm font-medium">{cat.name}</span>
                  </Link>
                ))}
              </div>
              <Link
                href="/kategorien"
                className="flex items-center justify-center gap-2 px-5 py-4 border-t text-sm text-primary font-medium hover:bg-muted/50 transition-colors"
              >
                Alle Kategorien
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
