import React, { useId, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '../../helpers'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export interface ScrollImageProps extends React.SVGProps<SVGImageElement> {
  className?: string
  image: string
  debug?: boolean
  ease?: EaseString
  baseFrequency?: number
  displacementScale?: number
  numOctaves?: number
  maskXPercent?: number
  maskYPercent?: number
  initialRadius?: number
  speed?: number
}

/**
 * @name ScrollImage
 *
 * @description A component that creates a scroll effect on an image using SVG filters. You need to provide the height of the component using tailwind or css.
 *
 * @returns JSX.Element
 *
 * @example ```
 * <ScrollImage
 *  className="h-[600px]"
 *  image="https://image.lexica.art/full_webp/4aa6b4a9-a08d-4fa1-8979-0c4cd1c3c397"
 * />
 * ```
 *
 *
 */
const ScrollImage = ({
  debug = false,
  ease = 'power1.inOut',
  image,
  baseFrequency = 2,
  displacementScale = 50,
  numOctaves = 3,
  maskXPercent = 50,
  maskYPercent = 50,
  speed = 0.5,
  initialRadius = 0,
  ...props
}: ScrollImageProps) => {
  const maskId = useId()
  const filterId = useId()
  const main = useRef<SVGSVGElement>(null)
  useGSAP(
    () => {
      gsap.to('#item', {
        r: '100%',
        ease,
        scrollTrigger: {
          trigger: '#item',
          start: 'clamp(top bottom+=0%)',
          scrub: speed,
          markers: debug,
        },
      })
    },
    { scope: main },
  )
  const baseClassName = 'w-full h-full'
  return (
    <svg
      ref={main}
      id="item"
      className={cn(baseClassName, props.className)}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency / 100}
            numOctaves={numOctaves}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={displacementScale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <mask id={maskId}>
          <circle
            id={'item'}
            cx={`${maskXPercent}%`}
            cy={`${maskYPercent}%`}
            r={initialRadius}
            fill="white"
            style={{ filter: `url(#${filterId})` }}
          />
        </mask>
      </defs>

      <image xlinkHref={image} {...props} mask={`url(#${maskId})`} className={baseClassName} />
    </svg>
  )
}

export default ScrollImage

type EaseString =
  | 'none'
  | 'power1'
  | 'power1.in'
  | 'power1.out'
  | 'power1.inOut'
  | 'power2'
  | 'power2.in'
  | 'power2.out'
  | 'power2.inOut'
  | 'power3'
  | 'power3.in'
  | 'power3.out'
  | 'power3.inOut'
  | 'power4'
  | 'power4.in'
  | 'power4.out'
  | 'power4.inOut'
  | 'back'
  | 'back.in'
  | 'back.out'
  | 'back.inOut'
  | 'bounce'
  | 'bounce.in'
  | 'bounce.out'
  | 'bounce.inOut'
  | 'circ'
  | 'circ.in'
  | 'circ.out'
  | 'circ.inOut'
  | 'elastic'
  | 'elastic.in'
  | 'elastic.out'
  | 'elastic.inOut'
  | 'expo'
  | 'expo.in'
  | 'expo.out'
  | 'expo.inOut'
  | 'sine'
  | 'sine.in'
  | 'sine.out'
  | 'sine.inOut'
  | ({} & string)
