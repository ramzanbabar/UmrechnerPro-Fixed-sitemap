# UmrechnerPro.de - Einheiten-Umrechner

Ein moderner, umfassender Einheiten-Umrechner für Deutschland, Österreich und die Schweiz.

## 📦 Installation

### Voraussetzungen
- Node.js 18.17 oder höher
- npm oder bun

### Schritte

1. **Projekt entpacken**
   ```bash
   unzip UmrechnerPro-Complete.zip
   cd UmrechnerPro
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```
   
   Oder mit bun (schneller):
   ```bash
   bun install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```
   
   Öffnen Sie http://localhost:3000 im Browser.

4. **Produktions-Build erstellen**
   ```bash
   npm run build
   npm start
   ```

## 📁 Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root Layout
│   ├── globals.css        # Global Styles
│   ├── [kategorie]/       # Category Pages
│   │   └── [pair]/        # Conversion Pair Pages
│   ├── ratgeber/          # Guide Pages
│   ├── kategorien/        # All Categories Page
│   ├── impressum/         # Legal Pages
│   ├── datenschutz/
│   ├── haftungsausschluss/
│   └── kontakt/
├── components/
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   ├── Converter.tsx      # Conversion Component
│   ├── FAQ.tsx            # FAQ Component
│   └── ui/                # shadcn/ui Components
├── data/
│   ├── categories.ts      # All Categories & Units
│   ├── guides.ts          # Ratgeber Articles
│   └── topPairs.ts        # Conversion Pairs
└── lib/
    ├── convert.ts         # Conversion Logic
    ├── seo.ts             # SEO Utilities
    └── schema.ts          # Schema.org Markup
```

## 🚀 Features

- **21 Kategorien**: Länge, Gewicht, Temperatur, Fläche, Volumen, etc.
- **456 Umrechnungspaare**: cm-zoll, kg-lbs, celsius-fahrenheit, etc.
- **15 Ratgeber-Artikel**: Umfassende Erklärungen auf Deutsch
- **500 statische Seiten**: Optimiert für SEO
- **Dark/Light Mode**: Automatische Themawahl
- **Responsive Design**: Mobile-first
- **Schema.org Markup**: WebApplication, FAQ, HowTo, Breadcrumb

## 🔧 Umgebungsvariablen (.env)

```env
# Optional: Für Live-Währungskurse
ECB_RATES_URL=https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml
```

## 📊 SEO

- Optimiert für Google Deutschland
- DACH-Lokalisierung (de-DE, de-AT, de-CH)
- Strukturierte Daten für Rich Snippets
- Dynamische Sitemap

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.3 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Mono
- **Language**: TypeScript

## 📝 Befehle

```bash
npm run dev      # Entwicklungsserver
npm run build    # Produktions-Build
npm start        # Produktionsserver
npm run lint     # ESLint prüfen
```

## 🌐 Deployment

### Vercel (empfohlen)
1. Repository auf GitHub pushen
2. Auf Vercel importieren
3. Automatisch deployed

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 Lizenz

MIT License - Frei für kommerzielle Nutzung.

---

**UmrechnerPro.de** - Präzise Umrechnungen für die DACH-Region.
