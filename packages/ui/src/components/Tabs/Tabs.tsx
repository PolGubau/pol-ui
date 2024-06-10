'use client'

import { useId, useState } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { getTheme } from '../../theme-store'
import type { TabsTheme } from './theme'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'

interface Tab {
  name: string
  content?: React.ReactNode
  disabled?: boolean
}

export enum TabMode {
  underlined = 'underlined',
  contained = 'contained',
}
export type TabModeType = keyof typeof TabMode

export interface TabsProps {
  tabs: Tab[]
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
  contentClassName?: string
  hasMotion?: boolean
  hasNavMotion?: boolean
  mode?: TabModeType
  theme?: Partial<TabsTheme>
}

export const Tabs: React.FC<TabsProps> = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  hasMotion = false,
  hasNavMotion = true,
  mode = TabMode.underlined,
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
  const id = useId()
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
              setHovering(true)
            }}
            onBlur={() => {
              setHovering(false)
            }}
            onMouseEnter={() => { setHovering(true); }}
            onMouseLeave={() => { setHovering(false); }}
            className={twMerge(
              theme.navItem.base,
              tab.disabled && theme.disabled,

              tabClassName,
            )}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {active.name === tab.name && (
              <motion.div
                layoutId={hasNavMotion ? id : undefined}
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                className={twMerge(
                  theme.navItem.marker.base,
                  theme.navItem.marker.active.on,
                  theme.navItem.marker.mode[mode],
                  activeTabClassName,
                )}
              />
            )}

            <span className={twMerge(theme.navItem.text)}>{tab.name}</span>
          </button>
        ))}
      </div>
      <TabContent
        content={active.content}
        key={active.name}
        hasMotion={hasMotion}
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
  hasMotion = false,
}: {
  className?: string
  content: Tab['content']
  hovering?: boolean
  hasMotion?: boolean
}) => {
  return (
    <motion.div
      className={twMerge(
        'relative w-full h-full transition-all ',
        hovering && hasMotion && 'opacity-90 scale-95',
        className,
      )}
    >
      {content}
    </motion.div>
  )
}
