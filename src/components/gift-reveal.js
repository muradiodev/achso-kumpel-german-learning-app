import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, useReducedMotion } from 'react-native-reanimated';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { JourneyPath } from '@/components/gifts';
import { SpeakButton } from '@/components/speak-button';
import { pick } from '@/data/motivation';
import { journeyGoal } from '@/features/gifts/gift-clock';
import { speakGerman } from '@/features/speech/tts';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

// Once a day, the first time the learner opens the app after 08:00: a closed
// gift, then the phrase. Rare moment, so it gets a little ceremony.
export function GiftReveal({ gift, onDone }) {
  const { t, lang } = useI18n();
  const { colors, space, radius } = useTheme();
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);

  function reveal() {
    setOpen(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    speakGerman(gift.de, { rate: 0.9 });
  }

  return (
    <View style={[StyleSheet.absoluteFill, styles.scrim]}>
      <Animated.View
        entering={reduced ? undefined : FadeIn.duration(200)}
        style={[styles.sheet, { backgroundColor: colors.surface, borderRadius: radius.lg + 8, padding: space.xl }]}
      >
        {!open ? (
          <View style={styles.center}>
            <View style={[styles.giftIcon, { backgroundColor: colors.accentSoft }]}>
              <Icon name="gift" size={44} color={colors.accent} weight="duotone" />
            </View>
            <AppText variant="title" align="center">
              {t('gifts.newTitle')}
            </AppText>
            <AppText tone="muted" align="center">
              {t('gifts.newBody', { day: gift.journeyDay })}
            </AppText>
            <Button label={t('gifts.open')} icon="sparkle" onPress={reveal} style={styles.stretch} />
          </View>
        ) : (
          <Animated.View entering={reduced ? FadeIn.duration(150) : FadeInDown.duration(320)} style={{ gap: space.md }}>
            <AppText variant="caption" tone="accent">
              {t('gifts.dayOf', { day: gift.journeyDay, goal: journeyGoal(gift.journeyDay) })}
            </AppText>
            <View style={styles.row}>
              <AppText variant="display" style={styles.flex}>
                {gift.de}
              </AppText>
              <SpeakButton text={gift.de} size={44} />
            </View>
            <AppText variant="heading" tone="accent">
              {tr(gift.tr, lang)}
            </AppText>
            <AppText>{pick(gift.note, lang)}</AppText>
            <JourneyPath day={gift.journeyDay} />
            <AppText variant="small" tone="muted">
              {t('gifts.earned')}
            </AppText>
            <Button label={t('gifts.keep')} onPress={onDone} style={{ marginTop: space.sm }} />
          </Animated.View>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrim: { backgroundColor: 'rgba(9, 7, 16, 0.6)', justifyContent: 'center', padding: 20 },
  sheet: { maxWidth: 520, width: '100%', alignSelf: 'center' },
  center: { alignItems: 'center', gap: 14 },
  giftIcon: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  stretch: { alignSelf: 'stretch', marginTop: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  flex: { flex: 1 },
});
