export interface I_ProductDetails {
  id: number
  slug?: string
  imgSrc: string
  priceRegular: number
  priceDiscounted?: number
  title: string
  desc: string
}
