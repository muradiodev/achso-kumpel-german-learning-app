import { router } from 'expo-router';

import { ScreenHeader } from '@/components/screen-header';
import { AvatarPicker } from '@/screens/avatar-picker';

export default function AvatarSettings() {
  return <AvatarPicker header={<ScreenHeader />} onDone={() => router.back()} />;
}
