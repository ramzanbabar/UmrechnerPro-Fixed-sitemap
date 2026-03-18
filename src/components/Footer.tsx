import Link from 'next/link';
import { categories } from '@/data/categories';
import { Ruler, Scale, Thermometer, Square, Droplet, Gauge, Clock, Zap, Coins, ChefHat, HardDrive, Fuel, Activity, Footprints, CircleDot, Percent, Heart, ExternalLink, Layers, Wrench, ArrowUp } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  laenge: <Ruler className="w-4 h-4" />,
  gewicht: <Scale className="w-4 h-4" />,
  temperatur: <Thermometer className="w-4 h-4" />,
  flaeche: <Square className="w-4 h-4" />,
  volumen: <Droplet className="w-4 h-4" />,
  geschwindigkeit: <Gauge className="w-4 h-4" />,
  zeit: <Clock className="w-4 h-4" />,
  druck: <Gauge className="w-4 h-4" />,
  energie: <Zap className="w-4 h-4" />,
  leistung: <Zap className="w-4 h-4" />,
  waehrung: <Coins className="w-4 h-4" />,
  kochen: <ChefHat className="w-4 h-4" />,
  datenvolumen: <HardDrive className="w-4 h-4" />,
  verbrauch: <Fuel className="w-4 h-4" />,
  frequenz: <Activity className="w-4 h-4" />,
  schuhgroesse: <Footprints className="w-4 h-4" />,
  winkel: <CircleDot className="w-4 h-4" />,
  prozent: <Percent className="w-4 h-4" />,
  dichte: <Layers className="w-4 h-4" />,
  kraft: <ArrowUp className="w-4 h-4" />,
  drehmoment: <Wrench className="w-4 h-4" />,
};

const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/haftungsausschluss', label: 'Haftungsausschluss' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-xl shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30 transition-shadow">
                  U
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient-primary">
                  UmrechnerPro
                </span>
                <span className="text-xs text-muted-foreground">
                  Präzise Umrechnungen
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Kostenlose und präzise Einheiten-Umrechner für Deutschland, Österreich und die Schweiz. 
              Über 400 Umrechnungen in 18 Kategorien.
            </p>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-medium">
                🇩🇪 🇦🇹 🇨🇭
                <span className="text-xs">DACH-Region</span>
              </span>
            </div>
          </div>

          {/* Categories Column */}
          <div className="space-y-5">
            <h3 className="font-semibold text-base">
              Beliebte Kategorien
            </h3>
            <ul className="space-y-2.5">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/${category.slug}`}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <span className="text-primary">
                        {categoryIcons[category.id]}
                      </span>
                    </span>
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories Column */}
          <div className="space-y-5">
            <h3 className="font-semibold text-base">
              Weitere Umrechner
            </h3>
            <ul className="space-y-2.5">
              {categories.slice(6).map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/${category.slug}`}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <span className="text-primary">
                        {categoryIcons[category.id]}
                      </span>
                    </span>
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  href="/kategorien"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Alle anzeigen
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info Column */}
          <div className="space-y-5">
            <h3 className="font-semibold text-base">
              Rechtliches & Info
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 border-t space-y-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                UmrechnerPro verwendet die genauesten Umrechnungsformeln und wird regelmäßig aktualisiert, 
                um höchste Präzision zu gewährleisten.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} UmrechnerPro.de – Alle Rechte vorbehalten
            </p>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <span>Gemacht mit</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>für die DACH-Region</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
