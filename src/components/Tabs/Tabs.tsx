'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { getTheme } from '../../theme-store'
import type { TabsTheme } from './theme'
import { mergeDeep } from '../../helpers/merge-deep'

type Tab = {
  name: string
  content?: React.ReactNode
  disabled?: boolean
}

export interface TabsProps {
  tabs: Tab[]
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
  contentClassName?: string
  hasNavMotion?: boolean
  theme?: Partial<TabsTheme>
}

export const Tabs: React.FC<TabsProps> = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  hasNavMotion = true,
  theme: customTheme = {},
}: TabsProps) => {
  if (propTabs.length === 0) throw new Error('Tabs must have at least one tab')

  const [active, setActive] = useState<Tab>(propTabs[0])

  const handleClickTab = (tab: Tab) => {
    setActive(tab)
  }

  const { tabs: baseTheme } = getTheme()
  const theme: TabsTheme = mergeDeep(baseTheme, customTheme)
  const [hovering, setHovering] = useState(false)

  return (
    <>
      <div className={twMerge(theme.base, containerClassName)}>
        {propTabs.map(tab => (
          <button
            type="button"
            disabled={tab.disabled}
            key={tab.name}
            role="tab"
            aria-selected={active.name === tab.name}
            onClick={() => {
              handleClickTab(tab)
            }}
            onFocus={() => {
              // moveSelectedTabToTop(idx)
              setHovering(true)
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={twMerge(
              theme.navItem.base,
              tab.disabled && theme.disabled,
              !hasNavMotion && active.name === tab.name && theme.navItem.marker.active.on,

              tabClassName,
            )}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {hasNavMotion && active.name === tab.name && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                className={twMerge(theme.navItem.marker.base, theme.navItem.marker.active.on, activeTabClassName)}
              />
            )}

            <span className={twMerge(theme.navItem.text)}>{tab.name}</span>
          </button>
        ))}
      </div>
      <TabContent
        content={active.content}
        key={active.name}
        hovering={hovering}
        className={twMerge('mt-8', contentClassName)}
      />
    </>
  )
}

export const TabContent = ({
  className,
  content,
  hovering,
}: {
  className?: string
  content: Tab['content']
  hovering?: boolean
}) => {
  return (
    <motion.div
      className={twMerge('relative w-full h-full transition-all ', hovering && 'opacity-75 scale-90', className)}
    >
      {content}
    </motion.div>
  )
}
