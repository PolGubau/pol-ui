import { expect, within } from "@storybook/test";
import userEvent from "@testing-library/user-event";
import { shouldExist } from "../../../tests/shared-tests/assertions";
import { click } from "../../../tests/shared-tests/user-interactions";
import type { AccordionProps } from "../Accordion";

export const itsDisplayedAndWorks = async (ui: HTMLElement, props: AccordionProps) => {
  const canvas = within(ui);

  const accordionContainer = canvas.getByTestId("ui-accordion");
  shouldExist(accordionContainer);

  const firstTab = props.data[0];

  // role button and text = firstTab.header
  const firstHeader = canvas.getByRole("button", {
    name: String(firstTab.header),
  });
  shouldExist(firstHeader);

  const firstContent = canvas.getByText(String(firstTab.content));
  shouldExist(firstContent);

  // has data-open attribute with false value
  expect(firstHeader).toHaveAttribute("data-open", "false");

  // now we click the first header
  await click(firstHeader);
  // after the click should be open and focused
  expect(firstHeader).toHaveFocus();

  // the data-open should be true
  expect(firstHeader).toHaveAttribute("data-open", "true");

  // we click again to close it
  await click(firstHeader);

  // the data-open should be false
  expect(firstHeader).toHaveAttribute("data-open", "false");

  // shouldExist(input);
  // shouldHaveEmptyValue(input);
  // await typeAndCheckValue(input, "Hello, world!");
  // await clearAndCheckEmpty(input);
};

export const shouldUseAriaLabel = (ui: HTMLElement, props: AccordionProps) => {
  const canvas = within(ui);

  const accordionContainer = canvas.getByTestId("ui-accordion");
  shouldExist(accordionContainer);
  const label = props["aria-label"];
  expect(accordionContainer).toHaveAccessibleName(label);
};
export const shouldUseAriaLabelledBy = (ui: HTMLElement, props: AccordionProps) => {
  const canvas = within(ui);

  const accordionContainer = canvas.getByTestId("ui-accordion");
  shouldExist(accordionContainer);
  expect(accordionContainer).toHaveAttribute("aria-labelledby", props["aria-labelledby"]);
};
export const shouldUseId = (ui: HTMLElement, props: AccordionProps) => {
  const canvas = within(ui);
  const accordionContainer = canvas.getByTestId("ui-accordion");
  expect(accordionContainer).toHaveAttribute("id", props.id);
};
export const headersShouldBeButtons = async (ui: HTMLElement, props: AccordionProps) => {
  const canvas = within(ui);

  const headers = canvas.getAllByTestId("ui-accordion-header");

  headers.map((header, i) => {
    shouldExist(header);
    expect(header.tagName.toLowerCase()).toBe("button");
    const headerText = props.data[i].header;
    expect(header).toHaveTextContent(String(headerText));
  });
};

export const canBeUsedWithKeyboard = async (ui: HTMLElement, props: AccordionProps) => {
  const shouldBeOpen = (header: HTMLElement, state = true) => {
    expect(header).toHaveAttribute("data-open", String(state));
  };

  const canvas = within(ui);

  const firstTab = props.data[0];
  const secondTab = props.data[1];

  const firstHeader = canvas.getByRole("button", {
    name: String(firstTab.header),
  });
  const secondHeader = canvas.getByRole("button", {
    name: String(secondTab.header),
  });
  shouldExist(firstHeader);

  const firstContent = canvas.getByText(String(firstTab.content));
  shouldExist(firstContent);

  // has data-open attribute with false value
  shouldBeOpen(firstHeader, false);

  firstHeader.focus(); // focus the fist header

  await userEvent.keyboard("{enter}"); // click enter

  // The first item has focus and its opened
  expect(firstHeader).toHaveFocus();
  shouldBeOpen(firstHeader);

  await userEvent.tab(); // we travel to the next item

  await userEvent.keyboard("{enter}"); // click space

  // now the 1st should be closed and the 2nd opened

  shouldBeOpen(firstHeader, false);
  shouldBeOpen(secondHeader);
};
