import { View } from 'react-native';

import { Icon } from '@/components/icon';
import { useTheme } from '@/theme';

// A duotone icon on a round accentSoft disc. Used for list rows, feature
// tiles and empty states. `ground` overrides the disc colour (e.g. on a
// tinted card, use surface).
export function IconChip({ name, size = 40, weight = 'duotone', ground, color }) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: ground ?? colors.accentSoft,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon name={name} size={Math.round(size * 0.52)} color={color ?? colors.accent} weight={weight} />
    </View>
  );
}
