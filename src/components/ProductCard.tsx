import { ChevronRight, StarFilled } from '@/assets/icons'
import { useStyles } from '@/hooks/useStyles'
import { Image } from 'expo-image'
import { Pressable, Text, View } from 'react-native'

export function ProductCard() {
  const styles = useStyles((colors) => ({
    product: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      gap: 12
    },
    productPressed: {
      transform: [{ scale: 0.98 }]
    },
    productImage: {
      width: 72,
      height: 72,
      borderRadius: 12,
      backgroundColor: colors.imagePlaceholder
    },
    productInfo: {
      flex: 1,
      minWidth: 0,
      gap: 6
    },
    productTitle: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: '600',
      color: colors.text
    },
    productCategory: {
      fontSize: 14,
      color: colors.textSecondary
    },
    productPrice: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.text
    },
    productActions: {
      alignSelf: 'stretch',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingVertical: 2,
      gap: 12
    },
    productArrow: {
      width: 20,
      height: 20,
      tintColor: colors.textSecondary
    },
    productRating: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4
    },
    productStar: {
      width: 16,
      height: 16,
      tintColor: colors.rating
    },
    productRatingText: {
      fontSize: 14,
      color: colors.text
    }
  }))

  return (
    <Pressable style={({ pressed }) => [styles.product, pressed && styles.productPressed]}>
      <View style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>Samsung Galaxy S24</Text>
        <Text style={styles.productCategory}>Смартфоны</Text>
        <Text style={styles.productPrice}>799,99 $</Text>
      </View>
      <View style={styles.productActions}>
        <Image
          source={ChevronRight}
          style={styles.productArrow}
          tintColor={styles.productArrow.tintColor}
        />
        <View style={styles.productRating}>
          <Image
            source={StarFilled}
            style={styles.productStar}
            tintColor={styles.productStar.tintColor}
          />
          <Text style={styles.productRatingText}>4,8</Text>
        </View>
      </View>
    </Pressable>
  )
}
