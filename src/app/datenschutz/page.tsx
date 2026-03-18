import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von UmrechnerPro.de - Informationen zum Datenschutz und zur Datenverarbeitung.',
  alternates: {
    canonical: 'https://umrechnerpro.de/datenschutz',
  },
};

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-emerald dark:prose-invert max-w-none">
          <h2>1. Datenschutz auf einen Blick</h2>
          
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
            Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
            Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
            durch unsere IT-Systeme erfasst.
          </p>

          <p>
            <strong>Wofür nutzen wir Ihre Daten?</strong><br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website 
            zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet 
            werden, um die Website zu verbessern.
          </p>

          <h2>2. Hosting und Content Delivery Network (CDN)</h2>
          
          <h3>Externes Hosting</h3>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die 
            personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den 
            Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, 
            Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, 
            Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert 
            werden, handeln.
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den 
            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <div className="bg-muted/30 p-6 rounded-lg border mb-6">
            <p>
              <strong>Verantwortliche Stelle:</strong><br />
              UmrechnerPro<br />
              Rean Things<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland<br /><br />
              <strong>Telefon/WhatsApp:</strong> +92 313 565 1580<br />
              <strong>E-Mail:</strong> <a href="mailto:reanthings@gmail.com" className="text-emerald-600">reanthings@gmail.com</a>
            </p>
          </div>

          <h3>Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
            wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
            Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen 
            oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, 
            sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer 
            personenbezogenen Daten haben.
          </p>

          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
            Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit 
            der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3>Recht auf Datenübertragbarkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in 
            Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten 
            in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
          </p>

          <h3>Auskunft, Löschung und Berichtigung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf 
            unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft 
            und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, 
            Löschung oder Einschränkung der Verarbeitung.
          </p>

          <h3>Recht auf Einschränkung der Verarbeitung</h3>
          <p>
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
            zu verlangen.
          </p>

          <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
            einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen 
            Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>

          <h3>Cookies</h3>
          <p>
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine 
            Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden 
            entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder 
            dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
          </p>
          <p>
            Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente 
            Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen 
            oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
          </p>
          <p>
            Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen 
            (Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter 
            Dienste von Drittunternehmen innerhalb und außerhalb unserer Website.
          </p>
          <p>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies 
            informiert werden und Cookies nur im Einzelfall erlauben, Cookies für bestimmte 
            Fälle oder generell ausschließen sowie das automatische Löschen der Cookies 
            beim Schließen des Browsers aktivieren.
          </p>

          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so 
            genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
            Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 DSGVO Abs. 1 lit. f.
          </p>

          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
            dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
            Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
            sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur 
            Durchführung vorvertraglicher Maßnahmen erforderlich ist.
          </p>

          <h3>Anfrage per E-Mail, Telefon oder WhatsApp</h3>
          <p>
            Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage 
            inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) 
            zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
          </p>
          <p>
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung 
            erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
          </p>

          <h2>5. Soziale Medien</h2>

          <h3>Social-Media-Links</h3>
          <p>
            Auf unserer Website befinden sich Links zu unseren Profilen in sozialen Netzwerken. 
            Bei einem Klick auf diese Links werden Sie auf die jeweilige Internetseite des 
            Anbieters weitergeleitet. Erst wenn Sie die Internetseite des jeweiligen Anbieters 
            betreten, findet eine Datenübertragung an den Anbieter statt.
          </p>

          <h2>6. Plugins und Tools</h2>

          <h3>Google Web Fonts (lokales Hosting)</h3>
          <p>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte 
            Web Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal 
            installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
          </p>

          <h3>Google reCAPTCHA (optional)</h3>
          <p>
            Wir nutzen den Dienst „reCAPTCHA" (evtl. II) der Google Ireland Limited, 
            Gordon House, Barrow Street, Dublin 4, Irland („Google"). Die Nutzung dient 
            der Unterscheidung, ob die Eingabe durch einen Menschen oder durch ein 
            automatisiertes Programm erfolgt.
          </p>

          <h2>7. Werbung und Tracking</h2>

          <h3>Anzeigenplätze</h3>
          <p>
            Diese Website enthält Platzhalter für Werbeanzeigen. Diese Werbeplätze sind 
            derzeit noch nicht aktiv geschaltet. Bei einer zukünftigen Aktivierung werden 
            wir diese Datenschutzerklärung entsprechend aktualisieren und Sie über die 
            verwendeten Werbedienste informieren.
          </p>

          <h3>Consent Management</h3>
          <p>
            Wir verwenden ein Consent-Management-System (Einwilligungs-Verwaltung), das 
            Ihre Einwilligung zur Verwendung von Cookies und ähnlichen Technologien einholt 
            und speichert. Ihre Entscheidung wird lokal in Ihrem Browser gespeichert 
            (localStorage). Sie können Ihre Entscheidung jederzeit ändern.
          </p>

          <h2>8. Ihre Rechte</h2>

          <h3>Rechte der betroffenen Person</h3>
          <p>
            Wenn Ihre personenbezogenen Daten verarbeitet werden, sind Sie Betroffener 
            i.S.d. DSGVO und Sie haben folgende Rechte gegenüber dem Verantwortlichen:
          </p>
          <ul>
            <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO): Sie haben das Recht, 
            Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
            <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie haben das Recht, 
            unverzüglich die Berichtigung unrichtiger Daten zu verlangen.</li>
            <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO): Sie haben das Recht, 
            die Löschung Ihrer Daten zu verlangen, sofern die gesetzlichen Voraussetzungen 
            vorliegen.</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO): 
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
            <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie haben 
            das Recht, Ihre Daten in einem strukturierten Format zu erhalten.</li>
            <li><strong>Recht auf Widerspruch</strong> (Art. 21 DSGVO): Sie haben das Recht, 
            der Verarbeitung Ihrer Daten zu widersprechen.</li>
          </ul>

          <h3>Beschwerderecht bei einer Aufsichtsbehörde</h3>
          <p>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht 
            bei einer Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde für Berlin ist:
          </p>
          <div className="bg-muted/30 p-6 rounded-lg border mb-6">
            <p className="mb-0">
              Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
              Alt-Moabit 59-61<br />
              10555 Berlin<br />
              <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer" className="text-emerald-600">
                www.datenschutz-berlin.de
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            <strong>Kontakt für Datenschutzanfragen:</strong><br />
            E-Mail: <a href="mailto:reanthings@gmail.com" className="text-emerald-600">reanthings@gmail.com</a><br />
            Telefon/WhatsApp: <a href="tel:+923135651580" className="text-emerald-600">+92 313 565 1580</a>
          </p>
          <p className="mt-4">
            Stand: März 2025<br />
            Diese Datenschutzerklärung wurde mit dem Datenschutz-Generator von 
            <a href="https://www.e-recht24.de/" target="_blank" rel="noopener noreferrer" className="text-emerald-600"> eRecht24</a> erstellt und angepasst.
          </p>
          <p className="mt-4">
            <Link href="/" className="text-emerald-600 hover:underline">
              ← Zurück zur Startseite
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
