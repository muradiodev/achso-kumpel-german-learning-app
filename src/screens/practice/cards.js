import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
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
        borderRadius: radius.md,
        padding: space.lg,
        gap: space.xs,
      }}
    >
      <AppText weight="700" tone={correct ? 'success' : 'danger'}>
        {correct ? t('practice.correct') : t('practice.almost')}
      </AppText>
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

  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => setRevealed(true)}
        disabled={revealed}
        accessibilityRole="button"
        accessibilityHint={t('practice.tapToReveal')}
        style={styles.prompt}
      >
        <AppText variant="caption" tone="faint">
          {word.level}
        </AppText>
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
          <AppText tone="faint" style={{ marginTop: space.lg }}>
            {t('practice.tapToReveal')}
          </AppText>
        )}
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

function CheckCard({ title, prompt, hint, expected, inputLabel, onAnswer, speakText, context }) {
  const { t } = useI18n();
  const { space } = useTheme();
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
        <AppText variant="caption" tone="faint">
          {title}
        </AppText>
        {prompt}
        {hint ? (
          <AppText tone="muted" style={{ marginTop: space.sm }}>
            {hint}
          </AppText>
        ) : null}
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

export function ClozeCard({ item, onAnswer }) {
  const { t, lang } = useI18n();
  const sentence = item.ref;
  const [before, after] = splitCloze(sentence.de, sentence.cloze);
  return (
    <CheckCard
      title={`${sentence.level} · ${t('practice.modes.cloze.title')}`}
      prompt={<AppText variant="title">{`${before}_____${after}`}</AppText>}
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
        <AppText variant="caption" tone="faint">
          {t('practice.auxQuestion')}
        </AppText>
        <AppText variant="display">{verb.inf}</AppText>
        <AppText tone="muted">{tr(verb.tr, lang)}</AppText>
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
          <Button label="haben" variant="secondary" onPress={() => choose('haben')} style={styles.flex} />
          <Button label="sein" variant="secondary" onPress={() => choose('sein')} style={styles.flex} />
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
  const [revealed, setRevealed] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.prompt}>
        <AppText variant="caption" tone="faint">
          {t('myWords.title')}
        </AppText>
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
});
