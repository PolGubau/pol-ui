import { render, screen } from "@testing-library/react";
import React from "react";

import { Button } from "../src/Button";

test("Button displays correctly", () => {
	render(<Button title="My Component" />);

	const heading = screen.getByText(/My Component/i);

	expect(heading).toBeInTheDocument();
});
