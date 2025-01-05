import type { FC } from "react";
import { twMerge } from "tailwind-merge";

import { addDays } from "@/helpers/dates";
import { mergeDeep } from "../../../helpers/merge-deep/merge-deep";
import type { DeepPartial, IBoolean } from "../../../types/types";
import { Button } from "../../Button";
import { useDatePickerContext } from "../DatepickerContext";
import { getFirstDayOfTheMonth, getFormattedDate, getWeekDays, isDateEqual, isDateInRange } from "../helpers";

export interface DatepickerViewsDaysTheme {
  header: {
    base: string;
    title: string;
  };
  items: {
    base: string;
    item: {
      base: string;
      selected: IBoolean;
      disabled: string;
    };
  };
}

export interface DatepickerViewsDaysProps {
  theme?: DeepPartial<DatepickerViewsDaysTheme>;
}

export const DatepickerViewsDays: FC<DatepickerViewsDaysProps> = ({ theme: customTheme = {} }) => {
  const {
    theme: rootTheme,
    weekStart,
    minDate,
    maxDate,
    viewDate,
    selectedDate,
    changeSelectedDate,
    language,
  } = useDatePickerContext();

  const theme = mergeDeep(rootTheme.views.days, customTheme);

  const weekDays = getWeekDays(language, weekStart);
  const startDate = getFirstDayOfTheMonth(viewDate, weekStart);

  return (
    <>
      <div className={theme.header.base}>
        {weekDays.map((day) => (
          <span key={day} className={theme.header.title}>
            {day}
          </span>
        ))}
      </div>
      <div className={theme.items.base}>
        {[...new Array(42)].map((_date, index) => {
          const currentDate = addDays(startDate, index - 1);
          const day = getFormattedDate(language, currentDate, {
            day: "numeric",
          });

          const isSelected = isDateEqual(selectedDate, currentDate);
          const isDisabled = !isDateInRange(currentDate, minDate, maxDate);

          return (
            <Button
              variant={"ghost"}
              disabled={isDisabled}
              key={_date.toString()}
              type="button"
              className={twMerge(
                theme.items.item.base,
                theme.items.item.selected[isSelected ? "on" : "off"],
                isDisabled && theme.items.item.disabled,
              )}
              onClick={() => {
                if (isDisabled) {
                  return;
                }

                changeSelectedDate(currentDate, true);
              }}
            >
              {day}
            </Button>
          );
        })}
      </div>
    </>
  );
};
