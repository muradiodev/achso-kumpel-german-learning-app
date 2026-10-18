import { useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Avatar } from '@/components/avatar';
import { EmptyState } from '@/components/empty-state';
import { Icon } from '@/components/icon';
import { LevelTag } from '@/components/level-tag';
import { LegendDot, SegmentBar, WeekBars } from '@/components/progress-charts';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { Surface } from '@/components/surface';
import { GRAMMAR_TOPICS } from '@/data';
import { fullName, useMember } from '@/features/community/use-community';
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

export default function Member() {
  const { id } = useLocalSearchParams();
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();
  const { data, error, loading, reload } = useMember(id);
  const m = data?.member;

  const dates = useMemo(() => {
    const long = new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'long', year: 'numeric' });
    return { long: (ms) => long.format(new Date(ms)) };
  }, [lang]);
  const week = useMemo(() => (m?.week ?? []).map((d) => ({ ...d, date: new Date(`${d.key}T12:00:00Z`) })), [m?.week]);

  if (!m) {
    return (
      <Screen>
        <ScreenHeader title={t('community.title')} />
        {loading ? (
          <ActivityIndicator color={colors.accent} style={{ marginTop: space.xxxl }} />
        ) : (
          <EmptyState
            icon="warning"
            title={t(error?.status === 404 ? 'community.notFound' : 'community.errorTitle')}
            actionLabel={error?.status === 404 ? undefined : t('community.retry')}
            onAction={reload}
          />
        )}
      </Screen>
    );
  }

  const s = m.stats;
  const section = (title) => (
    <AppText variant="heading" style={{ marginTop: space.xxl, marginBottom: space.md }}>
      {title}
    </AppText>
  );

  return (
    <Screen>
      <ScreenHeader title={m.firstName} />

      <View style={styles.identity}>
        <Avatar id={m.avatarId} size={96} />
        <AppText variant="title" align="center" style={{ marginTop: space.md }}>
          {fullName(m)}
        </AppText>
        {m.profession ? (
          <AppText tone="muted" align="center">
            {m.profession}
          </AppText>
        ) : null}
        <View style={[styles.levels, { marginTop: space.md }]}>
          {m.levels.map((level) => (
            <LevelTag key={level} level={level} />
          ))}
        </View>
        <AppText variant="small" tone="faint" align="center" style={{ marginTop: space.md }}>
          {[
            t('community.joined', { date: dates.long(m.joinedAt) }),
            s.lastActiveDay ? t('community.lastActive', { date: dates.long(`${s.lastActiveDay}T12:00:00Z`) }) : null,
          ]
            .filter(Boolean)
            .join(' · ')}
        </AppText>
      </View>

      <View style={[styles.tiles, { marginTop: space.xl }]}>
        <StatTile icon="streak" label={t('community.boards.streak')} value={s.streak} />
        <StatTile icon="trophy" label={t('progress.mastered')} value={s.mastered} />
        <StatTile icon="done" label={t('community.totalReviews')} value={s.reviews} />
      </View>
      <View style={[styles.tiles, { marginTop: space.sm }]}>
        <StatTile icon="sentences" label={t('community.started')} value={s.seen} />
        <StatTile icon="words" label={t('myWords.title')} value={s.wordsSaved} />
        <StatTile icon="today" label={t('progress.activeDays')} value={`${s.activeDays}/7`} />
      </View>

      {section(t('progress.week'))}
      <Surface>
        <WeekBars days={week} />
        <AppText variant="small" tone="muted" style={{ marginTop: space.md }}>
          {t('progress.weekTotal', { count: s.weekReviews })}
        </AppText>
      </Surface>

      {section(t('progress.grammar'))}
      <SegmentBar total={GRAMMAR_TOPICS.length} strong={s.grammarLearned} soft={s.grammarLearning} height={12} />
      <View style={[styles.legend, { marginTop: space.md }]}>
        <LegendDot tone="strong" label={`${t('progress.learned')} ${s.grammarLearned}`} />
        <LegendDot tone="soft" label={`${t('progress.learning')} ${s.grammarLearning}`} />
        <LegendDot
          tone="track"
          label={`${t('progress.notYet')} ${Math.max(0, GRAMMAR_TOPICS.length - s.grammarLearned - s.grammarLearning)}`}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  identity: { alignItems: 'center' },
  levels: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8 },
  tiles: { flexDirection: 'row', gap: 10 },
  tile: { flex: 1 },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: 14 },
});
