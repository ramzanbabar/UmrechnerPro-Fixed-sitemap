// Categories and Units Data for UmrechnerPro.de
// All categories have comprehensive unit lists for maximum long-tail coverage
// Titles are optimized for search intent

export interface Unit {
  id: string;
  name: string;
  symbol: string;
  nameEn: string;
  factor: number; // Conversion factor to base unit
  isBase?: boolean;
  inverseFactor?: boolean; // For units like l/100km where higher value means lower consumption
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  title: string; // SEO optimized title
  description: string;
  h1: string; // H1 heading for the page
  icon: string;
  baseUnit: string;
  units: Unit[];
  content: {
    intro: string;
    usage: string;
    examples: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

// LÄNGE (Length) - 20+ units
export const lengthUnits: Unit[] = [
  { id: 'mm', name: 'Millimeter', symbol: 'mm', nameEn: 'millimeter', factor: 0.001 },
  { id: 'cm', name: 'Zentimeter', symbol: 'cm', nameEn: 'centimeter', factor: 0.01 },
  { id: 'dm', name: 'Dezimeter', symbol: 'dm', nameEn: 'decimeter', factor: 0.1 },
  { id: 'm', name: 'Meter', symbol: 'm', nameEn: 'meter', factor: 1, isBase: true },
  { id: 'dam', name: 'Dekameter', symbol: 'dam', nameEn: 'dekameter', factor: 10 },
  { id: 'hm', name: 'Hektometer', symbol: 'hm', nameEn: 'hectometer', factor: 100 },
  { id: 'km', name: 'Kilometer', symbol: 'km', nameEn: 'kilometer', factor: 1000 },
  { id: 'in', name: 'Zoll', symbol: 'in', nameEn: 'inch', factor: 0.0254 },
  { id: 'ft', name: 'Fuß', symbol: 'ft', nameEn: 'foot', factor: 0.3048 },
  { id: 'yd', name: 'Yard', symbol: 'yd', nameEn: 'yard', factor: 0.9144 },
  { id: 'mi', name: 'Meile', symbol: 'mi', nameEn: 'mile', factor: 1609.344 },
  { id: 'nmi', name: 'Seemeile', symbol: 'nmi', nameEn: 'nautical mile', factor: 1852 },
  { id: 'mil', name: 'Mil', symbol: 'mil', nameEn: 'mil', factor: 0.0000254 },
  { id: 'micron', name: 'Mikrometer', symbol: 'µm', nameEn: 'micrometer', factor: 0.000001 },
  { id: 'nm', name: 'Nanometer', symbol: 'nm', nameEn: 'nanometer', factor: 0.000000001 },
  { id: 'angstrom', name: 'Ångström', symbol: 'Å', nameEn: 'angstrom', factor: 0.0000000001 },
  { id: 'ly', name: 'Lichtjahr', symbol: 'lj', nameEn: 'light year', factor: 9460730472580000 },
  { id: 'au', name: 'Astronomische Einheit', symbol: 'AE', nameEn: 'astronomical unit', factor: 149597870700 },
  { id: 'pc', name: 'Parsec', symbol: 'pc', nameEn: 'parsec', factor: 30856775814913600 },
  { id: 'ch', name: 'Chain', symbol: 'ch', nameEn: 'chain', factor: 20.1168 },
  { id: 'fur', name: 'Furlong', symbol: 'fur', nameEn: 'furlong', factor: 201.168 },
  { id: 'th', name: 'Thou', symbol: 'th', nameEn: 'thou', factor: 0.0000254 },
];

// GEWICHT (Weight/Mass) - 16+ units
export const weightUnits: Unit[] = [
  { id: 'mg', name: 'Milligramm', symbol: 'mg', nameEn: 'milligram', factor: 0.000001 },
  { id: 'cg', name: 'Dezigramm', symbol: 'cg', nameEn: 'centigram', factor: 0.00001 },
  { id: 'dg', name: 'Dezigramm', symbol: 'dg', nameEn: 'decigram', factor: 0.0001 },
  { id: 'g', name: 'Gramm', symbol: 'g', nameEn: 'gram', factor: 0.001 },
  { id: 'dag', name: 'Dekagramm', symbol: 'dag', nameEn: 'dekagram', factor: 0.01 },
  { id: 'hg', name: 'Hektogramm', symbol: 'hg', nameEn: 'hectogram', factor: 0.1 },
  { id: 'kg', name: 'Kilogramm', symbol: 'kg', nameEn: 'kilogram', factor: 1, isBase: true },
  { id: 't', name: 'Tonne', symbol: 't', nameEn: 'metric ton', factor: 1000 },
  { id: 'oz', name: 'Unze', symbol: 'oz', nameEn: 'ounce', factor: 0.028349523125 },
  { id: 'lb', name: 'Pfund', symbol: 'lb', nameEn: 'pound', factor: 0.45359237 },
  { id: 'st', name: 'Stone', symbol: 'st', nameEn: 'stone', factor: 6.35029318 },
  { id: 'cwt', name: 'Zentner (US)', symbol: 'cwt', nameEn: 'hundredweight', factor: 45.359237 },
  { id: 'ton_us', name: 'Short Ton', symbol: 'sh tn', nameEn: 'short ton', factor: 907.18474 },
  { id: 'ton_uk', name: 'Long Ton', symbol: 'long tn', nameEn: 'long ton', factor: 1016.0469088 },
  { id: 'carat', name: 'Karat', symbol: 'kt', nameEn: 'carat', factor: 0.0002 },
  { id: 'grain', name: 'Gran', symbol: 'gr', nameEn: 'grain', factor: 0.00006479891 },
  { id: 'dr', name: 'Dram', symbol: 'dr', nameEn: 'dram', factor: 0.0017718451953125 },
  { id: 'q', name: 'Doppelzentner', symbol: 'dz', nameEn: 'quintal', factor: 100 },
];

// TEMPERATUR (Temperature) - Special handling, no linear factor
export const temperatureUnits: Unit[] = [
  { id: 'c', name: 'Celsius', symbol: '°C', nameEn: 'celsius', factor: 0, isBase: true },
  { id: 'f', name: 'Fahrenheit', symbol: '°F', nameEn: 'fahrenheit', factor: 0 },
  { id: 'k', name: 'Kelvin', symbol: 'K', nameEn: 'kelvin', factor: 0 },
  { id: 'ra', name: 'Rankine', symbol: '°Ra', nameEn: 'rankine', factor: 0 },
];

// FLÄCHE (Area) - 12+ units
export const areaUnits: Unit[] = [
  { id: 'mm2', name: 'Quadratmillimeter', symbol: 'mm²', nameEn: 'square millimeter', factor: 0.000001 },
  { id: 'cm2', name: 'Quadratzentimeter', symbol: 'cm²', nameEn: 'square centimeter', factor: 0.0001 },
  { id: 'dm2', name: 'Quadratdezimeter', symbol: 'dm²', nameEn: 'square decimeter', factor: 0.01 },
  { id: 'm2', name: 'Quadratmeter', symbol: 'm²', nameEn: 'square meter', factor: 1, isBase: true },
  { id: 'a', name: 'Ar', symbol: 'a', nameEn: 'are', factor: 100 },
  { id: 'ha', name: 'Hektar', symbol: 'ha', nameEn: 'hectare', factor: 10000 },
  { id: 'km2', name: 'Quadratkilometer', symbol: 'km²', nameEn: 'square kilometer', factor: 1000000 },
  { id: 'in2', name: 'Quadratzoll', symbol: 'in²', nameEn: 'square inch', factor: 0.00064516 },
  { id: 'ft2', name: 'Quadratfuß', symbol: 'ft²', nameEn: 'square foot', factor: 0.09290304 },
  { id: 'yd2', name: 'Quadratyard', symbol: 'yd²', nameEn: 'square yard', factor: 0.83612736 },
  { id: 'ac', name: 'Acre', symbol: 'ac', nameEn: 'acre', factor: 4046.8564224 },
  { id: 'mi2', name: 'Quadratmeile', symbol: 'mi²', nameEn: 'square mile', factor: 2589988.110336 },
  { id: 'barn', name: 'Barn', symbol: 'b', nameEn: 'barn', factor: 1e-28 },
  { id: 'ro', name: 'Rood', symbol: 'ro', nameEn: 'rood', factor: 1011.7141056 },
];

// VOLUMEN (Volume) - 16+ units
export const volumeUnits: Unit[] = [
  { id: 'mm3', name: 'Kubikmillimeter', symbol: 'mm³', nameEn: 'cubic millimeter', factor: 0.000000001 },
  { id: 'cm3', name: 'Kubikzentimeter', symbol: 'cm³', nameEn: 'cubic centimeter', factor: 0.000001 },
  { id: 'ml', name: 'Milliliter', symbol: 'ml', nameEn: 'milliliter', factor: 0.000001 },
  { id: 'cl', name: 'Zentiliter', symbol: 'cl', nameEn: 'centiliter', factor: 0.00001 },
  { id: 'dl', name: 'Deziliter', symbol: 'dl', nameEn: 'deciliter', factor: 0.0001 },
  { id: 'l', name: 'Liter', symbol: 'l', nameEn: 'liter', factor: 0.001 },
  { id: 'dm3', name: 'Kubikdezimeter', symbol: 'dm³', nameEn: 'cubic decimeter', factor: 0.001 },
  { id: 'm3', name: 'Kubikmeter', symbol: 'm³', nameEn: 'cubic meter', factor: 1, isBase: true },
  { id: 'hl', name: 'Hektoliter', symbol: 'hl', nameEn: 'hectoliter', factor: 0.1 },
  { id: 'in3', name: 'Kubikzoll', symbol: 'in³', nameEn: 'cubic inch', factor: 0.000016387064 },
  { id: 'ft3', name: 'Kubikfuß', symbol: 'ft³', nameEn: 'cubic foot', factor: 0.028316846592 },
  { id: 'yd3', name: 'Kubikyard', symbol: 'yd³', nameEn: 'cubic yard', factor: 0.764554857984 },
  { id: 'gal_us', name: 'Gallone (US)', symbol: 'gal (US)', nameEn: 'US gallon', factor: 0.003785411784 },
  { id: 'gal_uk', name: 'Gallone (UK)', symbol: 'gal (UK)', nameEn: 'UK gallon', factor: 0.00454609 },
  { id: 'qt_us', name: 'Quart (US)', symbol: 'qt (US)', nameEn: 'US quart', factor: 0.000946352946 },
  { id: 'pt_us', name: 'Pinte (US)', symbol: 'pt (US)', nameEn: 'US pint', factor: 0.000473176473 },
  { id: 'pt_uk', name: 'Pinte (UK)', symbol: 'pt (UK)', nameEn: 'UK pint', factor: 0.00056826125 },
  { id: 'fl_oz_us', name: 'Flüssigunze (US)', symbol: 'fl oz (US)', nameEn: 'US fluid ounce', factor: 0.0000295735295625 },
  { id: 'fl_oz_uk', name: 'Flüssigunze (UK)', symbol: 'fl oz (UK)', nameEn: 'UK fluid ounce', factor: 0.0000284130625 },
  { id: 'bbl', name: 'Barrel', symbol: 'bbl', nameEn: 'barrel', factor: 0.158987294928 },
];

// GESCHWINDIGKEIT (Speed) - 12+ units
export const speedUnits: Unit[] = [
  { id: 'mps', name: 'Meter pro Sekunde', symbol: 'm/s', nameEn: 'meter per second', factor: 1, isBase: true },
  { id: 'kmh', name: 'Kilometer pro Stunde', symbol: 'km/h', nameEn: 'kilometer per hour', factor: 0.277777778 },
  { id: 'mph', name: 'Meilen pro Stunde', symbol: 'mph', nameEn: 'mile per hour', factor: 0.44704 },
  { id: 'kn', name: 'Knoten', symbol: 'kn', nameEn: 'knot', factor: 0.514444444 },
  { id: 'fps', name: 'Fuß pro Sekunde', symbol: 'ft/s', nameEn: 'foot per second', factor: 0.3048 },
  { id: 'fpm', name: 'Fuß pro Minute', symbol: 'ft/min', nameEn: 'foot per minute', factor: 0.00508 },
  { id: 'ips', name: 'Zoll pro Sekunde', symbol: 'in/s', nameEn: 'inch per second', factor: 0.0254 },
  { id: 'mach', name: 'Mach', symbol: 'Ma', nameEn: 'mach', factor: 340.29 },
  { id: 'c', name: 'Lichtgeschwindigkeit', symbol: 'c', nameEn: 'speed of light', factor: 299792458 },
  { id: 'cms', name: 'Zentimeter pro Sekunde', symbol: 'cm/s', nameEn: 'centimeter per second', factor: 0.01 },
  { id: 'kms', name: 'Kilometer pro Sekunde', symbol: 'km/s', nameEn: 'kilometer per second', factor: 1000 },
  { id: 'mpm', name: 'Meilen pro Minute', symbol: 'mi/min', nameEn: 'mile per minute', factor: 26.8224 },
];

// ZEIT (Time) - 14+ units
export const timeUnits: Unit[] = [
  { id: 'ns', name: 'Nanosekunde', symbol: 'ns', nameEn: 'nanosecond', factor: 0.000000001 },
  { id: 'mus', name: 'Mikrosekunde', symbol: 'µs', nameEn: 'microsecond', factor: 0.000001 },
  { id: 'ms', name: 'Millisekunde', symbol: 'ms', nameEn: 'millisecond', factor: 0.001 },
  { id: 's', name: 'Sekunde', symbol: 's', nameEn: 'second', factor: 1, isBase: true },
  { id: 'min', name: 'Minute', symbol: 'min', nameEn: 'minute', factor: 60 },
  { id: 'h', name: 'Stunde', symbol: 'h', nameEn: 'hour', factor: 3600 },
  { id: 'd', name: 'Tag', symbol: 'd', nameEn: 'day', factor: 86400 },
  { id: 'wk', name: 'Woche', symbol: 'Wo', nameEn: 'week', factor: 604800 },
  { id: 'mo', name: 'Monat', symbol: 'Mo', nameEn: 'month', factor: 2629746 },
  { id: 'yr', name: 'Jahr', symbol: 'J', nameEn: 'year', factor: 31556952 },
  { id: 'dec', name: 'Jahrzehnt', symbol: 'Jz', nameEn: 'decade', factor: 315569520 },
  { id: 'cent', name: 'Jahrhundert', symbol: 'Jh', nameEn: 'century', factor: 3155695200 },
  { id: 'mill', name: 'Jahrtausend', symbol: 'Jt', nameEn: 'millennium', factor: 31556952000 },
  { id: 'fortnight', name: 'Vierzehntage', symbol: '14d', nameEn: 'fortnight', factor: 1209600 },
];

// DRUCK (Pressure) - 10+ units
export const pressureUnits: Unit[] = [
  { id: 'pa', name: 'Pascal', symbol: 'Pa', nameEn: 'pascal', factor: 1, isBase: true },
  { id: 'kpa', name: 'Kilopascal', symbol: 'kPa', nameEn: 'kilopascal', factor: 1000 },
  { id: 'mbar', name: 'Millibar', symbol: 'mbar', nameEn: 'millibar', factor: 100 },
  { id: 'bar', name: 'Bar', symbol: 'bar', nameEn: 'bar', factor: 100000 },
  { id: 'psi', name: 'Pfund pro Quadratzoll', symbol: 'psi', nameEn: 'psi', factor: 6894.757293168 },
  { id: 'atm', name: 'Atmosphäre', symbol: 'atm', nameEn: 'atmosphere', factor: 101325 },
  { id: 'mmhg', name: 'Millimeter Quecksilbersäule', symbol: 'mmHg', nameEn: 'mmHg', factor: 133.322387415 },
  { id: 'inhg', name: 'Zoll Quecksilbersäule', symbol: 'inHg', nameEn: 'inHg', factor: 3386.389 },
  { id: 'torr', name: 'Torr', symbol: 'Torr', nameEn: 'torr', factor: 133.322368421 },
  { id: 'kg_cm2', name: 'Kilogramm pro Quadratzentimeter', symbol: 'kg/cm²', nameEn: 'kg/cm²', factor: 98066.5 },
  { id: 'hpa', name: 'Hektopascal', symbol: 'hPa', nameEn: 'hectopascal', factor: 100 },
  { id: 'mpa', name: 'Megapascal', symbol: 'MPa', nameEn: 'megapascal', factor: 1000000 },
];

// ENERGIE (Energy) - 12+ units
export const energyUnits: Unit[] = [
  { id: 'j', name: 'Joule', symbol: 'J', nameEn: 'joule', factor: 1, isBase: true },
  { id: 'kj', name: 'Kilojoule', symbol: 'kJ', nameEn: 'kilojoule', factor: 1000 },
  { id: 'mj', name: 'Megajoule', symbol: 'MJ', nameEn: 'megajoule', factor: 1000000 },
  { id: 'cal', name: 'Kalorie', symbol: 'cal', nameEn: 'calorie', factor: 4.184 },
  { id: 'kcal', name: 'Kilokalorie', symbol: 'kcal', nameEn: 'kilocalorie', factor: 4184 },
  { id: 'wh', name: 'Wattstunde', symbol: 'Wh', nameEn: 'watt hour', factor: 3600 },
  { id: 'kwh', name: 'Kilowattstunde', symbol: 'kWh', nameEn: 'kilowatt hour', factor: 3600000 },
  { id: 'mwh', name: 'Megawattstunde', symbol: 'MWh', nameEn: 'megawatt hour', factor: 3600000000 },
  { id: 'btu', name: 'British Thermal Unit', symbol: 'BTU', nameEn: 'btu', factor: 1055.05585262 },
  { id: 'ev', name: 'Elektronenvolt', symbol: 'eV', nameEn: 'electronvolt', factor: 1.602176634e-19 },
  { id: 'erg', name: 'Erg', symbol: 'erg', nameEn: 'erg', factor: 0.0000001 },
  { id: 'ft_lb', name: 'Fuß-Pfund', symbol: 'ft·lbf', nameEn: 'foot-pound', factor: 1.3558179483314004 },
  { id: 'therm', name: 'Therm', symbol: 'thm', nameEn: 'therm', factor: 105506000 },
  { id: 'tnt', name: 'TNT-Äquivalent (Tonne)', symbol: 't TNT', nameEn: 'ton of TNT', factor: 4184000000 },
];

// LEISTUNG (Power) - 10+ units
export const powerUnits: Unit[] = [
  { id: 'w', name: 'Watt', symbol: 'W', nameEn: 'watt', factor: 1, isBase: true },
  { id: 'kw', name: 'Kilowatt', symbol: 'kW', nameEn: 'kilowatt', factor: 1000 },
  { id: 'mw', name: 'Megawatt', symbol: 'MW', nameEn: 'megawatt', factor: 1000000 },
  { id: 'gw', name: 'Gigawatt', symbol: 'GW', nameEn: 'gigawatt', factor: 1000000000 },
  { id: 'ps', name: 'Pferdestärke', symbol: 'PS', nameEn: 'metric horsepower', factor: 735.49875 },
  { id: 'hp', name: 'Pferdestärke (imperial)', symbol: 'hp', nameEn: 'imperial horsepower', factor: 745.699872 },
  { id: 'btu_h', name: 'BTU pro Stunde', symbol: 'BTU/h', nameEn: 'btu per hour', factor: 0.2930710702 },
  { id: 'ft_lb_s', name: 'Fuß-Pfund pro Sekunde', symbol: 'ft·lbf/s', nameEn: 'foot-pound per second', factor: 1.3558179483314004 },
  { id: 'kcal_h', name: 'Kilokalorie pro Stunde', symbol: 'kcal/h', nameEn: 'kilocalorie per hour', factor: 1.163 },
  { id: 'va', name: 'Voltampere', symbol: 'VA', nameEn: 'volt-ampere', factor: 1 },
  { id: 'mw2', name: 'Milliwatt', symbol: 'mW', nameEn: 'milliwatt', factor: 0.001 },
  { id: 'erg_s', name: 'Erg pro Sekunde', symbol: 'erg/s', nameEn: 'erg per second', factor: 0.0000001 },
];

// KOCHEN (Cooking) - Volume and Weight for recipes
// Base unit: ml (milliliter) for volume, g (gram) for weight
// Includes US, UK, and metric measurements
export const cookingUnits: Unit[] = [
  // Volume units (base: ml = 1)
  { id: 'ml', name: 'Milliliter', symbol: 'ml', nameEn: 'milliliter', factor: 1, isBase: true },
  { id: 'cl', name: 'Zentiliter', symbol: 'cl', nameEn: 'centiliter', factor: 10 },
  { id: 'dl', name: 'Deziliter', symbol: 'dl', nameEn: 'deciliter', factor: 100 },
  { id: 'l', name: 'Liter', symbol: 'l', nameEn: 'liter', factor: 1000 },
  { id: 'cup_us', name: 'Tasse (US)', symbol: 'cup (US)', nameEn: 'US cup', factor: 236.588 },
  { id: 'cup_met', name: 'Tasse (metrisch)', symbol: 'cup', nameEn: 'metric cup', factor: 250 },
  { id: 'tbsp_us', name: 'Esslöffel (US)', symbol: 'EL (US)', nameEn: 'US tablespoon', factor: 14.787 },
  { id: 'tbsp_met', name: 'Esslöffel (metrisch)', symbol: 'EL', nameEn: 'metric tablespoon', factor: 15 },
  { id: 'tbsp_uk', name: 'Esslöffel (UK)', symbol: 'EL (UK)', nameEn: 'UK tablespoon', factor: 17.758 },
  { id: 'tsp_us', name: 'Teelöffel (US)', symbol: 'TL (US)', nameEn: 'US teaspoon', factor: 4.929 },
  { id: 'tsp_met', name: 'Teelöffel (metrisch)', symbol: 'TL', nameEn: 'metric teaspoon', factor: 5 },
  { id: 'tsp_uk', name: 'Teelöffel (UK)', symbol: 'TL (UK)', nameEn: 'UK teaspoon', factor: 5.919 },
  { id: 'fl_oz_us', name: 'Flüssigunze (US)', symbol: 'fl oz (US)', nameEn: 'US fluid ounce', factor: 29.574 },
  { id: 'fl_oz_uk', name: 'Flüssigunze (UK)', symbol: 'fl oz (UK)', nameEn: 'UK fluid ounce', factor: 28.413 },
  { id: 'pt_us', name: 'Pinte (US)', symbol: 'pt (US)', nameEn: 'US pint', factor: 473.176 },
  { id: 'pt_uk', name: 'Pinte (UK)', symbol: 'pt (UK)', nameEn: 'UK pint', factor: 568.261 },
  { id: 'qt_us', name: 'Quart (US)', symbol: 'qt (US)', nameEn: 'US quart', factor: 946.353 },
  { id: 'gal_us', name: 'Gallone (US)', symbol: 'gal (US)', nameEn: 'US gallon', factor: 3785.412 },
  // Weight units (converted to ml-equivalent for unified system)
  // These are marked with factor 0 and handled specially
  { id: 'mg', name: 'Milligramm', symbol: 'mg', nameEn: 'milligram', factor: 0.001 },
  { id: 'g', name: 'Gramm', symbol: 'g', nameEn: 'gram', factor: 1 },
  { id: 'kg', name: 'Kilogramm', symbol: 'kg', nameEn: 'kilogram', factor: 1000 },
  { id: 'oz', name: 'Unze', symbol: 'oz', nameEn: 'ounce', factor: 28.3495 },
  { id: 'lb', name: 'Pfund', symbol: 'lb', nameEn: 'pound', factor: 453.592 },
  { id: 'lopf', name: 'Pfund (DE/AT)', symbol: 'Pfd', nameEn: 'German pound', factor: 500 },
];

// DATENVOLUMEN (Data Storage) - 15+ units
// Base unit: byte (B)
// Covers bits, bytes, and all binary prefixes (KiB, MiB, GiB, etc.)
export const dataStorageUnits: Unit[] = [
  { id: 'bit', name: 'Bit', symbol: 'bit', nameEn: 'bit', factor: 0.125 },
  { id: 'kbit', name: 'Kilobit', symbol: 'kbit', nameEn: 'kilobit', factor: 125 },
  { id: 'mbit', name: 'Megabit', symbol: 'Mbit', nameEn: 'megabit', factor: 125000 },
  { id: 'gbit', name: 'Gigabit', symbol: 'Gbit', nameEn: 'gigabit', factor: 125000000 },
  { id: 'tbit', name: 'Terabit', symbol: 'Tbit', nameEn: 'terabit', factor: 125000000000 },
  { id: 'B', name: 'Byte', symbol: 'B', nameEn: 'byte', factor: 1, isBase: true },
  { id: 'KB', name: 'Kilobyte', symbol: 'KB', nameEn: 'kilobyte', factor: 1000 },
  { id: 'MB', name: 'Megabyte', symbol: 'MB', nameEn: 'megabyte', factor: 1000000 },
  { id: 'GB', name: 'Gigabyte', symbol: 'GB', nameEn: 'gigabyte', factor: 1000000000 },
  { id: 'TB', name: 'Terabyte', symbol: 'TB', nameEn: 'terabyte', factor: 1000000000000 },
  { id: 'PB', name: 'Petabyte', symbol: 'PB', nameEn: 'petabyte', factor: 1000000000000000 },
  { id: 'EB', name: 'Exabyte', symbol: 'EB', nameEn: 'exabyte', factor: 1000000000000000000 },
  { id: 'KiB', name: 'Kibibyte', symbol: 'KiB', nameEn: 'kibibyte', factor: 1024 },
  { id: 'MiB', name: 'Mebibyte', symbol: 'MiB', nameEn: 'mebibyte', factor: 1048576 },
  { id: 'GiB', name: 'Gibibyte', symbol: 'GiB', nameEn: 'gibibyte', factor: 1073741824 },
  { id: 'TiB', name: 'Tebibyte', symbol: 'TiB', nameEn: 'tebibyte', factor: 1099511627776 },
  { id: 'PiB', name: 'Pebibyte', symbol: 'PiB', nameEn: 'pebibyte', factor: 1125899906842624 },
];

// VERBRAUCH (Fuel Consumption) - 8+ units
// Base unit: km/l (kilometers per liter)
// Covers both distance-per-volume and volume-per-distance formats
export const fuelConsumptionUnits: Unit[] = [
  { id: 'km_l', name: 'Kilometer pro Liter', symbol: 'km/l', nameEn: 'kilometers per liter', factor: 1, isBase: true },
  { id: 'l_100km', name: 'Liter pro 100 km', symbol: 'l/100km', nameEn: 'liters per 100km', factor: 100, inverseFactor: true },
  { id: 'mpg_us', name: 'Meilen pro Gallone (US)', symbol: 'mpg (US)', nameEn: 'US miles per gallon', factor: 0.425143707 },
  { id: 'mpg_uk', name: 'Meilen pro Gallone (UK)', symbol: 'mpg (UK)', nameEn: 'UK miles per gallon', factor: 0.354006 },
  { id: 'mi_l', name: 'Meilen pro Liter', symbol: 'mi/l', nameEn: 'miles per liter', factor: 0.621371 },
  { id: 'gal_100mi_us', name: 'Gallonen (US) pro 100 Meilen', symbol: 'gal/100mi (US)', nameEn: 'US gallons per 100 miles', factor: 42.5143707, inverseFactor: true },
  { id: 'gal_100mi_uk', name: 'Gallonen (UK) pro 100 Meilen', symbol: 'gal/100mi (UK)', nameEn: 'UK gallons per 100 miles', factor: 35.4006, inverseFactor: true },
  { id: 'km_gal_us', name: 'Kilometer pro Gallone (US)', symbol: 'km/gal (US)', nameEn: 'kilometers per US gallon', factor: 3.785411784 },
  { id: 'km_gal_uk', name: 'Kilometer pro Gallone (UK)', symbol: 'km/gal (UK)', nameEn: 'kilometers per UK gallon', factor: 4.54609 },
];

// FREQUENZ (Frequency) - 12+ units
// Base unit: hertz (Hz)
export const frequencyUnits: Unit[] = [
  { id: 'mHz', name: 'Millihertz', symbol: 'mHz', nameEn: 'millihertz', factor: 0.001 },
  { id: 'Hz', name: 'Hertz', symbol: 'Hz', nameEn: 'hertz', factor: 1, isBase: true },
  { id: 'kHz', name: 'Kilohertz', symbol: 'kHz', nameEn: 'kilohertz', factor: 1000 },
  { id: 'MHz', name: 'Megahertz', symbol: 'MHz', nameEn: 'megahertz', factor: 1000000 },
  { id: 'GHz', name: 'Gigahertz', symbol: 'GHz', nameEn: 'gigahertz', factor: 1000000000 },
  { id: 'THz', name: 'Terahertz', symbol: 'THz', nameEn: 'terahertz', factor: 1000000000000 },
  { id: 'rpm', name: 'Umdrehungen pro Minute', symbol: 'U/min', nameEn: 'revolutions per minute', factor: 0.016666667 },
  { id: 'rps', name: 'Umdrehungen pro Sekunde', symbol: 'U/s', nameEn: 'revolutions per second', factor: 1 },
  { id: 'rad_s', name: 'Radiant pro Sekunde', symbol: 'rad/s', nameEn: 'radians per second', factor: 0.159154943 },
  { id: 'deg_s', name: 'Grad pro Sekunde', symbol: '°/s', nameEn: 'degrees per second', factor: 0.002777778 },
  { id: 'period', name: 'Periodendauer (Sekunden)', symbol: 's', nameEn: 'period (seconds)', factor: 1, inverseFactor: true },
];

// SCHUHGRÖSSE (Shoe Size) - Special handling like temperature
// Base unit: cm (centimeters - actual foot length)
// Conversion formulas use offsets, not simple factors
export const shoeSizeUnits: Unit[] = [
  { id: 'cm', name: 'Zentimeter (Fußlänge)', symbol: 'cm', nameEn: 'centimeters', factor: 0, isBase: true },
  { id: 'mm', name: 'Millimeter (Fußlänge)', symbol: 'mm', nameEn: 'millimeters', factor: 0 },
  { id: 'in', name: 'Zoll (Fußlänge)', symbol: 'in', nameEn: 'inches', factor: 0 },
  { id: 'eu', name: 'EU (Europa)', symbol: 'EU', nameEn: 'EU', factor: 0 },
  { id: 'eu_kid', name: 'EU Kinder', symbol: 'EU Kids', nameEn: 'EU Kids', factor: 0 },
  { id: 'us_m', name: 'US Herren', symbol: 'US Men', nameEn: 'US Men', factor: 0 },
  { id: 'us_w', name: 'US Damen', symbol: 'US Women', nameEn: 'US Women', factor: 0 },
  { id: 'us_kid', name: 'US Kinder', symbol: 'US Kids', nameEn: 'US Kids', factor: 0 },
  { id: 'uk', name: 'UK', symbol: 'UK', nameEn: 'UK', factor: 0 },
  { id: 'uk_kid', name: 'UK Kinder', symbol: 'UK Kids', nameEn: 'UK Kids', factor: 0 },
  { id: 'jp', name: 'Japan (cm)', symbol: 'JP', nameEn: 'Japan', factor: 0 },
  { id: 'cn', name: 'China', symbol: 'CN', nameEn: 'China', factor: 0 },
  { id: 'mx', name: 'Mexiko', symbol: 'MX', nameEn: 'Mexico', factor: 0 },
  { id: 'br', name: 'Brasilien', symbol: 'BR', nameEn: 'Brazil', factor: 0 },
  { id: 'au', name: 'Australien', symbol: 'AU', nameEn: 'Australia', factor: 0 },
  { id: 'kr', name: 'Korea (mm)', symbol: 'KR', nameEn: 'Korea', factor: 0 },
];

// WINKEL (Angle) - Base unit: radian (rad)
// Used in mathematics, engineering, navigation, astronomy
export const angleUnits: Unit[] = [
  { id: 'rad', name: 'Radiant', symbol: 'rad', nameEn: 'radian', factor: 1, isBase: true },
  { id: 'deg', name: 'Grad', symbol: '°', nameEn: 'degree', factor: 0.017453292519943295 },
  { id: 'gon', name: 'Gon (Neugrad)', symbol: 'gon', nameEn: 'gon', factor: 0.015707963267948967 },
  { id: 'arcmin', name: 'Winkelminute', symbol: '′', nameEn: 'arcminute', factor: 0.0002908882086657216 },
  { id: 'arcsec', name: 'Winkelsekunde', symbol: '″', nameEn: 'arcsecond', factor: 0.00000484813681109536 },
  { id: 'turn', name: 'Umdrehung', symbol: 'tr', nameEn: 'turn', factor: 6.283185307179586 },
  { id: 'mrad', name: 'Milliradiant', symbol: 'mrad', nameEn: 'milliradian', factor: 0.001 },
  { id: 'μrad', name: 'Mikroradiant', symbol: 'μrad', nameEn: 'microradian', factor: 0.000001 },
  { id: 'grad', name: 'Zentesimalgrad', symbol: 'grad', nameEn: 'centesimal degree', factor: 0.015707963267948967 },
  { id: 'mil_nato', name: 'Mil (NATO)', symbol: 'mil', nameEn: 'NATO mil', factor: 0.0009817477042468103 },
  { id: 'brad', name: 'Binärwinkel', symbol: 'brad', nameEn: 'binary radian', factor: 0.02454369260617026 },
];

// PROZENT (Percentage) - Base unit: percent (%)
// Used for calculations, fractions, ratios, statistics
export const percentageUnits: Unit[] = [
  { id: 'percent', name: 'Prozent', symbol: '%', nameEn: 'percent', factor: 1, isBase: true },
  { id: 'permille', name: 'Promille', symbol: '‰', nameEn: 'per mille', factor: 0.1 },
  { id: 'basispoint', name: 'Basispunkt', symbol: 'bp', nameEn: 'basis point', factor: 0.01 },
  { id: 'fraction', name: 'Bruch (dezimal)', symbol: '', nameEn: 'fraction', factor: 100 },
  { id: 'ppm', name: 'Parts per Million', symbol: 'ppm', nameEn: 'parts per million', factor: 0.0001 },
  { id: 'ppb', name: 'Parts per Billion', symbol: 'ppb', nameEn: 'parts per billion', factor: 0.0000001 },
  { id: 'ppt', name: 'Parts per Trillion', symbol: 'ppt', nameEn: 'parts per trillion', factor: 0.0000000001 },
  { id: 'ratio', name: 'Verhältnis (1:x)', symbol: '1:', nameEn: 'ratio', factor: 0 },
];

// DICHTA (Density) - Base unit: kg/m³
// Used in physics, engineering, material science, cooking
export const densityUnits: Unit[] = [
  { id: 'kg_m3', name: 'Kilogramm pro Kubikmeter', symbol: 'kg/m³', nameEn: 'kilogram per cubic meter', factor: 1, isBase: true },
  { id: 'g_cm3', name: 'Gramm pro Kubikzentimeter', symbol: 'g/cm³', nameEn: 'gram per cubic centimeter', factor: 1000 },
  { id: 'g_ml', name: 'Gramm pro Milliliter', symbol: 'g/ml', nameEn: 'gram per milliliter', factor: 1000 },
  { id: 'g_l', name: 'Gramm pro Liter', symbol: 'g/l', nameEn: 'gram per liter', factor: 1 },
  { id: 'kg_l', name: 'Kilogramm pro Liter', symbol: 'kg/l', nameEn: 'kilogram per liter', factor: 1000 },
  { id: 'mg_ml', name: 'Milligramm pro Milliliter', symbol: 'mg/ml', nameEn: 'milligram per milliliter', factor: 1 },
  { id: 'lb_ft3', name: 'Pfund pro Kubikfuß', symbol: 'lb/ft³', nameEn: 'pound per cubic foot', factor: 16.018463374 },
  { id: 'lb_in3', name: 'Pfund pro Kubikzoll', symbol: 'lb/in³', nameEn: 'pound per cubic inch', factor: 27679.904710203 },
  { id: 'lb_gal_us', name: 'Pfund pro Gallone (US)', symbol: 'lb/gal (US)', nameEn: 'pound per US gallon', factor: 119.8264273169 },
  { id: 'lb_gal_uk', name: 'Pfund pro Gallone (UK)', symbol: 'lb/gal (UK)', nameEn: 'pound per UK gallon', factor: 99.776372663 },
  { id: 'oz_in3', name: 'Unze pro Kubikzoll', symbol: 'oz/in³', nameEn: 'ounce per cubic inch', factor: 1729.994044 },
  { id: 'slug_ft3', name: 'Slug pro Kubikfuß', symbol: 'slug/ft³', nameEn: 'slug per cubic foot', factor: 515.3788184 },
];

// KRAFT (Force) - Base unit: newton (N)
// Used in physics, engineering, mechanics
export const forceUnits: Unit[] = [
  { id: 'N', name: 'Newton', symbol: 'N', nameEn: 'newton', factor: 1, isBase: true },
  { id: 'kN', name: 'Kilonewton', symbol: 'kN', nameEn: 'kilonewton', factor: 1000 },
  { id: 'MN', name: 'Meganewton', symbol: 'MN', nameEn: 'meganewton', factor: 1000000 },
  { id: 'mN', name: 'Millinewton', symbol: 'mN', nameEn: 'millinewton', factor: 0.001 },
  { id: 'dyn', name: 'Dyn', symbol: 'dyn', nameEn: 'dyne', factor: 0.00001 },
  { id: 'kgf', name: 'Kilogramm-Kraft', symbol: 'kgf', nameEn: 'kilogram-force', factor: 9.80665 },
  { id: 'gf', name: 'Gramm-Kraft', symbol: 'gf', nameEn: 'gram-force', factor: 0.00980665 },
  { id: 'lbf', name: 'Pfund-Kraft', symbol: 'lbf', nameEn: 'pound-force', factor: 4.4482216152605 },
  { id: 'ozf', name: 'Unze-Kraft', symbol: 'ozf', nameEn: 'ounce-force', factor: 0.27801385139 },
  { id: 'pdl', name: 'Poundal', symbol: 'pdl', nameEn: 'poundal', factor: 0.138254954376 },
  { id: 'sn', name: 'Sthen', symbol: 'sn', nameEn: 'sthene', factor: 1000 },
  { id: 'kp', name: 'Kilopond', symbol: 'kp', nameEn: 'kilopond', factor: 9.80665 },
];

// DREHMOMENT (Torque) - Base unit: newton-meter (N·m)
// Used in automotive, mechanical engineering, tools
export const torqueUnits: Unit[] = [
  { id: 'Nm', name: 'Newtonmeter', symbol: 'N·m', nameEn: 'newton-meter', factor: 1, isBase: true },
  { id: 'kNm', name: 'Kilonewtonmeter', symbol: 'kN·m', nameEn: 'kilonewton-meter', factor: 1000 },
  { id: 'mNm', name: 'Millinewtonmeter', symbol: 'mN·m', nameEn: 'millinewton-meter', factor: 0.001 },
  { id: 'lbfft', name: 'Pfund-Kraft-Fuß', symbol: 'lb·ft', nameEn: 'pound-foot', factor: 1.3558179483314004 },
  { id: 'lbfin', name: 'Pfund-Kraft-Zoll', symbol: 'lb·in', nameEn: 'pound-inch', factor: 0.1129848290276167 },
  { id: 'ozfin', name: 'Unze-Kraft-Zoll', symbol: 'oz·in', nameEn: 'ounce-inch', factor: 0.0070615518224 },
  { id: 'kgfm', name: 'Kilogramm-Kraft-Meter', symbol: 'kgf·m', nameEn: 'kilogram-force meter', factor: 9.80665 },
  { id: 'kgfcm', name: 'Kilogramm-Kraft-Zentimeter', symbol: 'kgf·cm', nameEn: 'kilogram-force centimeter', factor: 0.0980665 },
  { id: 'gfm', name: 'Gramm-Kraft-Meter', symbol: 'gf·m', nameEn: 'gram-force meter', factor: 0.00980665 },
  { id: 'dyncm', name: 'Dyn-Zentimeter', symbol: 'dyn·cm', nameEn: 'dyne-centimeter', factor: 0.0000001 },
  { id: 'Nm_m', name: 'Newton pro Meter', symbol: 'N/m', nameEn: 'newton per meter', factor: 1 },
];

// WÄHRUNG (Currency) - 35+ currencies
// Rates are fetched live from European Central Bank (ECB)
// factor is placeholder (rates are dynamic)
export const currencyUnits: Unit[] = [
  { id: 'EUR', name: 'Euro', symbol: '€', nameEn: 'Euro', factor: 1, isBase: true },
  { id: 'USD', name: 'US-Dollar', symbol: '$', nameEn: 'US Dollar', factor: 0 },
  { id: 'GBP', name: 'Britisches Pfund', symbol: '£', nameEn: 'British Pound', factor: 0 },
  { id: 'CHF', name: 'Schweizer Franken', symbol: 'Fr', nameEn: 'Swiss Franc', factor: 0 },
  { id: 'JPY', name: 'Japanischer Yen', symbol: '¥', nameEn: 'Japanese Yen', factor: 0 },
  { id: 'CAD', name: 'Kanadischer Dollar', symbol: 'C$', nameEn: 'Canadian Dollar', factor: 0 },
  { id: 'AUD', name: 'Australischer Dollar', symbol: 'A$', nameEn: 'Australian Dollar', factor: 0 },
  { id: 'NZD', name: 'Neuseeland-Dollar', symbol: 'NZ$', nameEn: 'New Zealand Dollar', factor: 0 },
  { id: 'CNY', name: 'Chinesischer Yuan', symbol: '¥', nameEn: 'Chinese Yuan', factor: 0 },
  { id: 'INR', name: 'Indische Rupie', symbol: '₹', nameEn: 'Indian Rupee', factor: 0 },
  { id: 'KRW', name: 'Südkoreanischer Won', symbol: '₩', nameEn: 'South Korean Won', factor: 0 },
  { id: 'BRL', name: 'Brasilianischer Real', symbol: 'R$', nameEn: 'Brazilian Real', factor: 0 },
  { id: 'RUB', name: 'Russischer Rubel', symbol: '₽', nameEn: 'Russian Ruble', factor: 0 },
  { id: 'MXN', name: 'Mexikanischer Peso', symbol: 'Mex$', nameEn: 'Mexican Peso', factor: 0 },
  { id: 'SGD', name: 'Singapur-Dollar', symbol: 'S$', nameEn: 'Singapore Dollar', factor: 0 },
  { id: 'HKD', name: 'Hongkong-Dollar', symbol: 'HK$', nameEn: 'Hong Kong Dollar', factor: 0 },
  { id: 'NOK', name: 'Norwegische Krone', symbol: 'kr', nameEn: 'Norwegian Krone', factor: 0 },
  { id: 'SEK', name: 'Schwedische Krone', symbol: 'kr', nameEn: 'Swedish Krona', factor: 0 },
  { id: 'DKK', name: 'Dänische Krone', symbol: 'kr', nameEn: 'Danish Krone', factor: 0 },
  { id: 'PLN', name: 'Polnischer Zloty', symbol: 'zł', nameEn: 'Polish Zloty', factor: 0 },
  { id: 'CZK', name: 'Tschechische Krone', symbol: 'Kč', nameEn: 'Czech Koruna', factor: 0 },
  { id: 'HUF', name: 'Ungarischer Forint', symbol: 'Ft', nameEn: 'Hungarian Forint', factor: 0 },
  { id: 'RON', name: 'Rumänischer Leu', symbol: 'lei', nameEn: 'Romanian Leu', factor: 0 },
  { id: 'BGN', name: 'Bulgarischer Lew', symbol: 'лв', nameEn: 'Bulgarian Lev', factor: 0 },
  { id: 'TRY', name: 'Türkische Lira', symbol: '₺', nameEn: 'Turkish Lira', factor: 0 },
  { id: 'ZAR', name: 'Südafrikanischer Rand', symbol: 'R', nameEn: 'South African Rand', factor: 0 },
  { id: 'AED', name: 'VAE-Dirham', symbol: 'د.إ', nameEn: 'UAE Dirham', factor: 0 },
  { id: 'SAR', name: 'Saudi-Riyal', symbol: '﷼', nameEn: 'Saudi Riyal', factor: 0 },
  { id: 'ILS', name: 'Israelischer Schekel', symbol: '₪', nameEn: 'Israeli Shekel', factor: 0 },
  { id: 'THB', name: 'Thailändischer Baht', symbol: '฿', nameEn: 'Thai Baht', factor: 0 },
  { id: 'IDR', name: 'Indonesische Rupiah', symbol: 'Rp', nameEn: 'Indonesian Rupiah', factor: 0 },
  { id: 'MYR', name: 'Malaysischer Ringgit', symbol: 'RM', nameEn: 'Malaysian Ringgit', factor: 0 },
  { id: 'PHP', name: 'Philippinischer Peso', symbol: '₱', nameEn: 'Philippine Peso', factor: 0 },
  { id: 'VND', name: 'Vietnamesischer Dong', symbol: '₫', nameEn: 'Vietnamese Dong', factor: 0 },
  { id: 'EGP', name: 'Ägyptisches Pfund', symbol: 'E£', nameEn: 'Egyptian Pound', factor: 0 },
];

// All categories combined with SEO-optimized titles
export const categories: Category[] = [
  {
    id: 'laenge',
    name: 'Länge',
    slug: 'laenge',
    title: 'Längeneinheiten umrechnen: Meter, Zoll, cm, km - Kostenloser Umrechner',
    description: 'Längeneinheiten umrechnen: Meter, Kilometer, Zoll, Fuß, Meilen und mehr. Präzise Umrechnungen für Alltag, Wissenschaft und Technik.',
    h1: 'Längenumrechner: Meter, Zoll, cm, km umrechnen',
    icon: 'ruler',
    baseUnit: 'm',
    units: lengthUnits,
    content: {
      intro: 'Die Längenumrechnung ist eine der wichtigsten und am häufigsten verwendeten Umrechnungen im täglichen Leben, in der Wissenschaft und in der Technik. Ob Sie die Körpergröße von Zentimetern in Zoll umrechnen möchten, die Entfernung für Ihre Reise von Kilometern in Meilen berechnen müssen oder technische Zeichnungen mit verschiedenen Maßeinheiten arbeiten – unser Längenumrechner bietet Ihnen präzise und schnelle Ergebnisse für alle gängigen Längeneinheiten.',
      usage: 'Das metrische System mit Meter als Basiseinheit ist in Deutschland, Österreich und der Schweiz sowie in fast allen Ländern der Welt der Standard. In den USA und einigen anderen Ländern werden jedoch noch imperiale Einheiten wie Zoll, Fuß, Yard und Meilen verwendet. Besonders bei der Verarbeitung von US-amerikanischen Produkten, beim Lesen von angelsächsischer Literatur oder bei internationalen Projekte ist die Umrechnung zwischen diesen Systemen unerlässlich. Unser Umrechner unterstützt sowohl metrische Einheiten (Millimeter, Zentimeter, Meter, Kilometer) als auch imperiale Einheiten (Zoll, Fuß, Yard, Meilen) sowie nautische Maße wie Seemeilen.',
      examples: 'Typische Anwendungsbereiche sind: Umrechnung von Zoll in Zentimeter für Bildschirmdiagonalen, Kilometer in Meilen für Geschwindigkeitsangaben, Meter in Fuß für Bauhöhen, oder Millimeter in Mikrometer für präzise technische Anwendungen. Auch astronomische Einheiten wie Lichtjahre und Parsec werden unterstützt.'
    },
    faq: [
      { question: 'Wie rechne ich Zentimeter in Zoll um?', answer: 'Ein Zoll entspricht genau 2,54 Zentimetern. Um Zentimeter in Zoll umzurechnen, teilen Sie die Anzahl der Zentimeter durch 2,54. Beispiel: 10 cm ÷ 2,54 = 3,937 Zoll.' },
      { question: 'Wie viele Meter sind eine Meile?', answer: 'Eine Meile entspricht genau 1609,344 Metern oder etwa 1,609 Kilometern. Eine Meile besteht aus 1760 Yards oder 5280 Fuß.' },
      { question: 'Was ist der Unterschied zwischen Seemeile und Landmeile?', answer: 'Eine Seemeile (nautische Meile) entspricht 1852 Metern, während eine Landmeile (statute mile) 1609,344 Meter hat. Die Seemeile basiert auf einer Bogenminute des Erdumfangs und wird in der Schifffahrt und Luftfahrt verwendet.' },
      { question: 'Wie rechne ich Fuß in Meter um?', answer: 'Ein Fuß entspricht genau 0,3048 Metern. Multiplizieren Sie die Anzahl der Fuß mit 0,3048, um Meter zu erhalten. Beispiel: 10 Fuß × 0,3048 = 3,048 Meter.' },
      { question: 'Was ist ein Lichtjahr und wie lang ist es?', answer: 'Ein Lichtjahr ist die Strecke, die Licht in einem Jahr im Vakuum zurücklegt. Es entspricht etwa 9,46 Billionen Kilometern (9,46 × 10¹² km). Lichtjahre werden verwendet, um Entfernungen in der Astronomie anzugeben.' },
      { question: 'Wie funktioniert die Umrechnung im metrischen System?', answer: 'Im metrischen System basiert die Umrechnung auf Zehnerpotenzen. Jede Einheit ist ein Vielfaches von 10 der nächstkleineren Einheit. Zum Beispiel: 1 Kilometer = 1000 Meter, 1 Meter = 100 Zentimeter, 1 Zentimeter = 10 Millimeter.' }
    ]
  },
  {
    id: 'gewicht',
    name: 'Gewicht',
    slug: 'gewicht',
    title: 'Gewicht umrechnen: kg in lbs, Gramm in Unze - Kostenloser Umrechner',
    description: 'Gewichtseinheiten umrechnen: Kilogramm, Gramm, Pfund, Unzen und mehr. Präzise Umrechnungen für Küche, Sport und Wissenschaft.',
    h1: 'Gewichtsumrechner: kg, lbs, Gramm, Unze umrechnen',
    icon: 'scale',
    baseUnit: 'kg',
    units: weightUnits,
    content: {
      intro: 'Die Gewichtsumrechnung ist ein zentrales Thema in vielen Bereichen des täglichen Lebens, von der Küche über den Sport bis hin zur Wissenschaft und Industrie. Ob Sie ein amerikanisches Rezept mit Pfund-Angaben nachkochen möchten, Ihr Körpergewicht in verschiedenen Einheiten verfolgen wollen oder technische Berechnungen mit präzisen Massenangaben durchführen müssen – unser Gewichtsumrechner liefert Ihnen exakte Ergebnisse für alle gängigen Masseneinheiten.',
      usage: 'In Deutschland, Österreich und der Schweiz ist das Kilogramm die gesetzliche Basiseinheit für Masse. In den USA und einigen anderen Ländern werden jedoch noch das Pfund (pound) und die Unze (ounce) verwendet. Bei internationalen Handel, Reisen oder der Verarbeitung von ausländischen Produkten ist die Umrechnung zwischen metrischen und imperialen Einheiten unverzichtbar. Unser Umrechner unterstützt sowohl metrische Einheiten (Milligramm, Gramm, Kilogramm, Tonne) als auch imperiale Einheiten (Unze, Pfund, Stone) sowie spezielle Einheiten wie Karat für Edelsteine.',
      examples: 'Häufige Anwendungsfälle sind: Umrechnung von Pfund in Kilogramm für Gewichtsangaben, Gramm in Unzen für Kochrezepte, Kilogramm in Stone für Körpergewicht im britischen System, oder Milligramm in Karat für Schmuck und Edelsteine.'
    },
    faq: [
      { question: 'Wie rechne ich Pfund in Kilogramm um?', answer: 'Ein Pfund entspricht etwa 0,4536 Kilogramm. Multiplizieren Sie die Anzahl der Pfund mit 0,4536, um Kilogramm zu erhalten. Beispiel: 10 lb × 0,4536 = 4,536 kg.' },
      { question: 'Wie viele Gramm hat eine Unze?', answer: 'Eine Unze (oz) entspricht etwa 28,35 Gramm. Die genaue Umrechnung ist 1 oz = 28,349523125 g. Diese Einheit wird häufig bei Edelmetallen und in der Küche verwendet.' },
      { question: 'Was ist ein Stone und wie viel wiegt es?', answer: 'Ein Stone ist eine britische Gewichtseinheit, die vor allem für das Körpergewicht verwendet wird. Ein Stone entspricht 14 Pfund oder etwa 6,35 Kilogramm.' },
      { question: 'Wie rechne ich Karat in Gramm um?', answer: 'Ein Karat (für Edelsteine) entspricht 0,2 Gramm oder 200 Milligramm. Bitte nicht verwechseln mit der Goldlegierung, wo Karat den Reinheitsgrad angibt.' },
      { question: 'Was ist der Unterschied zwischen metrischer und amerikanischer Tonne?', answer: 'Eine metrische Tonne entspricht 1000 Kilogramm. Eine amerikanische short ton entspricht 907,185 kg (2000 lb), eine britische long ton entspricht 1016,047 kg (2240 lb).' },
      { question: 'Wie viel wiegt ein Gran?', answer: 'Ein Gran (grain) ist eine sehr kleine Gewichtseinheit, die etwa 64,8 Milligramm entspricht. Sie wird heute noch bei Schießpulver und Pfeilgewichten verwendet.' }
    ]
  },
  {
    id: 'temperatur',
    name: 'Temperatur',
    slug: 'temperatur',
    title: 'Temperatur umrechnen: Celsius in Fahrenheit - Kostenloser Umrechner',
    description: 'Temperaturen umrechnen: Celsius, Fahrenheit und Kelvin. Präzise Umrechnungen mit Formeln und Erklärungen.',
    h1: 'Temperaturumrechner: Celsius, Fahrenheit, Kelvin',
    icon: 'thermometer',
    baseUnit: 'c',
    units: temperatureUnits,
    content: {
      intro: 'Die Temperaturumrechnung ist ein spezielles Thema, da Temperatur nicht durch einfache Multiplikation umgerechnet werden kann wie andere Einheiten. Die drei wichtigsten Temperaturskalen sind Celsius (°C), Fahrenheit (°F) und Kelvin (K). Unser Temperaturrechner bietet Ihnen nicht nur schnelle Umrechnungen, sondern erklärt auch die Hintergründe und Formeln für das Verständnis dieser wichtigen physikalischen Größe.',
      usage: 'Die Celsius-Skala ist in Deutschland, Österreich und der Schweiz sowie in den meisten Ländern der Welt der Standard für Temperaturangaben. In den USA wird überwiegend die Fahrenheit-Skala verwendet. Die Kelvin-Skala ist die wissenschaftliche Basiseinheit für Temperatur und wird in Physik, Chemie und Technik verwendet. Sie beginnt beim absoluten Nullpunkt (-273,15 °C).',
      examples: 'Typische Anwendungen sind: Umrechnung von Wettertemperaturen zwischen Celsius und Fahrenheit, Berechnung von absoluten Temperaturen in Kelvin für wissenschaftliche Zwecke, oder Umrechnung von Ofentemperaturen beim Backen mit amerikanischen Rezepten.'
    },
    faq: [
      { question: 'Wie rechne ich Celsius in Fahrenheit um?', answer: 'Verwenden Sie die Formel: °F = (°C × 9/5) + 32. Beispiel: 20 °C × 9/5 + 32 = 68 °F. Alternativ: °F = °C × 1,8 + 32.' },
      { question: 'Wie rechne ich Fahrenheit in Celsius um?', answer: 'Verwenden Sie die Formel: °C = (°F - 32) × 5/9. Beispiel: (68 °F - 32) × 5/9 = 20 °C. Alternativ: °C = (°F - 32) ÷ 1,8.' },
      { question: 'Was ist der absolute Nullpunkt?', answer: 'Der absolute Nullpunkt ist die tiefstmögliche Temperatur bei 0 Kelvin (-273,15 °C oder -459,67 °F). Bei dieser Temperatur bewegen sich keine Atome mehr. Sie ist der Nullpunkt der Kelvin-Skala.' },
      { question: 'Warum gibt es verschiedene Temperaturskalen?', answer: 'Die Celsius-Skala basiert auf dem Gefrierpunkt (0 °C) und Siedepunkt (100 °C) von Wasser. Fahrenheit wurde ursprünglich mit anderen Referenzpunkten definiert. Kelvin ist die wissenschaftliche Skala mit dem absoluten Nullpunkt als Startpunkt.' },
      { question: 'Welche Temperatur haben Raumtemperatur und Körpertemperatur?', answer: 'Raumtemperatur wird typischerweise mit etwa 20-22 °C (68-72 °F) angegeben. Die normale Körpertemperatur liegt bei etwa 37 °C (98,6 °F).' },
      { question: 'Wie hängen Kelvin und Celsius zusammen?', answer: 'Die Kelvin-Skala hat dieselbe Größe der Gradeinteilung wie Celsius, beginnt aber beim absoluten Nullpunkt. Die Umrechnung ist: K = °C + 273,15. Beispiel: 0 °C = 273,15 K.' }
    ]
  },
  {
    id: 'flaeche',
    name: 'Fläche',
    slug: 'flaeche',
    title: 'Flächeneinheiten umrechnen: m² in ft², Hektar - Kostenloser Umrechner',
    description: 'Flächeneinheiten umrechnen: Quadratmeter, Hektar, Quadratkilometer, Quadratfuß und mehr. Für Grundstücke, Immobilien und Technik.',
    h1: 'Flächenumrechner: Quadratmeter, Hektar, m², ft²',
    icon: 'square',
    baseUnit: 'm2',
    units: areaUnits,
    content: {
      intro: 'Die Flächenumrechnung ist besonders wichtig in der Immobilienbranche, Landwirtschaft, im Bauwesen und bei der Planung von Projekten. Ob Sie die Größe eines Grundstücks berechnen möchten, die Wohnfläche in verschiedenen Einheiten angeben müssen oder die Fläche von Immobilien auf internationalen Portalen verstehen wollen – unser Flächenrechner bietet präzise Umrechnungen für alle gängigen Flächeneinheiten.',
      usage: 'In Deutschland und Mitteleuropa werden Flächen meist in Quadratmetern (m²) angegeben. Für Grundstücke und landwirtschaftliche Flächen wird oft Hektar (ha) oder Ar (a) verwendet. In den USA sind Quadratfuß (sq ft) und Acre die gängigen Einheiten. Bei großen Flächen wie Naturschutzgebieten oder Städten wird Quadratkilometer (km²) verwendet.',
      examples: 'Anwendungsbeispiele: Umrechnung von Quadratmetern in Quadratfuß für internationale Immobilienportale, Hektar in Acre für landwirtschaftliche Vergleiche, oder Quadratzentimeter in Quadratzoll für technische Zeichnungen.'
    },
    faq: [
      { question: 'Wie rechne ich Quadratmeter in Quadratfuß um?', answer: 'Ein Quadratfuß entspricht 0,0929 Quadratmetern. Multiplizieren Sie Quadratmeter mit 10,764, um Quadratfuß zu erhalten. Beispiel: 100 m² × 10,764 = 1076,4 sq ft.' },
      { question: 'Wie viele Quadratmeter hat ein Hektar?', answer: 'Ein Hektar entspricht 10.000 Quadratmetern oder 100 Ar. Diese Einheit wird häufig für Grundstücke und landwirtschaftliche Flächen verwendet.' },
      { question: 'Was ist ein Acre und wie groß ist es?', answer: 'Ein Acre ist eine amerikanische Flächeneinheit, die etwa 4047 Quadratmetern oder 0,4047 Hektar entspricht. Sie wird in den USA und UK für Grundstücksgrößen verwendet.' },
      { question: 'Wie rechne ich Quadratkilometer in Quadratmeilen um?', answer: 'Eine Quadratmeile entspricht 2,59 Quadratkilometern. Teilen Sie Quadratkilometer durch 2,59 oder multiplizieren Sie mit 0,386 für Quadratmeilen.' },
      { question: 'Was ist der Unterschied zwischen Ar und Hektar?', answer: 'Ein Ar entspricht 100 Quadratmetern, ein Hektar entspricht 100 Ar oder 10.000 Quadratmetern. Ar wird oft für kleinere Grundstücke verwendet, Hektar für größere Flächen.' },
      { question: 'Wie berechne ich die Fläche eines Raumes?', answer: 'Für rechteckige Räume: Fläche = Länge × Breite in Metern. Beispiel: Ein Raum von 5 m × 4 m hat eine Fläche von 20 m².' }
    ]
  },
  {
    id: 'volumen',
    name: 'Volumen',
    slug: 'volumen',
    title: 'Volumen umrechnen: Liter in Gallonen, ml in oz - Kostenloser Umrechner',
    description: 'Volumeneinheiten umrechnen: Liter, Milliliter, Gallonen, Kubikmeter und mehr. Für Küche, Tankstelle und Industrie.',
    h1: 'Volumenumrechner: Liter, Gallonen, ml, Kubikmeter',
    icon: 'droplet',
    baseUnit: 'm3',
    units: volumeUnits,
    content: {
      intro: 'Die Volumenumrechnung ist ein alltägliches Thema in der Küche, beim Autofahren, in der Industrie und in vielen anderen Bereichen. Ob Sie ein amerikanisches Rezept mit Cups und Fluid Ounces nachkochen möchten, den Kraftstoffverbrauch in Gallonen verstehen wollen oder technische Volumenberechnungen durchführen müssen – unser Volumenrechner liefert präzise Ergebnisse für alle gängigen Volumeneinheiten.',
      usage: 'In Mitteleuropa wird Volumen meist in Litern (l) oder Millilitern (ml) angegeben. Große Mengen werden in Kubikmetern (m³) gemessen. In den USA sind Gallonen, Quarts, Pints und Fluid Ounces die Standard-Einheiten. Wichtig: Es gibt Unterschiede zwischen US-Gallonen und UK-Gallonen.',
      examples: 'Typische Anwendungen: Umrechnung von Litern in Gallonen für Kraftstoffvergleiche, Milliliter in Fluid Ounces für Kochrezepte, Kubikmeter in Kubikfuß für Bauwesen, oder Hektoliter in Liter für Getränkeindustrie.'
    },
    faq: [
      { question: 'Wie rechne ich Liter in Gallonen um?', answer: 'Eine US-Gallone entspricht etwa 3,785 Litern. Teilen Sie Liter durch 3,785 für US-Gallonen. Eine UK-Gallone entspricht etwa 4,546 Litern.' },
      { question: 'Was ist der Unterschied zwischen US- und UK-Gallone?', answer: 'Eine US-Gallone entspricht 3,785 Litern, eine UK-Gallone (Imperial Gallon) entspricht 4,546 Litern. Der Unterschied beträgt etwa 20%.' },
      { question: 'Wie viele Milliliter hat eine Flüssigunze?', answer: 'Eine US-Fluid Ounce entspricht etwa 29,57 Millilitern, eine UK-Fluid Ounce entspricht etwa 28,41 Millilitern.' },
      { question: 'Wie rechne ich Kubikmeter in Liter um?', answer: 'Ein Kubikmeter entspricht genau 1000 Litern. Multiplizieren Sie Kubikmeter mit 1000 für Liter. Beispiel: 2 m³ = 2000 l.' },
      { question: 'Was ist ein Barrel und wie groß ist es?', answer: 'Ein Barrel (Öl) entspricht 158,987 Litern oder etwa 42 US-Gallonen. Die Einheit wird hauptsächlich in der Erdölindustrie verwendet.' },
      { question: 'Wie viele Liter hat ein Hektoliter?', answer: 'Ein Hektoliter entspricht 100 Litern. Diese Einheit wird häufig in der Getränkeindustrie, besonders bei Bier, verwendet.' }
    ]
  },
  {
    id: 'geschwindigkeit',
    name: 'Geschwindigkeit',
    slug: 'geschwindigkeit',
    title: 'Geschwindigkeit umrechnen: km/h in mph, Knoten - Kostenloser Umrechner',
    description: 'Geschwindigkeitseinheiten umrechnen: km/h, mph, Knoten, m/s und mehr. Für Autofahrer, Piloten und Sportler.',
    h1: 'Geschwindigkeitsumrechner: km/h, mph, Knoten, m/s',
    icon: 'gauge',
    baseUnit: 'mps',
    units: speedUnits,
    content: {
      intro: 'Die Geschwindigkeitsumrechnung ist besonders für Autofahrer, Piloten, Seeleute und Sportler relevant. Ob Sie Geschwindigkeitsbegrenzungen im Ausland verstehen möchten, die Windgeschwindigkeit umrechnen wollen oder wissenschaftliche Berechnungen durchführen müssen – unser Geschwindigkeitsrechner bietet präzise Umrechnungen für alle gängigen Geschwindigkeitseinheiten.',
      usage: 'In Deutschland, Österreich und der Schweiz wird die Geschwindigkeit in Kilometer pro Stunde (km/h) angegeben. In den USA und UK werden Meilen pro Stunde (mph) verwendet. In der Luftfahrt und Schifffahrt ist die Einheit Knoten (kn) der Standard. In der Physik wird oft Meter pro Sekunde (m/s) verwendet.',
      examples: 'Anwendungsbeispiele: Umrechnung von km/h in mph für Reisen in die USA, Knoten in km/h für Wettervorhersagen, oder m/s in km/h für wissenschaftliche Berechnungen.'
    },
    faq: [
      { question: 'Wie rechne ich km/h in mph um?', answer: 'Multiplizieren Sie km/h mit 0,6214 für mph. Beispiel: 100 km/h × 0,6214 = 62,14 mph. Umgekehrt: mph × 1,609 = km/h.' },
      { question: 'Was ist ein Knoten und wie schnell ist das?', answer: 'Ein Knoten entspricht einer Seemeile pro Stunde oder 1,852 km/h. Diese Einheit wird in der Luft- und Seefahrt verwendet.' },
      { question: 'Wie viele km/h ist Mach 1?', answer: 'Mach 1 ist die Schallgeschwindigkeit, die bei Meeresniveau etwa 1235 km/h oder 767 mph entspricht. Die genaue Geschwindigkeit hängt von Temperatur und Höhe ab.' },
      { question: 'Wie rechne ich m/s in km/h um?', answer: 'Multiplizieren Sie m/s mit 3,6 für km/h. Beispiel: 10 m/s × 3,6 = 36 km/h. Umgekehrt: km/h ÷ 3,6 = m/s.' },
      { question: 'Was bedeutet "100 km/h" auf einem Tacho?', answer: '100 km/h bedeutet, dass das Fahrzeug in einer Stunde 100 Kilometer zurücklegt. Das entspricht etwa 62 mph oder 27,78 m/s.' },
      { question: 'Wie schnell ist die Lichtgeschwindigkeit?', answer: 'Die Lichtgeschwindigkeit im Vakuum beträgt etwa 299.792 km/s oder 1.079.252.849 km/h. Sie ist die höchstmögliche Geschwindigkeit im Universum.' }
    ]
  },
  {
    id: 'zeit',
    name: 'Zeit',
    slug: 'zeit',
    title: 'Zeit umrechnen: Stunden in Minuten, Sekunden - Kostenloser Umrechner',
    description: 'Zeiteinheiten umrechnen: Sekunden, Minuten, Stunden, Tage und mehr. Für Projekte, Kochen und Wissenschaft.',
    h1: 'Zeitumrechner: Stunden, Minuten, Sekunden, Tage',
    icon: 'clock',
    baseUnit: 's',
    units: timeUnits,
    content: {
      intro: 'Die Zeitumrechnung ist ein fundamentales Thema in unserem täglichen Leben, bei der Projektplanung, im Sport und in der Wissenschaft. Ob Sie Kochzeiten umrechnen möchten, Projektzeiträume planen wollen oder wissenschaftliche Berechnungen mit präzisen Zeiteinheiten durchführen müssen – unser Zeitrechner bietet exakte Umrechnungen für alle gängigen Zeiteinheiten.',
      usage: 'Die Basiseinheit der Zeit im internationalen Einheitensystem ist die Sekunde (s). Daraus abgeleitet werden Minuten, Stunden, Tage, Wochen, Monate und Jahre. Für sehr kleine Zeiträume gibt es Millisekunden, Mikrosekunden und Nanosekunden, die in der Technik und Informatik wichtig sind.',
      examples: 'Typische Anwendungen: Umrechnung von Stunden in Minuten für Projektplanung, Sekunden in Millisekunden für Programmierung, Tage in Wochen für Urlaubsplanung, oder Jahre in Stunden für Langzeitprojekte.'
    },
    faq: [
      { question: 'Wie viele Sekunden hat eine Stunde?', answer: 'Eine Stunde hat 3600 Sekunden (60 Minuten × 60 Sekunden). Ein Tag hat 86.400 Sekunden.' },
      { question: 'Wie rechne ich Minuten in Stunden um?', answer: 'Teilen Sie Minuten durch 60 für Stunden. Beispiel: 150 Minuten ÷ 60 = 2,5 Stunden oder 2 Stunden 30 Minuten.' },
      { question: 'Wie viele Stunden hat eine Woche?', answer: 'Eine Woche hat 168 Stunden (7 Tage × 24 Stunden). Ein Jahr hat etwa 8760 Stunden.' },
      { question: 'Was ist eine Millisekunde?', answer: 'Eine Millisekunde (ms) ist ein Tausendstel einer Sekunde (0,001 s). Diese Einheit wird häufig in der Informatik und bei Reaktionszeitmessungen verwendet.' },
      { question: 'Wie viele Tage hat ein Jahr?', answer: 'Ein Kalenderjahr hat 365 Tage, ein Schaltjahr hat 366 Tage. Im Durchschnitt hat ein Jahr 365,2425 Tage (gregorianischer Kalender).' },
      { question: 'Was ist ein Fortnight?', answer: 'Ein Fortnight ist eine britische Zeiteinheit für 14 Tage oder zwei Wochen (1209600 Sekunden). Der Begriff wird heute noch in UK und Australien verwendet.' }
    ]
  },
  {
    id: 'druck',
    name: 'Druck',
    slug: 'druck',
    title: 'Druck umrechnen: Bar in PSI, Pascal - Kostenloser Umrechner',
    description: 'Druckeinheiten umrechnen: Bar, Pascal, PSI, Atmosphäre und mehr. Für Reifen, Tauchen und Meteorologie.',
    h1: 'Druckumrechner: Bar, PSI, Pascal, Atmosphäre',
    icon: 'gauge',
    baseUnit: 'pa',
    units: pressureUnits,
    content: {
      intro: 'Die Druckumrechnung ist wichtig in vielen technischen Bereichen, beim Autofahren, beim Tauchen, in der Meteorologie und in der Industrie. Ob Sie den Reifendruck von PSI in Bar umrechnen möchten, Wetterdaten verstehen wollen oder technische Berechnungen durchführen müssen – unser Druckrechner bietet präzise Umrechnungen für alle gängigen Druckeinheiten.',
      usage: 'Die SI-Basiseinheit für Druck ist das Pascal (Pa). In der Praxis werden oft Kilopascal (kPa), Bar oder Millibar verwendet. In den USA ist PSI (pound per square inch) die gängige Einheit. In der Meteorologie wird meist Hektopascal (hPa) oder Millibar verwendet.',
      examples: 'Häufige Anwendungen: Umrechnung von Bar in PSI für Reifendruck, Pascal in mmHg für Blutdruckmessungen, Atmosphäre in Bar für Tauchausrüstung, oder Hektopascal in Millibar für Wetterberichte.'
    },
    faq: [
      { question: 'Wie rechne ich Bar in PSI um?', answer: 'Multiplizieren Sie Bar mit 14,504 für PSI. Beispiel: 2 bar × 14,504 = 29,01 PSI. Umgekehrt: PSI ÷ 14,504 = Bar.' },
      { question: 'Was ist der Unterschied zwischen Bar und Pascal?', answer: 'Ein Bar entspricht 100.000 Pascal (100 kPa). Bar ist eine praktische Einheit für technische Anwendungen, Pascal ist die SI-Basiseinheit.' },
      { question: 'Wie viel ist ein Atmosphäre?', answer: 'Eine Atmosphäre (atm) entspricht 101.325 Pascal oder etwa 1,013 Bar. Sie entspricht dem durchschnittlichen Luftdruck auf Meereshöhe.' },
      { question: 'Was bedeutet mmHg?', answer: 'mmHg (Millimeter Quecksilbersäule) ist eine ältere Einheit, die heute noch bei Blutdruckmessungen verwendet wird. 1 mmHg entspricht etwa 133,32 Pascal.' },
      { question: 'Welchen Reifendruck soll ich verwenden?', answer: 'Der empfohlene Reifendruck steht im Handbuch oder auf einem Aufkleber im Fahrzeug. Typische Werte sind 2,0-2,5 bar (29-36 PSI) für PKW.' },
      { question: 'Was ist der Unterschied zwischen mbar und hPa?', answer: 'Millibar (mbar) und Hektopascal (hPa) sind identisch: 1 mbar = 1 hPa = 100 Pascal. Beide werden in der Meteorologie verwendet.' }
    ]
  },
  {
    id: 'energie',
    name: 'Energie',
    slug: 'energie',
    title: 'Energie umrechnen: Kalorien in Joule, kWh - Kostenloser Umrechner',
    description: 'Energieeinheiten umrechnen: Joule, Kalorien, Wattstunden, BTU und mehr. Für Ernährung, Physik und Haushalt.',
    h1: 'Energieumrechner: Kalorien, Joule, kWh, BTU',
    icon: 'zap',
    baseUnit: 'j',
    units: energyUnits,
    content: {
      intro: 'Die Energieumrechnung ist relevant für die Ernährungsplanung, für physikalische Berechnungen, für den Energieverbrauch im Haushalt und für technische Anwendungen. Ob Sie Kalorien in Joule umrechnen möchten, den Energieverbrauch verstehen wollen oder wissenschaftliche Berechnungen durchführen müssen – unser Energierechner bietet präzise Umrechnungen für alle gängigen Energieeinheiten.',
      usage: 'Die SI-Basiseinheit für Energie ist das Joule (J). In der Ernährung werden Kalorien (cal) oder Kilokalorien (kcal) verwendet. Für den Energieverbrauch sind Wattstunden (Wh) und Kilowattstunden (kWh) relevant. In den USA wird oft BTU (British Thermal Unit) verwendet.',
      examples: 'Typische Anwendungen: Umrechnung von Kalorien in Joule für Ernährungsberatung, Kilowattstunden in Megajoule für Energieverträge, oder BTU in Joule für Klimaanlagen.'
    },
    faq: [
      { question: 'Wie rechne ich Kalorien in Joule um?', answer: 'Eine Kalorie entspricht 4,184 Joule. Multiplizieren Sie Kalorien mit 4,184 für Joule. Beispiel: 100 kcal × 4,184 = 418,4 kJ.' },
      { question: 'Was ist der Unterschied zwischen Kalorie und Kilokalorie?', answer: 'Eine Kilokalorie (kcal) entspricht 1000 Kalorien. In der Ernährung wird "Kalorie" oft für Kilokalorie verwendet. Auf Lebensmitteln stehen kcal für Kilokalorien.' },
      { question: 'Wie rechne ich kWh in Joule um?', answer: 'Eine Kilowattstunde entspricht 3,6 Megajoule oder 3.600.000 Joule. Beispiel: 10 kWh = 36 MJ.' },
      { question: 'Was ist eine BTU?', answer: 'BTU (British Thermal Unit) ist eine amerikanische Energieeinheit. Eine BTU entspricht etwa 1055 Joule. Sie wird oft für Heizungs- und Klimaanlagen verwendet.' },
      { question: 'Wie viel Energie hat ein Liter Benzin?', answer: 'Ein Liter Benzin enthält etwa 32 Megajoule oder 8,9 kWh chemische Energie. Dies entspricht etwa 7600 kcal.' },
      { question: 'Was ist ein Elektronenvolt?', answer: 'Ein Elektronenvolt (eV) ist eine sehr kleine Energieeinheit aus der Physik. Sie entspricht etwa 1,602 × 10⁻¹⁹ Joule und wird für Teilchenenergien verwendet.' }
    ]
  },
  {
    id: 'leistung',
    name: 'Leistung',
    slug: 'leistung',
    title: 'Leistung umrechnen: PS in kW, Watt - Kostenloser Umrechner',
    description: 'Leistungseinheiten umrechnen: Watt, Kilowatt, Pferdestärken, BTU/h und mehr. Für Autos, Haushalt und Industrie.',
    h1: 'Leistungsumrechner: PS, kW, Watt, Pferdestärken',
    icon: 'zap',
    baseUnit: 'w',
    units: powerUnits,
    content: {
      intro: 'Die Leistungsumrechnung ist wichtig für Autoliebhaber, für den Vergleich von Elektrogeräten, für die Heizungsplanung und für technische Anwendungen. Ob Sie Motorleistung von PS in kW umrechnen möchten, die Leistung von Klimaanlagen vergleichen wollen oder technische Berechnungen durchführen müssen – unser Leistungsrechner bietet präzise Umrechnungen für alle gängigen Leistungseinheiten.',
      usage: 'Die SI-Basiseinheit für Leistung ist das Watt (W). Für größere Leistungen werden Kilowatt (kW) und Megawatt (MW) verwendet. In der Automobilbranche ist die Pferdestärke (PS) noch weit verbreitet. In den USA wird oft BTU/h für Heizungs- und Kühlleistung verwendet.',
      examples: 'Häufige Anwendungen: Umrechnung von PS in kW für Fahrzeugdaten, Watt in PS für Motorleistung, Kilowatt in BTU/h für Klimaanlagen, oder Megawatt in Gigawatt für Kraftwerke.'
    },
    faq: [
      { question: 'Wie rechne ich PS in kW um?', answer: 'Eine Pferdestärke (PS) entspricht etwa 0,7355 kW. Multiplizieren Sie PS mit 0,7355 für kW. Beispiel: 100 PS × 0,7355 = 73,55 kW.' },
      { question: 'Was ist der Unterschied zwischen PS und hp?', answer: 'PS (Pferdestärke) ist die metrische Einheit mit 735,5 Watt. hp (horsepower) ist die imperiale Einheit mit 745,7 Watt. 1 hp ≈ 1,014 PS.' },
      { question: 'Wie viel Watt hat ein Kilowatt?', answer: 'Ein Kilowatt (kW) entspricht 1000 Watt. Ein Megawatt (MW) entspricht 1.000.000 Watt oder 1000 kW.' },
      { question: 'Wie rechne ich BTU/h in Watt um?', answer: 'Eine BTU/h entspricht etwa 0,293 Watt. Multiplizieren Sie BTU/h mit 0,293 für Watt. Beispiel: 10000 BTU/h ≈ 2930 W.' },
      { question: 'Was bedeutet Watt bei Elektrogeräten?', answer: 'Watt gibt die Leistungsaufnahme eines Elektrogeräts an. Ein 100W-Glühbirne verbraucht 100 Watt pro Stunde Betriebszeit = 0,1 kWh.' },
      { question: 'Wie viel Leistung hat ein durchschnittlicher PKW?', answer: 'Ein durchschnittlicher PKW hat etwa 80-150 kW (110-200 PS). Sportwagen können 300 kW (400 PS) und mehr haben.' }
    ]
  },
  {
    id: 'waehrung',
    name: 'Währung',
    slug: 'waehrung',
    title: 'Währung umrechnen: Euro in Dollar, GBP, CHF - Live-Kurse',
    description: 'Währungen umrechnen mit Live-Kursen der Europäischen Zentralbank: Euro, US-Dollar, Britisches Pfund, Schweizer Franken und 30+ weitere Währungen.',
    h1: 'Währungsumrechner: Euro, Dollar, Pfund, Franken',
    icon: 'banknote',
    baseUnit: 'EUR',
    units: currencyUnits,
    content: {
      intro: 'Die Währungsumrechnung ist essentiell für Reisen, Online-Shopping, internationale Geschäfte und Finanzplanung. Unser Währungsrechner verwendet Live-Wechselkurse der Europäischen Zentralbank (EZB), die werktäglich aktualisiert werden. Damit erhalten Sie immer aktuelle und vertrauenswürdige Kurse für über 35 Währungen aus aller Welt.',
      usage: 'Der Euro (EUR) ist die Basiswährung in Deutschland, Österreich und vielen anderen EU-Ländern. Für Reisen in die USA, Großbritannien oder die Schweiz benötigen Sie Wechselkurse für US-Dollar (USD), Britisches Pfund (GBP) oder Schweizer Franken (CHF). Auch asiatische Währungen wie Japanischer Yen (JPY) und Chinesischer Yuan (CNY) sind verfügbar. Die Kurse werden von der EZB bereitgestellt und täglich aktualisiert.',
      examples: 'Typische Anwendungen: Umrechnung von Euro in US-Dollar für Amerika-Reisen, Euro in Schweizer Franken für Einkäufe in der Schweiz, Euro in Britisches Pfund für UK-Reisen, oder Euro in Türkische Lira für Urlaube in der Türkei.'
    },
    faq: [
      { question: 'Woher kommen die Wechselkurse?', answer: 'Die Wechselkurse stammen von der Europäischen Zentralbank (EZB) und werden werktäglich aktualisiert. Die EZB ist die offizielle Zentralbank der Eurozone und stellt vertrauenswürdige Referenzkurse bereit.' },
      { question: 'Wie oft werden die Kurse aktualisiert?', answer: 'Die EZB veröffentlicht neue Referenzkurse an jedem Arbeitstag, normalerweise um 16:00 Uhr Mitteleuropäischer Zeit. An Wochenenden und Feiertagen bleiben die Kurse vom letzten Arbeitstag bestehen.' },
      { question: 'Sind das die Kurse, die ich an der Bank bekomme?', answer: 'Die EZB-Kurse sind Referenzkurse für den Interbankenhandel. Banken und Wechselstuben bieten oft leicht abweichende Kurse an, da sie ihre Margen einberechnen. Für eine grobe Orientierung sind die EZB-Kurse jedoch sehr nützlich.' },
      { question: 'Wie rechne ich Euro in US-Dollar um?', answer: 'Multiplizieren Sie den Euro-Betrag mit dem aktuellen Wechselkurs EUR/USD. Beispiel: Bei einem Kurs von 1,08 entsprechen 100 Euro etwa 108 US-Dollar.' },
      { question: 'Was ist der Unterschied zwischen ECB-Kursen und Marktkursen?', answer: 'ECB-Kurse sind offizielle Referenzkurse, die einmal täglich festgelegt werden. Marktkurse (wie bei Forex-Brokern) ändern sich sekündlich während der Handelszeiten. Für die meisten Anwendungen sind ECB-Kurse ausreichend genau.' },
      { question: 'Welche Währungen werden unterstützt?', answer: 'Unser Rechner unterstützt über 35 Währungen inklusive EUR, USD, GBP, CHF, JPY, CAD, AUD, CNY, INR und viele mehr. Alle wichtigen Weltwährungen sind verfügbar.' }
    ]
  },
  {
    id: 'kochen',
    name: 'Kochen & Backen',
    slug: 'kochen',
    title: 'Kochmaße umrechnen: Cups in Gramm, EL in ml - Kostenloser Umrechner',
    description: 'Kochmaße und Backeinheiten umrechnen: Cups, Esslöffel, Teelöffel in Gramm und Milliliter. Für amerikanische und britische Rezepte.',
    h1: 'Kochmaß-Umrechner: Cups, Esslöffel, Teelöffel in Gramm',
    icon: 'chef-hat',
    baseUnit: 'ml',
    units: cookingUnits,
    content: {
      intro: 'Die Umrechnung von Kochmaßen ist unverzichtbar für alle, die mit internationalen Rezepten arbeiten. Ob Sie ein amerikanisches Backbuch mit Cups-Angaben verwenden, ein britisches Rezept mit Fluid Ounces nachkochen möchten oder einfach nur Esslöffel in Milliliter umrechnen müssen – unser Kochmaß-Umrechner bietet präzise Umrechnungen für alle gängigen Kücheneinheiten. Besonders bei Backrezepten ist genaues Abwiegen entscheidend für den Erfolg.',
      usage: 'In Deutschland, Österreich und der Schweiz werden in Rezepten meist Gramm (g) und Milliliter (ml) angegeben. Amerikanische Rezepte verwenden oft Cups (Tassen), Tablespoons (Esslöffel) und Teaspoons (Teelöffel). Britische Rezepte können Fluid Ounces und Pints enthalten. Unser Umrechner hilft Ihnen, diese Maßeinheiten schnell und präzise umzurechnen. Wichtig: Ein US-Cup entspricht etwa 237 ml, während ein metrischer Cup 250 ml hat.',
      examples: 'Häufige Anwendungen: Umrechnung von Cups in Gramm für Mehl, Zucker und Butter, Esslöffel in Milliliter für Gewürze und Flüssigkeiten, Ofentemperaturen von Fahrenheit in Celsius für amerikanische Backrezepte, oder Flüssigunzen in Milliliter für Cocktail-Rezepte.'
    },
    faq: [
      { question: 'Wie viel Gramm hat ein Cup Mehl?', answer: 'Ein US-Cup Mehl entspricht etwa 120-130 Gramm, je nach Mehltyp und wie fest es gepresst wurde. Für Weizenmehl rechnen Sie mit ca. 125 Gramm pro Cup. Ein metrischer Cup (250 ml) Mehl entspricht etwa 150-160 Gramm.' },
      { question: 'Wie viel ml hat ein Esslöffel?', answer: 'Ein metrischer Esslöffel (EL) entspricht 15 ml. Ein US-Tablespoon entspricht etwa 14,79 ml, ein britischer Tablespoon etwa 17,76 ml. In deutschen Rezepten wird meist der metrische Esslöffel mit 15 ml angenommen.' },
      { question: 'Wie rechne ich Cups in Gramm um?', answer: 'Die Umrechnung hängt von der Zutat ab: 1 Cup Zucker = ca. 200g, 1 Cup Mehl = ca. 125g, 1 Cup Butter = ca. 225g, 1 Cup Haferflocken = ca. 90g. Flüssigkeiten sind einfacher: 1 Cup = ca. 240 ml (US) oder 250 ml (metrisch).' },
      { question: 'Was ist der Unterschied zwischen US-Cup und metrischem Cup?', answer: 'Ein US-Cup entspricht 236,59 ml (oft auf 240 ml gerundet), während ein metrischer Cup genau 250 ml hat. Der Unterschied beträgt etwa 5%. Bei Backrezepten kann dieser Unterschied wichtig sein.' },
      { question: 'Wie viel Gramm hat ein Teelöffel Salz?', answer: 'Ein Teelöffel (5 ml) Salz wiegt etwa 5-6 Gramm, je nach Salzart. Feines Tafelsalz ist etwas schwerer als grobes Meersalz. Für genaues Abwiegen ist eine Küchenwaage empfehlenswert.' },
      { question: 'Wie rechne ich Ofentemperaturen von Fahrenheit in Celsius um?', answer: 'Verwenden Sie die Formel: °C = (°F - 32) × 5/9. Gängige Temperaturen: 350°F = 175°C, 375°F = 190°C, 400°F = 200°C, 425°F = 220°C, 450°F = 230°C.' }
    ]
  },
  {
    id: 'datenvolumen',
    name: 'Datenvolumen',
    slug: 'datenvolumen',
    title: 'Datenvolumen umrechnen: MB in GB, KB in MB - Kostenloser Umrechner',
    description: 'Datenvolumen umrechnen: Megabyte, Gigabyte, Terabyte, Bits und Bytes. Für IT, Speichermedien und Internetgeschwindigkeit.',
    h1: 'Datenvolumen-Umrechner: MB, GB, TB, Bits, Bytes',
    icon: 'database',
    baseUnit: 'B',
    units: dataStorageUnits,
    content: {
      intro: 'Die Umrechnung von Datenvolumen ist ein zentrales Thema in der IT-Welt, bei der Nutzung digitaler Speichermedien und im täglichen Umgang mit Internet und Computer. Ob Sie die Größe einer Datei verstehen möchten, die Kapazität einer Festplatte berechnen wollen oder Internetgeschwindigkeiten vergleichen müssen – unser Datenvolumen-Umrechner bietet präzise Umrechnungen für alle gängigen Dateneinheiten.',
      usage: 'Die Basiseinheit für digitale Daten ist das Byte (B), das 8 Bits entspricht. Für größere Mengen werden Kilobyte (KB), Megabyte (MB), Gigabyte (GB) und Terabyte (TB) verwendet. Wichtig: Es gibt zwei Systeme – das dezimale System (1 KB = 1000 Bytes) und das binäre System mit IEC-Präfixen (1 KiB = 1024 Bytes). Speicherhersteller nutzen oft das dezimale System, während Betriebssysteme häufig das binäre System verwenden.',
      examples: 'Typische Anwendungen: Umrechnung von Megabyte in Gigabyte für Speicherplanung, Bits in Bytes für Internetgeschwindigkeiten, Terabyte in Gigabyte für Festplattenkapazitäten, oder Vergleich von KiB und KB für technische Berechnungen.'
    },
    faq: [
      { question: 'Wie viele Megabyte sind ein Gigabyte?', answer: 'Ein Gigabyte (GB) entspricht 1000 Megabyte (MB) im dezimalen System. Im binären System (Gibibyte GiB) sind es 1024 Mebibyte (MiB). Der Unterschied erklärt, warum eine 1-TB-Festplatte im Betriebssystem nur etwa 931 GB anzeigt.' },
      { question: 'Was ist der Unterschied zwischen MB und MiB?', answer: 'MB (Megabyte) verwendet das dezimale System mit 1 MB = 1.000.000 Bytes. MiB (Mebibyte) verwendet das binäre System mit 1 MiB = 1.048.576 Bytes (1024²). MiB wird oft für Speicher in Betriebssystemen verwendet.' },
      { question: 'Wie rechne ich Bits in Bytes um?', answer: 'Ein Byte besteht aus 8 Bits. Teilen Sie die Anzahl der Bits durch 8 für Bytes. Beispiel: 100 Mbit/s = 12,5 MB/s Downloadgeschwindigkeit.' },
      { question: 'Warum zeigt meine Festplatte weniger Speicher an?', answer: 'Hersteller verwenden das dezimale System (1 TB = 1.000.000.000.000 Bytes), Betriebssysteme oft das binäre System (1 TiB = 1.099.511.627.776 Bytes). Eine 1-TB-Festplatte zeigt daher nur ca. 931 GB (eigentlich GiB) an.' },
      { question: 'Wie viel Speicher braucht ein Foto oder Video?', answer: 'Ein Foto in hoher Qualität benötigt etwa 3-10 MB. Ein 4K-Video braucht etwa 300-500 MB pro Minute. Ein Full-HD-Film benötigt etwa 4-8 GB, in 4K können es 20-50 GB sein.' },
      { question: 'Was ist größer: Terabyte oder Petabyte?', answer: 'Ein Petabyte (PB) ist 1000-mal größer als ein Terabyte (TB). 1 PB = 1.000 TB = 1.000.000 GB. Petabyte werden bei großen Datenzentren und Cloud-Speicher verwendet.' }
    ]
  },
  {
    id: 'verbrauch',
    name: 'Verbrauch',
    slug: 'verbrauch',
    title: 'Verbrauch umrechnen: l/100km in mpg, km/l - Kostenloser Umrechner',
    description: 'Kraftstoffverbrauch umrechnen: Liter pro 100 km, Meilen pro Gallone, Kilometer pro Liter. Für Autofahrer und Fahrzeugvergleich.',
    h1: 'Verbrauchs-Umrechner: l/100km, mpg, km/l umrechnen',
    icon: 'fuel',
    baseUnit: 'km_l',
    units: fuelConsumptionUnits,
    content: {
      intro: 'Die Umrechnung des Kraftstoffverbrauchs ist wichtig für Autofahrer, Fahrzeugkäufer und alle, die die Effizienz verschiedener Fahrzeuge vergleichen möchten. In Europa wird der Verbrauch meist in Litern pro 100 Kilometer (l/100km) angegeben, während in den USA und Großbritannien Meilen pro Gallone (mpg) üblich sind. Unser Verbrauchs-Umrechner hilft Ihnen bei der schnellen und präzisen Umrechnung zwischen diesen verschiedenen Einheiten.',
      usage: 'In Deutschland, Österreich und der Schweiz ist die Angabe in Litern pro 100 Kilometer (l/100km) Standard. Ein niedrigerer Wert bedeutet hier einen geringeren Verbrauch. In den USA wird der Verbrauch als Meilen pro Gallone (mpg) angegeben – hier bedeutet ein höherer Wert eine höhere Effizienz. Wichtig: Es gibt US-Gallonen (3,785 Liter) und UK-Gallonen (4,546 Liter), was zu unterschiedlichen mpg-Werten führt.',
      examples: 'Typische Anwendungen: Umrechnung von l/100km in mpg für den Vergleich mit US-Fahrzeugen, Berechnung der Reichweite bei gegebenem Tankinhalt, Vergleich von Fahrzeugen aus verschiedenen Märkten, oder Planung von Spritkosten für Reisen.'
    },
    faq: [
      { question: 'Wie rechne ich l/100km in mpg um?', answer: 'Für US-mpg: mpg = 235,214583 / (l/100km). Beispiel: 8 l/100km ≈ 29,4 mpg (US). Für UK-mpg: mpg = 282,481 / (l/100km). Ein niedrigerer l/100km-Wert ergibt einen höheren mpg-Wert.' },
      { question: 'Was bedeutet 6 l/100km in mpg?', answer: '6 Liter pro 100 km entsprechen etwa 39,2 mpg (US) oder 47,1 mpg (UK). Das ist ein sehr guter Verbrauchswert für einen Benziner und typisch für sparsame Kompaktwagen oder Hybride.' },
      { question: 'Was ist der Unterschied zwischen US-mpg und UK-mpg?', answer: 'Die UK-Gallone (Imperial Gallon) ist mit 4,546 Litern größer als die US-Gallone mit 3,785 Litern. Daher sind UK-mpg-Werte etwa 20% höher als US-mpg-Werte für denselben Verbrauch.' },
      { question: 'Wie rechne ich km/l in l/100km um?', answer: 'Teilen Sie 100 durch den km/l-Wert. Beispiel: 15 km/l = 100 ÷ 15 = 6,67 l/100km. Umgekehrt: km/l = 100 ÷ (l/100km).' },
      { question: 'Was ist ein guter Verbrauchswert?', answer: 'Sehr sparsam: unter 5 l/100km (Hybrid/Kleinwagen). Gut: 5-7 l/100km (Kompaktwagen). Durchschnitt: 7-9 l/100km (Mittelklasse). Hoch: über 10 l/100km (SUV/Sportwagen). Diesel sind meist 1-2 l sparsamer.' },
      { question: 'Wie berechne ich die Reichweite meines Autos?', answer: 'Reichweite = Tankinhalt × km/l oder Reichweite = Tankinhalt ÷ (l/100km) × 100. Beispiel: 50-Liter-Tank bei 8 l/100km = 50 ÷ 8 × 100 = 625 km Reichweite.' }
    ]
  },
  {
    id: 'frequenz',
    name: 'Frequenz',
    slug: 'frequenz',
    title: 'Frequenz umrechnen: Hz in kHz, MHz, GHz - Kostenloser Umrechner',
    description: 'Frequenz umrechnen: Hertz, Kilohertz, Megahertz, Gigahertz und mehr. Für Elektronik, Audio, Radio und Prozessor-Taktung.',
    h1: 'Frequenz-Umrechner: Hz, kHz, MHz, GHz umrechnen',
    icon: 'wave',
    baseUnit: 'Hz',
    units: frequencyUnits,
    content: {
      intro: 'Die Frequenzumrechnung ist ein wichtiges Thema in der Elektronik, Audiotechnik, Telekommunikation und Computertechnik. Ob Sie Prozessortaktraten vergleichen möchten, Audiofrequenzen berechnen wollen oder Funkfrequenzen umrechnen müssen – unser Frequenz-Umrechner bietet präzise Umrechnungen für alle gängigen Frequenzeinheiten. Die Frequenz gibt an, wie oft ein Ereignis in einer bestimmten Zeitspanne wiederholt wird.',
      usage: 'Die Basiseinheit der Frequenz im internationalen Einheitensystem ist das Hertz (Hz), was einem Zyklus pro Sekunde entspricht. In der Computertechnik werden Gigahertz (GHz) für Prozessortaktraten verwendet, in der Audiotechnik sind Kilohertz (kHz) für Abtastraten üblich, und in der Funktechnik werden Megahertz (MHz) und Gigahertz für Funkfrequenzen genutzt. Auch Umdrehungen pro Minute (rpm) sind eine Frequenzeinheit.',
      examples: 'Typische Anwendungen: Umrechnung von GHz in MHz für Prozessortaktraten, kHz in Hz für Audio-Abtastraten, MHz in Hz für Funkfrequenzen, oder Umdrehungen pro Minute in Hertz für Motordrehzahlen.'
    },
    faq: [
      { question: 'Wie viele Hertz sind ein Kilohertz?', answer: 'Ein Kilohertz (kHz) entspricht 1.000 Hertz (Hz). 1 MHz = 1.000 kHz = 1.000.000 Hz. 1 GHz = 1.000 MHz = 1 Milliarde Hz.' },
      { question: 'Wie rechne ich MHz in GHz um?', answer: 'Teilen Sie MHz durch 1.000 für GHz. Beispiel: 3.400 MHz = 3,4 GHz. Umgekehrt: GHz × 1.000 = MHz.' },
      { question: 'Was bedeutet die Taktfrequenz eines Prozessors?', answer: 'Die Taktfrequenz gibt an, wie viele Takte ein Prozessor pro Sekunde ausführt. 3,5 GHz bedeutet 3,5 Milliarden Takte pro Sekunde. Höhere Taktfrequenz bedeutet meist mehr Leistung, aber auch höheren Stromverbrauch.' },
      { question: 'Wie rechne ich Umdrehungen pro Minute in Hz um?', answer: 'Teilen Sie U/min durch 60 für Hz. Beispiel: 3.000 U/min ÷ 60 = 50 Hz. Umgekehrt: Hz × 60 = U/min.' },
      { question: 'Was ist die Abtastrate bei Audio?', answer: 'Die Abtastrate gibt an, wie oft pro Sekunde ein Audiosignal digitalisiert wird. CD-Qualität: 44,1 kHz (44.100 Samples/Sekunde). DVD-Audio: 96 kHz oder 192 kHz. Höhere Abtastraten erlauben bessere Audioqualität.' },
      { question: 'Welche Frequenz hat das normale Stromnetz?', answer: 'In Europa und den meisten Ländern der Welt hat das Stromnetz eine Frequenz von 50 Hz. In den USA, Japan und einigen anderen Ländern sind es 60 Hz. Diese Frequenz bestimmt auch die Drehzahl vieler Elektromotoren.' }
    ]
  },
  {
    id: 'schuhgroesse',
    name: 'Schuhgröße',
    slug: 'schuhgroesse',
    title: 'Schuhgröße umrechnen: EU in US, UK, cm - Kostenloser Umrechner',
    description: 'Schuhgrößen umrechnen: EU, US, UK, Zentimeter und mehr. Internationale Schuhgrößen-Tabellen für Herren, Damen und Kinder.',
    h1: 'Schuhgrößen-Umrechner: EU, US, UK, cm umrechnen',
    icon: 'shoe',
    baseUnit: 'cm',
    units: shoeSizeUnits,
    content: {
      intro: 'Die Umrechnung von Schuhgrößen ist ein wichtiger Alltagshelfer beim Kauf von Schuhen im Internet, bei Bestellungen aus dem Ausland oder beim Vergleich verschiedener Marken. Da fast jedes Land ein eigenes Schuhgrößen-System verwendet, sind Verwirrung und falsche Käufe an der Tagesordnung. Unser Schuhgrößen-Umrechner hilft Ihnen dabei, die richtige Größe schnell und zuverlässig zu finden – egal ob Sie Schuhe aus den USA, UK, Europa oder Asien bestellen möchten.',
      usage: 'In Deutschland, Österreich und der Schweiz wird das europäische Schuhgrößen-System (EU) verwendet, das auf der Innenlänge des Schuhs in Pariser Stichen basiert (1 Pariser Stich = 6,67 mm). In den USA und Großbritannien werden eigene Systeme verwendet, die sich zudem zwischen Herren- und Damenschuhen unterscheiden. Japan verwendet Zentimeter, Korea Millimeter. Besonders wichtig: Die US-Größen für Damen und Herren unterscheiden sich – eine US-Damen-Größe 8 entspricht nicht einer US-Herren-Größe 8.',
      examples: 'Typische Anwendungsfälle: Umrechnung von EU in US-Größen für Online-Bestellungen, Berechnung der Fußlänge in cm aus der Schuhgröße, Vergleich von UK- und EU-Größen für internationale Marken, oder Bestimmung der Kindergrößen in verschiedenen Systemen.'
    },
    faq: [
      { question: 'Wie rechne ich EU in US-Schuhgröße um?', answer: 'Für Herren: US = (EU + 33) / 1,5 - 24. Für Damen: US = (EU + 33) / 1,5 - 21. Beispiel: EU 42 entspricht etwa US 8,5 (Herren) oder US 10,5 (Damen). Die Unterschiede sind erheblich!' },
      { question: 'Wie viele cm hat Schuhgröße EU 42?', answer: 'EU 42 entspricht einer Innenlänge von etwa 26,7 cm. Die Fußlänge sollte etwa 0,5-1 cm kleiner sein, also ca. 25,7-26,2 cm für eine gute Passform.' },
      { question: 'Was ist der Unterschied zwischen US-Herren und US-Damen?', answer: 'US-Damengrößen sind etwa 1,5-2 Nummern größer als US-Herrengrößen für dieselbe Fußlänge. Eine US-Damen-Größe 9 entspricht etwa einer US-Herren-Größe 7,5. Achten Sie beim Kauf immer auf die Angabe "Men" oder "Women".' },
      { question: 'Wie rechne ich UK in EU um?', answer: 'UK zu EU: EU = (UK + 23) × 1,5. Beispiel: UK 8 = (8 + 23) × 1,5 = 46,5 → EU 46-47. Umgekehrt: UK = EU / 1,5 - 23.' },
      { question: 'Welche Schuhgröße hat ein Fuß von 25 cm?', answer: 'Bei 25 cm Fußlänge empfehlen wir EU 40 (Innenlänge ca. 26 cm). Mit etwas Spielraum: EU 40-41. Die Schuh-Innenlänge sollte 0,5-1 cm länger als der Fuß sein.' },
      { question: 'Was bedeutet Japan-Schuhgröße?', answer: 'Die japanische Schuhgröße wird direkt in Zentimetern angegeben – das ist die Innenlänge des Schuhs. JP 26 bedeutet also 26 cm Innenlänge. Dieses System ist besonders einfach und präzise.' }
    ]
  },
  {
    id: 'winkel',
    name: 'Winkel',
    slug: 'winkel',
    title: 'Winkel umrechnen: Grad in Radiant, Gon - Kostenloser Umrechner',
    description: 'Winkel umrechnen: Grad, Radiant, Gon, Winkelminuten, Winkelsekunden und mehr. Präzise Umrechnungen für Mathematik, Technik und Navigation.',
    h1: 'Winkel-Umrechner: Grad, Radiant, Gon umrechnen',
    icon: 'angle',
    baseUnit: 'rad',
    units: angleUnits,
    content: {
      intro: 'Die Winkelumrechnung ist ein fundamentales Werkzeug in Mathematik, Physik, Technik, Navigation und vielen weiteren Bereichen. Ob Sie in der Schule mit trigonometrischen Funktionen arbeiten, in der Technik technische Zeichnungen erstellen, in der Astronomie Himmelskoordinaten berechnen oder in der Navigation Kurse bestimmen müssen – unser Winkel-Umrechner bietet präzise Umrechnungen zwischen allen wichtigen Winkeleinheiten und hilft Ihnen bei Ihren täglichen Berechnungen.',
      usage: 'Die gebräuchlichste Winkeleinheit im Alltag ist der Grad (°), der einen vollen Kreis in 360 Teile unterteilt. In der Mathematik und Physik wird jedoch bevorzugt der Radiant (rad) verwendet, bei dem der Winkel als Verhältnis von Kreisbogenlänge zum Radius definiert ist. Ein Vollkreis entspricht 2π rad ≈ 6,283 rad. Im Vermessungswesen und in der Geodäsie wird oft der Gon (Neugrad) verwendet, der den Kreis in 400 Teile teilt und damit Rechnungen vereinfacht. Für sehr präzise Angaben dienen Winkelminuten (′) und Winkelsekunden (″), wobei 1° = 60′ = 3600″.',
      examples: 'Typische Anwendungsfälle: Umrechnung von Grad in Radiant für trigonometrische Berechnungen, Gon in Grad für Vermessungsarbeiten, Winkelsekunden in Grad für astronomische Koordinaten, oder Berechnung von Drehwinkeln in der Robotik und im Maschinenbau.'
    },
    faq: [
      { question: 'Wie rechne ich Grad in Radiant um?', answer: 'Multiplizieren Sie Grad mit π/180. Formel: rad = ° × π/180. Beispiel: 90° × π/180 = π/2 ≈ 1,5708 rad. Ein Vollkreis von 360° entspricht 2π rad ≈ 6,283 rad.' },
      { question: 'Wie viele Grad sind ein Radiant?', answer: 'Ein Radiant entspricht etwa 57,296 Grad. Formel: ° = rad × 180/π. Beispiel: 1 rad × 180/π ≈ 57,296°. π rad entsprechen genau 180°.' },
      { question: 'Was ist der Unterschied zwischen Grad und Gon?', answer: 'Ein Vollkreis hat 360 Grad (Altgrad) oder 400 Gon (Neugrad). 1 Gon = 0,9°. Der Gon wird hauptsächlich im Vermessungswesen verwendet, da er Rechnungen mit dezimalen Unterteilungen vereinfacht (100 Zentigon = 1 Gon).' },
      { question: 'Wie rechne ich Winkelminuten und Winkelsekunden um?', answer: '1° = 60′ (Winkelminuten) = 3600″ (Winkelsekunden). Beispiel: 45°30′15″ = 45 + 30/60 + 15/3600 = 45,5042°. Umgekehrt: Der Dezimalteil × 60 ergibt die Winkelminuten.' },
      { question: 'Was ist ein Milliradiant (mrad)?', answer: 'Ein Milliradiant ist ein Tausendstel Radiant (0,001 rad ≈ 0,0573°). Er wird häufig in der Ballistik, bei Zielfernrohren und in militärischen Anwendungen verwendet. 1 mrad entspricht etwa 3,438 Winkelminuten.' },
      { question: 'Warum verwendet man in der Mathematik Radiant?', answer: 'Im Radianten-System vereinfachen sich viele Formeln. So gilt für kleine Winkel: sin(x) ≈ x und tan(x) ≈ x (x in rad). Die Ableitung von sin(x) ist cos(x) nur bei Verwendung von Radiant. Viele physikalische und mathematische Formeln werden dadurch eleganter.' }
    ]
  },
  {
    id: 'prozent',
    name: 'Prozentrechner',
    slug: 'prozent',
    title: 'Prozentrechner: Prozent berechnen, ausrechnen - Kostenloser Umrechner',
    description: 'Prozent ausrechnen: Prozentrechner für Prozent berechnen, Promille, Basispunkte, Brüche und ppm. Präzise Prozent-Berechnungen für Alltag, Finanzen und Wissenschaft.',
    h1: 'Prozentrechner: Prozent berechnen, ausrechnen, umrechnen',
    icon: 'percent',
    baseUnit: 'percent',
    units: percentageUnits,
    content: {
      intro: 'Der Prozentrechner ist ein unverzichtbares Werkzeug für den täglichen Gebrauch, sei es beim Einkaufen mit Rabatten, bei der Berechnung von Zinsen, in der Schule oder im Beruf. Prozentangaben begegnen uns überall: bei Angeboten im Supermarkt, bei Kreditzinsen, bei Wahlergebnissen, in der Statistik und bei vielen Gelegenheiten im Alltag. Unser Prozent-Umrechner hilft Ihnen dabei, verschiedene Prozent-Formate schnell und präzise ineinander umzurechnen.',
      usage: 'Prozent (%) bedeutet "von Hundert" und wird verwendet, um Anteile an einem Ganzen auszudrücken. In der Finanzwelt sind auch Promille (‰ = ein Tausendstel) und Basispunkte (bp = ein Hundertstel Prozent) gebräuchlich. In der Wissenschaft und Technik finden Parts per Million (ppm), Parts per Billion (ppb) und Parts per Trillion (ppt) Verwendung für sehr kleine Konzentrationen. Auch die dezimale Bruchdarstellung ist eine wichtige Form der Prozentangabe – 25% entspricht 0,25 als Bruch.',
      examples: 'Typische Anwendungsfälle: Umrechnung von Prozent in Promille für Alkoholwerte, Berechnung von Basispunkten für Zinsänderungen, Umrechnung von ppm in Prozent für Schadstoffkonzentrationen, oder Berechnung von Anteilen in verschiedenen Darstellungsformen.'
    },
    faq: [
      { question: 'Wie rechne ich Prozent in Promille um?', answer: 'Multiplizieren Sie Prozent mit 10 für Promille. Beispiel: 5% = 50‰. Umgekehrt: Teilen Sie Promille durch 10 für Prozent. Promille bedeutet "von Tausend" und wird oft bei Alkoholwerten verwendet.' },
      { question: 'Was sind Basispunkte?', answer: 'Ein Basispunkt (bp) ist ein Hundertstel Prozent (0,01%). 100 Basispunkte = 1%. Basispunkte werden vor allem in der Finanzbranche verwendet, um kleine Zinsänderungen präzise auszudrücken. Beispiel: Eine Zinserhöhung von 3,5% auf 3,75% entspricht +25 bp.' },
      { question: 'Wie rechne ich ppm in Prozent um?', answer: 'Teilen Sie ppm durch 10.000 für Prozent. Beispiel: 500 ppm = 0,05%. Umgekehrt: Prozent × 10.000 = ppm. Ppm wird für sehr kleine Konzentrationen verwendet, z.B. bei Schadstoffen in der Luft oder im Wasser.' },
      { question: 'Wie viel ist ein Prozent als Bruch?', answer: '1% = 0,01 als dezimaler Bruch = 1/100 als gewöhnlicher Bruch. Umgekehrt: Der dezimale Bruch mit 100 multipliziert ergibt den Prozentwert. Beispiel: 0,25 = 25%.' },
      { question: 'Was ist der Unterschied zwischen Prozent und Promille?', answer: 'Prozent (%) bedeutet "von Hundert" (1% = 1/100), Promille (‰) bedeutet "von Tausend" (1‰ = 1/1000). Ein Promille ist also ein Zehntel Prozent. Promille wird häufig bei Alkoholwerten im Blut verwendet (z.B. 0,5‰ = 0,05%).' },
      { question: 'Was bedeutet ppm?', answer: 'Ppm steht für "parts per million" (Teile pro Million). 1 ppm = 0,0001% = 1 Milliardstel. Es wird für sehr kleine Konzentrationen verwendet, etwa bei der Messung von Verunreinigungen in der Luft, im Wasser oder in Lebensmitteln.' }
    ]
  },
  {
    id: 'dichte',
    name: 'Dichte',
    slug: 'dichte',
    title: 'Dichte umrechnen: kg/m³, g/cm³, lb/ft³ - Kostenloser Umrechner',
    description: 'Dichteeinheiten umrechnen: Kilogramm pro Kubikmeter, Gramm pro Kubikzentimeter, Pfund pro Kubikfuß und mehr. Für Physik, Chemie und Technik.',
    h1: 'Dichte-Umrechner: kg/m³, g/cm³, lb/ft³ umrechnen',
    icon: 'density',
    baseUnit: 'kg_m3',
    units: densityUnits,
    content: {
      intro: 'Die Dichte ist eine fundamentale physikalische Größe, die das Verhältnis von Masse zu Volumen eines Stoffes beschreibt. Sie ist entscheidend für Materialkunde, Chemie, Physik und viele technische Anwendungen. Unser Dichte-Umrechner ermöglicht die schnelle und präzise Umrechnung zwischen allen wichtigen Dichteeinheiten, egal ob Sie mit SI-Einheiten wie kg/m³ arbeiten oder imperialen Einheiten wie lb/ft³.',
      usage: 'In der Wissenschaft und im SI-System ist Kilogramm pro Kubikmeter (kg/m³) die Basiseinheit für Dichte. In der Praxis werden oft Gramm pro Kubikzentimeter (g/cm³) oder Gramm pro Milliliter (g/ml) verwendet, besonders bei Flüssigkeiten. Wasser hat bei 4°C eine Dichte von 1 g/cm³ = 1000 kg/m³. In den USA und UK sind Pfund pro Kubikfuß (lb/ft³) und Pfund pro Gallone (lb/gal) gebräuchlich.',
      examples: 'Typische Dichtewerte: Wasser 1000 kg/m³, Luft 1,225 kg/m³, Stahl 7850 kg/m³, Gold 19300 kg/m³, Öl etwa 900 kg/m³. Anwendungen: Berechnung von Auftrieb, Materialidentifikation, Qualitätskontrolle, Masse-Volumen-Umrechnungen, Mischungsrechnungen in der Chemie.'
    },
    faq: [
      { question: 'Was ist Dichte und wie wird sie berechnet?', answer: 'Dichte ist das Verhältnis von Masse zu Volumen (ρ = m/V). Sie gibt an, wie viel Masse in einem bestimmten Volumen enthalten ist. Beispiel: Ein Stoff mit 2 g/cm³ Dichte hat eine Masse von 2 Gramm in jedem Kubikzentimeter.' },
      { question: 'Wie rechne ich kg/m³ in g/cm³ um?', answer: 'Teilen Sie den Wert durch 1000. Beispiel: 1000 kg/m³ = 1 g/cm³. Umgekehrt: g/cm³ mit 1000 multiplizieren für kg/m³. Wasser hat eine Dichte von 1000 kg/m³ = 1 g/cm³.' },
      { question: 'Was ist die Dichte von Wasser?', answer: 'Wasser hat bei 4°C (maximale Dichte) eine Dichte von 1000 kg/m³ = 1 g/cm³ = 1 g/ml. Bei anderen Temperaturen ändert sich die Dichte leicht – bei 20°C etwa 998 kg/m³.' },
      { question: 'Wie rechne ich lb/ft³ in kg/m³ um?', answer: 'Multiplizieren Sie lb/ft³ mit 16,018463374. Beispiel: 62,4 lb/ft³ (Wasser) ≈ 1000 kg/m³. Umgekehrt: kg/m³ durch 16,018463374 teilen.' },
      { question: 'Warum ist Dichte wichtig?', answer: 'Dichte ermöglicht die Identifikation von Stoffen, die Berechnung von Auftrieb, die Umrechnung zwischen Masse und Volumen, und ist entscheidend für Mischungs- und Konzentrationsberechnungen. In der Industrie dient sie der Qualitätskontrolle.' },
      { question: 'Welche Dichte hat Gold?', answer: 'Gold hat eine Dichte von etwa 19300 kg/m³ = 19,3 g/cm³. Das ist fast 20-mal dichter als Wasser. Diese hohe Dichte macht Gold schwer und wird auch zur Echtheitsprüfung genutzt.' }
    ]
  },
  {
    id: 'kraft',
    name: 'Kraft',
    slug: 'kraft',
    title: 'Kraft umrechnen: Newton, Kilogramm-Kraft, Pound-Force - Kostenloser Umrechner',
    description: 'Krafteinheiten umrechnen: Newton, Kilonewton, Kilogramm-Kraft, Pound-Force und mehr. Für Physik, Mechanik und Ingenieurwesen.',
    h1: 'Kraft-Umrechner: Newton, kgf, lbf umrechnen',
    icon: 'force',
    baseUnit: 'N',
    units: forceUnits,
    content: {
      intro: 'Kraft ist eine fundamentale physikalische Größe, die in der Mechanik, im Ingenieurwesen und in vielen technischen Anwendungen eine zentrale Rolle spielt. Die SI-Basiseinheit für Kraft ist das Newton (N). Unser Kraft-Umrechner ermöglicht die präzise Umrechnung zwischen allen wichtigen Krafteinheiten, von Millinewton bis Meganewton, von Kilogramm-Kraft bis Pound-Force.',
      usage: 'In Wissenschaft und Technik ist Newton (N) die Standard-Einheit für Kraft. Ein Newton ist die Kraft, die benötigt wird, um einen Körper der Masse 1 kg mit 1 m/s² zu beschleunigen. Im Alltag wird oft Kilogramm-Kraft (kgf oder kp) verwendet, da sie直观 mit der Masse verknüpft ist: 1 kgf entspricht der Gewichtskraft von 1 kg Masse unter Standard-Erdbeschleunigung. In den USA und UK ist Pound-Force (lbf) gebräuchlich.',
      examples: 'Typische Kräfte: Gewichtskraft von 1 kg Masse = 9,81 N, Gewichtskraft eines Autos (1000 kg) ≈ 10.000 N = 10 kN, Gewichtskraft einer Person (70 kg) ≈ 700 N, Zugkraft einer Lokomotive ≈ 300 kN, Schubkraft einer Rakete ≈ mehrere MN.'
    },
    faq: [
      { question: 'Was ist ein Newton?', answer: 'Ein Newton (N) ist die SI-Basiseinheit für Kraft. Definition: 1 N = 1 kg·m/s² – die Kraft, die einen Körper der Masse 1 kg mit 1 m/s² beschleunigt. Benannt nach Sir Isaac Newton.' },
      { question: 'Wie rechne ich kgf in Newton um?', answer: 'Multiplizieren Sie kgf mit 9,80665. Beispiel: 1 kgf = 9,81 N, 10 kgf = 98,1 N. Umgekehrt: Newton durch 9,80665 teilen für kgf.' },
      { question: 'Wie rechne ich Pound-Force in Newton um?', answer: 'Multiplizieren Sie lbf mit 4,44822. Beispiel: 1 lbf ≈ 4,45 N, 100 lbf ≈ 445 N. Umgekehrt: Newton durch 4,44822 teilen für lbf.' },
      { question: 'Was ist der Unterschied zwischen Kilogramm und Kilogramm-Kraft?', answer: 'Kilogramm (kg) ist eine Masseeinheit, Kilogramm-Kraft (kgf oder kp) ist eine Krafteinheit. 1 kgf ist die Gewichtskraft, die auf eine Masse von 1 kg unter Standard-Erdbeschleunigung (9,80665 m/s²) wirkt.' },
      { question: 'Was ist ein Kilonewton?', answer: 'Ein Kilonewton (kN) = 1000 Newton. Kilonewton wird für große Kräfte verwendet, z.B. Bauwesen, Fahrzeugtechnik, Hydraulik. Die Gewichtskraft eines PKW (1000 kg) beträgt etwa 10 kN.' },
      { question: 'Was ist ein Dyn?', answer: 'Das Dyn (dyn) ist eine alte CGS-Einheit für Kraft. 1 dyn = 10⁻⁵ N = 0,00001 N. Es wurde im CGS-System verwendet, heute praktisch nur noch in der Physik-Geschichte relevant.' }
    ]
  },
  {
    id: 'drehmoment',
    name: 'Drehmoment',
    slug: 'drehmoment',
    title: 'Drehmoment umrechnen: Nm, lb-ft, kgf·m - Kostenloser Umrechner',
    description: 'Drehmoment umrechnen: Newtonmeter, Pound-Foot, Kilogramm-Kraft-Meter und mehr. Für Automotive, Mechanik und Werkstatt.',
    h1: 'Drehmoment-Umrechner: Nm, lb-ft, kgf·m umrechnen',
    icon: 'torque',
    baseUnit: 'Nm',
    units: torqueUnits,
    content: {
      intro: 'Das Drehmoment ist eine zentrale Größe in der Mechanik, die das "Drehvermögen" einer Kraft beschreibt. Es ist besonders wichtig im Automobilbereich (Motordrehmoment), im Maschinenbau, bei Werkzeugen (Drehmomentschlüssel) und in der Robotik. Unser Drehmoment-Umrechner ermöglicht die präzise Umrechnung zwischen allen wichtigen Einheiten.',
      usage: 'Die SI-Einheit für Drehmoment ist Newtonmeter (N·m). Im Fahrzeugbereich werden oft auch Kilogramm-Kraft-Meter (kgf·m) verwendet, besonders in älteren technischen Dokumenten. In den USA und UK ist Pound-Foot (lb·ft) die gebräuchliche Einheit. Bei kleinen Drehmomenten (z.B. Feinmechanik) werden Millinewtonmeter (mN·m) oder Unze-Kraft-Zoll (oz·in) verwendet.',
      examples: 'Typische Drehmomente: Fahrradkurbel 10-50 N·m, PKW-Motor 150-500 N·m, LKW-Motor 1000-3000 N·m, Drehmomentschlüssel für Radschrauben 100-200 N·m, Feinmechanik-Schrauben 0,5-5 N·m, elektrischer Zahnbürste etwa 100 mN·m.'
    },
    faq: [
      { question: 'Was ist Drehmoment?', answer: 'Drehmoment (Drehmoment) ist das Produkt aus Kraft und Hebelarm (M = F × r). Es beschreibt, wie stark eine Kraft einen Körper verdrehen kann. Höheres Drehmoment bedeutet stärkere "Drehwirkung".' },
      { question: 'Wie rechne ich lb·ft in N·m um?', answer: 'Multiplizieren Sie lb·ft mit 1,3558. Beispiel: 100 lb·ft ≈ 135,6 N·m. Umgekehrt: N·m durch 1,3558 teilen für lb·ft. 1 N·m ≈ 0,738 lb·ft.' },
      { question: 'Wie rechne ich kgf·m in N·m um?', answer: 'Multiplizieren Sie kgf·m mit 9,80665. Beispiel: 10 kgf·m = 98,07 N·m. Umgekehrt: N·m durch 9,80665 teilen für kgf·m. 1 kgf·m ≈ 7,23 lb·ft.' },
      { question: 'Was bedeutet Drehmoment beim Auto?', answer: 'Das Motordrehmoment gibt an, wie viel "Kraft" der Motor zum Drehen der Räder aufbringen kann. Höheres Drehmoment bedeutet bessere Beschleunigung und Zugkraft. Typische Werte: Kleinwagen 150-200 N·m, Sportwagen 400-700 N·m, LKW 1500-3000 N·m.' },
      { question: 'Wie stelle ich einen Drehmomentschlüssel ein?', answer: 'Drehmomentschlüssel werden in N·m oder lb·ft eingestellt. Radschrauben: typischerweise 100-150 N·m, Ölablassschraube: 20-30 N·m, Zündkerzen: 20-40 N·m. Immer Herstellerangaben beachten!' },
      { question: 'Was ist der Unterschied zwischen lb·ft und lb·in?', answer: 'lb·ft (Pound-Foot) und lb·in (Pound-Inch) sind beide imperialen Drehmomenteinheiten. 1 lb·ft = 12 lb·in. lb·in wird für kleinere Drehmomente verwendet, z.B. bei Feinmechanik oder Elektrowerkzeugen.' }
    ]
  }
];

// Helper functions
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}

export function getUnitById(categorySlug: string, unitId: string): Unit | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.units.find(unit => unit.id === unitId);
}

export function getCategoryUnits(categorySlug: string): Unit[] {
  const category = getCategoryBySlug(categorySlug);
  return category?.units || [];
}

export function findUnit(unitId: string): { unit: Unit; category: Category } | undefined {
  for (const category of categories) {
    const unit = category.units.find(u => u.id === unitId);
    if (unit) {
      return { unit, category };
    }
  }
  return undefined;
}

// Calculate total directed pair pages
export function calculateTotalPairPages(): number {
  let total = 0;
  categories.forEach(cat => {
    const unitCount = cat.units.length;
    total += unitCount * (unitCount - 1); // All directed pairs except same unit
  });
  return total;
}
