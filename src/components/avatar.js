import { View } from 'react-native';

import { Icon } from '@/components/icon';
import { getAvatar } from '@/constants/avatars';
import { useTheme } from '@/theme';

export function Avatar({ id, size = 48 }) {
  const { colors, scheme } = useTheme();
  const avatar = getAvatar(id);
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: avatar[scheme],
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon name={avatar.icon} size={size * 0.48} color={colors.text} />
    </View>
  );
}
