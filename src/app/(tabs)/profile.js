import { router } from 'expo-router';
import { Linking, Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Avatar } from '@/components/avatar';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { ListRow } from '@/components/list-row';
import { Screen } from '@/components/screen';
import { Segmented } from '@/components/segmented';
import { Surface } from '@/components/surface';
import { useAuth } from '@/features/auth/auth-context';
import { useProgress } from '@/features/progress/progress-context';
import { APP_VERSION } from '@/features/updates/version';
import { useI18n } from '@/i18n';
import { useTheme, useThemeMode } from '@/theme';

const REPO_URL = 'https://github.com/muradiodev/achso-kumpel-german-learning-app';

export default function Profile() {
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();
  const { mode, setMode } = useThemeMode();
  const { user, logout } = useAuth();
  const { myWords } = useProgress();
  const p = user.profile;
  const icon = (name) => <Icon name={name} size={22} color={colors.accent} weight="duotone" />;
  const heading = (title) => (
    <AppText variant="caption" tone="faint" style={{ marginTop: space.xxl, marginBottom: space.xs }}>
      {title}
    </AppText>
  );

  return (
    <Screen>
      <AppText variant="title">{t('profile.title')}</AppText>

      <View style={[styles.identity, { marginTop: space.xl }]}>
        <Pressable
          onPress={() => router.push('/settings/avatar')}
          accessibilityRole="button"
          accessibilityLabel={t('profile.editAvatar')}
        >
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

      {heading(t('settings.sectionLearning'))}
      <ListRow left={icon('progress')} title={t('progress.title')} onPress={() => router.push('/progress')} />
      <ListRow
        left={icon('words')}
        title={t('myWords.title')}
        subtitle={t('myWords.count', { count: Object.keys(myWords).length })}
        onPress={() => router.push('/my-words')}
      />
      <ListRow
        left={icon('level')}
        title={t('profile.levels')}
        subtitle={p.levels.join(', ')}
        onPress={() => router.push('/settings/levels')}
      />

      {heading(t('settings.appearance'))}
      <Segmented
        value={mode}
        onChange={setMode}
        options={['auto', 'light', 'dark'].map((value) => ({ value, label: t(`settings.theme.${value}`) }))}
      />
      <AppText variant="small" tone="faint" style={{ marginTop: space.sm }}>
        {t('settings.themeHint')}
      </AppText>

      {heading(t('settings.sectionAccount'))}
      <ListRow
        left={icon('profile')}
        title={t('settings.account')}
        subtitle={t('settings.accountSub')}
        onPress={() => router.push('/settings/account')}
      />
      <ListRow left={icon('sparkle')} title={t('profile.editAvatar')} onPress={() => router.push('/settings/avatar')} />
      <ListRow
        left={icon('translate')}
        title={t('settings.language')}
        subtitle={t(`languages.${lang}`)}
        onPress={() => router.push('/settings/language')}
      />

      <Surface tone="muted" style={{ marginTop: space.xxl }}>
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

      <Button
        label={t('profile.logout')}
        icon="signOut"
        variant="danger"
        onPress={logout}
        style={{ marginTop: space.xl }}
      />
      <AppText variant="small" tone="faint" align="center" style={{ marginTop: space.lg }}>
        {t('updates.version', { version: APP_VERSION })}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  identity: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  flex: { flex: 1, gap: 2 },
});
