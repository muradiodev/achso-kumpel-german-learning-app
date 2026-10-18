import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { LevelTag } from '@/components/level-tag';
import { SpeakButton } from '@/components/speak-button';
import { TappableText } from '@/components/tappable-text';
import { TextField } from '@/components/text-field';
import { isSameAnswer } from '@/features/practice/answer-check';
import { speakGerman } from '@/features/speech/tts';
import { ENTRY_BY_ID } from '@/features/words/lookup';
import { RATING } from '@/features/srs/scheduler';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

import { RatingBar } from './rating-bar';
import { SentenceCard } from './sentence-card';

// Every card gets { item, onAnswer(rating, correct?) } and owns its own reveal
// state. The session keys each card, so state resets between items.

// The prompt sits on a bordered card so it reads as the thing to answer.
function usePromptCard() {
  const { colors, radius, space } = useTheme();
  return {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: space.xl,
    gap: space.sm,
  };
}

// German text with a listen button. Every word can be tapped to save it.
function GermanLine({ text, variant = 'title', context, tappable = true }) {
  return (
    <View style={styles.germanLine}>
      {tappable ? (
        <TappableText text={text} context={context} variant={variant} style={styles.flex} />
      ) : (
        <AppText variant={variant} style={styles.flex}>
          {text}
        </AppText>
      )}
      <SpeakButton text={text} size={40} />
    </View>
  );
}

function Feedback({ correct, expected, given }) {
  const { t } = useI18n();
  const { colors, radius, space } = useTheme();
  return (
    <View
      style={{
        backgroundColor: correct ? colors.successSoft : colors.dangerSoft,
        borderRadius: radius.lg,
        padding: space.lg,
        gap: space.xs,
      }}
    >
      <View style={styles.head}>
        <Icon
          name={correct ? 'checkCircle' : 'warning'}
          size={20}
          weight="fill"
          color={correct ? colors.success : colors.danger}
        />
        <AppText variant="heading" tone={correct ? 'success' : 'danger'} style={styles.flex}>
          {correct ? t('practice.correct') : t('practice.almost')}
        </AppText>
      </View>
      {!correct ? <AppText weight="600">{expected}</AppText> : null}
      {!correct && given ? (
        <AppText variant="small" tone="muted">
          {`${t('practice.yourAnswer')}: ${given}`}
        </AppText>
      ) : null}
    </View>
  );
}

export function WordCard({ item, onAnswer }) {
  const { t, lang } = useI18n();
  const { space } = useTheme();
  const word = item.ref;
  const [direction] = useState(() => (Math.random() < 0.5 ? 'de-en' : 'en-de'));
  const [revealed, setRevealed] = useState(false);
  const meaning = tr(word.tr, lang);
  const { colors, radius } = useTheme();
  const promptCard = usePromptCard();

  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => setRevealed(true)}
        disabled={revealed}
        accessibilityRole="button"
        accessibilityHint={t('practice.tapToReveal')}
        style={styles.prompt}
      >
        <LevelTag level={word.level} label={t('practice.modes.words.title')} />
        <View style={[promptCard, { marginTop: space.sm }]}>
        {direction === 'de-en' ? (
          <GermanLine text={word.de} variant="display" tappable={false} />
        ) : (
          <AppText variant="display">{meaning}</AppText>
        )}

        {revealed ? (
          <View style={{ gap: space.lg, marginTop: space.lg }}>
            {direction === 'de-en' ? (
              <AppText variant="title" tone="accent">
                {meaning}
              </AppText>
            ) : (
              <GermanLine text={word.de} />
            )}
            {word.plural ? <AppText tone="muted">{`Plural: ${word.plural}`}</AppText> : null}
            <View style={{ gap: space.xs }}>
              <AppText variant="caption" tone="faint">
                {t('practice.exampleLabel')}
              </AppText>
              <GermanLine text={word.example.de} variant="body" context={word.example} />
              <AppText variant="small" tone="muted">
                {tr(word.example.tr, lang)}
              </AppText>
            </View>
          </View>
        ) : (
          <View
            style={[
              styles.revealBox,
              { borderColor: colors.accentMuted, borderRadius: radius.lg, marginTop: space.lg },
            ]}
          >
            <Icon name="reveal" size={28} color={colors.accent} />
            <AppText weight="600" tone="accent">
              {t('practice.tapToReveal')}
            </AppText>
          </View>
        )}
        </View>
      </Pressable>
      {revealed ? (
        <RatingBar onRate={onAnswer} />
      ) : (
        <Button label={t('practice.reveal')} onPress={() => setRevealed(true)} />
      )}
    </View>
  );
}

function splitCloze(text, word) {
  const match = new RegExp(`(^|[^\\p{L}])(${word})(?=[^\\p{L}]|$)`, 'u').exec(text);
  if (!match) return [text, ''];
  const start = match.index + match[1].length;
  return [text.slice(0, start), text.slice(start + word.length)];
}

function CheckCard({ title, level, prompt, renderPrompt, hint, expected, inputLabel, onAnswer, speakText, context }) {
  const { t } = useI18n();
  const { space } = useTheme();
  const promptCard = usePromptCard();
  const [typed, setTyped] = useState('');
  const [result, setResult] = useState(null);

  function check() {
    const correct = isSameAnswer(typed, expected);
    setResult(correct);
    if (speakText) speakGerman(speakText);
  }

  return (
    <View style={styles.card}>
      <View style={styles.prompt}>
        <LevelTag level={level} label={title} />
        <View style={[promptCard, { marginTop: space.sm }]}>
          {renderPrompt ? renderPrompt(result === null ? typed : expected) : prompt}
          {hint ? (
            <AppText tone="muted" style={{ marginTop: space.xs }}>
              {hint}
            </AppText>
          ) : null}
        </View>
        <View style={{ marginTop: space.xl, gap: space.lg }}>
          {result === null ? (
            <TextField
              label={inputLabel}
              value={typed}
              onChangeText={setTyped}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={check}
              autoFocus
            />
          ) : (
            <>
              <Feedback correct={result} expected={expected} given={typed} />
              {speakText ? <GermanLine text={speakText} variant="heading" context={context} /> : null}
            </>
          )}
        </View>
      </View>
      {result === null ? (
        <Button label={t('practice.check')} onPress={check} disabled={!typed.trim()} />
      ) : (
        <Button label={t('practice.next')} onPress={() => onAnswer(result ? RATING.GOOD : RATING.AGAIN, result)} />
      )}
    </View>
  );
}

// The sentence with the gap filled live by what the learner types.
function ClozeLine({ before, after, typed }) {
  const { colors } = useTheme();
  return (
    <AppText variant="title">
      {before}
      <AppText
        variant="title"
        style={{
          color: colors.accent,
          backgroundColor: colors.accentSoft,
          textDecorationLine: 'underline',
          textDecorationColor: colors.accent,
        }}
      >
        {typed ? ` ${typed} ` : '\u2003\u2003\u2003'}
      </AppText>
      {after}
    </AppText>
  );
}

export function ClozeCard({ item, onAnswer }) {
  const { t, lang } = useI18n();
  const sentence = item.ref;
  const [before, after] = splitCloze(sentence.de, sentence.cloze);
  return (
    <CheckCard
      level={sentence.level}
      title={t('practice.modes.cloze.title')}
      renderPrompt={(typed) => <ClozeLine before={before} after={after} typed={typed} />}
      hint={tr(sentence.tr, lang)}
      expected={sentence.cloze}
      inputLabel={t('practice.typeWord')}
      speakText={sentence.de}
      context={sentence}
      onAnswer={onAnswer}
    />
  );
}

export function FormsCard({ item, onAnswer }) {
  const { t, lang } = useI18n();
  const verb = item.ref;
  const helper = verb.aux === 'sein' ? 'ist' : 'hat';
  return (
    <CheckCard
      title={t('practice.formsQuestion')}
      prompt={<AppText variant="display">{verb.inf}</AppText>}
      hint={`${tr(verb.tr, lang)}  ·  er ${helper} _____`}
      expected={verb.p2}
      inputLabel={t('verbs.partizip')}
      speakText={`er ${helper} ${verb.p2}`}
      onAnswer={onAnswer}
    />
  );
}

export function AuxCard({ item, onAnswer }) {
  const { t, lang } = useI18n();
  const { space } = useTheme();
  const verb = item.ref;
  const promptCard = usePromptCard();
  const [choice, setChoice] = useState(null);
  const correct = choice === verb.aux;
  const helper = verb.aux === 'sein' ? 'ist' : 'hat';

  function choose(aux) {
    setChoice(aux);
    speakGerman(`er ${helper} ${verb.p2}`);
  }

  return (
    <View style={styles.card}>
      <View style={styles.prompt}>
        <AppText variant="title">{t('practice.auxQuestion')}</AppText>
        <View style={[promptCard, styles.centerCard, { marginTop: space.sm }]}>
          <AppText variant="display" align="center">
            {verb.inf}
          </AppText>
          <AppText tone="muted" align="center">
            {tr(verb.tr, lang)}
          </AppText>
        </View>
        {choice ? (
          <View style={{ gap: space.md, marginTop: space.xl }}>
            <Feedback correct={correct} expected={`er ${helper} ${verb.p2}`} />
            {correct ? <AppText variant="title">{`er ${helper} ${verb.p2}`}</AppText> : null}
            {verb.note ? (
              <AppText variant="small" tone="muted">
                {tr(verb.note, lang)}
              </AppText>
            ) : null}
          </View>
        ) : null}
      </View>
      {choice ? (
        <Button label={t('practice.next')} onPress={() => onAnswer(correct ? RATING.GOOD : RATING.AGAIN, correct)} />
      ) : (
        <View style={styles.choiceRow}>
          <Button label="haben" variant="secondary" onPress={() => choose('haben')} style={[styles.flex, styles.choice]} />
          <Button label="sein" variant="secondary" onPress={() => choose('sein')} style={[styles.flex, styles.choice]} />
        </View>
      )}
    </View>
  );
}

// A word the learner saved. Without a dictionary entry the card shows the
// sentence it was found in as the "answer".
export function MyWordCard({ item, onAnswer }) {
  const { t, lang } = useI18n();
  const { space } = useTheme();
  const word = item.ref;
  const entry = ENTRY_BY_ID.get(word.id);
  const promptCard = usePromptCard();
  const [revealed, setRevealed] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.prompt}>
        <LevelTag label={t('myWords.title')} />
        <View style={[promptCard, { marginTop: space.sm }]}>
        <GermanLine text={word.de} variant="display" tappable={false} />
        {revealed && entry ? (
          <AppText variant="title" tone="accent">
            {tr(entry.tr, lang)}
          </AppText>
        ) : null}
        {revealed && word.context ? (
          <View style={{ gap: space.xs, marginTop: space.lg }}>
            <AppText variant="caption" tone="faint">
              {t('myWords.foundIn')}
            </AppText>
            <GermanLine text={word.context.de} variant="body" context={word.context} />
            {word.context.tr ? (
              <AppText variant="small" tone="muted">
                {tr(word.context.tr, lang)}
              </AppText>
            ) : null}
          </View>
        ) : null}
        </View>
      </View>
      {revealed ? (
        <RatingBar onRate={onAnswer} />
      ) : (
        <Button label={t('practice.reveal')} onPress={() => setRevealed(true)} />
      )}
    </View>
  );
}

export const CARD_BY_KIND = {
  myword: MyWordCard,
  word: WordCard,
  recall: SentenceCard,
  cloze: ClozeCard,
  aux: AuxCard,
  forms: FormsCard,
};

const styles = StyleSheet.create({
  card: { flex: 1, justifyContent: 'space-between', gap: 24 },
  prompt: { gap: 8 },
  flex: { flex: 1 },
  germanLine: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  choiceRow: { flexDirection: 'row', gap: 12 },
  start: { alignSelf: 'flex-start', paddingHorizontal: 0 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  choice: { minHeight: 72 },
  centerCard: { alignItems: 'center', paddingVertical: 32 },
  revealBox: { borderWidth: 1.5, borderStyle: 'dashed', alignItems: 'center', gap: 8, paddingVertical: 28 },
});
