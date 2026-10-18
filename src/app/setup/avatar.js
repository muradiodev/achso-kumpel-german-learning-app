import { View } from 'react-native';

import { Stepper } from '@/components/stepper';
import { AvatarPicker } from '@/screens/avatar-picker';

export default function AvatarSetup() {
  // Saving the avatar completes the profile; the root guard then opens /setup/levels.
  return (
    <AvatarPicker
      header={
        <>
          <View style={{ marginBottom: 20 }}>
            <Stepper step={2} back />
          </View>
        </>
      }
    />
  );
}
