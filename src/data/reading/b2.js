// B2 reading texts. Format and rules: src/data/reading.js.

export const B2 = [
  {
    id: 'r-b2-homeoffice',
    level: 'B2',
    tags: ['work'],
    icon: 'work',
    title: { de: 'Zwei Tage Büro, drei Tage Küchentisch', en: 'Two days office, three days kitchen table' },
    paragraphs: [
      [
        [
          'Seit der Pandemie arbeitet etwa ein Viertel der Beschäftigten in Deutschland zumindest teilweise von zu Hause.',
          'Since the pandemic about a quarter of employees in Germany have worked from home at least part of the time.',
        ],
        [
          'Viele Firmen haben sich auf ein hybrides Modell geeinigt: zwei Tage im Büro, der Rest im Homeoffice.',
          'Many companies have settled on a hybrid model: two days in the office, the rest working from home.',
        ],
      ],
      [
        [
          'Die Vorteile liegen auf der Hand: Man spart sich das Pendeln und kann sich den Tag freier einteilen.',
          'The advantages are obvious: you save yourself the commute and can organise your day more freely.',
        ],
        [
          'Gleichzeitig verschwimmt aber die Grenze zwischen Arbeit und Freizeit, besonders wenn der Laptop abends noch auf dem Küchentisch steht.',
          'At the same time, though, the line between work and free time blurs, especially when the laptop is still on the kitchen table in the evening.',
        ],
        [
          'Manche Teams vermissen außerdem die spontanen Gespräche an der Kaffeemaschine, bei denen oft die besten Ideen entstehen.',
          'Some teams also miss the spontaneous conversations at the coffee machine, where the best ideas often come up.',
        ],
      ],
      [
        [
          'Einige Unternehmen holen ihre Leute inzwischen wieder häufiger ins Büro zurück, was nicht überall gut ankommt.',
          'Some companies are now bringing their people back to the office more often, which is not well received everywhere.',
        ],
        [
          'Fachkräfte, die die Wahl haben, entscheiden sich nicht selten für den Arbeitgeber mit den flexibleren Regeln.',
          'Skilled workers who have a choice quite often opt for the employer with the more flexible rules.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Welches Modell nutzen viele Firmen?',
        options: ['Nur Homeoffice', 'Ein hybrides Modell', 'Nur Büro'],
        answer: 1,
      },
      {
        q: 'Welchen Nachteil nennt der Text?',
        options: [
          'Die Grenze zwischen Arbeit und Freizeit verschwimmt',
          'Das Internet ist zu langsam',
          'Man verdient weniger',
        ],
        answer: 0,
      },
      {
        q: 'Wie reagieren Fachkräfte, die wählen können?',
        options: ['Sie wollen ins Büro zurück', 'Sie wählen oft flexiblere Arbeitgeber', 'Sie wechseln den Beruf'],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-b2-bahn',
    level: 'B2',
    tags: ['everyday'],
    icon: 'repeat',
    title: { de: 'Heute leider mit Verspätung', en: 'Running late today, unfortunately' },
    paragraphs: [
      [
        [
          '„Wir bitten um Ihr Verständnis“: Diesen Satz kennt jeder, der regelmäßig mit der Bahn fährt.',
          '"We ask for your understanding": everyone who travels by train regularly knows this sentence.',
        ],
        [
          'Im Fernverkehr kommt seit Jahren nur etwa jeder zweite bis dritte Zug pünktlich an.',
          'In long-distance travel, only about one train in two or three has arrived on time for years.',
        ],
        [
          'Als pünktlich gilt ein Zug übrigens auch dann noch, wenn er knapp sechs Minuten zu spät ist.',
          'By the way, a train still counts as on time if it is just under six minutes late.',
        ],
      ],
      [
        [
          'Die Gründe sind vielfältig: ein veraltetes Schienennetz, zu viele Baustellen gleichzeitig und Personalmangel.',
          'The reasons are many: an outdated rail network, too many construction sites at once and a shortage of staff.',
        ],
        [
          'Wer eine Stunde oder mehr verspätet ankommt, bekommt einen Teil des Fahrpreises zurück, muss das aber selbst beantragen.',
          'Anyone who arrives an hour or more late gets part of the fare back, but has to apply for it themselves.',
        ],
      ],
      [
        [
          'Viele Pendler haben sich mit der Situation arrangiert und planen grundsätzlich einen früheren Zug ein.',
          'Many commuters have come to terms with the situation and always plan for an earlier train.',
        ],
        [
          'Andere nehmen es mit Humor und sammeln die originellsten Durchsagen in sozialen Netzwerken.',
          'Others take it with humour and collect the most original announcements on social media.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Ab wann gilt ein Zug als unpünktlich?',
        options: ['Ab einer Minute', 'Ab sechs Minuten', 'Ab einer Stunde'],
        answer: 1,
      },
      {
        q: 'Was muss man tun, um Geld zurückzubekommen?',
        options: ['Nichts, es passiert automatisch', 'Es selbst beantragen', 'Den Schaffner fragen'],
        answer: 1,
      },
      {
        q: 'Welcher Grund für Verspätungen wird NICHT genannt?',
        options: ['Personalmangel', 'Baustellen', 'Schlechtes Wetter'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-code-review',
    level: 'B2',
    tags: ['work'],
    icon: 'code',
    title: { de: 'Kritik, die hilft', en: 'Feedback that helps' },
    paragraphs: [
      [
        [
          'In vielen Entwicklerteams wird kein Code zusammengeführt, bevor ihn jemand anderes geprüft hat.',
          'In many developer teams no code is merged before someone else has reviewed it.',
        ],
        [
          'Solche Code-Reviews sollen Fehler früh aufdecken, aber sie sorgen auch regelmäßig für schlechte Stimmung.',
          'Such code reviews are meant to uncover bugs early, but they also regularly cause bad feelings.',
        ],
      ],
      [
        [
          'Das liegt selten am Inhalt, sondern meistens am Ton.',
          'That is rarely down to the content, but mostly down to the tone.',
        ],
        [
          'Ein Kommentar wie „Das ist falsch“ wirkt deutlich härter als „Was hältst du davon, das hier in eine eigene Funktion auszulagern?“.',
          'A comment like "This is wrong" comes across much harsher than "What do you think about moving this into its own function?".',
        ],
        [
          'Gerade im Deutschen, wo man gern direkt formuliert, lohnt es sich, Vorschläge als Fragen zu stellen.',
          'Especially in German, where people like to phrase things directly, it pays to put suggestions as questions.',
        ],
      ],
      [
        [
          'Manche Teams kennzeichnen außerdem, wie wichtig ein Kommentar ist, etwa mit „Kleinigkeit“ oder „muss vor dem Merge geändert werden“.',
          'Some teams also mark how important a comment is, for example with "nitpick" or "must be changed before the merge".',
        ],
        [
          'So weiß jeder sofort, worüber man diskutieren kann und worüber nicht.',
          'That way everyone knows immediately what is up for discussion and what is not.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Warum gibt es bei Code-Reviews oft schlechte Stimmung?',
        options: ['Wegen des Tons', 'Weil sie zu lange dauern', 'Weil niemand sie liest'],
        answer: 0,
      },
      {
        q: 'Was empfiehlt der Text?',
        options: ['Möglichst kurze Kommentare', 'Vorschläge als Fragen formulieren', 'Nur mündlich Feedback geben'],
        answer: 1,
      },
      {
        q: 'Wozu kennzeichnen manche Teams ihre Kommentare?',
        options: ['Damit klar ist, wie wichtig sie sind', 'Damit der Chef sie findet', 'Für die Statistik'],
        answer: 0,
      },
    ],
  },
  {
    id: 'r-b2-muelltrennung',
    level: 'B2',
    tags: ['everyday'],
    icon: 'leaf',
    title: { de: 'Fünf Tonnen und ein Nachbar', en: 'Five bins and a neighbour' },
    paragraphs: [
      [
        [
          'Als Diego nach Freiburg zog, war er auf vieles vorbereitet, aber nicht auf fünf verschiedene Mülltonnen.',
          'When Diego moved to Freiburg he was prepared for a lot, but not for five different bins.',
        ],
        [
          'Papier, Verpackungen, Bioabfall, Restmüll und Glas, wobei man das Glas auch noch nach Farben sortiert zum Container bringt.',
          'Paper, packaging, organic waste, general waste and glass, and the glass is even taken to the container sorted by colour.',
        ],
      ],
      [
        [
          'In der ersten Woche fand er einen Zettel an seiner Tür: Jemand hatte einen Joghurtbecher in der Papiertonne entdeckt.',
          'In the first week he found a note on his door: someone had found a yoghurt pot in the paper bin.',
        ],
        [
          'Diego ärgerte sich zuerst, klingelte dann aber beim Nachbarn und bat ihn, ihm das System zu erklären.',
          "Diego was annoyed at first, but then rang the neighbour's bell and asked him to explain the system.",
        ],
      ],
      [
        [
          'Aus der Erklärung wurde ein zweistündiges Gespräch bei Kaffee und Kuchen.',
          'The explanation turned into a two-hour conversation over coffee and cake.',
        ],
        [
          'Heute gießt Herr Becker Diegos Pflanzen, wenn er im Urlaub ist, und Diego repariert dafür Herrn Beckers WLAN.',
          "Today Mr Becker waters Diego's plants when he is on holiday, and in return Diego fixes Mr Becker's Wi-Fi.",
        ],
      ],
    ],
    questions: [
      {
        q: 'Warum bekam Diego einen Zettel?',
        options: ['Er war zu laut', 'Er hatte Müll falsch getrennt', 'Er hatte die Miete nicht bezahlt'],
        answer: 1,
      },
      {
        q: 'Wie reagierte Diego?',
        options: [
          'Er ignorierte den Zettel',
          'Er beschwerte sich beim Vermieter',
          'Er bat den Nachbarn um eine Erklärung',
        ],
        answer: 2,
      },
      {
        q: 'Wie ist das Verhältnis der beiden heute?',
        options: ['Sie helfen sich gegenseitig', 'Sie reden nicht mehr miteinander', 'Sie streiten oft'],
        answer: 0,
      },
    ],
  },
  {
    id: 'r-b2-arbeitszeugnis',
    level: 'B2',
    tags: ['work'],
    icon: 'writing',
    title: { de: 'Die Geheimsprache im Arbeitszeugnis', en: 'The secret language of job references' },
    paragraphs: [
      [
        [
          'Wer in Deutschland eine Stelle verlässt, hat Anspruch auf ein schriftliches Arbeitszeugnis.',
          'Anyone who leaves a job in Germany is entitled to a written reference.',
        ],
        [
          'Das Zeugnis muss wohlwollend formuliert sein, darf aber nicht lügen.',
          'The reference must be worded favourably but must not lie.',
        ],
        [
          'Aus diesem Widerspruch ist eine eigene Geheimsprache entstanden.',
          'A secret language of its own has emerged from this contradiction.',
        ],
      ],
      [
        [
          '„Er hat sich stets bemüht“ klingt freundlich, bedeutet aber, dass jemand wenig erreicht hat.',
          '"He always made an effort" sounds friendly, but means that someone achieved little.',
        ],
        [
          'Die beste Note versteckt sich in der Formulierung „stets zu unserer vollsten Zufriedenheit“.',
          'The top grade is hidden in the phrase "always to our fullest satisfaction".',
        ],
        [
          'Fehlt das Wort „stets“, ist das schon eine Stufe schlechter.',
          'If the word "always" is missing, that is already one grade worse.',
        ],
      ],
      [
        [
          'Personaler lesen Zeugnisse deshalb sehr genau, oft auch zwischen den Zeilen.',
          'HR staff therefore read references very carefully, often between the lines too.',
        ],
        [
          'Wer sein Zeugnis nicht versteht, kann es von einem Fachanwalt prüfen lassen.',
          'Anyone who does not understand their reference can have a specialist lawyer check it.',
        ],
        [
          'Inzwischen gibt es dafür sogar Online-Dienste, die einzelne Sätze übersetzen.',
          'There are now even online services that translate individual sentences.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was muss ein Arbeitszeugnis sein?',
        options: ['Kurz und neutral', 'Wohlwollend, aber wahr', 'Streng und ehrlich'],
        answer: 1,
      },
      {
        q: 'Was bedeutet „Er hat sich stets bemüht“?',
        options: ['Er hat wenig erreicht', 'Er war der Beste', 'Er war oft krank'],
        answer: 0,
      },
      {
        q: 'Was passiert, wenn das Wort „stets“ fehlt?',
        options: ['Nichts', 'Die Note ist besser', 'Die Note ist eine Stufe schlechter'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-gleitzeit',
    level: 'B2',
    tags: ['work'],
    icon: 'today',
    title: { de: 'Kommen, wann man will?', en: 'Come in whenever you want?' },
    paragraphs: [
      [
        [
          'Gleitzeit bedeutet, dass Beschäftigte Beginn und Ende ihres Arbeitstages selbst bestimmen.',
          'Flexitime means that employees decide when their working day starts and ends.',
        ],
        [
          'Meistens gibt es allerdings eine Kernzeit, etwa von zehn bis drei, in der alle erreichbar sein müssen.',
          'There is usually a core time, however, say from ten to three, when everyone has to be reachable.',
        ],
        ['Die Stunden werden auf einem Zeitkonto erfasst.', 'The hours are recorded in a time account.'],
      ],
      [
        [
          'Für Eltern ist das ein großer Vorteil, weil sie ihre Kinder in die Kita bringen können, ohne zu spät zu kommen.',
          'For parents it is a big advantage because they can take their children to nursery without being late.',
        ],
        [
          'Frühaufsteher fangen um sieben an und sind um vier wieder zu Hause.',
          'Early risers start at seven and are home again at four.',
        ],
        [
          'Wer Plusstunden sammelt, kann sie später als freie Tage nehmen.',
          'Anyone who builds up extra hours can take them later as days off.',
        ],
      ],
      [
        [
          'Kritiker warnen jedoch, dass manche Mitarbeiter mehr arbeiten, als ihnen guttut.',
          'Critics warn, however, that some employees work more than is good for them.',
        ],
        [
          'Wenn niemand auf die Uhr schaut, wird aus Flexibilität schnell ständige Verfügbarkeit.',
          'When nobody watches the clock, flexibility quickly turns into constant availability.',
        ],
        [
          'Gute Teams sprechen deshalb offen darüber, wann jemand wirklich Feierabend hat.',
          'Good teams therefore talk openly about when someone is really off work.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was ist die Kernzeit?',
        options: ['Die Mittagspause', 'Die Zeit, in der alle erreichbar sein müssen', 'Die Zeit für Überstunden'],
        answer: 1,
      },
      {
        q: 'Was kann man mit Plusstunden machen?',
        options: ['Sie als freie Tage nehmen', 'Sie verkaufen', 'Nichts'],
        answer: 0,
      },
      {
        q: 'Wovor warnen Kritiker?',
        options: ['Vor zu wenig Arbeit', 'Vor zu vielen Meetings', 'Vor ständiger Verfügbarkeit'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-retrospektive',
    level: 'B2',
    tags: ['work'],
    icon: 'repeat',
    title: { de: 'Was lief gut, was nicht?', en: 'What went well, what did not?' },
    paragraphs: [
      [
        [
          'Am Ende jedes Sprints trifft sich Niklas’ Team zur Retrospektive.',
          'At the end of every sprint Niklas’ team meets for a retrospective.',
        ],
        [
          'Eine Stunde lang geht es nicht um Aufgaben, sondern um die Zusammenarbeit.',
          'For an hour it is not about tasks but about how they work together.',
        ],
        [
          'Jeder schreibt anonym auf, was gut lief, was schlecht lief und was man ändern sollte.',
          'Everyone writes down anonymously what went well, what went badly and what should change.',
        ],
      ],
      [
        [
          'Diesmal tauchte ein Punkt auf fast jeder Karte auf: zu viele spontane Anfragen per Chat.',
          'This time one point appeared on almost every card: too many spontaneous requests via chat.',
        ],
        [
          'Ständig wurden Entwickler aus ihrer Arbeit gerissen, um kurz etwas zu klären.',
          'Developers were constantly pulled out of their work to quickly clear something up.',
        ],
        [
          'Am Ende des Sprints fehlte dann die Zeit für die eigentlichen Aufgaben.',
          'At the end of the sprint there was then no time for the actual tasks.',
        ],
      ],
      [
        [
          'Das Team hat beschlossen, zwei feste Fokuszeiten pro Tag einzuführen.',
          'The team decided to introduce two fixed focus periods a day.',
        ],
        [
          'In dieser Zeit werden Benachrichtigungen ausgeschaltet, außer bei echten Notfällen.',
          'During this time notifications are switched off, except for real emergencies.',
        ],
        [
          'In der nächsten Retro wollen sie prüfen, ob die Idee funktioniert hat.',
          'In the next retro they want to check whether the idea worked.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Worum geht es in der Retrospektive?',
        options: ['Um die Zusammenarbeit', 'Um das Gehalt', 'Um neue Kunden'],
        answer: 0,
      },
      {
        q: 'Welches Problem stand auf fast jeder Karte?',
        options: ['Zu wenig Kaffee', 'Zu viele spontane Anfragen per Chat', 'Zu lange Meetings'],
        answer: 1,
      },
      {
        q: 'Was hat das Team beschlossen?',
        options: ['Mehr Meetings', 'Den Chat abzuschaffen', 'Feste Fokuszeiten einzuführen'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-kamera',
    level: 'B2',
    tags: ['work'],
    icon: 'camera',
    title: { de: 'Kamera an oder aus?', en: 'Camera on or off?' },
    paragraphs: [
      [
        [
          'Seit Videokonferenzen zum Arbeitsalltag gehören, streiten viele Teams über eine scheinbar banale Frage.',
          'Since video calls became part of everyday work, many teams argue about a seemingly trivial question.',
        ],
        ['Soll man die Kamera einschalten oder nicht?', 'Should you turn the camera on or not?'],
        ['Manche Chefs empfinden eine schwarze Kachel als unhöflich.', 'Some bosses consider a black tile rude.'],
      ],
      [
        [
          'Studien zeigen jedoch, dass ständige Videocalls ermüdender sind als Gespräche im Raum.',
          'Studies show, however, that constant video calls are more tiring than conversations in a room.',
        ],
        [
          'Man sieht sich selbst die ganze Zeit und achtet unbewusst auf jede Kleinigkeit.',
          'You see yourself all the time and unconsciously pay attention to every detail.',
        ],
        ['Außerdem möchte nicht jeder seine Wohnung zeigen.', 'Besides, not everyone wants to show their home.'],
      ],
      [
        [
          'Viele Teams haben deshalb eine einfache Regel eingeführt.',
          'Many teams have therefore introduced a simple rule.',
        ],
        [
          'Bei kleinen Runden und wichtigen Gesprächen bleibt die Kamera an, bei großen Info-Meetings darf sie aus sein.',
          'In small groups and important conversations the camera stays on; in large information meetings it may be off.',
        ],
        [
          'Hauptsache, man spricht offen darüber, statt sich heimlich zu ärgern.',
          'The main thing is to talk openly about it instead of being secretly annoyed.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wie empfinden manche Chefs eine schwarze Kachel?',
        options: ['Als unhöflich', 'Als normal', 'Als lustig'],
        answer: 0,
      },
      {
        q: 'Warum sind Videocalls ermüdend?',
        options: ['Das Internet ist langsam', 'Man sieht sich selbst die ganze Zeit', 'Sie dauern immer drei Stunden'],
        answer: 1,
      },
      {
        q: 'Wann darf die Kamera aus sein?',
        options: ['Nie', 'Bei wichtigen Gesprächen', 'Bei großen Info-Meetings'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-email-flut',
    level: 'B2',
    tags: ['work'],
    icon: 'writing',
    title: { de: 'Hundert E-Mails am Tag', en: 'A hundred emails a day' },
    paragraphs: [
      [
        [
          'Als Teamleiterin bekam Claudia jeden Tag über hundert E-Mails.',
          'As a team lead Claudia got over a hundred emails every day.',
        ],
        [
          'Die meisten davon waren Kopien, in denen sie nur „zur Info“ stand.',
          'Most of them were copies in which she was only included "for information".',
        ],
        [
          'Abends hatte sie das Gefühl, nur reagiert und nichts geschafft zu haben.',
          'In the evenings she felt she had only reacted and achieved nothing.',
        ],
      ],
      [
        [
          'Sie hat ihr Team gebeten, sie nur noch in CC zu setzen, wenn sie wirklich etwas tun muss.',
          'She asked her team only to copy her in when she really has to do something.',
        ],
        [
          'Außerdem liest sie ihre Mails nur noch dreimal am Tag zu festen Zeiten.',
          'She also only reads her mails three times a day at fixed times.',
        ],
        ['Dringende Dinge sollen per Telefon kommen.', 'Urgent things are supposed to come by phone.'],
      ],
      [
        [
          'Nach einem Monat ist die Zahl der E-Mails um die Hälfte gesunken.',
          'After a month the number of emails dropped by half.',
        ],
        [
          'Niemand hat sich beschwert, dass sie zu langsam antwortet.',
          'Nobody complained that she replies too slowly.',
        ],
        [
          'Im Gegenteil: Einige Kollegen haben ihr System inzwischen übernommen.',
          'On the contrary: some colleagues have now adopted her system.',
        ],
      ],
    ],
    questions: [
      { q: 'Was waren die meisten E-Mails?', options: ['Werbung', 'Kopien „zur Info“', 'Beschwerden'], answer: 1 },
      {
        q: 'Wie oft liest Claudia jetzt ihre Mails?',
        options: ['Dreimal am Tag', 'Ständig', 'Einmal pro Woche'],
        answer: 0,
      },
      {
        q: 'Wie haben die Kollegen reagiert?',
        options: ['Sie haben sich beschwert', 'Sie haben gekündigt', 'Einige haben das System übernommen'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-feierabend',
    level: 'B2',
    tags: ['work', 'everyday'],
    icon: 'sun',
    title: { de: 'Heilig: der Feierabend', en: 'Sacred: the end of the working day' },
    paragraphs: [
      [
        [
          'Für viele Deutsche ist der Feierabend eine klare Grenze.',
          'For many Germans the end of the working day is a clear boundary.',
        ],
        [
          'Wer um fünf geht, hat nicht weniger Lust auf die Arbeit, sondern ein Privatleben.',
          'Someone who leaves at five is not less keen on the work, but has a private life.',
        ],
        [
          'E-Mails am Abend zu beantworten, gilt in manchen Firmen sogar als schlechtes Zeichen für die Organisation.',
          'Answering emails in the evening is even seen in some companies as a bad sign for organisation.',
        ],
      ],
      [
        ['Für Wei war das am Anfang ungewohnt.', 'At first this was unusual for Wei.'],
        [
          'In seinem früheren Job in Shanghai war es normal, bis spät abends im Büro zu bleiben.',
          'In his previous job in Shanghai it was normal to stay in the office until late in the evening.',
        ],
        [
          'Als er in Deutschland um acht noch am Schreibtisch saß, fragte ihn sein Chef besorgt, ob alles in Ordnung sei.',
          'When he was still at his desk at eight in Germany, his boss asked him with concern whether everything was all right.',
        ],
      ],
      [
        [
          'Heute genießt Wei seine Abende im Sportverein oder mit Freunden.',
          'Today Wei enjoys his evenings at the sports club or with friends.',
        ],
        [
          'Er sagt, dass er dadurch am nächsten Morgen konzentrierter arbeitet.',
          'He says that as a result he works with more focus the next morning.',
        ],
        [
          'Nur am Ende des Quartals wird es manchmal doch später.',
          'Only at the end of the quarter does it sometimes get later after all.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was ist der Feierabend für viele Deutsche?',
        options: ['Eine klare Grenze', 'Unwichtig', 'Zeit für E-Mails'],
        answer: 0,
      },
      {
        q: 'Wie hat Weis Chef reagiert?',
        options: ['Er hat ihn gelobt', 'Er hat ihm mehr Arbeit gegeben', 'Er war besorgt'],
        answer: 2,
      },
      {
        q: 'Was sagt Wei über seine Abende?',
        options: ['Sie sind langweilig', 'Er arbeitet danach konzentrierter', 'Er vermisst das Büro'],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-b2-direktheit',
    level: 'B2',
    tags: ['work', 'everyday'],
    icon: 'chats',
    title: { de: 'Ist das unhöflich oder nur direkt?', en: 'Is that rude or just direct?' },
    paragraphs: [
      [
        [
          '„Das funktioniert so nicht.“ Mit diesem Satz reagierte ein Kollege auf Elifs Vorschlag.',
          '"That won’t work like that." With this sentence a colleague reacted to Elif’s suggestion.',
        ],
        [
          'Elif war gekränkt und sagte den Rest des Meetings kein Wort mehr.',
          'Elif was hurt and did not say another word for the rest of the meeting.',
        ],
        [
          'Für den Kollegen war die Sache dagegen nach zwei Minuten erledigt.',
          'For the colleague, on the other hand, the matter was done after two minutes.',
        ],
      ],
      [
        ['Deutsche gelten im Beruf als sehr direkt.', 'Germans are considered very direct at work.'],
        [
          'Kritik bezieht sich dabei meistens auf die Sache und nicht auf die Person.',
          'Criticism usually refers to the matter and not the person.',
        ],
        [
          'Wer aus einer Kultur kommt, in der man Kritik vorsichtig verpackt, versteht das leicht falsch.',
          'Someone who comes from a culture where criticism is wrapped carefully can easily misunderstand that.',
        ],
      ],
      [
        ['Nach dem Meeting sprach Elif ihren Kollegen an.', 'After the meeting Elif approached her colleague.'],
        [
          'Er war überrascht und entschuldigte sich, weil er sie nicht verletzen wollte.',
          'He was surprised and apologised because he had not wanted to hurt her.',
        ],
        [
          'Inzwischen sagt er öfter „Ich sehe da ein Problem“ statt „Das funktioniert nicht“.',
          'Now he more often says "I see a problem there" instead of "That doesn’t work".',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wie reagierte Elif im Meeting?',
        options: ['Sie hat laut widersprochen', 'Sie hat nichts mehr gesagt', 'Sie ist gegangen'],
        answer: 1,
      },
      {
        q: 'Worauf bezieht sich Kritik in Deutschland meistens?',
        options: ['Auf die Sache', 'Auf die Person', 'Auf die Herkunft'],
        answer: 0,
      },
      {
        q: 'Wie hat der Kollege reagiert, als Elif ihn ansprach?',
        options: ['Er war wütend', 'Er hat es ignoriert', 'Er hat sich entschuldigt'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-teilzeit',
    level: 'B2',
    tags: ['work'],
    icon: 'today',
    title: { de: 'Vier Tage reichen', en: 'Four days are enough' },
    paragraphs: [
      [
        [
          'Nach der Geburt ihrer Tochter wollte Anja nicht mehr vierzig Stunden arbeiten.',
          'After her daughter was born, Anja no longer wanted to work forty hours.',
        ],
        [
          'In Firmen mit mehr als fünfzehn Mitarbeitern haben Beschäftigte grundsätzlich ein Recht auf Teilzeit.',
          'In companies with more than fifteen employees, staff generally have a right to part-time work.',
        ],
        [
          'Der Arbeitgeber kann nur aus wichtigen betrieblichen Gründen ablehnen.',
          'The employer can only refuse for important operational reasons.',
        ],
      ],
      [
        ['Anja arbeitet jetzt 32 Stunden an vier Tagen.', 'Anja now works 32 hours over four days.'],
        [
          'Ihr Gehalt ist entsprechend gesunken, aber der freie Freitag gehört ganz der Familie.',
          'Her salary has gone down accordingly, but the free Friday belongs entirely to the family.',
        ],
        [
          'Seit einigen Jahren gibt es außerdem die Brückenteilzeit, mit der man später wieder auf Vollzeit zurückkehren kann.',
          'For some years there has also been bridge part-time, which lets you return to full-time later.',
        ],
      ],
      [
        [
          'Ein Nachteil zeigt sich erst viel später: Wer lange Teilzeit arbeitet, bekommt weniger Rente.',
          'One disadvantage only shows much later: anyone who works part-time for a long time gets a smaller pension.',
        ],
        [
          'Deshalb rechnen Beratungsstellen oft genau mit den Betroffenen nach.',
          'That is why advice centres often do the maths carefully with the people concerned.',
        ],
        [
          'Anja hat sich bewusst für diesen Weg entschieden und bereut es nicht.',
          'Anja deliberately chose this path and does not regret it.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wann kann der Arbeitgeber Teilzeit ablehnen?',
        options: ['Immer', 'Nur aus wichtigen betrieblichen Gründen', 'Nie'],
        answer: 1,
      },
      {
        q: 'Was ermöglicht die Brückenteilzeit?',
        options: ['Später zurück in Vollzeit', 'Mehr Urlaub', 'Ein höheres Gehalt'],
        answer: 0,
      },
      {
        q: 'Welcher Nachteil zeigt sich später?',
        options: ['Weniger Urlaub', 'Keine Karriere', 'Weniger Rente'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-sabbatical',
    level: 'B2',
    tags: ['work'],
    icon: 'boat',
    title: { de: 'Ein halbes Jahr Pause', en: 'Half a year off' },
    paragraphs: [
      [
        [
          'Nach zehn Jahren im selben Unternehmen brauchte Thomas eine Auszeit.',
          'After ten years at the same company Thomas needed a break.',
        ],
        [
          'Kündigen wollte er aber nicht, weil ihm die Arbeit eigentlich gefällt.',
          'He did not want to quit, though, because he actually likes the work.',
        ],
        ['Die Lösung war ein Sabbatical von sechs Monaten.', 'The solution was a six-month sabbatical.'],
      ],
      [
        [
          'Finanziert hat er es über ein Modell, das seine Firma anbietet.',
          'He financed it through a scheme his company offers.',
        ],
        [
          'Zwei Jahre lang bekam er nur 80 Prozent seines Gehalts, obwohl er voll gearbeitet hat.',
          'For two years he received only 80 percent of his salary although he worked full-time.',
        ],
        [
          'Während der Auszeit wurde das angesparte Geld dann weiter ausgezahlt.',
          'During the break the money saved up was then paid out.',
        ],
      ],
      [
        [
          'Thomas ist mit dem Fahrrad von München bis nach Lissabon gefahren.',
          'Thomas cycled from Munich all the way to Lisbon.',
        ],
        [
          'Unterwegs hat er Spanisch gelernt und viel über seine Prioritäten nachgedacht.',
          'On the way he learned Spanish and thought a lot about his priorities.',
        ],
        [
          'Zurück im Büro arbeitet er seitdem nur noch vier Tage pro Woche.',
          'Back in the office he has worked only four days a week since then.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Warum wollte Thomas nicht kündigen?',
        options: ['Ihm gefällt die Arbeit eigentlich', 'Er brauchte das Geld', 'Sein Chef hat es verboten'],
        answer: 0,
      },
      {
        q: 'Wie hat er das Sabbatical finanziert?',
        options: ['Mit einem Kredit', 'Durch zwei Jahre mit 80 Prozent Gehalt', 'Durch einen Lottogewinn'],
        answer: 1,
      },
      {
        q: 'Was hat sich nach dem Sabbatical geändert?',
        options: ['Er hat gekündigt', 'Er ist nach Lissabon gezogen', 'Er arbeitet nur noch vier Tage'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-pendeln',
    level: 'B2',
    tags: ['work', 'everyday'],
    icon: 'repeat',
    title: { de: 'Zwei Stunden täglich unterwegs', en: 'Two hours on the road every day' },
    paragraphs: [
      [
        [
          'Weil die Mieten in Frankfurt so hoch sind, wohnt Katrin in einem Dorf im Vogelsberg.',
          'Because rents in Frankfurt are so high, Katrin lives in a village in the Vogelsberg hills.',
        ],
        [
          'Jeden Tag pendelt sie eine Stunde hin und eine Stunde zurück.',
          'Every day she commutes one hour there and one hour back.',
        ],
        [
          'Für das Geld, das sie bei der Miete spart, hat sie ein Haus mit Garten.',
          'For the money she saves on rent, she has a house with a garden.',
        ],
      ],
      [
        ['Im Zug arbeitet sie ihre E-Mails ab oder liest.', 'On the train she works through her emails or reads.'],
        [
          'Wenn der Zug ausfällt, was im Winter nicht selten passiert, wird es allerdings anstrengend.',
          'When the train is cancelled, which is not unusual in winter, it does get exhausting.',
        ],
        [
          'Dann steht sie manchmal eine halbe Stunde frierend am Bahnsteig.',
          'Then she sometimes stands freezing on the platform for half an hour.',
        ],
      ],
      [
        [
          'Seit sie zwei Tage pro Woche im Homeoffice arbeitet, hat sich ihr Leben verbessert.',
          'Since she started working from home two days a week, her life has improved.',
        ],
        [
          'Die Fahrtkosten kann sie außerdem von der Steuer absetzen.',
          'She can also deduct the travel costs from her taxes.',
        ],
        ['Zurück in die Stadt will sie trotzdem nicht.', 'Still, she does not want to move back to the city.'],
      ],
    ],
    questions: [
      {
        q: 'Warum wohnt Katrin auf dem Dorf?',
        options: ['Die Mieten in Frankfurt sind hoch', 'Ihre Familie wohnt dort', 'Sie mag keine Städte'],
        answer: 0,
      },
      {
        q: 'Was ist im Winter oft ein Problem?',
        options: ['Zu viele Leute', 'Zugausfälle', 'Zu hohe Preise'],
        answer: 1,
      },
      {
        q: 'Was hat Katrins Leben verbessert?',
        options: ['Ein neues Auto', 'Ein Umzug', 'Zwei Tage Homeoffice'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-schrebergarten',
    level: 'B2',
    tags: ['everyday'],
    icon: 'leaf',
    title: { de: 'Regeln im Kleingarten', en: 'Rules in the allotment' },
    paragraphs: [
      [
        [
          'Der Schrebergarten galt lange als Hobby für Rentner.',
          'For a long time the allotment garden was seen as a hobby for pensioners.',
        ],
        [
          'Inzwischen stehen in vielen Großstädten junge Familien jahrelang auf der Warteliste.',
          'Meanwhile in many big cities young families are on the waiting list for years.',
        ],
        ['Die Pacht ist günstig, aber die Regeln sind streng.', 'The rent is cheap, but the rules are strict.'],
      ],
      [
        [
          'Mindestens ein Drittel der Fläche muss für Obst und Gemüse genutzt werden.',
          'At least a third of the area must be used for fruit and vegetables.',
        ],
        [
          'Die Hecke darf eine bestimmte Höhe nicht überschreiten, und übernachten ist meist verboten.',
          'The hedge must not exceed a certain height, and staying overnight is usually forbidden.',
        ],
        [
          'Außerdem gibt es Pflichtstunden für gemeinsame Arbeiten im Verein.',
          'There are also compulsory hours for joint work in the association.',
        ],
      ],
      [
        ['Lea und Malik fanden die Regeln zuerst übertrieben.', 'Lea and Malik found the rules over the top at first.'],
        [
          'Mittlerweile ernten sie im Sommer mehr Tomaten, als sie essen können.',
          'By now they harvest more tomatoes in summer than they can eat.',
        ],
        [
          'Und von den älteren Nachbarn haben sie mehr über Gärtnern gelernt als aus jedem Buch.',
          'And they have learned more about gardening from the older neighbours than from any book.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wer steht heute oft auf der Warteliste?',
        options: ['Junge Familien', 'Nur Rentner', 'Studenten'],
        answer: 0,
      },
      {
        q: 'Wofür muss ein Drittel der Fläche genutzt werden?',
        options: ['Für Rasen', 'Für Obst und Gemüse', 'Für ein Haus'],
        answer: 1,
      },
      {
        q: 'Von wem haben Lea und Malik viel gelernt?',
        options: ['Aus Büchern', 'Aus Videos', 'Von älteren Nachbarn'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-bargeld',
    level: 'B2',
    tags: ['everyday'],
    icon: 'lock',
    title: { de: 'Nur Bares ist Wahres?', en: 'Only cash counts?' },
    paragraphs: [
      [
        [
          'Kaum ein Land in Europa hängt so am Bargeld wie Deutschland.',
          'Hardly any country in Europe is as attached to cash as Germany.',
        ],
        [
          'Noch immer wird ein großer Teil der Einkäufe an der Kasse mit Scheinen und Münzen bezahlt.',
          'A large share of purchases at the till is still paid with notes and coins.',
        ],
        [
          'In manchen Bäckereien und Kneipen steht sogar ein Schild: „Nur Barzahlung“.',
          'Some bakeries and pubs even have a sign: "Cash only".',
        ],
      ],
      [
        ['Viele Menschen schätzen Bargeld, weil es anonym ist.', 'Many people value cash because it is anonymous.'],
        [
          'Andere sagen, dass sie damit ihre Ausgaben besser im Blick behalten.',
          'Others say that it helps them keep a better eye on their spending.',
        ],
        [
          'Für Besucher aus Ländern, in denen man sogar Kaugummi mit dem Handy bezahlt, ist das oft erstaunlich.',
          'For visitors from countries where people even pay for chewing gum with their phone, this is often astonishing.',
        ],
      ],
      [
        [
          'Seit der Pandemie zahlen allerdings deutlich mehr Menschen mit Karte.',
          'Since the pandemic, however, significantly more people pay by card.',
        ],
        ['Jüngere nutzen immer häufiger ihr Smartphone.', 'Younger people increasingly use their smartphones.'],
        [
          'Ein bisschen Bargeld im Portemonnaie zu haben, ist aber nach wie vor eine gute Idee.',
          'Having a bit of cash in your wallet is still a good idea, though.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was steht in manchen Bäckereien?',
        options: ['„Nur Kartenzahlung“', '„Nur Barzahlung“', '„Heute geschlossen“'],
        answer: 1,
      },
      {
        q: 'Warum schätzen viele Menschen Bargeld?',
        options: ['Weil es anonym ist', 'Weil es schöner aussieht', 'Weil es schwerer ist'],
        answer: 0,
      },
      {
        q: 'Was hat sich seit der Pandemie verändert?',
        options: ['Niemand zahlt mehr mit Karte', 'Bargeld ist verboten', 'Mehr Menschen zahlen mit Karte'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-faxgeraet',
    level: 'B2',
    tags: ['everyday'],
    icon: 'writing',
    title: { de: 'Bitte per Fax', en: 'Please send by fax' },
    paragraphs: [
      [
        [
          'Als Daniel seinen Antrag auf Wohngeld stellen wollte, bekam er eine überraschende Antwort.',
          'When Daniel wanted to apply for housing benefit, he got a surprising answer.',
        ],
        [
          'Die Unterlagen sollte er per Post oder per Fax schicken.',
          'He was supposed to send the documents by post or by fax.',
        ],
        [
          'Ein Faxgerät hatte er seit zwanzig Jahren nicht mehr gesehen.',
          'He had not seen a fax machine for twenty years.',
        ],
      ],
      [
        [
          'Die Digitalisierung der Verwaltung kommt in Deutschland nur langsam voran.',
          'The digitalisation of public administration is progressing only slowly in Germany.',
        ],
        [
          'Zwar gibt es ein Gesetz, nach dem viele Leistungen online verfügbar sein sollen.',
          'There is indeed a law under which many services are supposed to be available online.',
        ],
        [
          'In der Praxis unterscheidet sich das aber stark von Stadt zu Stadt.',
          'In practice, however, this differs greatly from city to city.',
        ],
      ],
      [
        [
          'Daniel hat seine Unterlagen schließlich im Copyshop gefaxt.',
          'In the end Daniel faxed his documents at a copy shop.',
        ],
        [
          'Der Mitarbeiter dort sagte grinsend, dass Behörden zu seinen besten Kunden gehören.',
          'The employee there said with a grin that public authorities are among his best customers.',
        ],
        [
          'Zwei Wochen später kam die Bewilligung, natürlich per Brief.',
          'Two weeks later the approval arrived, by letter of course.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wie sollte Daniel die Unterlagen schicken?',
        options: ['Per E-Mail', 'Per Post oder Fax', 'Über eine App'],
        answer: 1,
      },
      {
        q: 'Wie ist die Digitalisierung in der Praxis?',
        options: ['Sehr unterschiedlich je nach Stadt', 'Überall gleich gut', 'Komplett fertig'],
        answer: 0,
      },
      { q: 'Wie kam die Bewilligung?', options: ['Per Fax', 'Per SMS', 'Per Brief'], answer: 2 },
    ],
  },
  {
    id: 'r-b2-foodsharing',
    level: 'B2',
    tags: ['everyday'],
    icon: 'leaf',
    title: { de: 'Retten statt wegwerfen', en: 'Rescue instead of throw away' },
    paragraphs: [
      [
        [
          'Jedes Jahr landen in Deutschland Millionen Tonnen Lebensmittel im Müll.',
          'Every year millions of tonnes of food end up in the bin in Germany.',
        ],
        ['Ein großer Teil davon wäre noch essbar.', 'A large part of it would still be edible.'],
        ['Die Initiative Foodsharing will das ändern.', 'The Foodsharing initiative wants to change that.'],
      ],
      [
        [
          'Freiwillige holen bei Bäckereien und Supermärkten ab, was nicht mehr verkauft wird.',
          'Volunteers collect what is no longer being sold from bakeries and supermarkets.',
        ],
        [
          'Die Lebensmittel verteilen sie kostenlos, zum Beispiel über öffentliche Kühlschränke, sogenannte Fairteiler.',
          'They hand out the food free of charge, for example via public fridges, known as "Fairteiler".',
        ],
        ['Jeder darf etwas hineinlegen oder herausnehmen.', 'Anyone may put something in or take something out.'],
      ],
      [
        [
          'Jonas holt zweimal pro Woche Brot vom Vortag bei einer Bäckerei ab.',
          'Twice a week Jonas collects the previous day’s bread from a bakery.',
        ],
        [
          'Am Anfang hatte er Bedenken, ob das hygienisch ist.',
          'At first he had doubts about whether that was hygienic.',
        ],
        [
          'Inzwischen weiß er, dass das Mindesthaltbarkeitsdatum kein Verfallsdatum ist.',
          'He now knows that the best-before date is not an expiry date.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was ist ein Fairteiler?',
        options: ['Ein Supermarkt', 'Ein öffentlicher Kühlschrank', 'Eine App'],
        answer: 1,
      },
      { q: 'Was holt Jonas ab?', options: ['Brot vom Vortag', 'Gemüse vom Markt', 'Milch vom Bauern'], answer: 0 },
      {
        q: 'Was hat Jonas gelernt?',
        options: [
          'Brot hält nur einen Tag',
          'Alles muss sofort weg',
          'Das Mindesthaltbarkeitsdatum ist kein Verfallsdatum',
        ],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-dialekte',
    level: 'B2',
    tags: ['everyday'],
    icon: 'translate',
    title: { de: 'Hochdeutsch? Nicht hier.', en: 'Standard German? Not here.' },
    paragraphs: [
      [
        [
          'Nach drei Jahren Deutschkurs zog Ana für ihren Job nach Stuttgart.',
          'After three years of German classes Ana moved to Stuttgart for her job.',
        ],
        [
          'Am ersten Tag verstand sie in der Kantine fast nichts.',
          'On the first day she understood almost nothing in the canteen.',
        ],
        ['Ihre Kollegen sprachen Schwäbisch.', 'Her colleagues were speaking Swabian.'],
      ],
      [
        [
          'Statt „ein bisschen“ hörte sie „a bissle“, und aus „nicht“ wurde „ned“.',
          'Instead of "ein bisschen" she heard "a bissle", and "nicht" became "ned".',
        ],
        [
          'Mit ihr sprachen die meisten zwar Hochdeutsch, untereinander aber nicht.',
          'Most of them spoke standard German with her, it is true, but not among themselves.',
        ],
        ['Ana fühlte sich zuerst ausgeschlossen.', 'At first Ana felt left out.'],
      ],
      [
        [
          'Dann begann sie, sich die häufigsten Ausdrücke aufzuschreiben.',
          'Then she began writing down the most common expressions.',
        ],
        [
          'Als sie zum ersten Mal „Ade“ statt „Tschüss“ sagte, lachte das ganze Büro, aber sehr herzlich.',
          'When she said "Ade" instead of "Tschüss" for the first time, the whole office laughed, but very warmly.',
        ],
        [
          'Inzwischen versteht sie fast alles und bringt ihren Freunden in Berlin Schwäbisch bei.',
          'Now she understands almost everything and teaches her friends in Berlin Swabian.',
        ],
      ],
    ],
    questions: [
      { q: 'Welchen Dialekt sprachen Anas Kollegen?', options: ['Bairisch', 'Schwäbisch', 'Sächsisch'], answer: 1 },
      { q: 'Wie fühlte sich Ana zuerst?', options: ['Ausgeschlossen', 'Begeistert', 'Gelangweilt'], answer: 0 },
      {
        q: 'Wie reagierte das Büro auf ihr „Ade“?',
        options: ['Niemand hat es bemerkt', 'Alle waren böse', 'Alle haben herzlich gelacht'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-anglizismen',
    level: 'B2',
    tags: ['work'],
    icon: 'translate',
    title: { de: 'Wir müssen das committen', en: 'We need to commit that' },
    paragraphs: [
      [
        [
          '„Lass uns das kurz offline besprechen und dann committen wir den Fix.“',
          '"Let’s discuss it briefly offline and then we’ll commit the fix."',
        ],
        [
          'Solche Sätze hört man in deutschen Tech-Firmen jeden Tag.',
          'You hear sentences like that in German tech companies every day.',
        ],
        [
          'Englische Fachbegriffe werden einfach wie deutsche Verben konjugiert.',
          'English technical terms are simply conjugated like German verbs.',
        ],
      ],
      [
        [
          'Aus „to deploy“ wird „deployen“, und das Partizip heißt „deployt“.',
          '"To deploy" becomes "deployen", and the participle is "deployt".',
        ],
        [
          'Manche Begriffe bekommen sogar eine ganz neue Bedeutung, wie das „Handy“.',
          'Some terms even get a completely new meaning, like the "Handy" (mobile phone).',
        ],
        [
          'Für Deutschlerner ist das eine gute Nachricht: Viele Wörter kennen sie schon.',
          'For German learners that is good news: they already know many words.',
        ],
      ],
      [
        [
          'Sprachpuristen ärgern sich dagegen über das „Denglisch“.',
          'Language purists, on the other hand, are annoyed by "Denglish".',
        ],
        [
          'In Behörden und Verträgen wird deshalb meist bewusst Deutsch verwendet.',
          'In public offices and contracts German is therefore usually used deliberately.',
        ],
        ['Wer beides kann, ist im Job klar im Vorteil.', 'Anyone who can do both has a clear advantage at work.'],
      ],
    ],
    questions: [
      {
        q: 'Wie werden englische Begriffe behandelt?',
        options: ['Sie werden übersetzt', 'Sie werden wie deutsche Verben konjugiert', 'Sie sind verboten'],
        answer: 1,
      },
      { q: 'Was ist das Partizip von „deployen“?', options: ['deployt', 'gedeployed', 'deployen'], answer: 0 },
      {
        q: 'Wo wird meist bewusst Deutsch verwendet?',
        options: ['In der Kantine', 'Im Chat', 'In Behörden und Verträgen'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-ki-im-job',
    level: 'B2',
    tags: ['work'],
    icon: 'sparkle',
    title: { de: 'Der neue Kollege heißt KI', en: 'The new colleague is called AI' },
    paragraphs: [
      [
        [
          'In Sarahs Marketingabteilung schreibt inzwischen eine KI die ersten Entwürfe für Produkttexte.',
          'In Sarah’s marketing department an AI now writes the first drafts of product texts.',
        ],
        [
          'Was früher einen halben Tag dauerte, ist jetzt in zehn Minuten fertig.',
          'What used to take half a day is now done in ten minutes.',
        ],
        [
          'Am Anfang hatte das Team Angst, überflüssig zu werden.',
          'At first the team was afraid of becoming superfluous.',
        ],
      ],
      [
        [
          'Schnell zeigte sich aber, dass die Texte zwar flüssig klingen, aber oft Fehler enthalten.',
          'It soon turned out, though, that the texts sound fluent but often contain errors.',
        ],
        [
          'Einmal behauptete die KI, ein Produkt sei wasserdicht, obwohl es das nicht war.',
          'Once the AI claimed a product was waterproof although it was not.',
        ],
        [
          'Ohne Kontrolle durch Menschen wäre das teuer geworden.',
          'Without people checking, that would have become expensive.',
        ],
      ],
      [
        ['Heute sieht Sarah ihre Rolle anders.', 'Today Sarah sees her role differently.'],
        [
          'Sie schreibt weniger selbst, prüft dafür mehr und entscheidet, was veröffentlicht wird.',
          'She writes less herself, checks more in return and decides what gets published.',
        ],
        [
          'Die gewonnene Zeit nutzt das Team für Gespräche mit Kunden.',
          'The team uses the time saved for conversations with customers.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wovor hatte das Team am Anfang Angst?',
        options: ['Vor Fehlern', 'Überflüssig zu werden', 'Vor dem Chef'],
        answer: 1,
      },
      {
        q: 'Welchen Fehler machte die KI?',
        options: ['Sie behauptete, ein Produkt sei wasserdicht', 'Sie schrieb auf Englisch', 'Sie löschte Dateien'],
        answer: 0,
      },
      {
        q: 'Wofür nutzt das Team die gewonnene Zeit?',
        options: ['Für längere Pausen', 'Für mehr Texte', 'Für Gespräche mit Kunden'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-mietpreisbremse',
    level: 'B2',
    tags: ['everyday'],
    icon: 'everyday',
    title: { de: 'Ist meine Miete zu hoch?', en: 'Is my rent too high?' },
    paragraphs: [
      [
        [
          'In vielen deutschen Städten gilt die sogenannte Mietpreisbremse.',
          'The so-called rent cap applies in many German cities.',
        ],
        [
          'Bei einer neuen Vermietung darf die Miete dann höchstens zehn Prozent über der ortsüblichen Vergleichsmiete liegen.',
          'For a new tenancy the rent may then be at most ten percent above the local reference rent.',
        ],
        [
          'Es gibt allerdings viele Ausnahmen, etwa für Neubauten.',
          'There are, however, many exceptions, for example for new buildings.',
        ],
      ],
      [
        [
          'Malte hatte das Gefühl, dass seine Miete in Köln viel zu hoch war.',
          'Malte had the feeling that his rent in Cologne was far too high.',
        ],
        [
          'Er verglich sie mit dem Mietspiegel der Stadt und lag deutlich darüber.',
          'He compared it with the city’s rent index and was well above it.',
        ],
        [
          'Mit Hilfe des Mietervereins hat er die Miete schriftlich gerügt.',
          'With the help of the tenants’ association he formally complained about the rent in writing.',
        ],
      ],
      [
        ['Der Vermieter hat nach einigen Wochen eingelenkt.', 'After a few weeks the landlord gave in.'],
        ['Malte zahlt jetzt 160 Euro weniger im Monat.', 'Malte now pays 160 euros less a month.'],
        [
          'Viele Mieter trauen sich so einen Schritt nicht, weil sie Ärger mit dem Vermieter fürchten.',
          'Many tenants do not dare to take such a step because they fear trouble with the landlord.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wie viel über der Vergleichsmiete darf eine neue Miete höchstens liegen?',
        options: ['Zwanzig Prozent', 'Zehn Prozent', 'Fünfzig Prozent'],
        answer: 1,
      },
      { q: 'Wer hat Malte geholfen?', options: ['Der Mieterverein', 'Seine Eltern', 'Die Polizei'], answer: 0 },
      {
        q: 'Warum trauen sich viele Mieter nicht?',
        options: ['Es ist zu teuer', 'Es ist verboten', 'Sie fürchten Ärger mit dem Vermieter'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-kuendigungsschutz',
    level: 'B2',
    tags: ['work'],
    icon: 'lock',
    title: { de: 'Gekündigt, und jetzt?', en: 'Dismissed, now what?' },
    paragraphs: [
      [
        [
          'Als Ivan überraschend die Kündigung bekam, war er zuerst wie gelähmt.',
          'When Ivan unexpectedly received notice of dismissal, he was paralysed at first.',
        ],
        [
          'Er arbeitete seit vier Jahren in der Firma, die rund hundert Mitarbeiter hat.',
          'He had worked for four years at the company, which has around a hundred employees.',
        ],
        [
          'Ein Freund riet ihm, sofort einen Anwalt für Arbeitsrecht anzurufen.',
          'A friend advised him to call an employment lawyer immediately.',
        ],
      ],
      [
        [
          'Der Anwalt erklärte, dass in Firmen dieser Größe das Kündigungsschutzgesetz gilt.',
          'The lawyer explained that the Dismissal Protection Act applies in companies of this size.',
        ],
        [
          'Eine Kündigung muss dann sozial gerechtfertigt sein, zum Beispiel durch betriebliche Gründe.',
          'A dismissal must then be socially justified, for example by operational reasons.',
        ],
        [
          'Wichtig ist eine Frist: Klagen kann man nur innerhalb von drei Wochen.',
          'One deadline is important: you can only sue within three weeks.',
        ],
      ],
      [
        [
          'Ivan hat geklagt, und vor dem Arbeitsgericht kam es zu einem Vergleich.',
          'Ivan sued, and a settlement was reached at the labour court.',
        ],
        [
          'Er bekam eine Abfindung von mehreren Monatsgehältern.',
          'He received a severance payment of several months’ salary.',
        ],
        [
          'Außerdem hat er sich sofort bei der Agentur für Arbeit gemeldet, damit er keine Ansprüche verliert.',
          'He also registered immediately with the employment agency so as not to lose any entitlements.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wozu riet ihm ein Freund?',
        options: ['Einen Anwalt anzurufen', 'Nichts zu tun', 'Sofort umzuziehen'],
        answer: 0,
      },
      { q: 'Innerhalb welcher Frist muss man klagen?', options: ['Drei Monate', 'Ein Jahr', 'Drei Wochen'], answer: 2 },
      { q: 'Was bekam Ivan am Ende?', options: ['Seinen Job zurück', 'Eine Abfindung', 'Nichts'], answer: 1 },
    ],
  },
  {
    id: 'r-b2-heizen',
    level: 'B2',
    tags: ['everyday'],
    icon: 'sun',
    title: { de: 'Richtig lüften', en: 'Airing rooms properly' },
    paragraphs: [
      [
        [
          'Kaum etwas überrascht Zugezogene in Deutschland so sehr wie die Regeln zum Lüften.',
          'Hardly anything surprises newcomers in Germany as much as the rules about airing rooms.',
        ],
        [
          'Statt das Fenster den ganzen Tag gekippt zu lassen, soll man mehrmals täglich stoßlüften.',
          'Instead of leaving the window tilted all day, you should air rooms briefly with the window wide open several times a day.',
        ],
        [
          'Fünf bis zehn Minuten mit weit geöffnetem Fenster reichen.',
          'Five to ten minutes with the window wide open is enough.',
        ],
      ],
      [
        [
          'Der Grund ist die Feuchtigkeit, die beim Duschen, Kochen und sogar beim Atmen entsteht.',
          'The reason is the moisture produced by showering, cooking and even breathing.',
        ],
        [
          'Wird sie nicht abgeführt, kann sich in alten Gebäuden schnell Schimmel bilden.',
          'If it is not removed, mould can quickly form in old buildings.',
        ],
        [
          'Für Schäden durch falsches Lüften müssen manchmal sogar die Mieter zahlen.',
          'Tenants sometimes even have to pay for damage caused by airing wrongly.',
        ],
      ],
      [
        [
          'Gleichzeitig soll man Energie sparen und die Heizung nicht unnötig laufen lassen.',
          'At the same time you are supposed to save energy and not run the heating unnecessarily.',
        ],
        [
          'Während des Lüftens dreht man deshalb die Heizung herunter.',
          'While airing, you therefore turn the heating down.',
        ],
        [
          'Was nach Bürokratie klingt, spart am Ende tatsächlich Geld und Ärger.',
          'What sounds like bureaucracy actually saves money and trouble in the end.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was bedeutet „stoßlüften“?',
        options: ['Das Fenster den ganzen Tag kippen', 'Kurz mit weit geöffnetem Fenster lüften', 'Nie lüften'],
        answer: 1,
      },
      { q: 'Was kann bei zu viel Feuchtigkeit entstehen?', options: ['Schimmel', 'Feuer', 'Lärm'], answer: 0 },
      {
        q: 'Was macht man während des Lüftens mit der Heizung?',
        options: ['Man dreht sie auf', 'Nichts', 'Man dreht sie herunter'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-e-auto',
    level: 'B2',
    tags: ['everyday'],
    icon: 'rocket',
    title: { de: 'Ein Jahr mit dem E-Auto', en: 'A year with an electric car' },
    paragraphs: [
      [
        [
          'Vor einem Jahr hat Familie Schulz ihren alten Diesel gegen ein Elektroauto getauscht.',
          'A year ago the Schulz family swapped their old diesel for an electric car.',
        ],
        [
          'Den größten Unterschied merken sie im Alltag kaum.',
          'They hardly notice the biggest difference in everyday life.',
        ],
        [
          'Zur Arbeit, zum Einkaufen und zur Schule reicht eine Ladung locker für eine Woche.',
          'For work, shopping and school one charge easily lasts a week.',
        ],
      ],
      [
        ['Schwierig wird es bei langen Fahrten in den Urlaub.', 'It gets difficult on long journeys to go on holiday.'],
        [
          'An manchen Schnellladestationen an der Autobahn mussten sie warten, weil alle Säulen besetzt waren.',
          'At some fast-charging stations on the motorway they had to wait because all the charging points were occupied.',
        ],
        ['Außerdem sind die Preise für das Laden sehr unterschiedlich.', 'The prices for charging also vary a lot.'],
      ],
      [
        [
          'Zu Hause laden sie mit einer Wallbox, oft mit Strom von der eigenen Solaranlage.',
          'At home they charge with a wallbox, often with electricity from their own solar panels.',
        ],
        [
          'Dadurch sind die Kosten pro Kilometer deutlich gesunken.',
          'As a result the cost per kilometre has dropped considerably.',
        ],
        [
          'Zurück zum Diesel wollen sie nicht, aber sie planen Reisen jetzt genauer.',
          'They do not want to go back to diesel, but they now plan trips more carefully.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wie lange reicht eine Ladung im Alltag?',
        options: ['Einen Tag', 'Etwa eine Woche', 'Einen Monat'],
        answer: 1,
      },
      {
        q: 'Was war auf langen Fahrten ein Problem?',
        options: ['Besetzte Ladesäulen', 'Zu wenig Platz', 'Lauter Motor'],
        answer: 0,
      },
      {
        q: 'Womit laden sie zu Hause oft?',
        options: ['Mit Strom vom Nachbarn', 'Mit Diesel', 'Mit Strom von der eigenen Solaranlage'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-gehaltstransparenz',
    level: 'B2',
    tags: ['work'],
    icon: 'progress',
    title: { de: 'Gleiche Arbeit, gleiches Geld?', en: 'Equal work, equal pay?' },
    paragraphs: [
      [
        [
          'Frauen verdienen in Deutschland im Durchschnitt deutlich weniger pro Stunde als Männer.',
          'On average women in Germany earn considerably less per hour than men.',
        ],
        [
          'Ein Teil des Unterschieds lässt sich durch Berufe, Teilzeit und Berufserfahrung erklären.',
          'Part of the difference can be explained by occupations, part-time work and work experience.',
        ],
        ['Ein Rest bleibt aber auch bei gleicher Tätigkeit bestehen.', 'But a gap remains even for the same work.'],
      ],
      [
        [
          'Seit einigen Jahren gibt es ein Gesetz, nach dem Beschäftigte in größeren Firmen Auskunft verlangen können.',
          'For some years there has been a law under which employees in larger companies can request information.',
        ],
        [
          'Sie erfahren dann, was Kollegen des anderen Geschlechts in vergleichbaren Positionen im Mittel verdienen.',
          'They then find out what colleagues of the other gender in comparable positions earn on average.',
        ],
        [
          'Genutzt wird dieses Recht bisher erstaunlich selten.',
          'So far this right has been used surprisingly rarely.',
        ],
      ],
      [
        [
          'Als Melanie die Auskunft beantragte, stellte sie fest, dass sie zwölf Prozent unter dem Mittelwert lag.',
          'When Melanie requested the information, she found she was twelve percent below the average.',
        ],
        [
          'Mit diesen Zahlen ging sie in ihre nächste Gehaltsverhandlung.',
          'She went into her next salary negotiation with these figures.',
        ],
        [
          'Die Lücke wurde nicht ganz geschlossen, aber zum größten Teil.',
          'The gap was not closed completely, but for the most part.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was kann man durch das Gesetz verlangen?',
        options: ['Mehr Urlaub', 'Auskunft über Gehälter vergleichbarer Kollegen', 'Eine Beförderung'],
        answer: 1,
      },
      { q: 'Wie oft wird dieses Recht genutzt?', options: ['Erstaunlich selten', 'Sehr oft', 'Nie'], answer: 0 },
      {
        q: 'Was hat Melanie erreicht?',
        options: ['Nichts', 'Sie wurde gekündigt', 'Die Lücke wurde zum größten Teil geschlossen'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-messe',
    level: 'B2',
    tags: ['work'],
    icon: 'community',
    title: { de: 'Drei Tage auf der Messe', en: 'Three days at the trade fair' },
    paragraphs: [
      [
        [
          'Deutschland ist das Land der Messen: Hannover, Frankfurt, Köln und München empfangen jedes Jahr Millionen Besucher.',
          'Germany is the land of trade fairs: Hanover, Frankfurt, Cologne and Munich welcome millions of visitors every year.',
        ],
        [
          'Für Can war es die erste Messe als Mitarbeiter am Stand seiner Firma.',
          'For Can it was his first trade fair working at his company’s stand.',
        ],
        [
          'Er hatte sich auf interessante Gespräche gefreut.',
          'He had been looking forward to interesting conversations.',
        ],
      ],
      [
        [
          'Die Realität war anstrengender, als er gedacht hatte.',
          'The reality was more exhausting than he had thought.',
        ],
        [
          'Zehn Stunden am Tag stand er am Stand, lächelte und erklärte dasselbe Produkt immer wieder.',
          'Ten hours a day he stood at the stand, smiled and explained the same product over and over.',
        ],
        ['Abends war seine Stimme fast weg.', 'In the evenings his voice was almost gone.'],
      ],
      [
        ['Trotzdem hat sich die Messe gelohnt.', 'Still, the fair was worth it.'],
        [
          'Can hat über sechzig Visitenkarten gesammelt, und aus drei Gesprächen sind konkrete Aufträge geworden.',
          'Can collected over sixty business cards, and three conversations turned into concrete orders.',
        ],
        [
          'Sein Tipp für das nächste Mal: bequeme Schuhe und viel Wasser.',
          'His tip for next time: comfortable shoes and lots of water.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was war für Can anstrengend?',
        options: ['Die Anreise', 'Zehn Stunden am Tag am Stand zu stehen', 'Das Essen'],
        answer: 1,
      },
      { q: 'Wie viele Gespräche wurden zu Aufträgen?', options: ['Drei', 'Sechzig', 'Keins'], answer: 0 },
      {
        q: 'Was ist Cans Tipp?',
        options: ['Mehr Visitenkarten', 'Kürzere Tage', 'Bequeme Schuhe und viel Wasser'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-stress',
    level: 'B2',
    tags: ['work'],
    icon: 'weak',
    title: { de: 'Wenn nichts mehr geht', en: 'When nothing works any more' },
    paragraphs: [
      [
        [
          'Lange dachte Patrick, dass Müdigkeit und Schlafprobleme einfach zu seinem Job gehören.',
          'For a long time Patrick thought tiredness and sleep problems were simply part of his job.',
        ],
        [
          'Er arbeitete am Wochenende, beantwortete nachts Nachrichten und sagte zu jedem Projekt Ja.',
          'He worked at weekends, answered messages at night and said yes to every project.',
        ],
        ['Eines Morgens konnte er nicht mehr aufstehen.', 'One morning he could no longer get up.'],
      ],
      [
        [
          'Seine Hausärztin schrieb ihn krank und sprach zum ersten Mal von einem Burnout.',
          'His GP signed him off sick and spoke of burnout for the first time.',
        ],
        [
          'Sie überwies ihn an eine Psychotherapeutin, auf deren Termin er allerdings Monate warten musste.',
          'She referred him to a psychotherapist, though he had to wait months for an appointment.',
        ],
        [
          'In der Zwischenzeit half ihm ein Kurs zur Stressbewältigung, den seine Krankenkasse bezahlte.',
          'In the meantime a stress management course paid for by his health insurance helped him.',
        ],
      ],
      [
        [
          'Nach drei Monaten kehrte Patrick schrittweise an seinen Arbeitsplatz zurück.',
          'After three months Patrick gradually returned to his workplace.',
        ],
        [
          'Dieses Verfahren heißt Wiedereingliederung und beginnt oft mit nur wenigen Stunden pro Tag.',
          'This procedure is called gradual reintegration and often starts with only a few hours a day.',
        ],
        [
          'Heute sagt er öfter Nein und hat sein Handy abends im Flugmodus.',
          'Today he says no more often and keeps his phone in flight mode in the evenings.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Was dachte Patrick lange?',
        options: ['Dass er zu wenig arbeitet', 'Dass Müdigkeit zum Job gehört', 'Dass er kündigen sollte'],
        answer: 1,
      },
      {
        q: 'Was half ihm in der Wartezeit?',
        options: ['Ein Kurs zur Stressbewältigung', 'Ein Urlaub', 'Mehr Arbeit'],
        answer: 0,
      },
      {
        q: 'Wie heißt die schrittweise Rückkehr?',
        options: ['Probezeit', 'Teilzeit', 'Wiedereingliederung'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-wg',
    level: 'B2',
    tags: ['everyday'],
    icon: 'community',
    title: { de: 'Das WG-Casting', en: 'The flat-share audition' },
    paragraphs: [
      [
        [
          'In einer WG teilen sich mehrere Menschen eine Wohnung, Küche und Bad.',
          'In a flat share several people share a flat, kitchen and bathroom.',
        ],
        [
          'Wird ein Zimmer frei, sucht die WG selbst einen neuen Mitbewohner.',
          'When a room becomes free, the flat share looks for a new flatmate itself.',
        ],
        [
          'Das Auswahlverfahren nennt man scherzhaft WG-Casting.',
          'The selection process is jokingly called a flat-share casting.',
        ],
      ],
      [
        [
          'Als Nour sich vorstellte, saß sie vor vier Leuten am Küchentisch.',
          'When Nour introduced herself, she sat in front of four people at the kitchen table.',
        ],
        [
          'Sie fragten nach ihren Hobbys, ihrer Einstellung zum Putzplan und ob sie gern zusammen kocht.',
          'They asked about her hobbies, her attitude to the cleaning rota and whether she likes cooking together.',
        ],
        [
          'Es fühlte sich mehr wie ein Vorstellungsgespräch an als wie Wohnungssuche.',
          'It felt more like a job interview than looking for a flat.',
        ],
      ],
      [
        [
          'Zwei Tage später bekam sie eine Zusage, aus über fünfzig Bewerbungen.',
          'Two days later she got a yes, out of over fifty applications.',
        ],
        [
          'Den Ausschlag gab ihre Antwort auf die letzte Frage: Sie kann gut Fahrräder reparieren.',
          'Her answer to the last question tipped the balance: she is good at repairing bikes.',
        ],
        [
          'Seitdem ist sie die offizielle Werkstatt der WG.',
          'Since then she has been the flat share’s official workshop.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wer sucht in einer WG den neuen Mitbewohner?',
        options: ['Der Vermieter', 'Die WG selbst', 'Eine Agentur'],
        answer: 1,
      },
      {
        q: 'Wie fühlte sich das Casting an?',
        options: ['Wie ein Vorstellungsgespräch', 'Wie eine Party', 'Wie ein Arztbesuch'],
        answer: 0,
      },
      {
        q: 'Was hat den Ausschlag gegeben?',
        options: ['Ihre Kochkünste', 'Ihr Gehalt', 'Sie kann Fahrräder reparieren'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-b2-rente',
    level: 'B2',
    tags: ['work', 'everyday'],
    icon: 'progress',
    title: { de: 'Ein Brief über die Rente', en: 'A letter about the pension' },
    paragraphs: [
      [
        [
          'Mit 27 bekam Elena zum ersten Mal Post von der Deutschen Rentenversicherung.',
          'At 27 Elena got post from the German pension insurance for the first time.',
        ],
        [
          'In der Renteninformation stand, wie viel Rente sie später ungefähr bekommen würde.',
          'The pension statement showed roughly how much pension she would get later.',
        ],
        ['Die Zahl war ernüchternd.', 'The figure was sobering.'],
      ],
      [
        [
          'Das deutsche Rentensystem funktioniert nach dem Umlageverfahren.',
          'The German pension system works on a pay-as-you-go basis.',
        ],
        [
          'Die Beiträge der heutigen Beschäftigten bezahlen die Renten der heutigen Rentner.',
          'The contributions of today’s employees pay the pensions of today’s pensioners.',
        ],
        [
          'Weil immer mehr Menschen alt werden und weniger jung sind, gerät das System unter Druck.',
          'Because more and more people are getting old and fewer are young, the system is coming under pressure.',
        ],
      ],
      [
        [
          'Viele Experten empfehlen deshalb, zusätzlich privat vorzusorgen.',
          'Many experts therefore recommend making additional private provision.',
        ],
        [
          'Elena hat sich zuerst informiert, welche Möglichkeiten ihr Arbeitgeber anbietet.',
          'Elena first found out what options her employer offers.',
        ],
        [
          'Über eine Betriebsrente legt sie nun jeden Monat einen Teil ihres Gehalts zurück.',
          'Through a company pension she now puts part of her salary aside every month.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wie war die Zahl in der Renteninformation?',
        options: ['Sehr hoch', 'Ernüchternd', 'Unwichtig'],
        answer: 1,
      },
      {
        q: 'Wer bezahlt im Umlageverfahren die heutigen Renten?',
        options: ['Die heutigen Beschäftigten', 'Die Rentner selbst', 'Nur der Staat'],
        answer: 0,
      },
      {
        q: 'Wie sorgt Elena zusätzlich vor?',
        options: ['Gar nicht', 'Mit Lotto', 'Über eine Betriebsrente'],
        answer: 2,
      },
    ],
  },
];
