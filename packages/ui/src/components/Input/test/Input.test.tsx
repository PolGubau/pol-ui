import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import * as stories from "../Input.stories";
import type { InputProps } from "../props";
import {
  helperTextClassesShouldBeCorrect,
  shouldBeRequired,
  shouldHandleError,
  shouldHaveCustomLabelClasses,
  shouldHaveHelperText,
  shouldHaveIcon,
  testInputLogic,
} from "./utils";

const { Default, ErrorInput, WithIcon, Required, CustomLabel, WithHelperText } = composeStories(stories);

describe("Input component", () => {
  it("should handle user interactions correctly", async () => {
    const { container } = render(<Default />);
    await testInputLogic(container, Default.args as InputProps);
  });
  it("should display errors", () => {
    const { container } = render(<ErrorInput />);
    shouldHandleError(container, ErrorInput.args as InputProps);
  });
  it("should display icon", () => {
    const { container } = render(<WithIcon />);
    shouldHaveIcon(container, WithIcon.args as InputProps);
  });

  it("Should disaply * if required", () => {
    const { container } = render(<Required />);
    shouldBeRequired(container, Required.args as InputProps);
  });

  it("Should have custom label classes", () => {
    const { container } = render(<CustomLabel />);
    shouldHaveCustomLabelClasses(container, CustomLabel.args as InputProps);
  });
  describe("Helper text", () => {
    it("Should Exist", () => {
      const { container } = render(<WithHelperText />);
      shouldHaveHelperText(container, WithHelperText.args as InputProps);
    });
    it("Should Style correctly", () => {
      const { container } = render(<WithHelperText />);
      helperTextClassesShouldBeCorrect(container, WithHelperText.args as InputProps);
    });
  });
  //
  // it("Stories tests should pass", async () => {
  // 	await Default.run();
  // 	await ErrorInput.run();
  // 	await WithIcon.run();
  // 	await Required.run();
  // 	await CustomLabel.run();
  // 	await WithHelperText.run();
  // });
});
