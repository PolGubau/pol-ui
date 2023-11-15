import { render, fireEvent, screen } from "@testing-library/react";
import Wrapper from "./Wrapper";

describe("Wrapper component", () => {
	it("renders children correctly", () => {
		render(<Wrapper>Test Children</Wrapper>);
		const childrenElement = screen.getByText("Test Children");
		expect(childrenElement).toBeInTheDocument();
	});

	it("invokes onClickOutside when clicked outside the dialog", () => {
		const onClickOutsideMock = jest.fn();
		render(
			<div>
				<div>Outside Element</div>
				<Wrapper onClickOutside={onClickOutsideMock}>Test Children</Wrapper>
			</div>
		);

		const dialog = screen.getByRole("dialog");
		fireEvent.click(dialog);
		expect(onClickOutsideMock).toHaveBeenCalled();
	});

	it("does not invoke onClickOutside when clicked inside the dialog", () => {
		const onClickOutsideMock = jest.fn();
		render(
			<Wrapper onClickOutside={onClickOutsideMock}>
				<div>Inside Element</div>
			</Wrapper>
		);

		const insideElement = screen.getByText("Inside Element");
		fireEvent.click(insideElement);

		expect(onClickOutsideMock).not.toHaveBeenCalled();
	});

	it("does not invoke onClickOutside when clicked inside the dialog and hasOverlay is true", () => {
		const onClickOutsideMock = jest.fn();
		render(
			<Wrapper onClickOutside={onClickOutsideMock} hasOverlay={true}>
				<div>Inside Element</div>
			</Wrapper>
		);

		const insideElement = screen.getByText("Inside Element");
		fireEvent.click(insideElement);

		expect(onClickOutsideMock).not.toHaveBeenCalled();
	});

	it("invokes onClickOutside when clicked outside the dialog and hasOverlay is true", () => {
		const onClickOutsideMock = jest.fn();
		render(
			<div>
				<div>Outside Element</div>
				<Wrapper onClickOutside={onClickOutsideMock} hasOverlay={true}>
					Test Children
				</Wrapper>
			</div>
		);

		const dialog = screen.getByRole("dialog");
		fireEvent.click(dialog);
		expect(onClickOutsideMock).toHaveBeenCalled();
	});
});
