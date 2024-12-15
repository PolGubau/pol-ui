export interface DropzoneTheme {
  base: string;
  disabled: string;
  active: string;
}

export const dropzoneTheme: DropzoneTheme = {
  base: "flex items-center justify-center flex-col gap-1 bg-secondary-200 w-full h-full text-center p-4 transition-all cursor-pointer border-2 border-dashed border-transparent rounded-lg  hover:brightness-90 focus:brightness-95",
  disabled:
    "bg-secondary-100 border-secondary-200 text-secondary-400 cursor-not-allowed hover:brightness-100 focus:brightness-100",
  active: "bg-primary-400",
};
