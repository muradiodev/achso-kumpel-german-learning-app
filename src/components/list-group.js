import { Children, Fragment } from 'react';
import { View } from 'react-native';

import { useTheme } from '@/theme';

// A bordered card holding list rows, with hairlines between them.
export function ListGroup({ children, style }) {
  const { colors, radius } = useTheme();
  const rows = Children.toArray(children).filter(Boolean);
  return (
    <View
      style={[
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          borderWidth: 1,
          borderRadius: radius.lg,
          paddingHorizontal: 16,
        },
        style,
      ]}
    >
      {rows.map((row, i) => (
        <Fragment key={row.key ?? i}>
          {i > 0 ? <View style={{ height: 1, backgroundColor: colors.border }} /> : null}
          {row}
        </Fragment>
      ))}
    </View>
  );
}
