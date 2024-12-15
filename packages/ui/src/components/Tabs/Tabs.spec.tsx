import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Tabs } from "./Tabs";

describe("Components / Tabs", () => {
  it("should open tab when clicked", async () => {
    const user = userEvent.setup();
    render(
      <Tabs
        tabs={[
          {
            name: "Tab 1",
            content: <p>Tab 1</p>,
          },
          {
            name: "Tab 2",
            content: <p>Tab 2</p>,
          },
        ]}
      />,
    );

    await user.click(firstTab());
    expect(firstTab()).toHaveFocus();

    const nextTab = tabs()[1];

    await user.click(nextTab);

    expect(firstTab()).toHaveAttribute("aria-selected", "false");
    expect(nextTab).toHaveFocus();
    expect(nextTab).toHaveAttribute("aria-selected", "true");
  });

  it("should open focused tab when `Enter` is pressed", async () => {
    const user = userEvent.setup();
    render(
      <Tabs
        tabs={[
          {
            name: "Tab 1",
            content: <p>Tab 1</p>,
          },
          {
            name: "Tab 2",
            content: <p>Tab 2</p>,
          },
        ]}
      />,
    );

    await user.click(firstTab());
    expect(firstTab()).toHaveFocus();

    await user.keyboard("[Tab]");

    const nextTab = tabs()[1];

    expect(nextTab).toHaveFocus();

    await user.keyboard("[Enter]");

    expect(nextTab).toHaveAttribute("aria-selected", "true");
  });

  it("should do nothing when Left Arrow is pressed and first tab is already focused", async () => {
    const user = userEvent.setup();
    render(
      <Tabs
        tabs={[
          {
            name: "Tab 1",
            content: <p>Tab 1</p>,
          },
          {
            name: "Tab 2",
            content: <p>Tab 2</p>,
          },
        ]}
      />,
    );

    await user.click(firstTab());
    expect(firstTab()).toHaveFocus();

    await user.keyboard("[ArrowLeft]");

    expect(firstTab()).toHaveFocus();
  });

  it("should focus previous tab when Left Arrow is pressed", async () => {
    const user = userEvent.setup();
    render(
      <Tabs
        tabs={[
          {
            name: "Tab 1",
            content: <p>Tab 1</p>,
          },
          {
            name: "Tab 2",
            content: <p>Tab 2</p>,
          },
        ]}
      />,
    );

    await user.click(firstTab());
    expect(activeTab()).toHaveFocus();

    await user.keyboard("[ArrowLeft]");

    expect(firstTab()).toHaveFocus();
  });

  it("should do nothing when Right Arrow is pressed and last tab is already focused", async () => {
    const user = userEvent.setup();
    render(
      <Tabs
        tabs={[
          {
            name: "Tab 1",
            content: <p>Tab 1</p>,
          },
          {
            name: "Tab 2",
            content: <p>Tab 2</p>,
          },
        ]}
      />,
    );

    await user.click(lastTab());

    expect(lastTab()).toHaveAttribute("aria-selected", "true");
    expect(lastTab()).toHaveFocus();

    await user.keyboard("[ArrowRight]");

    expect(lastTab()).toHaveFocus();
  });

  it("should focus next tab when Tab is pressed", async () => {
    const user = userEvent.setup();
    render(
      <Tabs
        tabs={[
          {
            name: "Tab 1",
            content: <p>Tab 1</p>,
          },
          {
            name: "Tab 2",
            content: <p>Tab 2</p>,
          },
        ]}
      />,
    );

    await user.click(firstTab());

    await user.keyboard("[Tab]");

    const nextTab = tabs()[1];

    expect(nextTab).toHaveFocus();
  });
});

const tabs = () => screen.queryAllByRole("tab");

const activeTab = () => tabs().find((tab) => tab.getAttribute("aria-selected") === "true");

const firstTab = () => tabs()[0];

const lastTab = () => tabs()[tabs().length - 1];
