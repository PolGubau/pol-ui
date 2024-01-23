import React from 'react'
import { Colors } from '../PoluiProvider'
import { ColorsEnum } from '../PoluiProvider/enums'

export const DropdownContext = React.createContext<{
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>
  activeIndex: number | null
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  color: keyof Colors
}>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false,
  color: ColorsEnum.primary,
})
