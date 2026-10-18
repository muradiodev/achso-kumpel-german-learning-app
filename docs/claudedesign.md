# Prompt for Claude Design: redesign the AchsoKumpel app

You are a senior mobile product designer. Your job is to redesign the screens of **AchsoKumpel**, an existing German practice app, so it feels premium, warm and clear, while keeping its brand, its content and its learning flow.

**Scope: only the app itself** (the screens inside the phone). Do not design a website, landing page, marketing pages or store graphics.

A second file, **FEATURES.md**, is attached. It is the full reference: every screen, every overlay, every component, all colour tokens, type scale, icons, copy and behaviour. Read it completely before you start. Where this prompt and FEATURES.md seem to disagree, this prompt wins.

---

## 1. What the app is (short version)

- **AchsoKumpel**, tagline **"Dein Kumpel fürs Deutschlernen"**. "Ach so!" = the moment something clicks; "Kumpel" = buddy.
- For people living or working in Germany at B1 to C1 who understand German but cannot say it fast enough. Many work in tech teams. No time for a teacher.
- Core loop: a ~10 minute session where you **build German sentences from memory** (word tiles, keyboard or speaking), plus word cards and fill-the-gap. Spaced repetition brings back what you forget.
- Around the loop: a **daily gift** (a German phrase that unlocks every morning at 08:00, with a 14/30/60/100 day journey), a **grammar checklist** (74 topics, A1 to C2), **verbs** (sein or haben, Partizip II), **Schreiben** (telc-style letters you copy by hand), **My words** (tap any German word to save it), and **progress** charts.
- Free, open source, no ads. Interface in English and Azerbaijani.

## 2. Brand you must keep

**Logo:** an Ä whose crossbar is a smile (two rounded legs, curved smile, two round umlaut dots). Do not redraw or restyle it. App icon = white mark on a purple `#6E3BE0` rounded tile.

**Colour:** one brand hue, Kumpel Purple, on violet-tinted neutrals. Purple = action and data. Red / green / amber only mean wrong / right / warning, never decoration.

| Token | Light | Dark |
| --- | --- | --- |
| bg | `#FAF9FC` | `#0E0C14` |
| surface | `#FFFFFF` | `#17141F` |
| surfaceAlt | `#F3F1F8` | `#211D2C` |
| border | `#E6E3EE` | `#2E2939` |
| text | `#16131F` | `#F3F1F8` |
| textMuted | `#57526A` | `#ADA7BD` |
| textFaint | `#6F6982` | `#8E879F` |
| accent | `#6E3BE0` | `#A283FA` |
| accentStrong | `#5B2DC2` | `#C2ADFF` |
| accentSoft | `#EDE7FF` | `#2A1F47` |
| accentMuted | `#C2ADFF` | `#5B2DC2` |
| onAccent | `#FFFFFF` | `#160A33` |
| success / successSoft | `#15803D` / `#DCFCE7` | `#4ADE80` / `#12301D` |
| danger / dangerSoft | `#B91C1C` / `#FEE2E2` | `#F87171` / `#3B1616` |
| warning / warningSoft | `#A16207` / `#FEF3C7` | `#FACC15` / `#33290A` |

Purple scale 50 to 950: `#F5F2FF #EDE7FF #DCD0FF #C2ADFF #A283FA #8458F0 #6E3BE0 #5B2DC2 #4A269C #3C227B #241250`. You may use the scale for depth (for example gradients or illustrations inside purple areas), but stay within this one hue.

**Type:** Plus Jakarta Sans only (400 to 800). Scale: display 32/40 800, title 24/31 700, heading 18/24 700, body 16/24 400, small 14/20 400, caption 12/16 600. Headlines slightly tight tracking.

**Icons:** Phosphor only. Regular by default, fill for active tab and statuses, duotone for feature tiles and list icons.

**Shape:** buttons and inputs radius 14, cards radius 20, chips pill, avatars and icon chips circles. Flat UI: borders, not shadows.

**Spacing:** 4, 8, 12, 16, 24, 32, 48. Screen gutter 24.

**Charts:** single purple hue. Strong purple = done / mastered / right, muted purple = in progress / missed, neutral track = not started. Every value also written as text.

**Voice:** plain, warm, direct, short sentences, like a friend. **No exclamation marks** in the interface (unless a German phrase has one). **No em dashes.** No hype words. German UI words stay German: "Schreiben", "Hallo, {name}", "Präteritum", "Partizip II", "haben" / "sein".

## 3. What to design

Design every screen below in **light and dark mode**, at **390 × 844** (iPhone size). Use realistic content from FEATURES.md (real German sentences, real labels), never lorem ipsum.

**Onboarding (mandatory, in this order)**
1. Welcome
2. Create account / Log in
3. Step 1 of 3: About you (profile form)
4. Step 2 of 3: Pick your avatar (12 pastel icon avatars)
5. Step 3 of 3: Levels A1 to C2 + focus chips

**Tab bar (5 tabs):** Today · Practice · Grammar · Schreiben · Me

6. **Today**: greeting + avatar, today's gift card (purple, phrase, note, journey dots, countdown, "See all"), Today's practice card with "Start session", progress card with ring, weak spots card, "Jump in" 2 × 2 tiles, level mix chips
7. **Practice**: mixed session highlight + list of modes
8. **Grammar**: checklist grouped by level with sticky headers, status icons, filter chips, selection mode with bottom bar
9. **Schreiben**: filter chips + task cards
10. **Me**: identity, learning links, appearance switch (Auto / Light / Dark), account links, about card, log out, version

**Practice session (the most important part, give it the most care)**
11. Say it in German: **Words** mode (tile builder) in four states: building, wrong (red tiles + "Not quite"), right (green tiles + "Correct"), answer revealed
12. Say it in German: **Keyboard** mode (wrong state with red words)
13. Say it in German: **Speak** mode with the rating bar (Hard / Good / Easy, Again)
14. Word card (before and after reveal)
15. Fill the gap
16. sein or haben quiz, and Partizip II quiz
17. Session done summary, and empty state

**Pushed screens**
18. Grammar topic (status switch, In short, rules, examples, common mistakes, speaking prompts, practise button)
19. Verbs (quiz buttons, section chips, verb rows)
20. Writing task (situation, points, sample, phrases, AI feedback "coming soon" card)
21. Copy mode (large sentence, text size buttons, "Screen stays on", sentence / full text)
22. Your progress (ring, stat tiles, last 7 days bars, by level bars, grammar bars, grammar you practise most)
23. Your gifts (journey, locked tomorrow card with countdown, gift history)
24. My words (list and empty state)
25. Account settings, Language settings, Levels settings

**Overlays (inside the screen, not system modals)**
26. Gift reveal dialog: closed gift, then opened phrase
27. Word sheet (bottom sheet after tapping a German word)
28. What's new dialog
29. Update available banner, and the blocking "Please update" screen

Also deliver a **component sheet**: buttons (primary, secondary, ghost, inverse, danger; lg and md; pressed and disabled), card tones, chips, segmented control, text field states, list row, toggle row, word tile states (default, wrong, right, ghost, lifted), rating bar, result panels, progress ring, segment bar, week bars, journey dots, countdown, listen button, avatar set, empty state.

## 4. What you may change and what you may not

**You may improve:** layout, hierarchy, spacing rhythm, card composition, how much fits above the fold, visual weight of the primary action, the feel of the sentence builder and the gift moment, empty states, illustrations or small decorative moments inside the purple hue, micro-interaction notes (press, reveal, success), and small copy polish that follows the voice rules.

**You may not change:**
- the logo, the single purple brand hue, the font, the icon family
- the meaning of red / green / amber
- the screens, their order and the onboarding steps (no new features, no removed features)
- the learning logic: three answer modes, Check / Try again / Show answer, the rating scale Again / Hard / Good / Easy, the 08:00 gift, journey goals 14 / 30 / 60 / 100
- German content and German labels
- dark mode support for everything

## 5. Practical rules

- Touch targets at least 44 px; primary actions in the thumb zone (pinned footer on forms and tasks).
- Text contrast at least WCAG AA in both modes.
- One clear primary action per screen.
- Respect reduced motion: every animation needs a calm fallback.
- On tablets and desktop browsers the app is shown as one 560 px wide phone frame (radius 32) centred on the backdrop colour (`#E9E6F0` light, `#07060B` dark). Show one example of this, but do not design a separate desktop layout.
- Long German words must wrap gracefully (German has very long compound nouns).
- Show the Azerbaijani interface on at least one screen (for example Today) to check that longer labels still fit.

## 6. Output

1. All screens from section 3, light and dark, in a logical flow order.
2. The component sheet.
3. A short note per screen (2 to 4 lines): what you changed and why.
4. An updated token list if you propose any new token (for example a gradient or a new surface level), with exact hex values for light and dark.

Start with the **Today** screen and the **Say it in German (Words mode)** session screen, because they define the look of the whole app. Then apply the same system to everything else.
