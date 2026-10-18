// Grammar checklist, A1 to C2, grouped the way learners think about it:
// Basics (A1), Everyday speaking (A2), Speaking freely (B1), Professional and
// fluent (B2), Advanced (C1-C2). Plain-language explanations focused on
// speaking. Text fields are keyed by language ({ en, az }); English is the
// fallback. Topic ids are stored in user progress and referenced from
// sentences.js: never rename an id.

const ex = (de, en) => ({ de, tr: { en } });
const L = (en) => ({ en });

function topic(id, level, group, title, [subEn, subAz], summary, rules, examples, mistakes, speak) {
  return {
    id,
    level,
    group,
    title,
    subtitle: { en: subEn, az: subAz },
    summary: L(summary),
    rules: rules.map(L),
    examples: examples.map(([de, en]) => ex(de, en)),
    mistakes: mistakes.map(([wrong, right, why]) => ({ wrong, right, why: L(why) })),
    speak: speak.map(L),
  };
}

export const GRAMMAR_GROUPS = ['A1', 'A2', 'B1', 'B2', 'C'];

export const GRAMMAR_TOPICS = [
  // A1 - Basics
  topic(
    'articles',
    'A1',
    'A1',
    'Artikel: der, die, das',
    ['Gender and the article', 'Artikel: der, die, das'],
    'Every noun has a gender: der, die or das. Plural is always die. Learn each noun with its article and plural as one unit.',
    [
      'Learn the block: die Wohnung, die Wohnungen.',
      'Endings help: -ung, -heit, -keit, -schaft, -ion are always die. -chen and -lein are always das.',
      'In compound nouns the last word decides: das Haus + die Tür = die Haustür.',
      'A wrong article rarely stops anyone understanding you. Fix the frequent ones and move on.',
    ],
    [
      ['Der Laptop ist neu.', 'The laptop is new.'],
      ['Die Besprechung ist um zehn.', 'The meeting is at ten.'],
      ['Das Meeting dauert eine Stunde.', 'The meeting takes an hour.'],
    ],
    [['Das Rechnung, bitte.', 'Die Rechnung, bitte.', '-ung nouns are always feminine.']],
    ['Name five things on your desk with their article.'],
  ),

  topic(
    'plural',
    'A1',
    'A1',
    'Plural',
    ['Plural of nouns', 'İsimlərin cəmi'],
    'German has several plural endings. The article in the plural is always die, whatever the gender.',
    [
      'Common patterns: -e (Tage), -en/-n (Frauen), -er with umlaut (Kinder, Häuser), -s for loan words (Laptops), no change (Lehrer).',
      'Feminine nouns mostly take -en/-n: die Lösung, die Lösungen.',
      'In the dative plural add -n if possible: mit den Kindern.',
      'Learn the plural together with the noun; guessing works less often than with the article.',
    ],
    [
      ['Die Kinder spielen.', 'The children are playing.'],
      ['Wir haben zwei neue Kollegen.', 'We have two new colleagues.'],
      ['Die Laptops sind schon da.', 'The laptops are already here.'],
    ],
    [['zwei Laptopen', 'zwei Laptops', 'English loan words usually take -s.']],
    ['Say how many of something you have at home: zwei Stühle, drei Pflanzen ...'],
  ),

  topic(
    'nominative',
    'A1',
    'A1',
    'Nominativ',
    ['The subject: who? what?', 'Kim? Nə?'],
    'The nominative is the subject: the person or thing doing the action. It is the form you find in the dictionary.',
    [
      'Ask wer? or was? to find it: Wer arbeitet? Der Mann.',
      'Articles: der, die, das, plural die; ein, eine, ein.',
      'After sein and werden both sides are nominative: Er ist der neue Chef.',
    ],
    [
      ['Der Mann arbeitet.', 'The man is working.'],
      ['Das ist der neue Kollege.', 'That is the new colleague.'],
      ['Ein Kunde wartet draußen.', 'A customer is waiting outside.'],
    ],
    [['Den Chef ist nett.', 'Der Chef ist nett.', 'The subject is always nominative.']],
    ['Describe three people at your work: Der Teamleiter ist ...'],
  ),

  topic(
    'accusative',
    'A1',
    'A1',
    'Akkusativ',
    ['The direct object: whom? what?', 'Kimi? Nəyi?'],
    'The accusative marks what you have, want, need or see. Only the masculine changes: der becomes den, ein becomes einen.',
    [
      'der → den, ein → einen, kein → keinen, mein → meinen.',
      'die, das and plural stay the same.',
      'Typical verbs: haben, brauchen, kaufen, suchen, sehen, möchten.',
    ],
    [
      ['Ich sehe den Mann.', 'I see the man.'],
      ['Ich brauche einen Laptop.', 'I need a laptop.'],
      ['Hast du den Link?', 'Do you have the link?'],
    ],
    [['Ich habe ein Termin.', 'Ich habe einen Termin.', 'der Termin is masculine, so ein becomes einen as an object.']],
    ['Say three things you need for work today.'],
  ),

  topic(
    'dative',
    'A1',
    'A1',
    'Dativ',
    ['The receiver: to whom?', 'Kimə?'],
    'The dative marks the person who receives or benefits. Articles: dem, der, dem, plural den (+n).',
    [
      'der/das → dem, die → der, plural → den and the noun gets -n: den Kollegen.',
      'The receiver: "Ich schicke dir die Datei."',
      'Dative verbs: helfen, danken, gefallen, gehören, passen, schmecken.',
    ],
    [
      ['Ich helfe dem Mann.', 'I am helping the man.'],
      ['Kannst du mir die Datei schicken?', 'Can you send me the file?'],
      ['Das gefällt mir.', 'I like that.'],
    ],
    [['Ich helfe dich.', 'Ich helfe dir.', 'helfen always takes the dative.']],
    ['Say who you help at work and with what.'],
  ),

  topic(
    'genitive',
    'A1',
    'A1',
    'Genitiv',
    ['Possession: whose?', 'Kimin?'],
    'The genitive shows who something belongs to. In speech Germans often use von + dative instead; in writing the genitive is normal.',
    [
      'der/das → des + -(e)s on the noun: des Bruders, des Projekts.',
      'die and plural → der: der Firma, der Kollegen.',
      'Names take -s without apostrophe: Annas Laptop.',
      'Spoken alternative: das Auto von meinem Bruder.',
    ],
    [
      ['Das ist das Auto meines Bruders.', "That's my brother's car."],
      ['Annas Laptop ist kaputt.', "Anna's laptop is broken."],
      ['Der Name der Firma ist neu.', 'The name of the company is new.'],
    ],
    [["Anna's Laptop", 'Annas Laptop', 'German names take -s without an apostrophe.']],
    ['Say whose things are on your desk: der Laptop meiner Kollegin ...'],
  ),

  topic(
    'personal-pronouns',
    'A1',
    'A1',
    'Personalpronomen',
    ['I, you, he, she...', 'Mən, sən, o'],
    'Pronouns replace nouns and change with the case: ich, mich, mir.',
    [
      'Nominative: ich, du, er, sie, es, wir, ihr, sie, Sie.',
      'Accusative: mich, dich, ihn, sie, es, uns, euch, sie, Sie.',
      'Dative: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen.',
      'For things, er/sie/es follow the gender: der Laptop → er.',
    ],
    [
      ['Ich kenne ihn.', 'I know him.'],
      ['Kannst du mir helfen?', 'Can you help me?'],
      ['Der Laptop? Er ist neu.', 'The laptop? It is new.'],
    ],
    [['Ich kenne er.', 'Ich kenne ihn.', 'After kennen you need the accusative.']],
    ['Talk about a colleague without using their name: Ich sehe ihn jeden Tag ...'],
  ),

  topic(
    'possessives',
    'A1',
    'A1',
    'Possessivpronomen',
    ['my, your, his...', 'Mənim, sənin'],
    'Possessives work exactly like ein: mein Laptop, meine Wohnung, meinen Kollegen.',
    [
      'mein, dein, sein (his/its), ihr (her/their), unser, euer, Ihr (formal your).',
      'They take ein-endings: meinen Kollegen (accusative), meiner Kollegin (dative).',
      'sein or ihr depends on the owner, not on the thing: Anna und ihr Bruder.',
    ],
    [
      ['Das ist mein Auto.', 'This is my car.'],
      ['Das ist mein Kollege Jonas.', 'This is my colleague Jonas.'],
      ['Anna hat ihren Laptop vergessen.', 'Anna forgot her laptop.'],
    ],
    [['Anna und sein Bruder', 'Anna und ihr Bruder', 'The owner is female, so ihr.']],
    ['Introduce two people from your team with mein / meine.'],
  ),

  topic(
    'praesens',
    'A1',
    'A1',
    'Präsens',
    ['Present tense', 'İndiki zaman'],
    'The present tense covers now, habits and also the future when a time is given: Morgen arbeite ich.',
    [
      'Endings: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.',
      'Some verbs change the vowel with du and er: ich fahre, du fährst; ich nehme, er nimmt.',
      'sein and haben are irregular: ich bin, du bist / ich habe, du hast.',
      'Use it for the near future: "Ich rufe dich morgen an."',
    ],
    [
      ['Ich arbeite heute.', 'I am working today.'],
      ['Er fährt mit dem Rad zur Arbeit.', 'He cycles to work.'],
      ['Morgen habe ich frei.', 'I am off tomorrow.'],
    ],
    [['Er nehmt den Bus.', 'Er nimmt den Bus.', 'nehmen changes its vowel with du and er.']],
    ['Describe your normal working day in the present tense.'],
  ),

  topic(
    'perfekt',
    'A1',
    'A1',
    'Perfekt',
    ['The past in conversation', 'Danışıqda keçmiş zaman'],
    'In conversation Germans mostly use the Perfekt: haben or sein in position 2, participle at the end.',
    [
      'Regular verbs: ge + stem + t: gemacht, gearbeitet.',
      'Irregular verbs: ge + (changed) stem + en: geschrieben, gefahren.',
      'No ge- for -ieren verbs and for be-, ver-, er-, ent-, zer- verbs: telefoniert, vergessen.',
    ],
    [
      ['Ich habe gearbeitet.', 'I worked.'],
      ['Ich habe meinen Schlüssel vergessen.', 'I forgot my key.'],
      ['Hast du schon gegessen?', 'Have you eaten yet?'],
    ],
    [['Ich habe gevergessen.', 'Ich habe vergessen.', 'ver- verbs never take ge-.']],
    ['Say what you did yesterday after work, in three sentences.'],
  ),

  topic(
    'perfekt-sein-haben',
    'A1',
    'A1',
    'Perfekt: sein oder haben?',
    ['Which helper verb', 'Perfekt: sein yoxsa haben?'],
    'Most verbs use haben. Use sein for movement from A to B, for a change of state, and for sein, bleiben, passieren, werden.',
    [
      'Movement with a direction: gehen, fahren, fliegen, kommen → ist gefahren.',
      'Change of state: aufwachen, einschlafen, werden → ist eingeschlafen.',
      'Always sein: sein (ist gewesen), bleiben, passieren, werden.',
      'Everything else takes haben, including all reflexive verbs.',
    ],
    [
      ['Wir sind nach Hamburg gefahren.', 'We went to Hamburg.'],
      ['Ich bin um sieben aufgestanden.', 'I got up at seven.'],
      ['Was ist passiert?', 'What happened?'],
    ],
    [['Ich habe nach Berlin gefahren.', 'Ich bin nach Berlin gefahren.', 'Movement from A to B takes sein.']],
    ['Describe your last trip: where you went, how, how long you stayed.'],
  ),

  topic(
    'praeteritum',
    'A1',
    'A1',
    'Präteritum',
    ['Simple past', 'Sadə keçmiş zaman'],
    'In speech, Präteritum is used mainly for sein, haben and modal verbs. In writing and stories it is the normal past.',
    [
      'In conversation: war, hatte, konnte, musste, wollte, wusste, es gab.',
      'Regular verbs: stem + te: arbeitete, wohnte.',
      'Irregular verbs change the stem: ging, kam, fuhr.',
    ],
    [
      ['Ich war krank.', 'I was ill.'],
      ['Ich war gestern beim Arzt.', "I was at the doctor's yesterday."],
      ['Es gab ein Problem mit dem Server.', 'There was a problem with the server.'],
    ],
    [['Ich habe gewesen.', 'Ich war.', 'For sein, war is the normal past in speech.']],
    ['Tell a short story about your first week in Germany with war, hatte, musste.'],
  ),

  topic(
    'modal-verbs',
    'A1',
    'A1',
    'Modalverben',
    ['can, must, want...', 'Bacarmaq, məcbur olmaq və s.'],
    'The modal verb takes position 2 and pushes the main verb to the end, unchanged.',
    [
      'Modal in position 2, infinitive at the end: "Ich muss heute länger arbeiten."',
      'ich and er/sie/es look the same, without -t: ich kann, er kann.',
      'nicht müssen = do not have to. "Must not" is nicht dürfen.',
    ],
    [
      ['Ich muss arbeiten.', 'I have to work.'],
      ['Kannst du mir helfen?', 'Can you help me?'],
      ['Du darfst das nicht löschen.', "You mustn't delete that."],
    ],
    [['Ich muss arbeiten heute.', 'Ich muss heute arbeiten.', 'The infinitive goes to the very end.']],
    ['Say three things you have to do this week (Ich muss ...).'],
  ),

  topic(
    'imperative',
    'A1',
    'A1',
    'Imperativ',
    ['Requests and instructions', 'Əmr və xahiş'],
    'For instructions and requests. Add bitte or mal so it sounds friendly, not bossy.',
    [
      'du: verb stem, no "du": "Komm!", "Schick mir den Link!"',
      'ihr: like the ihr form: "Kommt!"  Sie: verb + Sie: "Kommen Sie bitte!"',
      'Softeners: bitte, mal, doch mal: "Schau mal!"',
      'Lass uns + infinitive = let\'s: "Lass uns anfangen."',
    ],
    [
      ['Komm bitte rein!', 'Please come in!'],
      ['Sag mir Bescheid.', 'Let me know.'],
      ['Lass uns kurz telefonieren.', "Let's have a quick call."],
    ],
    [['Gibst mir den Stift.', 'Gib mir den Stift.', 'The du imperative drops "du" and the -st ending.']],
    ['Give a new colleague three tips for their first week.'],
  ),

  topic(
    'negation',
    'A1',
    'A1',
    'Nicht',
    ['Saying no with nicht', 'İnkar etmək'],
    'nicht negates verbs, adjectives, names and nouns with der/die/das. It usually stands near the end, before what it negates.',
    [
      'Whole sentence: nicht goes to the end: "Ich weiß es nicht."',
      'Before adjectives and places: "Das ist nicht gut." "Ich bin nicht im Büro."',
      'Nouns with a definite article: "Das ist nicht der richtige Link."',
    ],
    [
      ['Ich weiß es nicht.', "I don't know."],
      ['Das funktioniert nicht.', "That doesn't work."],
      ['Ich bin heute nicht im Büro.', "I'm not in the office today."],
    ],
    [['Ich nicht weiß.', 'Ich weiß es nicht.', 'The verb stays in position 2; nicht moves to the end.']],
    ['Say three things that are not true about you today.'],
  ),

  topic(
    'kein',
    'A1',
    'A1',
    'Kein',
    ['No / not a', 'Yoxdur demək'],
    'Use kein for nouns that would have ein or no article. It takes the same endings as ein.',
    [
      'kein = not a / no: "Ich habe keine Zeit."',
      'Endings like ein: keinen Hunger, keine Lust, kein Geld.',
      'nicht + ein is wrong: say kein.',
    ],
    [
      ['Ich habe keine Zeit.', "I don't have time."],
      ['Ich trinke keinen Kaffee.', "I don't drink coffee."],
      ['Das ist kein Problem.', "That's no problem."],
    ],
    [['Ich habe nicht Zeit.', 'Ich habe keine Zeit.', 'Zeit has no article, so it takes kein.']],
    ['Say three things you do not have or need.'],
  ),

  topic(
    'yes-no-questions',
    'A1',
    'A1',
    'Ja/Nein-Fragen',
    ['Yes/no questions', 'Bəli/xeyr sualları'],
    'For yes/no questions the verb comes first, then the subject.',
    [
      'Verb first: "Kommst du morgen?"',
      'With a modal: modal first, infinitive at the end: "Kannst du mir helfen?"',
      'Answer to a negative question with doch: "Kommst du nicht?" - "Doch!"',
    ],
    [
      ['Kommst du morgen?', 'Are you coming tomorrow?'],
      ['Hast du kurz Zeit?', 'Do you have a minute?'],
      ['Gibt es noch Fragen?', 'Are there any more questions?'],
    ],
    [
      [
        'Du kommst morgen?',
        'Kommst du morgen?',
        'Rising intonation alone sounds surprised; normal questions start with the verb.',
      ],
    ],
    ['Ask a colleague three yes/no questions about the project.'],
  ),

  topic(
    'questions',
    'A1',
    'A1',
    'W-Fragen',
    ['Who, what, where...', 'Kim, nə, harada və s.'],
    'W-questions start with the question word, then the verb, then the subject.',
    [
      'W-word + verb + subject: "Wann kommst du?"',
      'Key words: wer, was, wann, wo, wohin, woher, wie, warum, welche.',
      'For things with a preposition: wo(r) + preposition: "Worauf wartest du?"',
    ],
    [
      ['Wann kommst du?', 'When are you coming?'],
      ['Wo wohnst du?', 'Where do you live?'],
      ['Warum ist der Build rot?', 'Why is the build red?'],
    ],
    [['Wann du kommst?', 'Wann kommst du?', 'The verb comes right after the question word.']],
    ['Ask a colleague three questions about their weekend.'],
  ),

  topic(
    'verb-second',
    'A1',
    'A1',
    'Satzstellung',
    ['Word order: verb second', 'Cümlədə söz sırası'],
    'In a normal statement the conjugated verb is the second element. Whatever comes first, the verb stays in slot two.',
    [
      'Position 1 can be the subject, a time, a place or a whole clause.',
      'The verb is element 2, not word 2: "Am Montag" counts as one element.',
      'If something else comes first, the subject moves right after the verb.',
      'Other verb parts go to the very end.',
    ],
    [
      ['Heute arbeite ich.', "Today I'm working."],
      ['Ich arbeite heute von zu Hause.', "I'm working from home today."],
      ['Nach dem Meeting rufe ich dich an.', "I'll call you after the meeting."],
    ],
    [['Heute ich arbeite.', 'Heute arbeite ich.', 'When something else comes first, verb and subject swap.']],
    ['Start three sentences with a time: Morgen ..., Am Freitag ..., Nach der Arbeit ...'],
  ),

  // A2 - Everyday speaking
  topic(
    'separable-verbs',
    'A2',
    'A2',
    'Trennbare Verben',
    ['Verbs that split', 'Ayrılan fellər'],
    'Many verbs have a prefix that jumps to the end: anrufen becomes "Ich rufe dich an."',
    [
      'Common separable prefixes: an, auf, aus, ein, mit, vor, zu, zurück, ab, los.',
      'In a main clause the prefix goes to the very end.',
      'In a weil/dass clause they stay together: "..., weil ich dich anrufe."',
      'Perfekt: ge sits in the middle: angerufen, aufgestanden.',
    ],
    [
      ['Ich rufe dich an.', "I'll call you."],
      ['Wann fängt das Meeting an?', 'When does the meeting start?'],
      ['Kommst du mit?', 'Are you coming along?'],
    ],
    [['Ich anrufe dich.', 'Ich rufe dich an.', 'The prefix separates and goes to the end.']],
    ['Describe your morning with aufstehen, anziehen and losfahren.'],
  ),

  topic(
    'inseparable-verbs',
    'A2',
    'A2',
    'Untrennbare Verben',
    ['Verbs that never split', 'Ayrılmayan fellər'],
    'Verbs with be-, ver-, er-, ent-, emp-, ge-, miss-, zer- never split, and their Perfekt has no ge-.',
    [
      'The prefix is not stressed: verSTEHen, beSUCHen.',
      'No split: "Ich verstehe dich."',
      'Perfekt without ge-: verstanden, besucht, erklärt.',
    ],
    [
      ['Ich verstehe dich.', 'I understand you.'],
      ['Kannst du mir das erklären?', 'Can you explain that to me?'],
      ['Wir haben den Kunden besucht.', 'We visited the client.'],
    ],
    [['Ich habe das geverstanden.', 'Ich habe das verstanden.', 'Inseparable verbs take no ge- in the Perfekt.']],
    ['Use besuchen, erklären and vergessen in three sentences about last week.'],
  ),

  topic(
    'reflexive-verbs',
    'A2',
    'A2',
    'Reflexive Verben',
    ['sich freuen, sich kümmern', 'Özünə aid fellər'],
    'Some verbs need a pronoun that points back to the subject: "Ich kümmere mich darum."',
    [
      'mich, dich, sich, uns, euch, sich.',
      'With another object use mir/dir: "Ich wasche mir die Hände."',
      'Key work verbs: sich melden, sich kümmern um, sich verspäten.',
      'Perfekt always with haben: "Ich habe mich gefreut."',
    ],
    [
      ['Ich freue mich.', "I'm happy."],
      ['Ich kümmere mich darum.', "I'll take care of it."],
      ['Ich melde mich morgen.', "I'll get in touch tomorrow."],
    ],
    [['Ich freue auf das Wochenende.', 'Ich freue mich auf das Wochenende.', 'sich freuen always needs the pronoun.']],
    ['Say what you are looking forward to (Ich freue mich auf ...).'],
  ),

  topic(
    'accusative-prepositions',
    'A2',
    'A2',
    'Akkusativ-Präpositionen',
    ['Prepositions with the accusative', 'Akkusativ tələb edən sözönülər'],
    'durch, für, gegen, ohne, um are always followed by the accusative.',
    [
      'Memory hook: DOGFU (durch, ohne, gegen, für, um).',
      'Only masculine changes: für den Chef, ohne meinen Laptop.',
      'Short forms in speech: durchs, fürs, ums.',
    ],
    [
      ['Ich gehe durch den Park.', 'I walk through the park.'],
      ['Das ist für meinen Chef.', "That's for my boss."],
      ['Ohne dich schaffen wir das nicht.', "We can't do it without you."],
    ],
    [['für dem Team', 'für das Team', 'für always takes the accusative.']],
    ['Say what you do for whom at work: für den Kunden, für mein Team ...'],
  ),

  topic(
    'dative-prepositions',
    'A2',
    'A2',
    'Dativ-Präpositionen',
    ['Prepositions with the dative', 'Dativ tələb edən sözönülər'],
    'aus, bei, mit, nach, seit, von, zu, gegenüber are always followed by the dative.',
    [
      'der/das → dem, die → der: mit dem Bus, mit der Bahn.',
      'Short forms: zum, zur, beim, vom.',
      'seit + dative for things that started and continue: seit einem Jahr.',
    ],
    [
      ['Ich fahre mit dem Bus.', 'I take the bus.'],
      ['Ich arbeite seit einem Jahr bei Siemens.', "I've been working at Siemens for a year."],
      ['Ich gehe zum Arzt.', "I'm going to the doctor."],
    ],
    [['mit den Bus', 'mit dem Bus', 'mit takes the dative: der Bus → dem Bus.']],
    ['Describe how you get to work and since when you work there.'],
  ),

  topic(
    'two-way-prepositions',
    'A2',
    'A2',
    'Wechselpräpositionen',
    ['Where vs. where to', 'Yerə görə hal dəyişir'],
    'in, an, auf, über, unter, vor, hinter, neben, zwischen: accusative for movement (wohin?), dative for location (wo?).',
    [
      'Wohin? Movement → accusative: "Ich lege es auf den Tisch."',
      'Wo? Position → dative: "Es liegt auf dem Tisch."',
      'Verb pairs help: legen/liegen, stellen/stehen, setzen/sitzen.',
    ],
    [
      ['Ich lege das Buch auf den Tisch.', 'I put the book on the table.'],
      ['Das Buch liegt auf dem Tisch.', 'The book is on the table.'],
      ['Ich gehe ins Büro. Ich bin im Büro.', "I'm going to the office. I'm in the office."],
    ],
    [['Ich gehe in dem Büro.', 'Ich gehe ins Büro.', 'Going somewhere is movement: accusative.']],
    ['Describe where things are in your room right now.'],
  ),

  topic(
    'adjectives',
    'A2',
    'A2',
    'Adjektive',
    ['Describing things', 'Sifətlər'],
    'After sein, werden and bleiben an adjective has no ending: "Das Auto ist schnell."',
    [
      'Predicative (after the verb): no ending: "Der Kaffee ist heiß."',
      'Many adjectives can also be adverbs without change: "Er spricht schnell."',
      'Before a noun they need an ending; see Adjektivdeklination.',
    ],
    [
      ['Das Auto ist schnell.', 'The car is fast.'],
      ['Die Lösung ist einfach.', 'The solution is simple.'],
      ['Er spricht sehr schnell.', 'He speaks very fast.'],
    ],
    [['Das Auto ist schnelles.', 'Das Auto ist schnell.', 'After sein the adjective has no ending.']],
    ['Describe your apartment with five adjectives after ist / sind.'],
  ),

  topic(
    'adjective-endings',
    'A2',
    'A2',
    'Adjektivdeklination',
    ['Adjective endings', 'Sifətin sonluqları'],
    'Adjectives before a noun take an ending. The most frequent ending is -en, and in speech small slips are forgiven.',
    [
      'After der/die/das in the nominative singular: -e: der neue Kollege.',
      'After ein without an ending, the adjective shows the gender: ein neuer Laptop, ein neues Handy.',
      'Almost everywhere else (dative, plural with article, masculine accusative): -en.',
      'No article: the adjective takes the article ending: guter Kaffee.',
    ],
    [
      ['Ich habe einen guten Freund.', 'I have a good friend.'],
      ['Das ist eine gute Idee.', "That's a good idea."],
      ['Wir haben einen neuen Kollegen.', 'We have a new colleague.'],
    ],
    [['ein neue Laptop', 'ein neuer Laptop', 'ein shows no gender, so the adjective does.']],
    ['Describe your workplace with four adjectives in front of nouns.'],
  ),

  topic(
    'comparison',
    'A2',
    'A2',
    'Komparativ',
    ['Bigger, better, faster', 'Daha yaxşı, daha böyük'],
    'Add -er to compare two things and use als: schneller als.',
    [
      'Comparative: -er + als: "schneller als".',
      'Short words often add an umlaut: alt → älter, groß → größer.',
      'Irregular: gut → besser, viel → mehr, gern → lieber.',
      'Equal: so ... wie: "so gut wie".',
    ],
    [
      ['Mein Auto ist schneller.', 'My car is faster.'],
      ['Die neue Version ist schneller als die alte.', 'The new version is faster than the old one.'],
      ['Ich trinke lieber Tee.', "I'd rather drink tea."],
    ],
    [['schneller wie', 'schneller als', 'Comparisons use als. wie is for "as ... as".']],
    ['Compare your city in Germany with your home town.'],
  ),

  topic(
    'superlative',
    'A2',
    'A2',
    'Superlativ',
    ['The best, the biggest', 'Ən yaxşı, ən böyük'],
    'The superlative is am ...-sten after a verb, or der/die/das ...-ste before a noun.',
    [
      'After the verb: am + -sten: "Er läuft am schnellsten."',
      'Before a noun: der/die/das + -ste: "die beste Lösung".',
      'Irregular: gut → am besten, viel → am meisten, gern → am liebsten.',
    ],
    [
      ['Das ist die beste Lösung.', "That's the best solution."],
      ['Am liebsten arbeite ich morgens.', 'I like working in the morning best.'],
      ['Er ist der erfahrenste Entwickler im Team.', "He's the most experienced developer on the team."],
    ],
    [['am meisten gut', 'am besten', 'gut has its own superlative.']],
    ['Say what you like most and least about your job.'],
  ),

  topic(
    'conjunctions',
    'A2',
    'A2',
    'Konjunktionen: und, aber, oder',
    ['and, but, or', 'Və, amma, çünki'],
    'und, aber, oder, sondern, denn connect two main clauses without changing the word order.',
    [
      'They sit in "position 0": the clause after them keeps verb second.',
      'sondern corrects after a negation: "nicht heute, sondern morgen".',
      'A comma before aber, sondern, denn; usually none before und and oder.',
    ],
    [
      ['Ich komme, aber ich bleibe nicht.', "I'm coming, but I won't stay."],
      ['Wir können heute oder morgen telefonieren.', 'We can talk today or tomorrow.'],
      ['Nicht heute, sondern morgen.', 'Not today, but tomorrow.'],
    ],
    [
      [
        'Ich komme, aber bleibe ich nicht.',
        'Ich komme, aber ich bleibe nicht.',
        'aber does not change the word order.',
      ],
    ],
    ['Describe your weekend plans with und, aber and oder.'],
  ),

  topic(
    'weil-dass',
    'A2',
    'A2',
    'Weil',
    ['Because (verb at the end)', 'Çünki'],
    'weil gives a reason and sends the verb to the end of its clause.',
    [
      'weil + subject + ... + verb: "..., weil ich krank bin."',
      'Separable verbs join up again: "..., weil der Zug ausfällt."',
      'If the weil clause comes first, the main clause starts with the verb.',
      'In casual speech some say weil with normal word order. Fine when talking, not in writing.',
    ],
    [
      ['Ich bleibe zu Hause, weil ich krank bin.', "I'm staying home because I'm ill."],
      ['Ich komme später, weil der Zug ausfällt.', "I'll be late because the train is cancelled."],
      ['Weil es regnet, nehme ich den Bus.', "Because it's raining, I'm taking the bus."],
    ],
    [['..., weil ich bin krank.', '..., weil ich krank bin.', 'In writing the verb goes to the end after weil.']],
    ['Give two reasons why you are learning German, with weil.'],
  ),

  topic(
    'dass',
    'A2',
    'A2',
    'Dass',
    ['That (verb at the end)', 'Ki'],
    'dass introduces what you think, say or know. The verb goes to the end.',
    [
      'After glauben, denken, finden, wissen, hoffen, sagen: "Ich denke, dass ..."',
      'Verb at the end: "..., dass du recht hast."',
      'In speech dass is often dropped: "Ich glaube, er kommt."',
    ],
    [
      ['Ich denke, dass du recht hast.', 'I think you are right.'],
      ['Ich hoffe, dass es klappt.', 'I hope it works out.'],
      ['Er hat gesagt, dass er später kommt.', 'He said he is coming later.'],
    ],
    [['Ich denke, dass du hast recht.', 'Ich denke, dass du recht hast.', 'After dass the verb goes to the end.']],
    ['Share three opinions about remote work: Ich finde, dass ...'],
  ),

  topic(
    'wenn',
    'A2',
    'A2',
    'Wenn',
    ['If / whenever', 'Əgər, nə vaxt ki'],
    'wenn is for conditions (if) and for repeated events (whenever). The verb goes to the end.',
    [
      'Condition: "Wenn ich Zeit habe, komme ich."',
      'Repeated: "Immer wenn es regnet, nehme ich den Bus."',
      'Future single event: "Wenn du da bist, ruf mich an."',
      'When the wenn clause comes first, the main clause starts with the verb.',
    ],
    [
      ['Wenn ich Zeit habe, komme ich.', "If I have time, I'll come."],
      ['Wenn du Fragen hast, schreib mir.', 'If you have questions, write to me.'],
      ['Immer wenn ich müde bin, trinke ich Kaffee.', "Whenever I'm tired, I drink coffee."],
    ],
    [
      [
        'Wenn ich Zeit habe, ich komme.',
        'Wenn ich Zeit habe, komme ich.',
        'After the wenn clause the verb comes first.',
      ],
    ],
    ['Say three things you do when you have free time.'],
  ),

  topic(
    'als-wenn',
    'A2',
    'A2',
    'Als',
    ['When, once in the past', 'Keçmişdə bir dəfə olan hadisə'],
    'als is for one event or period in the past. The verb goes to the end.',
    [
      'One time in the past: "Als ich nach Berlin kam, ..."',
      'A period in the past: "Als ich jung war, ..."',
      'Repeated in the past: use wenn, not als.',
    ],
    [
      ['Als ich jung war, spielte ich Fußball.', 'When I was young, I played football.'],
      ['Als ich nach Deutschland kam, konnte ich kaum Deutsch.', 'When I came to Germany, I barely spoke German.'],
      ['Als das Meeting anfing, war ich noch im Zug.', 'When the meeting started, I was still on the train.'],
    ],
    [
      [
        'Wenn ich nach Deutschland kam, ...',
        'Als ich nach Deutschland kam, ...',
        'A single event in the past takes als.',
      ],
    ],
    ['Tell what happened when you arrived in Germany, starting with "Als ich ...".'],
  ),

  topic(
    'denn',
    'A2',
    'A2',
    'Denn',
    ['Because (normal word order)', 'Çünki, cümlə sırası dəyişmir'],
    'denn also means because, but it keeps normal word order. It sounds a little more written than weil.',
    [
      'Position 0: "Ich gehe, denn ich bin müde."',
      'A denn clause never comes first.',
      'Do not confuse it with the particle denn in questions: "Was ist denn los?"',
    ],
    [
      ['Ich gehe, denn ich bin müde.', "I'm leaving because I'm tired."],
      ['Wir verschieben das, denn der Kunde ist krank.', "We're postponing it because the client is ill."],
      ['Ich lerne Deutsch, denn ich will hier bleiben.', 'I learn German because I want to stay here.'],
    ],
    [['Ich gehe, denn ich müde bin.', 'Ich gehe, denn ich bin müde.', 'denn keeps verb second.']],
    ['Give three reasons with denn instead of weil.'],
  ),

  topic(
    'deshalb',
    'A2',
    'A2',
    'Deshalb',
    ['That is why', 'Buna görə'],
    'deshalb (also deswegen, darum) gives a consequence. It takes position 1, so the verb follows directly.',
    [
      'Cause first, then: "Ich bin krank, deshalb bleibe ich zu Hause."',
      'deshalb in position 1 → verb next → subject after.',
      'deswegen and darum mean the same.',
    ],
    [
      ['Ich bin krank, deshalb bleibe ich zu Hause.', "I'm ill, so I'm staying home."],
      [
        'Der Server war down, deshalb haben wir nichts deployt.',
        "The server was down, that's why we didn't deploy anything.",
      ],
      ['Es regnet, deswegen nehme ich den Bus.', "It's raining, so I'm taking the bus."],
    ],
    [
      [
        'Ich bin krank, deshalb ich bleibe zu Hause.',
        'Ich bin krank, deshalb bleibe ich zu Hause.',
        'After deshalb the verb comes first.',
      ],
    ],
    ['Explain a problem at work and its consequence with deshalb.'],
  ),

  // B1 - Speaking freely
  topic(
    'plusquamperfekt',
    'B1',
    'B1',
    'Plusquamperfekt',
    ['The past before the past', 'Keçmişdən əvvəlki keçmiş'],
    'For something that happened before another past event: hatte or war + Partizip II.',
    [
      'hatte/war + Partizip II: "Ich hatte schon gegessen."',
      'sein or haben follows the same rule as in the Perfekt.',
      'Typical with nachdem and schon.',
    ],
    [
      ['Ich hatte schon gegessen.', 'I had already eaten.'],
      ['Als ich ankam, war das Meeting schon vorbei.', 'When I arrived, the meeting was already over.'],
      ['Er hatte den Fehler schon gefunden.', 'He had already found the bug.'],
    ],
    [
      [
        'Nachdem ich gegessen habe, ging ich los.',
        'Nachdem ich gegessen hatte, ging ich los.',
        'The earlier action takes Plusquamperfekt.',
      ],
    ],
    ['Tell what had already happened before you came to Germany.'],
  ),

  topic(
    'futur-1',
    'B1',
    'B1',
    'Futur I',
    ['Future tense', 'Gələcək zaman'],
    'werden + infinitive. For plans Germans often just use the present with a time word; Futur I sounds more like a promise or a guess.',
    [
      'werden in position 2, infinitive at the end: "Ich werde morgen arbeiten."',
      'Promise or intention: "Ich werde mich darum kümmern."',
      'Guess about now: "Er wird im Stau stehen."',
    ],
    [
      ['Ich werde morgen arbeiten.', 'I will work tomorrow.'],
      ['Ich werde mich darum kümmern.', 'I will take care of it.'],
      ['Er wird wohl im Stau stehen.', 'He is probably stuck in traffic.'],
    ],
    [['Ich werde morgen zu arbeiten.', 'Ich werde morgen arbeiten.', 'No zu after werden.']],
    ['Promise three things to your team with Ich werde ...'],
  ),

  topic(
    'passive',
    'B1',
    'B1',
    'Passiv',
    ['What happens, not who does it', 'İşin kim tərəfindən edilməsi vacib deyil'],
    'werden + Partizip II. Very common in tech: "Der Fehler wird behoben."',
    [
      'Present: wird + Partizip II at the end.',
      'Add the doer only if needed, with von + dative.',
      'Perfekt passive: ist + Partizip II + worden.',
    ],
    [
      ['Der Fehler wird behoben.', 'The bug is being fixed.'],
      ['Der Server wird jede Nacht neu gestartet.', 'The server is restarted every night.'],
      ['Hier wird Deutsch gesprochen.', 'German is spoken here.'],
    ],
    [
      [
        'Das Ticket ist geschlossen geworden.',
        'Das Ticket ist geschlossen worden.',
        'In the passive Perfekt, geworden becomes worden.',
      ],
    ],
    ['Explain what happens when someone merges code into main, using the passive.'],
  ),

  topic(
    'relative-clauses',
    'B1',
    'B1',
    'Relativsätze',
    ['The man who..., the bug that...', 'İsmi izah edən cümlə'],
    'A relative clause describes a noun. The pronoun usually looks like the article, and the verb goes to the end.',
    [
      'Gender and number come from the noun: der Mann, der ...; die Datei, die ...',
      'The case comes from its role inside the clause: den ich kenne, dem ich helfe.',
      'Dative plural denen, genitive dessen / deren.',
      'With a preposition: die Firma, bei der ich arbeite.',
    ],
    [
      ['Das ist der Mann, der hier arbeitet.', 'That is the man who works here.'],
      ['Das ist ein Problem, das wir schon lange kennen.', "That's a problem we've known for a long time."],
      ['Die Firma, bei der ich arbeite, sitzt in Berlin.', 'The company I work for is based in Berlin.'],
    ],
    [['der Kollege, der ich kenne', 'der Kollege, den ich kenne', 'Inside the clause he is the object: accusative.']],
    ['Describe your favourite colleague with two relative clauses.'],
  ),

  topic(
    'konjunktiv-ii-polite',
    'B1',
    'B1',
    'Konjunktiv II',
    ['Wishes, guesses, politeness', 'İstək, ehtimal, nəzakət'],
    'hätte, wäre, könnte, müsste make requests polite and express wishes or unreal situations.',
    [
      'Own forms: wäre, hätte, könnte, müsste, sollte, dürfte.',
      'Polite request: "Könntest du ...?" "Hätten Sie kurz Zeit?"',
      'Wish: "Ich hätte gern ..." "Es wäre gut, wenn ..."',
      'Unreal: "Wenn ich mehr Zeit hätte, ..."',
    ],
    [
      ['Ich hätte gerne mehr Zeit.', 'I would like more time.'],
      ['Könntest du dir kurz meinen Pull Request anschauen?', 'Could you take a quick look at my pull request?'],
      ['Es wäre gut, wenn wir das heute klären.', 'It would be good to sort that out today.'],
    ],
    [['Ich würde eine Frage haben.', 'Ich hätte eine Frage.', 'haben and sein use their own forms.']],
    ['Ask your manager politely for a home office day.'],
  ),

  topic(
    'wuerde-infinitive',
    'B1',
    'B1',
    'Würde + Infinitiv',
    ['I would do', 'Edərdim, gedərdim'],
    'würde + infinitive is the everyday Konjunktiv II for almost all verbs except sein, haben and modals.',
    [
      'würde in position 2, infinitive at the end: "Ich würde das machen."',
      'Great for suggestions: "Ich würde vorschlagen, ..."',
      'Do not use it with sein and haben: wäre, hätte.',
    ],
    [
      ['Ich würde das machen.', 'I would do that.'],
      ['Ich würde vorschlagen, dass wir erst mal testen.', "I'd suggest we test first."],
      ['An deiner Stelle würde ich das Ticket schließen.', "In your place I'd close the ticket."],
    ],
    [['Ich würde mehr Zeit haben.', 'Ich hätte mehr Zeit.', 'haben uses hätte, not würde haben.']],
    ['Give a colleague three pieces of advice: An deiner Stelle würde ich ...'],
  ),

  topic(
    'zu-infinitive',
    'B1',
    'B1',
    'Zu + Infinitiv',
    ['to do something', 'Etməyə çalışmaq və s.'],
    'After many verbs and phrases the next verb comes at the end with zu.',
    [
      'Triggers: versuchen, vergessen, anfangen, aufhören, vorhaben, Lust haben, es ist wichtig.',
      'Separable verbs put zu in the middle: anzurufen.',
      'Never zu after modal verbs: "Ich muss gehen."',
    ],
    [
      ['Ich versuche, Deutsch zu lernen.', "I'm trying to learn German."],
      ['Ich habe vergessen, dir Bescheid zu sagen.', 'I forgot to let you know.'],
      ['Es ist wichtig, früh zu testen.', "It's important to test early."],
    ],
    [['Ich kann zu kommen.', 'Ich kann kommen.', 'Modal verbs never take zu.']],
    ['Say three things you plan to do this year: Ich habe vor, ... zu ...'],
  ),

  topic(
    'um-zu-damit',
    'B1',
    'B1',
    'Um ... zu',
    ['In order to', 'Məqsəd bildirmək'],
    'um ... zu gives a goal when the subject stays the same. When it changes, use damit.',
    [
      'Same subject: "Ich lerne, um besser zu sprechen."',
      'Different subject: "Ich erkläre es, damit du es verstehst."',
      'um ... zu puts the infinitive at the end.',
    ],
    [
      ['Ich lerne, um besser zu sprechen.', 'I study to speak better.'],
      ['Ich schreibe es auf, damit wir es nicht vergessen.', "I'll write it down so we don't forget."],
      ['Wir testen früh, um Fehler zu vermeiden.', 'We test early to avoid bugs.'],
    ],
    [['Ich lerne, damit ich spreche besser.', 'Ich lerne, um besser zu sprechen.', 'Same subject: use um ... zu.']],
    ['Say why you use this app, with um ... zu.'],
  ),

  topic(
    'concessive',
    'B1',
    'B1',
    'Obwohl',
    ['Although', 'Baxmayaraq ki'],
    'obwohl says "although" and sends the verb to the end. For a balanced argument use zwar ... aber.',
    [
      'obwohl + verb at the end: "Ich arbeite, obwohl ich müde bin."',
      'If the obwohl clause comes first, the main clause starts with the verb.',
      'zwar ... aber: "Zwar ist es teuer, aber es lohnt sich."',
    ],
    [
      ['Ich arbeite, obwohl ich müde bin.', "I'm working although I'm tired."],
      ['Obwohl es spät ist, schreibe ich noch die Tests.', "Although it's late, I'll write the tests."],
      ['Zwar ist die Lösung nicht elegant, aber sie funktioniert.', "The solution isn't elegant, but it works."],
    ],
    [['Obwohl es ist spät, ...', 'Obwohl es spät ist, ...', 'obwohl sends the verb to the end.']],
    ['Defend a decision you made at work with obwohl.'],
  ),

  topic(
    'trotzdem',
    'B1',
    'B1',
    'Trotzdem',
    ['Still, nevertheless', 'Buna baxmayaraq'],
    'trotzdem means "still / anyway". It takes position 1 or sits after the verb, and the word order stays a main clause.',
    [
      'Position 1: "Ich bin müde, trotzdem arbeite ich."',
      'Middle: "Ich bin müde, aber ich arbeite trotzdem."',
      'Pair it with obwohl to say the same thing: obwohl = subordinate clause, trotzdem = main clause.',
    ],
    [
      ['Ich bin müde, trotzdem arbeite ich.', "I'm tired, but I'm working anyway."],
      ['Es regnet, aber wir gehen trotzdem raus.', "It's raining, but we're going out anyway."],
      ['Das Meeting war lang. Trotzdem war es nützlich.', 'The meeting was long. Still, it was useful.'],
    ],
    [
      [
        'Ich bin müde, trotzdem ich arbeite.',
        'Ich bin müde, trotzdem arbeite ich.',
        'After trotzdem the verb comes first.',
      ],
    ],
    ["Say three things you do anyway, even when you don't feel like it."],
  ),

  topic(
    'bevor',
    'B1',
    'B1',
    'Bevor',
    ['Before doing something', 'Etməzdən əvvəl'],
    'bevor introduces what happens later. The verb goes to the end.',
    [
      'bevor + verb at the end: "Ruf mich an, bevor du gehst."',
      'Both clauses usually keep the same tense.',
      'For "before" with a noun use vor + dative: vor dem Meeting.',
    ],
    [
      ['Ruf mich an, bevor du gehst.', 'Call me before you leave.'],
      ['Bevor wir deployen, laufen alle Tests.', 'Before we deploy, all tests run.'],
      ['Ich trinke Kaffee, bevor das Meeting anfängt.', 'I drink coffee before the meeting starts.'],
    ],
    [
      [
        'Bevor du gehst, ruf mich an bitte.',
        'Bevor du gehst, ruf mich bitte an.',
        'Keep the separable prefix at the end of the main clause.',
      ],
    ],
    ['Describe what you do before work starts, with bevor.'],
  ),

  topic(
    'nachdem',
    'B1',
    'B1',
    'Nachdem',
    ['After doing something', 'Etdikdən sonra'],
    'nachdem introduces what happened first. Its clause is one tense further back: Plusquamperfekt with a past main clause, Perfekt with a present one.',
    [
      'Past story: "Nachdem ich gegessen hatte, ging ich los."',
      'Present: "Nachdem ich gegessen habe, gehe ich los."',
      'For "after" with a noun use nach + dative: nach dem Essen.',
    ],
    [
      ['Nachdem ich gegessen hatte, ging ich los.', 'After I had eaten, I left.'],
      [
        'Nachdem wir das Problem gefunden hatten, ging alles schnell.',
        'Once we had found the problem, everything went fast.',
      ],
      ['Nachdem ich die Mail geschrieben habe, rufe ich dich an.', "After I've written the email, I'll call you."],
    ],
    [
      [
        'Nachdem ich esse, gehe ich los.',
        'Nachdem ich gegessen habe, gehe ich los.',
        'nachdem needs the earlier, completed action.',
      ],
    ],
    ['Tell the order of your morning with nachdem.'],
  ),

  topic(
    'waehrend',
    'B1',
    'B1',
    'Während',
    ['While', 'Edərkən'],
    'während as a conjunction means two things happen at the same time. The verb goes to the end.',
    [
      'während + verb at the end: "Ich höre Musik, während ich arbeite."',
      'It can also contrast: "Er mag Kaffee, während ich Tee trinke."',
      'As a preposition it takes the genitive: während des Meetings.',
    ],
    [
      ['Ich höre Musik, während ich arbeite.', 'I listen to music while I work.'],
      ['Während du kochst, decke ich den Tisch.', "While you cook, I'll set the table."],
      ['Bitte nicht stören, während ich präsentiere.', "Please don't interrupt while I'm presenting."],
    ],
    [
      [
        'Während ich arbeite, ich höre Musik.',
        'Während ich arbeite, höre ich Musik.',
        'After the während clause the verb comes first.',
      ],
    ],
    ['Say two things you do at the same time, with während.'],
  ),

  topic(
    'indirect-questions',
    'B1',
    'B1',
    'Indirekte Fragen',
    ['Do you know if...?', 'Dolayı suallar'],
    'Indirect questions sound more polite. Yes/no questions take ob, W-questions keep the W-word, and the verb goes to the end.',
    [
      'Yes/no → ob: "Weißt du, ob er kommt?"',
      'W-word stays: "Kannst du mir sagen, wann das Meeting ist?"',
      'Verb at the end, no question word order.',
    ],
    [
      ['Weißt du, ob er kommt?', 'Do you know if he is coming?'],
      ['Kannst du mir sagen, wo der Drucker ist?', 'Can you tell me where the printer is?'],
      ['Ich weiß nicht, warum der Build fehlschlägt.', "I don't know why the build is failing."],
    ],
    [['Weißt du, kommt er?', 'Weißt du, ob er kommt?', 'Indirect yes/no questions need ob and the verb at the end.']],
    ['Ask a new colleague three polite indirect questions.'],
  ),

  topic(
    'verbs-prepositions',
    'B1',
    'B1',
    'Verben mit Präpositionen',
    ['warten auf, denken an', 'Sözönü tələb edən fellər'],
    'Many verbs come with a fixed preposition. Learn them as one block, together with the case.',
    [
      'The preposition fixes the case: warten auf + accusative, teilnehmen an + dative.',
      'Questions about things: wo(r) + preposition: "Worauf wartest du?"',
      'Pointing back: da(r) + preposition: "Ich warte darauf."',
    ],
    [
      ['Ich warte auf dich.', "I'm waiting for you."],
      ['Woran arbeitest du gerade?', 'What are you working on right now?'],
      ['Ich kümmere mich darum.', "I'll take care of it."],
    ],
    [['Ich warte für dich.', 'Ich warte auf dich.', 'warten always goes with auf.']],
    ['Say what you are working on and what you are waiting for.'],
  ),

  // B2 - Professional and fluent
  topic(
    'konjunktiv-ii-past',
    'B2',
    'B2',
    'Konjunktiv II Vergangenheit',
    ['What would have happened', 'Keçmişdə olsaydı'],
    'For things that did not happen: hätte or wäre + Partizip II. Perfect for retros.',
    [
      'hätte / wäre + Partizip II: "Ich hätte das anders gemacht."',
      'Condition without wenn: start with the verb: "Hätten wir früher getestet, ..."',
      'With a modal: "Das hätte ich dir sagen können."',
    ],
    [
      ['Ich hätte das anders gemacht.', 'I would have done that differently.'],
      [
        'Hätten wir früher getestet, wäre der Fehler nicht passiert.',
        'If we had tested earlier, the bug would not have happened.',
      ],
      ['Das hätte ich dir gleich sagen können.', 'I could have told you that right away.'],
    ],
    [
      [
        'Wenn ich das gewusst habe, wäre ich gekommen.',
        'Wenn ich das gewusst hätte, wäre ich gekommen.',
        'Both parts need Konjunktiv II.',
      ],
    ],
    ['Name one thing your team would have done differently last sprint.'],
  ),

  topic(
    'zustandspassiv',
    'B2',
    'B2',
    'Zustandspassiv',
    ['The result: it is done', 'İş artıq tamamlanıb'],
    'sein + Partizip II describes the state after an action. werden is the process, sein is the result.',
    [
      'Process: "Die Tür wird geschlossen." Result: "Die Tür ist geschlossen."',
      'Very common in status updates: "Das Ticket ist erledigt."',
      'Past: war + Partizip II.',
    ],
    [
      ['Die Tür ist geschlossen.', 'The door is closed.'],
      ['Das Ticket ist schon erledigt.', 'The ticket is already done.'],
      ['Der Server ist seit gestern aktualisiert.', 'The server has been updated since yesterday.'],
    ],
    [
      [
        'Das Büro wird geschlossen. (meaning: it is closed now)',
        'Das Büro ist geschlossen.',
        'For the current state use sein.',
      ],
    ],
    ['Give a status update: three things that are done, with ist + Partizip II.'],
  ),

  topic(
    'passive-past',
    'B2',
    'B2',
    'Passiv Vergangenheit',
    ['Was done', 'Keçmişdə edilən iş'],
    'Past passive: wurde + Partizip II in writing and reports; ist ... worden in conversation.',
    [
      'Präteritum: "Der Fehler wurde behoben."',
      'Perfekt: "Der Fehler ist behoben worden."',
      'Doer if needed: von + dative.',
    ],
    [
      ['Der Fehler wurde behoben.', 'The bug was fixed.'],
      ['Die Daten wurden gestern gelöscht.', 'The data was deleted yesterday.'],
      ['Das Feature ist schon getestet worden.', 'The feature has already been tested.'],
    ],
    [['Der Fehler wurde behoben geworden.', 'Der Fehler wurde behoben.', 'wurde + Partizip II is enough.']],
    ['Describe an incident in the past passive: what was found, fixed and tested.'],
  ),

  topic(
    'passive-modal',
    'B2',
    'B2',
    'Passiv mit Modalverben',
    ['It must be done', 'Modal fellərlə passiv'],
    'Modal verb in position 2, "Partizip II + werden" at the end.',
    [
      'Main clause: "Das muss noch getestet werden."',
      'In a dass clause the modal goes last: "..., dass das getestet werden muss."',
      'Formal alternative: ist zu + infinitive.',
    ],
    [
      ['Die Änderung muss noch getestet werden.', 'The change still needs to be tested.'],
      ['Das Ticket sollte bis Freitag erledigt werden.', 'The ticket should be done by Friday.'],
      ['Das kann nicht einfach gelöscht werden.', "That can't just be deleted."],
    ],
    [['Das muss getestet sein.', 'Das muss getestet werden.', 'werden is the process, sein only the finished state.']],
    ['List three things that must be done before the release.'],
  ),

  topic(
    'lassen',
    'B2',
    'B2',
    'Lassen',
    ['Have something done, let', 'Etdirmək, icazə vermək'],
    'lassen + infinitive means you have someone else do it, or you allow it.',
    [
      'Have done: "Ich lasse mein Auto reparieren."',
      'Allow: "Lass mich das machen."',
      'Leave: "Ich lasse den Laptop im Büro."',
      'Perfekt with two infinitives: "Ich habe das Auto reparieren lassen."',
    ],
    [
      ['Ich lasse mein Auto reparieren.', "I'm having my car repaired."],
      ['Lass mich kurz erklären.', 'Let me explain briefly.'],
      ['Ich habe mir die Haare schneiden lassen.', 'I had my hair cut.'],
    ],
    [
      [
        'Ich habe das Auto reparieren gelassen.',
        'Ich habe das Auto reparieren lassen.',
        'With another infinitive the Perfekt uses lassen, not gelassen.',
      ],
    ],
    ['Say three things you have done for you instead of doing them yourself.'],
  ),

  topic(
    'nominalization',
    'B2',
    'B2',
    'Nominalisierung',
    ['Turning verbs into nouns', 'Feli ismə çevirmək'],
    'Business and written German often turns verbs into nouns. Use it in emails; in meetings verbs sound more natural.',
    [
      'Infinitive as a noun (always das): das Lernen, beim Arbeiten.',
      '-ung from verbs: einführen → die Einführung.',
      'Frames: nach der Einführung, bei der Umsetzung, zur Verbesserung.',
    ],
    [
      ['Das Lernen macht Spaß.', 'Learning is fun.'],
      [
        'Die Einführung des neuen Systems hat länger gedauert als geplant.',
        'Introducing the new system took longer than planned.',
      ],
      ['Beim Testen ist uns ein Fehler aufgefallen.', 'We noticed a bug while testing.'],
    ],
    [
      [
        'Nach dem Einführen des Systems',
        'Nach der Einführung des Systems',
        'When an -ung noun exists, it is the normal choice.',
      ],
    ],
    ['Turn "Wenn wir das System umstellen" into "Bei der Umstellung ..."'],
  ),

  topic(
    'partizip-1',
    'B2',
    'B2',
    'Partizip I',
    ['-ing: the waiting customer', 'Edən şəxs və ya əşya'],
    'Partizip I = infinitive + d. It describes something happening right now, and before a noun it takes adjective endings.',
    [
      'Form: wartend, laufend, steigend.',
      'Before a noun: "der wartende Kunde", "das laufende Projekt".',
      'As an adverb: "Er kam lachend ins Büro."',
    ],
    [
      ['Der wartende Kunde ist müde.', 'The waiting customer is tired.'],
      ['Das laufende Projekt hat Priorität.', 'The ongoing project has priority.'],
      ['Die steigenden Kosten machen uns Sorgen.', 'The rising costs worry us.'],
    ],
    [['der warten Kunde', 'der wartende Kunde', 'Partizip I needs -d plus the adjective ending.']],
    ['Describe three things happening right now at work with Partizip I.'],
  ),

  topic(
    'participle-attributes',
    'B2',
    'B2',
    'Partizip II als Adjektiv',
    ['the finished task', 'Edilmiş işin təsviri'],
    'Partizip II before a noun describes something already done. It takes adjective endings and can carry extra details.',
    [
      'Done / passive: "die erledigte Aufgabe".',
      'Extra details sit between article and participle: "die im Sprint gefundenen Fehler".',
      'Unpack it like a relative clause: die Fehler, die im Sprint gefunden wurden.',
    ],
    [
      ['Die erledigte Aufgabe ist wichtig.', 'The completed task is important.'],
      ['Die im letzten Sprint gefundenen Fehler sind behoben.', 'The bugs found in the last sprint are fixed.'],
      ['Das gelieferte Paket war beschädigt.', 'The delivered package was damaged.'],
    ],
    [['die gefunden Fehler', 'die gefundenen Fehler', 'Participles before a noun take adjective endings.']],
    ['Say "the bugs that were fixed yesterday" as a participle attribute.'],
  ),

  topic(
    'je-desto',
    'B2',
    'B2',
    'Je ... desto',
    ['The more..., the more...', 'Nə qədər, bir o qədər'],
    'je + comparative (verb at the end), desto + comparative (verb next).',
    [
      'First part like a subordinate clause: "Je mehr ich übe, ..."',
      'Second part: desto/umso + comparative + verb: "..., desto besser spreche ich."',
      'umso means the same as desto.',
    ],
    [
      ['Je mehr ich übe, desto besser spreche ich.', 'The more I practise, the better I speak.'],
      [
        'Je früher wir anfangen, desto entspannter wird der Release.',
        'The earlier we start, the more relaxed the release.',
      ],
      ['Je länger ich hier wohne, umso besser gefällt es mir.', 'The longer I live here, the more I like it.'],
    ],
    [['..., desto ich spreche besser.', '..., desto besser spreche ich.', 'desto + comparative, then the verb.']],
    ['Make three je ... desto sentences about learning German.'],
  ),

  topic(
    'sowohl-als-auch',
    'B2',
    'B2',
    'Sowohl ... als auch',
    ['Both ... and', 'Həm, həm də'],
    'sowohl ... als auch connects two things that are both true. It sounds more structured than und.',
    [
      'Both parts are equal: "sowohl Deutsch als auch Englisch".',
      'With two subjects the verb is usually plural.',
      'Negative twin: weder ... noch (neither ... nor).',
    ],
    [
      ['Ich spreche sowohl Deutsch als auch Englisch.', 'I speak both German and English.'],
      ['Wir brauchen sowohl Tests als auch eine gute Dokumentation.', 'We need both tests and good documentation.'],
      ['Weder das Frontend noch das Backend ist betroffen.', 'Neither the frontend nor the backend is affected.'],
    ],
    [['sowohl Deutsch und Englisch', 'sowohl Deutsch als auch Englisch', 'The pair is always sowohl ... als auch.']],
    ['Describe your skills with sowohl ... als auch.'],
  ),

  topic(
    'entweder-oder',
    'B2',
    'B2',
    'Entweder ... oder',
    ['Either ... or', 'Ya, ya da'],
    'entweder ... oder offers two options. entweder can take position 1 or 0.',
    [
      'Position 0 (normal order): "Entweder du kommst, oder ich gehe."',
      'Position 1 (verb next): "Entweder kommst du, oder ich gehe."',
      'Both are correct; the second sounds more spoken.',
    ],
    [
      ['Entweder kommst du oder ich gehe.', 'Either you come or I go.'],
      ['Wir können entweder heute oder morgen telefonieren.', 'We can talk either today or tomorrow.'],
      [
        'Entweder wir verschieben den Release, oder wir streichen das Feature.',
        'Either we postpone the release or we drop the feature.',
      ],
    ],
    [
      [
        'Entweder du kommst, ich gehe oder.',
        'Entweder du kommst, oder ich gehe.',
        'oder always opens the second option.',
      ],
    ],
    ['Offer two options for solving a problem at work.'],
  ),

  // C1-C2 - Advanced
  topic(
    'konjunktiv-1',
    'C1',
    'C',
    'Konjunktiv I',
    ['Reporting what others say', 'Başqasının dediyini çatdırmaq'],
    'Konjunktiv I marks reported speech as neutral: it is what someone said, not your own claim. Common in news and formal writing.',
    [
      'Main forms: er/sie sei, habe, werde, könne, müsse, gebe.',
      'Mostly the 3rd person singular is used.',
      'If it looks like the indicative, switch to Konjunktiv II: sie hätten.',
    ],
    [
      ['Er sagt, er sei krank.', 'He says he is ill.'],
      ['Laut Hersteller sei das Problem bekannt.', 'According to the vendor, the problem is known.'],
      ['Der Kunde sagt, er habe die Mail nie bekommen.', 'The customer says he never received the email.'],
    ],
    [['Er sagt, er ist krank. (in a report)', 'Er sagt, er sei krank.', 'Reports use Konjunktiv I to stay neutral.']],
    ['Report what your manager said in the last meeting, in two sentences.'],
  ),

  topic(
    'indirect-speech',
    'C1',
    'C',
    'Indirekte Rede',
    ['Reported speech', 'Dolayı nitq'],
    'Reported speech changes pronouns and often the verb form. In speech dass + indicative is fine; in writing use Konjunktiv I.',
    [
      'Pronouns shift: "Ich bin müde." → Er sagt, er sei müde.',
      'Questions: ob / W-word: Sie fragt, ob ich Zeit habe.',
      'Commands: sollen: Er sagt, ich solle warten.',
    ],
    [
      ['Er behauptet, er habe keine Zeit.', 'He claims he has no time.'],
      ['Sie fragt, ob wir morgen kommen.', 'She asks whether we are coming tomorrow.'],
      ['Der Chef sagt, wir sollen warten.', 'The boss says we should wait.'],
    ],
    [
      [
        'Er sagt, ich habe keine Zeit. (meaning: he has no time)',
        'Er sagt, er habe keine Zeit.',
        'Shift the pronoun to the speaker.',
      ],
    ],
    ['Retell a conversation you had today in reported speech.'],
  ),

  topic(
    'futur-2',
    'C1',
    'C',
    'Futur II',
    ['Will have done', 'Gələcəkdə tamamlanmış iş'],
    'werden + Partizip II + haben/sein. Used for something finished by a future point, or a guess about the past.',
    [
      'Future completed: "Bis Freitag werde ich das erledigt haben."',
      'Guess about the past: "Er wird den Zug verpasst haben."',
      'In speech Perfekt + time often replaces it: "Bis Freitag habe ich das erledigt."',
    ],
    [
      ['Bis morgen werde ich fertig geworden sein.', 'By tomorrow I will have finished.'],
      ['Bis Freitag werde ich das Ticket erledigt haben.', 'By Friday I will have done the ticket.'],
      ['Er wird wohl den Zug verpasst haben.', 'He has probably missed the train.'],
    ],
    [
      [
        'Bis Freitag werde ich das erledigt.',
        'Bis Freitag werde ich das erledigt haben.',
        'Futur II needs haben or sein at the end.',
      ],
    ],
    ['Say what you will have achieved by the end of this year.'],
  ),

  topic(
    'irreal-comparison',
    'C1',
    'C',
    'Irreale Vergleichssätze',
    ['As if', 'Sanki, elə bil'],
    'als ob / als wenn + Konjunktiv II for comparisons that are not true. With als alone the verb comes right after it.',
    [
      'als ob + verb at the end: "als ob er alles wüsste."',
      'als + verb first: "als wüsste er alles."',
      'Often after tun, aussehen, klingen: "Es klingt, als ob ..."',
    ],
    [
      ['Er tut so, als ob er alles wüsste.', 'He acts as if he knew everything.'],
      ['Es sieht so aus, als hätte niemand den Code getestet.', 'It looks as if nobody had tested the code.'],
      ['Du klingst, als wärst du müde.', 'You sound as if you were tired.'],
    ],
    [
      [
        'Er tut so, als ob er alles weiß.',
        'Er tut so, als ob er alles wüsste.',
        'Unreal comparisons take Konjunktiv II.',
      ],
    ],
    ['Describe someone who pretends: Er tut so, als ob ...'],
  ),

  topic(
    'participial-constructions',
    'C1',
    'C',
    'Partizipialkonstruktionen',
    ['Shortening clauses', 'Cümlələri qısaltmaq'],
    'A participle phrase can replace a whole subordinate clause. Written and formal; in speech use the full clause.',
    [
      '"Als er in Berlin angekommen war, ..." → "In Berlin angekommen, ..."',
      'The subject must be the same in both parts.',
      'Common fixed ones: offen gesagt, genau genommen, abgesehen davon.',
    ],
    [
      ['In Berlin angekommen, rief er mich an.', 'Having arrived in Berlin, he called me.'],
      ['Offen gesagt, finde ich die Idee nicht gut.', "Frankly, I don't like the idea."],
      ['Abgesehen davon ist alles fertig.', 'Apart from that, everything is ready.'],
    ],
    [
      [
        'In Berlin angekommen, das Wetter war schlecht.',
        'Als ich in Berlin ankam, war das Wetter schlecht.',
        'The participle phrase must share the subject of the main clause.',
      ],
    ],
    ['Use offen gesagt and genau genommen in a short opinion.'],
  ),

  topic(
    'subjective-modals',
    'C1',
    'C',
    'Subjektive Modalverben',
    ['How sure are you?', 'Nə qədər əminsən?'],
    'Modal verbs can show how certain you are or what others claim: "Er soll gekündigt haben" = he is said to have quit.',
    [
      'muss = almost certain. dürfte = probably. kann/könnte = possibly.',
      'soll = people say so: "Er soll gekündigt haben."',
      'will = he claims: "Er will nichts gewusst haben."',
    ],
    [
      ['Er soll schon gekündigt haben.', 'He is said to have quit already.'],
      ['Das dürfte kein großes Problem sein.', "That probably won't be a big problem."],
      ['Der Fehler muss im Cache liegen.', 'The bug must be in the cache.'],
    ],
    [
      [
        'Er will krank sein. (meaning: people say)',
        'Er soll krank sein.',
        'soll reports what others say; will reports his own claim.',
      ],
    ],
    ['Speculate why the build is failing, using muss, dürfte and könnte.'],
  ),

  topic(
    'n-declination',
    'C2',
    'C',
    'N-Deklination',
    ['der Kollege → den Kollegen', 'Bəzi kişi isimlərinə -n/-en artırmaq'],
    'Some masculine nouns add -n or -en in every case except the nominative singular.',
    [
      'Typical: persons and animals ending in -e: der Kollege, der Kunde, der Junge.',
      'Also -ent, -ant, -ist: der Student, der Praktikant, der Journalist; and der Herr, der Mensch, der Nachbar.',
      'Nominative singular only without -n: "Der Kollege kommt."',
    ],
    [
      ['Ich spreche mit dem Kollegen.', "I'm talking to the colleague."],
      ['Wir haben einen neuen Praktikanten.', 'We have a new intern.'],
      ['Kennst du den Kunden?', 'Do you know the customer?'],
    ],
    [['Ich habe den Kunde angerufen.', 'Ich habe den Kunden angerufen.', 'der Kunde follows the n-declination.']],
    ['Talk about your colleagues and clients: mit dem Kollegen, für den Kunden ...'],
  ),

  topic(
    'funktionsverbgefuege',
    'C2',
    'C',
    'Funktionsverbgefüge',
    ['Fixed noun + verb phrases', 'İsim və fellə sabit ifadələr'],
    'Fixed noun + verb chunks of professional German. The meaning sits in the noun; the verb is almost empty.',
    [
      'Learn them as chunks: eine Entscheidung treffen, in Frage kommen, zur Verfügung stehen.',
      'They sound formal: great in emails and meetings, stiff at the Kneipe.',
      'Many have a simple verb twin: zur Sprache bringen ≈ ansprechen.',
    ],
    [
      ['Wir treffen eine Entscheidung.', 'We make a decision.'],
      ['Ich möchte das in der Retro zur Sprache bringen.', "I'd like to bring that up in the retro."],
      ['Diesen Nachteil nehmen wir in Kauf.', 'We accept this downside.'],
    ],
    [['eine Entscheidung machen', 'eine Entscheidung treffen', 'Decisions are "getroffen", never "gemacht".']],
    ['Write an email sentence with "zur Verfügung stellen".'],
  ),

  topic(
    'genitive-prepositions',
    'C2',
    'C',
    'Genitiv-Präpositionen',
    ['wegen, trotz, aufgrund', 'Genitiv tələb edən sözönülər'],
    'Formal writing uses prepositions with the genitive. In speech wegen and trotz often take the dative.',
    [
      'aufgrund, hinsichtlich, bezüglich, innerhalb, außerhalb, infolge: genitive.',
      'wegen and trotz: genitive in writing, dative fine in speech.',
      'Genitive: des / eines + -(e)s for der/das nouns, der for die and plural.',
    ],
    [
      ['Wegen des Wetters bleibe ich zu Hause.', "Because of the weather I'm staying home."],
      [
        'Aufgrund eines technischen Problems ist die Seite offline.',
        'Due to a technical problem, the site is offline.',
      ],
      ['Innerhalb der nächsten Woche bekommen Sie eine Antwort.', "You'll get an answer within the next week."],
    ],
    [['aufgrund dem Problem', 'aufgrund des Problems', 'aufgrund takes the genitive.']],
    ['Write a status update sentence with "aufgrund".'],
  ),

  topic(
    'haben-sein-zu',
    'C2',
    'C',
    'Haben/Sein + zu',
    ['Must be done / have to', 'Etmək lazımdır, edilməlidir'],
    'sein + zu + infinitive = must / can be done (passive). haben + zu + infinitive = have to (active). Formal and common in rules and emails.',
    [
      'sein + zu: "Das Problem ist zu lösen." = muss / kann gelöst werden.',
      'haben + zu: "Sie haben das Formular auszufüllen." = müssen.',
      'Separable verbs: auszufüllen, abzugeben.',
    ],
    [
      ['Das Problem ist zu lösen.', 'The problem must be solved.'],
      ['Die Unterlagen sind bis Freitag abzugeben.', 'The documents must be submitted by Friday.'],
      ['Sie haben nur noch das Formular auszufüllen.', 'You only have to fill in the form.'],
    ],
    [
      [
        'Das ist bis Freitag zu erledigen werden.',
        'Das ist bis Freitag zu erledigen.',
        'sein + zu already expresses the passive.',
      ],
    ],
    ['Write two office rules with "ist ... zu ...".'],
  ),

  topic(
    'modal-particles',
    'C2',
    'C',
    'Modalpartikeln',
    ['doch, mal, halt, ja, eben', 'Danışığa təbii ton verən sözlər'],
    'Small words that carry tone. They are what makes German sound natural and friendly instead of textbook.',
    [
      'mal softens requests: "Kannst du mal schauen?"',
      'doch encourages or contradicts: "Komm doch mit!" / "Das ist doch klar!"',
      'ja marks shared knowledge or surprise: "Das ist ja interessant!"',
      'halt / eben: that is just how it is: "Das ist halt so."',
    ],
    [
      ['Das ist doch klar!', "That's obvious!"],
      ['Komm doch einfach mal vorbei!', 'Just drop by sometime!'],
      ['Das ist halt so.', "That's just how it is."],
    ],
    [['Kannst du schauen?', 'Kannst du mal schauen?', 'Correct, but without mal it can sound abrupt.']],
    ['Invite a friend to a barbecue, using doch and mal.'],
  ),

  topic(
    'ausklammerung',
    'C2',
    'C',
    'Ausklammerung',
    ['What goes after the final verb', 'Son feldən sonra gələnlər'],
    'Native speakers put some parts after the final verb so sentences stay easy to follow.',
    [
      'Comparisons with als / wie come after the bracket: "Das hat länger gedauert als geplant."',
      'dass and relative clauses always go after it.',
      'In speech long prepositional phrases often move out; in formal writing keep them inside.',
    ],
    [
      ['Die Einführung hat länger gedauert als geplant.', 'The rollout took longer than planned.'],
      ['Ich habe dir doch gesagt, dass das nicht klappt.', "I told you it wouldn't work."],
      [
        'Wir haben lange diskutiert über die Frage, wer das bezahlt.',
        'We discussed for a long time who would pay for it.',
      ],
    ],
    [
      [
        'Das hat als geplant länger gedauert.',
        'Das hat länger gedauert als geplant.',
        'The als-comparison goes after the participle.',
      ],
    ],
    ['Describe a project that took longer or cost more than planned.'],
  ),
];

export const getGrammarTopic = (id) => GRAMMAR_TOPICS.find((t) => t.id === id);
