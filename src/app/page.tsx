import Link from 'next/link';
import { categories } from '@/data/categories';
import { getTop20Pairs, getPairSlug } from '@/data/topPairs';
import { guides } from '@/data/guides';
import { getWebSiteSchema, getBreadcrumbSchema } from '@/lib/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import { 
  Ruler, Scale, Thermometer, Square, Droplet, 
  Gauge, Clock, Zap, ArrowRight, Sparkles, 
  CheckCircle, Globe, Coins, ChefHat, HardDrive, Fuel, Activity, Footprints, CircleDot, Percent,
  Calculator, TrendingUp, Shield, Clock as ClockIcon,
  Layers, Wrench, ArrowUp
} from 'lucide-react';

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

const features = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: 'Präzise Berechnungen',
    description: 'Wissenschaftliche Genauigkeit für alle Ihre Umrechnungen mit validierten Formeln.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Sofortige Ergebnisse',
    description: 'Echtzeit-Umrechnungen ohne Wartezeit – perfekt für Alltag und Beruf.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: '100% Kostenlos',
    description: 'Alle Umrechner ohne Registrierung, ohne Werbung, ohne versteckte Kosten.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'DACH-optimiert',
    description: 'Dezimalkomma, lokale Einheiten und deutsche Erklärungen für die Region.',
  },
];

export default function HomePage() {
  const topPairs = getTop20Pairs();

  return (
    <>
      <SchemaMarkup schemas={[
        getWebSiteSchema(),
        getBreadcrumbSchema([]),
      ]} />
      
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-6 py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Über 400 Umrechnungen verfügbar
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient-hero">Einheiten einfach</span>
              <br />
              <span className="text-foreground">umrechnen</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Kostenloser Einheiten-Umrechner für Deutschland, Österreich und die Schweiz. 
              Präzise, schnell und immer verfügbar.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link href="/kategorien" className="btn-primary text-lg px-8 py-4">
                Alle Umrechner
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/ratgeber" className="btn-secondary text-lg px-8 py-4">
                Ratgeber lesen
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Keine Registrierung
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                100% kostenlos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                DSGVO-konform
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Categories Grid */}
      <section className="section-container">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title text-gradient-primary">
              Alle Umrechner-Kategorien
            </h2>
            <p className="section-description">
              Wählen Sie eine Kategorie aus, um alle verfügbaren Umrechnungen zu entdecken
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                className="card-category group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="icon-container w-14 h-14 rounded-xl mb-4 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    {categoryIcons[category.id]}
                  </div>
                  <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.units.length} Einheiten
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Conversions */}
      <section className="section-container bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Beliebte Umrechnungen
            </h2>
            <p className="section-description">
              Die am häufigsten gesuchten Umrechnungen unserer Nutzer
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {topPairs.slice(0, 12).map((pair, index) => {
              const category = categories.find(c => c.slug === pair.categorySlug);
              if (!category) return null;
              
              const fromUnit = category.units.find(u => u.id === pair.fromUnit);
              const toUnit = category.units.find(u => u.id === pair.toUnit);
              if (!fromUnit || !toUnit) return null;
              
              return (
                <Link
                  key={index}
                  href={`/${pair.categorySlug}/${getPairSlug(pair.fromUnit, pair.toUnit)}`}
                  className="card-modern group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {category.name}
                        </span>
                      </div>
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
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/kategorien"
              className="btn-secondary"
            >
              Alle Umrechnungen anzeigen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-container">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Warum UmrechnerPro?
            </h2>
            <p className="section-description">
              Ihr zuverlässiger Partner für alle Einheitenumrechnungen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-card border hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="section-container bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Ratgeber & Erklärungen
            </h2>
            <p className="section-description">
              Ausführliche Artikel zu allen Einheiten und Umrechnungen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {guides.slice(0, 3).map((guide, index) => (
              <Link
                key={guide.id}
                href={`/ratgeber/${guide.slug}`}
                className="card-modern group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="icon-container w-12 h-12 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {guide.description}
                    </p>
                    <span className="text-sm text-primary font-medium inline-flex items-center gap-1">
                      Weiterlesen
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/ratgeber"
              className="btn-secondary"
            >
              Alle Ratgeber ansehen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="section-container">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Ihr Partner für Einheitenumrechnungen
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              UmrechnerPro ist Ihre erste Adresse für präzise und benutzerfreundliche Einheitenumrechnungen 
              im deutschsprachigen Raum. Ob Sie Längen von Zentimetern in Zoll umrechnen möchten, 
              Gewichte von Kilogramm in Pfund transformieren müssen oder Temperaturen zwischen Celsius 
              und Fahrenheit konvertieren wollen – unser umfassendes Tool bietet Ihnen alle notwendigen 
              Funktionen für den Alltag, die Wissenschaft und technische Anwendungen.
            </p>
            <h3 className="text-xl font-semibold mt-10 mb-4">
              Präzision für jeden Anwendungsfall
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Besonders praktisch: Unsere Umrechner akzeptieren sowohl Komma als auch Punkt als 
              Dezimaltrennzeichen und zeigen Ergebnisse standardmäßig im deutschen Format mit Komma an. 
              Damit sind wir perfekt auf die Bedürfnisse von Nutzern aus Deutschland, Österreich und der 
              Schweiz zugeschnitten. Alle Umrechnungsformeln werden transparent dargestellt, und 
              ausführliche Ratgeberartikel erklären die Hintergründe der verschiedenen Einheitensysteme.
            </p>
            <h3 className="text-xl font-semibold mt-10 mb-4">
              Über 100 Einheiten in 18 Kategorien
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Mit über 100 unterstützten Einheiten in 18 Kategorien decken wir ein breites Spektrum ab: 
              von alltäglichen Maßen wie Metern und Kilogramm bis hin zu spezialisierten Einheiten wie 
              Karat, Seemeilen und Parsec. Entdecken Sie jetzt unsere kostenlosen Umrechner und lassen 
              Sie sich von der einfachen Bedienung und den präzisen Ergebnissen überzeugen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
