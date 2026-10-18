import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Avatar } from '@/components/avatar';
import { Button } from '@/components/button';
import { Screen } from '@/components/screen';
import { AVATARS } from '@/constants/avatars';
import { useAuth } from '@/features/auth/auth-context';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

// Used during registration (step 2) and from the profile tab.
export function AvatarPicker({ header, onDone }) {
  const { t } = useI18n();
  const { colors, space } = useTheme();
  const { user, updateProfile } = useAuth();
  const [selected, setSelected] = useState(user.profile?.avatarId ?? AVATARS[0].id);
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    await updateProfile({ avatarId: selected });
    setSaving(false);
    onDone?.();
  }

  return (
    <Screen footer={<Button label={t('setup.avatarCta')} onPress={save} loading={saving} />}>
      {header}
      <AppText variant="title">{t('setup.avatarTitle')}</AppText>
      <AppText tone="muted" style={{ marginTop: space.sm }}>
        {t('setup.avatarSub')}
      </AppText>

      <View style={[styles.preview, { marginVertical: space.xl }]}>
        <Avatar id={selected} size={112} />
      </View>

      <View style={styles.grid}>
        {AVATARS.map((avatar) => {
          const active = avatar.id === selected;
          return (
            <Pressable
              key={avatar.id}
              onPress={() => setSelected(avatar.id)}
              accessibilityRole="radio"
              accessibilityState={{ checked: active }}
              accessibilityLabel={avatar.id}
              style={[styles.cell, { borderColor: active ? colors.accent : 'transparent' }]}
            >
              <Avatar id={avatar.id} size={56} />
            </Pressable>
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  preview: { alignItems: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 14 },
  cell: { width: 68, height: 68, borderWidth: 2, borderRadius: 34, alignItems: 'center', justifyContent: 'center' },
});
