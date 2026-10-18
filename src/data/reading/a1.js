// A1 reading texts. Format and rules: src/data/reading.js.

export const A1 = [
  {
    id: 'r-a1-ich-bin-neu',
    level: 'A1',
    tags: ['everyday'],
    icon: 'community',
    title: { de: 'Ich bin neu hier', en: 'I am new here' },
    paragraphs: [
      [
        ['Hallo, ich heiße Ali.', 'Hello, my name is Ali.'],
        ['Ich komme aus Baku und wohne jetzt in Berlin.', 'I come from Baku and now live in Berlin.'],
        ['Ich bin 29 Jahre alt.', 'I am 29 years old.'],
      ],
      [
        ['Ich arbeite als Programmierer.', 'I work as a programmer.'],
        ['Mein Deutsch ist noch nicht so gut.', 'My German is not so good yet.'],
        ['Aber ich lerne jeden Tag ein bisschen.', 'But I learn a little every day.'],
      ],
    ],
    questions: [
      { q: 'Woher kommt Ali?', options: ['Aus Berlin', 'Aus Baku', 'Aus Wien'], answer: 1 },
      { q: 'Was ist Ali von Beruf?', options: ['Lehrer', 'Arzt', 'Programmierer'], answer: 2 },
      { q: 'Wie oft lernt Ali Deutsch?', options: ['Jeden Tag', 'Nie', 'Einmal im Monat'], answer: 0 },
    ],
  },
  {
    id: 'r-a1-mein-tag',
    level: 'A1',
    tags: ['everyday'],
    icon: 'sun',
    title: { de: 'Mein Tag', en: 'My day' },
    paragraphs: [
      [
        ['Ich stehe um sieben Uhr auf.', 'I get up at seven o’clock.'],
        ['Ich trinke einen Kaffee und esse ein Brot.', 'I drink a coffee and eat some bread.'],
        ['Um acht Uhr fahre ich mit dem Bus zur Arbeit.', 'At eight o’clock I take the bus to work.'],
      ],
      [
        ['Ich arbeite bis fünf Uhr.', 'I work until five o’clock.'],
        ['Am Abend koche ich und sehe fern.', 'In the evening I cook and watch TV.'],
        ['Um elf Uhr gehe ich ins Bett.', 'At eleven o’clock I go to bed.'],
      ],
    ],
    questions: [
      { q: 'Wann steht die Person auf?', options: ['Um sechs Uhr', 'Um sieben Uhr', 'Um acht Uhr'], answer: 1 },
      { q: 'Wie fährt die Person zur Arbeit?', options: ['Mit dem Bus', 'Mit dem Auto', 'Mit dem Fahrrad'], answer: 0 },
      {
        q: 'Was macht die Person am Abend?',
        options: ['Sie geht schwimmen', 'Sie arbeitet', 'Sie kocht und sieht fern'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a1-supermarkt',
    level: 'A1',
    tags: ['everyday'],
    icon: 'everyday',
    title: { de: 'Im Supermarkt', en: 'At the supermarket' },
    paragraphs: [
      [
        ['Heute ist Samstag.', 'Today is Saturday.'],
        ['Maria geht in den Supermarkt.', 'Maria goes to the supermarket.'],
        ['Sie braucht Milch, Eier, Brot und Äpfel.', 'She needs milk, eggs, bread and apples.'],
      ],
      [
        ['Die Äpfel kosten zwei Euro.', 'The apples cost two euros.'],
        ['An der Kasse bezahlt sie mit Karte.', 'At the checkout she pays by card.'],
        ['Sie hat keine Tasche und kauft eine Tüte.', 'She has no bag and buys a carrier bag.'],
      ],
    ],
    questions: [
      { q: 'Wann geht Maria einkaufen?', options: ['Am Montag', 'Am Samstag', 'Am Sonntag'], answer: 1 },
      { q: 'Wie viel kosten die Äpfel?', options: ['Zwei Euro', 'Fünf Euro', 'Ein Euro'], answer: 0 },
      { q: 'Wie bezahlt Maria?', options: ['Bar', 'Mit Karte', 'Gar nicht'], answer: 1 },
    ],
  },
  {
    id: 'r-a1-baeckerei',
    level: 'A1',
    tags: ['everyday'],
    icon: 'coffee',
    title: { de: 'In der Bäckerei', en: 'At the bakery' },
    paragraphs: [
      [
        ['„Guten Morgen! Was möchten Sie?“', '"Good morning! What would you like?"'],
        [
          '„Ich möchte vier Brötchen und ein Croissant, bitte.“',
          '"I would like four bread rolls and a croissant, please."',
        ],
        ['„Sonst noch etwas?“', '"Anything else?"'],
      ],
      [
        ['„Ja, einen Kaffee zum Mitnehmen.“', '"Yes, a coffee to go."'],
        ['„Das macht fünf Euro zwanzig.“', '"That comes to five euros twenty."'],
        ['„Hier, bitte. Schönen Tag noch!“', '"Here you are. Have a nice day!"'],
      ],
    ],
    questions: [
      { q: 'Wie viele Brötchen kauft die Person?', options: ['Zwei', 'Vier', 'Sechs'], answer: 1 },
      { q: 'Was trinkt die Person?', options: ['Tee', 'Saft', 'Kaffee'], answer: 2 },
      { q: 'Wie viel kostet alles?', options: ['5,20 Euro', '2,50 Euro', '10 Euro'], answer: 0 },
    ],
  },
  {
    id: 'r-a1-familie',
    level: 'A1',
    tags: ['everyday'],
    icon: 'heart',
    title: { de: 'Meine Familie', en: 'My family' },
    paragraphs: [
      [
        ['Meine Familie ist nicht groß.', 'My family is not big.'],
        ['Ich habe eine Schwester und einen Bruder.', 'I have a sister and a brother.'],
        ['Meine Schwester heißt Aylin und ist Ärztin.', 'My sister is called Aylin and is a doctor.'],
      ],
      [
        ['Mein Bruder ist noch Student.', 'My brother is still a student.'],
        ['Meine Eltern wohnen in Hamburg.', 'My parents live in Hamburg.'],
        ['Am Sonntag telefoniere ich immer mit meiner Mutter.', 'On Sundays I always phone my mother.'],
      ],
    ],
    questions: [
      { q: 'Was ist Aylin von Beruf?', options: ['Studentin', 'Ärztin', 'Lehrerin'], answer: 1 },
      { q: 'Wo wohnen die Eltern?', options: ['In Hamburg', 'In München', 'In Köln'], answer: 0 },
      {
        q: 'Wann telefoniert die Person mit der Mutter?',
        options: ['Am Montag', 'Jeden Abend', 'Am Sonntag'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a1-wohnung',
    level: 'A1',
    tags: ['everyday'],
    icon: 'everyday',
    title: { de: 'Meine Wohnung', en: 'My flat' },
    paragraphs: [
      [
        ['Meine Wohnung hat zwei Zimmer, eine Küche und ein Bad.', 'My flat has two rooms, a kitchen and a bathroom.'],
        ['Das Wohnzimmer ist hell und groß.', 'The living room is bright and big.'],
        ['Das Schlafzimmer ist klein.', 'The bedroom is small.'],
      ],
      [
        ['Die Wohnung liegt im dritten Stock.', 'The flat is on the third floor.'],
        ['Leider gibt es keinen Aufzug.', 'Unfortunately there is no lift.'],
        ['Aber ich habe einen Balkon und das finde ich toll.', 'But I have a balcony and I think that is great.'],
      ],
    ],
    questions: [
      { q: 'Wie ist das Wohnzimmer?', options: ['Dunkel und klein', 'Hell und groß', 'Laut und kalt'], answer: 1 },
      { q: 'Wo liegt die Wohnung?', options: ['Im Erdgeschoss', 'Im ersten Stock', 'Im dritten Stock'], answer: 2 },
      { q: 'Was gibt es nicht?', options: ['Einen Aufzug', 'Einen Balkon', 'Eine Küche'], answer: 0 },
    ],
  },
  {
    id: 'r-a1-cafe',
    level: 'A1',
    tags: ['everyday'],
    icon: 'coffee',
    title: { de: 'Im Café', en: 'In the café' },
    paragraphs: [
      [
        ['Lena und Tom sind im Café.', 'Lena and Tom are in the café.'],
        ['Lena bestellt einen Tee und ein Stück Kuchen.', 'Lena orders a tea and a piece of cake.'],
        ['Tom möchte nur ein Wasser.', 'Tom only wants a water.'],
      ],
      [
        ['Sie sprechen über die Arbeit und das Wochenende.', 'They talk about work and the weekend.'],
        ['Am Ende fragt Tom: „Zahlen, bitte!“', 'At the end Tom asks: "The bill, please!"'],
        ['Er bezahlt für beide.', 'He pays for both.'],
      ],
    ],
    questions: [
      { q: 'Was bestellt Lena?', options: ['Kaffee und Brot', 'Tee und Kuchen', 'Wasser'], answer: 1 },
      {
        q: 'Worüber sprechen sie?',
        options: ['Über Arbeit und Wochenende', 'Über Politik', 'Über Fußball'],
        answer: 0,
      },
      { q: 'Wer bezahlt?', options: ['Lena', 'Beide getrennt', 'Tom'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-wetter',
    level: 'A1',
    tags: ['everyday'],
    icon: 'sun',
    title: { de: 'Das Wetter heute', en: 'The weather today' },
    paragraphs: [
      [
        ['Heute ist es kalt und es regnet.', 'Today it is cold and raining.'],
        ['Es sind nur acht Grad.', 'It is only eight degrees.'],
        ['Ich nehme meinen Regenschirm und eine warme Jacke.', 'I take my umbrella and a warm jacket.'],
      ],
      [
        ['Morgen kommt die Sonne.', 'Tomorrow the sun comes out.'],
        ['Dann sind es fünfzehn Grad.', 'Then it will be fifteen degrees.'],
        ['Ich gehe morgen mit meinem Hund in den Park.', 'Tomorrow I am going to the park with my dog.'],
      ],
    ],
    questions: [
      { q: 'Wie ist das Wetter heute?', options: ['Warm und sonnig', 'Kalt und regnerisch', 'Es schneit'], answer: 1 },
      { q: 'Wie warm ist es morgen?', options: ['Acht Grad', 'Zwanzig Grad', 'Fünfzehn Grad'], answer: 2 },
      {
        q: 'Was macht die Person morgen?',
        options: ['Sie geht in den Park', 'Sie bleibt zu Hause', 'Sie arbeitet'],
        answer: 0,
      },
    ],
  },
  {
    id: 'r-a1-bahnhof',
    level: 'A1',
    tags: ['everyday'],
    icon: 'repeat',
    title: { de: 'Am Bahnhof', en: 'At the station' },
    paragraphs: [
      [
        ['Sara will nach Köln fahren.', 'Sara wants to travel to Cologne.'],
        ['Sie kauft eine Fahrkarte am Automaten.', 'She buys a ticket at the machine.'],
        ['Die Fahrkarte kostet 39 Euro.', 'The ticket costs 39 euros.'],
      ],
      [
        ['Der Zug fährt um 10:15 Uhr von Gleis 4.', 'The train leaves at 10:15 from platform 4.'],
        ['Aber heute hat der Zug zehn Minuten Verspätung.', 'But today the train is ten minutes late.'],
        ['Sara kauft noch schnell eine Zeitung.', 'Sara quickly buys a newspaper.'],
      ],
    ],
    questions: [
      { q: 'Wohin fährt Sara?', options: ['Nach Köln', 'Nach Bonn', 'Nach Berlin'], answer: 0 },
      { q: 'Von welchem Gleis fährt der Zug?', options: ['Gleis 2', 'Gleis 4', 'Gleis 10'], answer: 1 },
      {
        q: 'Was ist das Problem?',
        options: ['Der Zug fällt aus', 'Die Karte ist zu teuer', 'Der Zug hat Verspätung'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a1-beim-arzt',
    level: 'A1',
    tags: ['everyday'],
    icon: 'weak',
    title: { de: 'Beim Arzt', en: 'At the doctor’s' },
    paragraphs: [
      [
        ['Jonas hat Kopfschmerzen und Fieber.', 'Jonas has a headache and a fever.'],
        ['Er ruft beim Arzt an und bekommt einen Termin.', 'He calls the doctor and gets an appointment.'],
        ['Der Termin ist heute um drei Uhr.', 'The appointment is today at three o’clock.'],
      ],
      [
        ['Die Ärztin sagt: „Sie haben eine Grippe.“', 'The doctor says: "You have the flu."'],
        ['Jonas muss drei Tage im Bett bleiben.', 'Jonas has to stay in bed for three days.'],
        ['Er soll viel Wasser und Tee trinken.', 'He should drink a lot of water and tea.'],
      ],
    ],
    questions: [
      { q: 'Was hat Jonas?', options: ['Bauchschmerzen', 'Kopfschmerzen und Fieber', 'Zahnschmerzen'], answer: 1 },
      { q: 'Wann ist der Termin?', options: ['Heute um drei', 'Morgen früh', 'Nächste Woche'], answer: 0 },
      { q: 'Was soll Jonas trinken?', options: ['Kaffee', 'Bier', 'Wasser und Tee'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-mein-job',
    level: 'A1',
    tags: ['work'],
    icon: 'work',
    title: { de: 'Mein Job', en: 'My job' },
    paragraphs: [
      [
        ['Ich arbeite in einem Büro in Frankfurt.', 'I work in an office in Frankfurt.'],
        ['Meine Firma ist klein und hat zwanzig Mitarbeiter.', 'My company is small and has twenty employees.'],
        ['Ich arbeite von Montag bis Freitag.', 'I work from Monday to Friday.'],
      ],
      [
        ['Am Mittwoch arbeite ich von zu Hause.', 'On Wednesdays I work from home.'],
        ['Meine Kollegen sind nett und hilfsbereit.', 'My colleagues are nice and helpful.'],
        ['Die Arbeit macht mir Spaß.', 'I enjoy the work.'],
      ],
    ],
    questions: [
      { q: 'Wo arbeitet die Person?', options: ['In Frankfurt', 'In Stuttgart', 'In Dresden'], answer: 0 },
      { q: 'Wie viele Mitarbeiter hat die Firma?', options: ['Zwei', 'Zweihundert', 'Zwanzig'], answer: 2 },
      { q: 'Wann arbeitet die Person zu Hause?', options: ['Am Montag', 'Am Mittwoch', 'Am Freitag'], answer: 1 },
    ],
  },
  {
    id: 'r-a1-wochenende',
    level: 'A1',
    tags: ['everyday'],
    icon: 'bicycle',
    title: { de: 'Das Wochenende', en: 'The weekend' },
    paragraphs: [
      [
        ['Am Samstag schlafe ich lange.', 'On Saturday I sleep in.'],
        ['Dann fahre ich mit dem Fahrrad zum Markt.', 'Then I cycle to the market.'],
        ['Dort kaufe ich Obst und Gemüse.', 'There I buy fruit and vegetables.'],
      ],
      [
        ['Am Sonntag treffe ich meine Freunde.', 'On Sunday I meet my friends.'],
        ['Wir frühstücken zusammen und gehen spazieren.', 'We have breakfast together and go for a walk.'],
        ['Am Abend lese ich ein Buch.', 'In the evening I read a book.'],
      ],
    ],
    questions: [
      { q: 'Wie fährt die Person zum Markt?', options: ['Mit dem Fahrrad', 'Mit dem Auto', 'Zu Fuß'], answer: 0 },
      {
        q: 'Was macht die Person am Sonntag?',
        options: ['Sie arbeitet', 'Sie trifft Freunde', 'Sie putzt'],
        answer: 1,
      },
      { q: 'Was macht die Person am Sonntagabend?', options: ['Sie kocht', 'Sie tanzt', 'Sie liest'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-hobbys',
    level: 'A1',
    tags: ['everyday'],
    icon: 'music',
    title: { de: 'Meine Hobbys', en: 'My hobbies' },
    paragraphs: [
      [
        ['Ich spiele gern Gitarre.', 'I like playing the guitar.'],
        ['Zweimal pro Woche gehe ich ins Fitnessstudio.', 'Twice a week I go to the gym.'],
        ['Ich koche auch sehr gern.', 'I also really like cooking.'],
      ],
      [
        ['Mein Lieblingsessen ist Plov.', 'My favourite food is plov.'],
        ['Ich koche es oft für meine Freunde.', 'I often cook it for my friends.'],
        ['Fußball finde ich langweilig.', 'I find football boring.'],
      ],
    ],
    questions: [
      { q: 'Welches Instrument spielt die Person?', options: ['Klavier', 'Gitarre', 'Geige'], answer: 1 },
      {
        q: 'Wie oft geht die Person ins Fitnessstudio?',
        options: ['Zweimal pro Woche', 'Jeden Tag', 'Nie'],
        answer: 0,
      },
      { q: 'Was findet die Person langweilig?', options: ['Kochen', 'Musik', 'Fußball'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-geburtstag',
    level: 'A1',
    tags: ['everyday'],
    icon: 'gift',
    title: { de: 'Eine Einladung', en: 'An invitation' },
    paragraphs: [
      [
        ['Liebe Anna, am Freitag habe ich Geburtstag.', 'Dear Anna, on Friday it is my birthday.'],
        ['Ich mache eine kleine Party bei mir zu Hause.', 'I am having a small party at my place.'],
        ['Die Party beginnt um acht Uhr.', 'The party starts at eight o’clock.'],
      ],
      [
        ['Kannst du einen Salat mitbringen?', 'Can you bring a salad?'],
        ['Bitte antworte bis Mittwoch.', 'Please reply by Wednesday.'],
        ['Viele Grüße, deine Nina', 'Best wishes, Nina'],
      ],
    ],
    questions: [
      { q: 'Wann hat Nina Geburtstag?', options: ['Am Mittwoch', 'Am Freitag', 'Am Samstag'], answer: 1 },
      { q: 'Was soll Anna mitbringen?', options: ['Einen Salat', 'Einen Kuchen', 'Getränke'], answer: 0 },
      { q: 'Bis wann soll Anna antworten?', options: ['Bis Freitag', 'Bis Sonntag', 'Bis Mittwoch'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-mittagspause',
    level: 'A1',
    tags: ['work'],
    icon: 'coffee',
    title: { de: 'Die Mittagspause', en: 'The lunch break' },
    paragraphs: [
      [
        ['Um zwölf Uhr hat Emre Mittagspause.', 'At twelve o’clock Emre has his lunch break.'],
        ['Er geht mit zwei Kollegen in die Kantine.', 'He goes to the canteen with two colleagues.'],
        ['Heute gibt es Nudeln mit Tomatensoße.', 'Today there is pasta with tomato sauce.'],
      ],
      [
        ['Das Essen kostet nur vier Euro.', 'The food costs only four euros.'],
        ['Nach dem Essen trinken sie einen Kaffee.', 'After the meal they drink a coffee.'],
        ['Um eins arbeiten alle wieder.', 'At one everyone is working again.'],
      ],
    ],
    questions: [
      { q: 'Wohin geht Emre?', options: ['In ein Restaurant', 'Nach Hause', 'In die Kantine'], answer: 2 },
      { q: 'Was gibt es heute?', options: ['Nudeln', 'Pizza', 'Suppe'], answer: 0 },
      { q: 'Wie lange ist die Pause?', options: ['Eine halbe Stunde', 'Eine Stunde', 'Zwei Stunden'], answer: 1 },
    ],
  },
  {
    id: 'r-a1-restaurant',
    level: 'A1',
    tags: ['everyday'],
    icon: 'everyday',
    title: { de: 'Im Restaurant', en: 'At the restaurant' },
    paragraphs: [
      [
        ['Wir sind zu dritt im Restaurant.', 'There are three of us at the restaurant.'],
        ['Der Kellner bringt die Speisekarte.', 'The waiter brings the menu.'],
        ['Ich nehme die Suppe und danach einen Fisch.', 'I take the soup and then a fish.'],
      ],
      [
        ['Mein Freund isst kein Fleisch.', 'My friend does not eat meat.'],
        ['Er bestellt eine Gemüsepfanne.', 'He orders a vegetable stir-fry.'],
        ['Das Essen ist sehr lecker.', 'The food is very tasty.'],
      ],
    ],
    questions: [
      { q: 'Wie viele Personen sind im Restaurant?', options: ['Zwei', 'Drei', 'Vier'], answer: 1 },
      { q: 'Was isst der Freund nicht?', options: ['Fleisch', 'Gemüse', 'Brot'], answer: 0 },
      { q: 'Wie ist das Essen?', options: ['Zu salzig', 'Kalt', 'Sehr lecker'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-bus',
    level: 'A1',
    tags: ['everyday'],
    icon: 'repeat',
    title: { de: 'Der Bus kommt nicht', en: 'The bus is not coming' },
    paragraphs: [
      [
        ['Es ist Montagmorgen.', 'It is Monday morning.'],
        ['Petra wartet an der Haltestelle.', 'Petra is waiting at the bus stop.'],
        ['Der Bus kommt nicht.', 'The bus does not come.'],
      ],
      [
        [
          'Sie schreibt ihrem Chef eine Nachricht: „Ich komme später.“',
          'She writes her boss a message: "I will be late."',
        ],
        ['Dann nimmt sie ein Taxi.', 'Then she takes a taxi.'],
        ['Sie ist um neun Uhr im Büro.', 'She is in the office at nine o’clock.'],
      ],
    ],
    questions: [
      { q: 'Welcher Tag ist es?', options: ['Montag', 'Freitag', 'Sonntag'], answer: 0 },
      { q: 'Wem schreibt Petra?', options: ['Ihrer Mutter', 'Ihrem Chef', 'Einer Freundin'], answer: 1 },
      { q: 'Wie fährt Petra am Ende?', options: ['Mit der U-Bahn', 'Mit dem Fahrrad', 'Mit dem Taxi'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-termin',
    level: 'A1',
    tags: ['everyday'],
    icon: 'today',
    title: { de: 'Einen Termin machen', en: 'Making an appointment' },
    paragraphs: [
      [
        ['„Friseursalon Schneider, guten Tag.“', '"Schneider hair salon, good afternoon."'],
        ['„Guten Tag, ich möchte einen Termin.“', '"Good afternoon, I would like an appointment."'],
        ['„Geht Donnerstag um 14 Uhr?“', '"Does Thursday at 2 p.m. work?"'],
      ],
      [
        ['„Nein, da arbeite ich. Geht es auch am Samstag?“', '"No, I am working then. Is Saturday possible too?"'],
        ['„Ja, am Samstag um zehn Uhr.“', '"Yes, on Saturday at ten o’clock."'],
        ['„Super, dann bis Samstag!“', '"Great, see you on Saturday!"'],
      ],
    ],
    questions: [
      { q: 'Wo ruft die Person an?', options: ['Beim Arzt', 'Beim Friseur', 'Bei der Bank'], answer: 1 },
      {
        q: 'Warum geht Donnerstag nicht?',
        options: ['Die Person arbeitet', 'Der Salon ist zu', 'Die Person ist krank'],
        answer: 0,
      },
      { q: 'Wann ist der Termin?', options: ['Donnerstag um 14 Uhr', 'Freitag um neun', 'Samstag um zehn'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-kleidung',
    level: 'A1',
    tags: ['everyday'],
    icon: 'everyday',
    title: { de: 'Eine neue Jacke', en: 'A new jacket' },
    paragraphs: [
      [
        ['Der Winter kommt und Daniel braucht eine Jacke.', 'Winter is coming and Daniel needs a jacket.'],
        ['Im Geschäft probiert er eine blaue Jacke an.', 'In the shop he tries on a blue jacket.'],
        ['Sie ist zu klein.', 'It is too small.'],
      ],
      [
        ['Die Verkäuferin bringt eine Jacke in Größe L.', 'The shop assistant brings a jacket in size L.'],
        ['Die passt gut, aber sie ist schwarz.', 'It fits well, but it is black.'],
        ['Daniel kauft sie trotzdem.', 'Daniel buys it anyway.'],
      ],
    ],
    questions: [
      {
        q: 'Warum braucht Daniel eine Jacke?',
        options: ['Der Winter kommt', 'Er hat Geburtstag', 'Seine Jacke ist kaputt'],
        answer: 0,
      },
      {
        q: 'Was ist das Problem mit der blauen Jacke?',
        options: ['Sie ist zu teuer', 'Sie ist zu klein', 'Sie ist hässlich'],
        answer: 1,
      },
      { q: 'Welche Farbe hat die neue Jacke?', options: ['Blau', 'Rot', 'Schwarz'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-telefon',
    level: 'A1',
    tags: ['work'],
    icon: 'chats',
    title: { de: 'Ein Anruf im Büro', en: 'A call at the office' },
    paragraphs: [
      [
        ['Das Telefon klingelt.', 'The phone rings.'],
        ['„Firma Weber, Sie sprechen mit Herrn Yilmaz.“', '"Weber company, you are speaking to Mr Yilmaz."'],
        ['„Hallo, hier ist Frau Klein. Ist Herr Weber da?“', '"Hello, this is Ms Klein. Is Mr Weber there?"'],
      ],
      [
        ['„Nein, er ist leider in einem Meeting.“', '"No, unfortunately he is in a meeting."'],
        ['„Kann er mich später zurückrufen?“', '"Can he call me back later?"'],
        ['„Ja, natürlich. Ich sage es ihm.“', '"Yes, of course. I will tell him."'],
      ],
    ],
    questions: [
      { q: 'Wer ruft an?', options: ['Herr Weber', 'Frau Klein', 'Herr Yilmaz'], answer: 1 },
      { q: 'Wo ist Herr Weber?', options: ['Im Urlaub', 'Zu Hause', 'In einem Meeting'], answer: 2 },
      { q: 'Was möchte Frau Klein?', options: ['Einen Rückruf', 'Einen Termin', 'Eine E-Mail'], answer: 0 },
    ],
  },
  {
    id: 'r-a1-deutschkurs',
    level: 'A1',
    tags: ['everyday'],
    icon: 'book',
    title: { de: 'Der Deutschkurs', en: 'The German course' },
    paragraphs: [
      [
        ['Der Deutschkurs ist am Dienstag und am Donnerstag.', 'The German course is on Tuesday and Thursday.'],
        ['Er beginnt um 18 Uhr und dauert zwei Stunden.', 'It starts at 6 p.m. and lasts two hours.'],
        ['Im Kurs sind zwölf Leute aus acht Ländern.', 'There are twelve people from eight countries in the course.'],
      ],
      [
        ['Die Lehrerin heißt Frau Becker.', 'The teacher is called Ms Becker.'],
        ['Sie spricht langsam und erklärt alles gut.', 'She speaks slowly and explains everything well.'],
        ['Hausaufgaben gibt es jede Woche.', 'There is homework every week.'],
      ],
    ],
    questions: [
      {
        q: 'Wann ist der Kurs?',
        options: ['Montag und Mittwoch', 'Dienstag und Donnerstag', 'Am Wochenende'],
        answer: 1,
      },
      { q: 'Wie lange dauert der Kurs?', options: ['Zwei Stunden', 'Eine Stunde', 'Drei Stunden'], answer: 0 },
      { q: 'Wie spricht Frau Becker?', options: ['Sehr schnell', 'Nur Englisch', 'Langsam'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-nachbarin',
    level: 'A1',
    tags: ['everyday'],
    icon: 'community',
    title: { de: 'Die Nachbarin', en: 'The neighbour' },
    paragraphs: [
      [
        ['Meine Nachbarin heißt Frau Lange.', 'My neighbour is called Ms Lange.'],
        ['Sie ist 75 Jahre alt und sehr freundlich.', 'She is 75 years old and very friendly.'],
        ['Sie hat eine Katze.', 'She has a cat.'],
      ],
      [
        ['Wenn ich nicht zu Hause bin, nimmt sie meine Pakete an.', 'When I am not at home, she takes in my parcels.'],
        ['Ich kaufe manchmal für sie ein.', 'I sometimes do the shopping for her.'],
        ['Dann bekomme ich ein Stück Kuchen.', 'Then I get a piece of cake.'],
      ],
    ],
    questions: [
      { q: 'Wie alt ist Frau Lange?', options: ['57', '75', '85'], answer: 1 },
      { q: 'Was hat Frau Lange?', options: ['Einen Hund', 'Einen Vogel', 'Eine Katze'], answer: 2 },
      {
        q: 'Was macht Frau Lange für die Person?',
        options: ['Sie nimmt Pakete an', 'Sie kocht', 'Sie putzt'],
        answer: 0,
      },
    ],
  },
  {
    id: 'r-a1-uhrzeit',
    level: 'A1',
    tags: ['everyday'],
    icon: 'today',
    title: { de: 'Pünktlich sein', en: 'Being on time' },
    paragraphs: [
      [
        ['In Deutschland ist Pünktlichkeit wichtig.', 'In Germany punctuality is important.'],
        ['Ein Termin um neun bedeutet: Man ist um neun da.', 'An appointment at nine means: you are there at nine.'],
        ['Fünf Minuten zu früh ist gut.', 'Five minutes early is good.'],
      ],
      [
        ['Kommt man zu spät, ruft man an.', 'If you are late, you call.'],
        ['Bei einer Party ist es anders.', 'At a party it is different.'],
        ['Da kommen viele Gäste eine halbe Stunde später.', 'Many guests arrive half an hour later there.'],
      ],
    ],
    questions: [
      { q: 'Was ist in Deutschland wichtig?', options: ['Pünktlichkeit', 'Lautes Sprechen', 'Spät kommen'], answer: 0 },
      {
        q: 'Was macht man, wenn man zu spät kommt?',
        options: ['Nichts', 'Man ruft an', 'Man geht nach Hause'],
        answer: 1,
      },
      {
        q: 'Wann kommen Gäste zu einer Party oft?',
        options: ['Eine Stunde zu früh', 'Genau pünktlich', 'Eine halbe Stunde später'],
        answer: 2,
      },
    ],
  },
  {
    id: 'r-a1-email-kurs',
    level: 'A1',
    tags: ['everyday'],
    icon: 'writing',
    title: { de: 'Eine E-Mail an die Lehrerin', en: 'An email to the teacher' },
    paragraphs: [
      [
        ['Liebe Frau Becker, leider bin ich krank.', 'Dear Ms Becker, unfortunately I am ill.'],
        ['Ich kann heute nicht in den Kurs kommen.', 'I cannot come to the course today.'],
        ['Was sind die Hausaufgaben?', 'What is the homework?'],
      ],
      [
        ['Können Sie mir die Seiten schicken?', 'Can you send me the pages?'],
        ['Am Donnerstag bin ich wieder da.', 'On Thursday I will be back.'],
        ['Viele Grüße, Mehmet', 'Best regards, Mehmet'],
      ],
    ],
    questions: [
      { q: 'Warum schreibt Mehmet?', options: ['Er ist krank', 'Er hat Urlaub', 'Er hat keine Zeit'], answer: 0 },
      { q: 'Was möchte Mehmet wissen?', options: ['Die Uhrzeit', 'Die Hausaufgaben', 'Den Preis'], answer: 1 },
      { q: 'Wann kommt Mehmet wieder?', options: ['Morgen', 'Nächste Woche', 'Am Donnerstag'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-urlaub',
    level: 'A1',
    tags: ['everyday'],
    icon: 'boat',
    title: { de: 'Urlaub am Meer', en: 'Holiday by the sea' },
    paragraphs: [
      [
        ['Im August fahren wir an die Ostsee.', 'In August we are going to the Baltic Sea.'],
        ['Wir bleiben eine Woche in einem kleinen Hotel.', 'We are staying for a week in a small hotel.'],
        ['Das Hotel liegt direkt am Strand.', 'The hotel is right on the beach.'],
      ],
      [
        ['Wir schwimmen, essen Fisch und schlafen viel.', 'We swim, eat fish and sleep a lot.'],
        ['Das Wasser ist kalt, aber das ist egal.', 'The water is cold, but that does not matter.'],
        ['Ich freue mich schon sehr.', 'I am already really looking forward to it.'],
      ],
    ],
    questions: [
      { q: 'Wohin fährt die Familie?', options: ['In die Berge', 'An die Ostsee', 'Nach Italien'], answer: 1 },
      { q: 'Wie lange bleiben sie?', options: ['Eine Woche', 'Zwei Tage', 'Einen Monat'], answer: 0 },
      { q: 'Wie ist das Wasser?', options: ['Warm', 'Schmutzig', 'Kalt'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-kochen',
    level: 'A1',
    tags: ['everyday'],
    icon: 'everyday',
    title: { de: 'Wir kochen zusammen', en: 'We cook together' },
    paragraphs: [
      [
        ['Heute kochen Mia und ich eine Suppe.', 'Today Mia and I are cooking a soup.'],
        ['Wir brauchen Kartoffeln, Karotten und eine Zwiebel.', 'We need potatoes, carrots and an onion.'],
        ['Mia schneidet das Gemüse.', 'Mia cuts the vegetables.'],
      ],
      [
        ['Ich koche das Wasser.', 'I boil the water.'],
        ['Nach dreißig Minuten ist die Suppe fertig.', 'After thirty minutes the soup is ready.'],
        ['Sie ist heiß und schmeckt sehr gut.', 'It is hot and tastes very good.'],
      ],
    ],
    questions: [
      { q: 'Was kochen sie?', options: ['Eine Suppe', 'Einen Kuchen', 'Nudeln'], answer: 0 },
      { q: 'Wer schneidet das Gemüse?', options: ['Die Person', 'Niemand', 'Mia'], answer: 2 },
      { q: 'Wie lange dauert es?', options: ['Zehn Minuten', 'Dreißig Minuten', 'Zwei Stunden'], answer: 1 },
    ],
  },
  {
    id: 'r-a1-sport',
    level: 'A1',
    tags: ['everyday'],
    icon: 'football',
    title: { de: 'Fußball am Dienstag', en: 'Football on Tuesday' },
    paragraphs: [
      [
        ['Jeden Dienstag spielt Karim Fußball.', 'Every Tuesday Karim plays football.'],
        ['Er spielt mit Kollegen aus seiner Firma.', 'He plays with colleagues from his company.'],
        ['Sie spielen auf einem Platz im Park.', 'They play on a pitch in the park.'],
      ],
      [
        ['Nach dem Spiel gehen sie in eine Kneipe.', 'After the game they go to a pub.'],
        ['Dort trinken sie etwas und sprechen Deutsch.', 'There they have a drink and speak German.'],
        ['So lernt Karim viele neue Wörter.', 'That way Karim learns many new words.'],
      ],
    ],
    questions: [
      { q: 'Mit wem spielt Karim?', options: ['Mit Kollegen', 'Mit seinem Sohn', 'Allein'], answer: 0 },
      { q: 'Wo spielen sie?', options: ['In einer Halle', 'Im Park', 'In der Schule'], answer: 1 },
      { q: 'Was lernt Karim in der Kneipe?', options: ['Kochen', 'Gitarre spielen', 'Neue Wörter'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-paket',
    level: 'A1',
    tags: ['everyday'],
    icon: 'gift',
    title: { de: 'Das Paket', en: 'The parcel' },
    paragraphs: [
      [
        ['Ich warte auf ein Paket.', 'I am waiting for a parcel.'],
        ['Aber ich bin den ganzen Tag im Büro.', 'But I am in the office all day.'],
        ['Am Abend finde ich einen Zettel an der Tür.', 'In the evening I find a note on the door.'],
      ],
      [
        ['Das Paket ist in der Post-Filiale.', 'The parcel is at the post office.'],
        ['Ich hole es am nächsten Morgen ab.', 'I pick it up the next morning.'],
        ['Ich brauche meinen Ausweis.', 'I need my ID card.'],
      ],
    ],
    questions: [
      { q: 'Wo ist die Person am Tag?', options: ['Zu Hause', 'Im Büro', 'Im Urlaub'], answer: 1 },
      { q: 'Wo ist das Paket?', options: ['Bei der Nachbarin', 'Vor der Tür', 'In der Post-Filiale'], answer: 2 },
      { q: 'Was braucht die Person?', options: ['Den Ausweis', 'Geld', 'Einen Schlüssel'], answer: 0 },
    ],
  },
  {
    id: 'r-a1-park',
    level: 'A1',
    tags: ['everyday'],
    icon: 'leaf',
    title: { de: 'Im Park', en: 'In the park' },
    paragraphs: [
      [
        ['Im Sommer ist der Park voll.', 'In summer the park is full.'],
        ['Familien machen ein Picknick.', 'Families have a picnic.'],
        ['Kinder spielen und Hunde laufen.', 'Children play and dogs run around.'],
      ],
      [
        ['Ich sitze auf einer Bank und lese.', 'I sit on a bench and read.'],
        ['Manchmal grillen meine Freunde und ich hier.', 'Sometimes my friends and I have a barbecue here.'],
        ['Aber man darf nicht überall grillen.', 'But you are not allowed to barbecue everywhere.'],
      ],
    ],
    questions: [
      { q: 'Wann ist der Park voll?', options: ['Im Winter', 'Im Sommer', 'In der Nacht'], answer: 1 },
      { q: 'Was macht die Person auf der Bank?', options: ['Sie liest', 'Sie schläft', 'Sie isst'], answer: 0 },
      { q: 'Was darf man nicht überall?', options: ['Laufen', 'Lesen', 'Grillen'], answer: 2 },
    ],
  },
  {
    id: 'r-a1-erster-arbeitstag',
    level: 'A1',
    tags: ['work'],
    icon: 'rocket',
    title: { de: 'Der erste Arbeitstag', en: 'The first day at work' },
    paragraphs: [
      [
        ['Heute ist mein erster Arbeitstag.', 'Today is my first day at work.'],
        ['Ich bin nervös und komme schon um halb neun.', 'I am nervous and arrive at half past eight already.'],
        ['Meine Chefin zeigt mir das Büro.', 'My boss shows me the office.'],
      ],
      [
        ['Ich bekomme einen Laptop und einen Schlüssel.', 'I get a laptop and a key.'],
        ['Mittags essen alle zusammen.', 'At lunchtime everyone eats together.'],
        ['Am Abend bin ich müde, aber glücklich.', 'In the evening I am tired but happy.'],
      ],
    ],
    questions: [
      { q: 'Wie fühlt sich die Person am Morgen?', options: ['Müde', 'Nervös', 'Wütend'], answer: 1 },
      {
        q: 'Was bekommt die Person?',
        options: ['Einen Laptop und einen Schlüssel', 'Ein Auto', 'Ein Handy'],
        answer: 0,
      },
      { q: 'Wie fühlt sich die Person am Abend?', options: ['Traurig', 'Krank', 'Müde, aber glücklich'], answer: 2 },
    ],
  },
];
