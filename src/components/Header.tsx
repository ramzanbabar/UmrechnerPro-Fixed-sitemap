'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';
import { Ruler, Scale, Thermometer, Square, Droplet, Gauge, Clock, Zap, Menu, X, Search, ChevronDown, Sun, Moon, Coins, ChefHat, HardDrive, Fuel, Activity, Footprints, CircleDot, Percent, Sparkles, Layers, Wrench, ArrowUp } from 'lucide-react';
import { useTheme } from 'next-themes';

const categoryIcons: Record<string, React.ReactNode> = {
  laenge: <Ruler className="w-5 h-5" />,
  gewicht: <Scale className="w-5 h-5" />,
  temperatur: <Thermometer className="w-5 h-5" />,
  flaeche: <Square className="w-5 h-5" />,
  volumen: <Droplet className="w-5 h-5" />,
  geschwindigkeit: <Gauge className="w-5 h-5" />,
  zeit: <Clock className="w-5 h-5" />,
  druck: <Gauge className="w-5 h-5" />,
  energie: <Zap className="w-5 h-5" />,
  leistung: <Zap className="w-5 h-5" />,
  waehrung: <Coins className="w-5 h-5" />,
  kochen: <ChefHat className="w-5 h-5" />,
  datenvolumen: <HardDrive className="w-5 h-5" />,
  verbrauch: <Fuel className="w-5 h-5" />,
  frequenz: <Activity className="w-5 h-5" />,
  schuhgroesse: <Footprints className="w-5 h-5" />,
  winkel: <CircleDot className="w-5 h-5" />,
  prozent: <Percent className="w-5 h-5" />,
  dichte: <Layers className="w-5 h-5" />,
  kraft: <ArrowUp className="w-5 h-5" />,
  drehmoment: <Wrench className="w-5 h-5" />,
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-50 w-full header-blur border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image 
                src="/logo.svg" 
                alt="UmrechnerPro Logo" 
                width={44} 
                height={44}
                className="rounded-xl shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-shadow"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient-primary">
                UmrechnerPro
              </span>
              <span className="text-[10px] text-muted-foreground -mt-1 hidden sm:block">
                Präzise Umrechnungen
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Categories Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCategoryOpen(true)}
              onMouseLeave={() => setIsCategoryOpen(false)}
            >
              <button 
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-accent transition-colors"
              >
                Kategorien
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCategoryOpen && (
                <div className="absolute top-full left-0 w-[480px] pt-2 animate-fade-in">
                  <div className="bg-card border rounded-2xl shadow-xl p-3 grid grid-cols-2 gap-1">
                    {categories.map((category, index) => (
                      <Link
                        key={category.id}
                        href={`/${category.slug}`}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl hover:bg-accent transition-colors group"
                        style={{ animationDelay: `${index * 20}ms` }}
                      >
                        <span className="w-9 h-9 rounded-lg icon-container flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-primary">
                            {categoryIcons[category.id]}
                          </span>
                        </span>
                        <div>
                          <span className="font-medium">{category.name}</span>
                          <span className="block text-xs text-muted-foreground">
                            {category.units.length} Einheiten
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/kategorien" 
              className="px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-accent transition-colors"
            >
              Alle Umrechner
            </Link>
            <Link 
              href="/ratgeber" 
              className="px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-accent transition-colors"
            >
              Ratgeber
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button 
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground bg-muted/50 hover:bg-muted rounded-lg transition-colors"
              aria-label="Suche"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">Suchen...</span>
              <kbd className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs bg-background rounded border">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <button 
              className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-accent transition-colors"
              aria-label={isDark ? 'Light Mode' : 'Dark Mode'}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            >
              <div className="relative w-5 h-5">
                <Sun className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`} />
                <Moon className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isDark ? 'opacity-0 -rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
              </div>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menü"
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-200 ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`absolute inset-0 w-5 h-5 transition-all duration-200 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${isMenuOpen ? 'max-h-[calc-100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t space-y-1">
            <Link 
              href="/kategorien" 
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Alle Umrechner
            </Link>
            
            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Kategorien
            </div>
            
            <div className="grid grid-cols-2 gap-1 px-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/${category.slug}`}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-primary">{categoryIcons[category.id]}</span>
                  {category.name}
                </Link>
              ))}
            </div>
            
            <Link 
              href="/ratgeber" 
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Ratgeber
            </Link>
            
            {/* Mobile Theme Toggle */}
            <div className="px-4 pt-4 border-t mt-2">
              <button
                className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent transition-colors"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </div>
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
