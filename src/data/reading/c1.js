// C1 reading texts. Format and rules: src/data/reading.js.

export const C1 = [
  {
    id: 'r-c1-vier-tage-woche',
    level: 'C1',
    tags: ['work'],
    icon: 'work',
    title: { de: 'Vier Tage arbeiten, gleich viel schaffen?', en: 'Work four days, get as much done?' },
    paragraphs: [
      [
        [
          'Kaum ein arbeitspolitisches Thema wird derzeit so leidenschaftlich diskutiert wie die Vier-Tage-Woche.',
          'Hardly any labour policy topic is being debated as passionately as the four-day week.',
        ],
        [
          'Befürworter verweisen auf Pilotprojekte, in denen die Produktivität trotz kürzerer Arbeitszeit stabil blieb und die Zahl der Krankheitstage sank.',
          'Supporters point to pilot projects in which productivity stayed stable despite shorter working hours and the number of sick days fell.',
        ],
      ],
      [
        [
          'Kritiker halten dagegen, dass sich solche Ergebnisse kaum auf Branchen übertragen lassen, in denen die Arbeit an Anwesenheit gebunden ist.',
          'Critics counter that such results can hardly be transferred to industries where the work is tied to being present.',
        ],
        [
          'Eine Pflegekraft kann ihre Patienten schließlich nicht in vier statt fünf Tagen versorgen, ohne dass jemand die Lücke füllt.',
          'After all, a nurse cannot care for her patients in four days instead of five without someone filling the gap.',
        ],
        [
          'Angesichts des ohnehin bestehenden Fachkräftemangels befürchten sie, dass sich die Personalnot weiter verschärft.',
          'Given the existing shortage of skilled workers, they fear that the staffing crisis will get even worse.',
        ],
      ],
      [
        [
          'Unstrittig ist allerdings, dass die Frage nach der Arbeitszeit eng mit der Frage nach der Arbeitsorganisation verknüpft ist.',
          'What is undisputed, however, is that the question of working hours is closely linked to the question of how work is organised.',
        ],
        [
          'Wer überflüssige Meetings streicht und Zuständigkeiten klärt, gewinnt Zeit, ganz unabhängig davon, wie viele Tage die Woche hat.',
          'Anyone who cuts unnecessary meetings and clarifies responsibilities gains time, regardless of how many days the week has.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Worauf berufen sich die Befürworter?',
        options: ['Auf Pilotprojekte', 'Auf Gesetze aus anderen Ländern', 'Auf Umfragen unter Chefs'],
        answer: 0,
      },
      {
        q: 'Was ist das Hauptargument der Kritiker?',
        options: [
          'Die Vier-Tage-Woche ist zu teuer',
          'Viele Branchen sind an Anwesenheit gebunden',
          'Mitarbeiter wollen gar nicht weniger arbeiten',
        ],
        answer: 1,
      },
      {
        q: 'Welche Schlussfolgerung zieht der Text?',
        options: [
          'Die Vier-Tage-Woche sollte verboten werden',
          'Bessere Arbeitsorganisation spart unabhängig davon Zeit',
          'Mehr Meetings verbessern die Produktivität',
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-c1-technische-schulden',
    level: 'C1',
    tags: ['work'],
    icon: 'code',
    title: { de: 'Schulden, die keiner sieht', en: 'Debt that nobody sees' },
    paragraphs: [
      [
        [
          'Technische Schulden entstehen, wenn ein Team unter Zeitdruck eine schnelle statt einer sauberen Lösung wählt.',
          'Technical debt arises when a team under time pressure chooses a quick solution instead of a clean one.',
        ],
        [
          'Das ist nicht per se verwerflich: Manchmal ist es betriebswirtschaftlich sinnvoll, ein Produkt früher auf den Markt zu bringen und später nachzubessern.',
          'That is not wrong in itself: sometimes it makes business sense to bring a product to market earlier and improve it later.',
        ],
      ],
      [
        [
          'Problematisch wird es erst, wenn das Nachbessern auf die lange Bank geschoben wird.',
          'It only becomes a problem when the improving is put off indefinitely.',
        ],
        [
          'Dann wächst die Komplexität, jede Änderung dauert länger, und neue Kolleginnen brauchen Wochen, um sich einzuarbeiten.',
          'Then the complexity grows, every change takes longer, and new colleagues need weeks to get up to speed.',
        ],
        [
          'Für das Management bleibt das oft unsichtbar, weil sich die Kosten nicht in einer einzelnen Zahl niederschlagen.',
          'For management this often stays invisible because the cost is not reflected in a single number.',
        ],
      ],
      [
        [
          'Erfahrene Entwicklerinnen sprechen das Thema deshalb gezielt in der Sprache der Geschäftsführung an.',
          'Experienced developers therefore deliberately raise the topic in the language of management.',
        ],
        [
          'Statt über unschönen Code zu klagen, rechnen sie vor, wie viele Arbeitstage pro Quartal durch Umwege verloren gehen.',
          'Instead of complaining about ugly code, they calculate how many working days per quarter are lost to workarounds.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wann entstehen technische Schulden laut Text?',
        options: [
          'Wenn das Budget zu groß ist',
          'Wenn unter Zeitdruck schnelle Lösungen gewählt werden',
          'Wenn zu viel getestet wird',
        ],
        answer: 1,
      },
      {
        q: 'Warum bemerkt das Management das Problem oft nicht?',
        options: [
          'Die Kosten zeigen sich nicht in einer einzelnen Zahl',
          'Die Entwickler verschweigen es',
          'Es gibt keine Kosten',
        ],
        answer: 0,
      },
      {
        q: 'Wie sprechen erfahrene Entwicklerinnen das Thema an?',
        options: ['Sie beschweren sich über schlechten Code', 'Sie rechnen verlorene Arbeitstage vor', 'Sie kündigen'],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-c1-datenschutz',
    level: 'C1',
    tags: ['work', 'everyday'],
    icon: 'lock',
    title: { de: 'Der Preis der Bequemlichkeit', en: 'The price of convenience' },
    paragraphs: [
      [
        [
          'Kaum jemand liest die Datenschutzerklärung, bevor er eine App installiert.',
          'Hardly anyone reads the privacy policy before installing an app.',
        ],
        [
          'Man klickt auf „Akzeptieren“, weil man das Angebot sofort nutzen will, und vertraut darauf, dass schon nichts passieren wird.',
          'You click "Accept" because you want to use the service right away, and trust that nothing will happen.',
        ],
      ],
      [
        [
          'Die Datenschutz-Grundverordnung sollte dieses Ungleichgewicht zwischen Nutzern und Konzernen verringern.',
          'The General Data Protection Regulation was meant to reduce this imbalance between users and corporations.',
        ],
        [
          'Tatsächlich haben Bürgerinnen und Bürger seitdem das Recht, Auskunft über ihre gespeicherten Daten zu verlangen und deren Löschung zu beantragen.',
          'Indeed, citizens have since had the right to request information about their stored data and to apply for its deletion.',
        ],
        [
          'In der Praxis machen davon allerdings nur wenige Gebrauch, zumal das Verfahren mitunter mühsam ist.',
          'In practice, however, only a few make use of this, especially since the process can be tedious.',
        ],
      ],
      [
        [
          'Für Unternehmen hat die Verordnung den Aufwand spürbar erhöht, was gerade kleine Firmen beklagen.',
          'For companies the regulation has noticeably increased the effort, which small firms in particular complain about.',
        ],
        [
          'Ob sie ihr eigentliches Ziel erreicht hat, hängt letztlich davon ab, wie viele Menschen ihre Rechte auch wahrnehmen.',
          'Whether it has achieved its real goal ultimately depends on how many people actually exercise their rights.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Warum klicken viele Menschen auf „Akzeptieren“?',
        options: ['Sie haben die Erklärung gelesen', 'Sie wollen die App sofort nutzen', 'Das Gesetz verlangt es'],
        answer: 1,
      },
      {
        q: 'Welches Recht nennt der Text?',
        options: [
          'Das Recht auf Auskunft und Löschung',
          'Das Recht auf eine kostenlose App',
          'Das Recht auf Schadenersatz',
        ],
        answer: 0,
      },
      {
        q: 'Wovon hängt der Erfolg der Verordnung laut Text ab?',
        options: ['Von den Strafen für Firmen', 'Davon, wie viele Menschen ihre Rechte nutzen', 'Von neuen Apps'],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-c1-gehaltsverhandlung',
    level: 'C1',
    tags: ['work'],
    icon: 'chats',
    title: { de: 'Über Geld spricht man doch', en: 'People do talk about money' },
    paragraphs: [
      [
        [
          'In Deutschland gilt es vielerorts noch immer als unhöflich, über das eigene Gehalt zu sprechen.',
          'In many places in Germany it is still considered impolite to talk about your own salary.',
        ],
        [
          'Davon profitieren vor allem Arbeitgeber, denn wer nicht weiß, was Kollegen verdienen, verhandelt schlechter.',
          'Employers above all benefit from this, because anyone who does not know what colleagues earn negotiates worse.',
        ],
      ],
      [
        [
          'Wer in eine Gehaltsverhandlung geht, sollte daher gut vorbereitet sein und eine konkrete Zahl nennen können.',
          'Anyone going into a salary negotiation should therefore be well prepared and able to name a concrete figure.',
        ],
        [
          'Hilfreich ist es, die eigenen Erfolge der letzten Monate schriftlich festzuhalten, und zwar möglichst messbar.',
          'It helps to record your own successes of the past months in writing, and as measurably as possible.',
        ],
        [
          'Ein Satz wie „Ich habe die Ladezeit unserer App halbiert“ überzeugt mehr als „Ich habe viel gearbeitet“.',
          'A sentence like "I halved the loading time of our app" is more convincing than "I worked a lot".',
        ],
      ],
      [
        [
          'Lehnt die Vorgesetzte eine Erhöhung ab, lohnt es sich nachzuhaken, unter welchen Bedingungen sie im nächsten Jahr möglich wäre.',
          'If the manager turns down a raise, it is worth following up on the conditions under which it would be possible next year.',
        ],
        [
          'Auch Weiterbildungen, zusätzliche Urlaubstage oder ein Jobticket können Gegenstand der Verhandlung sein.',
          'Further training, extra days of holiday or a public transport ticket can also be part of the negotiation.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wem nützt das Schweigen über Gehälter laut Text?',
        options: ['Den Arbeitnehmern', 'Vor allem den Arbeitgebern', 'Niemandem'],
        answer: 1,
      },
      {
        q: 'Wie sollte man seine Erfolge darstellen?',
        options: ['Möglichst messbar', 'Möglichst bescheiden', 'Gar nicht'],
        answer: 0,
      },
      {
        q: 'Was empfiehlt der Text, wenn die Erhöhung abgelehnt wird?',
        options: ['Sofort kündigen', 'Nach den Bedingungen für das nächste Jahr fragen', 'Nie wieder fragen'],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-c1-fachkraeftemangel',
    level: 'C1',
    tags: ['work'],
    icon: 'work',
    title: { de: 'Gesucht: fast alle', en: 'Wanted: almost everyone' },
    paragraphs: [
      [
        [
          'Ob Elektriker, Pflegekräfte oder Softwareentwickler: In zahlreichen Branchen bleiben Stellen monatelang unbesetzt.',
          'Whether electricians, nurses or software developers: in numerous industries jobs remain unfilled for months.',
        ],
        [
          'Hauptursache ist der demografische Wandel, denn die geburtenstarken Jahrgänge gehen nach und nach in Rente.',
          'The main cause is demographic change, as the baby-boom generation is gradually retiring.',
        ],
        [
          'Allein dadurch fehlen dem Arbeitsmarkt in den kommenden Jahren Millionen Erwerbstätige.',
          'This alone means the labour market will lack millions of workers in the coming years.',
        ],
      ],
      [
        [
          'Die Politik setzt deshalb verstärkt auf qualifizierte Zuwanderung.',
          'Politicians are therefore increasingly relying on skilled immigration.',
        ],
        [
          'Kritiker bemängeln jedoch, dass Visaverfahren und die Anerkennung von Abschlüssen nach wie vor zu lange dauern.',
          'Critics complain, however, that visa procedures and the recognition of qualifications still take too long.',
        ],
        [
          'Manche Fachkraft hat bereits in einem anderen Land unterschrieben, bevor ihr deutscher Antrag überhaupt bearbeitet wurde.',
          'Some skilled workers have already signed elsewhere before their German application has even been processed.',
        ],
      ],
      [
        [
          'Unternehmen reagieren unterdessen mit eigenen Strategien.',
          'Meanwhile companies are reacting with their own strategies.',
        ],
        [
          'Sie bilden verstärkt selbst aus, bieten flexible Arbeitszeitmodelle an oder holen Rentner stundenweise zurück.',
          'They train more people themselves, offer flexible working-time models or bring pensioners back for a few hours.',
        ],
        [
          'Einig sind sich fast alle Beobachter darin, dass keine einzelne Maßnahme das Problem lösen wird.',
          'Almost all observers agree that no single measure will solve the problem.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was ist laut Text die Hauptursache des Fachkräftemangels?',
        options: ['Zu hohe Löhne', 'Der demografische Wandel', 'Die Digitalisierung'],
        answer: 1,
      },
      {
        q: 'Was bemängeln Kritiker?',
        options: ['Zu lange Visa- und Anerkennungsverfahren', 'Zu viele Zuwanderer', 'Zu wenig Universitäten'],
        answer: 0,
      },
      {
        q: 'Worin sind sich fast alle Beobachter einig?',
        options: [
          'Zuwanderung ist unnötig',
          'Rentner sollen voll arbeiten',
          'Keine einzelne Maßnahme löst das Problem',
        ],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-fehlerkultur',
    level: 'C1',
    tags: ['work'],
    icon: 'warning',
    title: { de: 'Aus Fehlern lernen, aber wie?', en: 'Learning from mistakes, but how?' },
    paragraphs: [
      [
        [
          'Als in Lisas Team ein fehlerhaftes Update den Online-Shop eines Kunden für zwei Stunden lahmlegte, rechnete sie mit dem Schlimmsten.',
          'When a faulty update in Lisa’s team took a client’s online shop down for two hours, she expected the worst.',
        ],
        [
          'Statt nach einem Schuldigen zu suchen, berief die Teamleitung jedoch ein sogenanntes Post-Mortem ein.',
          'Instead of looking for someone to blame, however, the team leadership called a so-called post-mortem.',
        ],
        [
          'Dabei wird rekonstruiert, wie es zu dem Fehler kommen konnte, ohne Einzelne an den Pranger zu stellen.',
          'It reconstructs how the error could happen without pillorying individuals.',
        ],
      ],
      [
        [
          'Schnell stellte sich heraus, dass nicht ein einzelner Mensch versagt hatte, sondern mehrere Sicherungen gleichzeitig.',
          'It soon emerged that it was not one person who had failed but several safeguards at once.',
        ],
        [
          'Die Tests deckten den Sonderfall nicht ab, und die Überwachung schlug zu spät Alarm.',
          'The tests did not cover the edge case, and monitoring raised the alarm too late.',
        ],
        [
          'Hätte man den Fehler einer Person angelastet, wären diese Schwachstellen vermutlich unentdeckt geblieben.',
          'Had the error been blamed on one person, these weak spots would probably have remained undiscovered.',
        ],
      ],
      [
        [
          'Eine offene Fehlerkultur gilt in Deutschland noch längst nicht überall als selbstverständlich.',
          'An open culture around mistakes is still far from taken for granted everywhere in Germany.',
        ],
        [
          'Gerade in traditionellen Unternehmen werden Fehler eher vertuscht als besprochen.',
          'Especially in traditional companies, mistakes tend to be covered up rather than discussed.',
        ],
        [
          'Lisa jedenfalls meldet seitdem auch kleine Unstimmigkeiten sofort, weil sie weiß, dass ihr daraus kein Nachteil entsteht.',
          'Lisa, at any rate, now reports even small inconsistencies right away because she knows it will not harm her.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was ist ein Post-Mortem laut Text?',
        options: [
          'Eine Abmahnung',
          'Eine Rekonstruktion des Fehlers ohne Schuldzuweisung',
          'Ein Gespräch mit dem Kunden',
        ],
        answer: 1,
      },
      { q: 'Was hatte versagt?', options: ['Mehrere Sicherungen gleichzeitig', 'Nur Lisa', 'Der Kunde'], answer: 0 },
      {
        q: 'Warum meldet Lisa jetzt auch kleine Probleme?',
        options: ['Weil sie dafür bezahlt wird', 'Weil es Pflicht ist', 'Weil ihr daraus kein Nachteil entsteht'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-flache-hierarchien',
    level: 'C1',
    tags: ['work'],
    icon: 'community',
    title: { de: 'Ohne Chef geht es auch?', en: 'Can you do without a boss?' },
    paragraphs: [
      [
        [
          'Flache Hierarchien sind in vielen Stellenanzeigen zum Standardversprechen geworden.',
          'Flat hierarchies have become a standard promise in many job adverts.',
        ],
        [
          'Gemeint ist, dass Entscheidungen nicht von oben verordnet, sondern im Team getroffen werden.',
          'What is meant is that decisions are not decreed from above but made in the team.',
        ],
        [
          'In der Praxis erweist sich dieses Versprechen allerdings oft als trügerisch.',
          'In practice, however, this promise often turns out to be deceptive.',
        ],
      ],
      [
        [
          'Wo es keine formellen Vorgesetzten gibt, entstehen nämlich häufig informelle Machtstrukturen.',
          'Where there are no formal superiors, informal power structures often emerge, you see.',
        ],
        [
          'Wer am längsten dabei ist oder am lautesten spricht, setzt sich durch.',
          'Whoever has been there longest or speaks loudest gets their way.',
        ],
        [
          'Für Neue ist dann kaum durchschaubar, wer tatsächlich entscheidet.',
          'For newcomers it is then hardly clear who actually decides.',
        ],
      ],
      [
        [
          'Erfolgreiche Unternehmen mit flachen Strukturen setzen daher auf klar dokumentierte Zuständigkeiten.',
          'Successful companies with flat structures therefore rely on clearly documented responsibilities.',
        ],
        [
          'Jede Entscheidung hat einen Verantwortlichen, auch wenn dieser keinen Titel trägt.',
          'Every decision has an owner, even if that person holds no title.',
        ],
        [
          'Hierarchiefrei ist eine Organisation also selten, transparent kann sie hingegen sehr wohl sein.',
          'So an organisation is rarely free of hierarchy, but it can very well be transparent.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was ist mit flachen Hierarchien gemeint?',
        options: ['Entscheidungen werden im Team getroffen', 'Es gibt keine Regeln', 'Alle verdienen gleich viel'],
        answer: 0,
      },
      {
        q: 'Welches Problem entsteht oft?',
        options: ['Zu viele Chefs', 'Informelle Machtstrukturen', 'Zu wenig Meetings'],
        answer: 1,
      },
      {
        q: 'Worauf setzen erfolgreiche Unternehmen?',
        options: ['Auf mehr Titel', 'Auf Abstimmungen über alles', 'Auf klar dokumentierte Zuständigkeiten'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-quiet-quitting',
    level: 'C1',
    tags: ['work'],
    icon: 'weak',
    title: { de: 'Dienst nach Vorschrift', en: 'Working to rule' },
    paragraphs: [
      [
        [
          'Unter dem Schlagwort „Quiet Quitting“ wird ein Phänomen diskutiert, das es in Deutschland längst gibt.',
          'Under the buzzword "quiet quitting" a phenomenon is being discussed that has long existed in Germany.',
        ],
        [
          'Beschäftigte erledigen genau das, was im Vertrag steht, aber keinen Handgriff mehr.',
          'Employees do exactly what is in their contract, but not a single thing more.',
        ],
        [
          'Hierzulande sprach man früher schlicht von „Dienst nach Vorschrift“ oder der „inneren Kündigung“.',
          'In this country it used to be called simply "working to rule" or "inner resignation".',
        ],
      ],
      [
        [
          'Umfragen zufolge fühlt sich nur ein kleiner Teil der Beschäftigten emotional stark an seinen Arbeitgeber gebunden.',
          'According to surveys, only a small share of employees feel strongly emotionally attached to their employer.',
        ],
        [
          'Als Gründe werden häufig mangelnde Wertschätzung, fehlende Entwicklungsmöglichkeiten und schlechte Führung genannt.',
          'The reasons frequently given are a lack of appreciation, missing development opportunities and poor leadership.',
        ],
        [
          'Am Gehalt allein liegt es dagegen seltener, als man vermuten würde.',
          'Salary alone, on the other hand, is less often the cause than one might assume.',
        ],
      ],
      [
        [
          'Ob das Phänomen Grund zur Sorge ist, wird kontrovers beurteilt.',
          'Whether the phenomenon is cause for concern is judged controversially.',
        ],
        [
          'Die einen sehen darin eine Gefahr für die Produktivität, die anderen eine gesunde Abgrenzung nach Jahren der Überlastung.',
          'Some see it as a danger to productivity, others as healthy boundary-setting after years of overload.',
        ],
        [
          'Fest steht, dass sich das Verhältnis zwischen Arbeitgebern und Beschäftigten spürbar verändert.',
          'What is certain is that the relationship between employers and employees is noticeably changing.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wie nannte man das Phänomen früher in Deutschland?',
        options: ['Homeoffice', 'Dienst nach Vorschrift', 'Gleitzeit'],
        answer: 1,
      },
      {
        q: 'Was wird seltener als Grund genannt, als man vermuten würde?',
        options: ['Das Gehalt', 'Schlechte Führung', 'Fehlende Wertschätzung'],
        answer: 0,
      },
      {
        q: 'Wie sehen manche das Phänomen positiv?',
        options: ['Als Weg zu mehr Gehalt', 'Als Chance auf Beförderung', 'Als gesunde Abgrenzung nach Überlastung'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-meetingkultur',
    level: 'C1',
    tags: ['work'],
    icon: 'chats',
    title: { de: 'Dieses Meeting hätte eine E-Mail sein können', en: 'This meeting could have been an email' },
    paragraphs: [
      [
        [
          'Führungskräfte verbringen Studien zufolge einen erheblichen Teil ihrer Arbeitszeit in Besprechungen.',
          'According to studies, managers spend a considerable share of their working time in meetings.',
        ],
        [
          'Ein beachtlicher Anteil davon wird von den Teilnehmenden selbst als überflüssig eingeschätzt.',
          'A sizeable proportion of these are judged unnecessary by the participants themselves.',
        ],
        [
          'Der ironische Satz „Dieses Meeting hätte eine E-Mail sein können“ ist inzwischen sogar auf Kaffeetassen zu lesen.',
          'The ironic phrase "This meeting could have been an email" can now even be seen on coffee mugs.',
        ],
      ],
      [
        [
          'Ein Softwareunternehmen in Leipzig hat daraus Konsequenzen gezogen.',
          'A software company in Leipzig has drawn conclusions from this.',
        ],
        [
          'Jede Einladung muss eine Agenda und ein klares Ziel enthalten, sonst darf man sie ablehnen.',
          'Every invitation must contain an agenda and a clear goal, otherwise you may decline it.',
        ],
        [
          'Zudem ist der Mittwoch komplett frei von internen Terminen.',
          'In addition, Wednesday is completely free of internal meetings.',
        ],
      ],
      [
        [
          'Nach einem halben Jahr hat sich die Zahl der Besprechungen nahezu halbiert.',
          'After half a year the number of meetings has almost halved.',
        ],
        [
          'Entscheidungen werden vermehrt schriftlich in geteilten Dokumenten vorbereitet und nur noch bei Bedarf mündlich diskutiert.',
          'Decisions are increasingly prepared in writing in shared documents and only discussed verbally when necessary.',
        ],
        [
          'Dass dadurch Informationen verloren gingen, hat bislang niemand beklagt.',
          'So far nobody has complained that information was lost as a result.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was muss in Leipzig jede Einladung enthalten?',
        options: ['Eine Agenda und ein klares Ziel', 'Ein Foto', 'Eine Teilnehmerliste mit Gehältern'],
        answer: 0,
      },
      {
        q: 'Was gilt für den Mittwoch?',
        options: ['Doppelt so viele Meetings', 'Er ist frei von internen Terminen', 'Homeoffice-Pflicht'],
        answer: 1,
      },
      {
        q: 'Wie werden Entscheidungen jetzt vermehrt vorbereitet?',
        options: ['In langen Telefonaten', 'Gar nicht', 'Schriftlich in geteilten Dokumenten'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-mittelstand',
    level: 'C1',
    tags: ['work'],
    icon: 'trophy',
    title: { de: 'Weltmarktführer aus der Provinz', en: 'World market leaders from the provinces' },
    paragraphs: [
      [
        [
          'Kaum jemand kennt ihre Namen, und doch sind sie in ihrer Nische weltweit führend.',
          'Hardly anyone knows their names, and yet they are world leaders in their niche.',
        ],
        [
          'Die sogenannten Hidden Champions stellen etwa Spezialschrauben, Orgelpfeifen oder Messgeräte für Labore her.',
          'The so-called hidden champions make, for example, special screws, organ pipes or measuring devices for laboratories.',
        ],
        [
          'Erstaunlich viele von ihnen sitzen nicht in Großstädten, sondern in Kleinstädten in Baden-Württemberg oder Bayern.',
          'A surprising number of them are based not in big cities but in small towns in Baden-Württemberg or Bavaria.',
        ],
      ],
      [
        [
          'Typisch ist eine langfristige Denkweise, die oft mit Familienbesitz zusammenhängt.',
          'A long-term way of thinking is typical, often linked to family ownership.',
        ],
        [
          'Statt auf kurzfristige Gewinne zu schielen, investieren diese Firmen konsequent in Forschung und in die Ausbildung ihrer Leute.',
          'Instead of eyeing short-term profits, these firms invest consistently in research and in training their people.',
        ],
        [
          'Die Bindung der Belegschaft an das Unternehmen ist entsprechend hoch.',
          'Accordingly, staff loyalty to the company is high.',
        ],
      ],
      [
        [
          'Ihr Standort wird jedoch zunehmend zum Nachteil, wenn es um die Gewinnung junger Fachkräfte geht.',
          'Their location is increasingly becoming a disadvantage, however, when it comes to attracting young skilled workers.',
        ],
        [
          'Mancher Softwareentwickler zieht ein Start-up in Berlin einem Weltmarktführer auf der Schwäbischen Alb vor.',
          'Some software developers prefer a start-up in Berlin to a world market leader in the Swabian Jura.',
        ],
        [
          'Einige Unternehmen eröffnen deshalb kleine Büros in Großstädten oder setzen konsequent auf Remote-Arbeit.',
          'Some companies are therefore opening small offices in big cities or consistently relying on remote work.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wo sitzen viele Hidden Champions?',
        options: ['In Berlin', 'In Kleinstädten im Süden', 'Im Ausland'],
        answer: 1,
      },
      {
        q: 'Womit hängt die langfristige Denkweise oft zusammen?',
        options: ['Mit Familienbesitz', 'Mit der Börse', 'Mit staatlicher Förderung'],
        answer: 0,
      },
      {
        q: 'Was wird für diese Firmen zum Nachteil?',
        options: ['Ihre Produkte', 'Ihre Preise', 'Ihr Standort bei der Suche nach jungen Fachkräften'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-startup-berlin',
    level: 'C1',
    tags: ['work'],
    icon: 'rocket',
    title: { de: 'Zwischen Kicker und Kündigungswelle', en: 'Between table football and waves of layoffs' },
    paragraphs: [
      [
        [
          'Berlin gilt seit Jahren als Hauptstadt der deutschen Start-up-Szene.',
          'For years Berlin has been considered the capital of the German start-up scene.',
        ],
        [
          'Englisch ist in vielen Teams Arbeitssprache, und internationale Talente schätzen die vergleichsweise niedrigen Lebenshaltungskosten.',
          'English is the working language in many teams, and international talent values the comparatively low cost of living.',
        ],
        [
          'Kickertische, kostenloses Obst und Freitagsbier gehörten lange zum Standardrepertoire.',
          'Table football, free fruit and Friday beers were long part of the standard repertoire.',
        ],
      ],
      [
        [
          'Als die Zinsen stiegen und Investoren zurückhaltender wurden, kühlte die Stimmung merklich ab.',
          'When interest rates rose and investors became more cautious, the mood cooled noticeably.',
        ],
        [
          'Zahlreiche Unternehmen mussten Stellen abbauen, manche verschwanden ganz vom Markt.',
          'Numerous companies had to cut jobs, some disappeared from the market entirely.',
        ],
        [
          'Für Beschäftigte mit Aufenthaltstitel, der an den Job gekoppelt ist, war das besonders heikel.',
          'For employees whose residence permit is tied to their job, this was particularly tricky.',
        ],
      ],
      [
        ['Inzwischen hat sich die Szene professionalisiert.', 'The scene has since become more professional.'],
        [
          'Statt um schnelles Wachstum um jeden Preis geht es häufiger um tragfähige Geschäftsmodelle.',
          'Instead of fast growth at any price, it is more often about viable business models.',
        ],
        [
          'Wer heute in Berlin gründet, muss Investoren vor allem davon überzeugen, dass das Unternehmen irgendwann Geld verdient.',
          'Anyone founding a company in Berlin today must above all convince investors that it will make money at some point.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was schätzen internationale Talente an Berlin?',
        options: ['Die niedrigen Lebenshaltungskosten', 'Das Wetter', 'Die strengen Regeln'],
        answer: 0,
      },
      {
        q: 'Für wen waren Entlassungen besonders heikel?',
        options: ['Für Investoren', 'Für Studierende', 'Für Beschäftigte mit job-gebundenem Aufenthaltstitel'],
        answer: 2,
      },
      {
        q: 'Worum geht es heute häufiger?',
        options: ['Um Wachstum um jeden Preis', 'Um tragfähige Geschäftsmodelle', 'Um mehr Kickertische'],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-c1-streik',
    level: 'C1',
    tags: ['work', 'everyday'],
    icon: 'warning',
    title: { de: 'Heute fährt nichts', en: 'Nothing is running today' },
    paragraphs: [
      [
        [
          'Wenn in Deutschland gestreikt wird, steht oft das halbe Land still.',
          'When there is a strike in Germany, half the country often comes to a standstill.',
        ],
        [
          'Züge fallen aus, Kitas bleiben geschlossen, und an Flughäfen werden Hunderte Flüge gestrichen.',
          'Trains are cancelled, nurseries stay closed, and hundreds of flights are cancelled at airports.',
        ],
        [
          'Hintergrund sind meist Tarifverhandlungen zwischen Gewerkschaften und Arbeitgebern.',
          'The background is usually collective bargaining between unions and employers.',
        ],
      ],
      [
        [
          'Das Streikrecht ist im Grundgesetz verankert, unterliegt aber strengen Regeln.',
          'The right to strike is anchored in the Basic Law but is subject to strict rules.',
        ],
        [
          'Streiken dürfen nur Gewerkschaften, und zwar nur, solange kein gültiger Tarifvertrag eine Friedenspflicht vorschreibt.',
          'Only unions may strike, and only as long as no valid collective agreement imposes a no-strike obligation.',
        ],
        [
          'Politische Streiks, etwa gegen ein Gesetz, sind in Deutschland nicht erlaubt.',
          'Political strikes, for instance against a law, are not permitted in Germany.',
        ],
      ],
      [
        [
          'Im internationalen Vergleich wird hierzulande dennoch relativ selten gestreikt.',
          'By international comparison, however, strikes are relatively rare in this country.',
        ],
        [
          'Das liegt auch an der Sozialpartnerschaft, also der Tradition, Konflikte am Verhandlungstisch zu lösen.',
          'That is partly due to the social partnership, the tradition of resolving conflicts at the negotiating table.',
        ],
        [
          'Wer am Streiktag im Homeoffice arbeiten kann, empfindet die Ausstände ohnehin meist nur als kleineres Ärgernis.',
          'Those who can work from home on strike days usually see the walkouts as only a minor nuisance anyway.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wer darf in Deutschland streiken?',
        options: ['Jeder Beschäftigte allein', 'Nur Gewerkschaften', 'Nur Beamte'],
        answer: 1,
      },
      {
        q: 'Welche Streiks sind nicht erlaubt?',
        options: ['Politische Streiks', 'Streiks bei der Bahn', 'Streiks am Flughafen'],
        answer: 0,
      },
      {
        q: 'Was bedeutet Sozialpartnerschaft hier?',
        options: ['Staatliche Lohnfestsetzung', 'Häufige Streiks', 'Konflikte am Verhandlungstisch lösen'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-ransomware',
    level: 'C1',
    tags: ['work'],
    icon: 'lock',
    title: { de: 'Wenn das Rathaus offline geht', en: 'When the town hall goes offline' },
    paragraphs: [
      [
        [
          'An einem Montagmorgen ließen sich in einer mittelgroßen Stadt plötzlich keine Computer mehr starten.',
          'One Monday morning, suddenly no computers would start in a medium-sized town.',
        ],
        [
          'Auf den Bildschirmen erschien eine Lösegeldforderung: Die Daten seien verschlüsselt worden.',
          'A ransom demand appeared on the screens: the data had been encrypted.',
        ],
        [
          'Wochenlang konnten weder Pässe ausgestellt noch Kfz-Zulassungen bearbeitet werden.',
          'For weeks neither passports could be issued nor vehicle registrations processed.',
        ],
      ],
      [
        [
          'Solche Angriffe mit Ransomware haben in den vergangenen Jahren auch Kommunen, Krankenhäuser und Hochschulen getroffen.',
          'Ransomware attacks like this have in recent years also hit municipalities, hospitals and universities.',
        ],
        [
          'Die Angreifer nutzen häufig veraltete Software oder eine einzige unvorsichtig geöffnete E-Mail.',
          'The attackers often exploit outdated software or a single carelessly opened email.',
        ],
        [
          'Behörden wird geraten, das Lösegeld grundsätzlich nicht zu zahlen, um das Geschäftsmodell nicht zu fördern.',
          'Authorities are advised as a matter of principle not to pay the ransom so as not to encourage the business model.',
        ],
      ],
      [
        [
          'Entscheidend ist, ob funktionierende und getrennt gelagerte Sicherungskopien vorhanden sind.',
          'What is decisive is whether working backups stored separately exist.',
        ],
        [
          'Fehlen sie, muss mitunter die gesamte IT neu aufgebaut werden, was Millionen kosten kann.',
          'If they are missing, sometimes the entire IT has to be rebuilt, which can cost millions.',
        ],
        [
          'IT-Sicherheit ist damit längst keine technische Nebensache mehr, sondern eine Frage der Handlungsfähigkeit des Staates.',
          'IT security is thus no longer a technical side issue but a question of the state’s ability to function.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was konnte wochenlang nicht bearbeitet werden?',
        options: ['Steuern', 'Pässe und Kfz-Zulassungen', 'Bauanträge'],
        answer: 1,
      },
      {
        q: 'Was wird Behörden geraten?',
        options: ['Das Lösegeld nicht zu zahlen', 'Sofort zu zahlen', 'Die Polizei nicht zu informieren'],
        answer: 0,
      },
      {
        q: 'Was ist laut Text entscheidend?',
        options: ['Ein schneller Internetzugang', 'Neue Computer', 'Getrennt gelagerte Sicherungskopien'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-energiewende',
    level: 'C1',
    tags: ['everyday'],
    icon: 'sun',
    title: { de: 'Strom vom eigenen Balkon', en: 'Electricity from your own balcony' },
    paragraphs: [
      [
        [
          'Ein Solarmodul am Balkongeländer, ein Stecker in die Steckdose, fertig ist das eigene kleine Kraftwerk.',
          'A solar panel on the balcony railing, a plug in the socket, and your own small power station is ready.',
        ],
        [
          'Sogenannte Balkonkraftwerke haben sich in den letzten Jahren rasant verbreitet.',
          'So-called balcony power plants have spread rapidly in recent years.',
        ],
        [
          'Inzwischen sind sie auch für Mieter deutlich leichter zu genehmigen als früher.',
          'They are now much easier to get approved for tenants than before.',
        ],
      ],
      [
        [
          'Den Strombedarf eines Haushalts decken die Anlagen freilich nur zu einem Teil.',
          'Of course the systems only cover part of a household’s electricity needs.',
        ],
        [
          'Vor allem tagsüber laufende Geräte wie Kühlschrank oder Router profitieren davon.',
          'Devices running during the day, such as the fridge or router, benefit most.',
        ],
        [
          'Je nach Ausrichtung und Strompreis amortisiert sich die Investition nach einigen Jahren.',
          'Depending on orientation and electricity price, the investment pays for itself after a few years.',
        ],
      ],
      [
        [
          'Für die Energiewende insgesamt sind Balkonkraftwerke zwar nur ein kleiner Baustein.',
          'For the energy transition as a whole, balcony power plants are admittedly only a small building block.',
        ],
        [
          'Ihre Bedeutung liegt jedoch auch darin, dass sie Menschen ohne eigenes Dach an der Stromerzeugung beteiligen.',
          'Their significance also lies, however, in the fact that they involve people without their own roof in generating electricity.',
        ],
        [
          'Wer seinen Zähler beobachtet, achtet erfahrungsgemäß auch bewusster auf den eigenen Verbrauch.',
          'Experience shows that people who watch their meter also pay more conscious attention to their own consumption.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Für wen sind Balkonkraftwerke inzwischen leichter zu genehmigen?',
        options: ['Für Mieter', 'Nur für Firmen', 'Für niemanden'],
        answer: 0,
      },
      {
        q: 'Welche Geräte profitieren besonders?',
        options: ['Geräte, die nachts laufen', 'Geräte, die tagsüber laufen', 'Nur Elektroautos'],
        answer: 1,
      },
      {
        q: 'Worin liegt eine weitere Bedeutung der Anlagen?',
        options: ['Sie ersetzen Kraftwerke', 'Sie sind sehr billig', 'Sie beteiligen Menschen ohne eigenes Dach'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-laendlicher-raum',
    level: 'C1',
    tags: ['everyday'],
    icon: 'repeat',
    title: { de: 'Der Bus kommt zweimal am Tag', en: 'The bus comes twice a day' },
    paragraphs: [
      [
        [
          'Wer in einem Dorf in Brandenburg oder in der Eifel lebt, ist ohne Auto weitgehend aufgeschmissen.',
          'Anyone living in a village in Brandenburg or the Eifel is largely stuck without a car.',
        ],
        [
          'Der Linienbus fährt mitunter nur morgens und mittags, abgestimmt auf die Schulzeiten.',
          'The regular bus sometimes runs only in the morning and at midday, timed for school hours.',
        ],
        [
          'Für ältere Menschen, die nicht mehr selbst fahren können, wird das zunehmend zum Problem.',
          'For older people who can no longer drive themselves, this is increasingly becoming a problem.',
        ],
      ],
      [
        [
          'Einige Landkreise experimentieren deshalb mit Rufbussen, die nur auf Bestellung fahren.',
          'Some districts are therefore experimenting with on-demand buses that only run when booked.',
        ],
        [
          'Per App oder Telefon meldet man seine Fahrt an, und ein Kleinbus holt einen an der Haustür ab.',
          'You book your journey via app or phone, and a minibus picks you up at your front door.',
        ],
        [
          'Die Kosten pro Fahrgast sind allerdings hoch, und die Finanzierung ist oft nur befristet gesichert.',
          'The cost per passenger is high, however, and funding is often only secured for a limited time.',
        ],
      ],
      [
        [
          'Andere setzen auf ehrenamtliche Bürgerbusse oder Mitfahrbänke am Dorfrand.',
          'Others rely on volunteer-run community buses or ride-share benches at the edge of the village.',
        ],
        [
          'Wer sich auf eine solche Bank setzt, signalisiert, dass er mitgenommen werden möchte.',
          'Anyone who sits on such a bench signals that they would like a lift.',
        ],
        [
          'Ob das ausreicht, um die Mobilitätslücke zwischen Stadt und Land zu schließen, darf bezweifelt werden.',
          'Whether that is enough to close the mobility gap between town and country is doubtful.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wann fährt der Linienbus manchmal nur?',
        options: ['Nachts', 'Morgens und mittags', 'Am Wochenende'],
        answer: 1,
      },
      {
        q: 'Was ist ein Rufbus?',
        options: ['Ein Bus, der nur auf Bestellung fährt', 'Ein Schulbus', 'Ein Reisebus'],
        answer: 0,
      },
      {
        q: 'Was signalisiert man auf einer Mitfahrbank?',
        options: ['Dass man müde ist', 'Dass man wartet, bis der Bus kommt', 'Dass man mitgenommen werden möchte'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-pflege',
    level: 'C1',
    tags: ['work'],
    icon: 'heart',
    title: { de: 'Eine Schicht auf der Station', en: 'A shift on the ward' },
    paragraphs: [
      [
        [
          'Wenn Svetlana um sechs Uhr morgens ihre Schicht beginnt, ist sie oft für über zwanzig Patienten zuständig.',
          'When Svetlana starts her shift at six in the morning, she is often responsible for over twenty patients.',
        ],
        [
          'Zeit für ein Gespräch am Bett bleibt dabei kaum.',
          'There is hardly any time left for a conversation at the bedside.',
        ],
        [
          'Die Dokumentation am Computer nimmt einen beträchtlichen Teil ihres Arbeitstags ein.',
          'Documentation on the computer takes up a considerable part of her working day.',
        ],
      ],
      [
        [
          'Der Personalmangel in der Pflege ist seit Jahren bekannt, verschärft sich aber weiter.',
          'The staff shortage in nursing has been known for years but is getting worse.',
        ],
        [
          'Viele Pflegekräfte reduzieren ihre Stunden oder verlassen den Beruf ganz, weil sie die Belastung nicht mehr tragen wollen.',
          'Many nurses reduce their hours or leave the profession entirely because they no longer want to bear the strain.',
        ],
        [
          'Krankenhäuser werben deshalb gezielt Fachkräfte aus dem Ausland an.',
          'Hospitals are therefore deliberately recruiting skilled workers from abroad.',
        ],
      ],
      [
        [
          'Svetlana selbst kam vor acht Jahren aus Kasachstan und musste ihre Ausbildung erst anerkennen lassen.',
          'Svetlana herself came from Kazakhstan eight years ago and first had to have her training recognised.',
        ],
        [
          'Heute leitet sie die Einarbeitung neuer Kolleginnen von den Philippinen und aus Indien.',
          'Today she leads the induction of new colleagues from the Philippines and India.',
        ],
        [
          'Fachlich seien diese hervorragend, sagt sie, die größte Hürde sei die Sprache im Stationsalltag.',
          'Professionally they are excellent, she says; the biggest hurdle is the language in everyday ward life.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was nimmt viel Zeit in Svetlanas Arbeitstag ein?',
        options: ['Pausen', 'Die Dokumentation am Computer', 'Meetings mit Ärzten'],
        answer: 1,
      },
      {
        q: 'Warum verlassen viele Pflegekräfte den Beruf?',
        options: ['Wegen der Belastung', 'Wegen zu langer Urlaube', 'Weil sie zu viel verdienen'],
        answer: 0,
      },
      {
        q: 'Was ist laut Svetlana die größte Hürde für neue Kolleginnen?',
        options: ['Die Fachkenntnisse', 'Das Wetter', 'Die Sprache im Stationsalltag'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-schulsystem',
    level: 'C1',
    tags: ['everyday'],
    icon: 'book',
    title: { de: 'Mit zehn Jahren entschieden?', en: 'Decided at the age of ten?' },
    paragraphs: [
      [
        [
          'In den meisten Bundesländern wechseln Kinder nach der vierten Klasse auf eine weiterführende Schule.',
          'In most federal states children move to a secondary school after the fourth grade.',
        ],
        [
          'Ob Gymnasium oder eine andere Schulform, hängt von Noten und einer Empfehlung der Lehrkräfte ab.',
          'Whether it is a Gymnasium or another type of school depends on grades and a recommendation from the teachers.',
        ],
        [
          'Für viele zugewanderte Eltern ist dieses frühe Sortieren überraschend.',
          'For many immigrant parents this early sorting is surprising.',
        ],
      ],
      [
        [
          'Kritiker bemängeln, dass der Bildungserfolg in Deutschland stark vom Elternhaus abhängt.',
          'Critics complain that educational success in Germany depends heavily on family background.',
        ],
        [
          'Kinder aus Akademikerfamilien erhalten deutlich häufiger eine Gymnasialempfehlung als andere bei vergleichbaren Leistungen.',
          'Children from academic families receive a Gymnasium recommendation considerably more often than others with comparable performance.',
        ],
        [
          'Sprachliche Defizite in der Grundschule wirken sich dabei besonders nachhaltig aus.',
          'Language deficits at primary school have a particularly lasting effect.',
        ],
      ],
      [
        [
          'Befürworter des Systems betonen hingegen seine Durchlässigkeit.',
          'Supporters of the system, on the other hand, stress its permeability.',
        ],
        [
          'Über Umwege wie die Fachoberschule oder eine Berufsausbildung lässt sich auch später noch die Hochschulreife erwerben.',
          'Via detours such as a technical secondary school or vocational training, you can still obtain university entrance qualifications later.',
        ],
        [
          'Tatsächlich führt in Deutschland nicht nur ein Weg zum beruflichen Erfolg, sondern viele.',
          'In fact, in Germany not just one path leads to professional success, but many.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wann wechseln Kinder meist auf eine weiterführende Schule?',
        options: ['Nach der sechsten Klasse', 'Nach der vierten Klasse', 'Mit 16'],
        answer: 1,
      },
      {
        q: 'Was bemängeln Kritiker?',
        options: ['Der Erfolg hängt stark vom Elternhaus ab', 'Es gibt zu viele Gymnasien', 'Die Ferien sind zu lang'],
        answer: 0,
      },
      {
        q: 'Was betonen Befürworter?',
        options: ['Die frühe Trennung', 'Die strengen Noten', 'Die Durchlässigkeit des Systems'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-anerkennung',
    level: 'C1',
    tags: ['work'],
    icon: 'level',
    title: { de: 'Ingenieurin, aber nicht auf dem Papier', en: 'An engineer, but not on paper' },
    paragraphs: [
      [
        [
          'Nadia hatte in Damaskus Bauingenieurwesen studiert und zehn Jahre Berufserfahrung gesammelt.',
          'Nadia had studied civil engineering in Damascus and gained ten years of professional experience.',
        ],
        [
          'In Deutschland durfte sie sich dennoch zunächst nicht Ingenieurin nennen.',
          'In Germany, however, she was initially not allowed to call herself an engineer.',
        ],
        [
          'Die Berufsbezeichnung ist nämlich gesetzlich geschützt.',
          'The professional title is legally protected, you see.',
        ],
      ],
      [
        [
          'Das Anerkennungsverfahren erforderte beglaubigte Übersetzungen sämtlicher Zeugnisse und Studieninhalte.',
          'The recognition procedure required certified translations of all certificates and course content.',
        ],
        [
          'Einige Unterlagen waren durch den Krieg verloren gegangen und mussten mühsam ersetzt werden.',
          'Some documents had been lost because of the war and had to be laboriously replaced.',
        ],
        [
          'Am Ende wurde ihr Abschluss als gleichwertig anerkannt, mit einer Auflage für einen Kurs im deutschen Baurecht.',
          'In the end her degree was recognised as equivalent, with a condition to take a course in German building law.',
        ],
      ],
      [
        [
          'Insgesamt dauerte der Prozess fast zwei Jahre, in denen Nadia als Bauzeichnerin arbeitete.',
          'Altogether the process took almost two years, during which Nadia worked as a draughtswoman.',
        ],
        [
          'Heute leitet sie Projekte bei einem Planungsbüro in Hannover.',
          'Today she manages projects at a planning office in Hanover.',
        ],
        [
          'Sie fordert, dass Verfahren beschleunigt und Berufserfahrung stärker berücksichtigt werden.',
          'She calls for procedures to be sped up and professional experience to be given more weight.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Warum durfte sich Nadia zunächst nicht Ingenieurin nennen?',
        options: [
          'Ihr Deutsch war zu schlecht',
          'Die Berufsbezeichnung ist gesetzlich geschützt',
          'Sie hatte keinen Abschluss',
        ],
        answer: 1,
      },
      {
        q: 'Welche Auflage bekam sie?',
        options: ['Einen Kurs im deutschen Baurecht', 'Ein neues Studium', 'Ein Praktikum im Ausland'],
        answer: 0,
      },
      {
        q: 'Was fordert Nadia?',
        options: [
          'Strengere Prüfungen',
          'Weniger Zuwanderung',
          'Schnellere Verfahren und mehr Gewicht für Berufserfahrung',
        ],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-medienkompetenz',
    level: 'C1',
    tags: ['everyday'],
    icon: 'reveal',
    title: { de: 'Stimmt das überhaupt?', en: 'Is that even true?' },
    paragraphs: [
      [
        [
          'Ein Foto von überfluteten Straßen, dazu die Behauptung, es zeige die eigene Stadt am Vortag.',
          'A photo of flooded streets, together with the claim that it shows your own town the day before.',
        ],
        [
          'Innerhalb weniger Stunden wurde der Beitrag tausendfach geteilt.',
          'Within a few hours the post was shared thousands of times.',
        ],
        [
          'Tatsächlich stammte das Bild aus einem anderen Land und war Jahre alt.',
          'In fact the picture came from another country and was years old.',
        ],
      ],
      [
        [
          'Solche Falschmeldungen verbreiten sich häufig schneller als ihre Richtigstellung.',
          'False reports like this often spread faster than their correction.',
        ],
        [
          'Sie sprechen Emotionen an und bestätigen, was man ohnehin zu wissen glaubt.',
          'They appeal to emotions and confirm what people believe they know anyway.',
        ],
        [
          'Mit generativer KI lassen sich täuschend echte Bilder inzwischen sogar ohne Fachkenntnisse erstellen.',
          'With generative AI, deceptively real images can now be created even without expertise.',
        ],
      ],
      [
        [
          'Medienpädagogen raten zu einfachen Prüfschritten, bevor man etwas weiterleitet.',
          'Media educators recommend simple checks before forwarding anything.',
        ],
        [
          'Wer hat das veröffentlicht, gibt es weitere seriöse Quellen, und lässt sich das Bild über eine Rückwärtssuche finden?',
          'Who published it, are there other reputable sources, and can the image be found via a reverse search?',
        ],
        [
          'Oft genügt schon eine Minute Skepsis, um nicht selbst zum Verbreiter zu werden.',
          'Often a minute of scepticism is enough to avoid becoming a spreader yourself.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Woher stammte das Foto tatsächlich?',
        options: ['Aus der eigenen Stadt', 'Aus einem anderen Land und war Jahre alt', 'Aus einem Film'],
        answer: 1,
      },
      {
        q: 'Warum verbreiten sich Falschmeldungen schnell?',
        options: ['Sie sprechen Emotionen an', 'Sie sind immer kurz', 'Sie sind teuer'],
        answer: 0,
      },
      {
        q: 'Was raten Medienpädagogen?',
        options: ['Nie Nachrichten zu lesen', 'Alles sofort zu teilen', 'Einfache Prüfschritte vor dem Weiterleiten'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-einbuergerung',
    level: 'C1',
    tags: ['everyday'],
    icon: 'translate',
    title: { de: 'Zwei Pässe, eine Entscheidung weniger', en: 'Two passports, one decision fewer' },
    paragraphs: [
      [
        [
          'Lange mussten die meisten Menschen ihre bisherige Staatsangehörigkeit aufgeben, wenn sie Deutsche werden wollten.',
          'For a long time most people had to give up their previous citizenship if they wanted to become German.',
        ],
        [
          'Für viele war das eine kaum zumutbare Entscheidung zwischen Herkunft und Gegenwart.',
          'For many that was a barely reasonable choice between origin and present.',
        ],
        [
          'Mit der Reform des Staatsangehörigkeitsrechts ist die doppelte Staatsbürgerschaft nun grundsätzlich möglich.',
          'With the reform of citizenship law, dual citizenship is now possible in principle.',
        ],
      ],
      [
        ['Zugleich wurden die Fristen verkürzt.', 'At the same time the waiting periods were shortened.'],
        [
          'Voraussetzungen bleiben unter anderem ausreichende Deutschkenntnisse, ein gesicherter Lebensunterhalt und ein Einbürgerungstest.',
          'Requirements still include sufficient German, a secure livelihood and a naturalisation test.',
        ],
        [
          'Die Zahl der Anträge stieg daraufhin so stark, dass viele Behörden kaum hinterherkommen.',
          'The number of applications then rose so sharply that many authorities can hardly keep up.',
        ],
      ],
      [
        [
          'Für Emre, der seit zwanzig Jahren in Köln lebt, war die Reform ein emotionaler Moment.',
          'For Emre, who has lived in Cologne for twenty years, the reform was an emotional moment.',
        ],
        [
          'Er kann nun in Deutschland wählen, ohne sich von seinem türkischen Pass trennen zu müssen.',
          'He can now vote in Germany without having to part with his Turkish passport.',
        ],
        [
          'Bei der Einbürgerungsfeier im Rathaus, sagt er, habe er zum ersten Mal die Nationalhymne mitgesungen.',
          'At the naturalisation ceremony at the town hall, he says, he sang along to the national anthem for the first time.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was ist durch die Reform grundsätzlich möglich?',
        options: ['Die doppelte Staatsbürgerschaft', 'Einbürgerung ohne Deutsch', 'Wählen ohne Pass'],
        answer: 0,
      },
      {
        q: 'Welche Folge hatte die Reform für die Behörden?',
        options: ['Weniger Arbeit', 'Sie wurden geschlossen', 'Sie kommen mit den Anträgen kaum hinterher'],
        answer: 2,
      },
      {
        q: 'Was kann Emre jetzt?',
        options: [
          'In der Türkei wählen',
          'In Deutschland wählen und seinen türkischen Pass behalten',
          'Ohne Visum überallhin reisen',
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-c1-gendern',
    level: 'C1',
    tags: ['everyday', 'work'],
    icon: 'writing',
    title: { de: 'Liebe Kolleginnen und Kollegen', en: 'Dear colleagues' },
    paragraphs: [
      [
        [
          'Kaum eine sprachliche Frage wird in Deutschland so emotional diskutiert wie das Gendern.',
          'Hardly any language question is discussed as emotionally in Germany as gender-inclusive language.',
        ],
        [
          'Gemeint sind Formen, die Frauen und nichtbinäre Menschen sprachlich sichtbar machen sollen.',
          'This refers to forms intended to make women and non-binary people linguistically visible.',
        ],
        [
          'Dazu zählen Doppelnennungen, neutrale Begriffe oder Sonderzeichen wie das Sternchen.',
          'These include naming both forms, neutral terms or special characters such as the asterisk.',
        ],
      ],
      [
        [
          'Befürworter argumentieren, das generische Maskulinum lasse Frauen gedanklich verschwinden.',
          'Supporters argue that the generic masculine makes women disappear from people’s minds.',
        ],
        [
          'Gegner halten Sonderzeichen für schwer lesbar und für eine Bevormundung durch Institutionen.',
          'Opponents consider special characters hard to read and a form of paternalism by institutions.',
        ],
        [
          'Einige Bundesländer haben Sonderzeichen in Schulen und Behörden inzwischen sogar untersagt.',
          'Some federal states have now even banned special characters in schools and public offices.',
        ],
      ],
      [
        [
          'Im Berufsalltag haben sich vielerorts pragmatische Lösungen durchgesetzt.',
          'In everyday working life pragmatic solutions have prevailed in many places.',
        ],
        [
          'Statt „Mitarbeiter“ schreibt man „Mitarbeitende“ oder „Team“, statt „jeder“ einfach „alle“.',
          'Instead of "Mitarbeiter" people write "Mitarbeitende" or "team", instead of "jeder" simply "alle".',
        ],
        [
          'Für Deutschlernende lohnt es sich, die verschiedenen Formen zumindest zu erkennen.',
          'For German learners it is worth at least recognising the different forms.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was argumentieren Befürworter?',
        options: [
          'Sonderzeichen sind leicht lesbar',
          'Das generische Maskulinum lässt Frauen gedanklich verschwinden',
          'Sprache ändert sich nie',
        ],
        answer: 1,
      },
      {
        q: 'Was haben einige Bundesländer getan?',
        options: ['Sonderzeichen in Schulen und Behörden untersagt', 'Gendern zur Pflicht gemacht', 'Nichts'],
        answer: 0,
      },
      {
        q: 'Welche Lösung ist im Berufsalltag verbreitet?',
        options: ['Nur Sternchen', 'Gar keine Anrede', 'Neutrale Formen wie „Mitarbeitende“'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-open-source',
    level: 'C1',
    tags: ['work'],
    icon: 'code',
    title: { de: 'Software, die allen gehört', en: 'Software that belongs to everyone' },
    paragraphs: [
      [
        [
          'Ein Großteil der Software, auf der das Internet läuft, ist Open Source.',
          'Much of the software the internet runs on is open source.',
        ],
        [
          'Ihr Quellcode ist öffentlich einsehbar, und jeder darf ihn nutzen, verändern und weitergeben.',
          'Its source code is publicly visible, and anyone may use, modify and pass it on.',
        ],
        [
          'Selbst große Konzerne bauen ihre Produkte auf solchen frei verfügbaren Bausteinen auf.',
          'Even large corporations build their products on such freely available building blocks.',
        ],
      ],
      [
        [
          'Gepflegt werden viele dieser Projekte jedoch von einer Handvoll Freiwilliger in ihrer Freizeit.',
          'Many of these projects, however, are maintained by a handful of volunteers in their spare time.',
        ],
        [
          'Wird in einer weitverbreiteten Bibliothek eine Sicherheitslücke entdeckt, lastet enormer Druck auf diesen Menschen.',
          'If a security flaw is discovered in a widely used library, enormous pressure weighs on these people.',
        ],
        [
          'Mehrfach zeigte sich, wie verwundbar die digitale Infrastruktur dadurch ist.',
          'It has been shown several times how vulnerable digital infrastructure is as a result.',
        ],
      ],
      [
        [
          'Deutschland hat deshalb eine Stiftung ins Leben gerufen, die kritische Open-Source-Projekte finanziell unterstützt.',
          'Germany has therefore set up a foundation that financially supports critical open-source projects.',
        ],
        [
          'Auch Unternehmen erlauben ihren Entwicklern zunehmend, einen Teil ihrer Arbeitszeit in solche Projekte zu investieren.',
          'Companies are also increasingly allowing their developers to invest part of their working time in such projects.',
        ],
        [
          'Wer zu einem bekannten Projekt beiträgt, verbessert nebenbei übrigens auch seine Chancen auf dem Arbeitsmarkt.',
          'Incidentally, anyone who contributes to a well-known project also improves their chances on the job market.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was darf man mit Open-Source-Code tun?',
        options: ['Nur lesen', 'Nutzen, verändern und weitergeben', 'Nur gegen Bezahlung nutzen'],
        answer: 1,
      },
      {
        q: 'Wer pflegt viele dieser Projekte?',
        options: ['Wenige Freiwillige in ihrer Freizeit', 'Große Konzerne', 'Der Staat'],
        answer: 0,
      },
      {
        q: 'Was hat Deutschland ins Leben gerufen?',
        options: ['Ein Verbot', 'Eine neue Universität', 'Eine Stiftung zur Unterstützung kritischer Projekte'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-lebenslanges-lernen',
    level: 'C1',
    tags: ['work'],
    icon: 'level',
    title: { de: 'Nie ausgelernt', en: 'Never done learning' },
    paragraphs: [
      [
        [
          'Die Vorstellung, man lerne einen Beruf und übe ihn bis zur Rente aus, wirkt zunehmend überholt.',
          'The notion that you learn a trade and practise it until retirement increasingly seems outdated.',
        ],
        [
          'Technologische Veränderungen verkürzen die Halbwertszeit von Fachwissen erheblich.',
          'Technological change considerably shortens the half-life of specialist knowledge.',
        ],
        [
          'Was heute gefragt ist, kann in fünf Jahren bereits automatisiert sein.',
          'What is in demand today may already be automated in five years.',
        ],
      ],
      [
        [
          'Die Bereitschaft zur Weiterbildung ist allerdings ungleich verteilt.',
          'Willingness to undertake further training is unevenly distributed, however.',
        ],
        [
          'Ausgerechnet Beschäftigte mit geringer Qualifikation, deren Tätigkeiten am stärksten gefährdet sind, nehmen am seltensten teil.',
          'Of all people, it is low-skilled employees, whose jobs are most at risk, who take part least often.',
        ],
        [
          'Häufig fehlt es an Zeit, an Geld oder schlicht an positiven Lernerfahrungen aus der Schulzeit.',
          'There is often a lack of time, money or simply positive learning experiences from school days.',
        ],
      ],
      [
        [
          'Der Staat fördert Weiterbildung inzwischen mit verschiedenen Programmen, etwa einem Qualifizierungsgeld.',
          'The state now promotes further training through various programmes, such as a qualification allowance.',
        ],
        [
          'Wirksam werden solche Angebote aber erst, wenn Betriebe ihre Beschäftigten aktiv ermutigen.',
          'Such offers only become effective, however, when companies actively encourage their employees.',
        ],
        [
          'Lernen muss, so ein Personalchef, als Teil der Arbeit gelten und nicht als Privatvergnügen nach Feierabend.',
          'Learning, as one HR director put it, must count as part of work and not as a private pleasure after hours.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was verkürzt die Halbwertszeit von Fachwissen?',
        options: ['Technologische Veränderungen', 'Zu viel Urlaub', 'Hohe Löhne'],
        answer: 0,
      },
      {
        q: 'Wer nimmt am seltensten an Weiterbildung teil?',
        options: ['Führungskräfte', 'Akademiker', 'Geringqualifizierte'],
        answer: 2,
      },
      {
        q: 'Wann werden Förderangebote laut Text wirksam?',
        options: [
          'Wenn sie kostenlos sind',
          'Wenn Betriebe ihre Beschäftigten aktiv ermutigen',
          'Wenn sie online sind',
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-c1-buerokratie',
    level: 'C1',
    tags: ['work'],
    icon: 'writing',
    title: { de: 'Der Formularberg', en: 'The mountain of forms' },
    paragraphs: [
      [
        [
          'Als Jana ein kleines Café eröffnen wollte, unterschätzte sie vor allem eines: den Papierkram.',
          'When Jana wanted to open a small café, she underestimated one thing above all: the paperwork.',
        ],
        [
          'Gewerbeanmeldung, Hygieneschulung, Genehmigung für die Außengastronomie, Anmeldung beim Finanzamt.',
          'Business registration, hygiene training, a permit for outdoor seating, registration with the tax office.',
        ],
        [
          'Jede Behörde verlangte andere Formulare und teils dieselben Angaben mehrfach.',
          'Every authority required different forms and in some cases the same information several times.',
        ],
      ],
      [
        [
          'Wirtschaftsverbände klagen seit Jahren über die Last der Bürokratie.',
          'Business associations have complained for years about the burden of bureaucracy.',
        ],
        [
          'Besonders kleine Betriebe, die sich keine eigene Verwaltungsabteilung leisten können, leiden darunter.',
          'Small businesses in particular, which cannot afford their own administration department, suffer from it.',
        ],
        [
          'Zwar kündigen Regierungen regelmäßig Entlastungspakete an, doch im Alltag kommt davon oft wenig an.',
          'Governments regularly announce relief packages, it is true, but little of it often reaches everyday life.',
        ],
      ],
      [
        [
          'Andererseits erfüllen viele Vorschriften durchaus ihren Zweck, etwa beim Schutz von Verbrauchern oder Beschäftigten.',
          'On the other hand, many regulations certainly serve their purpose, for example in protecting consumers or employees.',
        ],
        [
          'Das Problem liegt weniger in einzelnen Regeln als in ihrer Summe und der mangelnden Digitalisierung.',
          'The problem lies less in individual rules than in their sum and the lack of digitalisation.',
        ],
        [
          'Jana hat ihr Café inzwischen eröffnet, aber nach eigenen Worten „mit drei Monaten Verspätung und grauen Haaren“.',
          'Jana has since opened her café, but in her own words "three months late and with grey hair".',
        ],
      ],
    ],
    questions: [
      { q: 'Was hat Jana unterschätzt?', options: ['Die Miete', 'Den Papierkram', 'Die Konkurrenz'], answer: 1 },
      {
        q: 'Wer leidet besonders unter Bürokratie?',
        options: ['Kleine Betriebe', 'Große Konzerne', 'Behörden'],
        answer: 0,
      },
      {
        q: 'Wo liegt laut Text das eigentliche Problem?',
        options: [
          'In jeder einzelnen Regel',
          'Beim Verbraucherschutz',
          'In der Summe der Regeln und mangelnder Digitalisierung',
        ],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-wohnungsbau',
    level: 'C1',
    tags: ['everyday'],
    icon: 'everyday',
    title: { de: 'Bauen, aber schneller', en: 'Building, but faster' },
    paragraphs: [
      [
        [
          'In vielen Ballungsräumen übersteigt die Nachfrage nach Wohnraum das Angebot bei Weitem.',
          'In many conurbations the demand for housing far exceeds the supply.',
        ],
        [
          'Politische Ziele für den Neubau wurden in den vergangenen Jahren regelmäßig verfehlt.',
          'Political targets for new construction have regularly been missed in recent years.',
        ],
        [
          'Gestiegene Zinsen und Baukosten haben zahlreiche Projekte gestoppt, bevor sie begonnen hatten.',
          'Higher interest rates and construction costs have halted numerous projects before they had begun.',
        ],
      ],
      [
        [
          'Hinzu kommen langwierige Genehmigungsverfahren und eine Vielzahl von Bauvorschriften.',
          'Added to this are lengthy approval procedures and a multitude of building regulations.',
        ],
        [
          'Zwischen der ersten Planung und dem Einzug vergehen nicht selten fünf Jahre oder mehr.',
          'It is not unusual for five years or more to pass between initial planning and moving in.',
        ],
        [
          'Fachleute fordern daher vereinfachte Standards und serielles Bauen mit vorgefertigten Modulen.',
          'Experts therefore call for simplified standards and serial construction with prefabricated modules.',
        ],
      ],
      [
        [
          'Gleichzeitig steht in manchen ländlichen Regionen Wohnraum leer.',
          'At the same time, housing stands empty in some rural regions.',
        ],
        [
          'Ohne gute Verkehrsanbindung und Arbeitsplätze vor Ort ziehen jedoch nur wenige dorthin.',
          'Without good transport links and local jobs, however, few people move there.',
        ],
        [
          'Die Wohnungsfrage ist somit eng mit Fragen der Mobilität und der Arbeitswelt verknüpft.',
          'The housing question is thus closely linked to questions of mobility and the world of work.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was hat zahlreiche Bauprojekte gestoppt?',
        options: ['Zu viele Arbeiter', 'Gestiegene Zinsen und Baukosten', 'Schlechtes Wetter'],
        answer: 1,
      },
      {
        q: 'Was fordern Fachleute?',
        options: ['Vereinfachte Standards und serielles Bauen', 'Mehr Vorschriften', 'Weniger Wohnungen'],
        answer: 0,
      },
      {
        q: 'Warum ziehen wenige in leerstehende ländliche Wohnungen?',
        options: ['Sie sind zu teuer', 'Sie sind zu groß', 'Es fehlen Verkehrsanbindung und Arbeitsplätze'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-zeitzonen',
    level: 'C1',
    tags: ['work'],
    icon: 'planet',
    title: { de: 'Ein Team, drei Zeitzonen', en: 'One team, three time zones' },
    paragraphs: [
      [
        [
          'Marias Team verteilt sich auf Berlin, Bangalore und São Paulo.',
          'Maria’s team is spread across Berlin, Bangalore and São Paulo.',
        ],
        [
          'Gemeinsame Arbeitszeit gibt es nur zwei Stunden am Tag, und auch die liegt für jemanden ungünstig.',
          'There are only two hours of shared working time a day, and even those are inconvenient for someone.',
        ],
        [
          'Spontane Absprachen, wie man sie aus dem Büro kennt, sind praktisch unmöglich.',
          'Spontaneous arrangements of the kind familiar from the office are practically impossible.',
        ],
      ],
      [
        [
          'Das Team hat deshalb gelernt, konsequent asynchron zu arbeiten.',
          'The team has therefore learned to work consistently asynchronously.',
        ],
        [
          'Entscheidungen werden schriftlich begründet, Fragen so formuliert, dass sie ohne Rückfrage beantwortet werden können.',
          'Decisions are justified in writing, questions are phrased so that they can be answered without follow-up queries.',
        ],
        [
          'Wer morgens in Berlin den Rechner öffnet, findet die Ergebnisse der Nacht aus Brasilien vor.',
          'Whoever opens their computer in Berlin in the morning finds the results of the night from Brazil.',
        ],
      ],
      [
        [
          'Diese Arbeitsweise erfordert Disziplin und eine präzise Ausdrucksweise.',
          'This way of working requires discipline and precise expression.',
        ],
        [
          'Missverständnisse kosten sonst schnell einen ganzen Tag.',
          'Otherwise misunderstandings quickly cost a whole day.',
        ],
        [
          'Maria ist überzeugt, dass ihr Team gerade wegen der Distanz besser dokumentiert als viele Teams, die im selben Raum sitzen.',
          'Maria is convinced that precisely because of the distance her team documents better than many teams sitting in the same room.',
        ],
      ],
    ],
    questions: [
      { q: 'Wie viel gemeinsame Arbeitszeit gibt es?', options: ['Acht Stunden', 'Zwei Stunden', 'Keine'], answer: 1 },
      {
        q: 'Wie arbeitet das Team deshalb?',
        options: ['Konsequent asynchron', 'Nur nachts', 'Nur mündlich'],
        answer: 0,
      },
      {
        q: 'Was ist Maria überzeugt?',
        options: [
          'Dass Distanz alles schlechter macht',
          'Dass sie umziehen sollte',
          'Dass ihr Team wegen der Distanz besser dokumentiert',
        ],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-zeiterfassung',
    level: 'C1',
    tags: ['work'],
    icon: 'today',
    title: { de: 'Das Ende der Vertrauensarbeitszeit?', en: 'The end of trust-based working hours?' },
    paragraphs: [
      [
        [
          'Viele Unternehmen verzichteten jahrelang bewusst darauf, die Arbeitszeit ihrer Beschäftigten zu erfassen.',
          'For years many companies deliberately refrained from recording their employees’ working hours.',
        ],
        [
          'Unter dem Stichwort Vertrauensarbeitszeit zählte allein das Ergebnis.',
          'Under the heading of trust-based working hours, only the result counted.',
        ],
        [
          'Höchstrichterliche Urteile haben jedoch klargestellt, dass Arbeitgeber die Arbeitszeit grundsätzlich erfassen müssen.',
          'Supreme court rulings have made clear, however, that employers must in principle record working time.',
        ],
      ],
      [
        ['Hintergrund ist der Gesundheitsschutz.', 'The background is health protection.'],
        [
          'Ohne Aufzeichnung lässt sich kaum kontrollieren, ob Höchstarbeitszeiten und Ruhezeiten eingehalten werden.',
          'Without records it is hardly possible to check whether maximum working hours and rest periods are observed.',
        ],
        [
          'Gerade im Homeoffice verschwimmen diese Grenzen leicht.',
          'Especially when working from home, these boundaries easily blur.',
        ],
      ],
      [
        [
          'Kritiker befürchten mehr Kontrolle und einen Rückschritt zur Stechuhr.',
          'Critics fear more control and a step back to the time clock.',
        ],
        [
          'Befürworter entgegnen, dass erst die Erfassung unbezahlte Überstunden sichtbar mache.',
          'Supporters counter that only recording makes unpaid overtime visible.',
        ],
        [
          'Wie flexibel die Umsetzung ausfallen darf, soll ein Gesetz regeln, über das seit Langem gestritten wird.',
          'How flexible implementation may be is to be regulated by a law that has long been disputed.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was zählte bei der Vertrauensarbeitszeit?',
        options: ['Die Anwesenheit', 'Allein das Ergebnis', 'Die Zahl der E-Mails'],
        answer: 1,
      },
      {
        q: 'Was ist der Hintergrund der Erfassungspflicht?',
        options: ['Der Gesundheitsschutz', 'Die Steuer', 'Die Rente'],
        answer: 0,
      },
      {
        q: 'Was sagen Befürworter?',
        options: [
          'Erfassung ist unnötig',
          'Die Stechuhr ist modern',
          'Erst die Erfassung macht unbezahlte Überstunden sichtbar',
        ],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-diversitaet',
    level: 'C1',
    tags: ['work'],
    icon: 'community',
    title: { de: 'Vielfalt als Aushängeschild', en: 'Diversity as a showcase' },
    paragraphs: [
      [
        [
          'Auf den Karriereseiten großer Unternehmen lächeln Menschen unterschiedlichster Herkunft in die Kamera.',
          'On the careers pages of large companies, people of the most diverse backgrounds smile into the camera.',
        ],
        [
          'Vielfalt gilt als Wettbewerbsvorteil, weil gemischte Teams nachweislich mehr Perspektiven einbringen.',
          'Diversity is seen as a competitive advantage because mixed teams demonstrably bring in more perspectives.',
        ],
        [
          'Ein Blick in die Vorstandsetagen zeigt allerdings ein anderes Bild.',
          'A look at the executive floors, however, shows a different picture.',
        ],
      ],
      [
        [
          'Menschen mit Migrationsgeschichte sind in Führungspositionen nach wie vor deutlich unterrepräsentiert.',
          'People with a migration background are still significantly underrepresented in leadership positions.',
        ],
        [
          'Studien mit fiktiven Bewerbungen belegen, dass ein fremd klingender Name die Chance auf eine Einladung spürbar verringert.',
          'Studies with fictitious applications show that a foreign-sounding name noticeably reduces the chance of an invitation.',
        ],
        [
          'Einige Firmen testen deshalb anonymisierte Bewerbungsverfahren.',
          'Some companies are therefore testing anonymised application procedures.',
        ],
      ],
      [
        [
          'Echte Vielfalt, so eine Beraterin, entstehe nicht durch Fotos, sondern durch Strukturen.',
          'Real diversity, says one consultant, does not come from photos but from structures.',
        ],
        [
          'Dazu gehören transparente Beförderungskriterien und Führungskräfte, die eigene Vorurteile reflektieren.',
          'These include transparent promotion criteria and managers who reflect on their own prejudices.',
        ],
        [
          'Erst wenn sich das in den Entscheidungen niederschlägt, ist Vielfalt mehr als ein Aushängeschild.',
          'Only when this is reflected in decisions is diversity more than a showcase.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Warum gilt Vielfalt als Wettbewerbsvorteil?',
        options: [
          'Gemischte Teams bringen mehr Perspektiven ein',
          'Sie ist billiger',
          'Sie ist gesetzlich vorgeschrieben',
        ],
        answer: 0,
      },
      {
        q: 'Was belegen Studien mit fiktiven Bewerbungen?',
        options: [
          'Namen spielen keine Rolle',
          'Ein fremd klingender Name verringert die Chancen',
          'Fotos helfen immer',
        ],
        answer: 1,
      },
      {
        q: 'Wodurch entsteht laut der Beraterin echte Vielfalt?',
        options: ['Durch Fotos', 'Durch mehr Werbung', 'Durch Strukturen'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-green-it',
    level: 'C1',
    tags: ['work'],
    icon: 'leaf',
    title: { de: 'Wie viel CO₂ steckt in einer Suchanfrage?', en: 'How much CO₂ is in a search query?' },
    paragraphs: [
      [
        [
          'Digitale Dienste wirken immateriell, verbrauchen aber reale Ressourcen.',
          'Digital services seem immaterial but consume real resources.',
        ],
        [
          'Rechenzentren benötigen enorme Mengen Strom für Server und Kühlung.',
          'Data centres need enormous amounts of electricity for servers and cooling.',
        ],
        [
          'Mit dem Aufstieg rechenintensiver KI-Anwendungen dürfte ihr Bedarf weiter deutlich steigen.',
          'With the rise of compute-intensive AI applications, their demand is likely to rise considerably further.',
        ],
      ],
      [
        [
          'Auch Softwareentwickler können zur Reduktion beitragen.',
          'Software developers can also contribute to the reduction.',
        ],
        [
          'Effizienter Code, kleinere Bilder und weniger unnötige Datenübertragungen senken den Energieverbrauch messbar.',
          'Efficient code, smaller images and less unnecessary data transfer measurably reduce energy consumption.',
        ],
        [
          'Eine Webseite, die schneller lädt, ist zudem für Nutzer mit schwacher Verbindung angenehmer.',
          'A web page that loads faster is also more pleasant for users with a weak connection.',
        ],
      ],
      [
        [
          'In Deutschland müssen größere Rechenzentren inzwischen strenge Effizienzvorgaben erfüllen.',
          'In Germany larger data centres now have to meet strict efficiency requirements.',
        ],
        [
          'Ihre Abwärme soll künftig verstärkt in Fernwärmenetze eingespeist werden.',
          'Their waste heat is increasingly to be fed into district heating networks in future.',
        ],
        [
          'So könnte ausgerechnet die Cloud dazu beitragen, Wohnungen im Winter zu heizen.',
          'So, of all things, the cloud could help heat homes in winter.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wofür benötigen Rechenzentren viel Strom?',
        options: ['Für Beleuchtung', 'Für Server und Kühlung', 'Für Aufzüge'],
        answer: 1,
      },
      {
        q: 'Was senkt den Energieverbrauch von Software?',
        options: ['Effizienter Code und kleinere Bilder', 'Mehr Animationen', 'Größere Videos'],
        answer: 0,
      },
      {
        q: 'Wofür soll die Abwärme genutzt werden?',
        options: ['Zum Kühlen', 'Für Schwimmbäder', 'Für Fernwärmenetze'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-c1-okr',
    level: 'C1',
    tags: ['work'],
    icon: 'progress',
    title: { de: 'Ziele, die man messen kann', en: 'Goals you can measure' },
    paragraphs: [
      [
        [
          'Als Davids Arbeitgeber OKRs einführte, hielten viele das zunächst für eine weitere Managementmode.',
          'When David’s employer introduced OKRs, many initially thought it was just another management fad.',
        ],
        [
          'Die Abkürzung steht für Objectives and Key Results, also Ziele und messbare Schlüsselergebnisse.',
          'The abbreviation stands for Objectives and Key Results, that is, goals and measurable key results.',
        ],
        [
          'Jedes Team formuliert pro Quartal wenige ehrgeizige Ziele und legt fest, woran man ihren Erfolg erkennt.',
          'Every team formulates a few ambitious goals per quarter and defines how their success will be recognised.',
        ],
      ],
      [
        [
          'Der Reiz liegt in der Transparenz: Alle Ziele sind im Unternehmen öffentlich einsehbar.',
          'The appeal lies in transparency: all goals are visible to everyone in the company.',
        ],
        [
          'So erkennt man schnell, ob zwei Abteilungen an widersprüchlichen Vorhaben arbeiten.',
          'That way you quickly see whether two departments are working on contradictory plans.',
        ],
        [
          'Es gilt als Erfolg, wenn ein Team nur rund siebzig Prozent seiner Ziele erreicht, da diese bewusst hoch angesetzt sind.',
          'It counts as success when a team reaches only about seventy percent of its goals, since they are deliberately set high.',
        ],
      ],
      [
        [
          'Problematisch wird es, wenn OKRs mit Boni verknüpft werden.',
          'It becomes problematic when OKRs are linked to bonuses.',
        ],
        [
          'Dann setzen sich Teams lieber bescheidene Ziele, die sie sicher erreichen.',
          'Then teams prefer to set modest goals they are sure to reach.',
        ],
        [
          'Davids Firma hat diese Verbindung nach einem Jahr wieder aufgehoben, und seitdem sind die Ziele merklich mutiger geworden.',
          'David’s company removed this link again after a year, and since then the goals have become noticeably bolder.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wofür steht OKR?',
        options: ['Ziele und messbare Schlüsselergebnisse', 'Offizielle Kontrollregeln', 'Organisierte Kundenreisen'],
        answer: 0,
      },
      {
        q: 'Ab wann gilt ein Quartal als Erfolg?',
        options: ['Erst bei hundert Prozent', 'Schon bei rund siebzig Prozent', 'Bei zehn Prozent'],
        answer: 1,
      },
      {
        q: 'Was passiert, wenn OKRs mit Boni verknüpft werden?',
        options: ['Die Ziele werden mutiger', 'Niemand nimmt teil', 'Teams setzen sich bescheidene Ziele'],
        answer: 2,
      },
    ],
  },
];
