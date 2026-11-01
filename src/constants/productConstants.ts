import { type Product } from '@/components/ProductCard'

export const categories = [
  { name: 'Все', value: null },
  { name: 'Смартфоны', value: 'smartphones' },
  { name: 'Ноутбуки', value: 'laptops' },
  { name: 'Мебель', value: 'furniture' },
  { name: 'Косметика', value: 'beauty' },
  { name: 'Парфюмерия', value: 'fragrances' }
]

export const products: Product[] = [
  {
    id: 1,
    description: 'Смартфон для общения, фотографий и повседневных приложений. Подойдёт для просмотра видео, работы с документами и использования социальных сетей.',
    title: 'Samsung Galaxy S24',
    category: 'smartphones',
    price: 799.99,
    rating: 4.8,
    img: null
  },
  {
    id: 2,
    description: 'Смартфон для повседневных задач, мобильной фотографии и видеосвязи. Удобен для общения, прослушивания музыки и работы с приложениями.',
    title: 'Apple iPhone 15',
    category: 'smartphones',
    price: 699.99,
    rating: 4.7,
    img: null
  },
  {
    id: 3,
    description: 'Компактный ноутбук для учёбы, работы и поездок. Подойдёт для подготовки презентаций, программирования и просмотра видео.',
    title: 'Asus Zenbook 14',
    category: 'laptops',
    price: 999.99,
    rating: 4.6,
    img: null
  },
  {
    id: 4,
    description: 'Универсальный ноутбук для дома и учёбы. На нём удобно работать с документами, посещать онлайн-занятия и пользоваться браузером.',
    title: 'Lenovo IdeaPad Slim 5',
    category: 'laptops',
    price: 749.99,
    rating: 4.4,
    img: null
  },
  {
    id: 5,
    description: 'Обеденный стол для кухни или столовой. Простая форма позволяет сочетать его с разными стульями и интерьером.',
    title: 'Обеденный стол',
    category: 'furniture',
    price: 249.99,
    rating: 4.5,
    img: null
  },
  {
    id: 6,
    description: 'Крем для ежедневного ухода за кожей. Лёгкая текстура подходит для нанесения утром и вечером после очищения.',
    title: 'Увлажняющий крем',
    category: 'beauty',
    price: 19.99,
    rating: 4.3,
    img: null
  },
  {
    id: 7,
    description: 'Парфюмерная вода с мягким ароматом для повседневного использования. Флакон удобно хранить на полке или брать с собой.',
    title: 'Парфюмерная вода',
    category: 'fragrances',
    price: 59.99,
    rating: 4.6,
    img: null
  },
  {
    id: 8,
    description: 'Офисное кресло для рабочего места дома или в кабинете. Подойдёт для занятий за компьютером, чтения и работы с документами.',
    title: 'Офисное кресло',
    category: 'furniture',
    price: 129.99,
    rating: 4.2,
    img: null
  }
]
