import { Tabs } from 'expo-router/js-tabs';
import { Platform, View } from 'react-native';

import { useIsFramed } from '@/components/app-frame';
import { Icon } from '@/components/icon';
import { useI18n } from '@/i18n';
import { fontFor, useTheme } from '@/theme';

const ICONS = {
  index: 'today',
  practice: 'practice',
  grammar: 'grammar',
  writing: 'writing',
  profile: 'profile',
};

export default function TabsLayout() {
  const { t } = useI18n();
  const { colors } = useTheme();
  // Inside the rounded frame the bar needs room above the curved corners.
  const framed = useIsFramed();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        // Keep the phone-style bar (icon above label) even on wide screens.
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textFaint,
        tabBarStyle: [
          { backgroundColor: colors.surface, borderTopColor: colors.border },
          // Web has no safe-area inset, and the default height clips the labels.
          Platform.OS === 'web' && { height: 76, paddingTop: 6, paddingBottom: 12 },
          framed && { height: 80, paddingTop: 6, paddingBottom: 16 },
        ],
        tabBarLabelStyle: { fontFamily: fontFor('600'), fontSize: 11, marginTop: 2 },
        sceneStyle: { backgroundColor: colors.bg },
        // The active tab sits on a soft accent pill so it reads at a glance.
        tabBarIcon: ({ color, focused }) => (
          <View
            style={{
              width: 56,
              height: 30,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: focused ? colors.accentSoft : 'transparent',
            }}
          >
            <Icon name={ICONS[route.name]} size={22} color={color} weight={focused ? 'fill' : 'regular'} />
          </View>
        ),
        tabBarIconStyle: { width: 56, height: 30 },
      })}
    >
      <Tabs.Screen name="index" options={{ title: t('tabs.today') }} />
      <Tabs.Screen name="practice" options={{ title: t('tabs.practice') }} />
      <Tabs.Screen name="grammar" options={{ title: t('tabs.grammar') }} />
      <Tabs.Screen name="writing" options={{ title: t('tabs.writing') }} />
      <Tabs.Screen name="profile" options={{ title: t('tabs.profile') }} />
    </Tabs>
  );
}
