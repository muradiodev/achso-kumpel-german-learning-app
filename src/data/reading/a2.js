// A2 reading texts. Format and rules: src/data/reading.js.

export const A2 = [
  {
    id: 'r-a2-umzug',
    level: 'A2',
    tags: ['everyday'],
    icon: 'everyday',
    title: { de: 'Der Umzug', en: 'The move' },
    paragraphs: [
      [
        ['Letzten Samstag bin ich umgezogen.', 'Last Saturday I moved house.'],
        [
          'Meine Freunde haben mir geholfen, weil ich kein Auto habe.',
          'My friends helped me because I do not have a car.',
        ],
        ['Wir haben einen kleinen Transporter gemietet.', 'We rented a small van.'],
      ],
      [
        [
          'Das Sofa war sehr schwer und hat nicht in den Aufzug gepasst.',
          'The sofa was very heavy and did not fit in the lift.',
        ],
        ['Also mussten wir es in den vierten Stock tragen.', 'So we had to carry it up to the fourth floor.'],
        [
          'Am Abend haben wir Pizza bestellt und auf dem Boden gegessen.',
          'In the evening we ordered pizza and ate on the floor.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Warum haben die Freunde geholfen?',
        options: ['Die Person hat kein Auto', 'Sie hatten Langeweile', 'Sie wohnen im Haus'],
        answer: 0,
      },
      {
        q: 'Was war das Problem mit dem Sofa?',
        options: ['Es war kaputt', 'Es hat nicht in den Aufzug gepasst', 'Es war zu billig'],
        answer: 1,
      },
      {
        q: 'Was haben sie am Abend gemacht?',
        options: ['Sie sind ins Kino gegangen', 'Sie haben gekocht', 'Sie haben Pizza gegessen'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-anmeldung',
    level: 'A2',
    tags: ['everyday'],
    icon: 'writing',
    title: { de: 'Beim Bürgeramt', en: 'At the citizens office' },
    paragraphs: [
      [
        [
          'Wer in Deutschland umzieht, muss sich innerhalb von zwei Wochen anmelden.',
          'Anyone who moves in Germany has to register within two weeks.',
        ],
        ['Dafür braucht man einen Termin beim Bürgeramt.', 'For that you need an appointment at the citizens office.'],
        ['Den Termin bucht man meistens online.', 'You usually book the appointment online.'],
      ],
      [
        [
          'Man muss den Pass und eine Bestätigung vom Vermieter mitbringen.',
          'You have to bring your passport and a confirmation from the landlord.',
        ],
        [
          'Nach zehn Minuten bekommt man die Meldebescheinigung.',
          'After ten minutes you get the registration certificate.',
        ],
        [
          'Dieses Papier braucht man später oft, zum Beispiel für die Bank.',
          'You often need this paper later, for example for the bank.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Bis wann muss man sich anmelden?',
        options: ['In zwei Wochen', 'In zwei Monaten', 'In einem Jahr'],
        answer: 0,
      },
      {
        q: 'Was muss man mitbringen?',
        options: ['Ein Foto', 'Den Pass und eine Bestätigung vom Vermieter', 'Den Arbeitsvertrag'],
        answer: 1,
      },
      {
        q: 'Wofür braucht man die Meldebescheinigung später?',
        options: ['Für den Supermarkt', 'Für das Fitnessstudio', 'Zum Beispiel für die Bank'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-konto',
    level: 'A2',
    tags: ['everyday'],
    icon: 'lock',
    title: { de: 'Ein Konto eröffnen', en: 'Opening an account' },
    paragraphs: [
      [
        [
          'Ohne Bankkonto bekommt man in Deutschland kein Gehalt.',
          'Without a bank account you get no salary in Germany.',
        ],
        [
          'Deshalb hat Rana gleich in der ersten Woche ein Konto eröffnet.',
          'That is why Rana opened an account in the very first week.',
        ],
        ['Sie hat eine Online-Bank gewählt, weil das kostenlos ist.', 'She chose an online bank because it is free.'],
      ],
      [
        ['Die Identifizierung hat per Video funktioniert.', 'The identification worked by video.'],
        ['Nach drei Tagen ist die Karte mit der Post gekommen.', 'After three days the card came in the post.'],
        ['Jetzt kann sie ihrer Firma die IBAN schicken.', 'Now she can send her company the IBAN.'],
      ],
    ],
    questions: [
      {
        q: 'Warum hat Rana eine Online-Bank gewählt?',
        options: ['Sie ist kostenlos', 'Sie ist in der Nähe', 'Ihr Chef wollte das'],
        answer: 0,
      },
      {
        q: 'Wie hat die Identifizierung funktioniert?',
        options: ['In der Filiale', 'Per Video', 'Per Brief'],
        answer: 1,
      },
      { q: 'Was schickt Rana ihrer Firma?', options: ['Ihr Passfoto', 'Ihre Adresse', 'Die IBAN'], answer: 2 },
    ],
  },
  {
    id: 'r-a2-krankmeldung',
    level: 'A2',
    tags: ['work'],
    icon: 'weak',
    title: { de: 'Krank zu Hause', en: 'Sick at home' },
    paragraphs: [
      [
        ['Heute Morgen hatte Paul starke Bauchschmerzen.', 'This morning Paul had a bad stomach ache.'],
        [
          'Er hat seinem Teamleiter sofort eine Nachricht geschrieben.',
          'He immediately wrote his team lead a message.',
        ],
        ['„Ich bin krank und kann heute leider nicht kommen.“', '"I am ill and unfortunately cannot come in today."'],
      ],
      [
        ['Dann ist er zum Arzt gegangen.', 'Then he went to the doctor.'],
        ['Der Arzt hat ihn für zwei Tage krankgeschrieben.', 'The doctor signed him off sick for two days.'],
        ['Paul hat den ganzen Tag geschlafen und Tee getrunken.', 'Paul slept all day and drank tea.'],
      ],
    ],
    questions: [
      { q: 'Was hatte Paul?', options: ['Kopfschmerzen', 'Bauchschmerzen', 'Husten'], answer: 1 },
      { q: 'Wem hat Paul geschrieben?', options: ['Seinem Teamleiter', 'Seiner Mutter', 'Einem Kunden'], answer: 0 },
      { q: 'Wie lange ist Paul krankgeschrieben?', options: ['Eine Woche', 'Einen Tag', 'Zwei Tage'], answer: 2 },
    ],
  },
  {
    id: 'r-a2-besichtigung',
    level: 'A2',
    tags: ['everyday'],
    icon: 'everyday',
    title: { de: 'Die Wohnungsbesichtigung', en: 'The flat viewing' },
    paragraphs: [
      [
        ['Gestern habe ich eine Wohnung in Mannheim besichtigt.', 'Yesterday I viewed a flat in Mannheim.'],
        ['Außer mir waren noch fünfzehn andere Leute da.', 'Apart from me, fifteen other people were there.'],
        ['Die Wohnung war schön, aber die Küche war sehr alt.', 'The flat was nice, but the kitchen was very old.'],
      ],
      [
        [
          'Der Vermieter wollte wissen, wo ich arbeite und wie viel ich verdiene.',
          'The landlord wanted to know where I work and how much I earn.',
        ],
        ['Ich habe ihm meine Unterlagen gegeben.', 'I gave him my documents.'],
        [
          'Jetzt warte ich auf eine Antwort und hoffe, dass ich Glück habe.',
          'Now I am waiting for an answer and hope that I am lucky.',
        ],
      ],
    ],
    questions: [
      { q: 'Wie viele andere Leute waren da?', options: ['Fünf', 'Fünfzehn', 'Fünfzig'], answer: 1 },
      { q: 'Was war nicht so gut?', options: ['Das Bad', 'Der Balkon', 'Die Küche'], answer: 2 },
      {
        q: 'Was wollte der Vermieter wissen?',
        options: ['Wo die Person arbeitet', 'Wie alt die Person ist', 'Ob die Person kochen kann'],
        answer: 0,
      },
    ],
  },
  {
    id: 'r-a2-handyvertrag',
    level: 'A2',
    tags: ['everyday'],
    icon: 'chats',
    title: { de: 'Der Handyvertrag', en: 'The phone contract' },
    paragraphs: [
      [
        [
          'Im Handyladen wollte mir der Verkäufer einen Vertrag für zwei Jahre verkaufen.',
          'In the phone shop the salesperson wanted to sell me a two-year contract.',
        ],
        [
          'Der Vertrag war teuer und ich brauche nicht so viele Daten.',
          'The contract was expensive and I do not need that much data.',
        ],
        ['Deshalb habe ich Nein gesagt.', 'That is why I said no.'],
      ],
      [
        ['Zu Hause habe ich online eine Prepaid-Karte bestellt.', 'At home I ordered a prepaid card online.'],
        [
          'Sie kostet zehn Euro im Monat und ich kann jederzeit kündigen.',
          'It costs ten euros a month and I can cancel at any time.',
        ],
        ['Das ist für mich besser.', 'That is better for me.'],
      ],
    ],
    questions: [
      { q: 'Wie lange sollte der Vertrag laufen?', options: ['Zwei Jahre', 'Ein Jahr', 'Einen Monat'], answer: 0 },
      {
        q: 'Was hat die Person zu Hause bestellt?',
        options: ['Ein neues Handy', 'Einen Laptop', 'Eine Prepaid-Karte'],
        answer: 2,
      },
      {
        q: 'Was ist der Vorteil der Prepaid-Karte?',
        options: ['Viele Daten', 'Man kann jederzeit kündigen', 'Ein Geschenk'],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-a2-reklamation',
    level: 'A2',
    tags: ['everyday'],
    icon: 'repeat',
    title: { de: 'Die kaputte Kaffeemaschine', en: 'The broken coffee machine' },
    paragraphs: [
      [
        ['Vor einer Woche habe ich eine Kaffeemaschine gekauft.', 'A week ago I bought a coffee machine.'],
        ['Schon nach drei Tagen hat sie nicht mehr funktioniert.', 'After only three days it stopped working.'],
        [
          'Ich bin mit der Maschine und dem Kassenbon zurück ins Geschäft gegangen.',
          'I went back to the shop with the machine and the receipt.',
        ],
      ],
      [
        ['Die Verkäuferin war sehr freundlich.', 'The shop assistant was very friendly.'],
        [
          'Ich konnte wählen: eine neue Maschine oder das Geld zurück.',
          'I could choose: a new machine or my money back.',
        ],
        [
          'Ich habe eine neue Maschine genommen, und die läuft bis heute.',
          'I took a new machine, and it is still running today.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wann ist die Maschine kaputtgegangen?',
        options: ['Nach drei Tagen', 'Nach einem Jahr', 'Sofort'],
        answer: 0,
      },
      {
        q: 'Was hat die Person mitgenommen?',
        options: ['Nur die Maschine', 'Die Maschine und den Kassenbon', 'Einen Freund'],
        answer: 1,
      },
      {
        q: 'Was hat die Person gewählt?',
        options: ['Das Geld zurück', 'Einen Gutschein', 'Eine neue Maschine'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-umsteigen',
    level: 'A2',
    tags: ['everyday'],
    icon: 'repeat',
    title: { de: 'Umsteigen in Fulda', en: 'Changing trains in Fulda' },
    paragraphs: [
      [
        ['Ich wollte von Frankfurt nach Erfurt fahren.', 'I wanted to travel from Frankfurt to Erfurt.'],
        [
          'In Fulda musste ich umsteigen, aber mein Zug war zwanzig Minuten zu spät.',
          'In Fulda I had to change, but my train was twenty minutes late.',
        ],
        ['Natürlich habe ich den Anschluss verpasst.', 'Of course I missed the connection.'],
      ],
      [
        [
          'Eine Mitarbeiterin der Bahn hat mir gesagt, dass ich den nächsten Zug nehmen kann.',
          'A railway employee told me that I can take the next train.',
        ],
        ['Der ist eine Stunde später gefahren.', 'That one left an hour later.'],
        ['Ich habe in einem Café gewartet und meine E-Mails gelesen.', 'I waited in a café and read my emails.'],
      ],
    ],
    questions: [
      { q: 'Wo musste die Person umsteigen?', options: ['In Erfurt', 'In Fulda', 'In Frankfurt'], answer: 1 },
      {
        q: 'Warum hat die Person den Anschluss verpasst?',
        options: ['Der Zug war zu spät', 'Sie hat verschlafen', 'Sie hatte keine Karte'],
        answer: 0,
      },
      {
        q: 'Was hat die Person gemacht, während sie gewartet hat?',
        options: ['Sie hat geschlafen', 'Sie hat telefoniert', 'Sie hat E-Mails gelesen'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-ueberstunden',
    level: 'A2',
    tags: ['work'],
    icon: 'work',
    title: { de: 'Zu viele Überstunden', en: 'Too much overtime' },
    paragraphs: [
      [
        [
          'In den letzten Wochen hat Nora oft bis acht Uhr abends gearbeitet.',
          'In recent weeks Nora often worked until eight in the evening.',
        ],
        [
          'Ihr Projekt muss bis Ende des Monats fertig sein.',
          'Her project has to be finished by the end of the month.',
        ],
        ['Sie ist müde und hat keine Zeit mehr für Sport.', 'She is tired and no longer has time for sport.'],
      ],
      [
        ['Heute hat sie mit ihrem Chef gesprochen.', 'Today she spoke with her boss.'],
        [
          'Er hat gesagt, dass sie die Überstunden im nächsten Monat frei nehmen kann.',
          'He said that she can take the overtime off next month.',
        ],
        ['Jetzt plant Nora schon einen langen Urlaub.', 'Now Nora is already planning a long holiday.'],
      ],
    ],
    questions: [
      {
        q: 'Bis wann hat Nora oft gearbeitet?',
        options: ['Bis fünf Uhr', 'Bis acht Uhr', 'Bis Mitternacht'],
        answer: 1,
      },
      {
        q: 'Was hat der Chef gesagt?',
        options: ['Sie kann die Stunden später frei nehmen', 'Sie bekommt mehr Geld', 'Sie muss mehr arbeiten'],
        answer: 0,
      },
      {
        q: 'Was plant Nora jetzt?',
        options: ['Einen neuen Job', 'Einen Sprachkurs', 'Einen langen Urlaub'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-teammeeting',
    level: 'A2',
    tags: ['work'],
    icon: 'chats',
    title: { de: 'Das Teammeeting', en: 'The team meeting' },
    paragraphs: [
      [
        ['Jeden Montag um zehn Uhr haben wir ein Teammeeting.', 'Every Monday at ten we have a team meeting.'],
        ['Jeder erzählt kurz, woran er arbeitet.', 'Everyone says briefly what they are working on.'],
        ['Am Anfang habe ich nur zugehört, weil ich unsicher war.', 'At first I only listened because I was unsure.'],
      ],
      [
        [
          'Letzte Woche habe ich zum ersten Mal selbst etwas präsentiert.',
          'Last week I presented something myself for the first time.',
        ],
        [
          'Ich habe ein paar Fehler gemacht, aber alle haben mich verstanden.',
          'I made a few mistakes, but everyone understood me.',
        ],
        ['Meine Kollegin hat danach gesagt: „Super gemacht!“', 'My colleague said afterwards: "Well done!"'],
      ],
    ],
    questions: [
      { q: 'Wann ist das Meeting?', options: ['Montags um zehn', 'Freitags um neun', 'Jeden Tag'], answer: 0 },
      {
        q: 'Warum hat die Person am Anfang nur zugehört?',
        options: ['Sie war müde', 'Sie war unsicher', 'Sie war krank'],
        answer: 1,
      },
      {
        q: 'Wie hat die Kollegin reagiert?',
        options: ['Sie war böse', 'Sie hat nichts gesagt', 'Sie hat gelobt'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-grillfest',
    level: 'A2',
    tags: ['everyday'],
    icon: 'sun',
    title: { de: 'Grillen im Hof', en: 'Barbecue in the courtyard' },
    paragraphs: [
      [
        [
          'Im Juni haben unsere Nachbarn ein Grillfest im Hof organisiert.',
          'In June our neighbours organised a barbecue in the courtyard.',
        ],
        [
          'Jeder hat etwas mitgebracht: Salate, Würstchen, Brot oder Getränke.',
          'Everyone brought something: salads, sausages, bread or drinks.',
        ],
        ['Ich habe Dolma gemacht, und alle wollten das Rezept.', 'I made dolma, and everyone wanted the recipe.'],
      ],
      [
        [
          'Ich habe viele Leute aus dem Haus zum ersten Mal kennengelernt.',
          'I met many people from the building for the first time.',
        ],
        [
          'Um zehn Uhr mussten wir leiser sein, weil dann die Nachtruhe beginnt.',
          'At ten we had to be quieter because that is when quiet hours begin.',
        ],
        ['Es war ein sehr schöner Abend.', 'It was a very nice evening.'],
      ],
    ],
    questions: [
      { q: 'Wer hat das Fest organisiert?', options: ['Der Vermieter', 'Die Nachbarn', 'Die Stadt'], answer: 1 },
      { q: 'Was hat die Person gemacht?', options: ['Dolma', 'Kuchen', 'Würstchen'], answer: 0 },
      {
        q: 'Warum mussten sie um zehn leiser sein?',
        options: ['Es hat geregnet', 'Die Polizei war da', 'Dann beginnt die Nachtruhe'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-pfand',
    level: 'A2',
    tags: ['everyday'],
    icon: 'leaf',
    title: { de: 'Was ist Pfand?', en: 'What is a deposit?' },
    paragraphs: [
      [
        [
          'Auf vielen Flaschen und Dosen in Deutschland gibt es Pfand.',
          'Many bottles and cans in Germany carry a deposit.',
        ],
        [
          'Man zahlt zum Beispiel 25 Cent mehr, wenn man eine Dose kauft.',
          'You pay, for example, 25 cents more when you buy a can.',
        ],
        [
          'Das Geld bekommt man zurück, wenn man die Dose zurückbringt.',
          'You get the money back when you return the can.',
        ],
      ],
      [
        [
          'In jedem Supermarkt steht ein Automat für leere Flaschen.',
          'In every supermarket there is a machine for empty bottles.',
        ],
        [
          'Der Automat druckt einen Bon, und den gibt man an der Kasse ab.',
          'The machine prints a slip, and you hand it in at the checkout.',
        ],
        [
          'Viele Leute sammeln ihre Flaschen und bringen sie einmal im Monat weg.',
          'Many people collect their bottles and take them back once a month.',
        ],
      ],
    ],
    questions: [
      { q: 'Wie viel Pfand gibt es zum Beispiel auf eine Dose?', options: ['25 Cent', '5 Cent', '1 Euro'], answer: 0 },
      {
        q: 'Wo gibt man die Flaschen zurück?',
        options: ['Bei der Post', 'Am Automaten im Supermarkt', 'In den Müll'],
        answer: 1,
      },
      {
        q: 'Was macht man mit dem Bon?',
        options: ['Man wirft ihn weg', 'Man schickt ihn per Post', 'Man gibt ihn an der Kasse ab'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-hausordnung',
    level: 'A2',
    tags: ['everyday'],
    icon: 'lock',
    title: { de: 'Die Hausordnung', en: 'The house rules' },
    paragraphs: [
      [
        ['Im Flur unseres Hauses hängt die Hausordnung.', 'The house rules hang in the hallway of our building.'],
        [
          'Von 22 bis 6 Uhr und am Sonntag soll es ruhig sein.',
          'From 10 p.m. to 6 a.m. and on Sundays it should be quiet.',
        ],
        ['Fahrräder darf man nicht im Treppenhaus abstellen.', 'You are not allowed to leave bikes in the stairwell.'],
      ],
      [
        [
          'Jede Woche ist eine andere Wohnung mit dem Putzen der Treppe dran.',
          'Every week a different flat has its turn cleaning the stairs.',
        ],
        ['Am Anfang wusste ich das nicht.', 'At first I did not know that.'],
        [
          'Eine Nachbarin hat es mir freundlich erklärt, und jetzt mache ich mit.',
          'A neighbour explained it to me kindly, and now I take part.',
        ],
      ],
    ],
    questions: [
      { q: 'Wann soll es ruhig sein?', options: ['Nur am Samstag', 'Von 22 bis 6 Uhr und sonntags', 'Nie'], answer: 1 },
      { q: 'Was darf man nicht im Treppenhaus?', options: ['Fahrräder abstellen', 'Laufen', 'Sprechen'], answer: 0 },
      {
        q: 'Wer hat der Person die Regel erklärt?',
        options: ['Der Vermieter', 'Die Polizei', 'Eine Nachbarin'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-fahrrad',
    level: 'A2',
    tags: ['everyday'],
    icon: 'bicycle',
    title: { de: 'Mit dem Fahrrad zur Arbeit', en: 'Cycling to work' },
    paragraphs: [
      [
        ['Seit dem Frühling fahre ich mit dem Fahrrad zur Arbeit.', 'Since spring I have been cycling to work.'],
        [
          'Die Strecke ist acht Kilometer lang und ich brauche etwa dreißig Minuten.',
          'The route is eight kilometres long and I need about thirty minutes.',
        ],
        ['Mit der U-Bahn war ich nicht viel schneller.', 'By underground I was not much faster.'],
      ],
      [
        ['Letzte Woche hatte ich einen Platten.', 'Last week I had a flat tyre.'],
        [
          'Ich habe das Rad in eine Werkstatt gebracht, und am nächsten Tag war es fertig.',
          'I took the bike to a workshop, and the next day it was ready.',
        ],
        [
          'Im Winter fahre ich aber lieber wieder mit der Bahn.',
          'In winter, though, I prefer to take the train again.',
        ],
      ],
    ],
    questions: [
      { q: 'Wie lang ist die Strecke?', options: ['Acht Kilometer', 'Drei Kilometer', 'Zwanzig Kilometer'], answer: 0 },
      {
        q: 'Was ist letzte Woche passiert?',
        options: ['Ein Unfall', 'Ein Platten', 'Das Rad wurde gestohlen'],
        answer: 1,
      },
      { q: 'Wie fährt die Person im Winter?', options: ['Mit dem Auto', 'Mit dem Fahrrad', 'Mit der Bahn'], answer: 2 },
    ],
  },
  {
    id: 'r-a2-online-bestellen',
    level: 'A2',
    tags: ['everyday'],
    icon: 'gift',
    title: { de: 'Online bestellt, zurückgeschickt', en: 'Ordered online, sent back' },
    paragraphs: [
      [
        [
          'Ich habe online zwei Hosen in verschiedenen Größen bestellt.',
          'I ordered two pairs of trousers in different sizes online.',
        ],
        ['Eine hat gepasst, die andere war zu groß.', 'One fitted, the other was too big.'],
        ['Die große Hose habe ich zurückgeschickt.', 'I sent the big pair back.'],
      ],
      [
        [
          'Das war einfach: Ich habe einen QR-Code bekommen und das Paket bei der Post abgegeben.',
          'That was easy: I got a QR code and dropped the parcel off at the post office.',
        ],
        ['Nach einer Woche war das Geld wieder auf meinem Konto.', 'After a week the money was back in my account.'],
        ['Trotzdem kaufe ich Kleidung lieber im Geschäft.', 'Still, I prefer to buy clothes in a shop.'],
      ],
    ],
    questions: [
      {
        q: 'Was war das Problem?',
        options: ['Eine Hose war zu groß', 'Die Hosen waren zu teuer', 'Das Paket ist nicht gekommen'],
        answer: 0,
      },
      {
        q: 'Wie lange hat es gedauert, bis das Geld zurück war?',
        options: ['Einen Tag', 'Einen Monat', 'Eine Woche'],
        answer: 2,
      },
      { q: 'Wo kauft die Person Kleidung lieber?', options: ['Online', 'Im Geschäft', 'Auf dem Flohmarkt'], answer: 1 },
    ],
  },
  {
    id: 'r-a2-bibliothek',
    level: 'A2',
    tags: ['everyday'],
    icon: 'book',
    title: { de: 'In der Stadtbibliothek', en: 'At the city library' },
    paragraphs: [
      [
        [
          'Die Stadtbibliothek ist mein Lieblingsort am Samstag.',
          'The city library is my favourite place on Saturdays.',
        ],
        ['Ein Ausweis kostet nur fünfzehn Euro im Jahr.', 'A library card costs only fifteen euros a year.'],
        [
          'Damit kann man Bücher, Filme und sogar Brettspiele ausleihen.',
          'With it you can borrow books, films and even board games.',
        ],
      ],
      [
        [
          'Es gibt auch eine Ecke mit Büchern für Deutschlerner.',
          'There is also a corner with books for German learners.',
        ],
        [
          'Dort habe ich einfache Romane gefunden, die mir sehr gefallen.',
          'There I found simple novels that I really like.',
        ],
        [
          'Jeden Mittwoch trifft sich dort außerdem ein Sprachcafé.',
          'A language café also meets there every Wednesday.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wie viel kostet der Ausweis?',
        options: ['Fünf Euro', 'Fünfzehn Euro im Jahr', 'Er ist kostenlos'],
        answer: 1,
      },
      {
        q: 'Was kann man ausleihen?',
        options: ['Bücher, Filme und Brettspiele', 'Nur Bücher', 'Fahrräder'],
        answer: 0,
      },
      { q: 'Was gibt es jeden Mittwoch?', options: ['Ein Konzert', 'Einen Flohmarkt', 'Ein Sprachcafé'], answer: 2 },
    ],
  },
  {
    id: 'r-a2-fitness-kuendigen',
    level: 'A2',
    tags: ['everyday'],
    icon: 'football',
    title: { de: 'Den Vertrag kündigen', en: 'Cancelling the contract' },
    paragraphs: [
      [
        ['Ich war seit Monaten nicht mehr im Fitnessstudio.', 'I had not been to the gym for months.'],
        ['Trotzdem habe ich jeden Monat dreißig Euro bezahlt.', 'Still, I paid thirty euros every month.'],
        ['Also wollte ich den Vertrag kündigen.', 'So I wanted to cancel the contract.'],
      ],
      [
        [
          'Im Vertrag stand, dass die Kündigungsfrist drei Monate ist.',
          'The contract said that the notice period is three months.',
        ],
        [
          'Ich habe einen Brief geschrieben und ihn per Einschreiben geschickt.',
          'I wrote a letter and sent it by registered post.',
        ],
        ['Nach einer Woche habe ich eine Bestätigung bekommen.', 'After a week I got a confirmation.'],
      ],
    ],
    questions: [
      {
        q: 'Wie viel hat die Person pro Monat bezahlt?',
        options: ['Dreißig Euro', 'Dreizehn Euro', 'Fünfzig Euro'],
        answer: 0,
      },
      { q: 'Wie lang ist die Kündigungsfrist?', options: ['Ein Monat', 'Drei Monate', 'Ein Jahr'], answer: 1 },
      {
        q: 'Wie hat die Person den Brief geschickt?',
        options: ['Per E-Mail', 'Per Fax', 'Per Einschreiben'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-zahnarzt',
    level: 'A2',
    tags: ['everyday'],
    icon: 'weak',
    title: { de: 'Beim Zahnarzt', en: 'At the dentist' },
    paragraphs: [
      [
        [
          'Seit Tagen hatte ich Zahnschmerzen, wenn ich etwas Kaltes getrunken habe.',
          'For days I had toothache whenever I drank something cold.',
        ],
        ['Die Zahnärztin hat ein Loch gefunden.', 'The dentist found a cavity.'],
        ['Sie hat es sofort gefüllt, und es hat nicht wehgetan.', 'She filled it straight away, and it did not hurt.'],
      ],
      [
        [
          'Danach hat sie mir eine professionelle Zahnreinigung empfohlen.',
          'Afterwards she recommended a professional teeth cleaning.',
        ],
        [
          'Die kostet etwa achtzig Euro, und die Krankenkasse zahlt nur einen Teil.',
          'It costs about eighty euros, and the health insurance only pays part of it.',
        ],
        ['Ich habe trotzdem einen Termin gemacht.', 'I made an appointment anyway.'],
      ],
    ],
    questions: [
      {
        q: 'Wann hatte die Person Schmerzen?',
        options: ['Beim Schlafen', 'Bei kalten Getränken', 'Beim Sport'],
        answer: 1,
      },
      { q: 'Was hat die Zahnärztin gefunden?', options: ['Ein Loch', 'Nichts', 'Einen kaputten Zahn'], answer: 0 },
      {
        q: 'Wer zahlt die Zahnreinigung?',
        options: ['Die Krankenkasse komplett', 'Der Arbeitgeber', 'Zum Teil die Krankenkasse'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-bewerbung',
    level: 'A2',
    tags: ['work'],
    icon: 'writing',
    title: { de: 'Das Vorstellungsgespräch', en: 'The job interview' },
    paragraphs: [
      [
        [
          'Letzte Woche hatte Ahmad ein Vorstellungsgespräch bei einer Logistikfirma.',
          'Last week Ahmad had a job interview with a logistics company.',
        ],
        ['Er hat sich gut vorbereitet und war pünktlich.', 'He prepared well and was on time.'],
        ['Zwei Personen haben ihm Fragen gestellt.', 'Two people asked him questions.'],
      ],
      [
        [
          'Sie wollten wissen, warum er die Stelle möchte und was er schon kann.',
          'They wanted to know why he wants the job and what he can already do.',
        ],
        [
          'Am Ende durfte Ahmad auch Fragen stellen, zum Beispiel zu den Arbeitszeiten.',
          'At the end Ahmad was also allowed to ask questions, for example about working hours.',
        ],
        ['Gestern haben sie angerufen: Er hat die Stelle!', 'Yesterday they called: he got the job!'],
      ],
    ],
    questions: [
      {
        q: 'Bei welcher Firma war das Gespräch?',
        options: ['Bei einer Bank', 'Bei einer Logistikfirma', 'Bei einem Hotel'],
        answer: 1,
      },
      {
        q: 'Was hat Ahmad gefragt?',
        options: ['Nach den Arbeitszeiten', 'Nach dem Wetter', 'Nach dem Chef'],
        answer: 0,
      },
      {
        q: 'Wie ist das Gespräch ausgegangen?',
        options: ['Er hat keine Antwort bekommen', 'Er hat abgesagt', 'Er hat die Stelle bekommen'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-kuchen-mitbringen',
    level: 'A2',
    tags: ['work'],
    icon: 'gift',
    title: { de: 'Geburtstag im Büro', en: 'A birthday at the office' },
    paragraphs: [
      [
        [
          'In Deutschland bringt man an seinem Geburtstag oft selbst Kuchen ins Büro mit.',
          'In Germany you often bring cake to the office yourself on your birthday.',
        ],
        ['Das hat mich am Anfang überrascht.', 'That surprised me at first.'],
        [
          'In meinem Heimatland machen das die Kollegen für einen.',
          'In my home country the colleagues do that for you.',
        ],
      ],
      [
        ['Zu meinem Geburtstag habe ich Baklava mitgebracht.', 'For my birthday I brought baklava.'],
        [
          'Um drei Uhr haben sich alle in der Küche getroffen und gesungen.',
          'At three o’clock everyone met in the kitchen and sang.',
        ],
        ['Nach zehn Minuten war kein Stück mehr übrig.', 'After ten minutes there was not a single piece left.'],
      ],
    ],
    questions: [
      {
        q: 'Wer bringt in Deutschland den Kuchen mit?',
        options: ['Das Geburtstagskind', 'Der Chef', 'Die Kantine'],
        answer: 0,
      },
      { q: 'Was hat die Person mitgebracht?', options: ['Schokolade', 'Pizza', 'Baklava'], answer: 2 },
      { q: 'Wo haben sich alle getroffen?', options: ['Im Meetingraum', 'In der Küche', 'Draußen'], answer: 1 },
    ],
  },
  {
    id: 'r-a2-urlaub-beantragen',
    level: 'A2',
    tags: ['work'],
    icon: 'today',
    title: { de: 'Urlaub beantragen', en: 'Requesting leave' },
    paragraphs: [
      [
        ['Ich habe 28 Urlaubstage im Jahr.', 'I have 28 days of holiday a year.'],
        [
          'Im Sommer möchte ich drei Wochen meine Familie besuchen.',
          'In summer I would like to visit my family for three weeks.',
        ],
        ['Deshalb habe ich schon im Februar Urlaub beantragt.', 'That is why I already requested leave in February.'],
      ],
      [
        ['In unserer Firma macht man das in einem Online-System.', 'In our company you do that in an online system.'],
        ['Meine Chefin musste den Antrag genehmigen.', 'My boss had to approve the request.'],
        [
          'Zum Glück hatte im Juli niemand anderes aus meinem Team Urlaub.',
          'Luckily nobody else on my team was on holiday in July.',
        ],
      ],
    ],
    questions: [
      { q: 'Wie viele Urlaubstage hat die Person?', options: ['28', '20', '30'], answer: 0 },
      { q: 'Wann hat die Person den Urlaub beantragt?', options: ['Im Juli', 'Im Februar', 'Im Dezember'], answer: 1 },
      { q: 'Wer musste den Antrag genehmigen?', options: ['Die Kollegen', 'Die Familie', 'Die Chefin'], answer: 2 },
    ],
  },
  {
    id: 'r-a2-weihnachtsmarkt',
    level: 'A2',
    tags: ['everyday'],
    icon: 'gift',
    title: { de: 'Auf dem Weihnachtsmarkt', en: 'At the Christmas market' },
    paragraphs: [
      [
        [
          'Im Dezember gibt es in fast jeder Stadt einen Weihnachtsmarkt.',
          'In December almost every town has a Christmas market.',
        ],
        ['Es riecht nach gebrannten Mandeln und Glühwein.', 'It smells of roasted almonds and mulled wine.'],
        ['Man trinkt aus einer Tasse, für die man Pfand bezahlt.', 'You drink from a mug that you pay a deposit for.'],
      ],
      [
        ['Mit meinem Team bin ich nach der Arbeit dorthin gegangen.', 'I went there with my team after work.'],
        ['Es war kalt, aber die Stimmung war wunderbar.', 'It was cold, but the atmosphere was wonderful.'],
        ['Die Tasse habe ich als Erinnerung behalten.', 'I kept the mug as a souvenir.'],
      ],
    ],
    questions: [
      { q: 'Wann gibt es Weihnachtsmärkte?', options: ['Im Dezember', 'Im Sommer', 'Zu Ostern'], answer: 0 },
      { q: 'Mit wem war die Person dort?', options: ['Mit der Familie', 'Mit dem Team', 'Allein'], answer: 1 },
      { q: 'Was hat die Person behalten?', options: ['Eine Mandel', 'Ein Foto', 'Die Tasse'], answer: 2 },
    ],
  },
  {
    id: 'r-a2-sonntag',
    level: 'A2',
    tags: ['everyday'],
    icon: 'sun',
    title: { de: 'Sonntags ist alles zu', en: 'On Sundays everything is closed' },
    paragraphs: [
      [
        ['Mein erster Sonntag in Deutschland war eine Überraschung.', 'My first Sunday in Germany was a surprise.'],
        [
          'Ich wollte einkaufen, aber alle Supermärkte waren geschlossen.',
          'I wanted to go shopping, but all the supermarkets were closed.',
        ],
        ['Nur eine Bäckerei und die Tankstelle hatten offen.', 'Only a bakery and the petrol station were open.'],
      ],
      [
        [
          'Jetzt kaufe ich immer am Samstag für das ganze Wochenende ein.',
          'Now I always shop on Saturday for the whole weekend.',
        ],
        ['Inzwischen mag ich den ruhigen Sonntag sogar.', 'Meanwhile I even like the quiet Sunday.'],
        ['Ich gehe spazieren oder treffe Freunde zum Frühstück.', 'I go for a walk or meet friends for breakfast.'],
      ],
    ],
    questions: [
      {
        q: 'Was war am ersten Sonntag das Problem?',
        options: ['Die Supermärkte waren zu', 'Es hat geregnet', 'Der Bus ist nicht gefahren'],
        answer: 0,
      },
      { q: 'Was hatte offen?', options: ['Ein Kaufhaus', 'Die Post', 'Eine Bäckerei und die Tankstelle'], answer: 2 },
      { q: 'Wann kauft die Person jetzt ein?', options: ['Am Sonntag', 'Am Samstag', 'Am Montag'], answer: 1 },
    ],
  },
  {
    id: 'r-a2-wandern',
    level: 'A2',
    tags: ['everyday'],
    icon: 'leaf',
    title: { de: 'Wandern im Taunus', en: 'Hiking in the Taunus' },
    paragraphs: [
      [
        ['Am Sonntag sind wir mit dem Zug in den Taunus gefahren.', 'On Sunday we took the train to the Taunus hills.'],
        ['Wir sind fünf Stunden gewandert und hatten tolles Wetter.', 'We hiked for five hours and had great weather.'],
        ['Unterwegs haben wir viele andere Wanderer getroffen.', 'On the way we met many other hikers.'],
      ],
      [
        [
          'Alle haben „Hallo“ oder „Servus“ gesagt, obwohl wir uns nicht kannten.',
          'Everyone said "Hello" or "Servus" although we did not know each other.',
        ],
        ['Oben auf dem Berg gab es eine Hütte mit Kuchen.', 'At the top of the mountain there was a hut with cake.'],
        [
          'Am Abend hatte ich Muskelkater, aber ich will bald wieder wandern.',
          'In the evening my muscles were sore, but I want to go hiking again soon.',
        ],
      ],
    ],
    questions: [
      { q: 'Wie lange sind sie gewandert?', options: ['Fünf Stunden', 'Eine Stunde', 'Zwei Tage'], answer: 0 },
      {
        q: 'Was haben die anderen Wanderer gemacht?',
        options: ['Sie haben gesungen', 'Sie haben gegrüßt', 'Sie haben nichts gesagt'],
        answer: 1,
      },
      {
        q: 'Was gab es oben auf dem Berg?',
        options: ['Ein Hotel', 'Einen Kiosk mit Zeitungen', 'Eine Hütte mit Kuchen'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-jobsuche',
    level: 'A2',
    tags: ['work'],
    icon: 'work',
    title: { de: 'Auf Jobsuche', en: 'Looking for a job' },
    paragraphs: [
      [
        ['Lina sucht eine Stelle als Krankenpflegerin.', 'Lina is looking for a job as a nurse.'],
        ['Sie hat ihre Ausbildung in Marokko gemacht.', 'She did her training in Morocco.'],
        [
          'Damit sie in Deutschland arbeiten darf, muss die Ausbildung anerkannt werden.',
          'So that she is allowed to work in Germany, her training has to be recognised.',
        ],
      ],
      [
        [
          'Sie hat alle Dokumente übersetzen lassen und an eine Behörde geschickt.',
          'She had all the documents translated and sent them to an authority.',
        ],
        ['Außerdem braucht sie ein B2-Zertifikat in Deutsch.', 'She also needs a B2 certificate in German.'],
        [
          'Jetzt lernt sie jeden Abend und hofft, dass sie bald anfangen kann.',
          'Now she studies every evening and hopes she can start soon.',
        ],
      ],
    ],
    questions: [
      { q: 'Welchen Beruf hat Lina?', options: ['Lehrerin', 'Krankenpflegerin', 'Köchin'], answer: 1 },
      {
        q: 'Was muss mit ihrer Ausbildung passieren?',
        options: ['Sie muss anerkannt werden', 'Sie muss wiederholt werden', 'Nichts'],
        answer: 0,
      },
      { q: 'Welches Zertifikat braucht Lina?', options: ['A2', 'C1', 'B2'], answer: 2 },
    ],
  },
  {
    id: 'r-a2-kita',
    level: 'A2',
    tags: ['everyday'],
    icon: 'heart',
    title: { de: 'Ein Platz in der Kita', en: 'A place at nursery' },
    paragraphs: [
      [
        ['Unsere Tochter ist jetzt ein Jahr alt.', 'Our daughter is now one year old.'],
        [
          'Weil wir beide arbeiten, brauchen wir einen Platz in einer Kita.',
          'Because we both work, we need a place at a nursery.',
        ],
        ['Wir haben uns schon vor der Geburt angemeldet.', 'We registered even before she was born.'],
      ],
      [
        [
          'Trotzdem haben wir erst nach acht Monaten eine Zusage bekommen.',
          'Even so, we only got a confirmation after eight months.',
        ],
        [
          'Die ersten zwei Wochen waren für sie schwer, weil alles neu war.',
          'The first two weeks were hard for her because everything was new.',
        ],
        [
          'Jetzt geht sie gern hin und spricht schon ihre ersten deutschen Wörter.',
          'Now she likes going and already says her first German words.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Warum brauchen die Eltern einen Kita-Platz?',
        options: ['Sie arbeiten beide', 'Sie ziehen um', 'Die Oma ist krank'],
        answer: 0,
      },
      { q: 'Wann haben sie eine Zusage bekommen?', options: ['Sofort', 'Nach acht Monaten', 'Nie'], answer: 1 },
      {
        q: 'Wie geht es der Tochter jetzt?',
        options: ['Sie weint jeden Tag', 'Sie bleibt zu Hause', 'Sie geht gern hin'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a2-laptop-kaputt',
    level: 'A2',
    tags: ['work'],
    icon: 'code',
    title: { de: 'Der Laptop ist kaputt', en: 'The laptop is broken' },
    paragraphs: [
      [
        ['Heute Morgen ist mein Laptop nicht mehr angegangen.', 'This morning my laptop would not turn on.'],
        ['Ich habe sofort die IT-Abteilung angerufen.', 'I called the IT department straight away.'],
        [
          'Der Kollege hat gesagt, dass ich ein Ticket schreiben soll.',
          'The colleague said that I should write a ticket.',
        ],
      ],
      [
        ['Zum Glück hatte er noch einen alten Laptop für mich.', 'Luckily he still had an old laptop for me.'],
        [
          'Ich konnte damit meine E-Mails lesen und an Meetings teilnehmen.',
          'With it I could read my emails and join meetings.',
        ],
        ['Nach zwei Tagen habe ich ein neues Gerät bekommen.', 'After two days I got a new device.'],
      ],
    ],
    questions: [
      { q: 'Wen hat die Person angerufen?', options: ['Die IT-Abteilung', 'Den Chef', 'Einen Laden'], answer: 0 },
      { q: 'Was sollte die Person schreiben?', options: ['Einen Brief', 'Eine Beschwerde', 'Ein Ticket'], answer: 2 },
      {
        q: 'Wann hat die Person ein neues Gerät bekommen?',
        options: ['Sofort', 'Nach zwei Tagen', 'Nach einem Monat'],
        answer: 1,
      },
    ],
  },
  {
    id: 'r-a2-flohmarkt',
    level: 'A2',
    tags: ['everyday'],
    icon: 'everyday',
    title: { de: 'Auf dem Flohmarkt', en: 'At the flea market' },
    paragraphs: [
      [
        [
          'Jeden ersten Samstag im Monat gibt es am Fluss einen Flohmarkt.',
          'Every first Saturday of the month there is a flea market by the river.',
        ],
        [
          'Dort verkaufen Leute alte Möbel, Bücher, Kleidung und Geschirr.',
          'People sell old furniture, books, clothes and dishes there.',
        ],
        ['Ich habe eine Lampe für fünf Euro gefunden.', 'I found a lamp for five euros.'],
      ],
      [
        ['Der Verkäufer wollte zuerst acht Euro.', 'The seller wanted eight euros at first.'],
        [
          'Wir haben ein bisschen verhandelt, und am Ende hat er Ja gesagt.',
          'We negotiated a bit, and in the end he said yes.',
        ],
        ['Auf dem Flohmarkt ist Handeln normal und macht Spaß.', 'At the flea market haggling is normal and fun.'],
      ],
    ],
    questions: [
      {
        q: 'Wann ist der Flohmarkt?',
        options: ['Jeden Sonntag', 'Jeden ersten Samstag im Monat', 'Einmal im Jahr'],
        answer: 1,
      },
      { q: 'Was hat die Person gekauft?', options: ['Eine Lampe', 'Ein Buch', 'Eine Jacke'], answer: 0 },
      { q: 'Wie viel wollte der Verkäufer zuerst?', options: ['Fünf Euro', 'Zehn Euro', 'Acht Euro'], answer: 2 },
    ],
  },
  {
    id: 'r-a2-erste-hilfe',
    level: 'A2',
    tags: ['everyday'],
    icon: 'heart',
    title: { de: 'Der Erste-Hilfe-Kurs', en: 'The first aid course' },
    paragraphs: [
      [
        [
          'Wer in Deutschland einen Führerschein machen will, braucht einen Erste-Hilfe-Kurs.',
          'Anyone in Germany who wants to get a driving licence needs a first aid course.',
        ],
        ['Der Kurs dauert einen ganzen Samstag.', 'The course takes a whole Saturday.'],
        ['Wir haben gelernt, was man bei einem Unfall machen muss.', 'We learned what you have to do in an accident.'],
      ],
      [
        ['Die wichtigste Nummer ist die 112.', 'The most important number is 112.'],
        [
          'Wir haben auch an einer Puppe geübt, wie man das Herz massiert.',
          'We also practised on a dummy how to do chest compressions.',
        ],
        [
          'Ich hoffe, dass ich das nie brauche, aber jetzt fühle ich mich sicherer.',
          'I hope I never need it, but now I feel safer.',
        ],
      ],
    ],
    questions: [
      {
        q: 'Wofür braucht man den Kurs?',
        options: ['Für den Führerschein', 'Für die Arbeit', 'Für das Studium'],
        answer: 0,
      },
      { q: 'Welche Nummer ist am wichtigsten?', options: ['110', '112', '911'], answer: 1 },
      { q: 'Woran haben sie geübt?', options: ['An einem Kollegen', 'Am Computer', 'An einer Puppe'], answer: 2 },
    ],
  },
  {
    id: 'r-a2-sprachtandem',
    level: 'A2',
    tags: ['everyday'],
    icon: 'translate',
    title: { de: 'Mein Sprachtandem', en: 'My language tandem' },
    paragraphs: [
      [
        ['Seit drei Monaten habe ich einen Tandempartner.', 'For three months I have had a tandem partner.'],
        ['Er heißt Felix und möchte Türkisch lernen.', 'His name is Felix and he wants to learn Turkish.'],
        ['Wir treffen uns jeden Donnerstag in einem Café.', 'We meet every Thursday in a café.'],
      ],
      [
        [
          'Eine Stunde sprechen wir Deutsch und eine Stunde Türkisch.',
          'We speak German for one hour and Turkish for one hour.',
        ],
        [
          'Felix korrigiert meine Fehler, aber nur die wichtigen.',
          'Felix corrects my mistakes, but only the important ones.',
        ],
        ['Inzwischen sind wir richtig gute Freunde geworden.', 'In the meantime we have become really good friends.'],
      ],
    ],
    questions: [
      { q: 'Welche Sprache lernt Felix?', options: ['Englisch', 'Arabisch', 'Türkisch'], answer: 2 },
      { q: 'Wie oft treffen sie sich?', options: ['Jeden Donnerstag', 'Jeden Tag', 'Einmal im Monat'], answer: 0 },
      { q: 'Welche Fehler korrigiert Felix?', options: ['Alle', 'Nur die wichtigen', 'Keine'], answer: 1 },
    ],
  },
];
