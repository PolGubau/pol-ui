import { Button } from "../src/Button";

describe("<Button />", () => {
	it("renders", () => {
		cy.mount(<Button title="My component" />);

		cy.findByText(/My component/i);
	});
});
