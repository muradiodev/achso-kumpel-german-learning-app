// B1 reading texts. Format and rules: src/data/reading.js.

export const B1 = [
  {
    id: 'r-b1-neue-wohnung',
    level: 'B1',
    tags: ['everyday'],
    icon: 'everyday',
    title: { de: 'Endlich eine Wohnung', en: 'Finally a flat' },
    paragraphs: [
      [
        [
          'Drei Monate lang hat Leyla in Leipzig eine Wohnung gesucht.',
          'Leyla spent three months looking for a flat in Leipzig.',
        ],
        ['Zu jeder Besichtigung kamen mindestens zwanzig Leute.', 'At least twenty people came to every viewing.'],
        [
          'Viele Vermieter wollten eine Schufa-Auskunft, drei Gehaltsnachweise und eine Bescheinigung vom alten Vermieter sehen.',
          'Many landlords wanted to see a credit report, three payslips and a certificate from her old landlord.',
        ],
      ],
      [
        [
          'Am Ende hatte sie Glück: Eine Kollegin zog nach München und schlug Leyla als Nachmieterin vor.',
          'In the end she was lucky: a colleague moved to Munich and suggested Leyla as the next tenant.',
        ],
        [
          'Die Wohnung hat zwei Zimmer, einen kleinen Balkon und liegt nur zehn Minuten von der Straßenbahn entfernt.',
          'The flat has two rooms, a small balcony and is only ten minutes from the tram.',
        ],
        [
          'Die Kaltmiete beträgt 690 Euro, dazu kommen etwa 180 Euro Nebenkosten.',
          'The basic rent is 690 euros, plus about 180 euros of utilities.',
        ],
      ],
      [
        [
          'Nach dem Umzug musste sie sich innerhalb von zwei Wochen beim Bürgeramt anmelden.',
          'After the move she had to register at the citizens office within two weeks.',
        ],
        [
          'Einen Termin bekam sie erst nach drei Wochen, aber die Mitarbeiterin dort war zum Glück entspannt.',
          'She only got an appointment after three weeks, but luckily the clerk there was relaxed.',
        ],
        ['Jetzt fehlt nur noch eins: ein Sofa.', 'Now only one thing is missing: a sofa.'],
      ],
    ],
    questions: [
      {
        q: 'Wie hat Leyla die Wohnung bekommen?',
        options: ['Über eine Anzeige im Internet', 'Eine Kollegin hat sie empfohlen', 'Über einen Makler'],
        answer: 1,
      },
      {
        q: 'Wie viel zahlt Leyla ungefähr pro Monat insgesamt?',
        options: ['690 Euro', '870 Euro', '180 Euro'],
        answer: 1,
      },
      {
        q: 'Was musste sie nach dem Umzug machen?',
        options: ['Sich beim Bürgeramt anmelden', 'Ein neues Konto eröffnen', 'Einen Mietvertrag kündigen'],
        answer: 0,
      },
    ],
  },
  {
    id: 'r-b1-daily',
    level: 'B1',
    tags: ['work'],
    icon: 'work',
    title: { de: 'Das Daily um halb zehn', en: 'The daily at half past nine' },
    paragraphs: [
      [
        [
          'Jeden Morgen um halb zehn trifft sich Tarek mit seinem Team zum Daily.',
          'Every morning at half past nine Tarek meets his team for the daily.',
        ],
        ['Das Meeting dauert höchstens fünfzehn Minuten.', 'The meeting lasts fifteen minutes at most.'],
        [
          'Jeder sagt kurz, was er gestern gemacht hat, was er heute plant und ob ihn etwas blockiert.',
          'Everyone briefly says what they did yesterday, what they plan today and whether anything is blocking them.',
        ],
      ],
      [
        [
          'Am Anfang war Tarek nervös, weil er Angst hatte, Fehler zu machen.',
          'At first Tarek was nervous because he was afraid of making mistakes.',
        ],
        [
          'Deshalb hat er sich ein paar Sätze aufgeschrieben, zum Beispiel: „Ich hänge noch am Login-Problem“ oder „Dafür brauche ich kurz Hilfe von Jana“.',
          'So he wrote down a few sentences, for example: "I am still stuck on the login problem" or "For that I need a bit of help from Jana".',
        ],
        ['Nach zwei Wochen brauchte er den Zettel nicht mehr.', 'After two weeks he no longer needed the note.'],
      ],
      [
        [
          'Seine Kollegen sprechen schnell und benutzen viele englische Wörter wie „Ticket“, „Deadline“ oder „Release“.',
          'His colleagues speak fast and use many English words such as "ticket", "deadline" or "release".',
        ],
        [
          'Tarek findet das praktisch, aber er möchte auch die deutschen Wörter lernen.',
          'Tarek finds that handy, but he also wants to learn the German words.',
        ],
        [
          'Wenn er etwas nicht versteht, fragt er einfach nach: „Kannst du das bitte noch mal erklären?“',
          'When he does not understand something, he simply asks: "Can you explain that again, please?"',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wie lange dauert das Daily?',
        options: ['Eine halbe Stunde', 'Höchstens fünfzehn Minuten', 'Den ganzen Morgen'],
        answer: 1,
      },
      {
        q: 'Warum hat Tarek sich Sätze aufgeschrieben?',
        options: ['Er hatte Angst vor Fehlern', 'Sein Chef wollte das', 'Er wollte ein Protokoll schreiben'],
        answer: 0,
      },
      {
        q: 'Was macht Tarek, wenn er etwas nicht versteht?',
        options: ['Er schweigt', 'Er sucht es später im Internet', 'Er fragt nach'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-arzttermin',
    level: 'B1',
    tags: ['everyday'],
    icon: 'weak',
    title: { de: 'Krank im Herbst', en: 'Sick in autumn' },
    paragraphs: [
      [
        [
          'Am Montagmorgen wacht Sofia mit Fieber und Halsschmerzen auf.',
          'On Monday morning Sofia wakes up with a fever and a sore throat.',
        ],
        [
          'Sie ruft sofort in der Hausarztpraxis an, aber die Leitung ist dauernd besetzt.',
          'She immediately calls her GP practice, but the line is constantly busy.',
        ],
        [
          'Nach zwanzig Minuten kommt sie endlich durch und bekommt einen Termin für elf Uhr.',
          'After twenty minutes she finally gets through and gets an appointment for eleven.',
        ],
      ],
      [
        ['Im Wartezimmer sitzen schon acht Patienten.', 'Eight patients are already sitting in the waiting room.'],
        [
          'Die Ärztin hört sie ab, schaut in ihren Hals und sagt, dass es nur eine Erkältung ist.',
          'The doctor listens to her chest, looks into her throat and says it is only a cold.',
        ],
        [
          'Sie schreibt Sofia für drei Tage krank und empfiehlt viel Tee und Ruhe.',
          'She signs Sofia off sick for three days and recommends lots of tea and rest.',
        ],
      ],
      [
        [
          'Die Krankmeldung muss Sofia nicht mehr selbst zum Arbeitgeber schicken, denn die Praxis meldet sie elektronisch.',
          'Sofia no longer has to send the sick note to her employer herself, because the practice reports it electronically.',
        ],
        [
          'Trotzdem schreibt sie ihrem Teamleiter eine kurze Nachricht, damit niemand auf sie wartet.',
          'Still, she sends her team lead a short message so that nobody waits for her.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was ist Sofias Problem am Telefon?',
        options: ['Die Praxis ist geschlossen', 'Die Leitung ist besetzt', 'Sie hat keine Versichertenkarte'],
        answer: 1,
      },
      {
        q: 'Was sagt die Ärztin?',
        options: ['Es ist nur eine Erkältung', 'Sofia muss ins Krankenhaus', 'Sofia kann morgen arbeiten'],
        answer: 0,
      },
      {
        q: 'Wie bekommt der Arbeitgeber die Krankmeldung?',
        options: ['Per Post von Sofia', 'Elektronisch von der Praxis', 'Gar nicht'],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-b1-stammtisch',
    level: 'B1',
    tags: ['everyday'],
    icon: 'chats',
    title: { de: 'Der Sprachstammtisch', en: 'The language meetup' },
    paragraphs: [
      [
        [
          'Jeden zweiten Donnerstag trifft sich in einer Kneipe in Köln ein Sprachstammtisch.',
          'Every other Thursday a language meetup takes place in a pub in Cologne.',
        ],
        [
          'Dort sitzen Deutsche und Menschen aus vielen Ländern an langen Tischen und unterhalten sich.',
          'Germans and people from many countries sit at long tables and chat there.',
        ],
        [
          'Die Regel ist einfach: Man spricht Deutsch, auch wenn es nicht perfekt ist.',
          'The rule is simple: you speak German, even if it is not perfect.',
        ],
      ],
      [
        [
          'Murad geht seit einem halben Jahr hin, weil er bei der Arbeit fast nur Englisch spricht.',
          'Murad has been going for half a year because he speaks almost only English at work.',
        ],
        ['Am Anfang hat er wenig gesagt und viel zugehört.', 'At first he said little and listened a lot.'],
        [
          'Inzwischen erzählt er Witze und diskutiert sogar über Fußball, obwohl er sich eigentlich nicht dafür interessiert.',
          'Now he tells jokes and even argues about football, although he is not really interested in it.',
        ],
      ],
      [
        [
          'Das Wichtigste hat er nicht aus Büchern gelernt: Fehler sind kein Problem, solange das Gespräch weitergeht.',
          'He did not learn the most important thing from books: mistakes are not a problem as long as the conversation keeps going.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wie oft findet der Stammtisch statt?',
        options: ['Jeden Donnerstag', 'Alle zwei Wochen', 'Einmal im Monat'],
        answer: 1,
      },
      {
        q: 'Warum geht Murad zum Stammtisch?',
        options: ['Er spricht bei der Arbeit fast nur Englisch', 'Er liebt Fußball', 'Sein Kurs verlangt es'],
        answer: 0,
      },
      {
        q: 'Was hat Murad gelernt?',
        options: [
          'Grammatik ist am wichtigsten',
          'Man sollte nur sprechen, wenn alles richtig ist',
          'Fehler sind kein Problem',
        ],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-probezeit',
    level: 'B1',
    tags: ['work'],
    icon: 'work',
    title: { de: 'Sechs Monate Probezeit', en: 'Six months on probation' },
    paragraphs: [
      [
        [
          'Fast jeder neue Arbeitsvertrag in Deutschland beginnt mit einer Probezeit.',
          'Almost every new employment contract in Germany starts with a probation period.',
        ],
        ['Meistens dauert sie sechs Monate.', 'It usually lasts six months.'],
        [
          'In dieser Zeit können beide Seiten mit einer Frist von zwei Wochen kündigen.',
          'During this time both sides can give notice with two weeks’ notice.',
        ],
      ],
      [
        [
          'Kemal war am Anfang sehr nervös, weil er Angst hatte, etwas falsch zu machen.',
          'At first Kemal was very nervous because he was afraid of doing something wrong.',
        ],
        [
          'Seine Teamleiterin hat ihm aber erklärt, dass die Probezeit für beide Seiten ein Test ist.',
          'His team lead explained to him, though, that probation is a test for both sides.',
        ],
        ['Auch er soll prüfen, ob ihm die Firma gefällt.', 'He too should check whether he likes the company.'],
      ],
      [
        ['Nach drei Monaten hatten sie ein Zwischengespräch.', 'After three months they had a mid-point meeting.'],
        [
          'Kemal hat viel Lob bekommen und zwei Tipps, was er besser machen kann.',
          'Kemal got a lot of praise and two tips on what he can do better.',
        ],
        ['Seitdem schläft er wieder ruhig.', 'Since then he has been sleeping soundly again.'],
      ],
    ],
    questions: [
      {
        q: 'Wie lange dauert die Probezeit meistens?',
        options: ['Drei Monate', 'Sechs Monate', 'Ein Jahr'],
        answer: 1,
      },
      {
        q: 'Was hat die Teamleiterin erklärt?',
        options: [
          'Die Probezeit ist ein Test für beide Seiten',
          'Kemal muss mehr arbeiten',
          'Die Probezeit ist unwichtig',
        ],
        answer: 0,
      },
      {
        q: 'Was hat Kemal im Zwischengespräch bekommen?',
        options: ['Eine Kündigung', 'Mehr Gehalt', 'Lob und zwei Tipps'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-duzen-siezen',
    level: 'B1',
    tags: ['work', 'everyday'],
    icon: 'chats',
    title: { de: 'Du oder Sie?', en: 'Du or Sie?' },
    paragraphs: [
      [
        [
          'Für viele Deutschlerner ist die Frage „du oder Sie?“ schwieriger als jede Grammatikregel.',
          'For many German learners the question "du or Sie?" is harder than any grammar rule.',
        ],
        ['Im Büro hängt es stark von der Firma ab.', 'In the office it depends a lot on the company.'],
        [
          'In Start-ups duzen sich meistens alle, sogar mit der Geschäftsführung.',
          'In start-ups usually everyone says du, even with the management.',
        ],
      ],
      [
        [
          'In Behörden, bei Ärzten und mit älteren Nachbarn sagt man dagegen fast immer „Sie“.',
          'In public offices, with doctors and with older neighbours, on the other hand, you almost always say "Sie".',
        ],
        [
          'Normalerweise bietet die ältere Person oder die Person mit der höheren Position das Du an.',
          'Normally the older person or the person in the higher position offers the du.',
        ],
        [
          'Wenn man unsicher ist, beginnt man am besten mit „Sie“.',
          'If you are unsure, it is best to start with "Sie".',
        ],
      ],
      [
        ['Ein falsches „du“ ist meistens kein Drama.', 'A wrong "du" is usually not a big deal.'],
        ['Man kann einfach fragen: „Sollen wir uns duzen?“', 'You can simply ask: "Shall we say du to each other?"'],
        ['Die meisten Deutschen finden diese Frage ganz normal.', 'Most Germans find this question completely normal.'],
      ],
    ],
    questions: [
      { q: 'Wo duzen sich meistens alle?', options: ['In Behörden', 'In Start-ups', 'Beim Arzt'], answer: 1 },
      {
        q: 'Wer bietet normalerweise das Du an?',
        options: ['Die ältere Person oder die mit der höheren Position', 'Immer der Mann', 'Die jüngere Person'],
        answer: 0,
      },
      {
        q: 'Was macht man, wenn man unsicher ist?',
        options: ['Man sagt gar nichts', 'Man spricht Englisch', 'Man beginnt mit „Sie“'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-smalltalk',
    level: 'B1',
    tags: ['work'],
    icon: 'coffee',
    title: { de: 'Smalltalk an der Kaffeemaschine', en: 'Small talk at the coffee machine' },
    paragraphs: [
      [
        [
          'Viele Neue im Büro wissen nicht, worüber sie mit den Kollegen sprechen sollen.',
          'Many newcomers in the office do not know what to talk about with colleagues.',
        ],
        [
          'Sichere Themen sind das Wetter, das Wochenende, Urlaubspläne oder das Essen in der Kantine.',
          'Safe topics are the weather, the weekend, holiday plans or the food in the canteen.',
        ],
        [
          'Über Gehalt, Religion oder Politik spricht man am Anfang eher nicht.',
          'You tend not to talk about salary, religion or politics at first.',
        ],
      ],
      [
        [
          'Ein guter Einstieg ist eine einfache Frage: „Und, wie war dein Wochenende?“',
          'A good way in is a simple question: "So, how was your weekend?"',
        ],
        [
          'Wichtig ist, dass man auch etwas von sich erzählt.',
          'It is important that you also tell something about yourself.',
        ],
        ['Sonst wirkt das Gespräch wie ein Interview.', 'Otherwise the conversation feels like an interview.'],
      ],
      [
        ['Smalltalk ist keine Zeitverschwendung.', 'Small talk is not a waste of time.'],
        [
          'Oft entstehen dabei Kontakte, die später bei der Arbeit helfen.',
          'It often creates contacts that help later at work.',
        ],
        [
          'Und für Deutschlerner ist es die beste kostenlose Sprechübung.',
          'And for German learners it is the best free speaking practice.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Welches Thema ist am Anfang eher nicht gut?',
        options: ['Das Wetter', 'Das Gehalt', 'Das Wochenende'],
        answer: 1,
      },
      {
        q: 'Warum soll man auch etwas von sich erzählen?',
        options: ['Sonst wirkt es wie ein Interview', 'Weil der Chef zuhört', 'Damit das Gespräch schnell endet'],
        answer: 0,
      },
      {
        q: 'Was ist Smalltalk für Deutschlerner laut Text?',
        options: ['Zeitverschwendung', 'Zu schwierig', 'Die beste kostenlose Sprechübung'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-steuererklaerung',
    level: 'B1',
    tags: ['everyday'],
    icon: 'writing',
    title: { de: 'Die erste Steuererklärung', en: 'The first tax return' },
    paragraphs: [
      [
        [
          'Viele Angestellte müssen in Deutschland keine Steuererklärung machen.',
          'Many employees in Germany do not have to file a tax return.',
        ],
        [
          'Trotzdem lohnt es sich oft, weil man Geld zurückbekommt.',
          'Still, it is often worth it because you get money back.',
        ],
        ['Im Durchschnitt sind es über tausend Euro.', 'On average it is over a thousand euros.'],
      ],
      [
        [
          'Swetlana hat dieses Jahr zum ersten Mal eine Erklärung gemacht.',
          'This year Svetlana filed a return for the first time.',
        ],
        [
          'Sie hat ihren Weg zur Arbeit, den Laptop für das Homeoffice und ihren Deutschkurs angegeben.',
          'She declared her commute, the laptop for working from home and her German course.',
        ],
        ['Dafür hat sie ein kostenloses Online-Programm benutzt.', 'For that she used a free online program.'],
      ],
      [
        ['Nach sieben Wochen kam der Steuerbescheid.', 'After seven weeks the tax assessment arrived.'],
        ['Sie bekommt 840 Euro zurück.', 'She is getting 840 euros back.'],
        [
          'Nächstes Jahr will sie die Belege gleich das ganze Jahr über sammeln.',
          'Next year she wants to collect the receipts throughout the whole year right away.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Warum lohnt sich eine Steuererklärung oft?',
        options: ['Man bekommt Geld zurück', 'Sie ist Pflicht', 'Man bekommt einen Preis'],
        answer: 0,
      },
      {
        q: 'Was hat Swetlana NICHT angegeben?',
        options: ['Den Arbeitsweg', 'Den Deutschkurs', 'Ihren Urlaub'],
        answer: 2,
      },
      {
        q: 'Was will sie nächstes Jahr anders machen?',
        options: ['Einen Steuerberater nehmen', 'Die Belege das ganze Jahr sammeln', 'Keine Erklärung machen'],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-b1-krankenversicherung',
    level: 'B1',
    tags: ['everyday'],
    icon: 'heart',
    title: { de: 'Gesetzlich oder privat?', en: 'Public or private?' },
    paragraphs: [
      [
        ['In Deutschland muss jeder krankenversichert sein.', 'In Germany everyone has to have health insurance.'],
        [
          'Die meisten Menschen sind in einer gesetzlichen Krankenkasse.',
          'Most people are in a statutory health insurance fund.',
        ],
        [
          'Der Beitrag hängt vom Gehalt ab, und der Arbeitgeber zahlt etwa die Hälfte.',
          'The contribution depends on the salary, and the employer pays about half.',
        ],
      ],
      [
        [
          'Wer sehr gut verdient, kann auch in eine private Versicherung wechseln.',
          'People who earn very well can also switch to private insurance.',
        ],
        ['Dort bekommt man manchmal schneller einen Termin.', 'There you sometimes get an appointment faster.'],
        [
          'Im Alter kann die private Versicherung aber sehr teuer werden.',
          'In old age, however, private insurance can become very expensive.',
        ],
      ],
      [
        [
          'Ein Vorteil der gesetzlichen Kasse ist die Familienversicherung.',
          'One advantage of the statutory fund is family insurance.',
        ],
        [
          'Kinder und Partner ohne eigenes Einkommen sind kostenlos mitversichert.',
          'Children and partners without their own income are covered at no extra cost.',
        ],
        [
          'Deshalb bleiben viele Familien lieber gesetzlich versichert.',
          'That is why many families prefer to stay with statutory insurance.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wer zahlt etwa die Hälfte des Beitrags?',
        options: ['Der Staat', 'Der Arbeitgeber', 'Die Familie'],
        answer: 1,
      },
      {
        q: 'Was ist ein Nachteil der privaten Versicherung?',
        options: ['Sie kann im Alter teuer werden', 'Man bekommt nie Termine', 'Sie ist nur für Kinder'],
        answer: 0,
      },
      {
        q: 'Was ist die Familienversicherung?',
        options: [
          'Eine Versicherung für das Auto',
          'Eine Lebensversicherung',
          'Familienmitglieder ohne Einkommen sind kostenlos versichert',
        ],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-nebenkosten',
    level: 'B1',
    tags: ['everyday'],
    icon: 'everyday',
    title: { de: 'Die Nebenkostenabrechnung', en: 'The utility bill' },
    paragraphs: [
      [
        [
          'Einmal im Jahr bekommen Mieter die Nebenkostenabrechnung.',
          'Once a year tenants get the service charge statement.',
        ],
        [
          'Darin steht, wie viel Heizung, Wasser, Müllabfuhr und Hausmeister wirklich gekostet haben.',
          'It shows how much heating, water, rubbish collection and the caretaker really cost.',
        ],
        ['Jeden Monat zahlt man vorher eine Vorauszahlung.', 'Every month you pay an advance payment beforehand.'],
      ],
      [
        ['Dieses Jahr musste Jan 420 Euro nachzahlen.', 'This year Jan had to pay 420 euros extra.'],
        [
          'Der Grund war vor allem die teure Heizung im kalten Winter.',
          'The reason was mainly the expensive heating in the cold winter.',
        ],
        [
          'Er hat die Abrechnung genau geprüft, weil er gehört hatte, dass es oft Fehler gibt.',
          'He checked the statement carefully because he had heard that there are often mistakes.',
        ],
      ],
      [
        [
          'Tatsächlich war die Gartenpflege doppelt berechnet.',
          'In fact the garden maintenance had been charged twice.',
        ],
        [
          'Nach einer E-Mail an die Hausverwaltung musste er 60 Euro weniger zahlen.',
          'After an email to the property management he had to pay 60 euros less.',
        ],
        [
          'Außerdem hat er seine monatliche Vorauszahlung erhöht.',
          'He has also increased his monthly advance payment.',
        ],
      ],
    ],
    questions: [
      { q: 'Wie oft kommt die Abrechnung?', options: ['Jeden Monat', 'Einmal im Jahr', 'Alle zwei Jahre'], answer: 1 },
      {
        q: 'Warum musste Jan nachzahlen?',
        options: ['Vor allem wegen der Heizung', 'Wegen einer Party', 'Wegen eines Wasserschadens'],
        answer: 0,
      },
      {
        q: 'Welcher Fehler war in der Abrechnung?',
        options: ['Der Name war falsch', 'Die Heizung fehlte', 'Die Gartenpflege war doppelt'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-deutschlandticket',
    level: 'B1',
    tags: ['everyday'],
    icon: 'repeat',
    title: { de: 'Ein Ticket für ganz Deutschland', en: 'One ticket for all of Germany' },
    paragraphs: [
      [
        [
          'Mit dem Deutschlandticket kann man im ganzen Land Bus, Straßenbahn, U-Bahn und Regionalzüge benutzen.',
          'With the Deutschlandticket you can use buses, trams, underground and regional trains across the whole country.',
        ],
        ['Es ist ein Abo, das man jeden Monat kündigen kann.', 'It is a subscription that you can cancel every month.'],
        [
          'Schnelle Züge wie der ICE sind allerdings nicht dabei.',
          'Fast trains like the ICE are not included, however.',
        ],
      ],
      [
        [
          'Viele Firmen bezahlen ihren Mitarbeitern einen Teil des Tickets.',
          'Many companies pay part of the ticket for their employees.',
        ],
        ['Yusuf zahlt deshalb nur noch die Hälfte.', 'So Yusuf now only pays half.'],
        [
          'Früher hat er allein für seine Monatskarte in Stuttgart mehr bezahlt.',
          'He used to pay more just for his monthly pass in Stuttgart.',
        ],
      ],
      [
        ['Am Wochenende nutzt er das Ticket für Ausflüge.', 'At the weekend he uses the ticket for day trips.'],
        [
          'Mit Regionalzügen ist man zwar langsamer, aber man sieht mehr von der Landschaft.',
          'With regional trains you are slower, it is true, but you see more of the countryside.',
        ],
        [
          'Letzten Monat ist er so bis an den Bodensee gefahren.',
          'Last month he travelled all the way to Lake Constance that way.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Welche Züge sind nicht im Ticket enthalten?',
        options: ['Regionalzüge', 'Schnelle Züge wie der ICE', 'S-Bahnen'],
        answer: 1,
      },
      { q: 'Wie viel zahlt Yusuf?', options: ['Die Hälfte', 'Nichts', 'Den vollen Preis'], answer: 0 },
      {
        q: 'Wohin ist Yusuf letzten Monat gefahren?',
        options: ['Nach Berlin', 'An die Nordsee', 'An den Bodensee'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-ehrenamt',
    level: 'B1',
    tags: ['everyday'],
    icon: 'heart',
    title: { de: 'Helfen im Verein', en: 'Volunteering at a club' },
    paragraphs: [
      [
        [
          'Fast jeder dritte Mensch in Deutschland engagiert sich ehrenamtlich.',
          'Almost one in three people in Germany volunteers.',
        ],
        [
          'Man trainiert eine Kinderfußballmannschaft, hilft bei der Tafel oder in der Feuerwehr.',
          'You coach a children’s football team, help at the food bank or in the fire brigade.',
        ],
        ['Geld bekommt man dafür nicht.', 'You do not get paid for it.'],
      ],
      [
        [
          'Olga hilft jeden Samstag bei der Tafel, die Lebensmittel an Bedürftige verteilt.',
          'Olga helps every Saturday at the food bank, which hands out food to people in need.',
        ],
        ['Am Anfang wollte sie nur ihr Deutsch verbessern.', 'At first she only wanted to improve her German.'],
        [
          'Inzwischen sind die anderen Helfer wie eine zweite Familie für sie.',
          'In the meantime the other helpers are like a second family to her.',
        ],
      ],
      [
        ['Ein Ehrenamt sieht auch im Lebenslauf gut aus.', 'Volunteering also looks good on a CV.'],
        [
          'Arbeitgeber sehen daran, dass jemand Verantwortung übernimmt.',
          'Employers see from it that someone takes responsibility.',
        ],
        [
          'Für Olga ist das aber nicht der wichtigste Grund.',
          'For Olga, however, that is not the most important reason.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was macht die Tafel?',
        options: ['Sie verteilt Lebensmittel an Bedürftige', 'Sie organisiert Fußball', 'Sie verkauft Möbel'],
        answer: 0,
      },
      {
        q: 'Warum hat Olga angefangen?',
        options: ['Für Geld', 'Für ihr Deutsch', 'Weil ihr Chef es wollte'],
        answer: 1,
      },
      {
        q: 'Was sind die anderen Helfer heute für Olga?',
        options: ['Kollegen', 'Fremde', 'Wie eine zweite Familie'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-onboarding',
    level: 'B1',
    tags: ['work'],
    icon: 'rocket',
    title: { de: 'Die erste Woche im neuen Job', en: 'The first week in the new job' },
    paragraphs: [
      [
        [
          'Am ersten Tag bekam Farid einen Plan für die ganze Woche.',
          'On the first day Farid got a plan for the whole week.',
        ],
        ['Jeden Tag hatte er Termine mit anderen Abteilungen.', 'Every day he had meetings with other departments.'],
        [
          'So hat er schnell verstanden, wer wofür zuständig ist.',
          'That way he quickly understood who is responsible for what.',
        ],
      ],
      [
        [
          'Außerdem bekam er einen Paten, einen erfahrenen Kollegen namens Stefan.',
          'He also got a buddy, an experienced colleague called Stefan.',
        ],
        ['Stefan hat ihm die ungeschriebenen Regeln erklärt.', 'Stefan explained the unwritten rules to him.'],
        [
          'Zum Beispiel, dass man vor Meetings um halb neun lieber keine Fragen per Chat stellt.',
          'For example, that before meetings at half past eight you had better not ask questions by chat.',
        ],
      ],
      [
        [
          'Am Freitag haben sie zusammen zu Mittag gegessen und über die Woche gesprochen.',
          'On Friday they had lunch together and talked about the week.',
        ],
        ['Farid hatte viele Fragen, aber keine Angst mehr.', 'Farid had many questions, but no more fear.'],
        [
          'Er sagt, dass ein guter Start mehr wert ist als jede Schulung.',
          'He says that a good start is worth more than any training course.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was hat Farid am ersten Tag bekommen?',
        options: ['Einen Plan für die Woche', 'Ein Firmenauto', 'Eine Prüfung'],
        answer: 0,
      },
      { q: 'Wer ist Stefan?', options: ['Der Chef', 'Ein Kunde', 'Ein erfahrener Kollege'], answer: 2 },
      { q: 'Was hat Stefan erklärt?', options: ['Die ungeschriebenen Regeln', 'Die Steuern', 'Das Gehalt'], answer: 0 },
    ],
  },
  {
    id: 'r-b1-feedbackgespraech',
    level: 'B1',
    tags: ['work'],
    icon: 'chats',
    title: { de: 'Das Jahresgespräch', en: 'The annual review' },
    paragraphs: [
      [
        ['Einmal im Jahr hat Hanna ein Gespräch mit ihrer Chefin.', 'Once a year Hanna has a meeting with her boss.'],
        [
          'Sie sprechen darüber, was gut gelaufen ist und was nicht.',
          'They talk about what went well and what did not.',
        ],
        ['Außerdem legen sie Ziele für das nächste Jahr fest.', 'They also set goals for the next year.'],
      ],
      [
        [
          'Hanna hat sich gut vorbereitet und ihre Erfolge aufgeschrieben.',
          'Hanna prepared well and wrote down her successes.',
        ],
        [
          'Sie hat zum Beispiel ein neues System eingeführt, das dem Team viel Zeit spart.',
          'For example, she introduced a new system that saves the team a lot of time.',
        ],
        ['Ihre Chefin war beeindruckt.', 'Her boss was impressed.'],
      ],
      [
        [
          'Kritik gab es auch: Hanna soll in Meetings öfter ihre Meinung sagen.',
          'There was criticism too: Hanna should say her opinion more often in meetings.',
        ],
        ['Sie findet das fair, weil sie oft zu lange wartet.', 'She finds that fair because she often waits too long.'],
        [
          'Als Ziel hat sie sich eine Weiterbildung im Projektmanagement gewünscht.',
          'As a goal she asked for further training in project management.',
        ],
      ],
    ],
    questions: [
      { q: 'Wie oft hat Hanna dieses Gespräch?', options: ['Jeden Monat', 'Einmal im Jahr', 'Nie'], answer: 1 },
      { q: 'Was hat Hanna eingeführt?', options: ['Ein neues System', 'Eine neue Kantine', 'Homeoffice'], answer: 0 },
      {
        q: 'Was soll Hanna öfter tun?',
        options: ['Pausen machen', 'Früher kommen', 'In Meetings ihre Meinung sagen'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-aufenthaltstitel',
    level: 'B1',
    tags: ['everyday'],
    icon: 'lock',
    title: { de: 'Bei der Ausländerbehörde', en: 'At the immigration office' },
    paragraphs: [
      [
        ['Ravis Aufenthaltstitel läuft in drei Monaten ab.', 'Ravi’s residence permit expires in three months.'],
        [
          'Er weiß, dass es lange dauern kann, einen Termin bei der Ausländerbehörde zu bekommen.',
          'He knows it can take a long time to get an appointment at the immigration office.',
        ],
        ['Deshalb hat er sich sofort online gemeldet.', 'That is why he got in touch online straight away.'],
      ],
      [
        ['Für die Verlängerung braucht er viele Unterlagen.', 'He needs many documents for the extension.'],
        [
          'Dazu gehören sein Arbeitsvertrag, die letzten drei Gehaltsabrechnungen und ein biometrisches Foto.',
          'They include his employment contract, his last three payslips and a biometric photo.',
        ],
        [
          'Er hat alles in einer Mappe gesammelt und Kopien gemacht.',
          'He collected everything in a folder and made copies.',
        ],
      ],
      [
        ['Der Termin selbst hat nur zwanzig Minuten gedauert.', 'The appointment itself took only twenty minutes.'],
        [
          'Bis die neue Karte fertig ist, hat er eine Bescheinigung bekommen.',
          'Until the new card is ready, he got a certificate.',
        ],
        ['Damit darf er weiter arbeiten und reisen.', 'With it he may keep working and travelling.'],
      ],
    ],
    questions: [
      {
        q: 'Wann läuft Ravis Aufenthaltstitel ab?',
        options: ['Morgen', 'In drei Monaten', 'In einem Jahr'],
        answer: 1,
      },
      {
        q: 'Was braucht Ravi NICHT?',
        options: ['Den Arbeitsvertrag', 'Ein biometrisches Foto', 'Ein Zeugnis aus der Schule'],
        answer: 2,
      },
      {
        q: 'Was hat Ravi bis zur neuen Karte bekommen?',
        options: ['Eine Bescheinigung', 'Nichts', 'Einen neuen Pass'],
        answer: 0,
      },
    ],
  },
  {
    id: 'r-b1-elternzeit',
    level: 'B1',
    tags: ['work', 'everyday'],
    icon: 'heart',
    title: { de: 'Papa in Elternzeit', en: 'Dad on parental leave' },
    paragraphs: [
      [
        [
          'Nach der Geburt seines Sohnes hat Marco vier Monate Elternzeit genommen.',
          'After his son was born, Marco took four months of parental leave.',
        ],
        [
          'In dieser Zeit hat er kein Gehalt bekommen, aber Elterngeld vom Staat.',
          'During that time he did not get a salary, but parental allowance from the state.',
        ],
        [
          'Das sind etwa zwei Drittel seines normalen Nettogehalts.',
          'That is about two thirds of his normal net salary.',
        ],
      ],
      [
        [
          'Einige Kollegen waren überrascht, dass ein Mann so lange zu Hause bleibt.',
          'Some colleagues were surprised that a man stays at home so long.',
        ],
        [
          'Sein Chef fand es aber gut und hat die Vertretung früh geplant.',
          'His boss thought it was good, though, and planned the cover early.',
        ],
        [
          'Rechtlich darf ihm wegen der Elternzeit niemand kündigen.',
          'Legally nobody may dismiss him because of the parental leave.',
        ],
      ],
      [
        [
          'Marco sagt, dass es die schönste und anstrengendste Zeit seines Lebens war.',
          'Marco says it was the most beautiful and most exhausting time of his life.',
        ],
        ['Er hat gelernt, Windeln in zehn Sekunden zu wechseln.', 'He learned to change nappies in ten seconds.'],
        [
          'Und er versteht jetzt besser, was seine Frau jeden Tag leistet.',
          'And he now understands better what his wife achieves every day.',
        ],
      ],
    ],
    questions: [
      { q: 'Wie lange war Marco in Elternzeit?', options: ['Vier Monate', 'Ein Jahr', 'Zwei Wochen'], answer: 0 },
      {
        q: 'Wovon hat Marco in dieser Zeit gelebt?',
        options: ['Von seinem Gehalt', 'Vom Elterngeld', 'Von einem Kredit'],
        answer: 1,
      },
      { q: 'Was hat Marco gelernt?', options: ['Kochen', 'Programmieren', 'Schnell Windeln wechseln'], answer: 2 },
    ],
  },
  {
    id: 'r-b1-mietkaution',
    level: 'B1',
    tags: ['everyday'],
    icon: 'lock',
    title: { de: 'Die Kaution zurück', en: 'Getting the deposit back' },
    paragraphs: [
      [
        [
          'Wenn man eine Wohnung mietet, zahlt man meistens eine Kaution.',
          'When you rent a flat, you usually pay a deposit.',
        ],
        ['Sie darf höchstens drei Kaltmieten hoch sein.', 'It may be at most three months’ basic rent.'],
        [
          'Der Vermieter muss das Geld getrennt von seinem eigenen Geld anlegen.',
          'The landlord must keep the money separate from his own money.',
        ],
      ],
      [
        [
          'Als Sofia auszog, hat sie die Wohnung geputzt und kleine Löcher in der Wand geschlossen.',
          'When Sofia moved out, she cleaned the flat and filled small holes in the wall.',
        ],
        ['Bei der Übergabe hat der Vermieter alles kontrolliert.', 'At the handover the landlord checked everything.'],
        ['Zum Glück hatte Sofia beim Einzug Fotos gemacht.', 'Luckily Sofia had taken photos when she moved in.'],
      ],
      [
        [
          'Der Vermieter wollte nämlich Geld für einen Kratzer im Boden.',
          'The landlord wanted money for a scratch in the floor, you see.',
        ],
        ['Auf den Fotos war der Kratzer aber schon zu sehen.', 'But the scratch could already be seen in the photos.'],
        [
          'Nach zwei Monaten hat sie die ganze Kaution zurückbekommen.',
          'After two months she got the whole deposit back.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wie hoch darf die Kaution höchstens sein?',
        options: ['Eine Kaltmiete', 'Drei Kaltmieten', 'Zehn Kaltmieten'],
        answer: 1,
      },
      { q: 'Was hat Sofia geholfen?', options: ['Die Fotos vom Einzug', 'Ein Anwalt', 'Ihre Nachbarin'], answer: 0 },
      { q: 'Wie viel von der Kaution hat sie zurückbekommen?', options: ['Die Hälfte', 'Nichts', 'Alles'], answer: 2 },
    ],
  },
  {
    id: 'r-b1-haftpflicht',
    level: 'B1',
    tags: ['everyday'],
    icon: 'lock',
    title: { de: 'Ein teurer Unfall', en: 'An expensive accident' },
    paragraphs: [
      [
        [
          'Bei einem Besuch bei Freunden hat Tobias aus Versehen einen Laptop vom Tisch gestoßen.',
          'While visiting friends, Tobias accidentally knocked a laptop off the table.',
        ],
        ['Der Bildschirm war sofort kaputt.', 'The screen was broken immediately.'],
        ['Eine Reparatur hätte fast 500 Euro gekostet.', 'A repair would have cost almost 500 euros.'],
      ],
      [
        [
          'Zum Glück hat Tobias eine private Haftpflichtversicherung.',
          'Luckily Tobias has personal liability insurance.',
        ],
        [
          'Sie zahlt, wenn man anderen Menschen aus Versehen einen Schaden macht.',
          'It pays when you accidentally cause damage to other people.',
        ],
        [
          'Sie kostet nur etwa fünf Euro im Monat, aber viele Ausländer kennen sie nicht.',
          'It costs only about five euros a month, but many foreigners do not know it.',
        ],
      ],
      [
        [
          'Tobias hat den Schaden online gemeldet und ein Foto geschickt.',
          'Tobias reported the damage online and sent a photo.',
        ],
        [
          'Nach zwei Wochen hat die Versicherung die Reparatur bezahlt.',
          'After two weeks the insurance paid for the repair.',
        ],
        [
          'Seine Freunde haben ihm danach trotzdem lieber keinen Kaffee mehr neben den Laptop gestellt.',
          'Afterwards his friends still preferred not to put coffee next to the laptop any more.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was ist passiert?',
        options: ['Tobias hat einen Laptop kaputt gemacht', 'Tobias hatte einen Autounfall', 'Tobias wurde bestohlen'],
        answer: 0,
      },
      {
        q: 'Wann zahlt die Haftpflichtversicherung?',
        options: ['Wenn man selbst krank ist', 'Wenn man anderen aus Versehen schadet', 'Wenn man umzieht'],
        answer: 1,
      },
      {
        q: 'Wie viel kostet die Versicherung etwa?',
        options: ['50 Euro im Monat', '500 Euro im Jahr', 'Fünf Euro im Monat'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-phishing',
    level: 'B1',
    tags: ['everyday'],
    icon: 'warning',
    title: { de: 'Fast hereingefallen', en: 'Nearly fell for it' },
    paragraphs: [
      [
        ['Gestern bekam Amira eine SMS von ihrer „Bank“.', 'Yesterday Amira got a text message from her "bank".'],
        [
          'Darin stand, dass ihr Konto gesperrt wird, wenn sie nicht sofort auf einen Link klickt.',
          'It said that her account would be blocked if she did not click a link immediately.',
        ],
        ['Die Nachricht sah sehr echt aus.', 'The message looked very real.'],
      ],
      [
        [
          'Amira wollte schon klicken, aber dann hat sie sich gewundert.',
          'Amira was about to click, but then she wondered.',
        ],
        [
          'Ihre Bank schreibt nie SMS mit Links, und die Adresse war seltsam.',
          'Her bank never sends texts with links, and the address was strange.',
        ],
        [
          'Sie hat die Bank über die Nummer auf ihrer Karte angerufen.',
          'She called the bank using the number on her card.',
        ],
      ],
      [
        ['Die Mitarbeiterin hat bestätigt, dass es Betrug war.', 'The employee confirmed that it was fraud.'],
        ['Solche Nachrichten nennt man Phishing.', 'Messages like that are called phishing.'],
        [
          'Die Regel ist einfach: Niemals Passwörter oder TANs über einen Link eingeben.',
          'The rule is simple: never enter passwords or TANs via a link.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was stand in der SMS?',
        options: ['Das Konto wird gesperrt', 'Amira hat gewonnen', 'Ein Paket kommt'],
        answer: 0,
      },
      {
        q: 'Was hat Amira gemacht?',
        options: ['Sie hat auf den Link geklickt', 'Sie hat die Bank angerufen', 'Sie hat die SMS weitergeleitet'],
        answer: 1,
      },
      {
        q: 'Was soll man niemals tun?',
        options: ['Die Bank anrufen', 'SMS lesen', 'Passwörter über einen Link eingeben'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-integrationskurs',
    level: 'B1',
    tags: ['everyday'],
    icon: 'book',
    title: { de: 'Der Integrationskurs', en: 'The integration course' },
    paragraphs: [
      [
        [
          'Der Integrationskurs besteht aus einem Sprachkurs und einem Orientierungskurs.',
          'The integration course consists of a language course and an orientation course.',
        ],
        [
          'Im Sprachkurs lernt man Deutsch bis zum Niveau B1.',
          'In the language course you learn German up to level B1.',
        ],
        [
          'Im Orientierungskurs geht es um Geschichte, Politik und Werte in Deutschland.',
          'The orientation course is about history, politics and values in Germany.',
        ],
      ],
      [
        ['Ana fand den Orientierungskurs am Anfang langweilig.', 'At first Ana found the orientation course boring.'],
        [
          'Dann haben sie über das Wahlsystem und die Rechte von Mietern gesprochen.',
          'Then they talked about the voting system and tenants’ rights.',
        ],
        ['Das war für ihren Alltag plötzlich sehr nützlich.', 'Suddenly that was very useful for her everyday life.'],
      ],
      [
        [
          'Am Ende gibt es zwei Prüfungen: den Deutsch-Test und den Test „Leben in Deutschland“.',
          'At the end there are two exams: the German test and the "Life in Germany" test.',
        ],
        ['Ana hat beide bestanden.', 'Ana passed both.'],
        [
          'Mit den Zertifikaten kann sie später leichter eine Niederlassungserlaubnis bekommen.',
          'With the certificates she can more easily get a settlement permit later.',
        ],
      ],
    ],
    questions: [
      { q: 'Bis zu welchem Niveau geht der Sprachkurs?', options: ['A2', 'B1', 'C1'], answer: 1 },
      { q: 'Was fand Ana plötzlich nützlich?', options: ['Wahlsystem und Mieterrechte', 'Mathe', 'Sport'], answer: 0 },
      {
        q: 'Wofür helfen die Zertifikate später?',
        options: ['Für einen Führerschein', 'Für ein Studium', 'Für eine Niederlassungserlaubnis'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-carsharing',
    level: 'B1',
    tags: ['everyday'],
    icon: 'repeat',
    title: { de: 'Ein Auto nur für Stunden', en: 'A car just for a few hours' },
    paragraphs: [
      [
        ['Lukas wohnt in Hamburg und hat kein eigenes Auto.', 'Lukas lives in Hamburg and does not have his own car.'],
        ['Für den Alltag reichen ihm Fahrrad und Bahn.', 'Bike and train are enough for him in everyday life.'],
        ['Wenn er doch einmal ein Auto braucht, nutzt er Carsharing.', 'When he does need a car, he uses car sharing.'],
      ],
      [
        [
          'Über eine App sieht er, wo das nächste freie Auto steht.',
          'Through an app he sees where the nearest free car is.',
        ],
        [
          'Er öffnet es mit dem Handy und bezahlt pro Minute oder pro Stunde.',
          'He opens it with his phone and pays per minute or per hour.',
        ],
        [
          'Benzin, Versicherung und Parken sind im Preis enthalten.',
          'Petrol, insurance and parking are included in the price.',
        ],
      ],
      [
        [
          'Letzten Samstag hat er so einen Schrank bei IKEA abgeholt.',
          'Last Saturday he picked up a wardrobe from IKEA that way.',
        ],
        ['Drei Stunden haben ihn 35 Euro gekostet.', 'Three hours cost him 35 euros.'],
        ['Ein eigenes Auto wäre für ihn viel teurer.', 'His own car would be much more expensive for him.'],
      ],
    ],
    questions: [
      { q: 'Wie fährt Lukas im Alltag?', options: ['Mit dem Auto', 'Mit Fahrrad und Bahn', 'Mit dem Taxi'], answer: 1 },
      {
        q: 'Was ist im Preis enthalten?',
        options: ['Benzin, Versicherung und Parken', 'Nur das Auto', 'Ein Fahrer'],
        answer: 0,
      },
      { q: 'Wie viel haben drei Stunden gekostet?', options: ['15 Euro', '100 Euro', '35 Euro'], answer: 2 },
    ],
  },
  {
    id: 'r-b1-elternabend',
    level: 'B1',
    tags: ['everyday'],
    icon: 'community',
    title: { de: 'Der erste Elternabend', en: 'The first parents’ evening' },
    paragraphs: [
      [
        [
          'Kurz nach dem Schulbeginn gibt es in jeder Klasse einen Elternabend.',
          'Shortly after school starts, every class has a parents’ evening.',
        ],
        [
          'Die Lehrerin erzählt, was die Kinder lernen und welche Ausflüge geplant sind.',
          'The teacher explains what the children are learning and which trips are planned.',
        ],
        ['Außerdem wählen die Eltern zwei Elternvertreter.', 'The parents also elect two parent representatives.'],
      ],
      [
        [
          'Nadia war zum ersten Mal dabei und hat nicht alles verstanden.',
          'Nadia was there for the first time and did not understand everything.',
        ],
        [
          'Eine andere Mutter hat ihr in der Pause die wichtigsten Punkte erklärt.',
          'Another mother explained the most important points to her during the break.',
        ],
        [
          'Danach hat sie sich getraut, eine Frage zu den Hausaufgaben zu stellen.',
          'After that she dared to ask a question about the homework.',
        ],
      ],
      [
        [
          'Viele Informationen kommen später in einer Chatgruppe der Eltern.',
          'Much information comes later in a parents’ chat group.',
        ],
        [
          'Dort wird leider auch viel diskutiert, manchmal über ganz kleine Dinge.',
          'Unfortunately there is also a lot of discussion there, sometimes about very small things.',
        ],
        ['Nadia liest mit, schreibt aber selten.', 'Nadia reads along but rarely writes.'],
      ],
    ],
    questions: [
      {
        q: 'Wen wählen die Eltern?',
        options: ['Eine neue Lehrerin', 'Zwei Elternvertreter', 'Den Direktor'],
        answer: 1,
      },
      { q: 'Wer hat Nadia geholfen?', options: ['Eine andere Mutter', 'Die Lehrerin', 'Ihr Sohn'], answer: 0 },
      {
        q: 'Was macht Nadia in der Chatgruppe?',
        options: ['Sie schreibt sehr viel', 'Sie ist nicht dabei', 'Sie liest mit, schreibt aber selten'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-betriebsrat',
    level: 'B1',
    tags: ['work'],
    icon: 'community',
    title: { de: 'Was macht der Betriebsrat?', en: 'What does the works council do?' },
    paragraphs: [
      [
        [
          'In Firmen mit mindestens fünf Mitarbeitern kann ein Betriebsrat gewählt werden.',
          'In companies with at least five employees a works council can be elected.',
        ],
        [
          'Er vertritt die Interessen der Beschäftigten gegenüber der Geschäftsführung.',
          'It represents the interests of the employees towards the management.',
        ],
        [
          'Die Mitglieder sind normale Kollegen, die diese Aufgabe zusätzlich übernehmen.',
          'The members are ordinary colleagues who take on this task in addition.',
        ],
      ],
      [
        [
          'Bei vielen Themen muss der Betriebsrat mitbestimmen, zum Beispiel bei Arbeitszeiten oder Überstunden.',
          'On many issues the works council has a say, for example on working hours or overtime.',
        ],
        [
          'Auch bei einer Kündigung muss er vorher informiert werden.',
          'It must also be informed beforehand of a dismissal.',
        ],
        [
          'Man kann sich vertraulich an ihn wenden, wenn man Probleme hat.',
          'You can turn to it in confidence if you have problems.',
        ],
      ],
      [
        [
          'Als in Mihais Firma Kameras im Lager installiert werden sollten, hat der Betriebsrat Nein gesagt.',
          'When cameras were to be installed in the warehouse at Mihai’s company, the works council said no.',
        ],
        [
          'Nach langen Gesprächen gab es einen Kompromiss: Kameras nur an den Eingängen.',
          'After long talks there was a compromise: cameras only at the entrances.',
        ],
        ['Mihai findet, dass sich die Wahl gelohnt hat.', 'Mihai thinks the election was worth it.'],
      ],
    ],
    questions: [
      { q: 'Wen vertritt der Betriebsrat?', options: ['Die Kunden', 'Die Beschäftigten', 'Den Staat'], answer: 1 },
      {
        q: 'Wann muss der Betriebsrat informiert werden?',
        options: ['Bei einer Kündigung', 'Bei jedem Urlaub', 'Bei jeder E-Mail'],
        answer: 0,
      },
      {
        q: 'Wie wurde das Problem mit den Kameras gelöst?',
        options: ['Überall Kameras', 'Gar keine Kameras', 'Kameras nur an den Eingängen'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-weiterbildung',
    level: 'B1',
    tags: ['work'],
    icon: 'level',
    title: { de: 'Lernen neben dem Job', en: 'Learning alongside the job' },
    paragraphs: [
      [
        [
          'Jelena arbeitet als Buchhalterin und möchte sich weiterbilden.',
          'Jelena works as an accountant and wants to train further.',
        ],
        [
          'Sie macht deshalb einen Abendkurs zur Bilanzbuchhalterin.',
          'So she is doing an evening course to become a certified accountant.',
        ],
        [
          'Der Kurs dauert eineinhalb Jahre, zweimal pro Woche und jeden zweiten Samstag.',
          'The course lasts a year and a half, twice a week and every other Saturday.',
        ],
      ],
      [
        ['Ihr Arbeitgeber bezahlt die Hälfte der Kosten.', 'Her employer pays half of the costs.'],
        [
          'Dafür muss sie nach dem Abschluss noch zwei Jahre in der Firma bleiben.',
          'In return she has to stay at the company for two more years after finishing.',
        ],
        [
          'Für Jelena ist das kein Problem, weil sie gern dort arbeitet.',
          'For Jelena that is not a problem because she likes working there.',
        ],
      ],
      [
        [
          'Manchmal ist sie abends so müde, dass sie im Kurs fast einschläft.',
          'Sometimes she is so tired in the evening that she almost falls asleep in class.',
        ],
        [
          'Aber sie weiß, dass sie mit dem Abschluss deutlich mehr verdienen kann.',
          'But she knows that with the qualification she can earn considerably more.',
        ],
        ['Und das motiviert sie jeden Abend aufs Neue.', 'And that motivates her again every evening.'],
      ],
    ],
    questions: [
      { q: 'Wie lange dauert der Kurs?', options: ['Ein halbes Jahr', 'Eineinhalb Jahre', 'Drei Jahre'], answer: 1 },
      {
        q: 'Was muss Jelena dafür tun?',
        options: ['Noch zwei Jahre in der Firma bleiben', 'Alles selbst bezahlen', 'Den Job wechseln'],
        answer: 0,
      },
      {
        q: 'Was motiviert Jelena?',
        options: ['Ihre Kollegen', 'Der Samstag', 'Die Aussicht auf mehr Gehalt'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-hausarzt',
    level: 'B1',
    tags: ['everyday'],
    icon: 'weak',
    title: { de: 'Einen Hausarzt finden', en: 'Finding a GP' },
    paragraphs: [
      [
        [
          'In Deutschland ist der Hausarzt die erste Adresse, wenn man krank ist.',
          'In Germany the GP is the first port of call when you are ill.',
        ],
        ['Er überweist einen bei Bedarf an einen Facharzt.', 'If necessary, he refers you to a specialist.'],
        [
          'In vielen Städten nehmen Praxen aber kaum neue Patienten auf.',
          'In many cities, however, practices hardly take on new patients.',
        ],
      ],
      [
        [
          'Tariq hat zehn Praxen angerufen und überall eine Absage bekommen.',
          'Tariq called ten practices and got a refusal everywhere.',
        ],
        [
          'Dann hat ihm eine Kollegin einen Tipp gegeben: die Terminservicestelle unter der Nummer 116 117.',
          'Then a colleague gave him a tip: the appointment service on 116 117.',
        ],
        [
          'Dort hat man ihm innerhalb einer Woche einen Termin vermittelt.',
          'There they arranged an appointment for him within a week.',
        ],
      ],
      [
        [
          'Die neue Ärztin nimmt sich viel Zeit und erklärt alles genau.',
          'The new doctor takes a lot of time and explains everything precisely.',
        ],
        [
          'Tariq hat sich gleich für die jährliche Vorsorgeuntersuchung angemeldet.',
          'Tariq signed up straight away for the annual check-up.',
        ],
        ['Die ist ab 35 Jahren alle drei Jahre kostenlos.', 'From age 35 it is free every three years.'],
      ],
    ],
    questions: [
      {
        q: 'Was ist das Problem in vielen Städten?',
        options: ['Praxen nehmen kaum neue Patienten', 'Ärzte sprechen kein Deutsch', 'Praxen sind zu teuer'],
        answer: 0,
      },
      { q: 'Welche Nummer hat geholfen?', options: ['110', '112', '116 117'], answer: 2 },
      {
        q: 'Wie ist die neue Ärztin?',
        options: ['Sie hat keine Zeit', 'Sie nimmt sich viel Zeit', 'Sie spricht nur Englisch'],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-b1-firmenfeier',
    level: 'B1',
    tags: ['work'],
    icon: 'music',
    title: { de: 'Die Weihnachtsfeier', en: 'The Christmas party' },
    paragraphs: [
      [
        [
          'Jedes Jahr im Dezember lädt die Firma alle Mitarbeiter zur Weihnachtsfeier ein.',
          'Every December the company invites all employees to the Christmas party.',
        ],
        ['Dieses Jahr fand sie in einem alten Brauhaus statt.', 'This year it took place in an old brewery pub.'],
        [
          'Es gab ein großes Buffet, eine Band und eine Rede vom Chef.',
          'There was a big buffet, a band and a speech from the boss.',
        ],
      ],
      [
        [
          'Für Diana war es die erste Feier, und sie wusste nicht, was sie anziehen sollte.',
          'For Diana it was the first party, and she did not know what to wear.',
        ],
        [
          'Eine Kollegin hat ihr geraten: „Schick, aber nicht übertrieben.“',
          'A colleague advised her: "Smart, but not over the top."',
        ],
        [
          'Am Abend hat sie mit Leuten aus anderen Abteilungen gesprochen, die sie sonst nie sieht.',
          'In the evening she talked to people from other departments whom she otherwise never sees.',
        ],
      ],
      [
        [
          'Eine ungeschriebene Regel hat sie auch gelernt: Man trinkt nicht zu viel.',
          'She also learned an unwritten rule: you do not drink too much.',
        ],
        [
          'Am Montag erinnern sich nämlich alle daran, wer auf dem Tisch getanzt hat.',
          'On Monday, after all, everyone remembers who danced on the table.',
        ],
        ['Diana hat lieber nur auf der Tanzfläche getanzt.', 'Diana preferred to dance only on the dance floor.'],
      ],
    ],
    questions: [
      { q: 'Wo fand die Feier statt?', options: ['Im Büro', 'In einem Brauhaus', 'Auf einem Schiff'], answer: 1 },
      {
        q: 'Welchen Rat hat Diana bekommen?',
        options: ['Schick, aber nicht übertrieben', 'Ganz bequem', 'Ein Kostüm'],
        answer: 0,
      },
      {
        q: 'Welche ungeschriebene Regel gibt es?',
        options: ['Man muss eine Rede halten', 'Man muss früh gehen', 'Man trinkt nicht zu viel'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-werkstudent',
    level: 'B1',
    tags: ['work'],
    icon: 'code',
    title: { de: 'Studieren und arbeiten', en: 'Studying and working' },
    paragraphs: [
      [
        [
          'Viele Studierende arbeiten neben dem Studium als Werkstudent.',
          'Many students work alongside their studies as a working student.',
        ],
        [
          'Während des Semesters dürfen sie höchstens 20 Stunden pro Woche arbeiten.',
          'During the semester they may work at most 20 hours a week.',
        ],
        ['In den Ferien ist mehr erlaubt.', 'More is allowed during the holidays.'],
      ],
      [
        [
          'Aleksandr studiert Informatik und arbeitet bei einem Softwareunternehmen in Karlsruhe.',
          'Aleksandr studies computer science and works at a software company in Karlsruhe.',
        ],
        ['Er schreibt Tests und hilft bei kleinen Features.', 'He writes tests and helps with small features.'],
        [
          'Seine Arbeitszeiten kann er flexibel an die Vorlesungen anpassen.',
          'He can adjust his working hours flexibly to his lectures.',
        ],
      ],
      [
        [
          'Das Gehalt ist besser als in einem Café, und er sammelt echte Berufserfahrung.',
          'The pay is better than in a café, and he gains real work experience.',
        ],
        [
          'Oft bekommen Werkstudenten nach dem Abschluss ein festes Angebot.',
          'Working students often get a permanent offer after graduating.',
        ],
        ['Aleksandr hofft, dass das bei ihm auch so sein wird.', 'Aleksandr hopes that will be the case for him too.'],
      ],
    ],
    questions: [
      { q: 'Wie viele Stunden darf man im Semester höchstens arbeiten?', options: ['10', '20', '40'], answer: 1 },
      {
        q: 'Was macht Aleksandr bei der Arbeit?',
        options: ['Er schreibt Tests und hilft bei Features', 'Er verkauft Software', 'Er kocht'],
        answer: 0,
      },
      {
        q: 'Was hofft Aleksandr?',
        options: ['Dass er schnell fertig wird', 'Dass er mehr Urlaub bekommt', 'Dass er ein festes Angebot bekommt'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-rundfunkbeitrag',
    level: 'B1',
    tags: ['everyday'],
    icon: 'writing',
    title: { de: 'Ein Brief vom Beitragsservice', en: 'A letter from the licence fee service' },
    paragraphs: [
      [
        [
          'Ein paar Wochen nach seiner Anmeldung bekam Omar einen Brief vom Beitragsservice.',
          'A few weeks after registering, Omar got a letter from the licence fee service.',
        ],
        [
          'Er sollte 18,36 Euro pro Monat für den Rundfunkbeitrag zahlen.',
          'He was supposed to pay 18.36 euros a month for the broadcasting fee.',
        ],
        [
          'Omar war verwirrt, weil er gar keinen Fernseher hat.',
          'Omar was confused because he does not even have a television.',
        ],
      ],
      [
        [
          'Eine Kollegin hat ihm erklärt, dass der Beitrag pro Wohnung gezahlt wird.',
          'A colleague explained to him that the fee is paid per household.',
        ],
        [
          'Es ist egal, ob man fernsieht oder Radio hört.',
          'It does not matter whether you watch TV or listen to the radio.',
        ],
        ['Damit werden die öffentlich-rechtlichen Sender finanziert.', 'It finances the public broadcasters.'],
      ],
      [
        [
          'Weil Omar in einer WG mit zwei anderen wohnt, muss nur einer zahlen.',
          'Because Omar lives in a flat share with two others, only one has to pay.',
        ],
        [
          'Seine Mitbewohnerin war schon angemeldet, also hat er ihre Beitragsnummer angegeben.',
          'His flatmate was already registered, so he gave her contribution number.',
        ],
        ['Jetzt teilen sie sich die Kosten.', 'Now they share the costs.'],
      ],
    ],
    questions: [
      {
        q: 'Warum war Omar verwirrt?',
        options: ['Er hat keinen Fernseher', 'Der Brief war auf Englisch', 'Er wohnt nicht in Deutschland'],
        answer: 0,
      },
      { q: 'Wofür wird der Beitrag gezahlt?', options: ['Pro Person', 'Pro Fernseher', 'Pro Wohnung'], answer: 2 },
      {
        q: 'Wie hat Omar das Problem gelöst?',
        options: ['Er hat nichts gemacht', 'Er hat die Beitragsnummer der Mitbewohnerin angegeben', 'Er ist umgezogen'],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-b1-blue-card',
    level: 'B1',
    tags: ['work'],
    icon: 'rocket',
    title: { de: 'Mit der Blauen Karte nach Deutschland', en: 'To Germany with the Blue Card' },
    paragraphs: [
      [
        [
          'Die Blaue Karte EU ist ein Aufenthaltstitel für Fachkräfte mit Hochschulabschluss.',
          'The EU Blue Card is a residence permit for skilled workers with a university degree.',
        ],
        [
          'Man braucht einen Arbeitsvertrag mit einem Mindestgehalt.',
          'You need an employment contract with a minimum salary.',
        ],
        [
          'Für Mangelberufe wie IT oder Medizin ist die Grenze niedriger.',
          'For shortage occupations such as IT or medicine the threshold is lower.',
        ],
      ],
      [
        [
          'Priya hat ihren Vertrag mit einer Firma in München in Indien unterschrieben.',
          'Priya signed her contract with a company in Munich while in India.',
        ],
        ['Das Visum hat sie bei der deutschen Botschaft beantragt.', 'She applied for the visa at the German embassy.'],
        ['Nach sechs Wochen konnte sie fliegen.', 'After six weeks she was able to fly.'],
      ],
      [
        [
          'Ein großer Vorteil: Mit guten Deutschkenntnissen kann man schon nach 21 Monaten unbefristet bleiben.',
          'A big advantage: with good German you can stay permanently after just 21 months.',
        ],
        ['Ohne B1 dauert es länger.', 'Without B1 it takes longer.'],
        ['Priya lernt deshalb abends fleißig Deutsch.', 'That is why Priya studies German hard in the evenings.'],
      ],
    ],
    questions: [
      {
        q: 'Für wen ist die Blaue Karte?',
        options: ['Für Touristen', 'Für Fachkräfte mit Hochschulabschluss', 'Für Studierende'],
        answer: 1,
      },
      {
        q: 'Wo hat Priya das Visum beantragt?',
        options: ['Bei der deutschen Botschaft', 'In München', 'Online bei der Firma'],
        answer: 0,
      },
      {
        q: 'Warum lernt Priya fleißig Deutsch?',
        options: ['Für ihren Chef', 'Für eine Prüfung an der Uni', 'Um schneller unbefristet bleiben zu können'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b1-mentor',
    level: 'B1',
    tags: ['work'],
    icon: 'chats',
    title: { de: 'Ein Mentor für die Karriere', en: 'A mentor for your career' },
    paragraphs: [
      [
        ['In vielen Firmen gibt es Mentoring-Programme.', 'Many companies have mentoring programmes.'],
        [
          'Erfahrene Mitarbeiter treffen sich regelmäßig mit jüngeren Kollegen.',
          'Experienced employees meet regularly with younger colleagues.',
        ],
        [
          'Sie sprechen über Karriere, schwierige Situationen und Entscheidungen.',
          'They talk about careers, difficult situations and decisions.',
        ],
      ],
      [
        [
          'Mariam trifft ihre Mentorin einmal im Monat zum Mittagessen.',
          'Mariam meets her mentor once a month for lunch.',
        ],
        [
          'Die Mentorin arbeitet in einer anderen Abteilung und ist deshalb neutral.',
          'The mentor works in a different department and is therefore neutral.',
        ],
        [
          'Mit ihr kann Mariam offen über Probleme mit ihrem Teamleiter reden.',
          'Mariam can talk openly with her about problems with her team lead.',
        ],
      ],
      [
        [
          'Als Mariam eine Stelle in einem anderen Team angeboten bekam, war sie unsicher.',
          'When Mariam was offered a position in another team, she was unsure.',
        ],
        [
          'Ihre Mentorin hat ihr keine Antwort gegeben, sondern gute Fragen gestellt.',
          'Her mentor did not give her an answer but asked good questions.',
        ],
        ['Am Ende war die Entscheidung für Mariam klar.', 'In the end the decision was clear to Mariam.'],
      ],
    ],
    questions: [
      {
        q: 'Wie oft trifft Mariam ihre Mentorin?',
        options: ['Jede Woche', 'Einmal im Monat', 'Einmal im Jahr'],
        answer: 1,
      },
      {
        q: 'Warum ist die Mentorin neutral?',
        options: ['Sie arbeitet in einer anderen Abteilung', 'Sie ist neu', 'Sie ist die Chefin'],
        answer: 0,
      },
      {
        q: 'Wie hat die Mentorin geholfen?',
        options: ['Sie hat entschieden', 'Sie hat mit dem Teamleiter gesprochen', 'Sie hat gute Fragen gestellt'],
        answer: 2,
      },
    ],
  },
];
