import { Text } from 'react-native';

import { fontFor, useTheme } from '@/theme';

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
  const { fontWeight, ...base } = type[variant];
  return (
    <Text
      {...props}
      style={[
        base,
        { color: colors[TONES[tone]], fontFamily: fontFor(weight ?? fontWeight) },
        align && { textAlign: align },
        style,
      ]}
    />
  );
}
