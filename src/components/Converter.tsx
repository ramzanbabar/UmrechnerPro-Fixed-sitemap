'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Category, Unit } from '@/data/categories';
import { convert, parseInput, formatOutput, getFormula, fetchExchangeRates, getExchangeRatesDate, getCachedRates, convertAsync } from '@/lib/convert';
import { 
  ArrowRightLeft, Copy, Check, Share2, History, 
  Star, StarOff, ChevronDown, Search, X, 
  Info, Calculator, TrendingUp, Zap, RefreshCw
} from 'lucide-react';

interface ConverterProps {
  category: Category;
  initialFromUnit?: string;
  initialToUnit?: string;
  initialValue?: string;
}

interface HistoryItem {
  fromValue: string;
  fromUnit: string;
  toValue: string;
  toUnit: string;
  timestamp: number;
}

// Common presets for different categories
const categoryPresets: Record<string, number[]> = {
  laenge: [1, 10, 100, 1000, 0.1, 2.54, 30.48, 1609.344],
  gewicht: [1, 100, 500, 1000, 0.45359237, 28.3495, 0.2],
  temperatur: [0, 20, 37, 100, -40, 200, 350],
  flaeche: [1, 100, 1000, 10000, 4046.86, 0.092903],
  volumen: [1, 100, 250, 500, 1000, 3785.41, 4546.09],
  geschwindigkeit: [1, 10, 50, 100, 120, 1609.344/3600, 0.514444],
  zeit: [1, 60, 3600, 86400, 604800, 31556952],
  druck: [1, 101.325, 100000, 6894.76, 133.322],
  energie: [1, 4184, 3600000, 1055.06, 1.602e-19],
  leistung: [1, 735.499, 745.7, 1000, 0.293071],
};

// Real-world examples for visual comparison
const realWorldExamples: Record<string, Array<{ value: number; unit: string; description: string }>> = {
  laenge: [
    { value: 0.001, unit: 'mm', description: 'Dicke eines Menschenhaars' },
    { value: 2.54, unit: 'cm', description: 'Durchmesser einer 1-Euro-Münze' },
    { value: 30.48, unit: 'cm', description: 'Länge eines Lineals' },
    { value: 1.8, unit: 'm', description: 'Durchschnittliche Körpergröße' },
    { value: 100, unit: 'm', description: 'Länge eines Fußballfelds' },
    { value: 1609.344, unit: 'm', description: 'Eine Meile' },
  ],
  gewicht: [
    { value: 1, unit: 'g', description: 'Eine Papierklammer' },
    { value: 5, unit: 'g', description: 'Ein Teelöffel Zucker' },
    { value: 500, unit: 'g', description: 'Ein Pfund Mehl' },
    { value: 1, unit: 'kg', description: 'Eine Wasserflasche (1 Liter)' },
    { value: 70, unit: 'kg', description: 'Durchschnittliches Körpergewicht' },
    { value: 1000, unit: 'kg', description: 'Ein kleines Auto' },
  ],
  temperatur: [
    { value: -18, unit: '°C', description: 'Gefrierfach Temperatur' },
    { value: 0, unit: '°C', description: 'Gefrierpunkt von Wasser' },
    { value: 4, unit: '°C', description: 'Kühlschrank Temperatur' },
    { value: 20, unit: '°C', description: 'Zimmertemperatur' },
    { value: 37, unit: '°C', description: 'Körpertemperatur' },
    { value: 100, unit: '°C', description: 'Siedepunkt von Wasser' },
  ],
  volumen: [
    { value: 5, unit: 'ml', description: 'Ein Teelöffel' },
    { value: 250, unit: 'ml', description: 'Eine Tasse' },
    { value: 1, unit: 'l', description: 'Eine Wasserflasche' },
    { value: 5, unit: 'l', description: 'Ein Eimer' },
    { value: 50, unit: 'l', description: 'Ein Koffer' },
    { value: 1000, unit: 'l', description: 'Ein Kubikmeter Wasser' },
  ],
  geschwindigkeit: [
    { value: 5, unit: 'km/h', description: 'Gehgeschwindigkeit' },
    { value: 20, unit: 'km/h', description: 'Fahrradgeschwindigkeit' },
    { value: 50, unit: 'km/h', description: 'Stadtgeschwindigkeit' },
    { value: 100, unit: 'km/h', description: 'Autobahn-tempo' },
    { value: 300, unit: 'km/h', description: 'ICE-Zug' },
    { value: 900, unit: 'km/h', description: 'Flugzeug' },
  ],
};

export default function Converter({ 
  category, 
  initialFromUnit, 
  initialToUnit,
  initialValue = ''
}: ConverterProps) {
  const [fromUnit, setFromUnit] = useState<Unit>(
    category.units.find(u => u.id.toLowerCase() === initialFromUnit?.toLowerCase()) || category.units[0]
  );
  const [toUnit, setToUnit] = useState<Unit>(
    category.units.find(u => u.id.toLowerCase() === initialToUnit?.toLowerCase()) || category.units[1] || category.units[0]
  );
  const [inputValue, setInputValue] = useState(initialValue);
  const [outputValue, setOutputValue] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [precision, setPrecision] = useState(6);
  const [showHistory, setShowHistory] = useState(false);
  const [showFromSearch, setShowFromSearch] = useState(false);
  const [showToSearch, setShowToSearch] = useState(false);
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showPresets, setShowPresets] = useState(false);
  const [ratesLoading, setRatesLoading] = useState(false);
  const [ratesDate, setRatesDate] = useState<string>('');
  const [loadedRates, setLoadedRates] = useState<Record<string, number> | null>(null);
  
  const fromSearchRef = useRef<HTMLInputElement>(null);
  const toSearchRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch exchange rates for currency category
  useEffect(() => {
    if (category.slug === 'waehrung') {
      setRatesLoading(true);
      fetch('/api/exchange-rates')
        .then(res => res.json())
        .then(json => {
          if (json.success && json.data) {
            setLoadedRates(json.data.rates);
            setRatesDate(json.data.date);
          }
        })
        .catch(console.error)
        .finally(() => setRatesLoading(false));
    }
  }, [category.slug]);

  // Load history and favorites from localStorage
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem(`converter-history-${category.id}`);
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
      const savedFavorites = localStorage.getItem(`converter-favorites-${category.id}`);
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (e) {
      // localStorage not available
    }
  }, [category.id]);

  const performConversion = useCallback((value: string, from: Unit, to: Unit) => {
    const parsed = parseInput(value);
    if (parsed === null) {
      setOutputValue('');
      return;
    }

    // For currency, use loadedRates from state
    if (category.slug === 'waehrung') {
      if (ratesLoading) {
        setOutputValue('Laden...');
        return;
      }
      if (!loadedRates) {
        setOutputValue('Laden...');
        return;
      }
      
      // Convert currency using loaded rates
      const fromCode = from.id.toUpperCase();
      const toCode = to.id.toUpperCase();
      
      if (fromCode === toCode) {
        setOutputValue(formatOutput(parsed, precision));
        return;
      }
      
      const fromRate = fromCode === 'EUR' ? 1 : loadedRates[fromCode];
      const toRate = toCode === 'EUR' ? 1 : loadedRates[toCode];
      
      if (fromRate === undefined || toRate === undefined) {
        setOutputValue('Fehler');
        return;
      }
      
      const valueInEUR = parsed / fromRate;
      const result = valueInEUR * toRate;
      setOutputValue(formatOutput(result, precision, true));  // true = isCurrency
      return;
    }

    const result = convert(parsed, from.id, to.id, category.slug);
    if (result !== null) {
      setOutputValue(formatOutput(result, precision));
    } else {
      setOutputValue('Fehler');
    }
  }, [category.slug, precision, loadedRates, ratesLoading]);

  // Re-run conversion when inputs, precision, or rates change
  useEffect(() => {
    // For currency, wait until rates are loaded
    if (category.slug === 'waehrung') {
      if (ratesLoading || !loadedRates) {
        setOutputValue('Laden...');
        return;
      }
    }
    
    // Run the conversion
    performConversion(inputValue, fromUnit, toUnit);
  }, [inputValue, fromUnit, toUnit, precision, category.slug, ratesLoading, loadedRates, performConversion]);

  const handleSwapUnits = () => {
    setIsSwapping(true);
    setTimeout(() => {
      const temp = fromUnit;
      setFromUnit(toUnit);
      setToUnit(temp);
      setIsSwapping(false);
    }, 200);
  };

  const handleCopy = async () => {
    if (outputValue) {
      const text = `${outputValue} ${toUnit.symbol}`;
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (outputValue && navigator.share) {
      try {
        await navigator.share({
          title: `${inputValue} ${fromUnit.symbol} = ${outputValue} ${toUnit.symbol}`,
          text: `${inputValue} ${fromUnit.name} entsprechen ${outputValue} ${toUnit.name}`,
          url: window.location.href,
        });
      } catch (e) {
        // Share cancelled
      }
    } else {
      handleCopy();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^-?[0-9,.]*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handlePresetClick = (preset: number) => {
    setInputValue(preset.toString());
    inputRef.current?.focus();
  };

  const addToHistory = useCallback(() => {
    if (!inputValue || !outputValue) return;
    
    const newItem: HistoryItem = {
      fromValue: inputValue,
      fromUnit: fromUnit.id,
      toValue: outputValue,
      toUnit: toUnit.id,
      timestamp: Date.now(),
    };
    
    const newHistory = [newItem, ...history.slice(0, 9)];
    setHistory(newHistory);
    
    try {
      localStorage.setItem(`converter-history-${category.id}`, JSON.stringify(newHistory));
    } catch (e) {
      // localStorage not available
    }
  }, [inputValue, outputValue, fromUnit.id, toUnit.id, history, category.id]);

  // Add to history when conversion is complete
  useEffect(() => {
    if (inputValue && outputValue) {
      const timeout = setTimeout(addToHistory, 1000);
      return () => clearTimeout(timeout);
    }
  }, [outputValue, addToHistory]);

  const toggleFavorite = (unitId: string) => {
    const newFavorites = favorites.includes(unitId)
      ? favorites.filter(id => id !== unitId)
      : [...favorites, unitId];
    setFavorites(newFavorites);
    
    try {
      localStorage.setItem(`converter-favorites-${category.id}`, JSON.stringify(newFavorites));
    } catch (e) {
      // localStorage not available
    }
  };

  const filteredFromUnits = useMemo(() => {
    if (!searchFrom) return category.units;
    const search = searchFrom.toLowerCase();
    return category.units.filter(u => 
      u.name.toLowerCase().includes(search) || 
      u.symbol.toLowerCase().includes(search) ||
      u.nameEn.toLowerCase().includes(search)
    );
  }, [searchFrom, category.units]);

  const filteredToUnits = useMemo(() => {
    if (!searchTo) return category.units;
    const search = searchTo.toLowerCase();
    return category.units.filter(u => 
      u.name.toLowerCase().includes(search) || 
      u.symbol.toLowerCase().includes(search) ||
      u.nameEn.toLowerCase().includes(search)
    );
  }, [searchTo, category.units]);

  // For currency, get the live exchange rate for the formula
  const exchangeRate = useMemo(() => {
    if (category.slug === 'waehrung' && loadedRates && !ratesLoading) {
      const fromCode = fromUnit.id.toUpperCase();
      const toCode = toUnit.id.toUpperCase();
      
      if (fromCode === toCode) return 1;
      
      const fromRate = fromCode === 'EUR' ? 1 : loadedRates[fromCode];
      const toRate = toCode === 'EUR' ? 1 : loadedRates[toCode];
      
      if (fromRate !== undefined && toRate !== undefined) {
        return toRate / fromRate;
      }
    }
    return undefined;
  }, [category.slug, fromUnit.id, toUnit.id, loadedRates, ratesLoading]);

  const formula = getFormula(fromUnit, toUnit, category.slug, exchangeRate);
  const presets = categoryPresets[category.slug] || [1, 10, 100, 1000];

  // Calculate reverse value
  const reverseValue = useMemo(() => {
    if (!outputValue || outputValue === 'Laden...' || outputValue === 'Fehler') return null;
    const parsed = parseInput(outputValue);
    if (parsed === null) return null;
    
    // For currency, use loadedRates
    if (category.slug === 'waehrung' && loadedRates) {
      const fromCode = toUnit.id.toUpperCase();
      const toCode = fromUnit.id.toUpperCase();
      
      if (fromCode === toCode) return formatOutput(parsed, precision);
      
      const fromRate = fromCode === 'EUR' ? 1 : loadedRates[fromCode];
      const toRate = toCode === 'EUR' ? 1 : loadedRates[toCode];
      
      if (fromRate !== undefined && toRate !== undefined) {
        const result = (parsed / fromRate) * toRate;
        return formatOutput(result, precision, true);  // true = isCurrency
      }
      return null;
    }
    
    const reversed = convert(parsed, toUnit.id, fromUnit.id, category.slug);
    return reversed !== null ? formatOutput(reversed, precision) : null;
  }, [outputValue, toUnit.id, fromUnit.id, category.slug, precision, loadedRates]);

  return (
    <div className="space-y-4">
      {/* Main Converter Card */}
      <div className="bg-card border rounded-2xl shadow-lg overflow-hidden">
        {/* Input Section */}
        <div className="p-6 border-b bg-gradient-to-r from-background to-muted/30">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Wert eingeben
            </label>
            <div className="flex items-center gap-2">
              <label htmlFor="precision-select" className="text-xs text-muted-foreground">Dezimalstellen:</label>
              <select 
                id="precision-select"
                value={precision}
                onChange={(e) => {
                  const newPrecision = Number(e.target.value);
                  setPrecision(newPrecision);
                }}
                className="text-xs bg-background border border-border rounded px-2 py-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
              </select>
            </div>
          </div>
          
          <input
            ref={inputRef}
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={`Wert in ${fromUnit.name} eingeben...`}
            className="w-full px-4 py-4 text-3xl font-bold border-2 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-background transition-all"
            autoFocus
          />
          
          {/* Quick Presets */}
          <div className="flex flex-wrap gap-2 mt-3">
            {presets.slice(0, 6).map((preset, index) => (
              <button
                key={index}
                onClick={() => handlePresetClick(preset)}
                className="px-3 py-1.5 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
              >
                {formatOutput(preset, 2)}
              </button>
            ))}
          </div>
        </div>

        {/* Unit Selection */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            {/* From Unit */}
            <div className="flex-1 relative">
              <label className="text-sm font-semibold text-muted-foreground block mb-2">
                Von
                <button 
                  onClick={() => toggleFavorite(fromUnit.id)}
                  className="ml-2 inline-flex items-center text-muted-foreground hover:text-yellow-500 transition-colors"
                  title={favorites.includes(fromUnit.id) ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen'}
                >
                  {favorites.includes(fromUnit.id) ? (
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ) : (
                    <StarOff className="w-4 h-4" />
                  )}
                </button>
              </label>
              <button
                onClick={() => {
                  setShowFromSearch(!showFromSearch);
                  setShowToSearch(false);
                  setTimeout(() => fromSearchRef.current?.focus(), 100);
                }}
                className="w-full px-4 py-3 border-2 rounded-xl bg-background flex items-center justify-between hover:border-emerald-300 transition-colors"
              >
                <div className="text-left">
                  <div className="font-semibold">{fromUnit.name}</div>
                  <div className="text-sm text-muted-foreground">{fromUnit.symbol}</div>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${showFromSearch ? 'rotate-180' : ''}`} />
              </button>
              
              {/* From Unit Search Dropdown */}
              {showFromSearch && (
                <div className="absolute z-50 w-full mt-2 bg-card border-2 rounded-xl shadow-2xl max-h-64 overflow-hidden">
                  <div className="p-3 border-b bg-muted/50">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        ref={fromSearchRef}
                        type="text"
                        value={searchFrom}
                        onChange={(e) => setSearchFrom(e.target.value)}
                        placeholder="Einheit suchen..."
                        className="w-full pl-9 pr-4 py-2 border rounded-lg bg-background"
                      />
                      {searchFrom && (
                        <button 
                          onClick={() => setSearchFrom('')}
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                        >
                          <X className="w-4 h-4 text-muted-foreground" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="overflow-y-auto max-h-48">
                    {filteredFromUnits.length === 0 ? (
                      <div className="p-4 text-center text-muted-foreground">Keine Einheit gefunden</div>
                    ) : (
                      filteredFromUnits.map((unit) => (
                        <button
                          key={unit.id}
                          onClick={() => {
                            setFromUnit(unit);
                            setShowFromSearch(false);
                            setSearchFrom('');
                          }}
                          className={`w-full px-4 py-2 flex items-center justify-between hover:bg-muted transition-colors ${
                            unit.id === fromUnit.id ? 'bg-emerald-50 dark:bg-emerald-900/20' : ''
                          }`}
                        >
                          <div className="text-left">
                            <div className="font-medium">{unit.name}</div>
                            <div className="text-xs text-muted-foreground">{unit.nameEn}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm bg-muted px-2 py-0.5 rounded">{unit.symbol}</span>
                            {favorites.includes(unit.id) && <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />}
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Swap Button */}
            <button
              onClick={handleSwapUnits}
              className={`flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all self-center ${isSwapping ? 'scale-90 rotate-180' : 'scale-100 rotate-0'}`}
              aria-label="Einheiten tauschen"
              style={{ transition: 'transform 0.2s ease-out' }}
            >
              <ArrowRightLeft className="w-6 h-6" />
            </button>

            {/* To Unit */}
            <div className="flex-1 relative">
              <label className="text-sm font-semibold text-muted-foreground block mb-2">
                Nach
                <button 
                  onClick={() => toggleFavorite(toUnit.id)}
                  className="ml-2 inline-flex items-center text-muted-foreground hover:text-yellow-500 transition-colors"
                  title={favorites.includes(toUnit.id) ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen'}
                >
                  {favorites.includes(toUnit.id) ? (
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ) : (
                    <StarOff className="w-4 h-4" />
                  )}
                </button>
              </label>
              <button
                onClick={() => {
                  setShowToSearch(!showToSearch);
                  setShowFromSearch(false);
                  setTimeout(() => toSearchRef.current?.focus(), 100);
                }}
                className="w-full px-4 py-3 border-2 rounded-xl bg-background flex items-center justify-between hover:border-emerald-300 transition-colors"
              >
                <div className="text-left">
                  <div className="font-semibold">{toUnit.name}</div>
                  <div className="text-sm text-muted-foreground">{toUnit.symbol}</div>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${showToSearch ? 'rotate-180' : ''}`} />
              </button>
              
              {/* To Unit Search Dropdown */}
              {showToSearch && (
                <div className="absolute z-50 w-full mt-2 bg-card border-2 rounded-xl shadow-2xl max-h-64 overflow-hidden">
                  <div className="p-3 border-b bg-muted/50">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        ref={toSearchRef}
                        type="text"
                        value={searchTo}
                        onChange={(e) => setSearchTo(e.target.value)}
                        placeholder="Einheit suchen..."
                        className="w-full pl-9 pr-4 py-2 border rounded-lg bg-background"
                      />
                      {searchTo && (
                        <button 
                          onClick={() => setSearchTo('')}
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                        >
                          <X className="w-4 h-4 text-muted-foreground" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="overflow-y-auto max-h-48">
                    {filteredToUnits.length === 0 ? (
                      <div className="p-4 text-center text-muted-foreground">Keine Einheit gefunden</div>
                    ) : (
                      filteredToUnits.map((unit) => (
                        <button
                          key={unit.id}
                          onClick={() => {
                            setToUnit(unit);
                            setShowToSearch(false);
                            setSearchTo('');
                          }}
                          className={`w-full px-4 py-2 flex items-center justify-between hover:bg-muted transition-colors ${
                            unit.id === toUnit.id ? 'bg-emerald-50 dark:bg-emerald-900/20' : ''
                          }`}
                        >
                          <div className="text-left">
                            <div className="font-medium">{unit.name}</div>
                            <div className="text-xs text-muted-foreground">{unit.nameEn}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm bg-muted px-2 py-0.5 rounded">{unit.symbol}</span>
                            {favorites.includes(unit.id) && <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />}
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-emerald-100 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Ergebnis
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                disabled={!outputValue}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Kopiert!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Kopieren
                  </>
                )}
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                disabled={!outputValue}
              >
                <Share2 className="w-4 h-4" />
                Teilen
              </button>
            </div>
          </div>
          
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-4xl sm:text-5xl font-bold">
              {outputValue || '—'}
            </span>
            {outputValue && (
              <span className="text-2xl text-emerald-100">
                {toUnit.symbol}
              </span>
            )}
          </div>
          
          {/* Currency rates info */}
          {category.slug === 'waehrung' && ratesLoading && (
            <div className="mt-2 text-sm text-emerald-100 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Live-Kurse werden geladen...</span>
            </div>
          )}
          
          {category.slug === 'waehrung' && ratesDate && !ratesLoading && (
            <div className="mt-2 text-sm text-emerald-100 flex items-center gap-2">
              <span>Kurs vom {ratesDate} (EZB)</span>
            </div>
          )}
          
          {/* Reverse conversion */}
          {reverseValue && inputValue && (
            <div className="mt-3 text-sm text-emerald-100">
              1 {toUnit.symbol} = {reverseValue} {fromUnit.symbol}
            </div>
          )}
        </div>

        {/* Formula Card */}
        <div className="p-4 bg-muted/50 border-t">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground mb-1">Umrechnungsformel</div>
              <code className="text-sm font-mono bg-background px-3 py-1.5 rounded-lg border">
                {category.slug === 'waehrung' && ratesLoading ? 'Kurse werden geladen...' : formula}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* History Toggle */}
      {history.length > 0 && (
        <div className="bg-card border rounded-xl overflow-hidden">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <span className="flex items-center gap-2 font-medium">
              <History className="w-4 h-4 text-muted-foreground" />
              Verlauf ({history.length})
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showHistory ? 'rotate-180' : ''}`} />
          </button>
          
          {showHistory && (
            <div className="border-t divide-y">
              {history.slice(0, 5).map((item, index) => {
                const fromU = category.units.find(u => u.id === item.fromUnit);
                const toU = category.units.find(u => u.id === item.toUnit);
                if (!fromU || !toU) return null;
                
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setInputValue(item.fromValue);
                      setFromUnit(fromU);
                      setToUnit(toU);
                      setShowHistory(false);
                    }}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
                  >
                    <div>
                      <span className="font-mono">{item.fromValue} {fromU.symbol}</span>
                      <span className="text-muted-foreground mx-2">=</span>
                      <span className="font-mono">{item.toValue} {toU.symbol}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(item.timestamp).toLocaleTimeString('de-DE')}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Visual Comparison */}
      {realWorldExamples[category.slug] && inputValue && outputValue && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            Zum Vergleich
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {realWorldExamples[category.slug].slice(0, 4).map((example, index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">{example.value} {example.unit}</span>
                  {' '}= {example.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
