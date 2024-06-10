'use client'

import { createContext, useContext } from 'react'
import type { DatepickerTheme } from './Datepicker'
import type { Views, WeekStart } from './helpers'

interface DatepickerContextProps {
  theme: DatepickerTheme
  language: string
  weekStart: WeekStart
  minDate?: Date
  maxDate?: Date
  isOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
  view: Views
  setView: (value: Views) => void
  selectedDate: Date
  setSelectedDate: (date: Date) => void
  changeSelectedDate: (date: Date, useAutohide: boolean) => void
  viewDate: Date
  setViewDate: (date: Date) => void
}

export const DatepickerContext = createContext<DatepickerContextProps | undefined>(undefined)

export function useDatePickerContext(): DatepickerContextProps {
  const context = useContext(DatepickerContext)

  if (!context) {
    throw new Error('useDatePickerContext should be used within the DatePickerContext provider!')
  }

  return context
}
