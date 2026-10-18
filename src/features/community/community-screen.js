import { useMemo, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Avatar } from '@/components/avatar';
import { Button } from '@/components/button';
import { Chip } from '@/components/chip';
import { Screen } from '@/components/screen';
import { Segmented } from '@/components/segmented';
import { Surface } from '@/components/surface';
import { useAuth } from '@/features/auth/auth-context';
import { MemberRow, Podium } from '@/features/community/member-parts';
import { rankStats } from '@/features/community/member-stats';
import { BOARDS, COMMUNITY_ENABLED, rankBy, useCommunity } from '@/features/community/use-community';
import { useProgress } from '@/features/progress/progress-context';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

// The Community tab: ranking and the list of everyone who registered.
export function CommunityScreen() {
  const { t, lang } = useI18n();
  const { colors, space } = useTheme();
  const [view, setView] = useState('ranking');
  const [boardKey, setBoardKey] = useState('week');
  const { user } = useAuth();
  const { srs, activity } = useProgress();
  const { data, error, loading, stale, reload } = useCommunity();
  const board = BOARDS.find((b) => b.key === boardKey);
  const meId = user.id;

  // Your own row always uses the progress on this device, so your rank moves
  // as soon as you practise, online or not. Everyone else comes from the server.
  const members = useMemo(() => {
    const local = rankStats({ srs, activity });
    const others = (data?.members ?? []).filter((m) => m.id !== meId);
    const fromServer = data?.members?.find((m) => m.id === meId);
    const p = user.profile;
    const mine = {
      id: meId,
      firstName: p.firstName,
      lastName: p.lastName,
      avatarId: p.avatarId,
      profession: p.profession ?? '',
      levels: p.levels ?? [],
      joinedAt: fromServer?.joinedAt ?? (new Date(user.createdAt ?? Date.now()).getTime() || Date.now()),
      stats: { ...fromServer?.stats, ...local },
    };
    return [mine, ...others];
  }, [data, srs, activity, user, meId]);

  const ranked = useMemo(() => rankBy(members, board.stat), [members, board.stat]);
  const newestFirst = useMemo(() => [...members].sort((a, b) => b.joinedAt - a.joinedAt), [members]);
  const myRank = ranked.findIndex((m) => m.id === meId) + 1;
  const me = ranked[myRank - 1];
  const unit = t(`community.units.${board.key}`);
  const joined = useMemo(() => {
    const format = new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short', year: 'numeric' });
    return (ms) => t('community.joined', { date: format.format(new Date(ms)) });
  }, [lang, t]);

  const header = (
    <View style={{ marginBottom: space.lg }}>
      <AppText variant="display">{t('community.title')}</AppText>
      <AppText variant="small" tone="muted" style={{ marginTop: space.xs }}>
        {t('community.cardBody')}
      </AppText>
    </View>
  );

  if (COMMUNITY_ENABLED && !data && loading) {
    return (
      <Screen>
        {header}
        <ActivityIndicator color={colors.accent} style={{ marginTop: space.xxxl }} />
      </Screen>
    );
  }

  // Offline or server down: say the others are from the last time we got them.
  const notice =
    COMMUNITY_ENABLED && (stale || (error && !data)) ? (
      <Surface tone="muted" style={[styles.notice, { marginBottom: space.lg }]}>
        <AppText variant="small" tone="muted" style={styles.flex}>
          {t(stale ? 'community.stale' : 'community.errorTitle')}
        </AppText>
        <Button label={t('community.retry')} variant="ghost" size="md" onPress={reload} />
      </Surface>
    ) : null;

  return (
    <Screen>
      {header}
      {notice}

      {me ? (
        <Surface tone="brand" style={styles.hero}>
          <Avatar id={me.avatarId} size={52} />
          <View style={styles.flex}>
            <AppText variant="caption" tone="onAccent" style={{ opacity: 0.85 }}>
              {t(`community.boards.${board.key}`)}
            </AppText>
            <AppText variant="title" tone="onAccent">
              {t('community.yourRank', { rank: myRank, total: ranked.length })}
            </AppText>
          </View>
          <View style={styles.heroValue}>
            <AppText variant="title" tone="onAccent">
              {me.stats[board.stat]}
            </AppText>
            <AppText variant="caption" tone="onAccent" style={{ opacity: 0.85 }}>
              {unit}
            </AppText>
          </View>
        </Surface>
      ) : null}

      <View style={{ marginTop: space.lg }}>
        <Segmented
          value={view}
          onChange={setView}
          options={[
            { value: 'ranking', label: t('community.ranking'), icon: 'trophy' },
            { value: 'members', label: t('community.members'), icon: 'community' },
          ]}
        />
      </View>

      {view === 'ranking' ? (
        <>
          <View style={[styles.chips, { marginTop: space.lg }]}>
            {BOARDS.map((b) => (
              <Chip
                key={b.key}
                label={t(`community.boards.${b.key}`)}
                selected={b.key === boardKey}
                onPress={() => setBoardKey(b.key)}
              />
            ))}
          </View>
          <AppText variant="small" tone="muted" style={{ marginTop: space.sm }}>
            {t(`community.hints.${board.key}`)}
          </AppText>

          <View style={{ marginTop: space.xl }}>
            <Podium members={ranked.slice(0, 3)} stat={board.stat} unit={unit} meId={meId} />
          </View>

          {ranked.length > 3 ? (
            <View style={{ marginTop: space.lg, gap: 2 }}>
              {ranked.slice(3).map((m, i) => (
                <MemberRow
                  key={m.id}
                  member={m}
                  rank={i + 4}
                  value={m.stats[board.stat]}
                  detail={m.levels.join(', ')}
                  isMe={m.id === meId}
                />
              ))}
            </View>
          ) : null}
          {ranked.length < 2 ? (
            <AppText tone="muted" align="center" style={{ marginTop: space.xl }}>
              {t('community.alone')}
            </AppText>
          ) : null}
        </>
      ) : (
        <>
          <AppText variant="heading" style={{ marginTop: space.xl, marginBottom: space.sm }}>
            {t('community.memberCount', { count: members.length })}
          </AppText>
          <View style={{ gap: 2 }}>
            {newestFirst.map((m) => (
              <MemberRow
                key={m.id}
                member={m}
                detail={[m.profession, joined(m.joinedAt)].filter(Boolean).join(' · ')}
                isMe={m.id === meId}
              />
            ))}
          </View>
        </>
      )}

      <AppText variant="small" tone="faint" align="center" style={{ marginTop: space.xl }}>
        {t('community.privacy')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  heroValue: { alignItems: 'flex-end' },
  flex: { flex: 1, gap: 2 },
  notice: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 8 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
