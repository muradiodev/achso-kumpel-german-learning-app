import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { purple, useTheme } from '@/theme';

// The AchsoKumpel mark: an Ä whose crossbar is a smile. Master files live in
// brand/logo/. `tile` draws the app-icon version (white mark on purple).
export function BrandMark({ size = 48, tile = false }) {
  const { scheme } = useTheme();
  const leg = tile ? '#FFFFFF' : scheme === 'dark' ? purple[400] : purple[600];
  const smile = tile ? purple[200] : scheme === 'dark' ? purple[200] : purple[400];
  const mark = (
    <>
      <Path
        d="M66 214L128 82L190 214"
        fill="none"
        stroke={leg}
        strokeWidth={34}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M92 168Q128 196 164 168" fill="none" stroke={smile} strokeWidth={26} strokeLinecap="round" />
      <Circle cx={96} cy={40} r={18} fill={smile} />
      <Circle cx={160} cy={40} r={18} fill={smile} />
    </>
  );

  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" accessibilityLabel="AchsoKumpel">
      {tile ? (
        <>
          <Rect width={256} height={256} rx={64} fill={purple[600]} />
          <Svg x={44} y={44} width={168} height={168} viewBox="0 0 256 256">
            {mark}
          </Svg>
        </>
      ) : (
        mark
      )}
    </Svg>
  );
}
