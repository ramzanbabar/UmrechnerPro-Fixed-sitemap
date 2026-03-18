import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { categories, getCategoryBySlug } from '@/data/categories';
import { parsePairSlug, getStaticPairParams, getSimilarPairs, getPairSlug, getTopPairsForCategory } from '@/data/topPairs';
import { getGuidesForCategory } from '@/data/guides';
import { getPairPageSchemas } from '@/lib/schema';
import { getCanonicalUrl } from '@/lib/seo';
import { convert, getFormula, generateConversionTable, formatOutput } from '@/lib/convert';
import SchemaMarkup from '@/components/SchemaMarkup';
import Converter from '@/components/Converter';
import FAQ from '@/components/FAQ';
import { ArrowRight, ArrowLeftRight, BookOpen, Calculator, Info, Lightbulb, TrendingUp, ChevronRight } from 'lucide-react';

// Enable dynamic params
export const dynamicParams = true;
export const revalidate = 86400; // Revalidate every 24 hours

interface PairPageProps {
  params: Promise<{
    kategorie: string;
    pair: string;
  }>;
}

export async function generateStaticParams() {
  return getStaticPairParams();
}

export async function generateMetadata({ params }: PairPageProps): Promise<Metadata> {
  const { kategorie, pair } = await params;
  const category = getCategoryBySlug(kategorie);
  
  if (!category) {
    return { title: 'Nicht gefunden' };
  }

  const parsed = parsePairSlug(pair);
  if (!parsed) {
    return { title: 'Ungültige Umrechnung' };
  }

  const fromUnit = category.units.find(u => u.id.toLowerCase() === parsed.fromUnit.toLowerCase());
  const toUnit = category.units.find(u => u.id.toLowerCase() === parsed.toUnit.toLowerCase());
  
  if (!fromUnit || !toUnit) {
    return { title: 'Einheit nicht gefunden' };
  }

  // SEO-optimized title based on search intent
  const title = `${fromUnit.name} in ${toUnit.name} umrechnen (${fromUnit.symbol} in ${toUnit.symbol})`;
  const description = `${fromUnit.name} in ${toUnit.name} umrechnen. Kostenloser Online-Umrechner mit Formel, Beispielen und Umrechnungstabelle. Schnell und präzise.`;
  const canonical = getCanonicalUrl(`${kategorie}/${pair}`);

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
      type: 'website',
    },
  };
}

export default async function PairPage({ params }: PairPageProps) {
  const { kategorie, pair } = await params;
  const category = getCategoryBySlug(kategorie);
  
  if (!category) {
    notFound();
  }

  const parsed = parsePairSlug(pair);
  if (!parsed) {
    notFound();
  }

  // Case-insensitive unit lookup
  const fromUnit = category.units.find(u => u.id.toLowerCase() === parsed.fromUnit.toLowerCase());
  const toUnit = category.units.find(u => u.id.toLowerCase() === parsed.toUnit.toLowerCase());
  
  if (!fromUnit || !toUnit) {
    notFound();
  }

  // Get similar pairs
  const similarPairs = getSimilarPairs(kategorie, parsed.fromUnit, parsed.toUnit, 8);
  
  // Get all pair combinations for the category
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
  
  // Get related guides
  const relatedGuides = getGuidesForCategory(kategorie, 2);
  
  // Get reverse pair
  const reversePairSlug = getPairSlug(parsed.toUnit, parsed.fromUnit);
  
  // Generate conversion table
  const conversionTable = generateConversionTable(fromUnit, toUnit, kategorie, 12);
  
  // Get formula
  const formula = getFormula(fromUnit, toUnit, kategorie);

  // Generate FAQs for this specific conversion
  const conversionFaqs = [
    {
      question: `Wie rechne ich ${fromUnit.name} in ${toUnit.name} um?`,
      answer: `Um ${fromUnit.name.toLowerCase()} (${fromUnit.symbol}) in ${toUnit.name.toLowerCase()} (${toUnit.symbol}) umzurechnen, verwenden Sie die Formel: ${formula}. Beispiel: 1 ${fromUnit.symbol} = ${formatOutput(convert(1, fromUnit.id, toUnit.id, kategorie) || 0, 6)} ${toUnit.symbol}.`,
    },
    {
      question: `Wie viele ${toUnit.name} sind ein ${fromUnit.name}?`,
      answer: `Ein ${fromUnit.name} (${fromUnit.symbol}) entspricht ${formatOutput(convert(1, fromUnit.id, toUnit.id, kategorie) || 0, 6)} ${toUnit.name} (${toUnit.symbol}).`,
    },
    {
      question: `Was ist die Formel für ${fromUnit.name} in ${toUnit.name}?`,
      answer: `Die Umrechnungsformel lautet: ${formula}. Dies ist die exakte Formel für die Umrechnung zwischen diesen Einheiten.`,
    },
    {
      question: `Wie viele ${fromUnit.name} sind ein ${toUnit.name}?`,
      answer: `Ein ${toUnit.name} (${toUnit.symbol}) entspricht ${formatOutput(convert(1, toUnit.id, fromUnit.id, kategorie) || 0, 6)} ${fromUnit.name} (${fromUnit.symbol}).`,
    },
    {
      question: `Wofür wird die Einheit ${fromUnit.name} verwendet?`,
      answer: `${fromUnit.name} (${fromUnit.symbol}) wird häufig in der Kategorie ${category.name} verwendet. Diese Einheit ist besonders wichtig für Berechnungen und Messungen in diesem Bereich.`,
    },
    ...category.faq.slice(0, 4),
  ];

  // Schema data
  const schemas = getPairPageSchemas(fromUnit, toUnit, category, conversionFaqs);

  // Calculate some example values
  const example1 = convert(1, fromUnit.id, toUnit.id, kategorie);
  const example10 = convert(10, fromUnit.id, toUnit.id, kategorie);
  const example100 = convert(100, fromUnit.id, toUnit.id, kategorie);

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-muted-foreground flex-wrap">
            <li>
              <Link href="/" className="hover:text-emerald-600">Startseite</Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/${kategorie}`} className="hover:text-emerald-600">{category.name}</Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">
              {fromUnit.name} in {toUnit.name}
            </li>
          </ol>
        </nav>

        {/* Hero Section with H1 */}
        <section className="hero-gradient rounded-2xl p-8 md:p-12 mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {fromUnit.name} in {toUnit.name} umrechnen
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Kostenloser Online-Umrechner für {fromUnit.name.toLowerCase()} ({fromUnit.symbol}) in {toUnit.name.toLowerCase()} ({toUnit.symbol}). 
            Mit Formel, Beispielen und Umrechnungstabelle – präzise und schnell.
          </p>
          
          {/* Quick Info Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="px-4 py-2 bg-white/50 dark:bg-black/20 rounded-full text-sm font-medium flex items-center gap-2">
              <Calculator className="w-4 h-4 text-emerald-600" />
              {fromUnit.symbol} → {toUnit.symbol}
            </div>
            <div className="px-4 py-2 bg-white/50 dark:bg-black/20 rounded-full text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              1 {fromUnit.symbol} = {formatOutput(example1 || 0, 4)} {toUnit.symbol}
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Converter Section */}
            <section>
              <Converter 
                category={category} 
                initialFromUnit={fromUnit.id}
                initialToUnit={toUnit.id}
              />
            </section>

            {/* Quick Conversion Cards */}
            <section className="grid sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                <div className="text-sm text-blue-600 font-medium mb-1">Kleine Werte</div>
                <div className="text-2xl font-bold text-foreground">0,1 {fromUnit.symbol}</div>
                <div className="text-lg text-blue-600 mt-1">
                  = {formatOutput(convert(0.1, fromUnit.id, toUnit.id, kategorie) || 0, 4)} {toUnit.symbol}
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
                <div className="text-sm text-emerald-600 font-medium mb-1">Mittlere Werte</div>
                <div className="text-2xl font-bold text-foreground">10 {fromUnit.symbol}</div>
                <div className="text-lg text-emerald-600 mt-1">
                  = {formatOutput(convert(10, fromUnit.id, toUnit.id, kategorie) || 0, 4)} {toUnit.symbol}
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
                <div className="text-sm text-purple-600 font-medium mb-1">Große Werte</div>
                <div className="text-2xl font-bold text-foreground">100 {fromUnit.symbol}</div>
                <div className="text-lg text-purple-600 mt-1">
                  = {formatOutput(convert(100, fromUnit.id, toUnit.id, kategorie) || 0, 4)} {toUnit.symbol}
                </div>
              </div>
            </section>

            {/* Popular Conversions in this Category */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Beliebte {category.name}-Umrechnungen</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {getTopPairsForCategory(kategorie, 8).map((pair, index) => {
                  const pairFromUnit = category.units.find(u => u.id.toLowerCase() === pair.fromUnit.toLowerCase());
                  const pairToUnit = category.units.find(u => u.id.toLowerCase() === pair.toUnit.toLowerCase());
                  if (!pairFromUnit || !pairToUnit) return null;
                  
                  return (
                    <Link
                      key={index}
                      href={`/${kategorie}/${getPairSlug(pair.fromUnit, pair.toUnit)}`}
                      className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-600 font-medium">Schnellzugriff</span>
                        <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {pairFromUnit.name} in {pairToUnit.name}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {pairFromUnit.symbol} → {pairToUnit.symbol}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Unit Definitions - Enhanced */}
            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{fromUnit.symbol}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Was ist ein {fromUnit.name}?</h2>
                    {fromUnit.isBase && <span className="text-xs text-emerald-600 font-medium">Basiseinheit</span>}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Der {fromUnit.name} ({fromUnit.symbol}) ist eine Einheit der Kategorie {category.name}. 
                  {category.content?.intro ? ` ${category.content.intro.split('.')[0]}.` : ''}
                </p>
              </div>
              
              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{toUnit.symbol}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Was ist ein {toUnit.name}?</h2>
                    {toUnit.isBase && <span className="text-xs text-emerald-600 font-medium">Basiseinheit</span>}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Der {toUnit.name} ({toUnit.symbol}) ist ebenfalls eine Einheit der Kategorie {category.name}.
                  {toUnit.isBase ? ' Er ist die Basiseinheit dieser Kategorie.' : ''}
                </p>
              </div>
            </section>

            {/* Formula - Enhanced */}
            <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-card border rounded-xl shadow-sm">
                  <Calculator className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-3">Umrechnungsformel</h2>
                  <div className="bg-white dark:bg-card border rounded-xl p-4 mb-4 shadow-sm">
                    <code className="text-xl font-mono text-emerald-700 dark:text-emerald-400">
                      {formula}
                    </code>
                  </div>
                  <p className="text-muted-foreground">
                    Diese Formel wird verwendet, um {fromUnit.name.toLowerCase()} ({fromUnit.symbol}) in 
                    {toUnit.name.toLowerCase()} ({toUnit.symbol}) umzurechnen. Die Umrechnung erfolgt 
                    automatisch und präzise, wenn Sie einen Wert eingeben.
                  </p>
                </div>
              </div>
            </section>

            {/* Example Calculation - Enhanced */}
            <section className="bg-card border rounded-xl overflow-hidden">
              <div className="p-6 border-b bg-muted/30">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  Beispielrechnungen
                </h2>
                <p className="text-muted-foreground mt-1">Gängige Umrechnungen auf einen Blick</p>
              </div>
              <div className="divide-y">
                {example1 !== null && (
                  <div className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors">
                    <div className="w-20 text-right font-mono text-lg">1 {fromUnit.symbol}</div>
                    <ArrowRight className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <div className="font-mono text-lg font-bold text-emerald-600">
                      {formatOutput(example1, 6)} {toUnit.symbol}
                    </div>
                  </div>
                )}
                {example10 !== null && (
                  <div className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors">
                    <div className="w-20 text-right font-mono text-lg">10 {fromUnit.symbol}</div>
                    <ArrowRight className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <div className="font-mono text-lg font-bold text-emerald-600">
                      {formatOutput(example10, 6)} {toUnit.symbol}
                    </div>
                  </div>
                )}
                {example100 !== null && (
                  <div className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors">
                    <div className="w-20 text-right font-mono text-lg">100 {fromUnit.symbol}</div>
                    <ArrowRight className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <div className="font-mono text-lg font-bold text-emerald-600">
                      {formatOutput(example100, 6)} {toUnit.symbol}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Conversion Table - Enhanced */}
            <section className="bg-card border rounded-xl overflow-hidden">
              <div className="p-6 border-b bg-muted/30">
                <h2 className="text-xl font-bold">Umrechnungstabelle</h2>
                <p className="text-muted-foreground mt-1">
                  {fromUnit.name} ({fromUnit.symbol}) in {toUnit.name} ({toUnit.symbol})
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/20">
                      <th className="px-6 py-4 text-left text-sm font-semibold">{fromUnit.symbol}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">{toUnit.symbol}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {conversionTable.map((row, index) => (
                      <tr key={index} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-3 font-mono">{row.from} {fromUnit.symbol}</td>
                        <td className="px-6 py-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">
                          {row.to} {toUnit.symbol}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Häufig gestellte Fragen</h2>
              <FAQ faqs={conversionFaqs} />
            </section>

            {/* Detailed Content Section */}
            <section className="prose prose-emerald dark:prose-invert max-w-none">
              <h2>{fromUnit.name} in {toUnit.name} – Alles was Sie wissen müssen</h2>
              <p>
                Die Umrechnung von {fromUnit.name.toLowerCase()} ({fromUnit.symbol}) in {toUnit.name.toLowerCase()} 
                ({toUnit.symbol}) ist eine häufig benötigte Berechnung in vielen Bereichen. Ob Sie für die Arbeit, 
                für Studien oder für den Alltag rechnen müssen – unser Umrechner bietet Ihnen präzise Ergebnisse 
                in Sekundenschnelle. Diese Umrechnung ist besonders wichtig in der Kategorie {category.name} und 
                wird täglich von Tausenden Nutzern benötigt.
              </p>
              
              <h3>Warum diese Umrechnung wichtig ist</h3>
              <p>
                Die korrekte Umrechnung zwischen {fromUnit.name.toLowerCase()} und {toUnit.name.toLowerCase()} ist 
                in vielen Situationen essentiell. Ob in der Wissenschaft, im Handwerk, beim Kochen oder bei 
                internationalen Vergleichen – präzise Umrechnungen sind der Schlüssel zu korrekten Ergebnissen. 
                Unser Online-Umrechner eliminiert Fehlerquellen und liefert Ihnen sofort exakte Werte.
              </p>
              
              <h3>Tipps für die Umrechnung</h3>
              <p>
                Nutzen Sie immer die exakte Formel {formula} für präzise Ergebnisse. Bei der Eingabe können Sie 
                sowohl Komma als auch Punkt als Dezimaltrennzeichen verwenden. Die Ergebnisse werden standardmäßig 
                im deutschen Format mit Komma angezeigt. Für wissenschaftliche Anwendungen können Sie die Anzahl 
                der Dezimalstellen anpassen.
              </p>
              
              <h3>Anwendungsbereiche</h3>
              <p>
                Unser {fromUnit.name}-in-{toUnit.name}-Umrechner wird täglich von Tausenden Nutzern verwendet – 
                von Schülern und Studenten über Handwerker bis hin zu Wissenschaftlern. Die einfache Bedienung 
                und die präzisen Ergebnisse machen ihn zum idealen Werkzeug für jede Umrechnung. Besonders 
                bei internationalen Projekten, beim Import von Produkten oder bei der Arbeit mit technischen 
                Dokumentationen ist dieser Umrechner unverzichtbar.
              </p>
              
              <h3>Historischer Hintergrund</h3>
              <p>
                Die Einheit {fromUnit.name} hat eine interessante Geschichte und wird in verschiedenen Teilen 
                der Welt unterschiedlich verwendet. Während das metrische System in Europa den Standard bildet, 
                werden in anderen Regionen noch traditionelle Einheiten verwendet. Unser Umrechner hilft Ihnen, 
                zwischen diesen verschiedenen Systemen zu navigieren und immer den richtigen Wert zu erhalten.
              </p>
            </section>

            {/* All Conversions in this Category */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Alle {category.name}-Umrechnungen</h2>
              <p className="text-muted-foreground mb-4">
                {allPairs.length.toLocaleString('de-DE')} verschiedene Umrechnungen verfügbar
              </p>
              <div className="bg-card border rounded-xl overflow-hidden">
                <div className="max-h-[600px] overflow-y-auto p-6 pr-8">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
                    {allPairs.map((pair, index) => (
                      <Link
                        key={index}
                        href={`/${kategorie}/${pair.from}-in-${pair.to}`}
                        className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline py-1 truncate"
                      >
                        {pair.fromName} → {pair.toName}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Reverse Conversion */}
            <Link
              href={`/${kategorie}/${reversePairSlug}`}
              className="block bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl p-6 hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <ArrowLeftRight className="w-6 h-6" />
                <span className="font-bold text-lg">Umkehrung</span>
              </div>
              <p className="text-emerald-100">
                {toUnit.name} in {fromUnit.name} umrechnen
              </p>
              <div className="mt-3 text-sm text-emerald-100 flex items-center gap-1">
                Zur Umrechnung <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Similar Conversions */}
            {similarPairs.length > 0 && (
              <div className="bg-card border rounded-xl overflow-hidden">
                <div className="p-4 border-b bg-muted/30">
                  <h3 className="font-semibold">Ähnliche Umrechnungen</h3>
                </div>
                <div className="divide-y">
                  {similarPairs.slice(0, 8).map((pair, index) => {
                    const cat = categories.find(c => c.slug === pair.categorySlug);
                    if (!cat) return null;
                    const from = cat.units.find(u => u.id === pair.fromUnit);
                    const to = cat.units.find(u => u.id === pair.toUnit);
                    if (!from || !to) return null;
                    
                    return (
                      <Link
                        key={index}
                        href={`/${pair.categorySlug}/${getPairSlug(pair.fromUnit, pair.toUnit)}`}
                        className="flex items-center justify-between px-4 py-3 hover:bg-muted/50 transition-colors"
                      >
                        <span className="text-sm font-medium">
                          {from.name} in {to.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Related Guides */}
            {relatedGuides.length > 0 && (
              <div className="bg-card border rounded-xl overflow-hidden">
                <div className="p-4 border-b bg-muted/30">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                    <h3 className="font-semibold">Ratgeber</h3>
                  </div>
                </div>
                <div className="divide-y">
                  {relatedGuides.map((guide) => (
                    <Link
                      key={guide.id}
                      href={`/ratgeber/${guide.slug}`}
                      className="block px-4 py-3 hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-sm font-medium text-emerald-600">
                        {guide.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* All Units in Category */}
            <div className="bg-card border rounded-xl overflow-hidden">
              <div className="p-4 border-b bg-muted/30">
                <h3 className="font-semibold">Alle {category.name}-Einheiten</h3>
                <p className="text-xs text-muted-foreground mt-1">{category.units.length} Einheiten verfügbar</p>
              </div>
              <div className="max-h-80 overflow-y-auto scrollbar-thin">
                {category.units.map((unit) => (
                  <div 
                    key={unit.id} 
                    className={`flex items-center justify-between px-4 py-2.5 border-b border-border/50 last:border-0 text-sm ${
                      unit.id === fromUnit.id || unit.id === toUnit.id ? 'bg-emerald-50 dark:bg-emerald-950/20' : ''
                    }`}
                  >
                    <span className={unit.id === fromUnit.id || unit.id === toUnit.id ? 'text-emerald-600 font-medium' : ''}>
                      {unit.name}
                    </span>
                    <span className="text-muted-foreground font-mono text-xs bg-muted px-2 py-0.5 rounded">{unit.symbol}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Back to Category */}
            <Link
              href={`/${kategorie}`}
              className="block bg-card border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-1">Alle {category.name}-Umrechnungen</h3>
              <p className="text-sm text-muted-foreground">
                {category.units.length} Einheiten verfügbar
              </p>
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
