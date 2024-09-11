import { useState } from "react"

import { useCalendar } from "../../helpers/dates"
import { IconButton } from "../IconButton"
import Day from "./components/Day"
import WeekDays from "./components/Weekdays"

export interface CalendarProps {}

export const Calendar = () => {
  const { days, month, nextMonth, prevMonth } = useCalendar()
  const [selected, setSelected] = useState(new Date())
  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const monthName = MONTH_NAMES[month.getMonth()]

  return (
    <section className="flex flex-col gap-2 h-full">
      <header className="flex gap-1 items-center justify-between">
        <IconButton onClick={prevMonth}>&lt;</IconButton>
        {monthName} {month.getFullYear()}
        <IconButton onClick={nextMonth}>&gt;</IconButton>
      </header>

      <WeekDays />
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => (
          <Day
            key={i}
            day={day}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </section>
  )
}
