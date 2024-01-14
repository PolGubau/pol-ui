'use client'

import type { ComponentProps, FC, ReactElement, ReactNode } from 'react'
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

import ScrollContainer from 'react-indiana-drag-scroll'
import { twMerge } from 'tailwind-merge'
import { isClient } from '../../helpers/is-client'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { IBoolean } from '../PoluiProvider'

export interface CarouselTheme {
  root: CarouselRootTheme
  indicators: CarouselIndicatorsTheme
  item: CarouselItemTheme
  control: CarouselControlTheme
  scrollContainer: CarouselScrollContainer
}

export interface CarouselRootTheme {
  base: string
  leftControl: string
  rightControl: string
}

export interface CarouselIndicatorsTheme {
  active: IBoolean
  base: string
  wrapper: string
}

export interface CarouselItemTheme {
  base: string
  wrapper: IBoolean
}

export interface CarouselControlTheme {
  base: string
  icon: string
}

export interface CarouselScrollContainer {
  base: string
  snap: string
}

export interface CarouselProps extends ComponentProps<'div'> {
  indicators?: boolean
  leftControl?: ReactNode
  rightControl?: ReactNode
  draggable?: boolean
  slide?: boolean
  slideInterval?: number
  theme?: DeepPartial<CarouselTheme>
  onSlideChange?: (slide: number) => void
  pauseOnHover?: boolean
}

export interface DefaultLeftRightControlProps extends ComponentProps<'div'> {
  theme?: DeepPartial<CarouselTheme>
}

export const Carousel: FC<CarouselProps> = ({
  children,
  indicators = true,
  leftControl,
  rightControl,
  slide = true,
  draggable = true,
  slideInterval,
  className,
  theme: customTheme = {},
  onSlideChange = null,
  pauseOnHover = false,
  ...props
}) => {
  const theme = mergeDeep(getTheme().carousel, customTheme)

  const isDeviceMobile = isClient() && navigator.userAgent.indexOf('IEMobile') !== -1
  const carouselContainer = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const didMountRef = useRef(false)

  const items = useMemo(
    () =>
      Children.map(children as ReactElement[], (child: ReactElement) =>
        cloneElement(child, {
          className: twMerge(theme.item.base, child.props.className),
        }),
      ),
    [children, theme.item.base],
  )

  const navigateTo = useCallback(
    (item: number) => () => {
      if (!items) return
      item = (item + items.length) % items.length
      if (carouselContainer.current) {
        carouselContainer.current.scrollLeft = carouselContainer.current.clientWidth * item
      }
      setActiveItem(item)
    },
    [items],
  )

  useEffect(() => {
    if (carouselContainer.current && !isDragging && carouselContainer.current.scrollLeft !== 0) {
      setActiveItem(Math.round(carouselContainer.current.scrollLeft / carouselContainer.current.clientWidth))
    }
  }, [isDragging])

  useEffect(() => {
    if (slide && !(pauseOnHover && isHovering)) {
      const intervalId = setInterval(() => !isDragging && navigateTo(activeItem + 1)(), slideInterval ?? 3000)

      return () => clearInterval(intervalId)
    }
  }, [activeItem, isDragging, navigateTo, slide, slideInterval, pauseOnHover, isHovering])

  useEffect(() => {
    if (didMountRef.current) {
      onSlideChange?.(activeItem)
    } else {
      didMountRef.current = true
    }
  }, [onSlideChange, activeItem])

  const handleDragging = (dragging: boolean) => () => setIsDragging(dragging)

  const setHoveringTrue = useCallback(() => setIsHovering(true), [setIsHovering])
  const setHoveringFalse = useCallback(() => setIsHovering(false), [setIsHovering])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowRight':
        // code to scroll the carousel to the right
        navigateTo(activeItem + 1)
        break
      case 'ArrowLeft':
        // code to scroll the carousel to the left
        navigateTo(activeItem - 1)
        break
      default:
        return
    }
  }

  return (
    <div
      className={twMerge(theme.root.base, className)}
      data-testid="carousel"
      onMouseEnter={setHoveringTrue}
      onMouseLeave={setHoveringFalse}
      onTouchStart={setHoveringTrue}
      onTouchEnd={setHoveringFalse} // new event handler for keyboard interactions
      onKeyDown={handleKeyDown} // Capture the keydown event
      role="region" // new role attribute
      tabIndex={0} // new attribute to make the div focusable
      {...props}
    >
      <ScrollContainer
        className={twMerge(theme.scrollContainer.base, (isDeviceMobile || !isDragging) && theme.scrollContainer.snap)}
        draggingClassName="cursor-grab"
        innerRef={carouselContainer}
        onEndScroll={handleDragging(false)}
        onStartScroll={handleDragging(draggable)}
        vertical={false}
        horizontal={draggable}
      >
        {items?.map((item, index) => (
          <div
            key={item.key ?? index}
            className={theme.item.wrapper[draggable ? 'on' : 'off']}
            data-active={activeItem === index}
            data-testid="carousel-item"
          >
            {item}
          </div>
        ))}
      </ScrollContainer>
      {indicators && (
        <div className={theme.indicators.wrapper}>
          {items?.map((_, index) => (
            <button
              key={index}
              className={twMerge(theme.indicators.base, theme.indicators.active[index === activeItem ? 'on' : 'off'])}
              onClick={navigateTo(index)}
              data-testid="carousel-indicator"
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {items && (
        <>
          <div className={theme.root.leftControl}>
            <button
              className="group"
              data-testid="carousel-left-control"
              onClick={navigateTo(activeItem - 1)}
              type="button"
              aria-label="Previous slide"
            >
              {leftControl ?? <DefaultLeftControl theme={customTheme} />}
            </button>
          </div>
          <div className={theme.root.rightControl}>
            <button
              className="group"
              data-testid="carousel-right-control"
              onClick={navigateTo(activeItem + 1)}
              type="button"
              aria-label="Next slide"
            >
              {rightControl ?? <DefaultRightControl theme={customTheme} />}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

const DefaultLeftControl: FC<DefaultLeftRightControlProps> = ({ theme: customTheme = {} }) => {
  const theme = mergeDeep(getTheme().carousel, customTheme)
  return (
    <span className={theme.control.base}>
      <HiOutlineChevronLeft className={theme.control.icon} />
    </span>
  )
}

const DefaultRightControl: FC<DefaultLeftRightControlProps> = ({ theme: customTheme = {} }) => {
  const theme = mergeDeep(getTheme().carousel, customTheme)
  return (
    <span className={theme.control.base}>
      <HiOutlineChevronRight className={theme.control.icon} />
    </span>
  )
}

Carousel.displayName = 'Carousel'
