import { router } from 'expo-router';
import { useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Icon } from '@/components/icon';
import { LegendDot, ProgressRing, SegmentBar, WeekBars } from '@/components/progress-charts';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { Surface } from '@/components/surface';
import { getGrammarTopic } from '@/data';
import { useAuth } from '@/features/auth/auth-context';
import { useProgress } from '@/features/progress/progress-context';
import { computeStats } from '@/features/progress/stats';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

function StatTile({ icon, label, value }) {
  const { colors, space } = useTheme();
  return (
    <View style={[styles.tile, { backgroundColor: colors.surfaceAlt, borderRadius: 16, padding: space.md }]}>
      <Icon name={icon} size={20} color={colors.accent} weight="duotone" />
      <AppText variant="title" style={{ marginTop: space.sm }}>
        {value}
      </AppText>
      <AppText variant="caption" tone="muted">
        {label}
      </AppText>
    </View>
  );
}

export default function Progress() {
  const { t } = useI18n();
  const { space } = useTheme();
  const { user } = useAuth();
  const { srs, activity, grammar, grammarUse, reviewedToday } = useProgress();
  const stats = useMemo(
    () => computeStats({ levels: user.profile.levels, srs, activity, grammar }),
    [user.profile.levels, srs, activity, grammar],
  );
  const share = stats.totals.total ? stats.totals.seen / stats.totals.total : 0;
  // Which grammar the learner actually practises: top topics by sentences practised.
  const topUse = useMemo(
    () =>
      Object.entries(grammarUse)
        .map(([id, use]) => ({ topic: getGrammarTopic(id), ...use }))
        .filter((u) => u.topic && u.practised > 0)
        .sort((a, b) => b.practised - a.practised)
        .slice(0, 6),
    [grammarUse],
  );
  const maxUse = topUse[0]?.practised ?? 1;
  const section = (title) => (
    <AppText variant="heading" style={{ marginTop: space.xxl, marginBottom: space.md }}>
      {title}
    </AppText>
  );

  return (
    <Screen>
      <ScreenHeader title={t('progress.title')} />

      <Surface style={styles.hero}>
        <ProgressRing value={share} size={128} stroke={12}>
          <AppText variant="title">{`${Math.round(share * 100)}%`}</AppText>
          <AppText variant="caption" tone="muted">
            {t('progress.active')}
          </AppText>
        </ProgressRing>
        <View style={styles.flex}>
          <AppText weight="700">{t('progress.mastered')}</AppText>
          <AppText variant="display" tone="accent">
            {stats.totals.mastered}
          </AppText>
          <AppText variant="small" tone="muted">
            {t('progress.cardBody', { seen: stats.totals.seen, total: stats.totals.total })}
          </AppText>
        </View>
      </Surface>

      <View style={[styles.tiles, { marginTop: space.md }]}>
        <StatTile icon="done" label={t('progress.reviewedToday')} value={reviewedToday} />
        <StatTile icon="today" label={t('progress.activeDays')} value={`${stats.activeDays}/7`} />
        <StatTile icon="weak" label={t('progress.weakSpots')} value={stats.weak} />
      </View>

      {section(t('progress.week'))}
      <Surface>
        <WeekBars days={stats.week} />
        <AppText variant="small" tone="muted" style={{ marginTop: space.md }}>
          {t('progress.weekTotal', { count: stats.weekTotal })}
        </AppText>
      </Surface>

      {section(t('progress.levels'))}
      <View style={[styles.legend, { marginBottom: space.md }]}>
        <LegendDot tone="strong" label={t('progress.mastered')} />
        <LegendDot tone="soft" label={t('progress.practising')} />
        <LegendDot tone="track" label={t('progress.notStarted')} />
      </View>
      <View style={{ gap: space.lg }}>
        {stats.perLevel.map((l) => (
          <View key={l.level} style={{ gap: space.sm }}>
            <View style={styles.levelHead}>
              <AppText weight="700">{l.level}</AppText>
              <AppText variant="small" tone="muted">
                {t('progress.levelLine', { mastered: l.mastered, practising: l.practising, total: l.total })}
              </AppText>
            </View>
            <SegmentBar total={l.total} strong={l.mastered} soft={l.practising} />
          </View>
        ))}
      </View>
      <AppText variant="small" tone="faint" style={{ marginTop: space.md }}>
        {t('progress.masteredHint')}
      </AppText>

      {section(t('progress.grammar'))}
      <SegmentBar
        total={stats.grammar.total}
        strong={stats.grammar.learned}
        soft={stats.grammar.learning}
        height={12}
      />
      <View style={[styles.legend, { marginTop: space.md }]}>
        <LegendDot tone="strong" label={`${t('progress.learned')} ${stats.grammar.learned}`} />
        <LegendDot tone="soft" label={`${t('progress.learning')} ${stats.grammar.learning}`} />
        <LegendDot tone="track" label={`${t('progress.notYet')} ${stats.grammar.notYet}`} />
      </View>

      {section(t('progress.grammarUse'))}
      {topUse.length ? (
        <View style={{ gap: space.lg }}>
          <View style={styles.legend}>
            <LegendDot tone="strong" label={t('progress.right')} />
            <LegendDot tone="soft" label={t('progress.missed')} />
          </View>
          {topUse.map(({ topic, practised, right }) => (
            <Pressable key={topic.id} onPress={() => router.push(`/grammar/${topic.id}`)} style={{ gap: space.sm }}>
              <View style={styles.levelHead}>
                <AppText weight="700" style={styles.flex}>
                  {topic.title}
                </AppText>
                <AppText variant="small" tone="muted">
                  {t('progress.grammarUseLine', { count: practised, pct: Math.round((right / practised) * 100) })}
                </AppText>
              </View>
              <SegmentBar total={maxUse} strong={right} soft={practised - right} />
            </Pressable>
          ))}
        </View>
      ) : (
        <AppText variant="small" tone="muted">
          {t('progress.grammarUseEmpty')}
        </AppText>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, gap: 2 },
  hero: { flexDirection: 'row', alignItems: 'center', gap: 20 },
  tiles: { flexDirection: 'row', gap: 10 },
  tile: { flex: 1 },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: 14 },
  levelHead: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 },
});
