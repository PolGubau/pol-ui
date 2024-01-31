import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../../helpers/merge-deep'
import { useDatePickerContext } from '../DatepickerContext'
import { Views, getFormattedDate, isDateEqual, isDateInRange } from '../helpers'
import { Button } from '../../Button'
import type { IBoolean } from '../../../types'

export interface DatepickerViewsMonthsTheme {
  items: {
    base: string
    item: {
      base: string
      selected: IBoolean
      disabled: string
    }
  }
}

export interface DatepickerViewsMonthsProps {
  theme?: DatepickerViewsMonthsTheme
}

export const DatepickerViewsMonth: FC<DatepickerViewsMonthsProps> = ({ theme: customTheme = {} }) => {
  const {
    theme: rootTheme,
    minDate,
    maxDate,
    selectedDate,
    viewDate,
    language,
    setViewDate,
    setView,
  } = useDatePickerContext()

  const theme = mergeDeep(rootTheme.views.months, customTheme)

  return (
    <div className={theme.items.base}>
      {[...Array(12)].map((_month, index) => {
        const newDate = new Date(viewDate.getTime())
        newDate.setMonth(index)
        const month = getFormattedDate(language, newDate, { month: 'short' })

        const isSelected = isDateEqual(selectedDate, newDate)
        const isDisabled = !isDateInRange(newDate, minDate, maxDate)

        return (
          <Button
            disabled={isDisabled}
            key={index}
            type="button"
            className={twMerge(
              theme.items.item.base,
              theme.items.item.selected[isSelected ? 'on' : 'off'],

              isDisabled && theme.items.item.disabled,
            )}
            onClick={() => {
              if (isDisabled) return

              setViewDate(newDate)
              setView(Views.Days)
            }}
          >
            {month}
          </Button>
        )
      })}
    </div>
  )
}
