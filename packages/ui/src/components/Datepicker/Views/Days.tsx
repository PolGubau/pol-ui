import type { FC } from "react";
import { twMerge } from "tailwind-merge";

import { mergeDeep } from "../../../helpers/merge-deep/merge-deep";
import type { DeepPartial, IBoolean } from "../../../types/types";
import { Button } from "../../Button";
import { useDatePickerContext } from "../DatepickerContext";
import { addDays, getFirstDayOfTheMonth, getFormattedDate, getWeekDays, isDateEqual, isDateInRange } from "../helpers";

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
        {weekDays.map((day, index) => (
          <span key={index} className={theme.header.title}>
            {day}
          </span>
        ))}
      </div>
      <div className={theme.items.base}>
        {[...Array(42)].map((_date, index) => {
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
              key={index}
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
