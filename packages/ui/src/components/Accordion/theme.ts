export type AccordionTheme = {
  container: string;
  wrapper: string;
  headerContainer: string;
  arrow: string;
  contentContainer: string;
  contentContent: string;
};
export const accordionTheme: AccordionTheme = {
  container: "overflow-hidden",
  wrapper: "border-b border-secondary/50 overflow-hidden",

  headerContainer:
    "w-full text-left p-4 flex items-center justify-between cursor-pointer hover:bg-secondary/10 data-[open=true]:bg-secondary/30 transition-colors outline-none focus:bg-secondary/20",

  arrow: "text-2xl transition-transform duration-300 data-[open=true]:rotate-180",

  contentContainer: "px-4 transition-height duration-300",
  contentContent: "py-4",
};
