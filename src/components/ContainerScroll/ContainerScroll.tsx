/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import type { PropsWithChildren } from 'react'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
export interface ContainerScrollProps extends PropsWithChildren {
  titleComponent: string | React.ReactNode
  top?: boolean
  bottom?: boolean
  rotation?: number
}
export const ContainerScroll = ({
  titleComponent,
  children,
  top = false,
  bottom = true,
  rotation = 20,
}: ContainerScrollProps) => {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)

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
        return [0, 1]
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

  return (
    <div className="h-[80rem] flex items-center justify-center relative p-20" ref={containerRef}>
      <div
        className="py-40 w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  )
}

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  children: React.ReactNode
  rotate: any
  scale: any
  translate: any
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-secondary-700 p-4 bg-secondary-900 rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl gap-4 overflow-hidden p-4">
        <motion.div style={{ translateY: translate }}>{children}</motion.div>
      </div>
    </motion.div>
  )
}
