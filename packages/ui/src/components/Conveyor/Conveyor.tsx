'use client'

import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import type { ConveyorDirection, ConveyorSpeed } from './ConveyorTypes'
import { ConveyorSpeedEnum, ConveyorDirectionEnum } from './ConveyorTypes'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import type { ConveyorTheme } from './theme'

export interface ConveyorProps {
  children?: React.ReactNode[]
  direction?: ConveyorDirection
  speed?: ConveyorSpeed
  pauseOnHover?: boolean
  theme?: Partial<ConveyorTheme>
  className?: string
}

/**
 *
 * @name Conveyor
 * @description The Conveyor component is used to display a conveyor belt of items that move from one side to the other. Useful  for displaying a list of items in a small space.
 *
 * @returns
 */
export const Conveyor = ({
  direction = ConveyorDirectionEnum.right,
  speed = ConveyorSpeedEnum.fast,
  pauseOnHover = true,
  children,
  theme: customTheme = {},
  className,
  ...props
}: ConveyorProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  const theme: ConveyorTheme = mergeDeep(getTheme().conveyor, customTheme)

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === ConveyorSpeedEnum.fast) {
        containerRef.current.style.setProperty('--animation-duration', '30s')
      } else if (speed === ConveyorSpeedEnum.normal) {
        containerRef.current.style.setProperty('--animation-duration', '50s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '100s')
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
    <div ref={containerRef} {...props} className={twMerge(theme.scroller, className)} data-testid="conveyor-scroller">
      <ul
        data-testid="conveyor-list"
        ref={scrollerRef}
        className={twMerge(theme.list, start && theme.animation, pauseOnHover && theme.pauseAnimation)}
      >
        {children?.map((item, i) => (
          <li data-testid="conveyor-item" key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
