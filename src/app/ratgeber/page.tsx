import Link from 'next/link';
import { guides } from '@/data/guides';
import { categories } from '@/data/categories';
import { getBreadcrumbSchema } from '@/lib/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Ratgeber & Erklärungen',
  description: 'Ausführliche Ratgeber zu Einheitenumrechnungen. Erfahren Sie alles über Länge, Gewicht, Temperatur, Geschwindigkeit und mehr.',
  alternates: {
    canonical: 'https://umrechnerpro.de/ratgeber',
  },
};

export default function RatgeberPage() {
  return (
    <>
      <SchemaMarkup schemas={[
        getBreadcrumbSchema([
          { name: 'Ratgeber', url: '/ratgeber' },
        ]),
      ]} />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Ratgeber & Erklärungen</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ausführliche Artikel zu allen Einheiten und Umrechnungen. Lernen Sie die Hintergründe 
            und Zusammenhänge der verschiedenen Maßsysteme verstehen.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {guides.map((guide) => {
            const relatedCategory = categories.find(c => c.slug === guide.category);
            
            return (
              <Link
                key={guide.id}
                href={`/ratgeber/${guide.slug}`}
                className="group bg-card border rounded-xl p-6 card-hover"
              >
                <div className="mb-4">
                  <span className="text-sm text-emerald-600 font-medium">
                    {relatedCategory?.name || 'Allgemein'}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {guide.description}
                </p>
                <div className="flex items-center text-sm text-emerald-600 font-medium">
                  Weiterlesen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* SEO Content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Wissenwertes über Einheiten und Umrechnungen</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Unsere Ratgeber bieten Ihnen umfassende Informationen zu allen Aspekten der 
              Einheitenumrechnung. Von der Geschichte der verschiedenen Maßsysteme bis hin 
              zu praktischen Tipps für den Alltag – hier finden Sie alles, was Sie wissen müssen.
            </p>
            <p>
              Ein Verständnis der Hintergründe verschiedener Einheiten hilft Ihnen nicht nur 
              bei der korrekten Anwendung, sondern auch bei der Einschätzung, wann welche 
              Einheit angemessen ist. Warum verwendet man in der Luftfahrt Knoten? Wie kommt 
              es zu den Unterschieden zwischen metrischem und imperialem System? Diese und 
              viele weitere Fragen beantworten unsere ausführlichen Artikel.
            </p>
            <p>
              Jeder Ratgeber enthält zudem eine Sammlung häufig gestellter Fragen (FAQs) 
              zu den jeweiligen Themen. So finden Sie schnell Antworten auf die wichtigsten 
              Fragen ohne lange suchen zu müssen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
