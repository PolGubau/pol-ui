import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import type { AlertProps } from "../Alert";

import { composeStories } from "@storybook/react";
import * as stories from "../alert.stories";
import { itsDisplayed, shouldBeBordered, shouldCanDismiss, shouldSquare } from "./utils";

const { Default, Dismissable, Square, Bordered } = composeStories(stories);

describe.concurrent("Alert", () => {
  it("should be rendered correctly", () => {
    const { container } = render(<Default />);
    itsDisplayed(container, Default.args as AlertProps);
  });
  it("should have dismiss button", () => {
    const { container } = render(<Dismissable />);
    shouldCanDismiss(container);
  });
  it("Should be bordered", () => {
    const { container } = render(<Bordered />);
    shouldBeBordered(container);
  });
  it("Should accept custom classes", () => {
    const { container } = render(<Square />);
    shouldSquare(container);
  });
});
