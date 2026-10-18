import { Text } from 'react-native';

import { useTheme } from '@/theme';

const TONES = {
  default: 'text',
  muted: 'textMuted',
  faint: 'textFaint',
  accent: 'accent',
  danger: 'danger',
  success: 'success',
  onAccent: 'onAccent',
};

export function AppText({ variant = 'body', tone = 'default', weight, align, style, ...props }) {
  const { colors, type } = useTheme();
  return (
    <Text
      {...props}
      style={[
        type[variant],
        { color: colors[TONES[tone]] },
        weight && { fontWeight: weight },
        align && { textAlign: align },
        style,
      ]}
    />
  );
}
