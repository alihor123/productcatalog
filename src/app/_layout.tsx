import { ProductProvider } from '@/context/ProductContext'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  return (
    <ProductProvider>
      <StatusBar style="auto" />
      <Slot />
    </ProductProvider>
  )
}
