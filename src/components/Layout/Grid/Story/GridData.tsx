import { Button } from "../../../Buttons";
import Grid from "../Grid";
import GridItem from "../GridItem";
import { Image } from "../../../Media";
export const someCells = [
	<div key={1} className="bg-danger p-4">
		Item 1
	</div>,
	<div key={2} className="bg-success p-4">
		Item 2
	</div>,
	<div key={3} className="bg-info p-4">
		Item 3
	</div>,
	<div key={4} className="bg-secondary p-4">
		Item 4
	</div>,
];
export const someCellsRandomized = [
	<div key={1} className="bg-danger p-4">
		Item 1
	</div>,
	<div key={2} className="bg-success p-4">
		Item 2<Button>Button</Button>
	</div>,
	<div key={3} className="bg-info p-4">
		Item 3
		<Image src="https://picsum.photos/200/300" alt="randomImage" />
	</div>,
	<div key={4} className="bg-secondary p-4">
		Item 4
	</div>,
];

export const DifferentSpanGrid = ({ args }: { args: any }) => (
	<Grid {...args}>
		<GridItem howManyColumns="1" className="bg-danger p-4">
			I use 1 column
		</GridItem>
		<GridItem howManyColumns="1" className="bg-success p-4">
			I use 2 columns
		</GridItem>
		<GridItem howManyColumns="2" className="bg-info p-4">
			I use 1 column
		</GridItem>
		<GridItem howManyColumns="2" className="bg-secondary p-4">
			I use 2 columns
		</GridItem>
		<GridItem howManyRows="2" className="bg-primary p-4 text-light">
			I use 2 rows
		</GridItem>
		<GridItem howManyRows="1" className="bg-danger p-4 text-light">
			I use 1 row
		</GridItem>
		<GridItem howManyRows="1" className="bg-info p-4 text-light">
			I use 1 row
		</GridItem>
	</Grid>
);
