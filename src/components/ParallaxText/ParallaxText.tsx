import type { ElementType } from 'react'
import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { ParallaxTextTheme } from './theme'
export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}
export type ParallaxTextProps<T extends ElementType = 'span'> = {
  children: string
  velocity?: number
  className?: string
  as?: T | null

  resistance?: number

  /**
   * @name renderedElements
   * @description
   * The number of elements to render. This is a performance optimization, the lower the number the better, but you need to make sure that the text is long enough to cover the whole screen.
   * @default
   * Math.ceil(100 / children.length)
   * @type number
   * @example
   * ```tsx
   * <ParallaxText renderedElements={5} />
   * ```
   */
  renderedElements?: number

  theme?: DeepPartial<ParallaxTextTheme>
}

export const ParallaxText = <T extends ElementType = 'span'>({
  children,
  velocity = 5,
  resistance = 1000,
  as: BaseComponent,
  className,
  theme: customTheme = {},
  renderedElements = Math.ceil(100 / children.length) ?? 10,
  ...props
}: ParallaxTextProps<T>) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, resistance], [0, 5], {
    clamp: false,
  })

  const Component = BaseComponent ?? 'span'

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, v => `${wrap(40, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * (velocity / 2) * (delta / -resistance)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })
  const theme = mergeDeep(getTheme().parallaxText, customTheme)

  return (
    <motion.div className={twMerge(theme.base, className)} style={{ x }} {...props}>
      {Array.from({ length: renderedElements }).map((_, i) => (
        <Component key={i}>{children}</Component>
      ))}
    </motion.div>
  )
}
