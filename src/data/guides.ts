// Guides Data for UmrechnerPro.de
// Comprehensive German articles for SEO and user value

export interface Guide {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  relatedCategories: string[];
  relatedPairs: Array<{ categorySlug: string; fromUnit: string; toUnit: string }>;
  content: {
    intro: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
    conclusion: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const guides: Guide[] = [
  {
    id: 'laengeneinheiten-erklaert',
    slug: 'laengeneinheiten-erklaert',
    title: 'Längeneinheiten erklärt: Meter, Zoll, Fuß und mehr',
    description: 'Umfassender Leitfaden zu allen Längeneinheiten. Erfahren Sie alles über Meter, Kilometer, Zoll, Fuß, Meilen und ihre Umrechnungen.',
    category: 'laenge',
    relatedCategories: ['laenge', 'flaeche'],
    relatedPairs: [
      { categorySlug: 'laenge', fromUnit: 'cm', toUnit: 'in' },
      { categorySlug: 'laenge', fromUnit: 'km', toUnit: 'mi' },
      { categorySlug: 'laenge', fromUnit: 'm', toUnit: 'ft' },
      { categorySlug: 'laenge', fromUnit: 'in', toUnit: 'cm' },
      { categorySlug: 'laenge', fromUnit: 'ft', toUnit: 'm' },
    ],
    content: {
      intro: 'Längeneinheiten sind fundamentale Maßeinheiten, die wir täglich in fast allen Bereichen des Lebens verwenden. Von der Angabe der Körpergröße über Entfernungsangaben im Straßenverkehr bis hin zu präzisen Messungen in der Industrie und Wissenschaft – das Verständnis von Längeneinheiten und ihrer Umrechnung ist essenziell. Dieser umfassende Leitfaden erklärt alle wichtigen Längeneinheiten, ihre Geschichte, Anwendungsbereiche und zeigt Ihnen, wie Sie sie korrekt umrechnen.',
      sections: [
        {
          title: 'Das metrische System',
          content: 'Das metrische System ist das weltweit am weitesten verbreitete Maßsystem für Längenangaben. Es wurde während der Französischen Revolution Ende des 18. Jahrhunderts entwickelt und basiert auf dem Meter als Grundeinheit. Der Meter wurde ursprünglich als der zehnmillionste Teil der Entfernung vom Nordpol zum Äquator definiert, die durch Paris verläuft. Heute ist der Meter durch die Lichtgeschwindigkeit definiert: Er entspricht der Strecke, die Licht im Vakuum in 1/299.792.458 Sekunden zurücklegt.\n\nDie wichtigsten metrischen Längeneinheiten sind:\n\n• Millimeter (mm): Ein Tausendstel Meter, verwendet für sehr kleine Messungen wie Dicke von Papier oder Drahtdurchmesser.\n• Zentimeter (cm): Ein Hundertstel Meter, gebräuchlich für Körpergrößen und kleinere Gegenstände.\n• Dezimeter (dm): Ein Zehntel Meter, selten verwendet, aber in einigen europäischen Ländern noch anzutreffen.\n• Meter (m): Die Basiseinheit, verwendet für Raumhöhen, Stofflängen und mittlere Entfernungen.\n• Kilometer (km): Tausend Meter, Standard für Straßenentfernungen und geografische Angaben.\n\nDie Umrechnung innerhalb des metrischen Systems ist besonders einfach, da sie auf Zehnerpotenzen basiert. Jede Einheit ist ein Vielfaches oder ein Bruchteil von 10 der nächsten Einheit.'
        },
        {
          title: 'Imperiale Einheiten: Zoll, Fuß, Yard und Meilen',
          content: 'Das imperiale System, auch angloamerikanisches Maßsystem genannt, wird vor allem in den USA und in abgewandelter Form im Vereinigten Königreich verwendet. Obwohl Großbritannien offiziell zum metrischen System übergegangen ist, werden imperiale Einheiten im Alltag noch häufig verwendet.\n\nDie wichtigsten imperialen Längeneinheiten sind:\n\n• Zoll (Inch, in): Die kleinste übliche Einheit, definiert als genau 2,54 cm. Zoll werden häufig für Bildschirmdiagonalen, Rohrdurchmesser und in der Technik verwendet.\n• Fuß (Foot, ft): 12 Zoll oder etwa 30,48 cm. Fuß werden für Körpergrößen (in den USA), Raumhöhen und Bauhöhen verwendet.\n• Yard (yd): 3 Fuß oder etwa 91,44 cm. Yard sind die Standard-Einheit für Golfplätze und American Football.\n• Meile (Mile, mi): 1760 Yard oder etwa 1,609 km. Meilen werden für Straßenentfernungen und Geschwindigkeiten in den USA und UK verwendet.\n\nDie Umrechnung zwischen imperialen Einheiten ist weniger intuitiv als im metrischen System, da sie nicht auf Zehnerpotenzen basiert. Die genauen Definitionen sind heute international festgelegt und auf metrische Einheiten zurückgeführt.'
        },
        {
          title: 'Nautische Maßeinheiten',
          content: 'In der Schifffahrt und Luftfahrt werden spezielle Maßeinheiten verwendet, die sich von den landbasierten Einheiten unterscheiden. Die wichtigste Einheit ist die Seemeile (Nautical Mile, nmi).\n\nEine Seemeile entspricht genau 1852 Metern oder etwa 1,15 Landmeilen. Sie wurde ursprünglich als eine Bogenminute auf einem Meridian definiert – also als der sechzigste Teil eines Grades auf dem Erdumfang. Diese Definition macht die Seemeile besonders praktisch für die Navigation, da sie direkt mit geografischen Koordinaten verknüpft ist.\n\nGeschwindigkeiten in der Seefahrt und Luftfahrt werden in Knoten (Knots, kn) angegeben. Ein Knoten entspricht einer Seemeile pro Stunde oder etwa 1,852 km/h. Diese Einheit ermöglicht es Navigatoren, Entfernungen und Zeiten direkt zu berechnen, ohne komplexe Umrechnungen durchführen zu müssen.'
        },
        {
          title: 'Wissenschaftliche und astronomische Einheiten',
          content: 'Für wissenschaftliche und astronomische Zwecke werden spezielle Längeneinheiten verwendet, die für die jeweiligen Skalengrößen geeignet sind.\n\n• Mikrometer (µm): Ein millionstel Meter, verwendet in der Biologie für Zellgrößen und in der Industrie für Präzisionsmessungen.\n• Nanometer (nm): Ein milliardstel Meter, wichtig in der Nanotechnologie und für Lichtwellenlängen.\n• Ångström (Å): Ein zehnmilliardstel Meter (0,1 nm), verwendet in der Kristallographie und Chemie.\n• Astronomische Einheit (AE): Entspricht etwa 149,6 Millionen Kilometern, der mittleren Entfernung Erde-Sonne.\n• Lichtjahr (lj): Die Strecke, die Licht in einem Jahr zurücklegt, etwa 9,46 Billionen Kilometer.\n• Parsec (pc): Etwa 3,26 Lichtjahre, eine astronomische Einheit für Sternentfernungen.\n\nDiese Einheiten zeigen, wie vielfältig Längenmessungen sein können – von der molekularen Ebene bis zu galaktischen Entfernungen.'
        },
        {
          title: 'Praktische Umrechnungstipps',
          content: 'Die Umrechnung zwischen verschiedenen Längeneinheiten erfordert Präzision, besonders in technischen Anwendungen. Hier sind die wichtigsten Umrechnungsfaktoren und Tipps:\n\nWichtige Umrechnungsfaktoren:\n• 1 Zoll = 2,54 cm (exakt)\n• 1 Fuß = 30,48 cm (exakt)\n• 1 Yard = 91,44 cm (exakt)\n• 1 Meile = 1,609344 km (exakt)\n• 1 Seemeile = 1,852 km (exakt)\n\nFaustformeln für schnelle Schätzungen:\n• cm in Zoll: Teilen durch 2,5 (z.B. 10 cm ≈ 4 Zoll)\n• km in Meilen: Multiplizieren mit 0,62 oder teilen durch 1,6\n• m in Fuß: Multiplizieren mit 3,3\n\nFür präzise Berechnungen sollten Sie immer die genauen Faktoren verwenden oder unseren Umrechner nutzen. Besonders bei technischen Anwendungen sind Rundungsfehler kritisch und können zu Problemen führen.'
        }
      ],
      conclusion: 'Das Verständnis von Längeneinheiten und ihrer Umrechnung ist in unserer globalisierten Welt unverzichtbar. Ob Sie mit internationalen Produkten arbeiten, technische Dokumentationen lesen oder einfach nur Ihre Körpergröße in verschiedenen Einheiten angeben möchten – die Beherrschung der Längenumrechnung erleichtert den Alltag erheblich. Nutzen Sie unseren Umrechner für schnelle und präzise Ergebnisse bei allen Ihren Längenumrechnungen.'
    },
    faq: [
      { question: 'Warum gibt es verschiedene Längeneinheiten?', answer: 'Verschiedene Kulturen und historische Entwicklungen haben zu unterschiedlichen Maßsystemen geführt. Das metrische System wurde wissenschaftlich entwickelt und ist heute internationaler Standard, während imperiale Einheiten aus historischen Traditionen entstanden sind.' },
      { question: 'Welches Maßsystem ist genauer?', answer: 'Beide Systeme sind gleich genau, da die Einheiten exakt definiert sind. Das metrische System ist jedoch einfacher zu verwenden, da die Umrechnungen auf Zehnerpotenzen basieren.' },
      { question: 'Warum verwenden die USA noch imperiale Einheiten?', answer: 'Historische Gründe und die hohen Kosten einer Umstellung haben dazu geführt, dass die USA am imperialen System festhalten. Es gibt jedoch Bestrebungen, zunehmend metrische Einheiten in Wissenschaft und Industrie zu verwenden.' },
      { question: 'Wie genau muss ich bei Umrechnungen sein?', answer: 'Für den Alltag reichen Faustformeln oft aus. Für technische Anwendungen, Medizin oder Wissenschaft sollten Sie immer die genauen Umrechnungsfaktoren verwenden.' },
      { question: 'Was ist der Unterschied zwischen US-Gallone und imperialer Gallone?', answer: 'Dies bezieht sich auf Volumeneinheiten, nicht Länge. Eine US-Gallone entspricht 3,785 Litern, eine imperiale (UK) Gallone 4,546 Litern.' },
      { question: 'Kann ich Zoll in mm umrechnen?', answer: 'Ja, ein Zoll entspricht genau 25,4 Millimetern. Multiplizieren Sie Zoll mit 25,4 für Millimeter.' }
    ]
  },
  {
    id: 'temperatur-umrechnen',
    slug: 'temperatur-umrechnen',
    title: 'Temperatur umrechnen: Celsius, Fahrenheit und Kelvin',
    description: 'Alles über Temperaturumrechnung. Lernen Sie die Formeln für Celsius, Fahrenheit und Kelvin und verstehen Sie die Zusammenhänge.',
    category: 'temperatur',
    relatedCategories: ['temperatur', 'energie'],
    relatedPairs: [
      { categorySlug: 'temperatur', fromUnit: 'c', toUnit: 'f' },
      { categorySlug: 'temperatur', fromUnit: 'f', toUnit: 'c' },
      { categorySlug: 'temperatur', fromUnit: 'c', toUnit: 'k' },
      { categorySlug: 'temperatur', fromUnit: 'k', toUnit: 'c' },
    ],
    content: {
      intro: 'Die Temperatur ist eine der wichtigsten physikalischen Größen in unserem Alltag. Sie bestimmt, wie wir uns kleiden, beeinflusst unsere Gesundheit und ist entscheidend für viele chemische und physikalische Prozesse. Die Temperaturumrechnung zwischen verschiedenen Skalen ist besonders deshalb interessant, weil – anders als bei Längen oder Gewichten – kein einfacher Umrechnungsfaktor existiert. Stattdessen werden mathematische Formeln benötigt, die auf den unterschiedlichen Nullpunkten und Skalenteilungen der Temperaturskalen beruhen.',
      sections: [
        {
          title: 'Die Celsius-Skala',
          content: 'Die Celsius-Skala, benannt nach dem schwedischen Astronomen Anders Celsius (1701-1744), ist die in Deutschland, Österreich und der Schweiz sowie in den meisten Ländern der Welt gebräuchliche Temperaturskala. Sie ist Teil des metrischen Systems und wurde ursprünglich durch zwei Fixpunkte definiert:\n\n• 0 °C: Gefrierpunkt von Wasser bei Normaldruck\n• 100 °C: Siedepunkt von Wasser bei Normaldruck\n\nDie Celsius-Skala ist somit in 100 gleiche Teile zwischen diesen beiden Punkten unterteilt. Diese einfache Definition macht sie besonders praktisch für den Alltag. Typische Temperaturwerte in Celsius sind:\n\n• Gefrierpunkt von Wasser: 0 °C\n• Raumtemperatur: ca. 20-22 °C\n• Körpertemperatur: ca. 37 °C\n• Siedepunkt von Wasser: 100 °C\n\nDie Celsius-Skala ist eng mit der Kelvin-Skala verknüpft: Ein Grad Celsius hat dieselbe Größe wie ein Kelvin, lediglich der Nullpunkt ist unterschiedlich.'
        },
        {
          title: 'Die Fahrenheit-Skala',
          content: 'Die Fahrenheit-Skala wurde vom deutschen Physiker Daniel Gabriel Fahrenheit (1686-1736) entwickelt und wird heute hauptsächlich in den USA verwendet. Sie hat eine interessante Entstehungsgeschichte mit ursprünglich drei Fixpunkten:\n\n• 0 °F: Die tiefste Temperatur, die Fahrenheit erreichen konnte (eine Mischung aus Eis, Wasser und Salmiak)\n• 32 °F: Gefrierpunkt von Wasser\n• 96 °F: Ursprünglich die Körpertemperatur (später auf 98,6 °F korrigiert)\n\nDie Fahrenheit-Skala ist feiner unterteilt als die Celsius-Skala: Ein Grad Fahrenheit entspricht etwa 0,56 Grad Celsius. Dies bedeutet, dass Temperaturunterschiede in Fahrenheit genauer angegeben werden können, ohne Nachkommastellen zu verwenden.\n\nTypische Temperaturwerte in Fahrenheit:\n• Gefrierpunkt von Wasser: 32 °F\n• Raumtemperatur: ca. 68-72 °F\n• Körpertemperatur: ca. 98,6 °F\n• Siedepunkt von Wasser: 212 °F'
        },
        {
          title: 'Die Kelvin-Skala',
          content: 'Die Kelvin-Skala ist die wissenschaftliche Basiseinheit für Temperatur im Internationalen Einheitensystem (SI). Sie wurde von dem britischen Physiker William Thomson, 1. Baron Kelvin (1824-1907), entwickelt.\n\nDas besondere Merkmal der Kelvin-Skala ist ihr absoluter Nullpunkt bei 0 K. Dies ist die tiefstmögliche Temperatur, bei der alle molekulare Bewegung zum Stillstand kommt. Der absolute Nullpunkt entspricht -273,15 °C oder -459,67 °F.\n\nDie Kelvin-Skala ist besonders wichtig für:\n• Wissenschaftliche Berechnungen\n• Thermodynamik\n• Physik und Chemie\n• Materialwissenschaften\n\nWichtige Temperaturwerte in Kelvin:\n• Absoluter Nullpunkt: 0 K\n• Gefrierpunkt von Wasser: 273,15 K\n• Raumtemperatur: ca. 293-295 K\n• Siedepunkt von Wasser: 373,15 K\n\nBeachten Sie, dass bei Kelvin kein Gradzeichen (°) verwendet wird – man schreibt "273 K", nicht "273 °K".'
        },
        {
          title: 'Umrechnungsformeln',
          content: 'Die Temperaturumrechnung erfordert spezifische Formeln, da die verschiedenen Skalen unterschiedliche Nullpunkte haben. Hier sind die wichtigsten Formeln:\n\nCelsius ↔ Fahrenheit:\n• °F = (°C × 9/5) + 32\n• °C = (°F - 32) × 5/9\n\nCelsius ↔ Kelvin:\n• K = °C + 273,15\n• °C = K - 273,15\n\nFahrenheit ↔ Kelvin:\n• K = (°F - 32) × 5/9 + 273,15\n• °F = (K - 273,15) × 9/5 + 32\n\nPraktische Eselsbrücken:\n• Celsius in Fahrenheit: Mit 1,8 multiplizieren und 32 addieren\n• Fahrenheit in Celsius: 32 abziehen und durch 1,8 teilen\n• Celsius in Kelvin: Einfach 273,15 addieren\n\nBeispielrechnung:\n25 °C in Fahrenheit: 25 × 1,8 + 32 = 77 °F\n77 °F in Celsius: (77 - 32) ÷ 1,8 = 25 °C'
        },
        {
          title: 'Anwendungsbereiche',
          content: 'Die Temperaturumrechnung ist in vielen Bereichen des täglichen Lebens und der Wissenschaft relevant:\n\nAlltag und Reisen:\n• Wettervorhersagen aus dem Ausland verstehen\n• Backofentemperaturen bei amerikanischen Rezepten\n• Klimaanlagen in Hotels einstellen\n• Pooltemperaturen auf Reisen\n\nMedizin:\n• Körpertemperatur-Messung (besonders wichtig bei Fieber)\n• Medikamentenlagerung\n• Laborwerte interpretieren\n\nWissenschaft und Technik:\n• Thermodynamische Berechnungen\n• Materialprüfung\n• Chemische Reaktionen\n• Physikalische Experimente\n\nIndustrie:\n• Lebensmittelverarbeitung\n• Metallverarbeitung\n• Klimatisierung\n• Qualitätskontrolle'
        }
      ],
      conclusion: 'Die Temperaturumrechnung ist ein faszinierendes Thema, das zeigt, wie unterschiedliche historische Entwicklungen und wissenschaftliche Anforderungen zu verschiedenen Maßsystemen geführt haben. Mit den richtigen Formeln und etwas Übung wird die Umrechnung zwischen Celsius, Fahrenheit und Kelvin zur zweiten Natur. Unser Temperatur-Umrechner hilft Ihnen dabei, schnell und präzise Ergebnisse zu erhalten – egal welche Einheiten Sie benötigen.'
    },
    faq: [
      { question: 'Warum gibt es verschiedene Temperaturskalen?', answer: 'Jede Skala wurde zu unterschiedlichen Zeiten und für unterschiedliche Zwecke entwickelt. Celsius für einfache Alltagstemperaturen, Fahrenheit für präzisere Messungen in kleineren Bereichen, und Kelvin für wissenschaftliche Anwendungen mit absolutem Nullpunkt.' },
      { question: 'Welche Skala ist die beste?', answer: 'Es gibt keine "beste" Skala. Celsius ist für den Alltag praktisch, Fahrenheit ermöglicht feinere Unterschiede ohne Nachkommastellen, und Kelvin ist für die Wissenschaft unverzichtbar.' },
      { question: 'Warum hat Fahrenheit so seltsame Zahlen?', answer: 'Die Fahrenheit-Skala wurde mit anderen Fixpunkten definiert als Celsius. Der Nullpunkt war die kälteste erreichbare Temperatur im 18. Jahrhundert, der Gefrierpunkt liegt bei 32 °F.' },
      { question: 'Kann es kälter als 0 Kelvin werden?', answer: 'Nein, 0 Kelvin ist der absolute Nullpunkt – die tiefstmögliche Temperatur im Universum. Bei dieser Temperatur bewegen sich keine Atome mehr.' },
      { question: 'Wie heiß ist die Sonne in Kelvin?', answer: 'Die Sonnenoberfläche hat etwa 5.500 bis 6.000 K. Im Kern der Sonne herrschen Temperaturen von etwa 15 Millionen K.' },
      { question: 'Warum verwendet man in den USA noch Fahrenheit?', answer: 'Historische Gründe und Gewohnheit. Eine Umstellung wäre teuer und aufwendig, da alle Messgeräte, Schilder und Dokumente geändert werden müssten.' }
    ]
  },
  {
    id: 'gewichtseinheiten-leitfaden',
    slug: 'gewichtseinheiten-leitfaden',
    title: 'Gewichtseinheiten: Kilogramm, Pfund, Unze und mehr',
    description: 'Umfassender Leitfaden zu Gewichtseinheiten. Erfahren Sie alles über Kilogramm, Gramm, Pfund, Unzen und ihre korrekte Umrechnung.',
    category: 'gewicht',
    relatedCategories: ['gewicht', 'volumen'],
    relatedPairs: [
      { categorySlug: 'gewicht', fromUnit: 'kg', toUnit: 'lb' },
      { categorySlug: 'gewicht', fromUnit: 'lb', toUnit: 'kg' },
      { categorySlug: 'gewicht', fromUnit: 'g', toUnit: 'oz' },
      { categorySlug: 'gewicht', fromUnit: 'oz', toUnit: 'g' },
    ],
    content: {
      intro: 'Gewichtseinheiten sind aus unserem täglichen Leben nicht wegzudenken. Vom Kauf von Lebensmitteln über die Angabe des Körpergewichts bis hin zu industriellen Wägungen – die korrekte Verwendung und Umrechnung von Gewichtseinheiten ist essenziell. In einer globalisierten Welt, in der wir mit Produkten und Informationen aus verschiedenen Ländern konfrontiert sind, wird die Umrechnung zwischen metrischen und imperialen Gewichtseinheiten immer wichtiger. Dieser Leitfaden erklärt alle wichtigen Gewichtseinheiten, ihre Geschichte und zeigt, wie Sie sie korrekt umrechnen.',
      sections: [
        {
          title: 'Das metrische Gewichts- und Massensystem',
          content: 'Das metrische System für Masse basiert auf dem Kilogramm als Basiseinheit. Das Kilogramm ist die einzige SI-Basiseinheit, die noch durch ein physikalisches Objekt definiert wurde – das Urkilogramm in Paris. Seit 2019 wird das Kilogramm jedoch über die Planck-Konstante definiert, was eine präzisere und reproduzierbarere Definition ermöglicht.\n\nDie wichtigsten metrischen Masseneinheiten sind:\n\n• Milligramm (mg): Ein tausendstel Gramm, verwendet für Medikamente und kleine Mengen.\n• Gramm (g): Die Basiseinheit für kleine Mengen, typisch für Lebensmittel.\n• Kilogramm (kg): Tausend Gramm, die Standard-Einheit für Körpergewicht und größere Mengen.\n• Tonne (t): Tausend Kilogramm, verwendet für Fahrzeuge, Schiffe und große Mengen.\n\nDie Umrechnung ist einfach: Jede Einheit ist ein Vielfaches von 1000 der nächstkleineren Einheit. Ein Kilogramm entspricht 1000 Gramm, ein Gramm entspricht 1000 Milligramm.'
        },
        {
          title: 'Imperiale Gewichtseinheiten',
          content: 'Imperiale Gewichtseinheiten werden vor allem in den USA und in Teilen des Vereinigten Königreichs verwendet. Die wichtigsten Einheiten sind:\n\n• Unze (Ounce, oz): Etwa 28,35 Gramm. Wird für kleine Mengen verwendet, besonders bei Lebensmitteln und Edelmetallen.\n• Pfund (Pound, lb): Etwa 453,6 Gramm oder 16 Unzen. Die Standard-Einheit für Körpergewicht in den USA.\n• Stone (st): 14 Pfund oder etwa 6,35 kg. Wird im UK für Körpergewicht verwendet.\n• Short Ton: 2000 Pfund oder etwa 907 kg, verwendet in den USA.\n• Long Ton: 2240 Pfund oder etwa 1016 kg, verwendet im UK.\n\nDie Abkürzung "lb" für Pfund kommt vom lateinischen "libra" (Waage). "oz" für Unze kommt vom italienischen "onza".'
        },
        {
          title: 'Spezielle Gewichtseinheiten',
          content: 'Neben den Standard-Einheiten gibt es spezielle Gewichtseinheiten für bestimmte Anwendungen:\n\n• Karat (ct): 0,2 Gramm, verwendet für Edelsteine und Perlen. Nicht zu verwechseln mit der Goldlegierung, wo Karat den Reinheitsgrad angibt (24 Karat = reines Gold).\n\n• Gran (Grain, gr): Etwa 64,8 Milligramm, eine sehr alte Einheit, die noch bei Schießpulver, Pfeilgewichten und einigen Medikamenten verwendet wird.\n\n• Dram: Etwa 1,77 Gramm, eine historische Einheit, die heute kaum noch verwendet wird.\n\n• Troy Unze: Etwa 31,1 Gramm, verwendet für Edelmetalle wie Gold und Silber. Unterscheidet sich von der normalen Unze!\n\n• Hundredweight (cwt): Im US-System etwa 45,36 kg, im UK-System etwa 50,8 kg.\n\nDiese speziellen Einheiten sind besonders in Nischenanwendungen wichtig und sollten nicht mit den Standard-Einheiten verwechselt werden.'
        },
        {
          title: 'Umrechnungsfaktoren und Praxis',
          content: 'Die genauen Umrechnungsfaktoren zwischen metrischen und imperialen Einheiten sind international festgelegt:\n\nWichtige Umrechnungsfaktoren:\n• 1 lb = 0,45359237 kg (exakt)\n• 1 oz = 28,349523125 g (exakt)\n• 1 kg = 2,20462262 lb\n• 1 kg = 35,2739619 oz\n• 1 st = 6,35029318 kg\n\nPraktische Faustformeln:\n• Pfund in kg: Teilen durch 2,2 (Beispiel: 100 lb ≈ 45,5 kg)\n• kg in Pfund: Multiplizieren mit 2,2 (Beispiel: 50 kg ≈ 110 lb)\n• Unze in Gramm: Multiplizieren mit 28 (Beispiel: 2 oz ≈ 56 g)\n\nAnwendungsbeispiele:\n• Rezepte: US-Rezepte verwenden oft "cups" und "oz"\n• Körpergewicht: Umrechnung von kg in lb für internationale Standards\n• Versand: Gewichtsberechnung für internationale Pakete\n• Einkauf: Preisvergleich von Produkten mit verschiedenen Gewichtseinheiten'
        },
        {
          title: 'Gewicht vs. Masse',
          content: 'Ein wichtiger wissenschaftlicher Unterschied besteht zwischen Gewicht und Masse. Im Alltag werden die Begriffe oft synonym verwendet, aber physikalisch gesehen sind sie unterschiedlich:\n\nMasse ist eine fundamentale Eigenschaft eines Objekts und gibt die Menge der Materie an. Sie ist unabhängig vom Ort konstant. Die SI-Einheit ist das Kilogramm.\n\nGewicht (genauer: Gewichtskraft) ist die Kraft, die die Schwerkraft auf eine Masse ausübt. Sie ist abhängig vom Standort (anders auf der Erde als auf dem Mond). Die SI-Einheit ist das Newton.\n\nDer Zusammenhang ist: Gewichtskraft = Masse × Erdbeschleunigung\n\nAuf der Erde wiegt 1 kg etwa 9,81 Newton. Im Alltag ignorieren wir diesen Unterschied und verwenden "Gewicht" für die Masse, was für die meisten Anwendungen ausreichend genau ist.'
        }
      ],
      conclusion: 'Die Beherrschung von Gewichtseinheiten und ihrer Umrechnung ist in unserer globalisierten Welt unverzichtbar. Ob Sie internationale Rezepte nachkochen, mit Produkten aus verschiedenen Ländern arbeiten oder einfach Ihr Körpergewicht in verschiedenen Einheiten verfolgen möchten – das Verständnis der Gewichtsumrechnung erleichtert den Alltag erheblich. Nutzen Sie unseren Gewichtsumrechner für schnelle und präzise Ergebnisse.'
    },
    faq: [
      { question: 'Was ist der Unterschied zwischen Gewicht und Masse?', answer: 'Masse ist die Materiemenge und ortsunabhängig (kg). Gewicht ist die Kraft, die die Schwerkraft auf die Masse ausübt (Newton). Im Alltag werden beide Begriffe synonym verwendet.' },
      { question: 'Warum ist eine Troy-Unze anders als eine normale Unze?', answer: 'Die Troy-Unze (ca. 31,1 g) wird für Edelmetalle verwendet und ist etwas schwerer als die normale Unze (ca. 28,35 g). Historisch haben sich unterschiedliche Einheiten für verschiedene Anwendungen entwickelt.' },
      { question: 'Was bedeutet "lb" als Abkürzung?', answer: 'lb kommt vom lateinischen "libra", was Waage oder Pfund bedeutet. Diese Abkürzung wird international für das Pfund verwendet.' },
      { question: 'Wie rechne ich Stone in Kilogramm um?', answer: 'Ein Stone entspricht 14 Pfund oder etwa 6,35 kg. Multiplizieren Sie Stone mit 6,35 für Kilogramm. Beispiel: 10 st = 63,5 kg.' },
      { question: 'Warum gibt es verschiedene Tonnen-Definitionen?', answer: 'Die metrische Tonne (1000 kg) ist Standard in Europa. Die US-Short-Ton (907 kg) und UK-Long-Ton (1016 kg) basieren auf Pfund mit unterschiedlichen Definitionen.' },
      { question: 'Kann ich Gewicht und Volumen umrechnen?', answer: 'Nicht direkt – Gewicht und Volumen sind unterschiedliche Größen. Die Umrechnung erfordert die Dichte des Materials. Wasser: 1 Liter = 1 Kilogramm (bei 4°C).' }
    ]
  },
  {
    id: 'geschwindigkeit-umrechnen',
    slug: 'geschwindigkeit-umrechnen',
    title: 'Geschwindigkeit umrechnen: km/h, mph, Knoten und mehr',
    description: 'Kompletter Leitfaden zur Geschwindigkeitsumrechnung. Verstehen Sie km/h, mph, Knoten und m/s und lernen Sie die Umrechnungen.',
    category: 'geschwindigkeit',
    relatedCategories: ['geschwindigkeit', 'laenge', 'zeit'],
    relatedPairs: [
      { categorySlug: 'geschwindigkeit', fromUnit: 'kmh', toUnit: 'mph' },
      { categorySlug: 'geschwindigkeit', fromUnit: 'mph', toUnit: 'kmh' },
      { categorySlug: 'geschwindigkeit', fromUnit: 'kn', toUnit: 'kmh' },
      { categorySlug: 'geschwindigkeit', fromUnit: 'mps', toUnit: 'kmh' },
    ],
    content: {
      intro: 'Geschwindigkeit ist eine abgeleitete physikalische Größe, die angibt, wie schnell sich ein Objekt bewegt. Sie wird als Strecke pro Zeit gemessen und ist aus dem Alltag nicht wegzudenken – von der Tachoanzeige im Auto über Windgeschwindigkeiten bis hin zu wissenschaftlichen Berechnungen. Die verschiedenen Einheiten für Geschwindigkeit haben sich je nach Anwendungsbereich und Region entwickelt. Dieser Leitfaden erklärt alle wichtigen Geschwindigkeitseinheiten und zeigt, wie Sie sie korrekt umrechnen.',
      sections: [
        {
          title: 'Kilometer pro Stunde (km/h)',
          content: 'Kilometer pro Stunde ist die gebräuchlichste Geschwindigkeitseinheit in Deutschland, Österreich, der Schweiz und den meisten anderen Ländern der Welt für Straßenverkehr und alltägliche Anwendungen.\n\nDie Einheit ist selbsterklärend: Ein km/h bedeutet, dass ein Objekt in einer Stunde einen Kilometer zurücklegt.\n\nTypische Geschwindigkeiten:\n• Fußgänger: ca. 5 km/h\n• Fahrrad: ca. 15-25 km/h\n• Stadtverkehr: 30-50 km/h\n• Autobahn: 100-130 km/h (Richtgeschwindigkeit in Deutschland)\n• Hochgeschwindigkeitszug: 250-350 km/h\n• Flugzeug: 800-900 km/h\n\nDie Umrechnung in die SI-Basiseinheit ist einfach:\n1 km/h = 0,27778 m/s (Meter pro Sekunde)\n1 m/s = 3,6 km/h'
        },
        {
          title: 'Meilen pro Stunde (mph)',
          content: 'Meilen pro Stunde ist die Standard-Geschwindigkeitseinheit in den USA, im Vereinigten Königreich und einigen anderen Ländern, die das imperiale System verwenden.\n\nEine Landmeile entspricht 1609,344 Metern. Daher:\n1 mph = 1,609344 km/h\n1 km/h = 0,621371 mph\n\nTypische Geschwindigkeiten in den USA:\n• Stadtgebiet: 25-35 mph (40-56 km/h)\n• Landstraße: 55-65 mph (88-105 km/h)\n• Interstate Highway: 65-80 mph (105-129 km/h)\n\nPraktische Faustformel:\n• km/h in mph: Teilen durch 1,6 oder multiplizieren mit 0,62\n• mph in km/h: Multiplizieren mit 1,6\n\nBeispiel: 100 km/h ≈ 62 mph'
        },
        {
          title: 'Knoten (kn)',
          content: 'Knoten ist die Standard-Geschwindigkeitseinheit in der Seefahrt und Luftfahrt. Ein Knoten entspricht einer Seemeile pro Stunde.\n\nDa eine Seemeile 1852 Meter entspricht:\n1 kn = 1,852 km/h = 0,51444 m/s\n\nDie Bezeichnung "Knoten" hat einen historischen Ursprung: Früher wurde ein Baumstamm mit einem Seil ins Wasser geworfen. Das Seil hatte in regelmäßigen Abständen Knoten. Die Anzahl der Knoten, die in einer bestimmten Zeit abliefen, entsprach der Geschwindigkeit.\n\nAnwendungen:\n• Schifffahrt: Frachtschiffe 15-25 kn, Segelschiffe 5-15 kn\n• Luftfahrt: Verkehrsflugzeuge 450-550 kn\n• Windstärken (Beaufort-Skala): angegeben in Knoten\n• Yachtsport: Regatten und Segelbedingungen\n\nKnoten sind besonders praktisch für die Navigation, da sie direkt mit Seemeilen und geografischen Koordinaten verknüpft sind.'
        },
        {
          title: 'Meter pro Sekunde (m/s)',
          content: 'Meter pro Sekunde ist die SI-Basiseinheit für Geschwindigkeit und wird vor allem in der Wissenschaft verwendet. Sie ermöglicht direkte Berechnungen ohne Umrechnungsfaktoren.\n\nUmrechnungen:\n• 1 m/s = 3,6 km/h\n• 1 m/s = 2,237 mph\n• 1 m/s = 1,944 kn\n\nTypische Anwendungen:\n• Physik: Bewegungslehre, Mechanik\n• Meteorologie: Windgeschwindigkeiten\n• Sport: Sprint-Geschwindigkeiten\n• Technik: Förderbänder, Maschinen\n\nBeispiele aus dem Alltag:\n• Gehen: ca. 1,4 m/s (5 km/h)\n• Sprinten: ca. 10 m/s (36 km/h) – Weltrekord über 100m\n• Schallgeschwindigkeit: 343 m/s (1235 km/h) bei 20°C\n• Lichtgeschwindigkeit: 299.792.458 m/s'
        },
        {
          title: 'Mach und Überschall',
          content: 'Mach ist eine dimensionslose Einheit, die das Verhältnis einer Geschwindigkeit zur Schallgeschwindigkeit angibt. Benannt nach dem österreichischen Physiker Ernst Mach.\n\nMach 1 = Schallgeschwindigkeit\n• Bei Meereshöhe und 20°C: ca. 1235 km/h oder 343 m/s\n• In großer Höhe (kälter): niedriger\n• Bei höheren Temperaturen: höher\n\nBeispiele:\n• Verkehrsflugzeug: Mach 0,78-0,85 (ca. 900 km/h)\n• Überschallflugzeug: Mach 2-3\n• Concorde (ehemals): Mach 2,04\n• Raumfähre beim Wiedereintritt: Mach 25\n\nDie Schallgeschwindigkeit ist abhängig von:\n• Temperatur (wichtiger Faktor)\n• Medium (Luft, Wasser, Stahl)\n• Höhe (indirekt über Temperatur)'
        }
      ],
      conclusion: 'Die Geschwindigkeitsumrechnung ist ein wichtiges Thema für Autofahrer, Reisende, Sportler und Wissenschaftler. Das Verständnis der verschiedenen Einheiten und ihrer Umrechnung hilft, Geschwindigkeitsangaben weltweit zu verstehen und korrekt zu interpretieren. Unser Geschwindigkeitsrechner ermöglicht schnelle und präzise Umrechnungen zwischen allen gängigen Einheiten.'
    },
    faq: [
      { question: 'Wie schnell ist 100 km/h in mph?', answer: '100 km/h entsprechen etwa 62 mph. Die genaue Umrechnung ist: 100 km/h ÷ 1,609 = 62,14 mph.' },
      { question: 'Warum werden Knoten in der Luftfahrt verwendet?', answer: 'Knoten sind direkt mit Seemeilen verknüpft, was die Navigation erleichtert. Eine Seemeile entspricht einer Bogenminute auf dem Globus.' },
      { question: 'Wie schnell ist Mach 1?', answer: 'Mach 1 entspricht der Schallgeschwindigkeit. Bei Meereshöhe und 20°C sind das etwa 1235 km/h oder 343 m/s. Die genaue Geschwindigkeit hängt von Temperatur und Höhe ab.' },
      { question: 'Was ist schneller: 100 mph oder 100 km/h?', answer: '100 mph sind schneller. 100 mph entsprechen etwa 161 km/h, während 100 km/h nur etwa 62 mph entsprechen.' },
      { question: 'Wie rechne ich m/s in km/h um?', answer: 'Multiplizieren Sie m/s mit 3,6 für km/h. Beispiel: 10 m/s × 3,6 = 36 km/h. Umgekehrt: km/h ÷ 3,6 = m/s.' },
      { question: 'Was ist die höchste Geschwindigkeit im Universum?', answer: 'Die Lichtgeschwindigkeit im Vakuum beträgt 299.792 km/s oder 1.079.252.849 km/h. Sie ist die höchstmögliche Geschwindigkeit im Universum.' }
    ]
  },
  {
    id: 'druck-einheiten-erklaert',
    slug: 'druck-einheiten-erklaert',
    title: 'Druckeinheiten erklärt: Bar, PSI, Pascal und mehr',
    description: 'Alles über Druckeinheiten. Erfahren Sie alles über Bar, PSI, Pascal, Atmosphäre und ihre Umrechnungen für Reifen, Wetter und Technik.',
    category: 'druck',
    relatedCategories: ['druck', 'energie'],
    relatedPairs: [
      { categorySlug: 'druck', fromUnit: 'bar', toUnit: 'psi' },
      { categorySlug: 'druck', fromUnit: 'psi', toUnit: 'bar' },
      { categorySlug: 'druck', fromUnit: 'atm', toUnit: 'bar' },
      { categorySlug: 'druck', fromUnit: 'mmhg', toUnit: 'kpa' },
    ],
    content: {
      intro: 'Druck ist eine physikalische Größe, die in vielen Bereichen unseres Lebens wichtig ist – vom Reifendruck am Auto über Wettervorhersagen bis hin zu technischen Anwendungen. Druck wird als Kraft pro Fläche definiert und hat daher verschiedene Einheiten, die je nach Anwendungsbereich verwendet werden. Die Vielfalt der Druckeinheiten kann verwirrend sein, aber mit dem richtigen Verständnis werden die Umrechnungen einfach. Dieser Leitfaden erklärt alle wichtigen Druckeinheiten und ihre Anwendungen.',
      sections: [
        {
          title: 'Pascal und SI-Einheiten',
          content: 'Das Pascal (Pa) ist die SI-Basiseinheit für Druck. Es ist definiert als ein Newton pro Quadratmeter (N/m²).\n\nDas Pascal ist eine sehr kleine Einheit:\n• 1 Pa = 1 N/m²\n• 1 Pa = 0,01 mbar\n• 1 Pa = 0,00001 bar\n\nAus praktischen Gründen werden oft Vielfache verwendet:\n• Hektopascal (hPa): 100 Pa, Standard in der Meteorologie\n• Kilopascal (kPa): 1000 Pa, häufig in der Technik\n• Megapascal (MPa): 1.000.000 Pa, für hohe Drücke\n\nDer normale Luftdruck auf Meereshöhe beträgt etwa 101.325 Pa oder 1013,25 hPa. Dies zeigt, dass das Pascal für alltägliche Drücke recht kleine Zahlen liefert.'
        },
        {
          title: 'Bar und Millibar',
          content: 'Das Bar ist eine praktische Einheit, die etwa dem normalen Luftdruck entspricht. Sie ist besonders in Europa weit verbreitet.\n\nWichtige Beziehungen:\n• 1 bar = 100.000 Pa = 100 kPa\n• 1 bar = 1000 mbar\n• 1 bar = 14,504 psi\n\nDer Name "Bar" kommt vom griechischen "báros" für Gewicht.\n\nAnwendungen:\n• Reifendruck PKW: 2,0-2,5 bar\n• Reifendruck Fahrrad: 3-6 bar\n• Tauchflaschen: 200-300 bar\n• Gasflaschen: bis 300 bar\n• Wetter: Luftdruck in mbar oder hPa\n\nMillibar (mbar) und Hektopascal (hPa) sind identisch und werden in der Meteorologie verwendet.'
        },
        {
          title: 'PSI (Pound per Square Inch)',
          content: 'PSI ist die gebräuchlichste Druckeinheit in den USA und wird auch in anderen Ländern für bestimmte Anwendungen verwendet.\n\nDefinition:\n• 1 psi = 1 Pfund-Kraft pro Quadratzoll\n• 1 psi = 6.894,76 Pa\n• 1 psi = 0,06895 bar\n\nUmrechnungen:\n• bar in psi: mit 14,504 multiplizieren\n• psi in bar: durch 14,504 teilen\n\nAnwendungen:\n• Reifendruck US-Autos: 30-35 psi\n• Autoreifen typisch: 29-36 psi = 2,0-2,5 bar\n• Fahrradreifen: 50-100+ psi\n• Paintball: 800-850 psi\n• Tauchausrüstung: 3000 psi\n\nIn Deutschland werden Reifendruckangaben oft in bar gemacht, aber PSI-Werte sind auf vielen Reifen und in der Fachliteratur zu finden.'
        },
        {
          title: 'Atmosphäre und mmHg',
          content: 'Die Atmosphäre (atm) und mmHg sind ältere Einheiten, die in bestimmten Bereichen noch verwendet werden.\n\nAtmosphäre (atm):\n• 1 atm = 101.325 Pa = 1,01325 bar\n• Definiert als der durchschnittliche Luftdruck auf Meereshöhe\n• Wird noch in der Chemie und Thermodynamik verwendet\n\nmmHg (Millimeter Quecksilbersäule):\n• 1 mmHg = 133,322 Pa = 1,3158 mbar\n• Historisch: Höhe einer Quecksilbersäule, die der Luftdruck hält\n• Wird heute noch bei Blutdruckmessungen verwendet\n• Normaler Blutdruck: 120/80 mmHg\n\nTorr:\n• Fast identisch mit mmHg\n• 1 Torr = 133,322 Pa\n• Benannt nach Evangelista Torricelli\n\ninHg (Zoll Quecksilbersäule):\n• Wird in den USA für Wetterberichte verwendet\n• 1 inHg = 3386,39 Pa'
        },
        {
          title: 'Praktische Anwendungen',
          content: 'Druckmessungen sind in vielen Bereichen wichtig:\n\nKfz-Technik:\n• Reifendruck regelmäßig prüfen (empfohlen: alle 2 Wochen)\n• Angabe im Tankdeckel oder auf der B-Säule\n• Typisch: 2,0-2,5 bar oder 29-36 psi\n• Wichtig: Bei Beladung höherer Druck\n\nMedizin:\n• Blutdruck: 120/80 mmHg ist normal\n• Sauerstoffflaschen: 200 bar\n• Beatmungsgeräte: 30-50 mbar\n\nWetter:\n• Normaldruck: 1013 hPa/mbar\n• Hochdruck: > 1015 hPa (schönes Wetter)\n• Tiefdruck: < 1010 hPa (Schlechtwetter)\n\nTauchen:\n• Alle 10 Meter Tiefe: +1 bar\n• Sporttauchen: bis ca. 40 m (5 bar)\n• Dekompressionstabellen beachten\n\nIndustrie:\n• Hydraulik: 200-400 bar\n• Dampfkessel: 10-20 bar\n• Druckluft: 6-10 bar'
        }
      ],
      conclusion: 'Die Vielfalt der Druckeinheiten spiegelt die verschiedenen Anwendungsbereiche wider – von der Meteorologie über die Medizin bis zur Technik. Das Verständnis dieser Einheiten und ihrer Umrechnung ist für viele Berufe und auch im Alltag wichtig. Nutzen Sie unseren Druckrechner für schnelle und präzise Umrechnungen zwischen allen gängigen Einheiten.'
    },
    faq: [
      { question: 'Wie rechne ich bar in psi um?', answer: 'Multiplizieren Sie bar mit 14,504 für psi. Beispiel: 2 bar × 14,504 = 29,01 psi. Umgekehrt: psi ÷ 14,504 = bar.' },
      { question: 'Welcher Reifendruck ist richtig?', answer: 'Der korrekte Reifendruck steht im Handbuch, auf einem Aufkleber im Tankdeckel oder an der B-Säule. Typisch für PKW: 2,0-2,5 bar oder 29-36 psi.' },
      { question: 'Was bedeutet mmHg beim Blutdruck?', answer: 'mmHg (Millimeter Quecksilbersäule) ist die Einheit für Blutdruck. 120/80 mmHg gilt als normaler Wert. Der erste Wert ist der systolische, der zweite der diastolische Druck.' },
      { question: 'Was ist der Unterschied zwischen mbar und hPa?', answer: 'Es gibt keinen Unterschied: 1 mbar = 1 hPa = 100 Pascal. Beide Einheiten werden in der Meteorologie verwendet.' },
      { question: 'Wie viel bar hat eine Tauchflasche?', answer: 'Sporttauchflaschen haben meist 200 bar. Bei 300 bar Füllung ist die Tauchzeit länger. Der Druck muss in der Tauchplanung berücksichtigt werden.' },
      { question: 'Was ist ein Normaldruck?', answer: 'Der Normaldruck (Standardatmosphäre) ist 1013,25 hPa oder 1,01325 bar. Dies entspricht dem durchschnittlichen Luftdruck auf Meereshöhe.' }
    ]
  },
  {
    id: 'dichte-erklaert',
    slug: 'dichte-erklaert',
    title: 'Dichte erklärt: kg/m³, g/cm³ und ihre Bedeutung',
    description: 'Umfassender Leitfaden zur Dichte. Erfahren Sie alles über Dichteeinheiten, typische Werte und praktische Anwendungen in Wissenschaft und Alltag.',
    category: 'dichte',
    relatedCategories: ['dichte', 'gewicht', 'volumen'],
    relatedPairs: [
      { categorySlug: 'dichte', fromUnit: 'kg_m3', toUnit: 'g_cm3' },
      { categorySlug: 'dichte', fromUnit: 'g_cm3', toUnit: 'kg_m3' },
      { categorySlug: 'dichte', fromUnit: 'lb_ft3', toUnit: 'kg_m3' },
    ],
    content: {
      intro: 'Die Dichte ist eine fundamentale physikalische Größe, die das Verhältnis von Masse zu Volumen beschreibt. Sie ist entscheidend für das Verständnis vieler Phänomene – von warum Schiffe schwimmen bis zur Identifikation von Materialien. In der Wissenschaft, Industrie und im Alltag spielt die Dichte eine zentrale Rolle. Dieser Leitfaden erklärt die Dichte, ihre Einheiten und zeigt praktische Anwendungen.',
      sections: [
        {
          title: 'Was ist Dichte?',
          content: 'Die Dichte (Formelzeichen: ρ, griechisch "rho") ist definiert als Masse pro Volumen:\n\nρ = m / V\n\nDichte gibt an, wie viel Masse in einem bestimmten Volumen enthalten ist. Ein Material mit hoher Dichte hat viel Masse auf wenig Raum, ein Material mit niedriger Dichte ist "leicht" im Verhältnis zu seinem Volumen.\n\nEinheiten:\n• SI-Einheit: Kilogramm pro Kubikmeter (kg/m³)\n• Praktisch: Gramm pro Kubikzentimeter (g/cm³) oder Gramm pro Milliliter (g/ml)\n• Imperial: Pound pro Kubikfuß (lb/ft³)\n\nDie Dichte ist materialspezifisch und bei gegebenem Druck und Temperatur konstant. Das macht sie nützlich zur Materialidentifikation.'
        },
        {
          title: 'Typische Dichtewerte',
          content: 'Dichtewerte wichtiger Materialien (bei 20°C, 1 bar):\n\nGase (sehr niedrige Dichte):\n• Luft: 1,225 kg/m³ = 0,001225 g/cm³\n• Helium: 0,1785 kg/m³\n• CO₂: 1,84 kg/m³\n\nFlüssigkeiten:\n• Wasser (4°C): 1000 kg/m³ = 1 g/cm³\n• Meerwasser: 1025 kg/m³\n• Öl: 800-950 kg/m³\n• Ethanol: 789 kg/m³\n• Quecksilber: 13.546 kg/m³\n\nFeststoffe:\n• Eis: 917 kg/m³\n• Holz (Eiche): 600-900 kg/m³\n• Aluminium: 2700 kg/m³\n• Stahl: 7850 kg/m³\n• Blei: 11.340 kg/m³\n• Gold: 19.300 kg/m³\n• Osmium (dichtester Stoff): 22.590 kg/m³'
        },
        {
          title: 'Dichte und Auftrieb',
          content: 'Die Dichte ist entscheidend für das Schwimmen und Sinken:\n\nArchimedisches Prinzip:\nEin Körper schwimmt, wenn seine Dichte kleiner ist als die des umgebenden Mediums. Er sinkt, wenn seine Dichte größer ist.\n\nBeispiele:\n• Stahlschiff schwimmt: Der Rumpf hat durch den Hohlraum eine geringere Gesamtdichte als Wasser\n• Eis schwimmt auf Wasser: Dichte 917 kg/m³ < 1000 kg/m³\n• Stein sinkt: Dichte meist > 2000 kg/m³\n\nAuftriebskraft = Dichte des Mediums × Volumen des verdrängten Mediums × Erdbeschleunigung\n\nDie Dichte von Wasser ist besonders: Eis hat eine geringere Dichte als flüssiges Wasser. Dies ist ungewöhnlich und lebenswichtig für Ökosysteme in Seen und Meeren.'
        },
        {
          title: 'Einheiten umrechnen',
          content: 'Wichtige Umrechnungsfaktoren:\n\nMetrische Einheiten:\n• 1 g/cm³ = 1000 kg/m³\n• 1 g/ml = 1000 kg/m³\n• 1 kg/l = 1000 kg/m³\n• 1 mg/ml = 1 kg/m³\n\nImperiale Einheiten:\n• 1 lb/ft³ = 16,018 kg/m³\n• 1 lb/gal (US) = 119,83 kg/m³\n• 1 oz/in³ = 1729,99 kg/m³\n\nPraktische Tipps:\n• Wasser hat die Dichte 1 g/cm³ oder 1000 kg/m³\n• Die Dichte von Wasser ist ein guter Referenzwert\n• Bei Flüssigkeiten wird oft g/ml verwendet\n• Bei Gasen wird fast immer kg/m³ verwendet'
        },
        {
          title: 'Praktische Anwendungen',
          content: 'Die Dichte hat vielfältige praktische Anwendungen:\n\nMaterialkunde:\n• Identifikation unbekannter Stoffe\n• Qualitätskontrolle in der Produktion\n• Reinheitsprüfung von Materialien\n\nChemie:\n• Konzentrationsberechnungen\n• Mischungsrechnungen\n• Dichtemessung mit Aräometer\n\nBauwesen:\n• Betonrezeptur\n• Lastberechnungen\n• Materialauswahl\n\nAlltag:\n• Salzwasser ist dichter als Süßwasser (einfacher Schwimmen im Meer)\n• Öl schwimmt auf Wasser (Ölunfälle)\n• Heißluftballone nutzen Dichteunterschiede\n\nMessung:\n• Pyknometer: exakte Volumenbestimmung\n• Aräometer: Dichtemessung von Flüssigkeiten\n• Schwingungsmessgeräte: digitale Dichtemessung'
        }
      ],
      conclusion: 'Die Dichte ist eine fundamentale Größe, die viele Phänomene in unserer Welt erklärt – vom Schwimmen über Materialidentifikation bis zu Konzentrationsberechnungen. Das Verständnis der Dichte und ihrer Einheiten ist für viele Berufe und auch im Alltag nützlich. Nutzen Sie unseren Dichte-Umrechner für schnelle und präzise Umrechnungen.'
    },
    faq: [
      { question: 'Warum schwimmt Eis auf Wasser?', answer: 'Eis hat eine Dichte von 917 kg/m³, Wasser 1000 kg/m³. Wasser dehnt sich beim Gefrieren aus, wodurch Eis leichter wird. Dies ist ein Sonderfall – die meisten Stoffe werden beim Erstarren dichter.' },
      { question: 'Welche Dichte hat Gold?', answer: 'Gold hat eine Dichte von etwa 19.300 kg/m³ oder 19,3 g/cm³. Das ist fast 20-mal so viel wie Wasser. Diese hohe Dichte macht Gold sehr schwer für seine Größe.' },
      { question: 'Wie messe ich die Dichte?', answer: 'Bei Festkörpern: Masse wiegen, Volumen berechnen oder verdrängtes Wasser messen. Bei Flüssigkeiten: Aräometer oder Pyknometer verwenden. Formel: Dichte = Masse / Volumen.' },
      { question: 'Warum schwimmen Schiffe aus Stahl?', answer: 'Obwohl Stahl sehr dicht ist (7850 kg/m³), hat ein Schiff durch den hohlen Rumpf eine geringere Gesamtdichte als Wasser. Die verdrängte Wassermenge wiegt mehr als das gesamte Schiff.' },
      { question: 'Hängt die Dichte von der Temperatur ab?', answer: 'Ja, meistens sinkt die Dichte bei Erwärmung, da sich Stoffe ausdehnen. Wasser ist eine Ausnahme: Es hat bei 4°C die höchste Dichte, bei tieferen Temperaturen dehnt es sich wieder aus.' },
      { question: 'Was ist spezifisches Gewicht?', answer: 'Spezifisches Gewicht ist die Dichte bezogen auf die Dichte von Wasser (dimensionslos). Ein spezifisches Gewicht von 2 bedeutet, der Stoff ist doppelt so dicht wie Wasser.' }
    ]
  },
  {
    id: 'kraft-und-newton',
    slug: 'kraft-und-newton',
    title: 'Kraft verstehen: Newton, Kilogramm-Kraft und mehr',
    description: 'Alles über Krafteinheiten verstehen. Lernen Sie die Bedeutung von Newton, Kilogramm-Kraft und Pound-Force mit praktischen Beispielen.',
    category: 'kraft',
    relatedCategories: ['kraft', 'gewicht'],
    relatedPairs: [
      { categorySlug: 'kraft', fromUnit: 'N', toUnit: 'kgf' },
      { categorySlug: 'kraft', fromUnit: 'N', toUnit: 'lbf' },
      { categorySlug: 'kraft', fromUnit: 'kgf', toUnit: 'N' },
    ],
    content: {
      intro: 'Kraft ist eine fundamentale physikalische Größe, die beschreibt, wie ein Objekt beschleunigt oder verformt wird. Vom einfachen Ziehen an einer Tür bis zur präzisen Berechnung von Ingenieurbauwerken – das Verständnis von Kraft ist essenziell. Die SI-Einheit Newton ist weltweit der Standard, aber in der Praxis werden auch andere Einheiten verwendet. Dieser Leitfaden erklärt alle wichtigen Krafteinheiten und ihre Anwendungen.',
      sections: [
        {
          title: 'Was ist Kraft?',
          content: 'Kraft (Formelzeichen: F) ist definiert nach Isaac Newtons zweitem Gesetz:\n\nF = m × a\n(Kraft = Masse × Beschleunigung)\n\nEine Kraft von 1 Newton beschleunigt eine Masse von 1 kg mit 1 m/s². Kraft ist eine vektorielle Größe – sie hat einen Betrag und eine Richtung.\n\nEigenschaften von Kraft:\n• Sie kann Objekte beschleunigen oder abbremsen\n• Sie kann Objekte verformen\n• Sie wirkt immer in eine Richtung\n• Kräfte können sich addieren oder aufheben\n\nKraft ist nicht dasselbe wie Energie oder Leistung, wird aber oft damit verwechselt. Kraft ist der "Schub", Energie die "Arbeit", Leistung die "Arbeit pro Zeit".'
        },
        {
          title: 'Newton (N) - die SI-Einheit',
          content: 'Das Newton (N) ist die SI-Basiseinheit für Kraft:\n\n1 N = 1 kg·m/s²\n\nDas Newton ist definiert als die Kraft, die benötigt wird, um 1 Kilogramm Masse mit 1 Meter pro Sekunde zum Quadrat zu beschleunigen.\n\nTypische Werte:\n• Gewichtskraft von 1 Gramm: 0,01 N\n• Gewichtskraft von 100 Gramm (Apfel): 1 N (Faustregel!)\n• Gewichtskraft von 1 kg: 9,81 N\n• Gewichtskraft einer Person (70 kg): 687 N\n• Gewichtskraft eines Autos (1000 kg): ca. 10.000 N = 10 kN\n\nVorsätze:\n• Millinewton (mN) = 0,001 N – für sehr kleine Kräfte\n• Kilonewton (kN) = 1000 N – im Bauwesen\n• Meganewton (MN) = 1.000.000 N – für große Kräfte (Raketen)'
        },
        {
          title: 'Kilogramm-Kraft (kgf) und Kilopond (kp)',
          content: 'Die Kilogramm-Kraft (kgf) oder Kilopond (kp) ist eine ältere Einheit, die direkt mit der Gewichtskraft verknüpft ist:\n\n1 kgf = 1 kp = 9,80665 N\n\nDefinition: Die Kraft, die durch die Gewichtskraft von 1 kg Masse unter Standard-Erdbeschleunigung ausgeübt wird.\n\nVerwendung:\n• In Deutschland und Österreich früher gebräuchlich (kp)\n• Noch in der Technik und im Maschinenbau anzutreffen\n• Intuitiv verständlich: 1 kgf "fühlt sich an" wie 1 kg Gewicht\n\nUmrechnung:\n• kgf in N: mit 9,81 multiplizieren\n• N in kgf: durch 9,81 teilen\n\nBeispiel: 100 kgf = 981 N ≈ 1 kN'
        },
        {
          title: 'Pound-Force (lbf) - imperiale Einheit',
          content: 'Die Pound-Force (lbf) ist die imperiale Krafteinheit:\n\n1 lbf = 4,448222 N\n\nDefinition: Die Kraft, die durch die Gewichtskraft von 1 Pfund Masse unter Standard-Erdbeschleunigung ausgeübt wird.\n\nVerwendung:\n• Haupt-Einheit in den USA\n• In der Luft- und Raumfahrt weltweit\n• Bei Schraubenmomenten (lbf·ft)\n• In der Automobilindustrie\n\nUmrechnung:\n• lbf in N: mit 4,45 multiplizieren\n• N in lbf: durch 4,45 teilen oder mit 0,225 multiplizieren\n\nBeispiele:\n• 100 lbf ≈ 445 N\n• 1000 N ≈ 225 lbf'
        },
        {
          title: 'Praktische Anwendungen',
          content: 'Kraftberechnungen sind in vielen Bereichen wichtig:\n\nBauingenieurwesen:\n• Traglasten von Decken und Balken (kN)\n• Windlasten auf Gebäude\n• Erdbeersicherheit\n\nFahrzeugtechnik:\n• Bremskräfte\n• Anhängelasten\n• Zugkräfte\n\nAlltag:\n• Gewichtskraft = Masse × 9,81 m/s²\n• Federwaagen messen Kraft, nicht Masse\n• Mit einer Federwaage auf dem Mond: gleiche Masse, weniger Kraft!\n\nSport:\n• Kraftmessung im Training\n• Leistungstests\n\nPhysik:\n• Mechanik und Dynamik\n• Elektromagnetische Kräfte\n• Kernkräfte'
        }
      ],
      conclusion: 'Das Verständnis von Kraft und ihren Einheiten ist für Ingenieure, Physiker und technisch interessierte Menschen unverzichtbar. Während Newton die wissenschaftliche Standard-Einheit ist, haben kgf und lbf ihre Berechtigung in spezifischen Anwendungen. Nutzen Sie unseren Kraft-Umrechner für präzise Umrechnungen.'
    },
    faq: [
      { question: 'Was ist der Unterschied zwischen kg und kgf?', answer: 'kg (Kilogramm) ist eine Masseeinheit, kgf (Kilogramm-Kraft) ist eine Krafteinheit. 1 kgf ist die Gewichtskraft von 1 kg Masse auf der Erde, also 9,81 Newton.' },
      { question: 'Warum ist 1 kg nicht einfach 1 N?', answer: 'Masse (kg) und Kraft (N) sind unterschiedliche physikalische Größen. Masse ist ortsunabhängig, Kraft (Gewichtskraft) ändert sich je nach Gravitation. Auf dem Mond wiegt 1 kg nur 1/6 so viel.' },
      { question: 'Wie rechne ich lbf in N um?', answer: 'Multiplizieren Sie lbf mit 4,448. Beispiel: 100 lbf × 4,448 = 444,8 N. Umgekehrt: N durch 4,448 teilen für lbf.' },
      { question: 'Was ist ein Dyn?', answer: 'Das Dyn ist eine alte CGS-Einheit für Kraft. 1 Dyn = 0,00001 Newton. Es wird heute kaum noch verwendet, war früher in der Physik gebräuchlich.' },
      { question: 'Wie viel Newton wiege ich?', answer: 'Ihr Gewicht in kg × 9,81 = Gewichtskraft in Newton. Beispiel: 70 kg × 9,81 = 687 N ≈ 0,69 kN.' },
      { question: 'Warum wird kN im Bauwesen verwendet?', answer: 'Kilonewton (kN) ergibt handliche Zahlen für große Kräfte. Ein Auto wiegt etwa 10 kN, ein Kleintransporter 30 kN. Die Einheit ist praktisch für Statik-Berechnungen.' }
    ]
  },
  {
    id: 'drehmoment-einheiten',
    slug: 'drehmoment-einheiten',
    title: 'Drehmoment verstehen: Nm, lb-ft und ihre Bedeutung',
    description: 'Alles über Drehmoment erfahren. Verstehen Sie Newtonmeter, Pound-Foot und deren Umrechnung für Autos, Werkstatt und Technik.',
    category: 'drehmoment',
    relatedCategories: ['drehmoment', 'kraft', 'laenge'],
    relatedPairs: [
      { categorySlug: 'drehmoment', fromUnit: 'Nm', toUnit: 'lbfft' },
      { categorySlug: 'drehmoment', fromUnit: 'lbfft', toUnit: 'Nm' },
      { categorySlug: 'drehmoment', fromUnit: 'Nm', toUnit: 'kgfm' },
    ],
    content: {
      intro: 'Das Drehmoment ist eine zentrale Größe in der Mechanik und beschreibt das "Drehvermögen" einer Kraft. Es ist besonders bekannt aus der Automobilbranche, wo Motordrehmoment oft mit "Durchzugskraft" gleichgesetzt wird. Aber Drehmoment ist auch in vielen anderen Bereichen wichtig – von der Werkstatt (Drehmomentschlüssel) über den Maschinenbau bis zur Robotik. Dieser Leitfaden erklärt alles Wichtige über Drehmoment und seine Einheiten.',
      sections: [
        {
          title: 'Was ist Drehmoment?',
          content: 'Drehmoment (Formelzeichen: M oder τ) ist definiert als Kraft mal Hebelarm:\n\nM = F × r\n\nEs beschreibt, wie stark eine Kraft einen Körper verdrehen kann. Dabei ist:\n• F = Kraft (in Newton)\n• r = Hebelarm (in Meter)\n\nDas Drehmoment ist entscheidend für:\n• Wie fest eine Schraube angezogen wird\n• Wie viel "Drehkraft" ein Motor hat\n• Wie viel Last ein Motor heben kann\n\nBeispiel: Eine Kraft von 100 N wirkt am Ende eines 1 Meter langen Hebels:\nM = 100 N × 1 m = 100 Nm\n\nAm selben Hebel, aber nur 0,5 m vom Drehpunkt:\nM = 100 N × 0,5 m = 50 Nm'
        },
        {
          title: 'Newtonmeter (Nm) - die SI-Einheit',
          content: 'Das Newtonmeter (Nm) ist die SI-Einheit für Drehmoment:\n\n1 Nm = 1 N × 1 m\n\nTypische Werte im Alltag:\n• Radschraube PKW: 100-150 Nm\n• Ölablassschraube: 20-30 Nm\n• Zündkerze: 20-40 Nm\n• Fahrradkurbel: 40-50 Nm\n\nFahrzeuge:\n• Kleinwagen: 150-200 Nm\n• Mittelklasse: 250-400 Nm\n• Sportwagen: 400-700 Nm\n• LKW: 1000-3000 Nm\n\nDie Einheit "Nm" wird oft mit der Energieeinheit "Nm" (Newtonmeter = Joule) verwechselt. Physikalisch haben beide dieselben Basiseinheiten, aber Drehmoment ist eine vektorielle Größe (Drehwirkung), Energie eine skalare (Arbeit).'
        },
        {
          title: 'Pound-Foot (lb·ft) - imperiale Einheit',
          content: 'Pound-Foot (lb·ft) ist die wichtigste imperiale Einheit für Drehmoment:\n\n1 lb·ft = 1,355818 Nm\n\nAchtung: In den USA wird oft lb·ft (Pfund-Fuß) geschrieben, während in UK manchmal ft·lb (Fuß-Pfund) verwendet wird. Für Drehmoment ist lb·ft korrekt.\n\nUmrechnung:\n• lb·ft in Nm: mit 1,356 multiplizieren\n• Nm in lb·ft: durch 1,356 teilen oder mit 0,738 multiplizieren\n\nBeispiele:\n• 100 lb·ft ≈ 136 Nm\n• 500 Nm ≈ 369 lb·ft\n\nTypische US-Angaben:\n• Radschrauben: 75-110 lb·ft\n• Motoren: 200-500 lb·ft\n\nBei Drehmomentschlüsseln aus den USA sind oft beide Skalen angegeben.'
        },
        {
          title: 'Kilogramm-Kraft-Meter (kgf·m)',
          content: 'Das Kilogramm-Kraft-Meter ist eine ältere Einheit, die noch in der Technik vorkommt:\n\n1 kgf·m = 9,80665 Nm\n\nDiese Einheit ist intuitiv: Ein kgf·m ist das Drehmoment, das entsteht, wenn eine 1-kg-Gewichtskraft am Ende eines 1-Meter-Hebels wirkt.\n\nUmrechnung:\n• kgf·m in Nm: mit 9,81 multiplizieren\n• Nm in kgf·m: durch 9,81 teilen\n\nVerwendung:\n• Ältere technische Dokumente\n• Deutsche und japanische Motorenangaben (früher)\n• Noch bei älteren Drehmomentschlüsseln\n\nBeispiel: 100 kgf·m = 981 Nm ≈ 1 kNm'
        },
        {
          title: 'Praktische Anwendungen',
          content: 'Drehmoment ist in vielen Bereichen wichtig:\n\nAutomobil:\n• Motordrehmoment: "Durchzugskraft"\n• Höheres Drehmoment = bessere Beschleunigung\n• Elektroautos: Drehmoment sofort verfügbar\n• Turbodiesel: hohes Drehmoment bei niedrigen Drehzahlen\n\nWerkstatt:\n• Drehmomentschlüssel für kritische Verschraubungen\n• Zu fest: Gewinde beschädigt\n• Zu locker: Schraube löst sich\n• Immer Herstellerangaben beachten!\n\nTypische Anzugsdrehmomente:\n• Radschrauben PKW: 110-140 Nm\n• Zylinderkopf: 25-100 Nm (in Stufen!)\n• Schwungrad: 80-150 Nm\n• Ölablassschraube: 20-30 Nm\n\nFahrrad:\n• Kurbel: 40-50 Nm\n• Pedale: 30-40 Nm\n• Lenker: 5-8 Nm\n\nIndustrie:\n• Motoren und Getriebe\n• Pumpen und Verdichter\n• Roboterarmen'
        }
      ],
      conclusion: 'Das Drehmoment ist eine der wichtigsten Größen in der Mechanik. Das Verständnis seiner Einheiten und der richtigen Anwendung – besonders beim Anziehen von Schrauben – ist für jeden wichtig, der mit Technik zu tun hat. Nutzen Sie unseren Drehmoment-Umrechner für präzise Umrechnungen.'
    },
    faq: [
      { question: 'Wie rechne ich lb·ft in Nm um?', answer: 'Multiplizieren Sie lb·ft mit 1,356. Beispiel: 100 lb·ft × 1,356 = 135,6 Nm. Umgekehrt: Nm durch 1,356 teilen für lb·ft.' },
      { question: 'Was ist wichtiger: PS oder Nm?', answer: 'Beide Größen sagen etwas Verschiedenes aus. PS/PS beschreibt die Gesamtleistung, Nm das Drehmoment (Drehkraft). Für den Alltag ist hohes Drehmoment oft wichtiger, da es besseren "Durchzug" bedeutet.' },
      { question: 'Warum brauche ich einen Drehmomentschlüssel?', answer: 'Kritische Schrauben (Räder, Zylinderkopf) müssen mit einem bestimmten Drehmoment angezogen werden. Zu fest kann das Gewinde zerstören, zu locker kann die Schraube sich lösen – beides gefährlich!' },
      { question: 'Wie stelle ich einen Drehmomentschlüssel ein?', answer: 'Auf den gewünschten Wert einstellen (Skala oder Display), dann gleichmäßig anziehen. Bei Klick-Schlüsseln: Auf das "Klicken" warten, dann aufhören. Nie nach dem Klicken weiterdrehen!' },
      { question: 'Was bedeutet kgf·m?', answer: 'Kilogramm-Kraft-Meter ist eine ältere Drehmomenteinheit. 1 kgf·m = 9,81 Nm. Sie wird noch bei älteren Motorenangaben und Drehmomentschlüsseln verwendet.' },
      { question: 'Warum haben Elektroautos so hohes Drehmoment?', answer: 'Elektromotoren liefern das maximale Drehmoment sofort bei Drehzahl 0. Verbrennungsmotoren müssen erst hochdrehen, um ihr maximales Drehmoment zu erreichen. Deshalb beschleunigen Elektroautos oft spritziger.' }
    ]
  },
  {
    id: 'volumen-und-kochen',
    slug: 'volumen-und-kochen',
    title: 'Volumeneinheiten beim Kochen: Tassen, Löffel und Milliliter',
    description: 'Volumeneinheiten in der Küche verstehen. Lernen Sie den Umgang mit Cups, Tablespoons, Teaspoons und metrischen Einheiten beim Kochen und Backen.',
    category: 'kochen',
    relatedCategories: ['kochen', 'volumen', 'gewicht'],
    relatedPairs: [
      { categorySlug: 'kochen', fromUnit: 'cup_us', toUnit: 'ml' },
      { categorySlug: 'kochen', fromUnit: 'ml', toUnit: 'cup_us' },
      { categorySlug: 'kochen', fromUnit: 'tbsp_us', toUnit: 'ml' },
    ],
    content: {
      intro: 'Beim Kochen und Backen treffen oft verschiedene Maßsysteme aufeinander. Amerikanische Rezepte verwenden "Cups" und "Tablespoons", britische "Fluid Ounces", und im deutschsprachigen Raum sind Milliliter und Gramm üblich. Das Verständnis dieser Einheiten und ihrer Umrechnung ist entscheidend für gelingende Gerichte, besonders bei Backwaren, wo Präzision wichtig ist. Dieser Leitfaden hilft Ihnen, sich in der Welt der Küchenmaße zurechtzufinden.',
      sections: [
        {
          title: 'Metrische Volumeneinheiten',
          content: 'Im deutschsprachigen Raum sind metrische Volumeneinheiten Standard:\n\n• Milliliter (ml): Kleinste übliche Einheit\n• Zentiliter (cl): 10 ml\n• Deziliter (dl): 100 ml\n• Liter (l): 1000 ml\n\nTypische Küchenmengen:\n• Teelöffel Flüssigkeit: 5 ml\n• Esslöffel Flüssigkeit: 15 ml\n• Schnapsglas: 20 ml oder 40 ml\n• Tasse Kaffee: 200-250 ml\n• Wasserglas: 200-250 ml\n\nMetrische Maße sind präzise und leicht zu messen. Ein Messbecher mit ml-Skala sollte in jeder Küche vorhanden sein.'
        },
        {
          title: 'US-Cups und Löffelmaße',
          content: 'Amerikanische Rezepte verwenden volumetrische Maße statt Gewicht:\n\nUS Cup (cup):\n• 1 US Cup = 236,588 ml ≈ 240 ml\n• Metrischer Cup = 250 ml (in Australien, Kanada)\n\nLöffelmaße:\n• 1 Teaspoon (tsp) = 4,93 ml ≈ 5 ml\n• 1 Tablespoon (tbsp) = 14,79 ml ≈ 15 ml\n• 3 tsp = 1 tbsp\n• 16 tbsp = 1 cup\n\nWichtig: US-Löffelmaße sind etwas kleiner als metrische!\n• US tsp: 4,93 ml vs. metrisch: 5 ml\n• US tbsp: 14,79 ml vs. metrisch: 15 ml\n\nFür die meisten Rezepte ist der Unterschied vernachlässigbar, bei Backwaren kann er aber relevant sein.'
        },
        {
          title: 'Britische Maßeinheiten',
          content: 'UK-Maße unterscheiden sich teilweise von US-Maßen:\n\nUK Teelöffel:\n• 1 UK tsp = 5,92 ml (etwas größer als US)\n\nUK Esslöffel:\n• 1 UK tbsp = 17,76 ml (größer als US: 14,79 ml)\n\nUK Cup:\n• Wird in UK-Rezepten selten verwendet\n• Meistens wird in "mugs" oder Unzen gemessen\n\nFluid Ounce:\n• US fl oz = 29,57 ml\n• UK fl oz = 28,41 ml\n\nAchtung: Bei alten britischen Rezepten auf die Einheiten achten! Die Unterschiede können bis zu 20% betragen.'
        },
        {
          title: 'Volumen vs. Gewicht beim Backen',
          content: 'Besonders beim Backen ist der Unterschied zwischen Volumen- und Gewichtsmessung wichtig:\n\nProblem mit Volumenmaßen:\n• Mehl kann "gepackt" oder "gelockert" gemessen werden\n• 1 Cup Mehl: 100-160g je nach Messmethode!\n• Puderzucker, Kakao, Nüsse: sehr variabel\n\nVorteil von Gewicht:\n• Exakt und reproduzierbar\n• Unabhängig von "Wie man misst"\n• Internationale Rezepte einfacher\n\nFaustregeln für Cups ohne Waage:\n• Mehl: Cup locker füllen, nicht drücken\n• Zucker: Cup glatt abstreichen\n• Flüssigkeiten: Auf Augenhöhe ablesen\n\nEmpfehlung: Eine Küchenwaage kostet wenig und macht Backen viel zuverlässiger!'
        },
        {
          title: 'Umrechnungstabelle für die Küche',
          content: 'Praktische Umrechnungen für häufige Zutaten:\n\nWasser und Milch (Dichte ≈ 1):\n• 1 ml = 1 g\n• 1 Cup = 240 ml ≈ 240 g\n\nMehl (Weizenmehl):\n• 1 Cup = ca. 120-130 g\n• 100 g Mehl ≈ 180 ml Volumen\n\nZucker:\n• 1 Cup = ca. 200 g\n• 100 g Zucker ≈ 120 ml\n\nButter:\n• 1 Cup = 227 g (1/2 Pfund)\n• 1 Stick (US) = 113 g\n\nHäufige Umrechnungen:\n• 1 EL = 15 ml\n• 1 TL = 5 ml\n• 1/2 Cup = 120 ml\n• 1/4 Cup = 60 ml\n• 1/3 Cup = 80 ml'
        }
      ],
      conclusion: 'Das Verständnis der verschiedenen Küchenmaße und ihrer Umrechnung ist besonders beim Backen mit internationalen Rezepten wichtig. Eine gute Küchenwaage und ein Messbecher mit mehreren Skalen sind die besten Helfer. Nutzen Sie unseren Koch-Umrechner für präzise Umrechnungen.'
    },
    faq: [
      { question: 'Wie viel ml hat ein US Cup?', answer: 'Ein US Cup hat 236,588 ml, wird aber oft auf 240 ml gerundet. Ein metrischer Cup (Australien, Kanada) hat genau 250 ml. Für Rezepte reicht meist die Annahme: 1 Cup ≈ 240 ml.' },
      { question: 'Wie viel Gramm ist ein Cup Mehl?', answer: 'Ein Cup Mehl wiegt etwa 120-130 Gramm, je nachdem wie fest es gemessen wird. Für beste Ergebnisse: Mehl auflockern, in den Cup löffeln, nicht drücken, mit Messer glattstreichen.' },
      { question: 'Was ist der Unterschied zwischen US und UK Löffelmaßen?', answer: 'UK-Teelöffel (5,92 ml) sind etwas größer als US-Teelöffel (4,93 ml). UK-Esslöffel (17,76 ml) sind deutlich größer als US-Esslöffel (14,79 ml). Metrische Löffel sind 5 ml und 15 ml.' },
      { question: 'Kann ich Cups in Gramm umrechnen?', answer: 'Ja, aber das hängt vom Lebensmittel ab! Wasser: 1 Cup ≈ 240 g. Mehl: 1 Cup ≈ 125 g. Zucker: 1 Cup ≈ 200 g. Die Dichte des jeweiligen Lebensmittels bestimmt das Gewicht.' },
      { question: 'Warum gelingen amerikanische Backrezepte oft nicht?', answer: 'Meist wegen der ungenauen Volumenmessung! In den USA werden Zutaten speziell "gelockert" und "gestrichen" gemessen. Ohne diese Technik und ohne Waage sind die Ergebnisse oft zu dicht oder zu trocken.' },
      { question: 'Was ist ein Stick Butter?', answer: 'In den USA wird Butter in "Sticks" verkauft. 1 Stick = 113 g = 1/2 Cup = 8 EL = 4 oz. In Deutschland entspricht das etwa einer halben Standardpackung Butter (250 g).' }
    ]
  },
  {
    id: 'waehrung-umrechnen',
    slug: 'waehrung-umrechnen',
    title: 'Währung umrechnen: Euro, Dollar, Pfund und mehr',
    description: 'Währungsrechnung verstehen. Erfahren Sie alles über Wechselkurse, Währungspaare und praktische Tipps für Reisen und Online-Shopping.',
    category: 'waehrung',
    relatedCategories: ['waehrung'],
    relatedPairs: [
      { categorySlug: 'waehrung', fromUnit: 'EUR', toUnit: 'USD' },
      { categorySlug: 'waehrung', fromUnit: 'USD', toUnit: 'EUR' },
      { categorySlug: 'waehrung', fromUnit: 'EUR', toUnit: 'GBP' },
    ],
    content: {
      intro: 'Die Währungsumrechnung ist ein tägliches Thema in unserer globalisierten Welt – sei es für Reisen, Online-Einkäufe aus dem Ausland oder internationale Geschäfte. Die Wechselkurse ändern sich ständig und verstehen zu wissen, wie Währungsumrechnungen funktionieren, kann bares Geld sparen. Dieser Leitfaden erklärt die Grundlagen der Währungsumrechnung und gibt praktische Tipps.',
      sections: [
        {
          title: 'Grundlagen der Währungsumrechnung',
          content: 'Währungsumrechnung basiert auf Wechselkursen, die das Verhältnis zwischen zwei Währungen angeben:\n\nWechselkurs = Wert einer Währung in einer anderen Währung\n\nBeispiel:\n• EUR/USD = 1,10 bedeutet: 1 Euro = 1,10 US-Dollar\n• USD/EUR = 0,91 bedeutet: 1 Dollar = 0,91 Euro\n\nWährungspaare werden immer als "Basiswährung/Quotenwährung" angegeben.\n\nBerechnung:\n• Euro in Dollar: Betrag × EUR/USD-Kurs\n• Dollar in Euro: Betrag ÷ EUR/USD-Kurs\n\nBeispiel bei EUR/USD = 1,10:\n• 100 EUR × 1,10 = 110 USD\n• 100 USD ÷ 1,10 = 90,91 EUR'
        },
        {
          title: 'Die wichtigsten Währungen',
          content: 'Die meistgehandelten Währungen der Welt:\n\nUS-Dollar (USD):\n• Weltleitwährung\n• In fast allen Ländern akzeptiert\n• Referenz für Rohstoffpreise\n\nEuro (EUR):\n• Währung von 20 EU-Ländern\n• Zweitwichtigste Reservewährung\n• Stabil und weit verbreitet\n\nBritisches Pfund (GBP):\n• Älteste noch verwendete Währung\n• Historisch sehr stabil\n• Auch als "Pfund Sterling" bekannt\n\nJapanischer Yen (JPY):\n• Drittmeistgehandelte Währung\n• Oft als "Safe Haven" genutzt\n• Niedrige Zinsen traditionell\n\nSchweizer Franken (CHF):\n• "Sichere Hafen"-Währung\n• Sehr stabil\n• In der Schweiz und Liechtenstein\n\nChinesischer Yuan (CNY/RMB):\n• Aufstrebende Währung\n• Internationalisierung schreitet voran'
        },
        {
          title: 'Wechselkurs-Typen',
          content: 'Es gibt verschiedene Arten von Wechselkursen:\n\nDevisenmittelkurs (ECB):\n• Von der Europäischen Zentralbank festgelegt\n• Werktäglich aktualisiert\n• Referenzkurs für viele Banken\n• In unserem Umrechner verwendet!\n\nKassa-Kurs (Spot):\n• Aktueller Marktkurs\n• Für sofortige Transaktionen\n• Schwankt sekündlich\n\nTermin-Kurs (Forward):\n• Für zukünftige Transaktionen\n• Feste Kurse auf Termin\n• Wichtig für Unternehmen\n\nAn- und Verkaufskurs:\n• Geldkurs: Kurs, zu dem Bank ankauft\n• Briefkurs: Kurs, zu dem Bank verkauft\n• Differenz = Spanne (Gewinn der Bank)'
        },
        {
          title: 'Tipps für Reisende',
          content: 'Praktische Tipps für den Urlaub:\n\nVor der Reise:\n• Kurse vergleichen (Banks, Wechselstuben)\n• Nicht am Flughafen wechseln (schlechte Kurse)\n• EC-Karte für Ausland freischalten\n• Alternativkreditkarte besorgen\n\nIm Reiseland:\n• In lokaler Währung bezahlen (keine "Dynamic Currency Conversion")\n• Geldautomaten nutzen (meist günstiger)\n• Kleine Beträge abheben (nicht zu viel Bargeld)\n• Karte sperren bei Verlust\n\nKostenfallen vermeiden:\n• Auslandseinsatzentgelt der Karte prüfen (oft 1-2%)\n• DCC (Dynamische Währungsumrechnung) ablehnen\n• Wechselstuben am Flughafen meiden\n• Vergleichen: Bargeld vs. Karte'
        },
        {
          title: 'Online-Shopping im Ausland',
          content: 'Währungsumrechnung bei internationalen Käufen:\n\nKreditkarte:\n• Automatische Umrechnung durch Karte\n• Meist Tageskurs + Gebühr\n• Transparente Abrechnung\n\nPayPal:\n• Eigene Wechselkurse\n• Oft ungünstiger als Kreditkarte\n• Prüfen: Bezahlung in Fremdwährung möglich?\n\nAmazon & Co:\n• Oft EUR-Preise verfügbar\n• Vergleich lohnt sich!\n• Zoll und Einfuhrsteuer beachten\n\nPreisvergleich:\n• Immer in gleicher Währung vergleichen\n• Tageskurse berücksichtigen\n• Versandkosten einrechnen\n\nTipp: Bei großen Beträgen kann sich das Warten auf einen günstigen Kurs lohnen!'
        }
      ],
      conclusion: 'Die Währungsumrechnung ist mit dem richtigen Verständnis keine Kunst. Beachten Sie die Wechselkurse, vermeiden Sie unnötige Gebühren und nutzen Sie unseren Währungsrechner mit tagesaktuellen EZB-Kursen für präzise Berechnungen.'
    },
    faq: [
      { question: 'Woher kommen die Wechselkurse?', answer: 'Unser Umrechner verwendet die offiziellen Referenzkurse der Europäischen Zentralbank (EZB). Diese werden werktäglich veröffentlicht und sind der Standard für viele Finanzinstitute.' },
      { question: 'Warum unterscheiden sich Kurse bei verschiedenen Anbietern?', answer: 'Jeder Anbieter (Banken, Wechselstuben) addiert eine Marge auf den Marktkurs. Außerdem gibt es An- und Verkaufskurse. Die EZB-Kurse sind reine Referenzkurse ohne Marge.' },
      { question: 'Sollte ich Bargeld tauschen oder am Automaten abheben?', answer: 'Am Automaten abheben ist meist günstiger. Der Wechselkurs ist besser, und die Gebühren sind oft niedriger als bei Wechselstuben. Aber: Auslandseinsatzgebühr der eigenen Bank prüfen!' },
      { question: 'Was ist DCC (Dynamic Currency Conversion)?', answer: 'DCC ist ein Angebot an Terminals, in Ihrer Heimatwährung zu zahlen. Das klingt praktisch, ist aber teuer! Der Kurs ist meist sehr ungünstig. Immer in lokaler Währung zahlen.' },
      { question: 'Wie oft ändern sich Wechselkurse?', answer: 'Devisenmärkte arbeiten 24/7, Kurse ändern sich sekündlich. EZB-Kurse werden einmal pro Werktag festgelegt. Für die meisten Anwendungen reichen Tageskurse völlig aus.' },
      { question: 'Welche Währung ist am sichersten?', answer: 'Es gibt keine "sichere" Währung im absoluten Sinne. Der Schweizer Franken und der US-Dollar gelten als relativ stabil. Der Euro ist ebenfalls sehr stabil. Langfristig unterliegen alle Währungen Inflation.' }
    ]
  },
  {
    id: 'datenvolumen-erklaert',
    slug: 'datenvolumen-erklaert',
    title: 'Datenvolumen erklärt: MB, GB, TB und der Unterschied zu MiB',
    description: 'Alles über digitale Speichereinheiten verstehen. Erfahren Sie den Unterschied zwischen MB und MiB, wie viel Daten Fotos und Videos benötigen, und warum Ihre Festplatte weniger Speicher anzeigt.',
    category: 'datenvolumen',
    relatedCategories: ['datenvolumen', 'zeit'],
    relatedPairs: [
      { categorySlug: 'datenvolumen', fromUnit: 'MB', toUnit: 'GB' },
      { categorySlug: 'datenvolumen', fromUnit: 'GB', toUnit: 'TB' },
      { categorySlug: 'datenvolumen', fromUnit: 'MiB', toUnit: 'GiB' },
      { categorySlug: 'datenvolumen', fromUnit: 'MB', toUnit: 'MiB' },
    ],
    content: {
      intro: 'In unserer digitalen Welt begegnen uns täglich Begriffe wie Megabyte, Gigabyte und Terabyte – sei es beim Kauf eines Smartphones, beim Vergleich von Internet-Tarifen oder beim Speichern von Fotos und Videos. Doch was bedeuten diese Einheiten genau? Und warum zeigt eine neu gekaufte 1-TB-Festplatte im Computer nur etwa 931 GB an? Dieser Leitfaden erklärt alles Wichtige über Datenvolumen und hilft Ihnen, die richtigen Entscheidungen bei Speichermedien und Internet-Tarifen zu treffen.',
      sections: [
        {
          title: 'Bits und Bytes – Die Grundlagen',
          content: 'Alle digitalen Daten basieren auf dem binären System mit nur zwei Zuständen: 0 und 1.\n\nBit (b):\n• Kleinste Dateneinheit\n• Ein Bit = eine Ja/Nein-Entscheidung\n• Acht Bits = ein Byte\n\nByte (B):\n• 1 Byte = 8 Bits\n• Kann 256 verschiedene Werte annehmen (2⁸)\n• Ein Zeichen (Buchstabe, Ziffer) = meist 1 Byte\n\nWarum 8 Bits? Diese Anzahl hat sich historisch durchgesetzt, weil sie genug Kombinationen für alle Buchstaben, Ziffern und Sonderzeichen bietet. Ein Kilobyte sind demnach 1000 Bytes (dezimal) oder 1024 Bytes (binär) – hier beginnt die Verwirrung!\n\nDatenübertragung vs. Speicherung:\n• Internetgeschwindigkeit wird in Bits gemessen (Mbit/s)\n• Dateigrößen werden in Bytes gemessen (MB, GB)\n• 100 Mbit/s = 12,5 MB/s maximaler Download'
        },
        {
          title: 'Dezimal vs. Binär – MB gegen MiB',
          content: 'Hier liegt der Grund für viele Missverständnisse:\n\nDezimales System (SI-Präfixe):\n• 1 KB (Kilobyte) = 1.000 Bytes\n• 1 MB (Megabyte) = 1.000.000 Bytes\n• 1 GB (Gigabyte) = 1.000.000.000 Bytes\n• 1 TB (Terabyte) = 1.000.000.000.000 Bytes\n\nBinäres System (IEC-Präfixe):\n• 1 KiB (Kibibyte) = 1.024 Bytes\n• 1 MiB (Mebibyte) = 1.048.576 Bytes\n• 1 GiB (Gibibyte) = 1.073.741.824 Bytes\n• 1 TiB (Tebibyte) = 1.099.511.627.776 Bytes\n\nDer Unterschied:\n• 1 GiB = 1,074 GB (etwa 7% mehr!)\n• 1 TiB = 1,1 TB (etwa 10% mehr!)\n\nWer verwendet was?\n• Festplattenhersteller: Dezimal (TB) → größere Zahlen\n• Windows: Binär, zeigt aber "GB" statt "GiB" an\n• macOS seit 10.6: Dezimal\n• Linux: Je nach Distribution unterschiedlich\n\nDas erklärt: Eine 1-TB-Festplatte (Hersteller) = ca. 931 "GB" (Windows, eigentlich GiB)'
        },
        {
          title: 'Typische Dateigrößen im Alltag',
          content: 'Um Datenvolumen besser einzuschätzen, helfen Vergleichswerte:\n\nBilder:\n• Smartphone-Foto: 3-8 MB\n• Foto DSLR: 15-50 MB\n• RAW-Datei: 20-80 MB\n• Komprimiertes Web-Bild: 100-500 KB\n\nVideos:\n• 1 Minute HD (720p): ca. 100 MB\n• 1 Minute Full HD (1080p): ca. 200-300 MB\n• 1 Minute 4K: ca. 500-800 MB\n• 1 Stunde Full HD: 10-20 GB\n• 4K-Film: 50-100 GB\n\nAudio:\n• MP3-Lied (3 Min.): 3-8 MB\n• FLAC (verlustfrei): 20-40 MB\n• Hörbuch (10 Std.): 150-300 MB\n\nDokumente:\n• Textdatei: wenige KB\n• PDF-Dokument: 100 KB bis 10 MB\n• Präsentation: 5-50 MB\n\nApps & Spiele:\n• Smartphone-App: 20-200 MB\n• Mobiles Spiel: 100 MB bis 2 GB\n• PC-Spiel: 20-150 GB (z.B. Call of Duty: 200 GB!)'
        },
        {
          title: 'Internet und Übertragungsgeschwindigkeit',
          content: 'Bei Internet-Tarifen werden Geschwindigkeiten in Bit pro Sekunde angegeben:\n\nTypische Internetgeschwindigkeiten:\n• DSL 16: 16 Mbit/s = 2 MB/s\n• DSL 50: 50 Mbit/s = 6,25 MB/s\n• DSL 100: 100 Mbit/s = 12,5 MB/s\n• Glasfaser 250: 250 Mbit/s = 31,25 MB/s\n• Glasfaser 1000: 1000 Mbit/s = 125 MB/s\n\nRechenbeispiel Downloadzeit:\n• Datei: 10 GB = 10.000 MB\n• Bei 100 Mbit/s: 10.000 MB ÷ 12,5 MB/s = 800 Sek. ≈ 13 Minuten\n• Bei 50 Mbit/s: etwa 27 Minuten\n\nDatenvolumen bei Streaming:\n• Video SD: ca. 700 MB/Stunde\n• Video HD: ca. 2-3 GB/Stunde\n• Video 4K: ca. 7-10 GB/Stunde\n• Musik Streaming: ca. 50-100 MB/Stunde\n\nMonatliches Datenvolumen berechnen:\n• 2 Stunden HD-Streaming/Tag = ca. 150 GB/Monat\n• Plus normale Nutzung: 200-300 GB/Monat'
        },
        {
          title: 'Speicherkauf – Was brauche ich wirklich?',
          content: 'Empfehlungen für verschiedene Anwendungsfälle:\n\nSmartphone:\n• 64 GB: Minimum, schnell voll bei Fotos\n• 128 GB: Empfehlenswert für Normalnutzer\n• 256 GB: Für Fotos, Videos und viele Apps\n• 512 GB+: Für Power-User und Profi-Fotografen\n\nLaptop/PC:\n• 256 GB SSD: Minimum für System + Programme\n• 512 GB SSD: Gut für die meisten Nutzer\n• 1 TB SSD: Viel Platz für Fotos, Videos, Spiele\n• 2 TB+: Für Profis, Video-Editoren, Gamer\n\nExterne Festplatten:\n• Backup: Mindestens 2x der internen Speicher\n• Fotosammlung: 1-2 TB\n• Videoschnitt: 4+ TB empfohlen\n\nCloud-Speicher:\n• Kostenlos: meist 5-15 GB (Google, iCloud, OneDrive)\n• Erweitert: 100 GB für 2-3 €/Monat\n• Familie: 2 TB für 10 €/Monat\n\nTipp: Lieber eine größere SSD als eine langsame HDD. Die Geschwindigkeit macht mehr aus als der letzte GB Speicherplatz.'
        }
      ],
      conclusion: 'Das Verständnis von Datenvolumen ist in unserer digitalen Welt unverzichtbar. Ob Sie Internet-Tarife vergleichen, Speichermedien kaufen oder nur verstehen wollen, warum Ihre Festplatte "weniger" Speicher hat als angegeben – dieses Wissen hilft bei vielen Entscheidungen. Nutzen Sie unseren Datenvolumen-Umrechner für präzise Umrechnungen zwischen allen Einheiten.'
    },
    faq: [
      { question: 'Warum zeigt meine 1 TB Festplatte nur 931 GB an?', answer: 'Festplattenhersteller verwenden das dezimale System (1 TB = 1.000.000.000.000 Bytes), Windows zeigt aber binäre "GiB" als "GB" an. 1 TB dezimal = ca. 931 GiB. Es ist also kein Fehler, sondern eine unterschiedliche Zählweise.' },
      { question: 'Was ist der Unterschied zwischen MB und MiB?', answer: '1 MB (Megabyte) = 1.000.000 Bytes (dezimal). 1 MiB (Mebibyte) = 1.048.576 Bytes (binär, 1024²). MiB sind etwa 4,9% größer. Windows verwendet MiB, zeigt aber fälschlicherweise "MB" an.' },
      { question: 'Wie lange dauert ein 10 GB Download?', answer: 'Bei 100 Mbit/s: ca. 13 Minuten. Bei 50 Mbit/s: ca. 27 Minuten. Bei 16 Mbit/s: ca. 83 Minuten. Formel: GB × 8000 ÷ Mbit/s = Sekunden.' },
      { question: 'Wie viel Datenvolumen brauche ich pro Monat?', answer: 'Normalnutzer: 50-100 GB. Vielseamer: 200-300 GB. Heavy User (4K-Streaming, Gaming): 500 GB+. Unlimited-Tarife sind oft sinnvoll für Familien und Power-User.' },
      { question: 'Ist Mbit/s dasselbe wie MB/s?', answer: 'Nein! Mbit/s (Megabit pro Sekunde) wird für Internetgeschwindigkeit verwendet. MB/s (Megabyte pro Sekunde) für Dateitransfers. 1 Byte = 8 Bits, also: Mbit/s ÷ 8 = MB/s. Beispiel: 100 Mbit/s = 12,5 MB/s.' },
      { question: 'Was ist mehr: Terabyte oder Petabyte?', answer: 'Ein Petabyte (PB) ist 1000-mal größer als ein Terabyte. 1 PB = 1000 TB = 1.000.000 GB. Petabyte werden in großen Rechenzentren und für Big-Data-Anwendungen verwendet.' }
    ]
  },
  {
    id: 'schuhgroessen-erklaert',
    slug: 'schuhgroessen-erklaert',
    title: 'Schuhgrößen verstehen: EU, US, UK und cm richtig umrechnen',
    description: 'Schuhgrößen-Systeme erklärt: Erfahren Sie alles über EU, US, UK, cm und internationale Größentabellen. Mit Tipps für den richtigen Schuhkauf im Internet.',
    category: 'schuhgroesse',
    relatedCategories: ['schuhgroesse', 'laenge'],
    relatedPairs: [
      { categorySlug: 'schuhgroesse', fromUnit: 'eu', toUnit: 'us_m' },
      { categorySlug: 'schuhgroesse', fromUnit: 'eu', toUnit: 'us_w' },
      { categorySlug: 'schuhgroesse', fromUnit: 'eu', toUnit: 'uk' },
      { categorySlug: 'schuhgroesse', fromUnit: 'eu', toUnit: 'cm' },
    ],
    content: {
      intro: 'Der Kauf von Schuhen im Internet oder bei internationalen Marken kann zur Geduldsprobe werden – die verschiedenen Schuhgrößen-Systeme weltweit führen oft zu Verwirrung und Fehlkäufen. Eine EU-Größe 42 entspricht nicht einfach einer US-Größe 42, und obendrein unterscheiden sich US-Herren- und US-Damengrößen erheblich. Dieser umfassende Leitfaden erklärt alle wichtigen Schuhgrößen-Systeme, zeigt Umrechnungen und gibt praktische Tipps für den perfekten Schuhkauf.',
      sections: [
        {
          title: 'Das europäische Schuhgrößen-System (EU)',
          content: 'Das EU-System ist in Deutschland, Österreich, der Schweiz und den meisten europäischen Ländern Standard.\n\nGrundlage: Pariser Stich\n• 1 Pariser Stich = 6,67 mm\n• EU-Größe = Innenlänge in Pariser Stich × 1,5\n\nFormel:\n• EU-Größe = (Fußlänge in mm + 12) ÷ 6,67 × 1,5\n• Oder vereinfacht: (Fußlänge in cm + 1,2) × 1,5\n\nBeispielrechnung:\n• Fußlänge: 26 cm\n• (26 + 1,2) × 1,5 = 40,8\n• Empfohlene Größe: EU 41\n\nWichtig: Die EU-Größe gibt die Innenlänge des Schuhs an, nicht die Fußlänge! Es sollte etwa 1-1,5 cm Platz im Schuh sein.\n\nTypische EU-Größen:\n• Kinder: 20-35\n• Damen: 35-42\n• Herren: 39-50'
        },
        {
          title: 'US-Schuhgrößen – Herren vs. Damen',
          content: 'Das US-System ist besonders verwirrend, da Herren- und Damengrößen unterschiedlich nummeriert werden!\n\nUS-Herren (Men):\n• Startet bei ca. Größe 6 für kleine Füße\n• Typischer Bereich: 7-14\n• Größere Größen: 15+ (oft als "Big Sizes")\n\nUS-Damen (Women):\n• Startet bei ca. Größe 4\n• Typischer Bereich: 5-12\n• Achtung: US-Damengrößen sind etwa 1,5 Größen größer als Herren für denselben Fuß!\n\nUmrechnung EU ↔ US:\nHerren: US = (EU + 33) ÷ 1,5 - 24\nDamen: US = (EU + 33) ÷ 1,5 - 21\n\nBeispiel EU 42:\n• Herren: US 8,5\n• Damen: US 10,5\n\nUS-Kinder (Kids):\n• Baby: 0-4\n• Kleinkind: 4-10\n• Jugend: 10,5-3,5 (Y = Youth)\n• Danach: Erwachsenengrößen'
        },
        {
          title: 'UK-Schuhgrößen',
          content: 'Das britische System unterscheidet sich sowohl von EU als auch von US:\n\nGrundlage:\n• Basiert auf der Länge in Zoll\n• 1 UK-Größe = 1/3 Zoll = 8,46 mm\n\nFormel:\n• UK = (3 × Fußlänge in Zoll) - 23\n\nUmrechnung UK ↔ EU:\n• EU = (UK + 23) × 1,5\n• UK = EU ÷ 1,5 - 23\n\nBeispiele:\n• EU 42 ≈ UK 8\n• EU 38 ≈ UK 5\n• EU 46 ≈ UK 11\n\nUK ↔ US:\n• US Herren = UK + 1\n• US Damen = UK + 2,5\n• Beispiel: UK 7 = US 8 (Herren) = US 9,5 (Damen)\n\nWichtig: UK-Größen werden oft als "UK" oder "GB" gekennzeichnet und sind international einheitlicher als US-Größen.'
        },
        {
          title: 'Zentimeter und Millimeter – Die präzisesten Angaben',
          content: 'Die Angabe in cm oder mm ist die präziseste und international verständlichste Methode:\n\nJapan (JP):\n• Wird direkt in cm angegeben\n• JP 26 = 26 cm Innenlänge\n• Sehr einfach und eindeutig!\n\nKorea (KR):\n• Wird in mm angegeben\n• KR 260 = 260 mm = 26 cm\n\nChina (CN):\n• Wird oft in cm oder mm angegeben\n• Neue Markierung: CN 260 = 260 mm\n\nUmrechnung cm ↔ EU:\n• cm = (EU ÷ 1,5) × 10 + 10\n• EU = (cm - 10) ÷ 10 × 1,5\n\nBeispiel:\n• JP 26 cm ≈ EU 42\n• JP 24 cm ≈ EU 38\n\nVorteil der cm/mm-Angabe:\n• Keine Verwechslung zwischen Systemen\n• Ideal für Online-Bestellungen\n• Exakte Passform-Berechnung möglich'
        },
        {
          title: 'Tipps für den Schuhkauf im Internet',
          content: 'So finden Sie die richtige Größe ohne Anprobieren:\n\n1. Fuß messen:\n• Spät am Tag messen (Füße sind dann etwas größer)\n• Auf Papier stehen, Umriss zeichnen\n• Länge von Ferse bis längster Zehe messen\n• Beide Füße messen – oft ungleich!\n\n2. Richtige Größe wählen:\n• Innenlänge sollte 1-1,5 cm länger sein als der Fuß\n• Bei breiten Füßen: eine Nummer größer\n• Bei schmalen Füßen: eine Nummer kleiner\n\n3. Größentabellen nutzen:\n• Immer die Tabelle des jeweiligen Herstellers verwenden\n• Markengrößen können variieren!\n• Bei US-Importen auf "Men" oder "Women" achten\n\n4. Besonderheiten beachten:\n• Sportschuhe: oft eine Nummer größer\n• Stiefel: können enger sein\n• Sandalen: exakter anpassen\n\n5. Rückgabe einplanen:\n• Bei unbekannten Marken: zwei Größen bestellen\n• Rückgabebedingungen prüfen\n\nWichtige Faustregeln:\n• EU 42 ≈ US 8,5 (Herren) ≈ UK 8\n• EU 38 ≈ US 7,5 (Damen) ≈ UK 5\n• Pro 0,5 cm Fußlänge = etwa 0,75 EU-Größen'
        }
      ],
      conclusion: 'Die verschiedenen Schuhgrößen-Systeme können verwirrend sein, aber mit dem richtigen Wissen und unseren Umrechnungstabellen finden Sie immer die passende Größe. Besonders wichtig: Messen Sie Ihre Fußlänge in cm – das ist der beste Ausgangspunkt für alle Umrechnungen. Nutzen Sie unseren Schuhgrößen-Umrechner für schnelle und präzise Umrechnungen zwischen allen Systemen.'
    },
    faq: [
      { question: 'Wie rechne ich EU in US-Schuhgröße um?', answer: 'Für Herren: US = (EU + 33) ÷ 1,5 - 24. Für Damen: US = (EU + 33) ÷ 1,5 - 21. Beispiel EU 42 = US 8,5 (Herren) oder US 10,5 (Damen). Achten Sie immer auf die Angabe "Men" oder "Women"!' },
      { question: 'Warum sind US-Damengrößen anders als Herren?', answer: 'Historisch bedingt werden in den USA Damenschuhe anders nummeriert. Eine US-Damen-Größe 8 entspricht nicht einer US-Herren-Größe 8. Dasselbe Paar Schuhe in Damen- und Herrenversion hat unterschiedliche Nummern.' },
      { question: 'Wie messe ich meine Fußlänge richtig?', answer: 'Stellen Sie sich auf ein Papier und zeichnen Sie den Umriss nach. Messen Sie von der Ferse bis zur längsten Zehe. Messen Sie beide Füße und nehmen Sie den größeren Wert. Füße sind abends etwas größer als morgens.' },
      { question: 'Welche EU-Größe hat ein 26 cm Fuß?', answer: 'Bei 26 cm Fußlänge empfiehlt sich EU 42 (Innenlänge ca. 27 cm). Die Formel: EU ≈ (Fußlänge cm + 1) × 1,5. Für 1 cm Spielraum im Schuh.' },
      { question: 'Was bedeutet JP 26 bei Schuhen?', answer: 'JP 26 bedeutet, dass der Schuh eine Innenlänge von 26 cm hat. Das japanische System ist besonders einfach, da es direkt in Zentimetern misst. JP 26 entspricht etwa EU 41-42.' },
      { question: 'Sollte ich Schuhe größer oder kleiner kaufen?', answer: 'Schuhe sollten etwa 1 cm Platz vor der längsten Zehe haben. Zu kleine Schuhe verursachen Blasen und Fußprobleme. Zu große Schuhe führen zu Instabilität. Bei der Breite gilt: Schuhe sollten bequem sitzen, aber nicht drücken.' }
    ]
  },
  {
    id: 'prozent-und-promille',
    slug: 'prozent-und-promille',
    title: 'Prozentrechnung verstehen: Prozent, Promille, ppm und Basispunkte',
    description: 'Prozentrechnung und verwandte Einheiten erklärt. Lernen Sie den Unterschied zwischen Prozent, Promille, Basispunkten und ppm mit praktischen Beispielen aus Alltag und Finanzen.',
    category: 'prozent',
    relatedCategories: ['prozent', 'dichte'],
    relatedPairs: [
      { categorySlug: 'prozent', fromUnit: 'percent', toUnit: 'fraction' },
      { categorySlug: 'prozent', fromUnit: 'percent', toUnit: 'permille' },
      { categorySlug: 'prozent', fromUnit: 'percent', toUnit: 'basispoint' },
      { categorySlug: 'prozent', fromUnit: 'percent', toUnit: 'ppm' },
    ],
    content: {
      intro: 'Prozentangaben begegnen uns täglich: Rabatte beim Einkaufen, Zinsen für Kredite, Alkoholgehalt in Getränken oder Wahlergebnisse. Doch was genau bedeutet "Prozent"? Und wie unterscheidet es sich von Promille, Basispunkten oder ppm? Dieser Leitfaden erklärt alle wichtigen Einheiten für Anteile und Verhältnisse und zeigt, wie Sie sie im Alltag und bei finanziellen Entscheidungen richtig anwenden.',
      sections: [
        {
          title: 'Was ist Prozent?',
          content: 'Prozent (%) bedeutet wörtlich "von Hundert" und beschreibt Anteile eines Ganzen:\n\nDefinition:\n• 1% = 1/100 = 0,01\n• 100% = das Ganze = 1\n\nGrundformeln:\n• Prozentwert = Grundwert × Prozentsatz\n• Prozentsatz = Prozentwert ÷ Grundwert × 100%\n• Grundwert = Prozentwert ÷ Prozentsatz\n\nBeispiele:\n• 20% von 500 € = 500 × 0,20 = 100 €\n• 25% Rabatt auf 80 € = 80 × 0,25 = 20 € Ersparnis\n• Wie viel % sind 30 von 200? = 30 ÷ 200 × 100 = 15%\n\nTypische Anwendungen:\n• Rabatte und Aufschläge\n• Zinsen und Renditen\n• Steuern (19% Mehrwertsteuer)\n• Wahlergebnisse\n• Statistiken\n• Körperfeuchtigkeit\n• Akkustand'
        },
        {
          title: 'Promille – Ein Tausendstel',
          content: 'Promille (‰) bedeutet "von Tausend" und wird für sehr kleine Anteile verwendet:\n\nDefinition:\n• 1‰ = 1/1000 = 0,001 = 0,1%\n• 10‰ = 1%\n\nUmrechnung:\n• Promille → Prozent: ÷ 10\n• Prozent → Promille: × 10\n\nBekannteste Anwendung: Alkohol im Blut\n• 0,5‰ = 0,05% = sehr gering\n• 1,0‰ = 0,1% = leicht beeinträchtigt\n• 2,0‰ = 0,2% = stark beeinträchtigt\n\nPromille-Grenzwerte:\n• Deutschland: 0,5‰ Führerscheinentzug möglich\n• 0,3‰ + Auffälligkeiten: absolut fahruntauglich\n• 1,1‰: absolut fahruntauglich (ohne Auffälligkeiten)\n\nWeitere Anwendungen:\n• Salinität von Meerwasser: ca. 35‰\n• Steuersätze in Promille\n• Fehlerquoten in der Produktion'
        },
        {
          title: 'Basispunkte – Für Finanzprofis',
          content: 'Basispunkte (bp) sind die feinste Einheit für Anteile, besonders in der Finanzwelt:\n\nDefinition:\n• 1 Basispunkt = 0,01% = 0,0001\n• 100 Basispunkte = 1%\n• 10.000 Basispunkte = 100%\n\nUmrechnung:\n• Prozent → Basispunkte: × 100\n• Basispunkte → Prozent: ÷ 100\n\nWarum Basispunkte?\n• Für kleine Änderungen präziser als Prozent\n• Eindeutig: "25 bp" ist klarer als "0,25%"\n• Vermeidet Verwechslungen bei "Prozent von Prozent"\n\nTypische Anwendungen:\n• Zinsänderungen: "EZB erhöht um 25 bp"\n• Bond-Yields: 3,50% = 350 bp\n• Kreditzinsen: +50 bp = +0,50%\n• Fondskosten: 75 bp = 0,75% p.a.\n\nBeispiele:\n• Kreditzins steigt von 3,5% auf 4,0% = +50 bp\n• EZB-Zins von 2,00% auf 2,25% = +25 bp\n• Management-Fee von 1,5% = 150 bp'
        },
        {
          title: 'ppm, ppb und ppt – Für winzige Anteile',
          content: 'Für extrem kleine Konzentrationen werden ppm, ppb und ppt verwendet:\n\nppm (Parts per Million):\n• 1 ppm = 1/1.000.000 = 0,0001%\n• Ein Teil auf eine Million Teile\n• Beispiel: 1 Liter in 1.000.000 Litern\n\nppb (Parts per Billion):\n• 1 ppb = 1/1.000.000.000 = 0,0000001%\n• Ein Teil auf eine Milliarde Teile\n\nppt (Parts per Trillion):\n• 1 ppt = 1/1.000.000.000.000\n• Ein Teil auf eine Billion Teile\n\nUmrechnung:\n• ppm → Prozent: ÷ 10.000\n• Prozent → ppm: × 10.000\n• 100 ppm = 0,01%\n\nAnwendungen:\n• Luftqualität: CO₂ 415 ppm\n• Wasseranalyse: Blei < 10 ppb\n• Schadstoffmessung\n• Spurenelemente in Lebensmitteln\n• Medikamentenkonzentrationen\n\nBeispiele:\n• CO₂ in der Atmosphäre: ca. 420 ppm = 0,042%\n• Alkohol am Steuer: 0,5‰ = 500 ppm\n• Trinkwassergrenzwert Blei: 10 ppb'
        },
        {
          title: 'Praktische Prozentrechnung im Alltag',
          content: 'Anwendungen aus dem täglichen Leben:\n\nEinkaufen und Rabatte:\n• 30% Rabatt auf 50 €: 50 × 0,30 = 15 € Ersparnis\n• Neuer Preis: 50 - 15 = 35 €\n• Schnellmethode: 50 × 0,70 = 35 €\n\nMehrwertsteuer:\n• 19% auf 100 € netto = 19 € MwSt.\n• Brutto = 100 × 1,19 = 119 €\n• Netto aus Brutto: 119 ÷ 1,19 = 100 €\n\nTrinkgeld:\n• 10% auf 45 €: 45 × 0,10 = 4,50 €\n• 15% auf 60 €: 60 × 0,15 = 9 €\n\nZinsen und Rendite:\n• 3% Zinsen auf 10.000 €: 10.000 × 0,03 = 300 €/Jahr\n• Zinseszins: 10.000 × 1,03¹⁰ = 13.439 € (10 Jahre)\n\nKörperfett:\n• 70 kg Person, 15% Körperfett: 70 × 0,15 = 10,5 kg Fett\n\nSteuern:\n• Einkommensteuer: 25% auf 50.000 € = 12.500 €\n• Abzugsrate berechnen: 25/75 = 33,3% vom Netto'
        }
      ],
      conclusion: 'Die Prozentrechnung ist eine der wichtigsten mathematischen Fähigkeiten im Alltag. Ob beim Einkaufen, bei Finanzentscheidungen oder bei der Interpretation von Statistiken – ein solides Verständnis von Prozent, Promille, Basispunkten und ppm hilft Ihnen, informierte Entscheidungen zu treffen. Nutzen Sie unseren Prozentrechner für schnelle und präzise Umrechnungen zwischen allen Einheiten.'
    },
    faq: [
      { question: 'Wie rechne ich Prozent in Promille um?', answer: 'Multiplizieren Sie Prozent mit 10 für Promille. Beispiel: 2% = 20‰. Umgekehrt: Promille durch 10 teilen für Prozent. 15‰ = 1,5%.' },
      { question: 'Was sind Basispunkte bei Zinsen?', answer: 'Ein Basispunkt (bp) ist 0,01%. 100 bp = 1%. Wenn die EZB den Zins um 25 bp erhöht, bedeutet das +0,25%. Basispunkte machen kleine Änderungen präzise und eindeutig.' },
      { question: 'Wie viel ist 1 ppm in Prozent?', answer: '1 ppm = 0,0001%. Für die Umrechnung: ppm ÷ 10.000 = Prozent. Beispiel: 500 ppm = 0,05%.' },
      { question: 'Wie berechne ich 19% Mehrwertsteuer?', answer: 'Netto × 0,19 = MwSt-Betrag. Netto × 1,19 = Brutto. Umgekehrt: Brutto ÷ 1,19 = Netto. Beispiel: 100 € netto + 19% MwSt = 119 € brutto.' },
      { question: 'Was bedeutet 0,5 Promille Alkohol?', answer: '0,5‰ = 0,05% = 0,5 Gramm Alkohol pro Kilogramm Blut. Das entspricht etwa einem halben Liter Bier oder einem Viertel Liter Wein für einen 70 kg schweren Mann.' },
      { question: 'Wie rechne ich Prozent in einen Bruch um?', answer: 'Prozent durch 100 teilen. 25% = 25/100 = 1/4. 75% = 75/100 = 3/4. Umgekehrt: Bruch mit 100 multiplizieren. 1/5 = 20%.' }
    ]
  },
  {
    id: 'verbrauch-und-kraftstoff',
    slug: 'verbrauch-und-kraftstoff',
    title: 'Kraftstoffverbrauch verstehen: l/100km, mpg und km/l umrechnen',
    description: 'Kraftstoffverbrauch und Verbrauchseinheiten erklärt. Lernen Sie den Unterschied zwischen l/100km, mpg und km/l mit praktischen Tipps zum Spritsparen.',
    category: 'verbrauch',
    relatedCategories: ['verbrauch', 'laenge', 'volumen'],
    relatedPairs: [
      { categorySlug: 'verbrauch', fromUnit: 'l_100km', toUnit: 'mpg_us' },
      { categorySlug: 'verbrauch', fromUnit: 'mpg_us', toUnit: 'l_100km' },
      { categorySlug: 'verbrauch', fromUnit: 'l_100km', toUnit: 'km_l' },
      { categorySlug: 'verbrauch', fromUnit: 'km_l', toUnit: 'l_100km' },
    ],
    content: {
      intro: 'Der Kraftstoffverbrauch ist für Autofahrer ein wichtiges Thema – sowohl beim Fahrzeugkauf als auch bei der laufenden Nutzung. In Europa wird der Verbrauch meist in Litern pro 100 Kilometer (l/100km) angegeben, während in den USA und Großbritannien Meilen pro Gallone (mpg) üblich sind. Dieser Leitfaden erklärt die verschiedenen Verbrauchseinheiten, zeigt Umrechnungen und gibt praktische Tipps, wie Sie Ihren Verbrauch verstehen und senken können.',
      sections: [
        {
          title: 'Liter pro 100 Kilometer (l/100km)',
          content: 'In Deutschland, Österreich, der Schweiz und den meisten europäischen Ländern ist l/100km der Standard:\n\nDefinition:\n• Verbrauch in Litern für 100 km Strecke\n• Je niedriger der Wert, desto sparsamer das Fahrzeug\n\nTypische Werte:\n• Kleinwagen: 4-6 l/100km\n• Kompaktwagen: 5-7 l/100km\n• Mittelklasse: 6-9 l/100km\n• SUV: 8-12 l/100km\n• Sportwagen: 10-15 l/100km\n• Diesel: meist 1-2 l weniger als Benziner\n\nBerechnung:\n• Getankte Liter ÷ gefahrene km × 100\n• Beispiel: 45 Liter für 600 km\n• 45 ÷ 600 × 100 = 7,5 l/100km\n\nWLTP-Verbrauchswerte:\n• Seit 2017 Standard für Neuwagen\n• Realistischer als das alte NEFZ-Verfahren\n• Unterscheidet verschiedene Fahrzyklen\n• Praxistipp: Rechnen Sie +0,5 bis +1 l für den Realverbrauch'
        },
        {
          title: 'Meilen pro Gallone (mpg) – US und UK',
          content: 'In den USA und Großbritannien wird mpg verwendet – hier bedeutet ein höherer Wert weniger Verbrauch!\n\nUS mpg vs. UK mpg:\n• US-Gallone = 3,785 Liter\n• UK-Gallone = 4,546 Liter\n• UK mpg-Werte sind daher etwa 20% höher!\n\nTypische US-Werte:\n• Kleinwagen: 30-40 mpg\n• Mittelklasse: 25-35 mpg\n• SUV: 20-25 mpg\n• Pickup: 15-20 mpg\n\nUmrechnung l/100km ↔ mpg:\nUS: mpg = 235,214583 ÷ l/100km\nUK: mpg = 282,481 ÷ l/100km\n\nBeispiele:\n• 8 l/100km = 29,4 mpg (US) = 35,3 mpg (UK)\n• 6 l/100km = 39,2 mpg (US) = 47,1 mpg (UK)\n• 30 mpg (US) = 7,84 l/100km\n\nWichtig: Bei US-Fahrzeugangaben immer auf "US mpg" oder "UK mpg" achten!'
        },
        {
          title: 'Kilometer pro Liter (km/l)',
          content: 'Diese Einheit wird in einigen asiatischen Ländern verwendet und ist besonders intuitiv:\n\nDefinition:\n• Kilometer, die mit einem Liter Kraftstoff gefahren werden können\n• Je höher der Wert, desto sparsamer\n\nUmrechnung:\n• km/l = 100 ÷ l/100km\n• l/100km = 100 ÷ km/l\n\nBeispiele:\n• 15 km/l = 6,67 l/100km\n• 10 km/l = 10 l/100km\n• 20 km/l = 5 l/100km\n\nVorteil dieser Einheit:\n• Leicht verständlich: "15 km mit einem Liter"\n• Reichweitenberechnung einfach: Tankinhalt × km/l\n• Beispiel: 50 Liter Tank, 15 km/l = 750 km Reichweite\n\nVerbreitung:\n• Japan: häufig verwendet\n• Indien: Standard\n• Brasilien: km/l für Ethanol-Fahrzeuge'
        },
        {
          title: 'Verbrauch von Elektrofahrzeugen',
          content: 'Bei Elektroautos werden andere Einheiten verwendet:\n\nkWh/100km:\n• Energieverbrauch in Kilowattstunden pro 100 km\n• Typische Werte: 15-25 kWh/100km\n• Kleinwagen: 12-18 kWh/100km\n• SUV: 20-30 kWh/100km\n\nReichweite:\n• Akkukapazität ÷ Verbrauch × 100\n• Beispiel: 60 kWh Akku, 18 kWh/100km\n• 60 ÷ 18 × 100 = 333 km Reichweite\n\nKostenvergleich:\n• Strom: ca. 0,30 €/kWh\n• 18 kWh/100km = 5,40 €/100km\n• Benziner 7 l/100km bei 1,70 €/l = 11,90 €/100km\n\nmpge (Miles per Gallon equivalent):\n• US-Einheit für Elektroautos\n• 33,7 kWh = 1 Gallone Benzin-Äquivalent\n• Typisch: 100-130 mpge\n\nVerbrauchsfaktoren bei E-Autos:\n• Temperatur: bis 30% mehr im Winter\n• Geschwindigkeit: über 100 km/h steigt Verbrauch stark\n• Klima/Heizung: erheblicher Einfluss\n• Rekuperation: kann 10-20% zurückgewinnen'
        },
        {
          title: 'Praktische Tipps zum Spritsparen',
          content: 'So senken Sie Ihren Kraftstoffverbrauch effektiv:\n\nFahrweise:\n• Vorausschauend fahren, vermeiden von Bremsen\n• Gleichmäßige Geschwindigkeit halten\n• Früh hochschalten (ab 2000 U/min)\n• Motorbremse nutzen statt Bremsen\n• Nicht im Stand laufen lassen\n\nGeschwindigkeit:\n• 100 km/h statt 130 km/h: ca. 20% weniger Verbrauch\n• Tempomat auf Autobahnen nutzen\n• Bei >100 km/h steigt Verbrauch überproportional\n\nFahrzeugwartung:\n• Reifendruck: 0,5 bar zu wenig = +2-3% Verbrauch\n• Airfilter bei Bedarf wechseln\n• Motoröl nach Vorschrift\n• Dachbox entfernt: -10 bis -15%\n• Unnötigen Ballast entfernen\n\nKlimaanlage:\n• Bei Stadtverkehr: Fenster öffnen sparsamer\n• Bei Autobahn: Klimaanlage sparsamer als offene Fenster\n• Verbrauch: 0,5-1 l/100km bei Vollast\n\nPlanung:\n• Stau umfahren (Navigation)\n• Kombinieren von Fahrten\n• Kurze Strecken: Fahrrad oder ÖPNV\n• Motor warm fahren, nicht heizen'
        }
      ],
      conclusion: 'Das Verständnis von Kraftstoffverbrauch und seinen Einheiten hilft beim Fahrzeugvergleich und beim Sparen. Besonders wichtig: Die Einheit mpg hat je nach Land (US oder UK) unterschiedliche Bedeutung. Nutzen Sie unseren Verbrauchs-Umrechner für präzise Umrechnungen und behalten Sie Ihren Verbrauch im Blick – das spart Geld und schont die Umwelt.'
    },
    faq: [
      { question: 'Wie rechne ich l/100km in mpg um?', answer: 'US-mpg = 235,2 ÷ l/100km. UK-mpg = 282,5 ÷ l/100km. Beispiel: 8 l/100km = 29,4 mpg (US) oder 35,3 mpg (UK). Achten Sie auf die Unterscheidung!' },
      { question: 'Was ist ein guter Verbrauchswert?', answer: 'Sehr sparsam: unter 5 l/100km. Gut: 5-7 l/100km. Durchschnitt: 7-9 l/100km. Hoch: über 10 l/100km. Diesel sind meist 1-2 l sparsamer. Elektroautos: unter 20 kWh/100km.' },
      { question: 'Warum ist mein Realverbrauch höher als angegeben?', answer: 'WLTP-Werte sind Laborwerte. Realer Verbrauch ist 0,5-2 l höher durch: Klima, Fahrweise, kurze Strecken, Winter, Schnellfahrten auf Autobahn, beladenes Fahrzeug.' },
      { question: 'Wie berechne ich die Reichweite meines Autos?', answer: 'Reichweite = Tankinhalt ÷ l/100km × 100. Beispiel: 50-Liter-Tank bei 8 l/100km = 50 ÷ 8 × 100 = 625 km. Mit Reserve: ca. 550-600 km.' },
      { question: 'Spart Tempomat Kraftstoff?', answer: 'Ja, auf ebener Autobahn. Der Tempomat hält konstante Geschwindigkeit, was effizienter ist als manuelles Fahren. Bei hügeligen Strecken kann manuelles Fahren sparsamer sein.' },
      { question: 'Wie viel spart ein Elektroauto?', answer: 'Beispiel: 18 kWh/100km bei 0,30 €/kWh = 5,40 €/100km. Benziner mit 7 l/100km bei 1,70 €/l = 11,90 €/100km. Ersparnis: ca. 50% bei den Energiekosten.' }
    ]
  },
  {
    id: 'frequenz-und-hertz',
    slug: 'frequenz-und-hertz',
    title: 'Frequenz verstehen: Hz, kHz, MHz, GHz und ihre Anwendungen',
    description: 'Frequenzeinheiten und ihre Bedeutung erklärt. Erfahren Sie alles über Hertz, Kilohertz, Megahertz, Gigahertz und Anwendungen in Audio, Funk und Computer.',
    category: 'frequenz',
    relatedCategories: ['frequenz', 'zeit', 'geschwindigkeit'],
    relatedPairs: [
      { categorySlug: 'frequenz', fromUnit: 'Hz', toUnit: 'kHz' },
      { categorySlug: 'frequenz', fromUnit: 'MHz', toUnit: 'GHz' },
      { categorySlug: 'frequenz', fromUnit: 'rpm', toUnit: 'Hz' },
      { categorySlug: 'frequenz', fromUnit: 'rad_s', toUnit: 'Hz' },
    ],
    content: {
      intro: 'Die Frequenz ist eine fundamentale physikalische Größe, die in fast allen Bereichen der Technik und des täglichen Lebens eine Rolle spielt. Von der Taktfrequenz Ihres Computer-Prozessors über die Sendefrequenz Ihres Radiosenders bis zur Abtastrate Ihrer Musik – Frequenz ist überall. Dieser Leitfaden erklärt die Einheiten der Frequenz, zeigt typische Anwendungen und hilft Ihnen, diese wichtige Größe besser zu verstehen.',
      sections: [
        {
          title: 'Was ist Frequenz?',
          content: 'Frequenz beschreibt, wie oft ein Ereignis in einer bestimmten Zeit wiederholt wird:\n\nDefinition:\n• Anzahl der Wiederholungen pro Zeiteinheit\n• SI-Einheit: Hertz (Hz)\n• 1 Hz = 1 Ereignis pro Sekunde\n\nFormel:\n• f = 1 / T (Frequenz = Kehrwert der Periodendauer)\n• T = 1 / f (Periodendauer = Kehrwert der Frequenz)\n\nBeispiele:\n• 1 Hz = 1 Schwingung pro Sekunde\n• 50 Hz = 50 Schwingungen pro Sekunde\n• 1000 Hz (1 kHz) = 1000 Schwingungen pro Sekunde\n\nPeriodendauer:\n• Bei 50 Hz: T = 1/50 = 0,02 Sekunden = 20 Millisekunden\n• Bei 1 kHz: T = 1/1000 = 0,001 Sekunden = 1 Millisekunde\n\nFrequenzbereiche:\n• Infraschall: unter 20 Hz (für Menschen nicht hörbar)\n• Hörbereich: 20 Hz - 20.000 Hz (20 kHz)\n• Ultraschall: über 20 kHz'
        },
        {
          title: 'Hertz und seine Vielfachen',
          content: 'Wie bei anderen Einheiten werden Präfixe für größere Einheiten verwendet:\n\nPräfixe:\n• Millihertz (mHz) = 0,001 Hz\n• Hertz (Hz) = 1 Hz (Basiseinheit)\n• Kilohertz (kHz) = 1.000 Hz\n• Megahertz (MHz) = 1.000.000 Hz\n• Gigahertz (GHz) = 1.000.000.000 Hz\n• Terahertz (THz) = 1.000.000.000.000 Hz\n\nUmrechnung:\n• kHz → Hz: × 1.000\n• MHz → Hz: × 1.000.000\n• GHz → Hz: × 1.000.000.000\n• GHz → MHz: × 1.000\n\nBeispiele:\n• 3,5 GHz = 3.500 MHz = 3.500.000.000 Hz\n• 88 MHz Radio = 88.000.000 Hz\n• 440 Hz (Kammerton A) = 0,44 kHz'
        },
        {
          title: 'Audio und Akustik',
          content: 'Im Audiobereich ist Frequenz besonders wichtig:\n\nHörbereich Mensch:\n• Untergrenze: ca. 20 Hz\n• Obergrenze: ca. 20.000 Hz (20 kHz)\n• Mit Alter sinkt die Obergrenze (Presbyakusis)\n\nMusikalische Frequenzen:\n• Kammerton A: 440 Hz (Standard-Stimmung)\n• Mittleres C (c¹): 261,63 Hz\n• Tieftes C (C): 65,41 Hz\n• Hohes C (c⁴): 1.046,5 Hz\n• Klaviatur: 27,5 Hz bis 4.186 Hz\n\nAudio-Abtastraten:\n• CD-Qualität: 44,1 kHz (44.100 Samples/Sekunde)\n• DVD-Audio: 96 kHz oder 192 kHz\n• Studio-Qualität: bis 384 kHz\n• Telefon: 8 kHz (begrenzte Qualität)\n\nLautsprecher-Bereiche:\n• Subwoofer: 20-200 Hz\n• Woofer: 200-2.000 Hz\n• Mitteltöner: 500-5.000 Hz\n• Hochtöner: 2.000-20.000 Hz'
        },
        {
          title: 'Funk und Telekommunikation',
          content: 'Frequenzbänder für drahtlose Kommunikation:\n\nFrequenzbereiche:\n• Langwelle (LW): 30-300 kHz\n• Mittelwelle (MW): 300 kHz - 3 MHz\n• Kurzwelle (KW): 3-30 MHz\n• UKW: 30-300 MHz\n\nRadio:\n• FM (UKW): 87,5-108 MHz\n• AM (Mittelwelle): 531-1.602 kHz\n• DAB+: 174-240 MHz\n\nMobilfunk:\n• 4G (LTE): 700, 800, 900, 1.800, 2.100, 2.600 MHz\n• 5G: 3,6 GHz, 2,1 GHz und neue Bänder\n\nWLAN:\n• 2,4 GHz-Band: 2.400-2.500 MHz\n• 5 GHz-Band: 5.150-5.875 MHz\n• WiFi 6E: bis 7,125 GHz\n\nBluetooth: 2,4 GHz\nGPS: 1.575,42 MHz (L1), 1.227,60 MHz (L2)\n\nSatellit: 10-40 GHz (Ku, Ka-Band)'
        },
        {
          title: 'Computer und Prozessoren',
          content: 'Die Taktfrequenz ist ein wichtiger Parameter für Prozessoren:\n\nTaktfrequenz:\n• Gibt an, wie viele Takte pro Sekunde ausgeführt werden\n• 3,5 GHz = 3,5 Milliarden Takte/Sekunde\n• Höhere Frequenz = mehr Rechenleistung (theoretisch)\n\nHistorische Entwicklung:\n• 1981 (IBM PC): 4,77 MHz\n• 1995 (Pentium): 100-200 MHz\n• 2005 (Pentium 4): 3-4 GHz\n• 2024 (Moderne CPUs): 3-5 GHz (Boost bis 6+ GHz)\n\nModerne Prozessoren:\n• Intel Core i7/i9: 3,0-5,0 GHz\n• AMD Ryzen: 3,5-5,5 GHz\n• Apple M3: 3,0-4,0 GHz\n• Server-CPUs: 2,0-3,5 GHz\n\nWichtig zu wissen:\n• Mehr Kerne können wichtiger sein als mehr GHz\n• Architektur-Verbesserungen beeinflussen Leistung\n• Höhere Frequenz = mehr Stromverbrauch\n• Übertaktung kann Schäden verursachen\n\nRAM-Frequenz:\n• DDR4: 2.133-3.200 MHz\n• DDR5: 4.800-6.400 MHz'
        },
        {
          title: 'Umdrehungen pro Minute (rpm)',
          content: 'In der Mechanik wird oft rpm statt Hz verwendet:\n\nDefinition:\n• 1 rpm = 1 Umdrehung pro Minute\n• 1 rpm = 1/60 Hz ≈ 0,0167 Hz\n\nUmrechnung:\n• rpm → Hz: ÷ 60\n• Hz → rpm: × 60\n• Beispiel: 3.000 rpm = 50 Hz\n\nTypische Drehzahlen:\n• Plattenspieler: 33⅓ rpm oder 45 rpm\n• Motorrad: 3.000-10.000 rpm\n• Auto-Leerlauf: 700-900 rpm\n• Auto-Drehzahlband: 2.000-6.500 rpm\n• LKW-Motor: 1.200-2.500 rpm\n• Zentrifuge: 10.000-50.000 rpm\n• Turbolader: 80.000-200.000 rpm\n\nElektromotoren:\n• Bei 50 Hz Netz: 3.000 rpm (2-polig), 1.500 rpm (4-polig)\n• Bei 60 Hz Netz: 3.600 rpm (2-polig), 1.800 rpm (4-polig)\n\nAnwendung:\n• Drehzahlmesser im Auto\n• Bohrmaschine: 500-3.000 rpm\n• Kreissäge: 3.000-5.000 rpm'
        }
      ],
      conclusion: 'Die Frequenz ist eine universelle Größe, die in Technik, Musik, Kommunikation und vielen anderen Bereichen zentral ist. Ob Sie Audio-Equipment kaufen, WLAN-Router einrichten oder Prozessoren vergleichen – das Verständnis von Frequenzeinheiten hilft bei vielen Entscheidungen. Nutzen Sie unseren Frequenz-Umrechner für schnelle und präzise Umrechnungen zwischen Hz, kHz, MHz, GHz und rpm.'
    },
    faq: [
      { question: 'Wie rechne ich MHz in GHz um?', answer: 'Teilen Sie MHz durch 1.000 für GHz. Beispiel: 3.500 MHz = 3,5 GHz. Umgekehrt: GHz × 1.000 = MHz.' },
      { question: 'Was bedeutet 50 Hz beim Stromnetz?', answer: '50 Hz bedeutet, dass der Strom 50-mal pro Sekunde seine Richtung wechselt. In Europa ist 50 Hz Standard, in den USA 60 Hz. Dies beeinflusst auch die Drehzahl von Elektromotoren.' },
      { question: 'Wie rechne ich rpm in Hz um?', answer: 'Teilen Sie rpm durch 60 für Hz. Beispiel: 3.000 rpm ÷ 60 = 50 Hz. Umgekehrt: Hz × 60 = rpm.' },
      { question: 'Was ist der hörbare Frequenzbereich?', answer: 'Der Mensch kann Frequenzen von ca. 20 Hz bis 20.000 Hz (20 kHz) hören. Mit dem Alter sinkt die obere Grenze, bei älteren Menschen oft auf 10-15 kHz.' },
      { question: 'Was bedeutet Taktfrequenz bei Prozessoren?', answer: 'Die Taktfrequenz gibt an, wie viele Arbeitstakte ein Prozessor pro Sekunde ausführt. 3 GHz bedeuten 3 Milliarden Takte pro Sekunde. Höhere Frequenz bedeutet meist mehr Leistung, aber auch mehr Stromverbrauch.' },
      { question: 'Warum hat 5G höhere Frequenzen als 4G?', answer: 'Höhere Frequenzen ermöglichen höhere Datenraten, haben aber kürzere Reichweite und schlechtere Durchdringung von Wänden. 5G nutzt daher auch neue Sender-Infrastruktur mit kleineren Zellen.' }
    ]
  }
];

// Helper functions
export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(guide => guide.slug === slug);
}

export function getGuidesForCategory(categorySlug: string, limit: number = 2): Guide[] {
  return guides
    .filter(guide => 
      guide.category === categorySlug || 
      guide.relatedCategories.includes(categorySlug)
    )
    .slice(0, limit);
}

export function getAllGuideSlugs(): string[] {
  return guides.map(guide => guide.slug);
}

export function getStaticGuideParams(): Array<{ slug: string }> {
  return guides.map(guide => ({ slug: guide.slug }));
}
