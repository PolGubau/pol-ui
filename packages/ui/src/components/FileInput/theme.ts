import type { ColorsType, MainSizesType } from "../../types";

export interface FileInputTheme {
  root: {
    base: string;
  };
  field: {
    base: string;
    input: {
      base: string;
      colors: ColorsType;
      size: MainSizesType;
    };
  };
}

export const fileInputTheme: FileInputTheme = {
  root: {
    base: "flex",
  },
  field: {
    base: "relative w-full",
    input: {
      base: "rounded-lg  file:rounded-lg overflow-hidden flex w-full disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer file:cursor-pointer file:z-50 file:border-none file:px-4 file:py-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary-50 outline-none focus:outline-none transition-all",
      size: {
        xs: "sm:text-xs",
        sm: "sm:text-sm",
        md: "sm:text-md",
        lg: "sm:text-lg",
        xl: "sm:text-xl",
      },
      colors: {
        info: "file:bg-info/60 file:text-info-900 focus:ring-info",
        error: "file:bg-error/60 file:text-error-900 focus:ring-error",
        success: "file:bg-success/60 file:text-success-900 focus:ring-success",
        warning: "file:bg-warning/60 file:text-warning-900 focus:ring-warning",
        primary: "file:bg-primary/60 file:text-primary-900 focus:ring-primary",
        secondary: "file:bg-secondary/60 file:text-secondary-900 focus:ring-secondary",
      },
    },
  },
};
