export interface I_ProductDetails {
  id: number
  slug?: string
  image: string
  priceRegular: number
  priceDiscounted?: number
  title: string
  desc: string
}
