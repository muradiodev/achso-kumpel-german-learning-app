// Release notes shown in the "What's new" sheet after an update.
// Newest first. When a release changes how saved progress works, set
// `dataChange: true` so the note is highlighted, and raise
// `expo.extra.minSupportedVersion` in app.json if older versions must update.

const L = (en) => ({ en });

export const CHANGELOG = [
  {
    version: '0.2.0',
    date: '2026-10-18',
    notes: [
      L('Web version: on a computer or tablet the app opens as one large phone screen, tab bar at the bottom.'),
      L('You now get a notice when a new version is available, and a warning if your version is too old to work with your saved progress.'),
      L('This "What\'s new" screen after every update.'),
    ],
  },
  {
    version: '0.1.0',
    date: '2026-10-18',
    notes: [
      L('First release: practice sessions, grammar checklist, verbs, Schreiben with copy mode.'),
    ],
  },
];
