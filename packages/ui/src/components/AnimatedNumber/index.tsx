import * as React from "react"
import { motion } from "framer-motion"

import InternalMotionNumber, { type MotionNumberProps } from "./MotionNumber"

export * from "./MotionNumber"

const AnimatedNumber = React.forwardRef<HTMLSpanElement, MotionNumberProps>(
  function MotionNumber(props, ref) {
    return <InternalMotionNumber ref={ref} motion={motion} {...props} />
  }
)

export default AnimatedNumber
