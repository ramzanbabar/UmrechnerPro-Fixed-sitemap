import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von UmrechnerPro.de - Angaben gemäß § 5 TMG.',
  alternates: {
    canonical: 'https://umrechnerpro.de/impressum',
  },
};

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        
        <div className="prose prose-emerald dark:prose-invert max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>
          
          <div className="bg-muted/30 p-6 rounded-lg border mb-8">
            <p className="mb-0">
              <strong>UmrechnerPro</strong><br />
              Rean Things<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland
            </p>
          </div>

          <h2>Kontakt</h2>
          <div className="bg-muted/30 p-6 rounded-lg border mb-8">
            <p>
              <strong>Telefon/WhatsApp:</strong> +92 313 565 1580<br />
              <strong>E-Mail:</strong> <a href="mailto:reanthings@gmail.com" className="text-emerald-600 hover:underline">reanthings@gmail.com</a>
            </p>
          </div>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <div className="bg-muted/30 p-6 rounded-lg border mb-8">
            <p className="mb-0">
              Rean Things<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland
            </p>
          </div>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist 
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte 
            umgehend entfernen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
            Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum 
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte 
            waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
            Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir 
            derartige Links umgehend entfernen.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
            Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt 
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter 
            als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung 
            aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von 
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            DE XXX XXX XXX
          </p>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <Link href="/" className="text-emerald-600 hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
