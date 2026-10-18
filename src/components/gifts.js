import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Icon } from '@/components/icon';
import { SpeakButton } from '@/components/speak-button';
import { journeyGoal } from '@/features/gifts/gift-clock';
import { useNow } from '@/features/gifts/use-daily-gift';
import { pick } from '@/data/motivation';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const pad = (n) => String(n).padStart(2, '0');

// "13:42:07" until the next 08:00 unlock. Ticks every second.
export function Countdown({ to, style, tone = 'muted', variant = 'small' }) {
  const now = useNow(1000);
  const ms = Math.max(0, to.getTime() - now.getTime());
  const h = Math.floor(ms / 3.6e6);
  const m = Math.floor((ms % 3.6e6) / 6e4);
  const s = Math.floor((ms % 6e4) / 1000);
  return (
    <AppText variant={variant} tone={tone} weight="700" style={[{ fontVariant: ['tabular-nums'] }, style]}>
      {`${pad(h)}:${pad(m)}:${pad(s)}`}
    </AppText>
  );
}

// Dots for the current journey goal (14, then 30, 60, 100 days).
export function JourneyPath({ day, light = false }) {
  const { colors } = useTheme();
  const goal = journeyGoal(day);
  const dots = Math.min(goal, 14);
  const filled = Math.round((Math.min(day, goal) / goal) * dots);
  return (
    <View style={styles.path} accessibilityLabel={`${day} / ${goal}`}>
      {Array.from({ length: dots }, (_, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            {
              backgroundColor:
                i < filled
                  ? light
                    ? colors.onAccent
                    : colors.accent
                  : light
                    ? 'rgba(255,255,255,0.28)'
                    : colors.surfaceAlt,
            },
          ]}
        />
      ))}
    </View>
  );
}

// Today's gift on the home screen: the phrase, the note, the journey, and
// the countdown to tomorrow's gift.
export function TodayGiftCard({ gift, nextUnlock }) {
  const { t, lang } = useI18n();
  const { colors, space, radius } = useTheme();
  if (!gift) return null;
  const goal = journeyGoal(gift.journeyDay);

  return (
    <View style={[styles.card, { backgroundColor: colors.accent, borderRadius: radius.lg, padding: space.xl }]}>
      <View style={styles.headRow}>
        <View style={styles.badge}>
          <Icon name="sparkle" size={16} color={colors.onAccent} weight="fill" />
          <AppText variant="caption" tone="onAccent">
            {t('gifts.todayLabel')}
          </AppText>
        </View>
        <AppText variant="caption" tone="onAccent" style={styles.soft}>
          {t('gifts.dayOf', { day: gift.journeyDay, goal })}
        </AppText>
      </View>

      <View style={[styles.phraseRow, { marginTop: space.lg }]}>
        <AppText variant="title" tone="onAccent" style={styles.flex}>
          {gift.de}
        </AppText>
        <SpeakButton text={gift.de} size={38} />
      </View>
      <AppText tone="onAccent" style={[styles.soft, { marginTop: 2 }]}>
        {tr(gift.tr, lang)}
      </AppText>
      <AppText tone="onAccent" style={{ marginTop: space.md }}>
        {pick(gift.note, lang)}
      </AppText>

      <View style={{ marginTop: space.lg }}>
        <JourneyPath day={gift.journeyDay} light />
      </View>

      <View
        style={[styles.footer, { borderTopColor: 'rgba(255,255,255,0.22)', marginTop: space.lg, paddingTop: space.md }]}
      >
        <View style={styles.flex}>
          <AppText variant="caption" tone="onAccent" style={styles.soft}>
            {t('gifts.nextIn')}
          </AppText>
          <Countdown to={nextUnlock} tone="onAccent" variant="heading" />
        </View>
        <Pressable
          onPress={() => router.push('/gifts')}
          accessibilityRole="button"
          hitSlop={10}
          style={[styles.seeAll, { backgroundColor: 'rgba(255,255,255,0.16)', borderRadius: radius.pill }]}
        >
          <AppText variant="small" weight="700" tone="onAccent">
            {t('gifts.seeAll')}
          </AppText>
          <Icon name="forward" size={14} color={colors.onAccent} weight="bold" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { overflow: 'hidden' },
  flex: { flex: 1 },
  soft: { opacity: 0.82 },
  headRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  phraseRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  footer: { flexDirection: 'row', alignItems: 'center', gap: 12, borderTopWidth: StyleSheet.hairlineWidth },
  seeAll: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 14, paddingVertical: 8 },
  path: { flexDirection: 'row', gap: 5 },
  dot: { flex: 1, height: 6, borderRadius: 3 },
});
