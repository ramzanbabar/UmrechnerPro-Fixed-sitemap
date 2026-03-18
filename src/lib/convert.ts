// Conversion Engine for UmrechnerPro.de
// Handles all unit conversions with precision

import { categories, Category, Unit } from '@/data/categories';

// Exchange rates type
export interface ExchangeRates {
  base: string;
  date: string;
  rates: Record<string, number>;
}

// Cached exchange rates
let cachedRates: ExchangeRates | null = null;

// Fetch exchange rates from our API
export async function fetchExchangeRates(): Promise<ExchangeRates | null> {
  try {
    const response = await fetch('/api/exchange-rates');
    if (!response.ok) return null;
    const json = await response.json();
    
    // API returns { success: true, data: { base, date, rates } }
    if (json.success && json.data) {
      cachedRates = json.data;
      return cachedRates;
    }
    return null;
  } catch {
    return null;
  }
}

// Get cached rates or fetch if not available
export function getCachedRates(): ExchangeRates | null {
  return cachedRates;
}

// Get exchange rates date
export function getExchangeRatesDate(): string | null {
  return cachedRates?.date || null;
}

// Parse input number (accepts both comma and dot as decimal separator)
export function parseInput(value: string): number | null {
  if (!value || value.trim() === '') return null;
  
  // Replace comma with dot for parsing
  const normalized = value.replace(',', '.').trim();
  const parsed = parseFloat(normalized);
  
  return isNaN(parsed) ? null : parsed;
}

// Format number for display (German locale with comma as decimal separator)
// precision: number of decimal places to show (2, 4, 6, 8, or 10)
// isCurrency: for currency, never use scientific notation
export function formatOutput(value: number | null | undefined, precision: number = 6, isCurrency: boolean = false): string {
  if (value === null || value === undefined || !isFinite(value)) return '0';
  
  const absValue = Math.abs(value);
  let formatted: string;
  
  // For currency, never use scientific notation
  if (isCurrency) {
    if (absValue === 0) {
      formatted = '0';
    } else {
      // Use the specified precision for currency
      formatted = value.toFixed(precision);
    }
  } else {
    // Non-currency: use scientific notation for very small/large numbers
    if (absValue < 0.000001 || absValue > 999999999) {
      return value.toExponential(Math.min(precision - 1, 6)).replace('.', ',');
    }
    
    if (absValue === 0) {
      formatted = '0';
    } else {
      // Use the specified precision as decimal places
      formatted = value.toFixed(precision);
    }
  }
  
  // Replace dot with comma for German locale
  return formatted.replace('.', ',');
}

// Temperature conversion functions
function celsiusToFahrenheit(c: number): number {
  return c * 9/5 + 32;
}

function fahrenheitToCelsius(f: number): number {
  return (f - 32) * 5/9;
}

function celsiusToKelvin(c: number): number {
  return c + 273.15;
}

function kelvinToCelsius(k: number): number {
  return k - 273.15;
}

function fahrenheitToKelvin(f: number): number {
  return celsiusToKelvin(fahrenheitToCelsius(f));
}

function kelvinToFahrenheit(k: number): number {
  return celsiusToFahrenheit(kelvinToCelsius(k));
}

function celsiusToRankine(c: number): number {
  return (c + 273.15) * 9/5;
}

function rankineToCelsius(r: number): number {
  return r * 5/9 - 273.15;
}

// ============================================
// SHOE SIZE CONVERSION FUNCTIONS
// Base unit: cm (centimeters - foot length / inner shoe length)
// ============================================

// Convert cm to EU size (adult)
function cmToEU(cm: number): number {
  // EU size = 1.5 × cm + 1.5 (using Paris point formula)
  // More accurate: EU = (cm × 3) / 2 + 1.5
  return (cm * 3 / 2) + 1.5;
}

// Convert EU size to cm
function euToCM(eu: number): number {
  // cm = (EU - 1.5) × 2/3
  return (eu - 1.5) * 2 / 3;
}

// Convert cm to EU Kids
function cmToEUKid(cm: number): number {
  // Similar formula but adjusted for kids
  return (cm * 3 / 2) + 1.5;
}

// Convert EU Kids to cm
function euKidToCM(eu: number): number {
  return (eu - 1.5) * 2 / 3;
}

// Convert cm to US Men
function cmToUSMen(cm: number): number {
  // US Men = (cm × 3) - 24
  return cm * 3 - 24;
}

// Convert US Men to cm
function usMenToCM(us: number): number {
  return (us + 24) / 3;
}

// Convert cm to US Women
function cmToUSWomen(cm: number): number {
  // US Women = (cm × 3) - 21
  return cm * 3 - 21;
}

// Convert US Women to cm
function usWomenToCM(us: number): number {
  return (us + 21) / 3;
}

// Convert cm to UK (adult)
function cmToUK(cm: number): number {
  // UK = (cm × 3) - 25
  return cm * 3 - 25;
}

// Convert UK to cm
function ukToCM(uk: number): number {
  return (uk + 25) / 3;
}

// Convert cm to UK Kids
function cmToUKKid(cm: number): number {
  return cm * 3 - 24;
}

// Convert UK Kids to cm
function ukKidToCM(uk: number): number {
  return (uk + 24) / 3;
}

// Convert cm to US Kids
function cmToUSKid(cm: number): number {
  // US Kids = (cm × 3) - 24.5 (between men's and women's)
  return cm * 3 - 24.5;
}

// Convert US Kids to cm
function usKidToCM(us: number): number {
  return (us + 24.5) / 3;
}

// Convert cm to Japan (JP is already in cm)
function cmToJP(cm: number): number {
  return cm;
}

// Convert JP to cm
function jpToCM(jp: number): number {
  return jp;
}

// Convert cm to China
function cmToCN(cm: number): number {
  // CN = EU + 0.5 (approximately)
  return cmToEU(cm) + 0.5;
}

// Convert CN to cm
function cnToCM(cn: number): number {
  return euToCM(cn - 0.5);
}

// Convert cm to Mexico
function cmToMX(cm: number): number {
  // MX = US Men + 1 (approximately)
  return cmToUSMen(cm) + 1;
}

// Convert MX to cm
function mxToCM(mx: number): number {
  return usMenToCM(mx - 1);
}

// Convert cm to Brazil
function cmToBR(cm: number): number {
  // BR = EU - 32 (approximately)
  return cmToEU(cm) - 32;
}

// Convert BR to cm
function brToCM(br: number): number {
  return euToCM(br + 32);
}

// Convert cm to Australia (uses UK scale)
function cmToAU(cm: number): number {
  return cmToUK(cm);
}

// Convert AU to cm
function auToCM(au: number): number {
  return ukToCM(au);
}

// Convert cm to Korea (mm)
function cmToKR(cm: number): number {
  return cm * 10;
}

// Convert Korea (mm) to cm
function krToCM(kr: number): number {
  return kr / 10;
}

// Shoe size conversion lookup
// All conversions go through cm as base unit
const shoeSizeConversions: Record<string, (value: number) => number> = {
  // From cm to others
  'cm-eu': cmToEU,
  'cm-eu_kid': cmToEUKid,
  'cm-us_m': cmToUSMen,
  'cm-us_w': cmToUSWomen,
  'cm-us_kid': cmToUSKid,
  'cm-uk': cmToUK,
  'cm-uk_kid': cmToUKKid,
  'cm-jp': cmToJP,
  'cm-cn': cmToCN,
  'cm-mx': cmToMX,
  'cm-br': cmToBR,
  'cm-au': cmToAU,
  'cm-kr': cmToKR,
  'cm-mm': (cm) => cm * 10,
  'cm-in': (cm) => cm / 2.54,

  // From EU to others
  'eu-cm': euToCM,
  'eu-eu_kid': (eu) => eu, // Same scale
  'eu-us_m': (eu) => cmToUSMen(euToCM(eu)),
  'eu-us_w': (eu) => cmToUSWomen(euToCM(eu)),
  'eu-uk': (eu) => cmToUK(euToCM(eu)),
  'eu-jp': euToCM,
  'eu-cn': (eu) => eu + 0.5,
  'eu-mx': (eu) => cmToMX(euToCM(eu)),
  'eu-br': (eu) => eu - 32,
  'eu-au': (eu) => cmToAU(euToCM(eu)),
  'eu-kr': (eu) => euToCM(eu) * 10,

  // From EU Kids to others
  'eu_kid-cm': euKidToCM,
  'eu_kid-us_kid': (eu) => cmToUSKid(euKidToCM(eu)),
  'eu_kid-uk_kid': (eu) => cmToUKKid(euKidToCM(eu)),

  // From US Men to others
  'us_m-cm': usMenToCM,
  'us_m-eu': (us) => cmToEU(usMenToCM(us)),
  'us_m-us_w': (us) => cmToUSWomen(usMenToCM(us)),
  'us_m-uk': (us) => cmToUK(usMenToCM(us)),
  'us_m-jp': usMenToCM,
  'us_m-mx': (us) => us + 1,
  'us_m-au': (us) => cmToUK(usMenToCM(us)),

  // From US Women to others
  'us_w-cm': usWomenToCM,
  'us_w-eu': (us) => cmToEU(usWomenToCM(us)),
  'us_w-us_m': (us) => cmToUSMen(usWomenToCM(us)),
  'us_w-uk': (us) => cmToUK(usWomenToCM(us)),
  'us_w-jp': usWomenToCM,
  'us_w-au': (us) => cmToUK(usWomenToCM(us)),

  // From UK to others
  'uk-cm': ukToCM,
  'uk-eu': (uk) => cmToEU(ukToCM(uk)),
  'uk-us_m': (uk) => cmToUSMen(ukToCM(uk)),
  'uk-us_w': (uk) => cmToUSWomen(ukToCM(uk)),
  'uk-jp': ukToCM,
  'uk-au': (uk) => uk, // Same scale

  // From UK Kids to others
  'uk_kid-cm': ukKidToCM,
  'uk_kid-eu_kid': (uk) => cmToEUKid(ukKidToCM(uk)),
  'uk_kid-us_kid': (uk) => cmToUSKid(ukKidToCM(uk)),

  // From US Kids to others
  'us_kid-cm': usKidToCM,
  'us_kid-eu_kid': (us) => cmToEUKid(usKidToCM(us)),
  'us_kid-uk_kid': (us) => cmToUKKid(usKidToCM(us)),

  // From JP to others
  'jp-cm': jpToCM,
  'jp-eu': (jp) => cmToEU(jpToCM(jp)),
  'jp-us_m': (jp) => cmToUSMen(jpToCM(jp)),
  'jp-us_w': (jp) => cmToUSWomen(jpToCM(jp)),
  'jp-uk': (jp) => cmToUK(jpToCM(jp)),

  // From CN to others
  'cn-cm': cnToCM,
  'cn-eu': (cn) => cn - 0.5,

  // From MX to others
  'mx-cm': mxToCM,
  'mx-us_m': (mx) => mx - 1,
  'mx-eu': (mx) => cmToEU(mxToCM(mx)),

  // From BR to others
  'br-cm': brToCM,
  'br-eu': (br) => br + 32,

  // From AU to others (same as UK)
  'au-cm': auToCM,
  'au-eu': (au) => cmToEU(auToCM(au)),
  'au-us_m': (au) => cmToUSMen(auToCM(au)),
  'au-us_w': (au) => cmToUSWomen(auToCM(au)),
  'au-uk': (au) => au,

  // From KR to others
  'kr-cm': krToCM,
  'kr-eu': (kr) => cmToEU(krToCM(kr)),

  // mm conversions
  'mm-cm': (mm) => mm / 10,
  'mm-eu': (mm) => cmToEU(mm / 10),
  'mm-kr': (mm) => mm,

  // inch conversions
  'in-cm': (inches) => inches * 2.54,
  'in-eu': (inches) => cmToEU(inches * 2.54),
};

// Temperature conversion lookup
const temperatureConversions: Record<string, (value: number) => number> = {
  'c-f': celsiusToFahrenheit,
  'f-c': fahrenheitToCelsius,
  'c-k': celsiusToKelvin,
  'k-c': kelvinToCelsius,
  'f-k': fahrenheitToKelvin,
  'k-f': kelvinToFahrenheit,
  'c-ra': celsiusToRankine,
  'ra-c': rankineToCelsius,
  'f-ra': (f) => f + 459.67,
  'ra-f': (r) => r - 459.67,
  'k-ra': (k) => k * 9/5,
  'ra-k': (r) => r * 5/9,
};

// Convert currency using exchange rates
export function convertCurrency(
  value: number,
  fromCurrency: string,
  toCurrency: string,
  rates: ExchangeRates
): number | null {
  if (!rates || !rates.rates) return null;
  
  // Normalize currency codes to uppercase
  const from = fromCurrency.toUpperCase();
  const to = toCurrency.toUpperCase();
  
  // Same currency
  if (from === to) return value;
  
  // Get rates (EUR base = 1)
  // The API returns rates like { USD: 1.08, GBP: 0.86 } where EUR is base
  // So EUR = 1 implicitly
  const fromRate = from === 'EUR' ? 1 : rates.rates[from];
  const toRate = to === 'EUR' ? 1 : rates.rates[to];
  
  if (fromRate === undefined || toRate === undefined) {
    console.warn(`Missing rate for ${from} or ${to}`);
    return null;
  }
  
  // Convert via EUR (base currency)
  // value / fromRate gives value in EUR
  // then multiply by toRate gives value in target currency
  const valueInEUR = value / fromRate;
  const result = valueInEUR * toRate;
  
  return result;
}

// Convert value from one unit to another
export function convert(
  value: number,
  fromUnitId: string,
  toUnitId: string,
  categorySlug: string
): number | null {
  if (value === null || isNaN(value)) return null;
  
  const category = categories.find(cat => cat.slug === categorySlug);
  if (!category) return null;
  
  const fromUnit = category.units.find(u => u.id === fromUnitId);
  const toUnit = category.units.find(u => u.id === toUnitId);
  
  if (!fromUnit || !toUnit) return null;
  
  // Same unit - return same value
  if (fromUnitId === toUnitId) return value;
  
  // Special handling for temperature
  if (categorySlug === 'temperatur') {
    const key = `${fromUnitId}-${toUnitId}`;
    const conversionFn = temperatureConversions[key];
    if (conversionFn) {
      return conversionFn(value);
    }
    return null;
  }
  
  // Special handling for shoe size
  if (categorySlug === 'schuhgroesse') {
    // Same unit
    if (fromUnitId === toUnitId) return value;
    
    const key = `${fromUnitId}-${toUnitId}`;
    const conversionFn = shoeSizeConversions[key];
    if (conversionFn) {
      return conversionFn(value);
    }
    
    // If direct conversion not found, try via cm (base unit)
    const toCmKey = `${fromUnitId}-cm`;
    const fromCmKey = `cm-${toUnitId}`;
    const toCmFn = shoeSizeConversions[toCmKey];
    const fromCmFn = shoeSizeConversions[fromCmKey];
    
    if (toCmFn && fromCmFn) {
      const cmValue = toCmFn(value);
      return fromCmFn(cmValue);
    }
    
    return null;
  }
  
  // Currency is handled separately (async)
  if (categorySlug === 'waehrung') {
    // Try with cached rates first
    const rates = getCachedRates();
    if (rates) {
      return convertCurrency(value, fromUnitId, toUnitId, rates);
    }
    return null;
  }
  
  // Linear conversion for all other categories
  // Convert to base unit, then to target unit
  // Handle inverse factor for units like l/100km (fuel consumption) or period (frequency)
  
  // For fuel consumption: some units are inverse (higher value = worse efficiency)
  // e.g., l/100km is inverse, km/l is direct
  if (categorySlug === 'verbrauch') {
    // Both units have same direction
    if (!!fromUnit.inverseFactor === !!toUnit.inverseFactor) {
      const valueInBaseUnit = fromUnit.inverseFactor 
        ? fromUnit.factor / value  // Convert inverse to base (km/l)
        : value * fromUnit.factor; // Convert direct to base
      const result = toUnit.inverseFactor
        ? toUnit.factor / valueInBaseUnit  // Convert base to inverse
        : valueInBaseUnit / toUnit.factor; // Convert base to direct
      return result;
    }
    // One is inverse, one is direct
    // Convert from inverse (like l/100km) to base (km/l)
    if (fromUnit.inverseFactor && !toUnit.inverseFactor) {
      const valueInBase = fromUnit.factor / value;
      const result = valueInBase / toUnit.factor;
      return result;
    }
    // Convert from direct to inverse
    if (!fromUnit.inverseFactor && toUnit.inverseFactor) {
      const valueInBase = value * fromUnit.factor;
      const result = toUnit.factor / valueInBase;
      return result;
    }
  }
  
  // For frequency: period is inverse of frequency (T = 1/f)
  if (categorySlug === 'frequenz') {
    // Both units have same direction
    if (!!fromUnit.inverseFactor === !!toUnit.inverseFactor) {
      const valueInBaseUnit = fromUnit.inverseFactor 
        ? fromUnit.factor / value  // Convert period to Hz
        : value * fromUnit.factor; // Convert frequency to Hz
      const result = toUnit.inverseFactor
        ? toUnit.factor / valueInBaseUnit  // Convert Hz to period
        : valueInBaseUnit / toUnit.factor; // Convert Hz to frequency
      return result;
    }
    // Convert from period to frequency
    if (fromUnit.inverseFactor && !toUnit.inverseFactor) {
      const valueInHz = fromUnit.factor / value;
      const result = valueInHz / toUnit.factor;
      return result;
    }
    // Convert from frequency to period
    if (!fromUnit.inverseFactor && toUnit.inverseFactor) {
      const valueInHz = value * fromUnit.factor;
      const result = toUnit.factor / valueInHz;
      return result;
    }
  }
  
  // Standard linear conversion
  const valueInBaseUnit = value * fromUnit.factor;
  const result = valueInBaseUnit / toUnit.factor;
  
  return result;
}

// Async convert for currency
export async function convertAsync(
  value: number,
  fromUnitId: string,
  toUnitId: string,
  categorySlug: string
): Promise<number | null> {
  if (categorySlug === 'waehrung') {
    let rates = getCachedRates();
    if (!rates) {
      rates = await fetchExchangeRates();
    }
    if (!rates) return null;
    return convertCurrency(value, fromUnitId, toUnitId, rates);
  }
  
  // For non-currency, use sync conversion
  return convert(value, fromUnitId, toUnitId, categorySlug);
}

// Get conversion formula as string
export function getFormula(
  fromUnit: Unit,
  toUnit: Unit,
  categorySlug: string,
  rate?: number | null
): string {
  if (categorySlug === 'temperatur') {
    const formulas: Record<string, string> = {
      'c-f': '°F = (°C × 9/5) + 32',
      'f-c': '°C = (°F - 32) × 5/9',
      'c-k': 'K = °C + 273,15',
      'k-c': '°C = K - 273,15',
      'f-k': 'K = (°F - 32) × 5/9 + 273,15',
      'k-f': '°F = (K - 273,15) × 9/5 + 32',
      'c-ra': '°Ra = (°C + 273,15) × 9/5',
      'ra-c': '°C = °Ra × 5/9 - 273,15',
      'f-ra': '°Ra = °F + 459,67',
      'ra-f': '°F = °Ra - 459,67',
      'k-ra': '°Ra = K × 9/5',
      'ra-k': 'K = °Ra × 5/9',
    };
    const key = `${fromUnit.id}-${toUnit.id}`;
    return formulas[key] || `${fromUnit.symbol} → ${toUnit.symbol}`;
  }
  
  // Shoe size formulas
  if (categorySlug === 'schuhgroesse') {
    const formulas: Record<string, string> = {
      // cm to others
      'cm-eu': 'EU = (cm × 1,5) + 1,5',
      'eu-cm': 'cm = (EU - 1,5) × 2/3',
      'cm-us_m': 'US (Herren) = cm × 3 - 24',
      'us_m-cm': 'cm = (US Herren + 24) / 3',
      'cm-us_w': 'US (Damen) = cm × 3 - 21',
      'us_w-cm': 'cm = (US Damen + 21) / 3',
      'cm-uk': 'UK = cm × 3 - 25',
      'uk-cm': 'cm = (UK + 25) / 3',
      'eu-us_m': 'US (Herren) ≈ (EU × 2/3) - 25',
      'us_m-eu': 'EU ≈ (US Herren + 25) × 1,5',
      'eu-us_w': 'US (Damen) ≈ (EU × 2/3) - 22',
      'us_w-eu': 'EU ≈ (US Damen + 22) × 1,5',
      'eu-uk': 'UK ≈ (EU - 1,5) × 2/3 - 25',
      'uk-eu': 'EU ≈ (UK + 25) × 1,5 + 1,5',
      'us_m-us_w': 'US Damen = US Herren + 1,5',
      'us_w-us_m': 'US Herren = US Damen - 1,5',
      'uk-us_m': 'US Herren = UK + 1',
      'us_m-uk': 'UK = US Herren - 1',
      'cm-jp': 'JP = cm',
      'jp-cm': 'cm = JP',
      'cm-mm': 'mm = cm × 10',
      'mm-cm': 'cm = mm / 10',
      'cm-in': 'in = cm / 2,54',
      'in-cm': 'cm = in × 2,54',
    };
    const key = `${fromUnit.id}-${toUnit.id}`;
    return formulas[key] || `${fromUnit.symbol} → ${toUnit.symbol}`;
  }
  
  // Currency formula - show live rate if available
  if (categorySlug === 'waehrung') {
    if (rate !== undefined && rate !== null) {
      const formattedRate = formatOutput(rate, 6, true);  // true = isCurrency
      return `1 ${fromUnit.symbol} = ${formattedRate} ${toUnit.symbol}`;
    }
    // Rates not loaded yet
    return `${fromUnit.symbol} → ${toUnit.symbol}`;
  }
  
  // Linear conversion formula
  if (fromUnit.factor === toUnit.factor) {
    return `1 ${fromUnit.symbol} = 1 ${toUnit.symbol}`;
  }
  
  const factor = fromUnit.factor / toUnit.factor;
  const formattedFactor = formatOutput(factor, 6);
  
  return `1 ${fromUnit.symbol} = ${formattedFactor} ${toUnit.symbol}`;
}

// Generate conversion table
export function generateConversionTable(
  fromUnit: Unit,
  toUnit: Unit,
  categorySlug: string,
  rows: number = 10
): Array<{ from: number; to: string }> {
  const table: Array<{ from: number; to: string }> = [];
  
  // Generate meaningful values based on category and unit scale
  let values: number[];
  
  if (categorySlug === 'schuhgroesse') {
    // Shoe sizes need different ranges
    if (fromUnit.id === 'cm' || fromUnit.id === 'mm' || fromUnit.id === 'in') {
      // Foot length in cm - typical range 20-30 cm
      values = [20, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    } else if (fromUnit.id === 'eu' || fromUnit.id === 'eu_kid') {
      // EU sizes
      values = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
    } else if (fromUnit.id === 'us_m' || fromUnit.id === 'us_w') {
      // US sizes
      values = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    } else if (fromUnit.id === 'uk' || fromUnit.id === 'uk_kid') {
      // UK sizes
      values = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    } else if (fromUnit.id === 'jp') {
      // Japan sizes (cm)
      values = [22, 23, 24, 25, 26, 27, 28, 29, 30];
    } else if (fromUnit.id === 'kr') {
      // Korea (mm)
      values = [220, 230, 240, 250, 260, 270, 280, 290, 300];
    } else {
      values = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    }
  } else {
    // Default values for other categories
    values = [0.1, 0.5, 1, 2, 5, 10, 20, 50, 100, 500, 1000];
  }
  
  const selectedValues = values.slice(0, rows);
  
  for (const fromValue of selectedValues) {
    const result = convert(fromValue, fromUnit.id, toUnit.id, categorySlug);
    if (result !== null) {
      // For shoe sizes, use less decimal places
      const precision = categorySlug === 'schuhgroesse' ? 1 : 6;
      table.push({
        from: fromValue,
        to: formatOutput(result, precision),
      });
    }
  }
  
  return table;
}

// Find category and units from unit IDs
export function findCategoryAndUnits(
  fromUnitId: string,
  toUnitId: string
): { category: Category; fromUnit: Unit; toUnit: Unit } | null {
  for (const category of categories) {
    const fromUnit = category.units.find(u => u.id === fromUnitId);
    const toUnit = category.units.find(u => u.id === toUnitId);
    
    if (fromUnit && toUnit) {
      return { category, fromUnit, toUnit };
    }
  }
  return null;
}

// Calculate reverse conversion
export function getReversePair(fromUnitId: string, toUnitId: string, categorySlug: string) {
  return {
    fromUnit: toUnitId,
    toUnit: fromUnitId,
    categorySlug,
  };
}

// Check if a pair exists in category
export function isValidPair(
  fromUnitId: string,
  toUnitId: string,
  categorySlug: string
): boolean {
  const category = categories.find(cat => cat.slug === categorySlug);
  if (!category) return false;
  
  const fromUnit = category.units.find(u => u.id === fromUnitId);
  const toUnit = category.units.find(u => u.id === toUnitId);
  
  return !!(fromUnit && toUnit);
}
