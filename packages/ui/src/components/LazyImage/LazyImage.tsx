import { useState } from "react"
import { MotionProps, motion } from "framer-motion"

import { cn } from "../../helpers"

export type LazyImageProps = React.HTMLAttributes<HTMLImageElement> &
  MotionProps & {
    src: string
    initialHeight?: string
  }

export function LazyImage(props: LazyImageProps) {
  const { initialHeight = "8rem" } = props

  const [imageLoading, setImageLoading] = useState(true)
  const [pulsing, setPulsing] = useState(true)

  const imageLoaded = () => {
    setImageLoading(false)
    setTimeout(() => setPulsing(false), 600)
  }

  return (
    <div
      className={cn(`${pulsing ? "pulse" : ""}`, props.className)}
      style={{ background: "#ccc" }}
    >
      <motion.img
        {...props}
        initial={{ height: initialHeight, opacity: 0 }}
        style={{ height: imageLoading ? "6rem" : "auto" }}
        animate={{
          height: imageLoading ? initialHeight : "auto",
          opacity: imageLoading ? 0 : 1,
        }}
        transition={{
          height: { delay: 0, duration: 0.4 },
          opacity: { delay: 0.5, duration: 0.4 },
        }}
        onLoad={imageLoaded}
        width="100%"
      />
    </div>
  )
}
