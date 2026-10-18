import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { Chip } from '@/components/chip';
import { Icon } from '@/components/icon';
import { Screen } from '@/components/screen';
import { LEVELS } from '@/data';
import { useAuth } from '@/features/auth/auth-context';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

const FOCUS = ['everyday', 'work', 'writing'];

// Level mix + focus areas. Used at the end of registration and in settings.
export function LevelsForm({ header, ctaLabel, onDone }) {
  const { t } = useI18n();
  const { colors, space, radius } = useTheme();
  const { user, updateProfile } = useAuth();
  const [levels, setLevels] = useState(user.profile?.levels ?? ['B1']);
  const [focus, setFocus] = useState(user.profile?.focus ?? ['everyday', 'work']);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const toggle = (list, setList, value) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  async function save() {
    if (!levels.length) {
      setError(t('setup.errors.levels'));
      return;
    }
    setSaving(true);
    const ordered = LEVELS.filter((l) => levels.includes(l));
    await updateProfile({ levels: ordered, focus });
    setSaving(false);
    onDone?.();
  }

  return (
    <Screen footer={<Button label={ctaLabel} onPress={save} loading={saving} />}>
      {header}
      <AppText variant="title">{t('setup.levelsTitle')}</AppText>
      <AppText tone="muted" style={{ marginTop: space.sm }}>
        {t('setup.levelsSub')}
      </AppText>

      <View style={{ gap: space.sm, marginTop: space.xl }}>
        {LEVELS.map((level) => {
          const active = levels.includes(level);
          return (
            <Pressable
              key={level}
              onPress={() => {
                setError(null);
                toggle(levels, setLevels, level);
              }}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: active }}
              style={({ pressed }) => [
                styles.level,
                {
                  borderRadius: radius.md,
                  borderColor: active ? colors.accent : colors.border,
                  backgroundColor: active ? colors.accentSoft : colors.surface,
                  transform: [{ scale: pressed ? 0.99 : 1 }],
                },
              ]}
            >
              <AppText variant="heading" style={styles.levelCode}>
                {level}
              </AppText>
              <AppText variant="small" tone="muted" style={styles.levelText}>
                {t(`levels.${level}`)}
              </AppText>
              <Icon
                name={active ? 'checkCircle' : 'circle'}
                size={22}
                color={active ? colors.accent : colors.textFaint}
              />
            </Pressable>
          );
        })}
      </View>
      {error ? (
        <AppText variant="small" tone="danger" style={{ marginTop: space.sm }}>
          {error}
        </AppText>
      ) : null}

      <AppText variant="heading" style={{ marginTop: space.xxl }}>
        {t('setup.focusTitle')}
      </AppText>
      <View style={[styles.chips, { marginTop: space.md }]}>
        {FOCUS.map((f) => (
          <Chip
            key={f}
            label={t(`focus.${f}`)}
            selected={focus.includes(f)}
            onPress={() => toggle(focus, setFocus, f)}
          />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  level: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  levelCode: { width: 32 },
  levelText: { flex: 1 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
