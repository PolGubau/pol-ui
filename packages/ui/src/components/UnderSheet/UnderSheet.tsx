"use client"

import { PropsWithChildren } from "react"
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { TbChevronUp } from "react-icons/tb"

const EXPANDED = 600
const COLLAPSED = EXPANDED / 1.5
const TOGGLE_HEIGHT_THRESHOLD = (EXPANDED + COLLAPSED) / 2

export interface UnderSheetProps extends PropsWithChildren {
  content: JSX.Element
  trigger?: JSX.Element
}

export const UnderSheet = (props: UnderSheetProps) => {
  const { content, trigger = <TbChevronUp /> } = props
  const contentHeight = useMotionValue(EXPANDED)
  const contentAnimationControls = useAnimation()

  //
  const heightTransitionSettings = {
    duration: 0.5,
    ease: [0.32, 0.72, 0, 1],
  }
  const contentScale = useTransform(
    contentHeight,
    [EXPANDED, COLLAPSED],
    [1, 0.95]
  )
  const contentRoundedCorners = useTransform(
    contentHeight,
    [EXPANDED, COLLAPSED],
    [20, 10]
  )
  const contentPaddingTop = useTransform(
    contentHeight,
    [EXPANDED, COLLAPSED],
    [0, -50]
  )
  const contentMarginTop = useTransform(
    contentHeight,
    [EXPANDED, COLLAPSED],
    [0, 10]
  )
  const actionAreaHeight = useTransform(
    contentHeight,
    [EXPANDED, COLLAPSED],
    [92, 20]
  )
  const actionButtonSize = useTransform(
    contentHeight,
    [EXPANDED, COLLAPSED],
    [28, 4]
  )
  const actionIconScale = useTransform(
    contentHeight,
    [EXPANDED, COLLAPSED],
    [1, 0]
  )
  const onDragAdjustHeight = (_event: any, info: { delta: { y: number } }) => {
    let newHeight = contentHeight.get() + info.delta.y

    if (newHeight > COLLAPSED && newHeight <= EXPANDED) {
      contentHeight.set(newHeight)
    }
  }
  const onDragEndAdjustHeight = async () => {
    if (contentHeight.get() === COLLAPSED || contentHeight.get() === EXPANDED) {
      return
    }
    const finalHeight =
      contentHeight.get() < TOGGLE_HEIGHT_THRESHOLD ? COLLAPSED : EXPANDED
    await contentAnimationControls.start({
      height: finalHeight,
      transition: heightTransitionSettings,
    })
  }
  const openSheet = () => {
    if (contentHeight.get() === COLLAPSED) {
      return
    }
    contentAnimationControls.start({
      height: COLLAPSED,
      transition: heightTransitionSettings,
    })
  }
  const closeSheet = () => {
    if (!(contentHeight.get() === COLLAPSED)) {
      return
    }
    contentAnimationControls.start({
      height: EXPANDED,
      transition: heightTransitionSettings,
    })
  }
  const toggleSheet = () => {
    if (contentHeight.get() === COLLAPSED) {
      closeSheet()
    } else {
      openSheet()
    }
  }

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        height: EXPANDED,
      }}
    >
      <motion.div
        className="relative overflow-hidden bg-secondary-50 dark:bg-secondary-900 p-4"
        style={{
          height: contentHeight,
          scale: contentScale,
          marginTop: contentMarginTop,
          borderRadius: contentRoundedCorners,
        }}
        animate={contentAnimationControls}
      >
        <motion.div
          style={{
            paddingTop: contentPaddingTop,
          }}
          className="overflow-y-auto"
        >
          {props.children}
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 flex w-full justify-center bg-gradient-to-t from-secondary-50 dark:from-secondary-900"
          style={{
            height: actionAreaHeight,
          }}
          animate={contentAnimationControls}
        >
          <motion.div
            drag="y"
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            dragElastic={0}
            dragMomentum={false}
            onDrag={onDragAdjustHeight}
            onDragEnd={onDragEndAdjustHeight}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileDrag={{ cursor: "grabbing" }}
            className="flex h-full w-full items-center justify-center"
          >
            <motion.button
              onClick={toggleSheet}
              className="z-10 flex items-center justify-center rounded-lg px-2 transition-colors"
              style={{
                height: actionButtonSize,
              }}
              animate={contentAnimationControls}
            >
              <motion.div
                style={{
                  scaleY: actionIconScale,
                }}
              >
                {trigger}
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {content}
    </div>
  )
}
