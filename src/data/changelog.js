// Release notes shown in the "What's new" sheet after an update.
// Newest first. When a release changes how saved progress works, set
// `dataChange: true` so the note is highlighted, and raise
// `expo.extra.minSupportedVersion` in app.json if older versions must update.

const L = (en) => ({ en });

export const CHANGELOG = [
  {
    version: '0.5.0',
    date: '2026-10-18',
    notes: [
      L('Build sentences with word tiles: tap them into place, drag to reorder, check, and try again. Or type it, or say it.'),
      L('A new German phrase every morning at 08:00, with a short note for the day. All your earlier ones stay in Your gifts.'),
      L('Your account and progress now sync between your phone and the web.'),
    ],
  },
  {
    version: '0.4.0',
    date: '2026-10-18',
    notes: [
      L(
        'Grammar checklist rebuilt: 74 topics grouped by level, from Artikel to Modalpartikeln, each with practice sentences.',
      ),
      L('Build your own practice set: pick any grammar topics and get sentences from exactly those.'),
      L('See which grammar you practise most on the progress screen.'),
      L('Tap any German word in a sentence to save it to My words, then practise your own list.'),
      L('Show the answer first, then rate: Hard, Good, Easy, or Again.'),
      L('Light, dark or automatic appearance, account settings, and the app in Azerbaijani.'),
    ],
  },
  {
    version: '0.3.0',
    date: '2026-10-18',
    notes: [
      L('New look: Kumpel Purple, a new logo and app icon, and a clearer typeface, in light and dark mode.'),
      L('New icons throughout the app.'),
      L('Your progress: see what you started and mastered, your last 7 days, and every level at a glance.'),
    ],
  },
  {
    version: '0.2.0',
    date: '2026-10-18',
    notes: [
      L('Web version: on a computer or tablet the app opens as one large phone screen, tab bar at the bottom.'),
      L(
        'You now get a notice when a new version is available, and a warning if your version is too old to work with your saved progress.',
      ),
      L('This "What\'s new" screen after every update.'),
    ],
  },
  {
    version: '0.1.0',
    date: '2026-10-18',
    notes: [L('First release: practice sessions, grammar checklist, verbs, Schreiben with copy mode.')],
  },
];
