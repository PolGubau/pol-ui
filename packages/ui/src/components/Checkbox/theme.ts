import type { ColorsType } from "../../types";

export interface CheckboxTheme {
  base: string;
  color: ColorsType;
  before: string;
  floating: {
    base: string;
    svg: string;
  };
  check: {
    base: string;
    color: ColorsType;
  };
}

export const checkboxTheme: CheckboxTheme = {
  base: "peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border checked:border-none transition-all ",
  before:
    "before:content[''] before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-secondary-500 before:opacity-0 before:transition-opacity hover:before:opacity-10",
  color: {
    primary: "checked:bg-primary-700 hover:before:bg-primary border-primary",
    secondary: "checked:bg-secondary-700 hover:before:bg-secondary border-secondary",
    error: "checked:bg-error-700 hover:before:bg-error border-error",
    info: "checked:bg-info-700 hover:before:bg-info border-info",
    success: "checked:bg-success-700 hover:before:bg-success border-success",
    warning: "checked:bg-warning-700 hover:before:bg-warning border-warning",
  },
  floating: {
    base: " w-5 h-5 absolute z-10 pointer-events-none  text-white p-1",
    svg: "w-full h-full",
  },
  check: {
    base: "absolute h-5 w-5 p-[2px] transition-opacity opacity-0 pointer-events-none  peer-checked:opacity-100",
    color: {
      primary: "text-primary-50",
      secondary: "text-secondary-50",
      error: "text-error-50",
      info: "text-info-50",
      success: "text-success-50",
      warning: "text-warning-50",
    },
  },
};
