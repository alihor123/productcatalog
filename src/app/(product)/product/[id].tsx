import { ProductContext } from '@/context/ProductContext'
import { useStyles } from '@/hooks/useStyles'
import { Image } from 'expo-image'
import { useLocalSearchParams } from 'expo-router'
import { useContext } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ProductScreen() {
  const styles = useStyles((colors) => ({
    container: {
      flex: 1,
      backgroundColor: colors.background
    },
    scroll: {
      flex: 1
    },
    content: {
      width: '100%',
      maxWidth: 600,
      alignSelf: 'center',
      padding: 24,
      gap: 20
    },
    productImage: {
      width: '100%',
      height: 240,
      borderRadius: 16,
      backgroundColor: colors.imagePlaceholder
    },
    productInfo: {
      gap: 8
    },
    productTitle: {
      fontSize: 26,
      lineHeight: 34,
      fontWeight: '700',
      color: colors.text
    },
    productCategory: {
      fontSize: 16,
      color: colors.textSecondary
    },
    productDetails: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    },
    productPrice: {
      fontSize: 26,
      fontWeight: '700',
      color: colors.primary
    },
    description: {
      gap: 12
    },
    descriptionTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: colors.text
    },
    descriptionText: {
      fontSize: 16,
      lineHeight: 25,
      color: colors.text
    },
    empty: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    },
    emptyText: {
      fontSize: 16,
      color: colors.textSecondary
    }
  }))

  const { products } = useContext(ProductContext)!
  const { id } = useLocalSearchParams<{ id: string }>()
  const product = products.find(product => product.uuid === id)

  if (!product) {
    return (
      <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Товар не найден</Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Image source={{ uri: product.image_url }} style={styles.productImage} contentFit="contain" />

        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.productCategory}>{product.category}</Text>
        </View>

        <View style={styles.productDetails}>
          <Text style={styles.productPrice}>
            {(product.price / 100).toLocaleString('ru-RU', { style: 'currency', currency: product.currency })}
          </Text>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Описание</Text>
          <Text style={styles.descriptionText}>{product.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
