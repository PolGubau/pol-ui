'use client'

import type { ComponentPropsWithoutRef, ElementType } from 'react'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import type { ConveyorDirection } from './ConveyorTypes'
import { ConveyorSpeedEnum, type ConveyorSpeed, ConveyorDirectionEnum } from './ConveyorTypes'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { ConveyorTheme } from './theme'

export type ConveyorProps<T extends ElementType = 'div'> = {
  children: React.ReactNode[]
  direction?: ConveyorDirection
  speed?: ConveyorSpeed
  pauseOnHover?: boolean
  theme?: Partial<ConveyorTheme>
  className?: string
} & ComponentPropsWithoutRef<T>

export const Conveyor = <T extends ElementType = 'div'>({
  direction = ConveyorDirectionEnum.right,
  speed = ConveyorSpeedEnum.fast,
  pauseOnHover = true,
  children,
  theme: customTheme = {},
  className,
  ...props
}: ConveyorProps<T>) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  const theme: ConveyorTheme = mergeDeep(getTheme().conveyor, customTheme)

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === ConveyorSpeedEnum.fast) {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === ConveyorSpeedEnum.normal) {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards')
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse')
      }
    }
  }
  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction, speed])
  const [start, setStart] = useState(false)

  return (
    <div ref={containerRef} {...props} className={twMerge(theme.scroller, className)}>
      <ul
        ref={scrollerRef}
        className={twMerge(theme.list, start && theme.animation, pauseOnHover && theme.pauseAnimation)}
      >
        {children.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
