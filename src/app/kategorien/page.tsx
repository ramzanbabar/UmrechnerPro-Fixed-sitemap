import Link from 'next/link';
import { categories } from '@/data/categories';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Ruler, Scale, Thermometer, Square, Droplet, Gauge, Clock, Zap, ArrowRight, Coins, ChefHat, HardDrive, Fuel, Activity, Footprints, CircleDot, Percent } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  laenge: <Ruler className="w-10 h-10" />,
  gewicht: <Scale className="w-10 h-10" />,
  temperatur: <Thermometer className="w-10 h-10" />,
  flaeche: <Square className="w-10 h-10" />,
  volumen: <Droplet className="w-10 h-10" />,
  geschwindigkeit: <Gauge className="w-10 h-10" />,
  zeit: <Clock className="w-10 h-10" />,
  druck: <Gauge className="w-10 h-10" />,
  energie: <Zap className="w-10 h-10" />,
  leistung: <Zap className="w-10 h-10" />,
  waehrung: <Coins className="w-10 h-10" />,
  kochen: <ChefHat className="w-10 h-10" />,
  datenvolumen: <HardDrive className="w-10 h-10" />,
  verbrauch: <Fuel className="w-10 h-10" />,
  frequenz: <Activity className="w-10 h-10" />,
  schuhgroesse: <Footprints className="w-10 h-10" />,
  winkel: <CircleDot className="w-10 h-10" />,
  prozent: <Percent className="w-10 h-10" />,
};

export const metadata = {
  title: 'Alle Umrechner-Kategorien - UmrechnerPro',
  description: 'Übersicht aller Umrechner-Kategorien: Länge, Gewicht, Temperatur, Fläche, Volumen, Geschwindigkeit, Zeit, Druck, Energie und Leistung.',
  alternates: {
    canonical: 'https://umrechnerpro.de/kategorien',
    languages: {
      'de-DE': 'https://umrechnerpro.de/kategorien',
      'de-AT': 'https://umrechnerpro.de/kategorien',
      'de-CH': 'https://umrechnerpro.de/kategorien',
    },
  },
};

export default function KategorienPage() {
  // Calculate total conversions
  const totalConversions = categories.reduce((acc, cat) => {
    return acc + (cat.units.length * (cat.units.length - 1));
  }, 0);

  return (
    <>
      <SchemaMarkup schemas={[
        getBreadcrumbSchema([
          { name: 'Kategorien', url: '/kategorien' },
        ]),
      ]} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-emerald-600">Startseite</Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">Kategorien</li>
          </ol>
        </nav>

        {/* Header Section */}
        <section className="hero-gradient rounded-2xl p-8 md:p-12 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Alle Umrechner-Kategorien</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Entdecken Sie unsere umfassende Sammlung von Einheitenumrechnern. 
            Wählen Sie eine Kategorie, um alle verfügbaren Umrechnungen zu sehen.
          </p>
          <div className="flex items-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2 bg-white/50 dark:bg-black/20 rounded-full px-4 py-2">
              <span className="font-bold text-emerald-600">{categories.length}</span>
              <span className="text-muted-foreground">Kategorien</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 dark:bg-black/20 rounded-full px-4 py-2">
              <span className="font-bold text-emerald-600">{categories.reduce((acc, cat) => acc + cat.units.length, 0)}</span>
              <span className="text-muted-foreground">Einheiten</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 dark:bg-black/20 rounded-full px-4 py-2">
              <span className="font-bold text-emerald-600">{totalConversions.toLocaleString('de-DE')}</span>
              <span className="text-muted-foreground">Umrechnungen</span>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Wählen Sie eine Kategorie</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                className="group bg-card border rounded-xl p-6 card-hover flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                    {categoryIcons[category.id]}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
                    {category.name} umrechnen
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {category.units.length} Einheiten verfügbar
                    </span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Access to Popular Conversions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Schnellzugriff auf beliebte Umrechnungen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {categories.map((category) => {
              const popularUnits = category.units.slice(0, 2);
              if (popularUnits.length < 2) return null;
              
              return (
                <Link
                  key={category.id}
                  href={`/${category.slug}/${popularUnits[0].id}-in-${popularUnits[1].id}`}
                  className="flex items-center gap-3 bg-card border rounded-lg p-4 hover:border-emerald-300 transition-colors"
                >
                  <span className="text-emerald-600">{categoryIcons[category.id]}</span>
                  <div>
                    <span className="font-medium">{popularUnits[0].name} in {popularUnits[1].name}</span>
                    <span className="block text-sm text-muted-foreground">
                      {popularUnits[0].symbol} → {popularUnits[1].symbol}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* SEO Content */}
        <section className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Umfassende Einheitenumrechnungen</h2>
          <div className="prose prose-emerald dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              Unser Kategorienübersicht bietet Ihnen Zugang zu allen wichtigen Umrechnungen, die Sie im 
              Alltag, im Beruf oder in der Wissenschaft benötigen. Von klassischen Längen- und 
              Gewichtsumrechnungen bis hin zu spezialisierten Bereichen wie Druck und Energie – 
              finden Sie hier das passende Tool für jede Anwendung.
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-4">Metrische und imperiale Einheiten</h3>
            <p className="text-muted-foreground mb-4">
              Jede Kategorie enthält eine große Auswahl an Einheiten, darunter sowohl metrische als auch 
              imperiale Maße. So können Sie beispielsweise in der Kategorie Länge nicht nur zwischen 
              Meter, Zentimeter und Kilometer umrechnen, sondern auch Zoll, Fuß, Meilen und sogar 
              astronomische Einheiten wie Lichtjahre konvertieren.
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-4">Für den deutschsprachigen Raum optimiert</h3>
            <p className="text-muted-foreground">
              Besonders praktisch für den deutschsprachigen Raum: Alle unsere Umrechner verwenden 
              standardmäßig das Komma als Dezimaltrennzeichen und zeigen Formeln sowie Erklärungen 
              auf Deutsch an. Klicken Sie auf eine Kategorie, um alle verfügbaren Umrechnungen 
              zu entdecken und sofort mit der Umrechnung zu beginnen.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
