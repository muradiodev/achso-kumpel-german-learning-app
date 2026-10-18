# AchsoKumpel: full product and design reference

This document describes the whole app from zero: what it is, who it is for, every screen, every overlay, every component, the brand system and the rules behind it. It is written so a designer (human or AI) who has never seen the code can understand and redesign any part of it without guessing.

Version described: **0.5.0** (Expo SDK 58, React Native 0.88, JavaScript). Platforms: Android, iOS, Web.

---

## 1. The product in one page

**Name:** AchsoKumpel (one word, capital A and K).
**Tagline (German, always kept German):** "Dein Kumpel fürs Deutschlernen" ("Your buddy for learning German").
**Idea:** "Ach so!" is what Germans say when something finally clicks. "Kumpel" is a buddy. The app is a friendly guide that gets you to that moment in real conversations.

**Audience:** people who live or work in Germany, reached B1, B2 or C1 at some point, understand most of what colleagues say, but the right word arrives three seconds too late in a stand-up or at the Kneipe. No time for a teacher. Many work in tech teams.

**Three promises (shown on the welcome screen):**
1. **Sentences, not word lists.** Every word lives in a sentence Germans actually say. You produce it from memory.
2. **Built around what you forget.** Missed items come back sooner (spaced repetition). Known items get out of the way.
3. **Good enough beats perfect.** High-frequency German for work and daily life, no rare exceptions.

**Business model:** free, open source (MIT), no ads, no paywall. Footer line: "Free and open source. No ads, no paywall."

**Content in the app today:**

| Content | Count |
| --- | --- |
| Vocabulary words (with article, plural, example sentence) | 122 |
| Practice sentences (English prompt, German answer, grammar tags) | 243 |
| Grammar topics, A1 to C2, in 5 groups | 74 |
| Verbs (irregular + regular, Präteritum, Partizip II, sein/haben) | 70 |
| Verbs with fixed prepositions (warten auf, sich kümmern um) | 20 |
| Writing tasks (telc B1, telc B2, work emails, opinion text) | 9 |
| Daily gift phrases + milestone phrases (days 1, 3, 7, 14, 21, 30, 60, 100) | many, rotating |

**Interface languages:** English and Azerbaijani (Azərbaycanca). Learning content translations: English (Azerbaijani planned).

**Levels:** A1, A2, B1, B2, C1, C2. The user picks a "level mix" (one or several).

---

## 2. Brand system

### 2.1 Logo

The mark is an **Ä whose crossbar is a smile**.
- Two rounded legs form an A (stroke 34 on a 256 grid, round caps and joins).
- The crossbar is a curved smile (stroke 26, round caps) that reaches slightly past the legs, "like arms around a friend".
- Two round umlaut dots on top (radius 18).
- The umlaut makes it unmistakably German; the smile makes it a Kumpel, not a textbook.

SVG geometry (viewBox 0 0 256 256):
```
legs:  M66 214 L128 82 L190 214   stroke 34, round
smile: M92 168 Q128 196 164 168   stroke 26, round
dots:  circle (96,40) r18, circle (160,40) r18
```

Colour versions:

| Version | Legs | Smile + dots | Use |
| --- | --- | --- | --- |
| Duo light (default on light) | purple 600 `#6E3BE0` | purple 400 `#A283FA` | Light backgrounds |
| Duo dark (default on dark) | purple 400 `#A283FA` | purple 200 `#DCD0FF` | Dark backgrounds |
| App icon / tile | white | purple 200 `#DCD0FF` | On a purple 600 rounded tile (rx 64 on 256) |
| One-colour purple, black, white | single colour | single colour | Print, embossing, photos, below 24 px |

Rules: clear space = one umlaut-dot diameter on every side. Minimum size 16 px; below 24 px use one-colour. Never rotate, stretch or outline it. Never put the duo mark on a busy photo. Never recolour legs and smile in two unrelated colours. Never set the wordmark in another typeface.

Lockup used in the app (welcome screen): app-icon tile 48 px + "AchsoKumpel" (body, 700) above the tagline (small, muted).

App icon: white mark on a purple `#6E3BE0` tile. Android adaptive icon background `#6E3BE0`. Splash: mark at 160 px on `#FAF9FC` (light) or `#0E0C14` (dark). Web theme colour `#6E3BE0`.

### 2.2 Colour

One brand hue, **Kumpel Purple**, plus violet-tinted neutrals (so greys and purple belong to the same family). Purple is the **action colour**: primary buttons, active tab, progress, data. Everything else is neutral. **Red, green and amber are reserved for wrong, right and warning** and are never decoration.

Purple scale:

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#F5F2FF` | `#EDE7FF` | `#DCD0FF` | `#C2ADFF` | `#A283FA` | `#8458F0` | `#6E3BE0` | `#5B2DC2` | `#4A269C` | `#3C227B` | `#241250` |

Semantic tokens (light and dark):

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| backdrop | `#E9E6F0` | `#07060B` | Page around the phone frame on wide screens |
| bg | `#FAF9FC` | `#0E0C14` | Screen background |
| surface | `#FFFFFF` | `#17141F` | Cards, tab bar, sheets, inputs |
| surfaceAlt | `#F3F1F8` | `#211D2C` | Muted panels, tracks, segmented-control track, back-button circle |
| border | `#E6E3EE` | `#2E2939` | Card and input borders, dividers |
| text | `#16131F` | `#F3F1F8` | Body text |
| textMuted | `#57526A` | `#ADA7BD` | Secondary text |
| textFaint | `#6F6982` | `#8E879F` | Hints, captions, inactive tab |
| accent | `#6E3BE0` | `#A283FA` | Primary buttons, active states, data |
| accentStrong | `#5B2DC2` | `#C2ADFF` | Hover / pressed accent |
| accentSoft | `#EDE7FF` | `#2A1F47` | Tinted card backgrounds, icon circles |
| accentMuted | `#C2ADFF` | `#5B2DC2` | Second data series ("practising") |
| onAccent | `#FFFFFF` | `#160A33` | Text on purple |
| success | `#15803D` | `#4ADE80` | Right |
| successSoft | `#DCFCE7` | `#12301D` | Right panel background |
| danger | `#B91C1C` | `#F87171` | Wrong, log out |
| dangerSoft | `#FEE2E2` | `#3B1616` | Wrong panel background |
| warning | `#A16207` | `#FACC15` | Warning, "Hard" rating, "Learning" status |
| warningSoft | `#FEF3C7` | `#33290A` | Warning background |

Scrim colours for overlays: `rgba(9, 7, 16, 0.6)` (gift), `rgba(9, 7, 16, 0.5)` (word sheet), `rgba(9, 9, 11, 0.55)` (What's new).

Contrast: every text pair meets WCAG AA (4.5:1). Primary button text on purple: 6.2:1 light, 6.4:1 dark.

Appearance: **Auto** (follows system), **Light** or **Dark**, chosen in Me. Saved per device.

### 2.3 Typography

**Plus Jakarta Sans** (SIL OFL), weights 400, 500, 600, 700, 800. No second typeface. Headlines 700 to 800 with slightly tight tracking, body 400, labels 600. Each weight is a separate font family on native, so weight is chosen by family, never by `fontWeight`.

| Style | Size / line height | Weight | Tracking | Used for |
| --- | --- | --- | --- | --- |
| display | 32 / 40 | 800 | -0.8 | Welcome headline, big German word on a card, gift phrase, big numbers |
| title | 24 / 31 | 700 | -0.4 | Screen titles, English prompt in sentence card |
| heading | 18 / 24 | 700 | -0.2 | Section headings, card titles, header titles |
| body | 16 / 24 | 400 | 0 | Default text, button label (lg) |
| small | 14 / 20 | 400 | 0 | Subtitles, helper text, button label (md) |
| caption | 12 / 16 | 600 | +0.2 | Overlines like "B1 · Say it in German", badges, chart labels |

Tab bar labels: 11 px, 600. Numbers that tick (countdown) use tabular figures.

### 2.4 Spacing, radius, elevation

Spacing scale: xs 4, sm 8, md 12, lg 16, xl 24, xxl 32, xxxl 48.
Screen side gutter: 24 (xl). Readable column max width: 600 on tablets and web.

Radius rule:
- **md = 14**: buttons, inputs, segmented control, tiles, level rows, feedback panels.
- **lg = 20**: cards (Surface), sheets get lg + 8 = 28 on the top corners.
- **pill = 999**: chips, badges, progress tracks.
- Circles for avatars, icon chips, back button (40), listen button.
- Phone frame on wide screens: radius 32.

Elevation: the app is flat. Cards use a 1 px border, not shadows. The only shadow is the phone frame on wide screens (light: `#3F3F46` at 18 %, blur 40, y 16; dark: black at 60 %).

### 2.5 Icons

**Phosphor**, one family across the app. Weights: **regular** by default, **fill** for the active tab and statuses, **duotone** for feature tiles and list icons, **bold** inside buttons. Screens use semantic names only:

| Semantic name | Phosphor icon | Where |
| --- | --- | --- |
| today | CalendarBlank | Tab "Today" |
| practice | Lightning | Tab "Practice" |
| grammar / checkbox | CheckSquare | Tab "Grammar", writing points |
| writing / pencil | PencilSimpleLine | Tab "Schreiben", copy mode button |
| profile | UserCircle | Tab "Me" |
| mixed | Shuffle | Mixed session |
| words | Cards | Word cards, My words |
| sentences | ChatCircleDots | Say it in German |
| cloze | TextUnderline | Fill the gap |
| work | Briefcase | Work German |
| everyday / coffee | Coffee | Everyday German |
| grammarList | ListChecks | From your grammar list, Build a practice set |
| weak | Heartbeat | Weak spots (shown in danger red) |
| verbs | GitBranch | Verbs |
| progress | ChartLineUp | Progress |
| level | GraduationCap | Levels and focus |
| back / forward | CaretLeft / CaretRight | Navigation, chevrons |
| close | X | Close, remove |
| play | Play | Start buttons (fill) |
| listen | SpeakerHigh | Listen button |
| check / done | Check / Checks | Finish, session done |
| checkCircle / circle / learning | CheckCircle / Circle / CircleHalf | Grammar status Learned / Not yet / Learning |
| repeat | ArrowsClockwise | Try again |
| chats | ChatsCircle | Welcome reason 1 |
| sparkle | Sparkle | Gift label, update banner, change avatar |
| warning | WarningCircle | Required update |
| camera | Camera | AI feedback (coming soon) |
| sun | Sun | "Screen stays on" pill |
| minus / plus | Minus / Plus | Text size, add word |
| signOut | SignOut | Log out |
| translate | Translate | Language settings |
| gift | Gift | Gift reveal |
| lock | LockSimple | Tomorrow's gift |

### 2.6 Avatars

12 avatars, each an icon on a pastel circle (icon colour = text colour, icon size 48 % of the circle):

| id | icon | light bg | dark bg |
| --- | --- | --- | --- |
| pretzel | Coffee | `#FDE7D3` | `#3D2717` |
| code | Code | `#E0E7FF` | `#1E2440` |
| bike | Bicycle | `#DCFCE7` | `#163222` |
| book | BookOpen | `#FEF3C7` | `#3A2E10` |
| music | MusicNotes | `#FCE7F3` | `#3A1A2C` |
| leaf | Leaf | `#D1FAE5` | `#11322A` |
| rocket | Rocket | `#E0F2FE` | `#132D3D` |
| football | SoccerBall | `#F4F4F5` | `#2A2A2E` |
| paw | PawPrint | `#FFE4E6` | `#3D1A1F` |
| sun | Sun | `#FEF9C3` | `#38320F` |
| boat | Sailboat | `#CFFAFE` | `#0F3135` |
| planet | Planet | `#EDE9FE` | `#2A1F44` |

These pastels are the only non-purple decorative colours in the app.

### 2.7 Charts

Progress is a **single purple hue**, never categorical: strong purple (accent) = done / mastered / right, muted purple (accentMuted) = in progress / practising / missed, neutral track (surfaceAlt) = not started. Every value is also printed as text, so nothing depends on telling two purples apart. Bars have a rounded data end and a square baseline.

### 2.8 Motion and haptics

- Press feedback: scale 0.98 (buttons), 0.99 (cards), 0.97 (chips, rating buttons), 0.96 (word tiles), 0.94 (listen button). List rows dim to 70 % opacity.
- Word tiles: spring layout transition 300 ms, damping 0.8 to 0.85; dragged tile lifts to scale 1.06 with an accent border.
- Gift reveal: fade in 200 ms, then content fades in and down 320 ms.
- Reduced motion is respected: animations become simple fades or are removed.
- Haptics: success on right answer and gift open, error on wrong answer, selection tick on tile placement and neutral ratings.
- Text to speech: German (de-DE) read aloud on the listen button, on correct answers, on reveal, and on gift open (rate 0.9; copy mode 0.85).

### 2.9 Voice and copy rules

Plain, warm, direct. Short sentences. Talks like a friend, not a poster. **No exclamation marks in the interface** (unless a German phrase itself has one, like "Dranbleiben!"). **No em dashes anywhere.** No hype words. Feedback is in plain words, not scores. Compare only with yesterday's self.

Examples of real copy: "You know German. Now use it." / "Good enough beats perfect." / "Nothing due. A short session still keeps words active." / "Not quite" / "Got it on the second try. That's exactly how it sticks." / "Three days. Most people quit somewhere before this point. You didn't."

German stays German: tab "Schreiben", greeting "Hallo, {name}", gift phrases, "Plural:", "Präteritum", "Partizip II", "haben" / "sein".

---

## 3. Layout model

- **Phones:** full-screen. Safe areas respected. Content column with 24 px side gutters. Bottom tab bar.
- **Wide screens (web, tablets, width ≥ 720):** the whole app renders inside **one large phone-shaped frame**, 560 px wide, full height minus 12 to 24 px gaps, radius 32, 1 px border, soft shadow, centred on the `backdrop` colour. The tab bar sits at the bottom of the frame (68 px tall there). All overlays (sheets, dialogs) must render inside this frame, never as system modals.
- **Screen anatomy:** top padding = safe area + 16. Most screens scroll. Forms and task screens have a **footer** pinned at the bottom (above the keyboard) holding the primary action, with 24 px gutters.
- **Pushed screens** start with a **ScreenHeader**: 40 px round back button on surfaceAlt, then an optional title (heading, one line), then an optional right slot.
- **Tab screens** start with a large title (title style) and a muted one-line subtitle.

---

## 4. Navigation map

```
Not signed in
  /welcome ──► /register ──┐
           └─► /login ─────┤
                           ▼
Signed in, profile incomplete
  /setup/profile (step 1 of 3) ──► /setup/avatar (step 2 of 3)
                           ▼
Signed in, no levels
  /setup/levels (step 3 of 3)
                           ▼
App (tab bar)
  Today (/)   Practice   Grammar   Schreiben   Me
     │           │          │          │        │
     ├─ /gifts   ├─ /practice/[mode]   │        ├─ /progress
     ├─ /progress├─ /verbs  ├─ /grammar/[id]    ├─ /my-words
     ├─ /practice/... ├─ /my-words     ├─ /writing/[id]
     └─ /settings/levels               │   └─ /writing/copy/[id]
                                       │        ├─ /settings/account
                                       │        ├─ /settings/avatar
                                       │        ├─ /settings/language
                                       │        └─ /settings/levels
```

Registration is mandatory. Guards move the user automatically: welcome → register → profile → avatar → levels → tabs. Saving one step opens the next.

**Tab bar:** 5 tabs, icon above label, background surface, top border. Active: accent colour + **fill** icon. Inactive: textFaint + regular icon.

| Tab | Label | Icon |
| --- | --- | --- |
| index | Today | CalendarBlank |
| practice | Practice | Lightning |
| grammar | Grammar | CheckSquare |
| writing | Schreiben | PencilSimpleLine |
| profile | Me | UserCircle |

Practice session and copy mode disable the swipe-back gesture so a session is not closed by accident.

---

## 5. Component library

| Component | Anatomy and states |
| --- | --- |
| **Button** | Radius md. Sizes: lg (min height 52, padding 20, body 600 label), md (min height 40, padding 14, small 600 label). Optional icon (18 px, bold; play is fill) left of the label, gap 8. Variants: **primary** (accent bg, onAccent text), **secondary** (surface bg, border, text colour), **ghost** (transparent, accent text), **inverse** (white bg, purple text, for purple surfaces), **danger** (dangerSoft bg, danger text). Disabled / loading: 50 % opacity; loading shows a spinner. Pressed: scale 0.98. |
| **Surface (card)** | Radius lg (20), padding 16, 1 px border. Tones: **default** (surface + border), **accent** (accentSoft, no visible border), **muted** (surfaceAlt), **brand** (solid accent). Can be pressable (scale 0.99). Rule: use a card only when grouping carries meaning, otherwise rely on spacing. |
| **Chip** | Pill radius, padding 14 × 8, min height 36, small 600 label. Selected: accent bg, onAccent text. Unselected: surface bg, border. Used for filters and level badges. |
| **Segmented control** | surfaceAlt track, radius md, 3 px inner padding. Active segment: surface bg + border, text colour. Inactive: muted text. Min height 38. Used for: Words / Keyboard / Speak, Not yet / Learning / Learned, Auto / Light / Dark, Sentence / Full text. |
| **TextField** | Label above (small 600), optional "optional" tag in faint. Field: surface bg, 1 px border, radius md, min height 52, padding 14. Focus: accent border. Error: danger border + danger message below. Helper text below in faint. Password fields have a "Show / Hide" text toggle in accent. Never placeholder-as-label. |
| **ListRow** | Min height 56, padding 14 vertical. Left slot 36 px (usually a duotone accent icon 22 to 24 px), title (body 600, max 2 lines), subtitle (small muted, max 2 lines), optional right slot, chevron (CaretRight, faint) when pressable. No dividers by default. |
| **ToggleRow** | Label + sublabel left, switch right (track 50 × 30, thumb 24). On: accent track, onAccent thumb. Off: border-colour track. Used as a radio group for languages. Disabled rows at 50 % with "Coming soon". |
| **ScreenHeader** | 40 px circular back button (surfaceAlt, CaretLeft), title (heading, 1 line, flex), right slot. 20 px margin below. |
| **Avatar** | Circle, pastel bg by id and scheme, icon 48 % size. Sizes used: 48 (Today), 56 (picker grid), 72 (Me), 112 (picker preview). |
| **BrandMark** | The Ä logo in SVG; `tile` variant draws the app icon. |
| **SpeakButton** | Circle (36 default, 38 to 44 on cards), accentSoft bg, SpeakerHigh icon in accent at 50 % size. Reads German aloud. |
| **TappableText** | German text where every word is tappable and opens the Word sheet. Words already in My words are underlined and coloured accent. |
| **EmptyState** | Centred: 64 px accentSoft circle with a 28 px accent icon, heading, muted body, optional secondary button stretched full width. |
| **ProgressRing** | SVG ring, surfaceAlt track, accent arc with round cap starting at 12 o'clock. Children centred (percentage). Sizes: 56 / stroke 7 (Today card), 128 / stroke 12 (Progress hero). |
| **SegmentBar** | Pill track (surfaceAlt). Strong segment (accent) then soft segment (accentMuted) with a 2 px gap. Heights 6, 10, 12. |
| **LegendDot** | 10 px rounded square swatch + small muted label. |
| **WeekBars** | 7 columns, bar width 20, rounded top 4 px, max height 96. Bars with data: accent, others 55 % opacity unless selected; zero days: 3 px border-colour stub. Tap a bar to show its value above it. Narrow weekday letter below. |
| **Countdown** | "HH:MM:SS" to the next 08:00, ticks every second, tabular numbers. |
| **JourneyPath** | Row of up to 14 pill dots (height 6, gap 5). Filled dots = days done toward the current goal (14, then 30, 60, 100). Light variant for purple cards: white filled, 28 % white empty. |
| **TodayGiftCard** | Solid purple card (see Today screen). |
| **RatingBar** | Hint "How well did you know it?", then a row of 3 equal buttons: **Hard** (warningSoft / warning), **Good** (successSoft / success), **Easy** (accentSoft / accent); below, full width **Again** (solid danger, white text). Each min height 52, radius md, label 700. |
| **Word tile** | Radius md, min height 44, padding 14, 1.5 px border with a **3 px bottom border** (pressable key look), label 600. States: default (surface, border), wrong (dangerSoft, danger), right (successSoft, success), ghost placeholder in the bank (surfaceAlt, invisible text), lifted while dragging (accent border, scale 1.06). |
| **Feedback / ResultPanel** | Radius md or lg, padding 16. Right: successSoft bg, "Correct" in success. Wrong: dangerSoft bg, "Not quite" in danger. Neutral: surfaceAlt, "The sentence is". Holds an encouragement line, the German sentence with a listen button, and action buttons. |

---

## 6. Screens, one by one

Each entry lists the layout from top to bottom.

### 6.1 Welcome (`/welcome`)
Purpose: first screen for signed-out users.
1. Brand lockup: app-icon tile 48 px + "AchsoKumpel" (700) + tagline "Dein Kumpel fürs Deutschlernen" (small muted).
2. 32 px gap, then the headline in **display**: "You know German.\nNow use it."
3. Muted sub: "Practise real sentences for work and everyday life. For B1 to C1 learners with no time for a teacher."
4. Three reason rows (gap 24): 40 px accentSoft circle with an accent icon (ChatsCircle, ArrowsClockwise, Checks) + title (600) + muted small body. Texts are the three promises from section 1.
5. Faint footer line: "Free and open source. No ads, no paywall."
6. Pinned footer: primary "Create free account", ghost "I already have an account".

### 6.2 Register (`/register`) and Log in (`/login`)
Same layout (one shared form).
1. ScreenHeader (back only).
2. Title: "Create your account" / "Welcome back". Muted sub: "Takes 30 seconds. No email confirmation." / "Log in to continue where you left off."
3. Fields: Email (placeholder "you@example.com"), Password (Show/Hide toggle; on register helper "At least 8 characters.").
4. Form error line in danger if needed ("Email or password is wrong.", network error, etc.).
5. Faint note: "Your account and progress sync between your phone and the web." (or "stored on this device only" for local builds).
6. Footer: primary "Create account" / "Log in" (with loading spinner), ghost link "Already have an account? Log in" / "New here? Create an account".

### 6.3 Setup step 1: About you (`/setup/profile`)
1. Accent caption "Step 1 of 3".
2. Title "About you", muted sub "So your Kumpel knows who it is talking to."
3. Fields: First name, Last name, Date of birth (DD.MM.YYYY, auto-formatted, number pad), Phone number (optional, placeholder "+49 151 2345678"), Profession (optional, "e.g. Software engineer, nurse, student").
4. Footer: primary "Continue", ghost "Log out".
Validation messages in danger under each field.

### 6.4 Setup step 2: Pick your avatar (`/setup/avatar`)
1. ScreenHeader, accent caption "Step 2 of 3".
2. Title "Pick your avatar", muted "You can change it later in your profile."
3. Large preview avatar 112 px, centred.
4. Grid of 12 avatars (56 px each in 68 px cells), wrapped and centred, gap 14. Selected cell: 2 px accent ring.
5. Footer: primary "Use this avatar".

### 6.5 Setup step 3: Levels (`/setup/levels`)
1. Accent caption "Step 3 of 3".
2. Title "What should you practise?", muted "Pick one level or mix several. Practice draws from all of them."
3. Six level rows (checkbox behaviour), radius md, padding 16 × 14: level code (heading, 32 px column) + description (small muted) + CheckCircle (accent, selected) or Circle (faint). Selected row: accent border, accentSoft bg.
   - A1 Basics: introduce yourself, simple needs
   - A2 Everyday routines and simple conversations
   - B1 Work, travel, opinions in simple words
   - B2 Fluent discussions, meetings, arguments
   - C1 Precise, natural, professional German
   - C2 Nuance, idioms, near-native style
4. Heading "Where do you need German?" + chips (multi-select): Everyday life, Work and tech teams, Writing and telc exams.
5. Footer: primary "Start practising". Error if no level: "Pick at least one level."

### 6.6 Today (tab, `/`)
The home screen. Scrolls.
1. **Header row:** "Hallo, {firstName}" (title) over "{n} reviewed today" (small muted). Right: avatar 48 px (tap → Me).
2. **Today's gift card** (TodayGiftCard): solid **accent purple** card, radius lg, padding 24.
   - Top row: Sparkle (fill) + caption "Your gift for today" left; "Day 5 of 14" caption right (82 % opacity).
   - German phrase in **title**, white, with a 38 px listen button on the right.
   - English translation (82 % opacity), then the personal note (body, white).
   - JourneyPath (light variant).
   - Hairline divider (22 % white), then footer: "Next gift in" caption + **Countdown** (heading, white) on the left; pill button "See all ›" on the right (16 % white bg) → Gifts.
3. **Today's practice** card (Surface tone accent, padding 24): heading "Today's practice", muted line "{n} to review, {m} new" or "Nothing due. A short session still keeps words active.", primary button with Play icon "Start session" → mixed session, small muted centred "About 10 minutes".
4. **Your progress** card (Surface default, pressable → Progress): ProgressRing 56 px with % inside, title "Your progress", muted "{seen} of {total} practice items started in your levels", chevron.
5. **Your weak spots** card (only when there are weak items): Heartbeat icon in danger red, "Your weak spots", "{n} items you keep missing. Ten minutes here pays off most.", chevron → weak session.
6. Heading "Jump in" + 2 × 2 grid of quick tiles (surface, border, radius lg, min height 92, padding 16): duotone accent icon 26 px + label (600): Word cards, Say it in German, Work German, Verbs.
7. Row "Your level mix" (heading) + ghost md button "Change" → level settings. Below: selected chips for each chosen level.
8. **Overlay:** if today's gift is unopened, the Gift reveal dialog covers the screen (see 7.1).

### 6.7 Practice (tab)
1. Title "Practice", muted "Every mode pulls from your level mix and brings back what you forget."
2. Highlight card (Surface tone accent): Shuffle icon, "Mixed session", "Words, sentences and gaps in one run. The best default."
3. List of ListRows (duotone accent icons, chevrons):
   - Say it in German: See the English, build the German sentence from memory.
   - Word cards: German and English in both directions, with article and plural.
   - Fill the gap: Type the missing word inside a real sentence.
   - Work German: Stand-ups, code reviews, blockers, deadlines.
   - Everyday German: Phrases you hear at the bakery, the Kneipe and with neighbours.
   - From your grammar list: Sentences that use the topics you marked as learning or learned.
   - Weak spots: Only the items you keep missing.
   - My words: The words you saved yourself from sentences. (→ My words list)
   - Verbs: Irregular forms, sein or haben, verbs with prepositions. (→ Verbs)

### 6.8 Practice session (`/practice/[mode]`)
Modes: mixed, sentences, words, cloze, work, everyday, grammar (optionally a chosen topic set), weak, mine (My words), aux (sein or haben quiz), forms (Partizip II quiz). A session has 15 items (20 for chosen topics or My words), at most 8 new items (20 for chosen sets). Missed items come back once at the end of the same session.

**Top bar:** thin progress track (6 px, pill, surfaceAlt) filling in accent, "3 of 15" (small muted), "End" link (small 600 accent).

**Card types** (one per item, full screen, primary action at the bottom):

1. **Say it in German (sentence builder)**
   - Segmented control: **Words / Keyboard / Speak** (choice remembered).
   - Caption "B1 · Say it in German", English sentence in **title**.
   - **Words mode:** an answer area with two hairline "writing lines" (like notebook rules) where placed tiles sit; below it, the tile bank, centred and wrapped. Tap a bank tile → it moves to the end of the answer and leaves a ghost placeholder. Tap an answer tile → it goes back. Drag an answer tile → reorder (spring animation). Hint: "Tap words to place them. Drag to reorder, tap to remove." Primary "Check".
     - Wrong: misplaced tiles turn red; ResultPanel (dangerSoft) "Not quite" + encouragement line + two md buttons: secondary "Show answer", primary "Try again" (ArrowsClockwise).
     - Right: all tiles turn green; ResultPanel (successSoft) "Correct" + encouragement ("Got it on the second try. That's exactly how it sticks.") + the German sentence (tappable) with a listen button; primary "Continue". Sentence is read aloud.
     - Revealed: neutral panel "The sentence is" + sentence + hint "Tap any word to save it to My words." + "Continue".
   - **Keyboard mode:** multiline TextField "Your German sentence", "Check". Wrong: the typed words are shown with wrong words in red, plus "Show answer" / "Try again". Same right / revealed panels.
   - **Speak mode:** muted "Say it out loud first. Then check the answer." + primary "Show answer". After reveal: German sentence in title with listen button, hint, then the RatingBar.
   - Grading: right first try = Good, right after retry = Hard, show answer = Again.
2. **Word card:** caption level; prompt in **display** (German with listen button, or English; direction random). Tap anywhere or "Show answer". Revealed: translation in title accent (or German line), "Plural: …" muted, "Example" caption + example sentence (tappable, listen) + translation. Then RatingBar.
3. **Fill the gap (cloze):** caption "B1 · Fill the gap", German sentence in title with "_____" for the missing word, muted English translation, TextField "Missing word", "Check". Feedback panel ("Correct" or "Not quite. Correct answer:" + the word + "Your answer: …") + full sentence with listen. "Next". ae/oe/ue/ss count as ä/ö/ü/ß.
4. **sein or haben (aux quiz):** caption "Perfekt with haben or sein?", infinitive in display, meaning muted, two secondary buttons side by side "haben" | "sein". Feedback panel + "er ist gegangen" in title + optional note. "Next".
5. **Partizip II (forms quiz):** caption "Type the Partizip II", infinitive in display, hint "to go · er ist _____", TextField "Partizip II", "Check", feedback, "Next".
6. **My word card:** caption "My words", saved word in display with listen; reveal shows the translation (if in dictionary) and "Found in" + the original sentence. RatingBar.

**Empty state:** "Nothing to practise here yet" / "Add a level to your mix or mark some grammar topics as learning." + secondary "Change levels" + ghost "Back to today".

**Session done:** EmptyState with Checks icon, "Session done", "{n} items practised. {k} will come back soon." plus a one-line motivational message chosen by result (perfect / good / rough). Buttons: primary "Practise again", ghost "Back to today".

### 6.9 Grammar (tab)
A sectioned list with sticky section headers.
1. Title "Grammar checklist", muted "Open a topic, read it in plain words, then mark it. Practice follows your list." Accent small 600 "{learned} of 74 learned".
2. Filter chips: All, A1, A2, B1, B2, C1-C2.
3. Secondary md button "Build a practice set" (ListChecks icon).
4. Sections: **Basics (A1), Everyday speaking (A2), Speaking freely (B1), Professional and fluent (B2), Advanced (C1-C2)**. Sticky header: solid accent pill badge with the level ("B1", onAccent caption) + group name (heading) + "{x} of {y} learned" (small muted), then a 6 px SegmentBar.
5. Topic rows (min height 56): status icon 24 px (Circle faint = Not yet, CircleHalf fill **warning** = Learning, CheckCircle fill **success** = Learned), title (600), "B1 · subtitle" (small muted), chevron.
6. **Selection mode** (after "Build a practice set"): sub changes to "Pick the topics you want sentences for.", rows show a checkbox (CheckSquare fill accent when selected) and "{n} sentences" on the right. A bottom bar appears with secondary "Cancel" (1 part) and primary "Practise {n} topics" with Play (2 parts).

### 6.10 Grammar topic (`/grammar/[id]`)
1. ScreenHeader with the level as title ("B1").
2. Topic title (title), muted subtitle.
3. Segmented status: **Not yet / Learning / Learned**.
4. "In short" muted card: accent caption + one-paragraph summary.
5. "How it works": bullet list, 6 px accent dots.
6. "Examples": German sentence (600, tappable words) + muted translation, listen button on the right.
7. "Common mistakes": one card each: wrong sentence in danger with strikethrough, right sentence in success (600), muted "why".
8. "Your turn: say it out loud": muted speaking prompts.
9. Footer: primary "Practise sentences with this topic" (Play). If no sentences exist: faint note instead.

### 6.11 Verbs (`/verbs`)
1. ScreenHeader "Verbs".
2. Two md buttons side by side: primary "Quiz: sein or haben", secondary "Quiz: irregular forms".
3. Horizontally scrolling chips: Irregular, Perfekt with sein, Perfekt with haben, Regular, With prepositions.
4. For "Perfekt with sein": muted info card with the rule ("sein is used for movement from A to B, change of state … Everything else takes haben.").
5. Verb rows with hairline dividers: infinitive (700), meaning (small muted), "ging · ist gegangen" (small), optional faint note; listen button reads all forms. Preposition rows: "warten auf" (700), meaning, example sentence, listen.

### 6.12 Schreiben (tab)
1. Title "Schreiben", muted "Read a sample, then copy it by hand. Your hand remembers sentence patterns your eyes skip."
2. Filter chips: All, telc B1, telc B2, Work, Opinion.
3. Task cards (Surface, pressable): accent caption "telc B1 · B1", title (600), muted meta "20 min · ~80 words · Copied 2x".
4. Faint footer: "Task types follow the telc Schreiben format. They are practice material, not official exam tasks."

Tasks: B1 farewell invitation, B1 new apartment, B1 course inquiry, B2 complaint about an order, B2 coworking inquiry, B2 opinion on home office, Work: calling in sick with handover, Work: vacation request, Work: status update.

### 6.13 Writing task (`/writing/[id]`)
1. ScreenHeader "telc B1 · B1".
2. Title, muted meta (minutes, words).
3. "Situation" paragraph.
4. "Cover these points": rows with an accent CheckSquare icon.
5. "Sample text": one card with the sample, every word tappable.
6. "Useful phrases": German (600, tappable) + translation + listen button.
7. Muted card: Camera icon, "Photo of my text: AI feedback", "Coming soon. Soon you can photograph your handwriting and get corrections with better word choices."
8. Footer: primary "Copy by hand" (pencil icon).

### 6.14 Copy mode (`/writing/copy/[id]`)
Handwriting helper. The screen never sleeps while open.
1. ScreenHeader "Copy mode" with right slot: two 36 px round buttons (Minus / Plus) for text size (22, 26, 32, 38 px).
2. Pill badge (accentSoft, Sun icon, accent caption): "Screen stays on".
3. Segmented: **Sentence / Full text**.
4. Sentence view: "2 of 9" (small muted), the current sentence in large text (500 weight, line height 1.45), ghost "Listen" button (reads at rate 0.85).
5. Full text view: all sentences at 80 % of the chosen size.
6. Footer: secondary "Previous" + primary "Next"; on the last sentence or in full view: primary "I copied the whole text" (Check icon). Finishing increases the task's "Copied" count.

### 6.15 Me (tab)
1. Title "Me".
2. Identity row: avatar 72 px (tap → change avatar), full name (heading), email (small muted), profession or "No profession added".
3. Section caption "Learning" (faint): ListRows "Your progress", "My words" ("{n} words"), "Levels and focus" ("B1, B2").
4. Section caption "Appearance": Segmented **Auto / Light / Dark**, faint hint "Auto follows your phone or computer."
5. Section caption "Account": "Account settings" (Name, date of birth, phone, profession), "Change avatar" (Sparkle), "Language settings" (current language).
6. Muted card "About AchsoKumpel" with the about text and a ghost link "Source code and contributions" (GitHub).
7. Danger button "Log out" (SignOut icon).
8. Faint centred "Version 0.5.0".

### 6.16 Your progress (`/progress`)
1. ScreenHeader "Your progress".
2. Hero card (row): ProgressRing 128 px with "{x}%" (title) and "started" (caption muted); right side: "Mastered" (700), the mastered count in **display accent**, muted "{seen} of {total} practice items started in your levels".
3. Three stat tiles in a row (surfaceAlt, radius 16, padding 12): duotone accent icon + value (title) + caption: "Reviewed today", "Active days this week" ("3/7"), "Weak spots".
4. "Last 7 days": card with WeekBars + "{n} reviews this week".
5. "By level": legend (Mastered / Practising / Not started), then for each chosen level: "B1" (700) + "{m} mastered, {p} practising, {t} total" and a SegmentBar. Faint hint "Next review a week or more away." (definition of mastered).
6. "Grammar checklist": 12 px SegmentBar (learned / learning / not yet) + legend with counts.
7. "Grammar you practise most": legend (Right / Missed), then up to 6 topics: title (700) + "{n} sentences, {pct}% right" + SegmentBar (right = strong, missed = soft). Tap → topic. Empty: "Practise a few sentences and the grammar you use most shows up here."

### 6.17 Your gifts (`/gifts`)
1. ScreenHeader "Your gifts", muted "Every morning at 08:00 a new phrase unlocks for you. Open the app and it's yours."
2. Journey: big day number in **display accent** + "of 14 days" (heading), JourneyPath below.
3. Locked tomorrow card: 1.5 px **dashed accent border**, radius lg: 44 px accentSoft circle with LockSimple duotone, "Tomorrow at 08:00" (700), "A new gift waits for you. Come back and open it.", countdown on the right (heading accent).
4. History list (newest first), one card per gift: today's card on accentSoft, others on surface with border. Header row: accent caption date ("Unlocked today" or "Monday, 13 October") + faint "Day 5". German phrase (heading) + listen; translation (small accent 600); note (small muted).

### 6.18 My words (`/my-words`)
1. ScreenHeader "My words", muted "Words you saved yourself. Tap any German word in a sentence to add it here."
2. Rows with hairline dividers: word (700), meaning or source sentence (small muted, 2 lines), listen button, X to remove.
3. Empty state: Cards icon, "No saved words yet", "Tap any German word in a practice card, a grammar example or a Schreiben sample, then choose Add to my words."
4. Pinned bottom button (when list not empty): primary "Practise my words" (Play).

### 6.19 Settings screens
- **Account settings** (`/settings/account`): ScreenHeader "Account settings"; surfaceAlt box with "Email" caption, the email (600) and "Your email is your login and cannot be changed yet."; then the same profile fields as setup step 1; footer "Save".
- **Change avatar** (`/settings/avatar`): same as setup step 2 with a back header.
- **Levels and focus** (`/settings/levels`): same as setup step 3 with a back header; footer "Save".
- **Language settings** (`/settings/language`): section "App language" ("Menus, buttons and explanations.") with ToggleRows English / Azərbaycanca; section "Translation language" ("The meaning shown next to German words and sentences.") with English on and Azərbaycanca disabled "Coming soon".

---

## 7. Overlays (all render inside the app frame)

### 7.1 Gift reveal (once a day)
Shown on Today the first time the app opens after 08:00. Dark scrim (60 %), centred dialog (surface, radius 28, padding 24, max width 520).
- **Closed state:** 88 px accentSoft circle with a 44 px duotone Gift icon, title "A new gift for you", muted "Day 5. You came back, so here is something for you.", primary "Open it" (Sparkle).
- **Open state** (fades in and slides down, success haptic, phrase spoken): accent caption "Day 5 of 14", phrase in **display** with a 44 px listen button, translation (heading accent), personal note (body), JourneyPath, small muted "You earned this one today. It stays in your gifts.", primary "Keep it".

### 7.2 Word sheet (tap any German word anywhere)
Bottom sheet over a 50 % scrim. Surface, top radius 28, padding 24, grabber bar 40 × 4.
- Headword in **display**, translation (heading accent) if in the dictionary, "Plural: …" muted, 44 px listen button on the right. Verb forms like "ging" or "denke" resolve to the dictionary entry.
- If not in the dictionary: muted "Not in the dictionary yet. It is saved together with the sentence you found it in."
- "Found in" box (surfaceAlt, radius md): caption, the sentence (600), translation.
- Button: primary "Add to my words" (Plus) or secondary "Remove from my words" (X).
Tap the scrim to close.

### 7.3 What's new (after an update)
Centred dialog (surface, radius lg, max 80 % height) over a 55 % scrim: title "What's new", muted "You are now on version 0.5.0.", optional warningSoft data notes, then per release: version in accent 700 and bullet notes with accent dots. Primary "Got it".

### 7.4 Update available banner
Floating at the top (below the safe area), inverted colours: **text-coloured background, bg-coloured text**, radius lg, padding 12: Sparkle icon, "Version 0.6.0 is available.", accent action "Reload" (web) or "Download" (Android), X to dismiss.

### 7.5 Update required (blocking)
Full screen on bg: 64 px warningSoft circle with WarningCircle in warning, title "Please update AchsoKumpel", muted explanation with both versions, primary "Reload" / "Download" or a faint manual instruction.

---

## 8. How the features work (behaviour a designer must respect)

- **Spaced repetition (SM-2 style):** ratings Again / Hard / Good / Easy. Again brings the item back in 10 minutes and once more at the end of the session, and counts a lapse. Items with repeated lapses become **weak spots**. An item is **mastered** when its next review is a week or more away.
- **Daily gifts:** a new phrase unlocks every day at **08:00 local time**. Before 08:00 the previous day's gift is still today's. Journey goals: 14, then 30, 60, 100 days. Milestone days 1, 3, 7, 14, 21, 30, 60, 100 have special phrases. Each learner gets their own deterministic order.
- **My words:** any German word in practice cards, grammar examples or Schreiben texts can be saved with the sentence it came from. Saved words are underlined in accent everywhere.
- **Session end message:** chosen by result: perfect (no misses), good (under 30 % misses), rough.
- **Answer checking:** case and punctuation tolerant; ae, oe, ue, ss count as ä, ö, ü, ß.
- **Accounts and sync:** email + password, no email confirmation. Profile: first name, last name, date of birth, optional phone and profession, avatar, levels, focus. Progress syncs to the server a few seconds after each change; offline works with the local copy; the most recent copy wins.
- **Updates:** the app checks a version file on start, every 30 minutes and on foreground, and shows the banner, the blocking notice or What's new.
- **Text to speech:** German voice for every German line with a listen button.
- **Haptics:** on native devices for right, wrong, tile placement, gift open.

---

## 9. Planned (not built yet, UI placeholders exist)

- **Speech feedback:** record a sentence, get what was heard, corrections and a more natural version.
- **Handwriting feedback:** photograph a handwritten letter, get corrections checked against the task points and better word choices. (Placeholder card on the writing task screen.)
- **Azerbaijani translations** of the learning content.

Feedback tone must match the app: encouraging, focused on what makes the German more natural, not on every tiny slip.

---

## 10. Hard constraints for any redesign

1. One brand hue (Kumpel Purple). Red / green / amber only for wrong / right / warning.
2. Light and dark mode for every screen, using the token table above.
3. Plus Jakarta Sans only. Phosphor icons only, by semantic name.
4. Radius rule: buttons and inputs 14, cards 20, chips pill.
5. Mobile first (390 × 844 reference). On wide screens the app is a 560 px phone frame, not a desktop layout.
6. Overlays live inside the frame (absolute views, not system modals).
7. Copy: plain, warm, no exclamation marks, no em dashes. German UI words stay German.
8. Every chart value is also written as text.
9. Touch targets at least 44 px; text contrast WCAG AA.
10. Content IDs and the learning flow are fixed; visual design and layout can change.

---

## 11. Screenshot index (`docs/screenshots/`)

welcome, levels, today, today-dark, today-az (Azerbaijani UI), gift-open, gifts, practice, say-it-in-german, sentence-builder, sentence-builder-wrong, rating, word-card, word-sheet, grammar, grammar-topic, verbs, schreiben, copy-mode, my-words, progress, progress-dark, progress-grammar, me, desktop, desktop-dark. Brand board: `docs/brand-board.png`. Logo files: `brand/logo/`. Tokens: `brand/tokens.json`.
