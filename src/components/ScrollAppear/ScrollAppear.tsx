import React, { useId, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '../../helpers'

gsap.registerPlugin(useGSAP, ScrollTrigger)

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
interface ScrollAppearProps {
  className?: string
  image: string
  debug?: boolean
  ease?: EaseString
  baseFrequency?: number
}

const ScrollAppear = ({
  debug = false,
  ease = 'power1.inOut',
  image,
  baseFrequency = 2,
  ...props
}: ScrollAppearProps) => {
  const maskId = useId()
  const main = useRef<SVGSVGElement>(null)
  useGSAP(
    () => {
      gsap.to('#item', {
        r: '100%',
        ease,
        scrollTrigger: {
          trigger: '#item',
          start: 'clamp(top bottom+=0%)',

          scrub: true,
          markers: debug,
        },
      })
    },
    { scope: main },
  )
  return (
    <svg
      ref={main}
      id="item"
      className={cn('w-full h-full', props.className)}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <filter id="displacementFilter">
          <feTurbulence type="fractalNoise" baseFrequency={baseFrequency / 100} numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <mask id={maskId}>
          <circle id={'item'} cx="50%" cy="50%" r="0" fill="white" style={{ filter: `url(#displacementFilter)` }} />
        </mask>
      </defs>

      <image xlinkHref={image} mask={`url(#${maskId})`} className="w-full h-full" />
    </svg>
  )
}

export default ScrollAppear
