// Daily gifts and encouragement. Every gift is a real German phrase plus a
// short personal note. Notes are written to sound like a friend, not a poster:
// small wins, identity ("someone who speaks German at work"), and comparison
// only with yesterday's self. Keep new notes in that voice. No exclamation
// marks unless the German phrase itself has one, no em dashes.

const g = (id, de, en, az, noteEn, noteAz) => ({ id, de, tr: { en, az }, note: { en: noteEn, az: noteAz } });

// Shown on specific days of the learner's journey.
export const MILESTONE_GIFTS = {
  1: g(
    'm1',
    'Der erste Schritt ist der wichtigste.',
    'The first step matters most.',
    'İlk addım ən vacibidir.',
    "Day one. You stopped waiting for the perfect moment to start. That decision is the hardest part, and it's already done.",
    'Birinci gün. Başlamaq üçün mükəmməl anı gözləməyi dayandırdın. Ən çətin hissə bu qərar idi və o artıq edilib.',
  ),
  3: g(
    'm3',
    'Dranbleiben!',
    'Stick with it!',
    'Davam et!',
    "Three days. Most people quit somewhere before this point. You didn't.",
    'Üç gün. İnsanların çoxu bu nöqtədən əvvəl dayanır. Sən dayanmadın.',
  ),
  7: g(
    'm7',
    'Eine Woche geschafft.',
    'One week done.',
    'Bir həftə geridə qaldı.',
    'A full week. Your brain has started to expect German every day. Keep feeding it.',
    'Tam bir həftə. Beynin artıq hər gün almanca gözləyir. Onu yedizdirməyə davam et.',
  ),
  14: g(
    'm14',
    'Zwei Wochen. Respekt!',
    'Two weeks. Respect!',
    'İki həftə. Hörmət!',
    'Two weeks of this and you stop feeling like the outsider in the room. You hesitate less, and people notice before you do.',
    'İki həftə belə davam etdin və otaqda özünü kənar adam kimi hiss etməyəcəksən. Daha az tərəddüd edirsən və bunu insanlar səndən əvvəl görür.',
  ),
  21: g(
    'm21',
    'Das wird zur Gewohnheit.',
    'This is becoming a habit.',
    'Bu, vərdişə çevrilir.',
    "Three weeks. This isn't a resolution anymore, it's a habit. Habits don't need motivation.",
    'Üç həftə. Bu artıq qərar deyil, vərdişdir. Vərdişin motivasiyaya ehtiyacı yoxdur.',
  ),
  30: g(
    'm30',
    'Ein ganzer Monat!',
    'A whole month!',
    'Tam bir ay!',
    'A month. Scroll back to your first gift and remember how you sounded then.',
    'Bir ay. İlk hədiyyənə qayıt və o vaxt necə danışdığını xatırla.',
  ),
  60: g(
    'm60',
    'Du sprichst Deutsch.',
    'You speak German.',
    'Sən almanca danışırsan.',
    "Two months. Stop saying you're learning German. You speak it, with mistakes, like everyone else does.",
    'İki ay. "Almanca öyrənirəm" deməyi dayandır. Sən almanca danışırsan, hamı kimi səhvlərlə.',
  ),
  100: g(
    'm100',
    'Hundert Tage. Wahnsinn.',
    'A hundred days. Unreal.',
    'Yüz gün. İnanılmaz.',
    "A hundred days of showing up. Whatever level you started at, you're not that person anymore.",
    'Yüz gün ərzində gəldin. Hansı səviyyədən başlamağından asılı olmayaraq, artıq o insan deyilsən.',
  ),
};

// The everyday rotation, in order. Each learner walks through them once
// before any repeats.
export const DAILY_GIFTS = [
  g(
    'd01',
    'Besser als gestern.',
    'Better than yesterday.',
    'Dünənkindən yaxşı.',
    "You're not competing with native speakers. You're competing with yesterday's you. Today you won.",
    'Sən ana dili daşıyıcıları ilə yarışmırsan. Dünənki özünlə yarışırsan. Bu gün sən qazandın.',
  ),
  g(
    'd02',
    'Schritt für Schritt.',
    'Step by step.',
    'Addım-addım.',
    "You don't have to fix your German today. Take one step. Tomorrow, another one.",
    'Bu gün almancanı düzəltmək məcburiyyətində deyilsən. Bir addım at. Sabah daha birini.',
  ),
  g(
    'd03',
    'Kein Grund zur Sorge.',
    'No reason to worry.',
    'Narahat olmağa səbəb yoxdur.',
    "Feel awkward when you speak German? Don't worry about it. We'll get past it together, one sentence at a time.",
    'Almanca danışanda özünü narahat hiss edirsən? Darıxma. Bunu birlikdə aşacağıq, cümlə-cümlə.',
  ),
  g(
    'd04',
    'Fehler sind Helfer.',
    'Mistakes are helpers.',
    'Səhvlər köməkçidir.',
    "Every mistake you make here is one you won't make in the meeting. That's the whole point of practising.",
    'Burada etdiyin hər səhv iclasda etməyəcəyin səhvdir. Məşqin bütün mənası budur.',
  ),
  g(
    'd05',
    'Aller Anfang ist schwer.',
    'Every beginning is hard.',
    'Hər başlanğıc çətindir.',
    "If today felt clumsy, good. That's what the start of fluent feels like.",
    'Bu gün özünü yöndəmsiz hiss etdinsə, yaxşıdır. Səlisliyin başlanğıcı məhz belə hiss olunur.',
  ),
  g(
    'd06',
    'Mut tut gut.',
    'Courage does you good.',
    'Cəsarət xeyirdir.',
    'Say one German sentence to a real person today. Ordering a coffee counts.',
    'Bu gün real bir insana bir almanca cümlə de. Kofe sifariş etmək də sayılır.',
  ),
  g(
    'd07',
    'Kopf hoch!',
    'Chin up!',
    'Başını dik tut!',
    "Your accent isn't a problem. It's proof that you speak more than one language.",
    'Aksentin problem deyil. Bir dildən çox danışdığının sübutudur.',
  ),
  g(
    'd08',
    'Ich schaffe das.',
    'I can do this.',
    'Mən bunu bacarıram.',
    'Say it out loud, in German. Your brain tends to believe what it hears you say.',
    'Bunu ucadan, almanca de. Beyin sənin dediyinə inanmağa meyllidir.',
  ),
  g(
    'd09',
    'Ohne Fleiß kein Preis.',
    'No effort, no reward.',
    'Zəhmətsiz nəticə olmur.',
    'Nobody sees the ten minutes you put in today. In a few weeks everyone will hear them.',
    'Bu gün qoyduğun on dəqiqəni heç kim görmür. Bir neçə həftəyə hamı onu eşidəcək.',
  ),
  g(
    'd10',
    'Langsam, aber sicher.',
    'Slowly but surely.',
    'Yavaş, amma əmin.',
    'Speaking slowly and correctly beats speaking fast and freezing. Speed comes on its own.',
    'Yavaş və düzgün danışmaq, tez danışıb donub qalmaqdan yaxşıdır. Sürət öz-özünə gəlir.',
  ),
  g(
    'd11',
    'Das kriegen wir hin.',
    "We'll manage that.",
    'Bunun öhdəsindən gələrik.',
    "You're not doing this alone. Open the app, do a few sentences, close it. We get there together.",
    'Bunu tək etmirsən. Tətbiqi aç, bir neçə cümlə et, bağla. Birlikdə çatacağıq.',
  ),
  g(
    'd12',
    'Wer nicht wagt, der nicht gewinnt.',
    'Nothing ventured, nothing gained.',
    'Risk etməyən qazanmaz.',
    "Raise your hand in the next meeting, even for a small question. That's how the fear gets smaller.",
    'Növbəti iclasda əlini qaldır, kiçik bir sual üçün belə. Qorxu belə kiçilir.',
  ),
  g(
    'd13',
    'Rom wurde nicht an einem Tag erbaut.',
    'Rome was not built in a day.',
    'Roma bir gündə tikilməyib.',
    "Fluency isn't one big day. It's a pile of ordinary days like this one.",
    'Səlislik bir böyük gün deyil. Bu gün kimi adi günlərin toplusudur.',
  ),
  g(
    'd14',
    'Ich bin dabei.',
    'I am in.',
    'Mən varam.',
    'Showing up is the skill. You showed up today.',
    'Gəlmək özü bir bacarıqdır. Bu gün gəldin.',
  ),
  g(
    'd15',
    'Probieren geht über Studieren.',
    'Trying beats studying.',
    'Sınamaq oxumaqdan üstündür.',
    "You don't need one more grammar table. You need one more real sentence, said out loud.",
    'Daha bir qrammatika cədvəlinə ehtiyacın yoxdur. Ucadan deyilmiş daha bir real cümləyə ehtiyacın var.',
  ),
  g(
    'd16',
    'Nur Mut!',
    'Be brave!',
    'Cəsarətli ol!',
    'Self-conscious about your German? Everyone who speaks well felt exactly that once. It fades while you keep talking.',
    'Almancana görə utanırsan? Yaxşı danışan hər kəs bir vaxt eyni şeyi hiss edib. Danışdıqca keçir.',
  ),
  g(
    'd17',
    'Gut Ding will Weile haben.',
    'Good things take time.',
    'Yaxşı şey vaxt istəyir.',
    "Words that come back slowly are being stored deeper. That's not a bug.",
    'Yavaş qayıdan sözlər daha dərinə yazılır. Bu, xəta deyil.',
  ),
  g(
    'd18',
    'Heute ist ein guter Tag.',
    'Today is a good day.',
    'Bu gün yaxşı gündür.',
    'Not Monday. Not next month. Today works just fine.',
    'Bazar ertəsi yox. Gələn ay yox. Bu gün də tam olar.',
  ),
  g(
    'd19',
    'Einfach machen.',
    'Just do it.',
    'Sadəcə et.',
    'Stop waiting to feel ready. Ready shows up after you start.',
    'Hazır hiss etməyi gözləmə. Hazırlıq başlayandan sonra gəlir.',
  ),
  g(
    'd20',
    'Du bist nicht allein.',
    "You're not alone.",
    'Tək deyilsən.',
    "Millions of people in Germany learned German as adults. You're in very good company.",
    'Almaniyada milyonlarla insan almancanı böyük yaşda öyrənib. Çox yaxşı bir dəstədəsən.',
  ),
  g(
    'd21',
    'Weniger ist mehr.',
    'Less is more.',
    'Az, çoxdur.',
    'Five sentences you really own beat fifty you scrolled past.',
    'Həqiqətən mənimsədiyin beş cümlə, ötüb keçdiyin əllisindən yaxşıdır.',
  ),
  g(
    'd22',
    'Morgenstund hat Gold im Mund.',
    'The early bird catches the worm.',
    'Səhər tezdən başlayan qazanır.',
    "A few sentences with your morning coffee. Your head's quieter now than it will be all day.",
    'Səhər kofesi ilə bir neçə cümlə. Başın indi günün qalanından daha sakitdir.',
  ),
  g(
    'd23',
    'Jeder Tag zählt.',
    'Every day counts.',
    'Hər gün sayılır.',
    'Even the short days. Especially the short days.',
    'Qısa günlər də. Xüsusilə qısa günlər.',
  ),
  g(
    'd24',
    'Das ist mein Ding.',
    'This is my thing.',
    'Bu, mənim işimdir.',
    'You\'re becoming someone who speaks German at work. Not someone who is "still learning it".',
    'Sən işdə almanca danışan birinə çevrilirsən. "Hələ öyrənən" birinə yox.',
  ),
  g(
    'd25',
    'Halb so wild.',
    'Not that bad.',
    'O qədər də qorxulu deyil.',
    "The grammar you're scared of is smaller than it looks. Open one topic today. Just one.",
    'Qorxduğun qrammatika göründüyündən kiçikdir. Bu gün bir mövzu aç. Cəmi birini.',
  ),
  g(
    'd26',
    'Ich lerne jeden Tag dazu.',
    'I learn something every day.',
    'Hər gün yeni bir şey öyrənirəm.',
    "Look at your gifts from last week. You know more than you did then. That's not a feeling, it's a fact.",
    'Keçən həftəki hədiyyələrinə bax. O vaxtdan çox bilirsən. Bu hiss deyil, faktdır.',
  ),
  g(
    'd27',
    'Zusammen schaffen wir das.',
    "Together we'll make it.",
    'Birlikdə bacararıq.',
    "You bring ten minutes, the app brings the sentences. That's the deal.",
    'Sən on dəqiqə gətir, tətbiq cümlələri gətirir. Razılaşma budur.',
  ),
  g(
    'd28',
    'Lieber spät als nie.',
    'Better late than never.',
    'Gec olsun, güc olmasın.',
    "Started late? You're still earlier than everyone who never started.",
    'Gec başladın? Yenə də heç başlamayanların hamısından tezsən.',
  ),
  g(
    'd29',
    'Ende gut, alles gut.',
    'All is well that ends well.',
    'Sonu yaxşı olan hər şey yaxşıdır.',
    'However the day went, ending it with five German sentences is a good ending.',
    'Gün necə keçdisə keçsin, onu beş almanca cümlə ilə bitirmək yaxşı sondur.',
  ),
  g(
    'd30',
    'Übung macht den Meister.',
    'Practice makes perfect.',
    'Təcrübə ustad edir.',
    'Nobody is born fluent. Every sentence you say out loud is one repetition, and repetitions add up.',
    'Heç kim səlis danışan doğulmur. Ucadan dediyin hər cümlə bir təkrardır və təkrarlar toplanır.',
  ),
];

// Short lines after a correct answer, picked at random.
export const ENCOURAGEMENT = {
  firstTry: {
    en: [
      'Sehr gut. That sentence is yours now.',
      'Exactly right.',
      'Clean. Next one.',
      "That's how a German would say it.",
      'Your brain just found that a little faster.',
      'Correct, and you barely hesitated.',
      'Nice. Keep the rhythm.',
    ],
    az: [
      'Sehr gut. Bu cümlə artıq sənindir.',
      'Tam düzdür.',
      'Təmiz. Növbəti.',
      'Almanlar da məhz belə deyir.',
      'Beynin bunu indi bir az daha tez tapdı.',
      'Düzdür, demək olar ki, tərəddüd etmədin.',
      'Əla. Ritmi saxla.',
    ],
  },
  retry: {
    en: [
      "Got it on the second try. That's exactly how it sticks.",
      "There it's. Fixing it yourself is how you remember it.",
    ],
    az: [
      'İkinci cəhddə tapdın. Yaddaşda məhz belə qalır.',
      'Budur. Səhvi özün düzəltmək yadda saxlamağın ən yaxşı yoludur.',
    ],
  },
  wrong: {
    en: ['Almost. Move a word or two and check again.', 'Close. Look at the red words and try once more.'],
    az: ['Az qala. Bir-iki sözün yerini dəyiş və yenə yoxla.', 'Yaxındır. Qırmızı sözlərə bax və bir də cəhd et.'],
  },
};

// Shown at the end of a session, by how it went.
export const SESSION_END = {
  perfect: {
    en: 'Clean session. This is what fluent feels like, in small doses.',
    az: 'Təmiz sessiya. Səlislik kiçik dozalarda belə hiss olunur.',
  },
  good: {
    en: "Good work. Better than yesterday, and that's the only comparison that counts.",
    az: 'Yaxşı iş. Dünənkindən yaxşı, saymağa dəyər yeganə müqayisə də budur.',
  },
  rough: {
    en: "A tough one. The sentences you missed today are the ones you'll remember tomorrow.",
    az: 'Çətin sessiya idi. Bu gün səhv etdiyin cümlələr sabah yadında qalacaq olanlardır.',
  },
};

export function pick(map, lang) {
  return map[lang] ?? map.en;
}

export function randomLine(map, lang) {
  const list = pick(map, lang);
  return list[Math.floor(Math.random() * list.length)];
}
