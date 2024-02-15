import { useAnimate } from 'framer-motion'
import type { MouseEventHandler, PropsWithChildren } from 'react'
import React, { useRef } from 'react'
import { cn } from '../../helpers'

export interface ImageTrailProps extends PropsWithChildren {
  images: string[]
  renderImageBuffer?: number
  rotationRange?: number
  className?: string
  imageClassName?: string
  disapearDelay?: number
}

export const ImageTrail = ({
  children,
  // List of image sources
  images = [],
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer = 50,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange = 20,
  disapearDelay = 1,
  className = '',
  imageClassName = '',
}: ImageTrailProps) => {
  const [scope, animate] = useAnimate()

  const lastRenderPosition = useRef({ x: 0, y: 0 })
  const imageRenderCount = useRef(0)

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = e => {
    const { clientX, clientY } = e

    const distance = calculateDistance(clientX, clientY, lastRenderPosition.current.x, lastRenderPosition.current.y)

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX
      lastRenderPosition.current.y = clientY

      renderNextImage()
    }
  }

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    const deltaX = x2 - x1
    const deltaY = y2 - y1

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

    return distance
  }

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length
    const selector = `[data-mouse-move-index="${imageIndex}"]`

    const el = document.querySelector(selector) as HTMLElement

    el.style.top = `${lastRenderPosition.current.y}px`
    el.style.left = `${lastRenderPosition.current.x}px`
    el.style.zIndex = imageRenderCount.current.toString()

    const rotation = Math.random() * rotationRange

    animate(
      selector,

      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) rotate( ${imageIndex % 2 ? '' : '-'}${rotation}deg)`,
          `translate(-50%, -25%) scale(1) rotate( ${imageIndex % 2 ? '-' : ''}${rotation}deg)`,
        ],
      },
      { type: 'spring', damping: 15, stiffness: 200 },
    )

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: 'linear', duration: 0.5, delay: disapearDelay },
    )

    imageRenderCount.current = imageRenderCount.current + 1
  }

  return (
    <div
      ref={scope}
      className={cn('relative overflow-hidden w-full', className)}
      onMouseMove={handleMouseMove}
      role="presentation"
    >
      {children}

      {images.map((img, index) => (
        <img
          className={cn(
            'pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl object-cover opacity-0',
            imageClassName,
          )}
          src={img}
          alt={`Mouse move ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  )
}
