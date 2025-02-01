import { render } from "@testing-library/react";
import { HiEye } from "react-icons/hi";
import { describe, expect, it } from "vitest";
import { DebouncedInput } from "./DebouncedInput";

describe.concurrent("Components / Text input", () => {
  describe.concurrent("A11y", () => {
    it('should have `role="textbox"` by default', () => {
      const textInput = render(<DebouncedInput label="test" value="a" onChange={() => null} />).getByRole("textbox");

      expect(textInput).toBeInTheDocument();
    });
    it("should have Icon if selected ", () => {
      const page = render(<DebouncedInput label="test" icon={HiEye} value="a" onChange={() => null} />).getByTestId(
        "right-icon",
      );
      expect(page).toBeInTheDocument();
    });
  });
});
