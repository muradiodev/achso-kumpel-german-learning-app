import { router } from 'expo-router';
import { Linking, Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Avatar } from '@/components/avatar';
import { Button } from '@/components/button';
import { Chip } from '@/components/chip';
import { ListRow } from '@/components/list-row';
import { Screen } from '@/components/screen';
import { Surface } from '@/components/surface';
import { useAuth } from '@/features/auth/auth-context';
import { APP_VERSION } from '@/features/updates/version';
import { CONTENT_LANGUAGES } from '@/i18n/content';
import { UI_LANGUAGES, useI18n } from '@/i18n';
import { useTheme } from '@/theme';

// Replace with the public repository URL once it exists.
const REPO_URL = 'https://github.com/';

function LanguageRow({ label, languages, current }) {
  const { t } = useI18n();
  const { space } = useTheme();
  return (
    <View style={{ gap: space.sm, paddingVertical: space.md }}>
      <AppText weight="600">{label}</AppText>
      <View style={styles.chips}>
        {languages.map((l) => (
          <Chip
            key={l.code}
            label={l.ready ? t(`languages.${l.code}`) : `${t(`languages.${l.code}`)} · ${t('common.comingSoon')}`}
            selected={l.code === current}
          />
        ))}
      </View>
    </View>
  );
}

export default function Profile() {
  const { t, lang } = useI18n();
  const { space } = useTheme();
  const { user, logout } = useAuth();
  const p = user.profile;

  return (
    <Screen>
      <AppText variant="title">{t('profile.title')}</AppText>

      <View style={[styles.identity, { marginTop: space.xl }]}>
        <Pressable onPress={() => router.push('/settings/avatar')} accessibilityRole="button" accessibilityLabel={t('profile.editAvatar')}>
          <Avatar id={p.avatarId} size={72} />
        </Pressable>
        <View style={styles.flex}>
          <AppText variant="heading">{`${p.firstName} ${p.lastName}`}</AppText>
          <AppText variant="small" tone="muted">
            {user.email}
          </AppText>
          <AppText variant="small" tone="muted">
            {p.profession || t('profile.noProfession')}
          </AppText>
        </View>
      </View>

      <View style={{ marginTop: space.xl }}>
        <ListRow title={t('profile.levels')} subtitle={p.levels.join(', ')} onPress={() => router.push('/settings/levels')} />
        <ListRow title={t('profile.editAvatar')} onPress={() => router.push('/settings/avatar')} />
        <LanguageRow label={t('profile.appLanguage')} languages={UI_LANGUAGES} current={lang} />
        <LanguageRow label={t('profile.translationLanguage')} languages={CONTENT_LANGUAGES} current="en" />
      </View>

      <Surface tone="muted" style={{ marginTop: space.xl }}>
        <AppText weight="600">{t('profile.about')}</AppText>
        <AppText variant="small" tone="muted" style={{ marginTop: space.sm }}>
          {t('profile.aboutBody')}
        </AppText>
        <Button
          label={t('profile.sourceCode')}
          variant="ghost"
          size="md"
          onPress={() => Linking.openURL(REPO_URL)}
          style={{ marginTop: space.sm, alignSelf: 'flex-start', paddingHorizontal: 0 }}
        />
      </Surface>

      <Button label={t('profile.logout')} variant="danger" onPress={logout} style={{ marginTop: space.xl }} />
      <AppText variant="small" tone="faint" align="center" style={{ marginTop: space.lg }}>
        {t('updates.version', { version: APP_VERSION })}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  identity: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  flex: { flex: 1, gap: 2 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
