import { Button, Text } from "components";
describe("<Button />", () => {
	it("renders", () => {
		cy.mount(
			<Button>
				<Text value="Funky Button" />
			</Button>
		);

		cy.findByText(/Funky Button/i);
	});
});
