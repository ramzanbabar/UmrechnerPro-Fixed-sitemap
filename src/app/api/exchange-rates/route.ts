import { NextResponse } from 'next/server';

// ECB (European Central Bank) Exchange Rates API
// 100% Free - No API key required
// Rates are updated daily by ECB

interface ExchangeRates {
  base: string;
  date: string;
  rates: Record<string, number>;
}

// Cache the rates in memory for 1 hour
let cachedRates: ExchangeRates | null = null;
let lastFetch: number = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

async function fetchECBRates(): Promise<ExchangeRates> {
  // Check cache
  if (cachedRates && (Date.now() - lastFetch) < CACHE_DURATION) {
    return cachedRates;
  }

  // Pegged currency rates (to USD)
  const PEGGED_RATES: Record<string, number> = {
    SAR: 3.75,   // Saudi Riyal - pegged to USD
    AED: 3.6725, // UAE Dirham - pegged to USD
  };

  // Other fallback rates for currencies NOT in Frankfurter API
  // These are EUR to X rates
  const otherFallbackRates: Record<string, number> = {
    RUB: 105,     // Russian Ruble
    ILS: 4.00,    // Israeli Shekel
    VND: 28000,   // Vietnamese Dong
    EGP: 55       // Egyptian Pound
  };

  try {
    // Frankfurter API uses ECB data and is free
    const response = await fetch('https://api.frankfurter.app/latest', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    
    const data = await response.json();
    
    // Calculate pegged currency rates based on USD rate
    const usdRate = data.rates.USD || 1.09;
    const peggedRates: Record<string, number> = {};
    for (const [currency, usdPeg] of Object.entries(PEGGED_RATES)) {
      // EUR to X = EUR to USD * USD to X
      peggedRates[currency] = usdRate * usdPeg;
    }
    
    // Add EUR with rate 1 (base currency) and merge all rates
    const ratesWithEUR = {
      EUR: 1, // Base currency
      ...data.rates,
      ...peggedRates,        // Calculated pegged rates
      ...otherFallbackRates  // Other fallback rates
    };
    
    cachedRates = {
      base: data.base,
      date: data.date,
      rates: ratesWithEUR
    };
    lastFetch = Date.now();
    
    return cachedRates;
  } catch (error) {
    console.error('Error fetching ECB rates:', error);
    
    // Return cached rates if available
    if (cachedRates) {
      return cachedRates;
    }
    
    // Fallback rates (approximate, for emergencies only)
    // All rates are relative to EUR (EUR = 1)
    // Includes ALL currencies defined in categories.ts
    const fallbackUsdRate = 1.09;
    return {
      base: 'EUR',
      date: new Date().toISOString().split('T')[0],
      rates: {
        EUR: 1,
        USD: fallbackUsdRate,
        GBP: 0.86,
        CHF: 0.96,
        JPY: 162,
        CAD: 1.47,
        AUD: 1.65,
        NZD: 1.78,
        CNY: 7.85,
        INR: 90,
        KRW: 1450,
        BRL: 5.4,
        MXN: 18.5,
        SGD: 1.45,
        HKD: 8.42,
        NOK: 11.5,
        SEK: 11.3,
        DKK: 7.46,
        PLN: 4.3,
        CZK: 25.5,
        HUF: 385,
        RON: 4.97,
        BGN: 1.96,
        TRY: 34,
        ZAR: 19.5,
        // Pegged currencies (calculated from USD)
        SAR: fallbackUsdRate * 3.75,
        AED: fallbackUsdRate * 3.6725,
        // Other fallbacks
        RUB: 105,
        ILS: 4.00,
        VND: 28000,
        EGP: 55,
        THB: 38,
        IDR: 16800,
        MYR: 4.7,
        PHP: 56
      }
    };
  }
}

export async function GET() {
  try {
    const rates = await fetchECBRates();
    
    return NextResponse.json({
      success: true,
      data: rates
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
      }
    });
  } catch (error) {
    console.error('Exchange rates API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch exchange rates' },
      { status: 500 }
    );
  }
}
