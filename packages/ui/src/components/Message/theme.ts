import type { IBoolean } from "../../types";

export interface MessageTheme {
  message: {
    base: string;
    content: {
      base: string;
      mine: IBoolean;
    };
    date: string;
    arrow: {
      base: string;
      mine: IBoolean;
    };
  };
  messageGroup: {
    base: string;
    mine: IBoolean;
  };
}
export const messageTheme: MessageTheme = {
  message: {
    base: "relative px-2 flex max-w-[80%] w-fit",
    content: {
      base: "rounded-xl py-1 px-3 z-10 flex items-end gap-3 text-pretty text-black dark:text-white",
      mine: {
        on: "bg-primary-300 dark:bg-primary-800 ",
        off: "bg-secondary-300 dark:bg-secondary-800",
      },
    },

    date: "text-[0.8em] opacity-80",
    arrow: {
      base: "absolute w-0 h-0 border-r-[10px] border-t-[10px] border-l-[10px] border-transparent",
      mine: {
        on: "right-0 border-t-primary-300 dark:border-t-primary-800",
        off: "left-0 border-t-secondary-300 dark:border-t-secondary-800",
      },
    },
  },
  messageGroup: {
    base: "flex flex-col gap-1",
    mine: {
      on: "items-end",
      off: "items-start",
    },
  },
};
