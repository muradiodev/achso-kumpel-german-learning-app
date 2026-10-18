import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/app-text';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { useTheme } from '@/theme';

export function EmptyState({ icon = 'leaf', title, body, actionLabel, onAction }) {
  const { colors } = useTheme();
  return (
    <View style={styles.wrap}>
      <View style={[styles.icon, { backgroundColor: colors.accentSoft }]}>
        <Icon name={icon} size={28} color={colors.accent} />
      </View>
      <AppText variant="heading" align="center">
        {title}
      </AppText>
      {body ? (
        <AppText tone="muted" align="center">
          {body}
        </AppText>
      ) : null}
      {actionLabel ? <Button label={actionLabel} onPress={onAction} variant="secondary" style={styles.action} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12, paddingVertical: 48 },
  icon: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 4 },
  action: { marginTop: 8, alignSelf: 'stretch' },
});
