import { useState } from 'react';
import { Linking, Platform, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

import { useUpdateCheck } from './use-update-check';
import { APP_VERSION } from './version';

function applyUpdate(remote) {
  if (Platform.OS === 'web') {
    window.location.reload();
    return;
  }
  if (remote?.android?.apkUrl) Linking.openURL(remote.android.apkUrl);
}

// 'available' → dismissible banner at the top.
// 'required'  → blocking card: this version may break saved progress.
export function UpdateNotice() {
  const { t } = useI18n();
  const { colors, space, radius } = useTheme();
  const insets = useSafeAreaInsets();
  const { status, remote } = useUpdateCheck();
  const [dismissed, setDismissed] = useState(null);
  const canApply = Platform.OS === 'web' || Boolean(remote?.android?.apkUrl);
  const actionLabel = Platform.OS === 'web' ? t('updates.reload') : t('updates.download');

  if (status === 'required') {
    return (
      <View style={[StyleSheet.absoluteFill, styles.blocker, { backgroundColor: colors.bg, padding: space.xl }]}>
        <View style={[styles.icon, { backgroundColor: colors.warningSoft }]}>
          <Icon name="warning" size={30} color={colors.warning} />
        </View>
        <AppText variant="title" align="center">
          {t('updates.requiredTitle')}
        </AppText>
        <AppText tone="muted" align="center">
          {t('updates.requiredBody', { current: APP_VERSION, latest: remote.version })}
        </AppText>
        {canApply ? (
          <Button label={actionLabel} onPress={() => applyUpdate(remote)} style={styles.stretch} />
        ) : (
          <AppText variant="small" tone="faint" align="center">
            {t('updates.requiredManual')}
          </AppText>
        )}
      </View>
    );
  }

  if (status !== 'available' || dismissed === remote.version) return null;

  return (
    <View
      pointerEvents="box-none"
      style={[styles.bannerWrap, { paddingTop: insets.top + space.sm, paddingHorizontal: space.lg }]}
    >
      <View
        accessibilityRole="alert"
        style={[styles.banner, { backgroundColor: colors.text, borderRadius: radius.lg, padding: space.md }]}
      >
        <Icon name="sparkle" size={20} color={colors.bg} />
        <AppText variant="small" weight="600" style={[styles.flex, { color: colors.bg }]}>
          {t('updates.available', { version: remote.version })}
        </AppText>
        {canApply ? (
          <Pressable onPress={() => applyUpdate(remote)} accessibilityRole="button" hitSlop={8}>
            <AppText variant="small" weight="700" style={{ color: colors.accent }}>
              {actionLabel}
            </AppText>
          </Pressable>
        ) : null}
        <Pressable
          onPress={() => setDismissed(remote.version)}
          accessibilityRole="button"
          accessibilityLabel={t('updates.later')}
          hitSlop={8}
        >
          <Icon name="close" size={18} color={colors.bg} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  bannerWrap: { position: 'absolute', top: 0, left: 0, right: 0 },
  banner: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  blocker: { alignItems: 'center', justifyContent: 'center', gap: 14 },
  icon: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center' },
  stretch: { alignSelf: 'stretch', marginTop: 8 },
});
