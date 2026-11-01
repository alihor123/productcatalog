import { Catalog, Star, StarFilled } from '@/assets/icons'
import { useStyles } from '@/hooks/useStyles'
import { Image } from 'expo-image'
import { Tabs } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function TabLayout() {
  const insets = useSafeAreaInsets()
  const styles = useStyles((colors) => ({
    screen: {
      backgroundColor: colors.background
    },
    tabBar: {
      backgroundColor: colors.surface,
      borderTopColor: colors.border,
      height: 64 + insets.bottom,
      paddingTop: 6,
      paddingBottom: insets.bottom
    },
    tabLabel: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '600'
    },
    tabIcon: {
      width: 24,
      height: 24
    },
    activeTab: {
      color: colors.primary
    },
    inactiveTab: {
      color: colors.textSecondary
    }
  }))

  return (
    <Tabs screenOptions={{
      headerShown: false,
      sceneStyle: styles.screen,
      tabBarStyle: styles.tabBar,
      tabBarLabelStyle: styles.tabLabel,
      tabBarActiveTintColor: styles.activeTab.color,
      tabBarInactiveTintColor: styles.inactiveTab.color
    }}>
      <Tabs.Screen name="index" options={{
        title: 'Каталог',
        tabBarIcon: ({ focused }) => (
          <Image source={Catalog} style={styles.tabIcon} tintColor={focused ? styles.activeTab.color : styles.inactiveTab.color} />
        )
      }} />
      <Tabs.Screen name="favorites" options={{
        title: 'Избранное',
        tabBarIcon: ({ focused }) => (
          <Image source={focused ? StarFilled : Star} style={styles.tabIcon} tintColor={focused ? styles.activeTab.color : styles.inactiveTab.color} />
        )
      }} />
    </Tabs>
  )
}
