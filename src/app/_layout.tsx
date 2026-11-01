import { useStyles } from '@/hooks/useStyles'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  const styles = useStyles((colors) => ({
    screen: {
      backgroundColor: colors.background
    },
    headerTitle: {
      color: colors.text
    }
  }))

  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        animation: 'slide_from_right',
        contentStyle: styles.screen,
        headerStyle: styles.screen,
        headerTintColor: styles.headerTitle.color,
        headerShadowVisible: false
      }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="product/[id]" options={{ title: 'Товар' }} />
      </Stack>
    </>
  )
}
