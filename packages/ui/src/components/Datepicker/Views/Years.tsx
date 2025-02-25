"use client";

import type { FC } from "react";
import { twMerge } from "tailwind-merge";

import { mergeDeep } from "../../../helpers/merge-deep/merge-deep";
import type { IBoolean } from "../../../types";
import { Button } from "../../Button";
import { useDatePickerContext } from "../DatepickerContext";
import { Views, isDateEqual, isDateInRange, startOfYearPeriod } from "../helpers";

export interface DatepickerViewsYearsTheme {
  items: {
    base: string;
    item: {
      base: string;
      disabled: string;
      selected: IBoolean;
    };
  };
}

export interface DatepickerViewsYearsProps {
  theme?: DatepickerViewsYearsTheme;
}

export const DatepickerViewsYears: FC<DatepickerViewsYearsProps> = ({ theme: customTheme = {} }) => {
  const { theme: rootTheme, selectedDate, minDate, maxDate, viewDate, setViewDate, setView } = useDatePickerContext();

  const theme = mergeDeep(rootTheme.views.years, customTheme);

  return (
    <div className={theme.items.base}>
      {[...new Array(12)].map((_year, index) => {
        const first = startOfYearPeriod(viewDate, 10);
        const year = first - 1 + index * 1;
        const newDate = new Date(viewDate.getTime());
        newDate.setFullYear(year);

        const isSelected = isDateEqual(selectedDate, newDate);
        const isDisabled = !isDateInRange(newDate, minDate, maxDate);

        return (
          <Button
            variant={"ghost"}
            disabled={isDisabled}
            key={_year}
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

              setViewDate(newDate);
              setView(Views.Months);
            }}
          >
            {year}
          </Button>
        );
      })}
    </div>
  );
};
