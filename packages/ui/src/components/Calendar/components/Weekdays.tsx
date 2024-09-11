import { getWeekDays } from "../../Datepicker/helpers"
import { Weekday } from "./Weekday"

const WeekDays = () => {
  const days = getWeekDays()
  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map((day) => (
        <Weekday key={day}>{day}</Weekday>
      ))}
    </div>
  )
}

export default WeekDays
