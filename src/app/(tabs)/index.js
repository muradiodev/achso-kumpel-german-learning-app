import { router } from 'expo-router';
import { useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Avatar } from '@/components/avatar';
import { Button } from '@/components/button';
import { Chip } from '@/components/chip';
import { GiftReveal } from '@/components/gift-reveal';
import { TodayGiftCard } from '@/components/gifts';
import { Icon } from '@/components/icon';
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
];

export default function Today() {
  const { t } = useI18n();
  const { colors, space, radius } = useTheme();
  const { user } = useAuth();
  const { srs, grammar, activity, reviewedToday } = useProgress();
  const { firstName, avatarId, levels } = user.profile;

  const { due, fresh } = useMemo(() => countDue({ levels, srs }), [levels, srs]);
  const weak = useMemo(() => countWeak(srs), [srs]);
  const stats = useMemo(() => computeStats({ levels, srs, activity, grammar }), [levels, srs, activity, grammar]);
  const share = stats.totals.total ? stats.totals.seen / stats.totals.total : 0;
  const { today: gift, nextUnlock, markSeen } = useDailyGift();

  return (
    <Screen overlay={gift && !gift.seen ? <GiftReveal gift={gift} onDone={markSeen} /> : null}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <AppText variant="title">{t('home.greeting', { name: firstName })}</AppText>
          <AppText variant="small" tone="muted">
            {t('home.reviewedToday', { count: reviewedToday })}
          </AppText>
        </View>
        <Pressable
          onPress={() => router.push('/profile')}
          accessibilityRole="button"
          accessibilityLabel={t('tabs.profile')}
        >
          <Avatar id={avatarId} size={48} />
        </Pressable>
      </View>

      <View style={{ marginTop: space.xl }}>
        <TodayGiftCard gift={gift} nextUnlock={nextUnlock} />
      </View>

      <Surface tone="accent" style={{ marginTop: space.lg, padding: space.xl }}>
        <AppText variant="heading">{t('home.todayTitle')}</AppText>
        <AppText tone="muted" style={{ marginTop: space.xs }}>
          {due > 0
            ? `${t('home.dueCount', { count: due })}, ${t('home.newCount', { count: Math.min(fresh, 8) })}`
            : fresh > 0
              ? t('home.newCount', { count: Math.min(fresh, 8) })
              : t('home.allClear')}
        </AppText>
        <Button
          label={t('home.start')}
          icon="play"
          onPress={() => router.push('/practice/mixed')}
          style={{ marginTop: space.lg }}
        />
        <AppText variant="small" tone="muted" align="center" style={{ marginTop: space.sm }}>
          {t('home.duration')}
        </AppText>
      </Surface>

      <Surface style={{ marginTop: space.lg }} onPress={() => router.push('/progress')}>
        <View style={styles.weakRow}>
          <ProgressRing value={share} size={56} stroke={7}>
            <AppText variant="caption" weight="700">{`${Math.round(share * 100)}%`}</AppText>
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
        <Surface style={{ marginTop: space.lg }} onPress={() => router.push('/practice/weak')}>
          <View style={styles.weakRow}>
            <Icon name="weak" size={22} color={colors.danger} />
            <View style={styles.flex}>
              <AppText weight="600">{t('home.weakTitle')}</AppText>
              <AppText variant="small" tone="muted">
                {t('home.weakBody', { count: weak })}
              </AppText>
            </View>
            <Icon name="forward" size={18} color={colors.textFaint} />
          </View>
        </Surface>
      ) : null}

      <AppText variant="heading" style={{ marginTop: space.xxl }}>
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
            <Icon name={item.icon} size={26} color={colors.accent} weight="duotone" />
            <AppText weight="600" numberOfLines={1}>
              {item.key === 'verbs' ? t('practice.verbsTitle') : t(`practice.modes.${item.key}.title`)}
            </AppText>
          </Pressable>
        ))}
      </View>

      <View style={[styles.mixHeader, { marginTop: space.xxl }]}>
        <AppText variant="heading">{t('home.yourMix')}</AppText>
        <Button label={t('home.change')} variant="ghost" size="md" onPress={() => router.push('/settings/levels')} />
      </View>
      <View style={styles.chips}>
        {levels.map((level) => (
          <Chip key={level} label={level} selected />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  headerText: { flex: 1, gap: 2 },
  weakRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  flex: { flex: 1 },
  quick: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  quickItem: { flexBasis: '45%', flexGrow: 1, borderWidth: 1, padding: 16, gap: 10, minHeight: 92 },
  mixHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
