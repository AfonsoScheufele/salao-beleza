export type CircularGalleryItem = {
  image: string
  text: string
}

export type CircularGalleryProps = {
  items?: CircularGalleryItem[]
  bend?: number
  textColor?: string
  borderRadius?: number
  font?: string
  fontUrl?: string
  scrollSpeed?: number
  scrollEase?: number
  cardScale?: number
  dragSpeed?: number
}

declare function CircularGallery(props: CircularGalleryProps): React.ReactNode
export default CircularGallery
