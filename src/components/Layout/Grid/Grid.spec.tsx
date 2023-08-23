import React from "react";
import Grid from "./Grid";
import { render, screen } from "@testing-library/react";

test("renders grid component with children", () => {
	render(
		<Grid columns="2">
			<div>Item 1</div>
			<div>Item 2</div>
		</Grid>
	);
	expect(screen.getByText("Item 1")).toBeInTheDocument();
	expect(screen.getByText("Item 2")).toBeInTheDocument();
});
