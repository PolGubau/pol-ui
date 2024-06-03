'use client'

import { useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const usePerspective = () => {
  const ref = useRef<HTMLDivElement>(null)

  const parentWidth = ref.current?.offsetWidth ?? 500
  const parentHeight = ref.current?.offsetHeight ?? 500

  const x = useMotionValue(parentWidth / 2)
  const y = useMotionValue(parentHeight / 2)

  const rotateX = useTransform(y, [0, parentWidth], [33, -33])
  const rotateY = useTransform(x, [0, parentHeight], [-33, 33])

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()

    const percentageX = (event.clientX - rect.left) / rect.width
    const percentageY = (event.clientY - rect.top) / rect.height

    x.set(percentageX * parentWidth)
    y.set(percentageY * parentHeight)
  }

  return {
    ref,
    parentWidth,
    parentHeight,
    x,
    y,
    rotateX,
    rotateY,
    handleMouse,
  }
}
