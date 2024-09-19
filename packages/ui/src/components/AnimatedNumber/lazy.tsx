import * as React from "react"
import { m } from "framer-motion"

import InternalMotionNumber, { type MotionNumberProps } from "./MotionNumber"

export * from "./MotionNumber"

const MotionNumber = React.forwardRef<HTMLSpanElement, MotionNumberProps>(
  function MotionNumber(props, ref) {
    return <InternalMotionNumber ref={ref} motion={m} {...props} />
  }
)

export default MotionNumber
