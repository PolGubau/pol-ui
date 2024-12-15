export interface KanbanTheme {
  root: {
    base: string;
  };
  column: {
    base: string;
    header: string;
    title: string;
    length: string;
    column: string;
    active: string;
  };
  indicator: {
    base: string;
  };
  add: {
    form: string;
    textarea: string;
    buttonGroup: string;
  };
  card: {
    base: string;
    dragable: string;
  };
}

export const kanbanTheme: KanbanTheme = {
  root: {
    base: "flex w-full gap-2 overflow-x-auto h-fit",
  },
  column: {
    base: "w-64 flex flex-col gap-1 p-[2px]",
    header: "flex items-center justify-between px-2",
    title: "font-medium",
    length: "rounded text-sm text-neutral-400",
    column:
      "h-full w-full flex flex-col justify-start cursor-auto items-start transition-all rounded-lg pb-2 p-1 focus:outline-none focus:ring-2 focus:ring-primary",
    active: "brightness-95",
  },
  indicator: { base: "my-0.5 h-1 w-full bg-primary opacity-0" },
  add: {
    form: "flex w-full flex-col",
    textarea: "flex flex-1 w-full",
    buttonGroup: "mt-1.5 flex items-center justify-end gap-1.5",
  },
  card: {
    base: "w-full rounded-lg border border-secondary-600 bg-secondary-50 dark:bg-secondary-900 dark:border-secondary-100 hover:brightness-90 p-3 text-sm text-left text-secondary-900 dark:text-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary",
    dragable: "cursor-grab active:cursor-grabbing ",
  },
};
