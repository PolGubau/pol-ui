import React, { HTMLAttributes, useRef, useState } from "react"

import { cn } from "../../helpers"
import { Button, ButtonProps } from "../Button"

export interface MagneticButtonProps extends ButtonProps {
  /**
   * @name Freedom
   * @description How much attracted the background will be to your cursor
   * @default 1
   */
  freedom?: number

  magnet?: HTMLAttributes<HTMLDivElement>
}
/**
 * @name Magnetic Button
 *
 * @description A button attracted by your cursor.
 *
 * @example ```
 * <MagneticButton>Content</MagneticButton>
 * ```
 */

export const MagneticButton = (props: MagneticButtonProps) => {
  const { freedom = 1 } = props
  const ref = useRef<HTMLButtonElement>(null)

  const [hoverPosition, setHoverPosition] = useState({
    x: 0,
    y: 0,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY, currentTarget } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const x = (clientX - left - width / 2) * (freedom / 6)
    const y = (clientY - top - height / 2) * (freedom / 6)

    setHoverPosition({ x, y })
  }

  const onMouseOut = () => {
    setHoverPosition({ x: 0, y: 0 })
  }

  return (
    <>
      <div className="relative group">
        <Button
          variant={"ghost"}
          ref={ref}
          className={cn("relative hover:bg-transparent z-10", props.className)}
          onMouseMove={handleMouseMove}
          onMouseLeave={onMouseOut}
          {...props}
        />
        <div
          {...props.magnet}
          className={cn(
            "absolute bottom-0 left-0 h-full w-full rounded-lg bg-secondary/60 transition-[opacity,transform] opacity-0 group-hover:opacity-100",
            props.magnet?.className
          )}
          style={{
            transform: `translate(${hoverPosition.x}px, ${hoverPosition.y}px)`,
          }}
        />
      </div>
    </>
  )
}
