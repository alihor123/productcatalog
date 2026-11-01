import { StarFilled } from '@/assets/icons'
import { products } from '@/constants/productConstants'
import { useStyles } from '@/hooks/useStyles'
import { Image } from 'expo-image'
import { useLocalSearchParams } from 'expo-router'
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
    productRating: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6
    },
    productStar: {
      width: 20,
      height: 20,
      tintColor: colors.rating
    },
    productRatingText: {
      fontSize: 16,
      color: colors.text
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

  const { id } = useLocalSearchParams<{ id: string }>()
  const product = products.find(product => product.id === Number(id))

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
        {product.img === null && <View style={styles.productImage} />}
        {product.img !== null && (
          <Image source={{ uri: product.img }} style={styles.productImage} contentFit="contain" />
        )}

        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productCategory}>{product.category}</Text>
        </View>

        <View style={styles.productDetails}>
          <Text style={styles.productPrice}>
            {product.price.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} $
          </Text>
          <View style={styles.productRating}>
            <Image source={StarFilled} style={styles.productStar} tintColor={styles.productStar.tintColor} />
            <Text style={styles.productRatingText}>{product.rating.toLocaleString('ru-RU')}</Text>
          </View>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Описание</Text>
          <Text style={styles.descriptionText}>{product.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
