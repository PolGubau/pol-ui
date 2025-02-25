"use client";

import { useState } from "react";

import { useCalendar } from "../../helpers/dates";
import { IconButton } from "../IconButton";
import Day from "./components/Day";
import WeekDays from "./components/Weekdays";

export const Calendar = () => {
  const { days, month, nextMonth, prevMonth } = useCalendar();
  const [selected, setSelected] = useState(new Date());
  const monthNames = [
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
  ];
  const monthName = monthNames[month.getMonth()];

  return (
    <section className="flex h-full flex-col gap-2">
      <header className="flex items-center justify-between gap-1">
        <IconButton onClick={prevMonth}>&lt;</IconButton>
        {monthName} {month.getFullYear()}
        <IconButton onClick={nextMonth}>&gt;</IconButton>
      </header>

      <WeekDays />
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <Day key={day.ISODateString} day={day} selected={selected} setSelected={setSelected} />
        ))}
      </div>
    </section>
  );
};
