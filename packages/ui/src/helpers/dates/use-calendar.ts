import { type Dispatch, type SetStateAction, useCallback, useState } from "react";

import { DayName, type Month, addMonths, getDaysOfMonth, setMonth, setYear, startOfMonth } from "./utils";

export interface UseCalendarReturn extends Month {
  readonly month: Date;
  setMonth: Dispatch<SetStateAction<Date>>;
  setStartOfWeek: Dispatch<SetStateAction<DayName>>;
  nextMonth(): void;
  prevMonth(): void;
  setMonthOnly(month: number): void;
  setYearOnly(year: number): void;
}

export function useCalendar(month = new Date(), weekStartsOn?: DayName): UseCalendarReturn {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(month));
  const [startOfWeek, setStartOfWeek] = useState(weekStartsOn || DayName.MONDAY);
  const { days, daysOfWeek } = getDaysOfMonth(currentMonth, startOfWeek);

  const nextMonth = useCallback(() => {
    setCurrentMonth((month) => startOfMonth(addMonths(month, 1)));
  }, []);

  const prevMonth = useCallback(() => {
    setCurrentMonth((month) => startOfMonth(addMonths(month, -1)));
  }, []);

  const setMonthOnly = useCallback((m: number) => {
    setCurrentMonth((month) => startOfMonth(setMonth(month, m)));
  }, []);

  const setYearOnly = useCallback((year: number) => {
    setCurrentMonth((month) => startOfMonth(setYear(month, year)));
  }, []);

  return {
    days,
    daysOfWeek,
    setMonth: setCurrentMonth,
    month: currentMonth,
    setStartOfWeek,
    nextMonth,
    prevMonth,
    setMonthOnly,
    setYearOnly,
  };
}
