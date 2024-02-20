'use client'
import type { PropsWithChildren } from 'react'
import React, { useRef } from 'react'
import type { MotionValue } from 'framer-motion'
import { useScroll, useTransform, motion } from 'framer-motion'
import { cn, mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { ClassName, DeepPartial, WithClassName } from '../../types'
import type { ContainerScrollTheme } from './theme'
export interface ContainerScrollProps extends PropsWithChildren, WithClassName {
  titleComponent?: string | React.ReactNode
  top?: boolean
  bottom?: boolean
  rotation?: number
  theme?: DeepPartial<ContainerScrollTheme>
  perspective?: number
  headerClassName?: ClassName
  deviceWrapper?: boolean
  deviceClassName?: ClassName
}
export const ContainerScroll = ({
  titleComponent,
  children,
  top = false,
  bottom = true,
  rotation = 20,
  perspective = 1000,
  theme: customTheme = {},
  className,
  headerClassName,
  deviceWrapper = true,
  deviceClassName,
}: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)

  const theme = mergeDeep(getTheme().containerScroll, customTheme)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const animations = (rotation: number) => {
    // we need to create the 0-1 range and the -20 0 20 range px scale
    // if 'top' is true, we need to add a 3rd point to the range (the last one)
    /*
    Case 1: 
    Both top and bottom are true -> 
      {endpoints:[0,0.5,1],rotations:[20,0,-20]}

    Case 2:
    Only top is true -> 
      {endpoints:[0,1],rotations:[0,-20]}

    Case 3:
    Only bottom is true -> 
      {endpoints:[0,1],rotations:[20,0]}

    Case 4:
    None is true -> 
      {endpoints:[0],rotations:[0]}

     */

    const checkpoints = () => {
      if (top && bottom) {
        return [0, 0.5, 1]
      } else if (top) {
        return [0, 1]
      } else if (bottom) {
        return [0, 0.5]
      } else {
        return [0]
      }
    }
    const rotations = () => {
      if (top && bottom) {
        return [rotation, 0, -rotation]
      } else if (top) {
        return [0, -rotation]
      } else if (bottom) {
        return [rotation, 0]
      } else {
        return [0]
      }
    }
    return { checkpoints: checkpoints(), rotations: rotations() }
  }

  const rotate = useTransform(scrollYProgress, animations(rotation).checkpoints, animations(rotation).rotations)
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  const titleStyles = { translateY: translate }
  return (
    <div className={cn(theme.base, className)} ref={containerRef}>
      <div
        className={theme.container}
        style={{
          perspective: `${perspective}px`,
        }}
      >
        {titleComponent && (
          <motion.div style={titleStyles} className={cn(theme.header, headerClassName)}>
            {titleComponent}
          </motion.div>
        )}
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          theme={theme}
          deviceWrapper={deviceWrapper}
          deviceClassName={deviceClassName}
        >
          {children}
        </Card>
      </div>
    </div>
  )
}

interface CardProps extends PropsWithChildren {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  translate: MotionValue<number>
  theme: ContainerScrollTheme
  deviceWrapper: ContainerScrollProps['deviceWrapper']
  deviceClassName?: ClassName
}
export const Card = ({
  rotate,
  scale,
  translate,
  children,
  theme,
  deviceWrapper = true,
  deviceClassName = '',
}: CardProps) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className={cn(deviceWrapper && theme.device, deviceClassName)}
    >
      {deviceWrapper ? (
        <div className={theme.screen}>
          <motion.div style={{ translateY: translate }}>{children}</motion.div>
        </div>
      ) : (
        children
      )}
    </motion.div>
  )
}
