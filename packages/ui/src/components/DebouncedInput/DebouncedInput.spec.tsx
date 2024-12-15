import { render } from "@testing-library/react";
import { HiEye } from "react-icons/hi";
import { describe, expect, it } from "vitest";
import { DebouncedInput } from "./DebouncedInput";

describe.concurrent("Components / Text input", () => {
  describe.concurrent("A11y", () => {
    it('should have `role="textbox"` by default', () => {
      const textInput = render(<DebouncedInput value="a" onChange={() => {}} />).getByRole("textbox");

      expect(textInput).toBeInTheDocument();
    });
    it("should have Icon if selected ", () => {
      const page = render(<DebouncedInput rightComponent={<HiEye />} value="a" onChange={() => {}} />).getByTestId(
        "right-icon",
      );
      expect(page).toBeInTheDocument();
    });
  });
});
