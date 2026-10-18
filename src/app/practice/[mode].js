import * as Haptics from 'expo-haptics';
import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { EmptyState } from '@/components/empty-state';
import { Icon } from '@/components/icon';
import { ProgressRing } from '@/components/progress-charts';
import { Screen } from '@/components/screen';
import { pick, SESSION_END } from '@/data/motivation';
import { useAuth } from '@/features/auth/auth-context';
import { buildSession } from '@/features/practice/session-builder';
import { useProgress } from '@/features/progress/progress-context';
import { stopSpeaking } from '@/features/speech/tts';
import { RATING } from '@/features/srs/scheduler';
import { useI18n } from '@/i18n';
import { CARD_BY_KIND } from '@/screens/practice/cards';
import { useTheme } from '@/theme';

export default function PracticeSession() {
  const { mode = 'mixed', topics: topicsParam } = useLocalSearchParams();
  const topics = topicsParam ? String(topicsParam).split(',') : undefined;
  const { t, lang } = useI18n();
  const { colors, space, radius } = useTheme();
  const { user } = useAuth();
  const progress = useProgress();
  const [queue, setQueue] = useState(null);
  const [index, setIndex] = useState(0);
  const [stats, setStats] = useState({ done: 0, again: 0 });
  const requeued = useRef(new Set());

  const start = useCallback(() => {
    requeued.current = new Set();
    setIndex(0);
    setStats({ done: 0, again: 0 });
    setQueue(
      buildSession({
        mode,
        topics,
        levels: user.profile.levels,
        srs: progress.srs,
        grammarStatus: progress.grammar,
        myWords: progress.myWords,
        knownVerbs: progress.knownVerbs,
        // A chosen topic set or word list may be larger than a normal session.
        size: topics || mode === 'mine' ? 20 : 15,
        newLimit: topics || mode === 'mine' ? 20 : 8,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, topicsParam, user.profile.levels, progress.srs, progress.grammar, progress.myWords]);

  // Build once, after progress has loaded. Later SRS updates must not reshuffle
  // the running session, so `start` is deliberately not a dependency.
  useEffect(() => {
    if (progress.loaded && queue === null) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress.loaded]);

  useEffect(() => stopSpeaking, []);

  const answer = useCallback(
    (rating, correct) => {
      const item = queue[index];
      progress.recordReview(item.key, rating);
      if (correct === true) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      else if (correct === false) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      else Haptics.selectionAsync();

      // Missed items come back once at the end of the same session.
      if (rating === RATING.AGAIN && !requeued.current.has(item.key)) {
        requeued.current.add(item.key);
        setQueue((q) => [...q, item]);
      }
      setStats((s) => ({ done: s.done + 1, again: s.again + (rating === RATING.AGAIN ? 1 : 0) }));
      setIndex((i) => i + 1);
      stopSpeaking();
    },
    [queue, index, progress],
  );

  if (!queue) return <Screen scroll={false} />;

  if (queue.length === 0) {
    return (
      <Screen scroll={false}>
        <EmptyState
          title={t('practice.emptyTitle')}
          body={t('practice.emptyBody')}
          actionLabel={t('practice.emptyCta')}
          onAction={() => router.replace('/settings/levels')}
        />
        <Button label={t('practice.finish')} variant="ghost" onPress={() => router.back()} />
      </Screen>
    );
  }

  if (index >= queue.length) {
    const right = Math.max(0, stats.done - stats.again);
    const share = stats.done ? right / stats.done : 0;
    const endLine = pick(
      SESSION_END[stats.again === 0 ? 'perfect' : stats.again / Math.max(1, stats.done) < 0.3 ? 'good' : 'rough'],
      lang,
    );
    return (
      <Screen
        footer={
          <View style={{ gap: space.sm }}>
            <Button label={t('practice.finish')} onPress={() => router.back()} />
            <Button label={t('practice.again')} icon="repeat" variant="secondary" onPress={start} />
          </View>
        }
        contentStyle={styles.summary}
      >
        <ProgressRing value={share} size={168} stroke={16}>
          <AppText variant="display">{`${Math.round(share * 100)}%`}</AppText>
          <AppText variant="small" tone="muted">
            {t('progress.right')}
          </AppText>
        </ProgressRing>
        <View style={{ gap: space.sm, alignItems: 'center' }}>
          <AppText variant="display" align="center">
            {t('practice.summaryTitle')}
          </AppText>
          <AppText tone="muted" align="center">
            {t('practice.summaryBody', { count: stats.done, again: stats.again })}
          </AppText>
        </View>
        <View style={styles.statRow}>
          {[
            [right, t('progress.right')],
            [stats.again, t('progress.missed')],
          ].map(([value, label]) => (
            <View
              key={label}
              style={[
                styles.stat,
                { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: radius.lg },
              ]}
            >
              <AppText variant="title">{String(value)}</AppText>
              <AppText variant="small" tone="muted">
                {label}
              </AppText>
            </View>
          ))}
        </View>
        <View style={[styles.endLine, { backgroundColor: colors.accentSoft, borderRadius: radius.lg }]}>
          <Icon name="sparkle" size={20} color={colors.accent} weight="fill" />
          <AppText variant="small" style={styles.flex}>
            {endLine}
          </AppText>
        </View>
      </Screen>
    );
  }

  const item = queue[index];
  const Card = CARD_BY_KIND[item.kind];
  const ratio = (index + 1) / queue.length;

  return (
    <Screen contentStyle={styles.content}>
      <View style={styles.top}>
        <Pressable
          onPress={() => router.back()}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={t('practice.quit')}
          style={({ pressed }) => [
            styles.close,
            { backgroundColor: colors.surfaceAlt, transform: [{ scale: pressed ? 0.94 : 1 }] },
          ]}
        >
          <Icon name="close" size={20} color={colors.text} />
        </Pressable>
        <View
          accessibilityRole="progressbar"
          accessibilityValue={{ min: 0, max: queue.length, now: index + 1 }}
          style={[styles.track, { backgroundColor: colors.surfaceAlt, borderRadius: radius.pill }]}
        >
          <View
            style={[
              styles.fill,
              { width: `${ratio * 100}%`, backgroundColor: colors.accent, borderRadius: radius.pill },
            ]}
          />
        </View>
        <AppText variant="caption" tone="muted">
          {t('practice.progress', { current: index + 1, total: queue.length })}
        </AppText>
      </View>
      <Card key={`${index}-${item.key}`} item={item} onAnswer={answer} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { gap: 24 },
  top: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  close: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  track: { flex: 1, height: 8, overflow: 'hidden' },
  fill: { height: 8 },
  flex: { flex: 1 },
  summary: { alignItems: 'center', justifyContent: 'center', gap: 24 },
  statRow: { flexDirection: 'row', gap: 12, alignSelf: 'stretch' },
  stat: { flex: 1, borderWidth: 1, padding: 16, gap: 2 },
  endLine: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, padding: 16, alignSelf: 'stretch' },
});
