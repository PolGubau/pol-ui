export interface ToastTheme {
  base: string;
  title: string;
  description: string;
  success: string;
  error: string;
  info: string;
  warning: string;
  loading: string;
  default: string;
}

export const toastTheme: ToastTheme = {
  base: "rounded-xl shadow-md w-full p-3 flex items-center",
  title: "text-sm font-semibold ml-2 flex flex-1",
  description: "text-xs ml-2",
  success: "bg-success-50 dark:bg-success-900 text-success-900 dark:text-success-50",
  //
  error: "bg-error-50 dark:bg-error-900 text-error-900 dark:text-error-50",

  //
  info: "bg-info-50 dark:bg-info-900 text-info-900 dark:text-info-50",

  //
  warning: "bg-warning-50 dark:bg-warning-900 text-warning-900 dark:text-warning-50",

  //
  loading: "bg-secondary-50 dark:bg-secondary-900 text-secondary-900 dark:text-secondary-50",

  //
  default: "bg-secondary-50 dark:bg-secondary-900 text-secondary-900 dark:text-secondary-50",
};
