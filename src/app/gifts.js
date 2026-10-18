import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Countdown, JourneyPath } from '@/components/gifts';
import { Icon } from '@/components/icon';
import { Screen } from '@/components/screen';
import { ScreenHeader } from '@/components/screen-header';
import { SpeakButton } from '@/components/speak-button';
import { pick } from '@/data/motivation';
import { journeyGoal, UNLOCK_HOUR } from '@/features/gifts/gift-clock';
import { useDailyGift } from '@/features/gifts/use-daily-gift';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

export default function Gifts() {
  const { t, lang } = useI18n();
  const { colors, space, radius } = useTheme();
  const { today, history, nextUnlock } = useDailyGift();
  const day = today?.journeyDay ?? history.length;
  const dateFormat = useMemo(
    () => new Intl.DateTimeFormat(lang, { weekday: 'long', day: 'numeric', month: 'long' }),
    [lang],
  );

  return (
    <Screen>
      <ScreenHeader title={t('gifts.title')} />
      <AppText tone="muted">{t('gifts.sub')}</AppText>

      <View style={{ marginTop: space.xl, gap: space.sm }}>
        <View style={styles.dayRow}>
          <AppText variant="display" tone="accent">
            {day}
          </AppText>
          <AppText variant="heading" style={{ marginBottom: 4 }}>
            {t('gifts.daysOf', { goal: journeyGoal(day) })}
          </AppText>
        </View>
        <JourneyPath day={day} />
      </View>

      <View
        style={[
          styles.locked,
          { borderColor: colors.accent, borderRadius: radius.lg, padding: space.lg, marginTop: space.xl },
        ]}
      >
        <View style={[styles.lockIcon, { backgroundColor: colors.accentSoft }]}>
          <Icon name="lock" size={22} color={colors.accent} weight="duotone" />
        </View>
        <View style={styles.flex}>
          <AppText weight="700">
            {t('gifts.tomorrowTitle', { hour: `${String(UNLOCK_HOUR).padStart(2, '0')}:00` })}
          </AppText>
          <AppText variant="small" tone="muted">
            {t('gifts.tomorrowBody')}
          </AppText>
        </View>
        <Countdown to={nextUnlock} tone="accent" variant="heading" />
      </View>

      <View style={{ marginTop: space.xl, gap: space.md }}>
        {history.map((gift) => (
          <View
            key={gift.dayKey}
            style={[
              styles.item,
              {
                backgroundColor: gift.dayKey === today?.dayKey ? colors.accentSoft : colors.surface,
                borderColor: gift.dayKey === today?.dayKey ? colors.accentSoft : colors.border,
                borderRadius: radius.lg,
                padding: space.lg,
              },
            ]}
          >
            <View style={styles.itemHead}>
              <AppText variant="caption" tone="accent">
                {gift.dayKey === today?.dayKey
                  ? t('gifts.unlockedToday')
                  : dateFormat.format(new Date(`${gift.dayKey}T12:00:00`))}
              </AppText>
              <AppText variant="caption" tone="faint">
                {t('gifts.day', { day: gift.journeyDay })}
              </AppText>
            </View>
            <View style={styles.row}>
              <AppText variant="heading" style={styles.flex}>
                {gift.de}
              </AppText>
              <SpeakButton text={gift.de} />
            </View>
            <AppText variant="small" tone="accent" weight="600">
              {tr(gift.tr, lang)}
            </AppText>
            <AppText variant="small" tone="muted">
              {pick(gift.note, lang)}
            </AppText>
          </View>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  dayRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 8 },
  locked: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1.5, borderStyle: 'dashed' },
  lockIcon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  item: { borderWidth: 1, gap: 6 },
  itemHead: { flexDirection: 'row', justifyContent: 'space-between' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
});
