import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TextArea } from "./Textarea";

describe.concurrent("Components / Textarea", () => {
	describe.concurrent("A11y", () => {
		it('should have role="textbox" by default', () => {
			const textArea = render(<TextArea label="test" />).getByRole("textbox");

			expect(textArea).toBeInTheDocument();
		});
	});
});
