import { router } from 'expo-router';
import { useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Avatar } from '@/components/avatar';
import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import { Chip } from '@/components/chip';
import { GiftReveal } from '@/components/gift-reveal';
import { TodayGiftCard } from '@/components/gifts';
import { Icon } from '@/components/icon';
import { IconChip } from '@/components/icon-chip';
import { ProgressRing } from '@/components/progress-charts';
import { Screen } from '@/components/screen';
import { Surface } from '@/components/surface';
import { useAuth } from '@/features/auth/auth-context';
import { useDailyGift } from '@/features/gifts/use-daily-gift';
import { countDue, countWeak } from '@/features/practice/session-builder';
import { useProgress } from '@/features/progress/progress-context';
import { computeStats } from '@/features/progress/stats';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const QUICK = [
  { key: 'words', icon: 'words', href: '/practice/words' },
  { key: 'sentences', icon: 'sentences', href: '/practice/sentences' },
  { key: 'work', icon: 'work', href: '/practice/work' },
  { key: 'verbs', icon: 'verbs', href: '/verbs' },
  { key: 'reading', icon: 'book', href: '/reading' },
  { key: 'mine', icon: 'words', href: '/my-words' },
];

const QUICK_TITLE = { verbs: 'practice.verbsTitle', reading: 'reading.title', mine: 'myWords.title' };

export default function Today() {
  const { t, lang } = useI18n();
  const { colors, space, radius } = useTheme();
  const { user } = useAuth();
  const { srs, grammar, activity, reviewedToday } = useProgress();
  const { firstName, avatarId, levels } = user.profile;

  const { due, fresh } = useMemo(() => countDue({ levels, srs }), [levels, srs]);
  const weak = useMemo(() => countWeak(srs), [srs]);
  const stats = useMemo(() => computeStats({ levels, srs, activity, grammar }), [levels, srs, activity, grammar]);
  const share = stats.totals.total ? stats.totals.seen / stats.totals.total : 0;
  const { today: gift, nextUnlock, markSeen } = useDailyGift();

  const dateLine = useMemo(() => {
    try {
      return new Intl.DateTimeFormat(lang, { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());
    } catch {
      return null;
    }
  }, [lang]);
  const newCount = Math.min(fresh, 8);

  return (
    <Screen overlay={gift && !gift.seen ? <GiftReveal gift={gift} onDone={markSeen} /> : null}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <AppText variant="caption" tone="faint">
            {[dateLine, t('home.reviewedToday', { count: reviewedToday })].filter(Boolean).join(' · ')}
          </AppText>
          <AppText variant="display">{t('home.greeting', { name: firstName })}</AppText>
        </View>
        <Pressable
          onPress={() => router.push('/profile')}
          accessibilityRole="button"
          accessibilityLabel={t('tabs.profile')}
        >
          <Avatar id={avatarId} size={48} />
        </Pressable>
      </View>

      <View style={{ marginTop: space.lg }}>
        <TodayGiftCard gift={gift} nextUnlock={nextUnlock} />
      </View>

      <Surface style={{ marginTop: space.lg, padding: space.xl, gap: space.lg }}>
        <View style={styles.titleRow}>
          <AppText variant="heading" style={styles.flex}>
            {t('home.todayTitle')}
          </AppText>
          <Badge label={t('home.duration')} tone="neutral" />
        </View>
        {due > 0 || newCount > 0 ? (
          <View style={styles.counts}>
            {due > 0 ? (
              <View style={styles.flex}>
                <AppText variant="title">{String(due)}</AppText>
                <AppText variant="small" tone="muted">
                  {t('home.dueLabel')}
                </AppText>
              </View>
            ) : null}
            {newCount > 0 ? (
              <View style={styles.flex}>
                <AppText variant="title">{String(newCount)}</AppText>
                <AppText variant="small" tone="muted">
                  {t('home.newLabel')}
                </AppText>
              </View>
            ) : null}
          </View>
        ) : (
          <AppText tone="muted">{t('home.allClear')}</AppText>
        )}
        <Button label={t('home.start')} icon="play" onPress={() => router.push('/practice/mixed')} />
      </Surface>

      <Surface style={{ marginTop: space.lg }} onPress={() => router.push('/progress')}>
        <View style={styles.row}>
          <ProgressRing value={share} size={56} stroke={7}>
            <AppText variant="caption" weight="800">{`${Math.round(share * 100)}%`}</AppText>
          </ProgressRing>
          <View style={styles.flex}>
            <AppText weight="600">{t('progress.cardTitle')}</AppText>
            <AppText variant="small" tone="muted">
              {t('progress.cardBody', { seen: stats.totals.seen, total: stats.totals.total })}
            </AppText>
          </View>
          <Icon name="forward" size={18} color={colors.textFaint} />
        </View>
      </Surface>

      {weak > 0 ? (
        <Surface style={{ marginTop: space.lg, gap: space.md }}>
          <View style={styles.row}>
            <IconChip name="weak" />
            <View style={styles.flex}>
              <AppText variant="heading">{t('home.weakTitle')}</AppText>
              <AppText variant="small" tone="muted">
                {t('home.weakBody', { count: weak })}
              </AppText>
            </View>
          </View>
          <Button
            label={t('home.weakCta')}
            variant="secondary"
            size="md"
            onPress={() => router.push('/practice/weak')}
          />
        </Surface>
      ) : null}

      <AppText variant="heading" style={{ marginTop: space.xl }}>
        {t('home.quickTitle')}
      </AppText>
      <View style={[styles.quick, { marginTop: space.md }]}>
        {QUICK.map((item) => (
          <Pressable
            key={item.key}
            onPress={() => router.push(item.href)}
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.quickItem,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                borderRadius: radius.lg,
                transform: [{ scale: pressed ? 0.98 : 1 }],
              },
            ]}
          >
            <IconChip name={item.icon} size={36} />
            <AppText weight="600" numberOfLines={2}>
              {t(QUICK_TITLE[item.key] ?? `practice.modes.${item.key}.title`)}
            </AppText>
          </Pressable>
        ))}
      </View>

      <View style={[styles.mixHeader, { marginTop: space.xl }]}>
        <AppText variant="heading">{t('home.yourMix')}</AppText>
        <Button label={t('home.change')} variant="ghost" size="md" onPress={() => router.push('/settings/levels')} />
      </View>
      <View style={styles.chips}>
        {levels.map((level) => (
          <Chip key={level} label={level} tone="soft" />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  headerText: { flex: 1, gap: 4 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  titleRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 8 },
  counts: { flexDirection: 'row', gap: 8 },
  flex: { flex: 1 },
  quick: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  quickItem: { flexBasis: '45%', flexGrow: 1, borderWidth: 1, padding: 16, gap: 12, minHeight: 104 },
  mixHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
