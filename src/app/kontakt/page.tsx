import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie UmrechnerPro.de - Wir freuen uns auf Ihre Nachricht.',
  alternates: {
    canonical: 'https://umrechnerpro.de/kontakt',
  },
};

export default function KontaktPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Kontakt</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">E-Mail</h3>
                <a 
                  href="mailto:reanthings@gmail.com" 
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  reanthings@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Wir antworten in der Regel innerhalb von 24-48 Stunden.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telefon / WhatsApp</h3>
                <a 
                  href="tel:+923135651580" 
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  +92 313 565 1580
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Erreichbar Montag bis Freitag, 9:00 - 18:00 Uhr.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <a 
                  href="https://wa.me/923135651580" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  +92 313 565 1580
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Schreiben Sie uns gerne per WhatsApp für schnelle Antworten.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Standort</h3>
                <p className="text-muted-foreground text-sm">
                  UmrechnerPro<br />
                  Musterstraße 123<br />
                  10115 Berlin<br />
                  Deutschland
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Erreichbarkeit</h3>
                <p className="text-muted-foreground text-sm">
                  Montag - Freitag: 9:00 - 18:00 Uhr<br />
                  Samstag: Nach Vereinbarung<br />
                  Sonntag: Geschlossen
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Nachricht senden</h2>
            <form 
              action="mailto:reanthings@gmail.com" 
              method="POST" 
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Ihr Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="ihre@email.de"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Betreff
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="allgemein">Allgemeine Anfrage</option>
                  <option value="vorschlag">Vorschlag für neuen Umrechner</option>
                  <option value="fehler">Fehler melden</option>
                  <option value="partnerschaft">Partnerschaft / Kooperation</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                  placeholder="Ihre Nachricht..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              Alternativ können Sie uns direkt eine E-Mail an 
              <a href="mailto:reanthings@gmail.com" className="text-emerald-600"> reanthings@gmail.com</a> senden.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-muted/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Häufig gestellte Fragen</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Wie genau sind die Umrechnungen?</h3>
              <p className="text-sm text-muted-foreground">
                Alle unsere Umrechnungen basieren auf offiziell festgelegten Umrechnungsfaktoren 
                und werden mit hoher Präzision berechnet. Für wissenschaftliche oder technische 
                Anwendungen empfehlen wir jedoch, die Ergebnisse zu verifizieren.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Kann ich einen neuen Umrechner vorschlagen?</h3>
              <p className="text-sm text-muted-foreground">
                Ja, gerne! Senden Sie uns Ihren Vorschlag per E-Mail oder über das Kontaktformular. 
                Wir prüfen alle Vorschläge und erweitern unser Angebot regelmäßig.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Sind die Umrechner kostenlos?</h3>
              <p className="text-sm text-muted-foreground">
                Ja, alle Umrechner auf UmrechnerPro.de sind komplett kostenlos und ohne Registrierung nutzbar.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Wie kann ich einen Fehler melden?</h3>
              <p className="text-sm text-muted-foreground">
                Falls Sie einen Fehler entdecken, kontaktieren Sie uns bitte per E-Mail oder WhatsApp. 
                Wir kümmern uns schnellstmöglich um eine Korrektur.
              </p>
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <Link href="/" className="text-emerald-600 hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
