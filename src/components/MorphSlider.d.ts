import type { ReactNode } from 'react'

export type MorphSliderItem = {
  image: string
  caption?: string
}

export type MorphSliderProps = {
  items?: MorphSliderItem[]
  startIndex?: number
  transition?: 'melt' | 'ripple' | 'shear' | 'swirl'
  duration?: number
  ease?: string
  intensity?: number
  scale?: number
  aberration?: number
  drift?: number
  autoplay?: boolean
  autoplayDelay?: number
  loop?: boolean
  radius?: number
  overlayColor?: string
  showCaptions?: boolean
  showControls?: boolean
  showIndicators?: boolean
  className?: string
  style?: React.CSSProperties
}

declare function MorphSlider(props: MorphSliderProps): ReactNode
export default MorphSlider
