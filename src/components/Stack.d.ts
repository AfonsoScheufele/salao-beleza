import type { ReactNode } from 'react'

export type StackProps = {
  randomRotation?: boolean
  sensitivity?: number
  sendToBackOnClick?: boolean
  cards?: ReactNode[]
  animationConfig?: { stiffness: number; damping: number }
  autoplay?: boolean
  autoplayDelay?: number
  pauseOnHover?: boolean
  mobileClickOnly?: boolean
  mobileBreakpoint?: number
}

declare function Stack(props: StackProps): ReactNode
export default Stack
