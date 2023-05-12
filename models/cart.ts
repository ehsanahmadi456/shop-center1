export interface IProduct {
  id: number
  name: string
  price: number
  onSale: number
  category: string
  size: string[]
  color: string[]
  img: string
  star: number
}

export interface Comments {
  id: number,
  name: string,
  star: number,
  title: string,
  date: any,
  description: string,
  helpfull: number
}

export interface IProducts {
  id: number,
  name: string,
  category: string,
  slug: string,
  price: number,
  discount?: number,
  star: number,
  review: number,
  onSale?: number
  showOnSale?: boolean,
  brand: string,
  sold: number,
  description: string,
  detail: string[],
  images: string[]
  size: string[],
  colors: string[],
  comments: Comments[]
}

export interface IBag {
  id: number
  id_product: number
  size: string
  color: string
  count: number
}

export interface IAddress {
  id: number
  title: string
  address: string
  phone: string
}