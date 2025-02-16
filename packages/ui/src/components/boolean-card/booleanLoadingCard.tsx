import { cn } from "../../helpers";
import { Card } from "../Card";
import { Switch } from "../Switch/Switch";

interface BooleanLoadingCardProps {
	defaultChecked?: boolean;
	title: string;
	description?: string;
}
export const BooleanLoadingCard = (props: BooleanLoadingCardProps) => {
	const { defaultChecked = false, title, description } = props;
	return (
		<Card
			className={cn(
				"cursor-pointer transition-colors h-fit bg-secondary/5 animate-pulse ",
				{
					"bg-secondary/15": defaultChecked,
				},
			)}
		>
			<div className="flex justify-between gap-4 w-full">
				<header className="flex flex-col gap-1 w-full">
					<h4 className="bg-secondary/40 w-fit rounded-full text-transparent">
						{title || "Title of the card"}
					</h4>
					<h5 className="text-sm w-fit bg-secondary/20 rounded-full text-transparent">
						{description || "Description of a loading card"}
					</h5>
				</header>

				<Switch disabled={true} checked={false} onChange={() => null} />
			</div>
		</Card>
	);
};
