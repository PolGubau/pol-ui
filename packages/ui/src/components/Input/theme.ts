import type { ColorsType, MainSizesType, OnOff } from "../../types";

/**
 * @name InputTheme
 * @description Interface for the theme of the Input component
 * @property base `string`
 * @property field `InputFieldTheme`
 * @author SUS

 */
export interface InputTheme {
  base: string;
  icon: {
    base: string;
    position: {
      left: string;
      right: string;
    };
  };
  textarea: {
    icon: string;
    null: string;
    label: string;
  };
  input: {
    base: string;
    size: MainSizesType;
    textareaSizes: MainSizesType;
    hasLeftIcon: OnOff;
  };
  label: {
    base: string;
    hasLeftContent: OnOff;
    colors: ColorsType;
    hasLeftIcon: OnOff;
  };
  field: InputFieldTheme;
  helperText: { base: string; error: string };
}

export const inputTheme: InputTheme = {
  base: "relative flex gap-1 group/input items-center w-full text-secondary-900 dark:text-secondary-50",
  icon: {
    base: "absolute top-1/2 transform -translate-y-1/2 inset- x - 0 flex items-center z-10 pointer-events-none",
    position: {
      left: "left-0 pl-3",
      right: "right-0 pr-3",
    },
  },
  textarea: {
    null: "",
    icon: "absolute pt-3 flex items-center z-10 right-0 pr-3 top-5",
    label: "peer-placeholder-shown:top-7",
  },
  input: {
    base: "bg-transparent h-full outline-none peer w-full ",
    hasLeftIcon: {
      on: "pl-[30px]",
      off: "pl-3",
    },
    size: {
      xs: "text-xs px-2 py-1.5 ",
      sm: "text-sm px-2.5 py-2 ",
      md: "text-base px-3 py-4 ",
      lg: "text-lg px-3.5 py-5 ",
      xl: "text-xl px-4 py-6 ",
    },
    textareaSizes: {
      xs: "text-xs px-2 pb-1.5 ",
      sm: "text-sm px-2.5 pb-2 ",
      md: "text-base px-3 pb-4 ",
      lg: "text-lg px-3.5 pb-5 ",
      xl: "text-xl px-4 pb-6 ",
    },
  },
  label: {
    base: "absolute text-secondary dark:text-secondary-100 transition-all duration-200 transform pointer-events-none select-none top-px left-[9px] px-1 -translate-y-1/2 text-xs group-focus-within/input:!top-px group-focus-within/input:!text-xs group-focus-within/input:!left-[9px]",

    hasLeftContent: {
      on: "",
      off: "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[1em] peer-placeholder-shown:opacity-80 dark:peer-placeholder-shown:opacity-100", // styles when the input is empty',
    },
    hasLeftIcon: {
      on: "peer-placeholder-shown:left-[27px]",
      off: "",
    },
    colors: {
      primary: "group-focus-within/input:text-primary",
      secondary: "group-focus-within:text-secondary-700 dark:group-focus-within/input:text-secondary-200",

      success: "group-focus-within/input:text-success",
      error: "group-focus-within/input:text-error text-error",
      warning: "group-focus-within/input:text-warning",
      info: "group-focus-within/input:text-info",
    },
  },

  field: {
    base: "inset-0 absolute border border-secondary rounded-xl pointer-events-none mt-[-9px] transition-color group-focus-within/input:border-2 border-opacity-60 group-hover/input:border-opacity-100",
    unfilled: "invisible peer-placeholder-shown:visible",
    filled: "visible peer-placeholder-shown:invisible",
    color: {
      primary: "group-focus-within/input:!border-primary",
      secondary: "group-focus-within/input:!border-secondary",
      success: "group-focus-within/input:!border-success",
      error: "border-error group-hover/input:!border-error group-focus-within/input:!border-error",
      warning: "group-focus-within/input:!border-warning",
      info: "group-focus-within/input:!border-info",
    },
    legend: {
      base: "ml-2 text-xs whitespace-nowrap invisible",
      unfilled: "px-0 transition-all duration-200 group-focus-within/input:max-w-full group-focus-within/input:px-1",
      static: {
        on: "px-1",
        off: "max-w-[0.01px]",
      },
      filled: "px-1 max-w-full",
    },
  },
  helperText: {
    base: "text-xs pl-2 text-secondary/70 dark:text-secondary-100 mt-1",
    error: "text-error",
  },
};

/**
 * @name InputProps
 * @description Interface for the icons of the Input component
 * @property base `string`
 * @property svg `string`
 * @property left `string`
 * @property right `string`
 */
export interface InputFieldIconTheme {
  base: string;
  svg: string;
  left: string;
  right: string;
}
/**
 * @name InputInputTheme
 * @description Interface for the theme of the input part of the Input component
 * @property base `string`
 * @property sizes `MainSizes`
 * @property colors `Colors`
 * @property label `object`
 * @property withIcon `OnOff`
 * @property withRightIcon `OnOff`
 * @property withAddon `OnOff`
 * @property withShadow `OnOff`
 
 */
export interface InputInputTheme {
  base: string;
  sizes: MainSizesType;
  colors: ColorsType;

  withIcon: OnOff;
  withRightIcon: OnOff;
  multiline: OnOff;
}
/**
 * @name InputFieldTheme
 * @description Interface for the theme of the field part of the Input component
 * @property base `string`
 * @property icons `InputFieldIconTheme`
 * @property input `InputInputTheme`
 
 */
export interface InputFieldTheme {
  base: string;
  unfilled: string;
  filled: string;
  color: ColorsType;
  legend: {
    base: string;
    static: OnOff;
    unfilled: string;
    filled: string;
  };
}
