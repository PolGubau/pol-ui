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
  hasMotion?: boolean
  contentClassName?: string
  hasNavMotion?: boolean
  theme?: Partial<TabsTheme>
}

export const Tabs: React.FC<TabsProps> = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  hasMotion = true,
  contentClassName,
  hasNavMotion = true,
  theme: customTheme = {},
}: TabsProps) => {
  const [active, setActive] = useState<Tab>(propTabs[0])
  const [tabs, setTabs] = useState<Tab[]>(propTabs)

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs]
    const selectedTab = newTabs.splice(idx, 1)
    newTabs.unshift(selectedTab[0])
    setTabs(newTabs)
    setActive(newTabs[0])
  }

  const { tabs: baseTheme } = getTheme()
  const theme: TabsTheme = mergeDeep(baseTheme, customTheme)
  const [hovering, setHovering] = useState(false)

  return (
    <>
      <div className={twMerge(theme.base, containerClassName)}>
        {propTabs.map((tab, idx) => (
          <button
            disabled={tab.disabled}
            key={tab.name}
            onClick={() => {
              moveSelectedTabToTop(idx)
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
        tabs={tabs}
        key={active.name}
        hovering={hovering}
        className={twMerge('mt-8', contentClassName)}
        hasMotion={hasMotion}
      />
    </>
  )
}

export const TabContent = ({
  className,
  tabs,
  hovering,
  hasMotion,
}: {
  className?: string
  tabs: Tab[]
  hovering?: boolean
  hasMotion: boolean
}) => {
  const isActive = (tab: Tab) => {
    return tab.name === tabs[0].name
  }

  return (
    <div className="relative w-full h-full ">
      {tabs.map((tab, i) => (
        <motion.div
          key={tab.name}
          layoutId={hasMotion ? tab.name : undefined}
          style={{
            scale: hasMotion ? 1 - i * 0.03 : 1,
            top: hasMotion ? (hovering ? i * -8 : 0) : 0,
            zIndex: tabs.length - i,
            opacity: hasMotion ? (i < 3 ? 1 - i * 0.4 : 0) : i === 0 ? 1 : 0,
          }}
          animate={
            hasMotion
              ? {
                  y: isActive(tab) ? [0, 20, 0] : 0,
                }
              : {}
          }
          className={twMerge(
            isActive(tab) ? 'relative flex' : 'absolute',
            'w-full h-full top-0 left-0 bg-secondary-50',
            className,
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  )
}
