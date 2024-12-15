export interface ImageTrailTheme {
  base: string;
  image: string;
}
export const imageTrailTheme: ImageTrailTheme = {
  base: "relative overflow-hidden w-full",
  image: "pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl object-cover opacity-0",
};
