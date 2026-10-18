import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { CHANGELOG } from '@/data';
import { useProgress } from '@/features/progress/progress-context';
import { tr } from '@/i18n/content';
import { useI18n } from '@/i18n';
import { getJSON, setJSON } from '@/lib/storage';
import { useTheme } from '@/theme';

import { APP_VERSION, compareVersions } from './version';

const SEEN_KEY = 'app:lastSeenVersion';

// After an update, shows the release notes between the last version this
// device saw and the current one, plus any notes from progress migration.
// A fresh install records the version silently: onboarding explains the app.
export function WhatsNew() {
  const { t, lang } = useI18n();
  const { colors, space, radius } = useTheme();
  const { migrationNotes = [] } = useProgress();
  const [releases, setReleases] = useState(null);

  useEffect(() => {
    let alive = true;
    getJSON(SEEN_KEY).then((seen) => {
      if (!alive) return;
      if (!seen) {
        setJSON(SEEN_KEY, APP_VERSION);
        setReleases([]);
        return;
      }
      setReleases(
        CHANGELOG.filter((r) => compareVersions(r.version, seen) > 0 && compareVersions(r.version, APP_VERSION) <= 0),
      );
    });
    return () => {
      alive = false;
    };
  }, []);

  const [notesSeen, setNotesSeen] = useState(false);
  const pendingNotes = notesSeen ? [] : migrationNotes;
  if (releases === null || (releases.length === 0 && pendingNotes.length === 0)) return null;

  function close() {
    setJSON(SEEN_KEY, APP_VERSION);
    setReleases([]);
    setNotesSeen(true);
  }

  return (
    <View style={[StyleSheet.absoluteFill, styles.scrim]}>
      <View style={[styles.sheet, { backgroundColor: colors.surface, borderRadius: radius.lg, padding: space.xl }]}>
        <AppText variant="title">{t('updates.whatsNewTitle')}</AppText>
        <AppText variant="small" tone="muted" style={{ marginTop: space.xs }}>
          {t('updates.whatsNewSub', { version: APP_VERSION })}
        </AppText>
        <ScrollView style={{ marginTop: space.lg }} contentContainerStyle={{ gap: space.lg }}>
          {pendingNotes.map((note) => (
            <View
              key={note.key}
              style={[styles.dataNote, { backgroundColor: colors.warningSoft, borderRadius: radius.md }]}
            >
              <AppText variant="small" weight="600">
                {t(note.key, note.params)}
              </AppText>
            </View>
          ))}
          {releases.map((release) => (
            <View key={release.version} style={{ gap: space.sm }}>
              <AppText weight="700" tone="accent">
                {release.version}
              </AppText>
              {release.notes.map((note, i) => (
                <View key={i} style={styles.row}>
                  <View style={[styles.dot, { backgroundColor: colors.accent }]} />
                  <AppText variant="small" style={styles.flex}>
                    {tr(note, lang)}
                  </AppText>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
        <Button label={t('updates.gotIt')} onPress={close} style={{ marginTop: space.xl }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrim: { backgroundColor: 'rgba(9, 9, 11, 0.55)', justifyContent: 'center', padding: 20 },
  sheet: { maxHeight: '80%' },
  dataNote: { padding: 12 },
  row: { flexDirection: 'row', gap: 10 },
  dot: { width: 6, height: 6, borderRadius: 3, marginTop: 7 },
  flex: { flex: 1 },
});
