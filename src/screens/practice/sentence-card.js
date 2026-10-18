import * as Haptics from 'expo-haptics';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { LevelTag } from '@/components/level-tag';
import { Segmented } from '@/components/segmented';
import { SpeakButton } from '@/components/speak-button';
import { TappableText } from '@/components/tappable-text';
import { TextField } from '@/components/text-field';
import { ENCOURAGEMENT, randomLine } from '@/data/motivation';
import { isSameAnswer, normalize } from '@/features/practice/answer-check';
import { buildTiles, checkOrder, sentenceWords } from '@/features/practice/sentence-tiles';
import { speakGerman } from '@/features/speech/tts';
import { RATING } from '@/features/srs/scheduler';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { usePreference } from '@/lib/use-preference';
import { useTheme } from '@/theme';

import { RatingBar } from './rating-bar';
import { TileBoard } from './tile-board';

// "Say it in German": the learner sees the English sentence and builds the
// German one. Three ways to answer, chosen once and remembered:
//   tiles     tap or drag word tiles into order (eye + hand memory)
//   keyboard  type it
//   speak     say it out loud, reveal, rate yourself
// Tiles and keyboard are checked automatically and can be retried.

function ResultPanel({ tone, title, line, sentence, children }) {
  const { colors, radius, space } = useTheme();
  const bg = {
    right: colors.successSoft,
    wrong: colors.dangerSoft,
    neutral: colors.surfaceAlt,
  }[tone];
  const fg = { right: 'success', wrong: 'danger', neutral: 'default' }[tone];
  const icon = { right: 'checkCircle', wrong: 'warning', neutral: 'reveal' }[tone];
  const iconColor = { right: colors.success, wrong: colors.danger, neutral: colors.textMuted }[tone];
  return (
    <View
      style={{
        backgroundColor: bg,
        borderRadius: radius.lg,
        padding: space.lg,
        gap: space.sm,
      }}
    >
      <View style={styles.head}>
        <Icon name={icon} size={20} color={iconColor} weight={tone === 'neutral' ? 'regular' : 'fill'} />
        <AppText variant="heading" tone={fg}>
          {title}
        </AppText>
      </View>
      {line ? <AppText variant="small">{line}</AppText> : null}
      {sentence ? (
        <View style={styles.sentenceRow}>
          <TappableText text={sentence.de} context={sentence} weight="600" style={styles.flex} />
          <SpeakButton text={sentence.de} />
        </View>
      ) : null}
      {children}
    </View>
  );
}

// Auto-graded answers: right first time is Good, right after a retry is
// Hard, giving up is Again.
function gradeFor(attempts) {
  return attempts <= 1 ? RATING.GOOD : RATING.HARD;
}

function TilesFlow({ sentence, onAnswer }) {
  const { t, lang } = useI18n();
  const { space } = useTheme();
  const tiles = useMemo(() => buildTiles(sentence), [sentence]);
  const textOf = useMemo(() => Object.fromEntries(tiles.map((x) => [x.id, x.text])), [tiles]);
  const [answer, setAnswer] = useState([]);
  const [status, setStatus] = useState('building'); // building | wrong | right | revealed
  const [wrong, setWrong] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [line, setLine] = useState('');

  function change(next) {
    setAnswer(next);
    if (status === 'wrong') {
      setStatus('building');
      setWrong(null);
    }
  }

  function check() {
    const result = checkOrder(
      answer.map((id) => textOf[id]),
      sentence,
    );
    const tries = attempts + 1;
    setAttempts(tries);
    if (result.correct) {
      setStatus('right');
      setLine(randomLine(tries === 1 ? ENCOURAGEMENT.firstTry : ENCOURAGEMENT.retry, lang));
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      speakGerman(sentence.de);
    } else {
      setStatus('wrong');
      setWrong(result.wrong);
      setLine(randomLine(ENCOURAGEMENT.wrong, lang));
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  }

  return (
    <View style={styles.flow}>
      <View style={{ opacity: status === 'revealed' ? 0.55 : 1 }}>
      <TileBoard
        tiles={tiles}
        answer={answer}
        onChange={change}
        wrong={wrong}
        solved={status === 'right'}
        locked={status === 'right' || status === 'revealed'}
      />
      </View>
      <View style={{ gap: space.md }}>
        {status === 'building' ? (
          <>
            <AppText variant="small" tone="faint" align="center">
              {t('practice.tilesHint')}
            </AppText>
            <Button label={t('practice.check')} onPress={check} disabled={!answer.length} />
          </>
        ) : null}
        {status === 'wrong' ? (
          <ResultPanel tone="wrong" title={t('practice.notQuite')} line={line}>
            <View style={styles.row}>
              <Button
                label={t('practice.reveal')}
                variant="secondary"
                onPress={() => {
                  setStatus('revealed');
                  speakGerman(sentence.de);
                }}
                style={styles.flex}
              />
              <Button
                label={t('practice.tryAgain')}
                icon="repeat"
                onPress={() => {
                  setStatus('building');
                  setWrong(null);
                }}
                style={styles.flex}
              />
            </View>
          </ResultPanel>
        ) : null}
        {status === 'right' ? (
          <>
            <ResultPanel tone="right" title={t('practice.correct')} line={line} sentence={sentence} />
            <Button label={t('common.continue')} icon="next" onPress={() => onAnswer(gradeFor(attempts), true)} />
          </>
        ) : null}
        {status === 'revealed' ? (
          <>
            <ResultPanel
              tone="neutral"
              title={t('practice.answerIs')}
              sentence={sentence}
              line={t('practice.tapWordHint')}
            />
            <Button label={t('common.continue')} icon="next" onPress={() => onAnswer(RATING.AGAIN, false)} />
          </>
        ) : null}
      </View>
    </View>
  );
}

function TypeFlow({ sentence, onAnswer }) {
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();
  const [typed, setTyped] = useState('');
  const [status, setStatus] = useState('building');
  const [attempts, setAttempts] = useState(0);
  const [line, setLine] = useState('');

  const expected = useMemo(() => sentenceWords(sentence.de).map(normalize), [sentence]);
  const givenWords = sentenceWords(typed);

  function check() {
    const tries = attempts + 1;
    setAttempts(tries);
    if (isSameAnswer(typed, sentence.de)) {
      setStatus('right');
      setLine(randomLine(tries === 1 ? ENCOURAGEMENT.firstTry : ENCOURAGEMENT.retry, lang));
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      speakGerman(sentence.de);
    } else {
      setStatus('wrong');
      setLine(randomLine(ENCOURAGEMENT.wrong, lang));
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  }

  return (
    <View style={styles.flow}>
      <TextField
        label={t('practice.typeHere')}
        value={typed}
        onChangeText={(v) => {
          setTyped(v);
          if (status === 'wrong') setStatus('building');
        }}
        editable={status === 'building' || status === 'wrong'}
        autoCapitalize="sentences"
        autoCorrect={false}
        multiline
      />
      <View style={{ gap: space.md }}>
        {status === 'building' ? <Button label={t('practice.check')} onPress={check} disabled={!typed.trim()} /> : null}
        {status === 'wrong' ? (
          <ResultPanel tone="wrong" title={t('practice.notQuite')} line={line}>
            <AppText>
              {givenWords.map((w, i) => (
                <AppText
                  key={i}
                  weight="600"
                  style={{
                    color: normalize(w) === expected[i] ? colors.text : colors.danger,
                  }}
                >
                  {`${w} `}
                </AppText>
              ))}
            </AppText>
            <View style={styles.row}>
              <Button
                label={t('practice.reveal')}
                variant="secondary"
                onPress={() => setStatus('revealed')}
                style={styles.flex}
              />
              <Button
                label={t('practice.tryAgain')}
                icon="repeat"
                onPress={() => setStatus('building')}
                style={styles.flex}
              />
            </View>
          </ResultPanel>
        ) : null}
        {status === 'right' ? (
          <>
            <ResultPanel tone="right" title={t('practice.correct')} line={line} sentence={sentence} />
            <Button label={t('common.continue')} icon="next" onPress={() => onAnswer(gradeFor(attempts), true)} />
          </>
        ) : null}
        {status === 'revealed' ? (
          <>
            <ResultPanel tone="neutral" title={t('practice.answerIs')} sentence={sentence} />
            <Button label={t('common.continue')} icon="next" onPress={() => onAnswer(RATING.AGAIN, false)} />
          </>
        ) : null}
      </View>
    </View>
  );
}

function SpeakFlow({ sentence, onAnswer }) {
  const { t } = useI18n();
  const { colors, radius, space } = useTheme();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) speakGerman(sentence.de);
  }, [revealed, sentence.de]);

  return (
    <View style={styles.flow}>
      {revealed ? (
        <View style={{ gap: space.sm, backgroundColor: colors.accentSoft, borderRadius: radius.lg, padding: space.lg }}>
          <AppText variant="caption" tone="accent">
            {t('practice.answerIs')}
          </AppText>
          <View style={styles.sentenceRow}>
            <TappableText text={sentence.de} context={sentence} variant="title" style={styles.flex} />
            <SpeakButton text={sentence.de} size={44} ground={colors.surface} />
          </View>
          <AppText variant="small" tone="muted">
            {t('practice.tapWordHint')}
          </AppText>
        </View>
      ) : (
        <AppText tone="muted">{t('practice.sayOrType')}</AppText>
      )}
      {revealed ? (
        <RatingBar onRate={onAnswer} />
      ) : (
        <Button label={t('practice.reveal')} onPress={() => setRevealed(true)} />
      )}
    </View>
  );
}

const FLOWS = { tiles: TilesFlow, keyboard: TypeFlow, speak: SpeakFlow };

export function SentenceCard({ item, onAnswer }) {
  const { t, lang } = useI18n();
  const { space } = useTheme();
  const [mode, setMode] = usePreference('sentenceMode', 'tiles');
  const sentence = item.ref;
  const Flow = FLOWS[mode] ?? TilesFlow;

  return (
    <View style={styles.card}>
      <View style={{ gap: space.md }}>
        <Segmented
          value={mode}
          onChange={setMode}
          options={[
            { value: 'tiles', label: t('practice.modeTiles'), icon: 'modeTiles' },
            { value: 'keyboard', label: t('practice.modeKeyboard'), icon: 'modeKeyboard' },
            { value: 'speak', label: t('practice.modeSpeak'), icon: 'modeSpeak' },
          ]}
        />
        <View style={{ marginTop: space.sm }}>
          <LevelTag level={sentence.level} label={t('practice.modes.sentences.title')} />
        </View>
        <AppText variant="title">{tr(sentence.tr, lang)}</AppText>
      </View>
      <Flow key={mode} sentence={sentence} onAnswer={onAnswer} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, gap: 24 },
  flow: { flex: 1, justifyContent: 'space-between', gap: 24 },
  flex: { flex: 1 },
  row: { flexDirection: 'row', gap: 10, marginTop: 4 },
  sentenceRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 8 },
});
