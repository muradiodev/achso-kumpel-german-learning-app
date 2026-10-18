import { Pressable } from 'react-native';

import { Icon } from '@/components/icon';
import { speakGerman } from '@/features/speech/tts';
import { useI18n } from '@/i18n';
import { useTheme } from '@/theme';

export function SpeakButton({ text, size = 36 }) {
  const { colors } = useTheme();
  const { t } = useI18n();
  return (
    <Pressable
      onPress={() => speakGerman(text)}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel={`${t('common.listen')}: ${text}`}
      style={({ pressed }) => ({
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: colors.accentSoft,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ scale: pressed ? 0.94 : 1 }],
      })}
    >
      <Icon name="listen" size={size * 0.5} color={colors.accent} />
    </Pressable>
  );
}
