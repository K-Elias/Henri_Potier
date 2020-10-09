interface Book {
  isbn: string
  title: string
  price: number
  cover: string
  synopsis: string[]
}

interface Offer {
  type: string
  value: number
  sliceValue?: number
}