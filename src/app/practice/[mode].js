import * as Haptics from 'expo-haptics';
import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { EmptyState } from '@/components/empty-state';
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
    return (
      <Screen scroll={false}>
        <EmptyState
          icon="done"
          title={t('practice.summaryTitle')}
          body={`${t('practice.summaryBody', { count: stats.done, again: stats.again })}

${pick(
  SESSION_END[stats.again === 0 ? 'perfect' : stats.again / Math.max(1, stats.done) < 0.3 ? 'good' : 'rough'],
  lang,
)}`}
        />
        <View style={{ gap: space.sm }}>
          <Button label={t('practice.again')} onPress={start} />
          <Button label={t('practice.finish')} variant="ghost" onPress={() => router.back()} />
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
        <View style={[styles.track, { backgroundColor: colors.surfaceAlt, borderRadius: radius.pill }]}>
          <View
            style={[
              styles.fill,
              { width: `${ratio * 100}%`, backgroundColor: colors.accent, borderRadius: radius.pill },
            ]}
          />
        </View>
        <AppText variant="small" tone="muted">
          {t('practice.progress', { current: index + 1, total: queue.length })}
        </AppText>
        <Pressable onPress={() => router.back()} hitSlop={10} accessibilityRole="button">
          <AppText variant="small" weight="600" tone="accent">
            {t('practice.quit')}
          </AppText>
        </Pressable>
      </View>
      <Card key={`${index}-${item.key}`} item={item} onAnswer={answer} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { gap: 28 },
  top: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  track: { flex: 1, height: 6, overflow: 'hidden' },
  fill: { height: 6 },
});
