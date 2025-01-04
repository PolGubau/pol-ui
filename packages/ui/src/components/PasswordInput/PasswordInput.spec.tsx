import { render } from "@testing-library/react";
import { HiEye } from "react-icons/hi";
import { describe, expect, it } from "vitest";
import { PasswordInput } from "./PasswordInput";

describe.concurrent("Components / Text input", () => {
	describe.concurrent("A11y", () => {
		it('should have `role="input"` by default', () => {
			const textInput = render(<PasswordInput label="a" />).getByText("a");

			expect(textInput).toBeInTheDocument();
		});
		it("should have Icon if selected ", () => {
			const page = render(<PasswordInput showIcon={HiEye} />).getAllByTestId(
				"show-icon",
			)[0];

			expect(page).toBeInTheDocument();
		});
	});
});
