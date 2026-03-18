import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Haftungsausschluss',
  description: 'Haftungsausschluss von UmrechnerPro.de - Informationen zur Haftung und Gewährleistung.',
  alternates: {
    canonical: 'https://umrechnerpro.de/haftungsausschluss',
  },
};

export default function HaftungsausschlussPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Haftungsausschluss</h1>
        
        <div className="prose prose-emerald dark:prose-invert max-w-none">
          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind 
            wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte 
            fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach 
            den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung 
            ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung 
            möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir 
            diese Inhalte umgehend entfernen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
            Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <p>
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße 
            überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. 
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne 
            konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
          </p>
          <p>
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
          <p>
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
            Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber 
            erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden 
            Inhalte Dritter als solche gekennzeichnet.
          </p>
          <p>
            Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten 
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
            werden wir derartige Inhalte umgehend entfernen.
          </p>

          <h2>Gewährleistung und Haftungsausschluss für Umrechner-Ergebnisse</h2>
          <p>
            Die auf dieser Website bereitgestellten Umrechner und Berechnungen werden mit 
            größter Sorgfalt erstellt. Dennoch können wir keine Gewähr für die Richtigkeit, 
            Vollständigkeit und Aktualität der bereitgestellten Inhalte übernehmen.
          </p>
          <p>
            Die Ergebnisse der Umrechnungen dienen nur zu Informationszwecken und ersetzen 
            keine professionelle Beratung. Für Entscheidungen, die auf Basis der Umrechnungen 
            getroffen werden, übernehmen wir keine Haftung.
          </p>
          <p>
            Insbesondere bei kritischen Anwendungen (z.B. in der Medizin, im Ingenieurwesen 
            oder bei sicherheitsrelevanten Berechnungen) sollten die Ergebnisse durch 
            unabhängige Quellen verifiziert werden.
          </p>

          <h2>Markenrecht</h2>
          <p>
            Alle auf dieser Website genannten und ggf. durch Dritte geschützten Marken- und 
            Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen 
            Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. 
            Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass 
            Markenzeichen nicht durch Rechte Dritter geschützt sind.
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
