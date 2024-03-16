'use client'

import type { FC, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { TbCalendar, TbArrowLeft, TbArrowRight, TbTrash } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import { Input, type InputTheme, type InputProps } from '../Input'
import { DatepickerContext } from './DatepickerContext'
import type { DatepickerViewsDaysTheme } from './Views/Days'
import { DatepickerViewsDays } from './Views/Days'
import { DatepickerViewsDecades, type DatepickerViewsDecadesTheme } from './Views/Decades'
import { DatepickerViewsMonth, type DatepickerViewsMonthsTheme } from './Views/Months'
import { DatepickerViewsYears, type DatepickerViewsYearsTheme } from './Views/Years'
import {
  Views,
  WeekStart,
  addMonths,
  addYears,
  getFirstDateInRange,
  getFormattedDate,
  isDateEqual,
  startOfYearPeriod,
} from './helpers'
import { Button } from '../Button'
import { AnimatePresence, motion } from 'framer-motion'

export interface DatepickerTheme {
  root: {
    base: string
    input?: InputTheme
  }
  popup: DatepickerPopupTheme
  views: {
    days: DatepickerViewsDaysTheme
    months: DatepickerViewsMonthsTheme
    years: DatepickerViewsYearsTheme
    decades: DatepickerViewsDecadesTheme
  }
}

export interface DatepickerPopupTheme {
  root: {
    base: string
    inline: string
    inner: string
  }
  header: {
    base: string
    title: string
    selectors: {
      base: string
      button: {
        base: string
        prev: string
        next: string
        view: string
      }
    }
  }
  view: {
    base: string
  }
  footer: {
    base: string
    button: {
      base: string
      today: string
      clear: string
    }
  }
}

export interface DatepickerProps extends Omit<InputProps, 'theme'> {
  open?: boolean
  inline?: boolean
  autoHide?: boolean
  showClearButton?: boolean
  labelClearButton?: string
  clearIcon?: ReactNode
  showTodayButton?: boolean
  todayIcon?: ReactNode
  labelTodayButton?: string
  defaultDate?: Date
  minDate?: Date
  maxDate?: Date
  language?: string
  weekStart?: WeekStart
  theme?: DeepPartial<DatepickerTheme>
  onSelectedDateChanged?: (date: Date) => void
}

/**
 * 
 * @name Datepicker
 * @description The Datepicker component is used to select a date, it can be used as a popup or inline. You can also set the default date, min and max date, and the language.
 * @param {boolean} props.open - The open state of the datepicker
 * @param {boolean} props.inline - The inline state of the datepicker
 * @param {boolean} props.autoHide - The autoHide state of the datepicker
 * @param {boolean} props.showClearButton - The showClearButton state of the datepicker
 * @param {string} props.labelClearButton - The labelClearButton state of the datepicker
 * @param {ReactNode} props.clearIcon - The clearIcon state of the datepicker
 * @param {boolean} props.showTodayButton - The showTodayButton state of the datepicker
 * @param {ReactNode} props.todayIcon - The todayIcon state of the datepicker
 * @param {string} props.labelTodayButton - The labelTodayButton state of the datepicker
 * @param {Date} props.defaultDate - The defaultDate state of the datepicker
 * @param {Date} props.minDate - The minDate state of the datepicker
 * @param {Date} props.maxDate - The maxDate state of the datepicker
 * 
 * @returns React.FC<DatepickerProps> 
 */
export const Datepicker: FC<DatepickerProps> = ({
  title,
  open,
  inline = false,
  autoHide = true,
  showClearButton = true,
  labelClearButton = 'Clear',
  clearIcon = <TbTrash />,
  showTodayButton = true,
  todayIcon = <TbCalendar />,
  labelTodayButton = 'Today',
  defaultDate = new Date(),
  minDate = new Date(1900, 0, 1),
  maxDate = new Date(2100, 0, 1),
  language = 'en',
  weekStart = WeekStart.Monday,
  className,
  theme: customTheme = {},
  onSelectedDateChanged,
  ...props
}) => {
  const theme = mergeDeep(getTheme().datepicker, customTheme)

  // Default date should respect the range
  defaultDate = getFirstDateInRange(defaultDate, minDate, maxDate)

  const [isOpen, setIsOpen] = useState(open)
  const [view, setView] = useState<Views>(Views.Days)
  // selectedDate is the date selected by the user
  const [selectedDate, setSelectedDate] = useState<Date>(defaultDate)
  // viewDate is only for navigation
  const [viewDate, setViewDate] = useState<Date>(defaultDate)

  const inputRef = useRef<HTMLInputElement>(null)
  const datepickerRef = useRef<HTMLDivElement>(null)

  // Triggers when user select the date
  const changeSelectedDate = (date: Date, useAutohide: boolean) => {
    setSelectedDate(date)

    if (onSelectedDateChanged) {
      onSelectedDateChanged(date)
    }

    if (autoHide && view === Views.Days && useAutohide && !inline) {
      setIsOpen(false)
    }
  }

  // Render the DatepickerView* node
  const renderView = (type: Views): ReactNode => {
    switch (type) {
      case Views.Decades:
        return <DatepickerViewsDecades theme={theme.views.decades} />
      case Views.Years:
        return <DatepickerViewsYears theme={theme.views.years} />
      case Views.Months:
        return <DatepickerViewsMonth theme={theme.views.months} />
      case Views.Days:
      default:
        return <DatepickerViewsDays theme={theme.views.days} />
    }
  }

  // Coordinate the next view based on current view (statemachine-like)
  const getNextView = (): Views => {
    switch (view) {
      case Views.Days:
        return Views.Months
      case Views.Months:
        return Views.Years
      case Views.Years:
        return Views.Decades
    }
    return view
  }

  // Get the view title based on active View
  const getViewTitle = (): string => {
    switch (view) {
      case Views.Decades:
        return `${startOfYearPeriod(viewDate, 100)} - ${startOfYearPeriod(viewDate, 100) + 90}`
      case Views.Years:
        return `${startOfYearPeriod(viewDate, 10)} - ${startOfYearPeriod(viewDate, 10) + 9}`
      case Views.Months:
        return getFormattedDate(language, viewDate, { year: 'numeric' })
      case Views.Days:
      default:
        return getFormattedDate(language, viewDate, { month: 'long', year: 'numeric' })
    }
  }

  // Navigate to prev/next for given view's date by value
  const getViewDatePage = (view: Views, date: Date, value: number): Date => {
    switch (view) {
      case Views.Days:
        return new Date(addMonths(date, value))
      case Views.Months:
        return new Date(addYears(date, value))
      case Views.Years:
        return new Date(addYears(date, value * 10))
      case Views.Decades:
        return new Date(addYears(date, value * 100))
      default:
        return new Date(addYears(date, value * 10))
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedInsideDatepicker = datepickerRef?.current?.contains(event.target as Node)
      const clickedInsideInput = inputRef?.current?.contains(event.target as Node)

      if (!clickedInsideDatepicker && !clickedInsideInput) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [inputRef, datepickerRef, setIsOpen])

  return (
    <AnimatePresence mode="wait">
      <DatepickerContext.Provider
        value={{
          theme,
          language,
          minDate,
          maxDate,
          weekStart,
          isOpen,
          setIsOpen,
          view,
          setView,
          viewDate,
          setViewDate,
          selectedDate,
          setSelectedDate,
          changeSelectedDate,
        }}
      >
        <motion.div className={twMerge(theme.root.base, className)}>
          {!inline && (
            <Input
              theme={theme.root.input}
              leftComponent={<TbCalendar />}
              ref={inputRef}
              onFocus={() => {
                if (!isDateEqual(viewDate, selectedDate)) {
                  setViewDate(selectedDate)
                }
                setIsOpen(true)
              }}
              value={selectedDate && getFormattedDate(language, selectedDate)}
              readOnly
              {...props}
            />
          )}
          {(isOpen || inline) && (
            <motion.div
              initial={!inline && { opacity: 0.5, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.1 } }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              ref={datepickerRef}
              className={twMerge(theme.popup.root.base, inline && theme.popup.root.inline)}
            >
              <div className={theme.popup.root.inner}>
                <div className={theme.popup.header.base}>
                  {title && <div className={theme.popup.header.title}>{title}</div>}
                  <div className={theme.popup.header.selectors.base}>
                    <Button
                      type="button"
                      size={'sm'}
                      className={twMerge(
                        theme.popup.header.selectors.button.base,
                        theme.popup.header.selectors.button.prev,
                      )}
                      onClick={() => setViewDate(getViewDatePage(view, viewDate, -1))}
                    >
                      <TbArrowLeft />
                    </Button>
                    <Button
                      type="button"
                      size={'sm'}
                      className={twMerge(
                        theme.popup.header.selectors.button.base,
                        theme.popup.header.selectors.button.view,
                      )}
                      onClick={() => setView(getNextView())}
                    >
                      {getViewTitle()}
                    </Button>
                    <Button
                      size={'sm'}
                      type="button"
                      className={twMerge(
                        theme.popup.header.selectors.button.base,
                        theme.popup.header.selectors.button.next,
                      )}
                      onClick={() => setViewDate(getViewDatePage(view, viewDate, 1))}
                    >
                      <TbArrowRight />
                    </Button>
                  </div>
                </div>
                <div className={theme.popup.view.base}>{renderView(view)}</div>
                {(showClearButton || showTodayButton) && (
                  <div className={theme.popup.footer.base}>
                    {showTodayButton && (
                      <Button
                        type="button"
                        className={twMerge(theme.popup.footer.button.base, theme.popup.footer.button.today)}
                        onClick={() => {
                          const today = new Date()
                          changeSelectedDate(today, true)
                          setViewDate(today)
                        }}
                      >
                        {todayIcon}
                        {labelTodayButton}
                      </Button>
                    )}
                    {showClearButton && (
                      <Button
                        type="button"
                        outline
                        className={twMerge(theme.popup.footer.button.base, theme.popup.footer.button.clear)}
                        onClick={() => {
                          changeSelectedDate(defaultDate, true)
                          if (defaultDate) {
                            setViewDate(defaultDate)
                          }
                        }}
                      >
                        {clearIcon}
                        {labelClearButton}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </DatepickerContext.Provider>
    </AnimatePresence>
  )
}

Datepicker.displayName = 'Datepicker'
