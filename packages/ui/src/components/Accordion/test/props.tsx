import { Tb360, TbBomb, TbUser } from "react-icons/tb";
import { Button } from "../../Button";
import { Input } from "../../Input/Input";
import type { AccordionData, AccordionProps } from "../Accordion";

const data: AccordionData[] = [
  {
    header: "What are accordion components?",
    content:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    header: "What are they use for?",
    content:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    header: "Accordion as a musical instrument",
    content:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    header: "Can i create an accordion component with a different framework?",
    content: "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

const dataWithJSX: AccordionData[] = [
  {
    header: <h1>What are accordion components?</h1>,
    content: (
      <p>
        Accordion components are user interface elements used for organizing and presenting content in a collapsible
        manner. <b>They typically consist</b> of a header, content, and an expand/collapse action.
      </p>
    ),
  },
  {
    header: <h1>What are they use for?</h1>,
    content: (
      <p>
        They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings
        panels, and data tables, to save screen space and provide a structured and user-friendly interface for
        presenting information or options.
        <Button>Click me</Button>
      </p>
    ),
  },
  {
    header: (
      <div className="flex gap-4 items-center">
        <span>Accordion as a musical instrument</span>
        <Button onClick={(e) => e.stopPropagation()}>You can include JSX</Button>
      </div>
    ),
    content: (
      <div>
        <Input label="Type here" />
        <Input type="number" label="Type here" />
      </div>
    ),
  },
  {
    header: <h1>Can i create an accordion component with a different framework?</h1>,
    content: "Yes of course, it is very possible to create an accordion component with another framework",
  },
];
const customIcons: AccordionData[] = [
  {
    header: "What are accordion components?",
    content:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    arrowIcon: TbUser,
  },
  {
    header: "What are they use for?",
    content:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    arrowIcon: TbBomb,
  },
  {
    header: "Accordion as a musical instrument",
    content:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    arrowIcon: Tb360,
  },
];

const defaultProps: AccordionProps = {
  data,
  "aria-label": "Accordion From Props",
  "aria-labelledby": "accordion-title",
  id: "accordion-id",
};
const withJSXProps: AccordionProps = {
  data: dataWithJSX,
  "aria-labelledby": "accordion-title",
};
const customIconsProps: AccordionProps = {
  data: customIcons,
};

const customTheme: AccordionProps = {
  data,
  theme: {
    container: "bg-red-800",
    wrapper: "overflow-hidden text-white",
    arrow: "text-3xl",
    contentContent: "text-sm opacity-80 p-2",
  },
};

export const accordionExampleProps: Record<string, AccordionProps> = {
  default: defaultProps,
  withJSX: withJSXProps,
  customIcons: customIconsProps,
  customClassname: {
    data,
    className: "bg-blue-500/20 rounded-xl border border-secondary/50 ",
  },
  customTheme,
};
