import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { Chip } from '@/components/chip';
import { EmptyState } from '@/components/empty-state';
import { Icon } from '@/components/icon';
import { LevelTag } from '@/components/level-tag';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { SpeakButton } from '@/components/speak-button';
import { Surface } from '@/components/surface';
import { TappableText } from '@/components/tappable-text';
import { READINGS, getReading } from '@/data';
import { useProgress } from '@/features/progress/progress-context';
import { useWordSheet } from '@/features/words/word-sheet';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

// Reading text style: a little larger and airier than body copy.
const READ = { fontSize: 18, lineHeight: 30 };

function Paragraph({ sentences, textId, showTranslation }) {
  const { lang } = useI18n();
  const { space } = useTheme();
  const german = sentences.map((s) => s.de).join(' ');
  return (
    <View style={{ gap: space.sm }}>
      <View style={styles.paragraphRow}>
        <AppText style={[READ, styles.flex]}>
          {sentences.map((s, i) => (
            <TappableText
              key={i}
              text={i < sentences.length - 1 ? `${s.de} ` : s.de}
              context={{ de: s.de, tr: s.tr, from: textId }}
              style={READ}
            />
          ))}
        </AppText>
        <SpeakButton text={german} size={36} />
      </View>
      {showTranslation ? (
        <AppText variant="small" tone="muted">
          {sentences.map((s) => tr(s.tr, lang)).join(' ')}
        </AppText>
      ) : null}
    </View>
  );
}

function Question({ index, question, picked, onPick }) {
  const { colors, radius, space } = useTheme();
  const answered = picked != null;
  return (
    <View style={{ gap: space.sm }}>
      <AppText weight="700">{`${index + 1}. ${question.q}`}</AppText>
      {question.options.map((option, i) => {
        const right = i === question.answer;
        const chosen = i === picked;
        // After answering: the right option turns green, a wrong pick turns red.
        const tone = !answered ? null : right ? 'success' : chosen ? 'danger' : null;
        return (
          <Pressable
            key={i}
            disabled={answered}
            onPress={() => onPick(i)}
            accessibilityRole="button"
            accessibilityState={{ selected: chosen, disabled: answered }}
            style={({ pressed }) => [
              styles.option,
              {
                borderRadius: radius.md,
                borderColor: tone ? colors[tone] : colors.border,
                backgroundColor: tone ? colors[`${tone}Soft`] : colors.surface,
                opacity: answered && !tone ? 0.6 : 1,
                transform: [{ scale: pressed ? 0.98 : 1 }],
              },
            ]}
          >
            <AppText style={styles.flex}>{option}</AppText>
            {tone ? (
              <Icon name={tone === 'success' ? 'checkCircle' : 'close'} size={20} color={colors[tone]} weight="bold" />
            ) : null}
          </Pressable>
        );
      })}
    </View>
  );
}

// Keyed by id, so moving on to the next text starts with a fresh quiz.
export default function ReadingScreen() {
  const { id } = useLocalSearchParams();
  return <ReadingText key={id} id={id} />;
}

function ReadingText({ id }) {
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();
  const { myWords, markReadingDone } = useProgress();
  const { openWord } = useWordSheet();
  const text = getReading(id);
  const [showTranslation, setShowTranslation] = useState(false);
  const [answers, setAnswers] = useState({});
  const saved = useRef(false);

  const collected = useMemo(
    () =>
      Object.values(myWords)
        .filter((w) => w.context?.from === id)
        .sort((a, b) => a.addedAt - b.addedAt),
    [myWords, id],
  );
  const total = text?.questions.length ?? 0;
  const answeredCount = Object.keys(answers).length;
  const correct = text ? text.questions.filter((q, i) => answers[i] === q.answer).length : 0;
  const finished = total > 0 && answeredCount === total;

  useEffect(() => {
    if (!finished || saved.current) return;
    saved.current = true;
    markReadingDone(id, correct, total);
  }, [finished, correct, total, id, markReadingDone]);

  if (!text) {
    return (
      <Screen>
        <ScreenHeader title={t('reading.title')} />
        <EmptyState icon="book" title={t('reading.notFound')} />
      </Screen>
    );
  }

  const position = READINGS.indexOf(text);
  const next = READINGS[position + 1] ?? null;
  const section = (title) => (
    <AppText variant="heading" style={{ marginTop: space.xxl, marginBottom: space.md }}>
      {title}
    </AppText>
  );

  return (
    <Screen>
      <ScreenHeader title={t('reading.title')} />

      <LevelTag level={text.level} label={t('reading.minutes', { count: text.minutes })} />
      <AppText variant="display" style={{ marginTop: space.sm }}>
        {text.title.de}
      </AppText>
      <AppText tone="muted">{tr(text.title, lang)}</AppText>

      <View style={[styles.toolbar, { marginTop: space.lg }]}>
        <View style={[styles.hint, styles.flex]}>
          <Icon name="sparkle" size={16} color={colors.accent} />
          <AppText variant="small" tone="muted" style={styles.flex}>
            {t('reading.tapHint')}
          </AppText>
        </View>
        <Chip
          label={t('reading.translation')}
          selected={showTranslation}
          onPress={() => setShowTranslation((v) => !v)}
        />
      </View>

      <View style={{ gap: space.xl, marginTop: space.xl }}>
        {text.paragraphs.map((sentences, i) => (
          <Paragraph key={i} sentences={sentences} textId={text.id} showTranslation={showTranslation} />
        ))}
      </View>

      {section(t('reading.wordsTitle', { count: collected.length }))}
      {collected.length ? (
        <>
          <View style={styles.chips}>
            {collected.map((w) => (
              <Chip key={w.id} label={w.de} tone="soft" onPress={() => openWord(w.de, w.context)} />
            ))}
          </View>
          <Button
            label={t('myWords.practise')}
            icon="play"
            variant="secondary"
            onPress={() => router.push('/practice/mine')}
            style={{ marginTop: space.md }}
          />
        </>
      ) : (
        <AppText variant="small" tone="muted">
          {t('reading.wordsEmpty')}
        </AppText>
      )}

      {section(t('reading.quizTitle'))}
      <View style={{ gap: space.xl }}>
        {text.questions.map((q, i) => (
          <Question
            key={i}
            index={i}
            question={q}
            picked={answers[i]}
            onPick={(choice) => setAnswers((prev) => ({ ...prev, [i]: choice }))}
          />
        ))}
      </View>

      {finished ? (
        <Surface tone="brand" style={[styles.result, { marginTop: space.xl }]}>
          <AppText variant="display" tone="onAccent">{`${correct}/${total}`}</AppText>
          <AppText weight="700" tone="onAccent" align="center">
            {t(correct === total ? 'reading.perfect' : 'reading.finished')}
          </AppText>
          {next ? (
            <Button
              label={t('reading.next')}
              icon="next"
              variant="secondary"
              onPress={() => router.replace(`/reading/${next.id}`)}
              style={styles.stretch}
            />
          ) : (
            <Button
              label={t('reading.backToList')}
              variant="secondary"
              onPress={() => router.back()}
              style={styles.stretch}
            />
          )}
        </Surface>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  paragraphRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  toolbar: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  hint: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  option: { flexDirection: 'row', alignItems: 'center', gap: 10, borderWidth: 1, paddingHorizontal: 14, minHeight: 48 },
  result: { alignItems: 'center', gap: 12 },
  stretch: { alignSelf: 'stretch' },
});
