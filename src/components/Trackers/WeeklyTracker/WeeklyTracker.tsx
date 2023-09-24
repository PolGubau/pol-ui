import { Card, Stack } from "../../Layout";
import { Text } from "../../Text";

interface ColorProps {
	color: string;
	value: number;
}
const mockColors = [
	{
		color: "#ffffbe",
		value: 0,
	},
	{
		color: "#ff4",
		value: 10,
	},
	{
		color: "#fa4",
		value: 20,
	},
	{
		color: "#f44",
		value: 30,
	},
	{
		color: "#a44",
		value: 40,
	},
];

interface Props {
	defaultColor?: string;
	onClick?: (YYYYMMDD: string) => void;
	maxWidth?: number;
	colors?: ColorProps[];
	data: {
		date: string;
		value: number;
	}[];
}

const WeeklyTracker: React.FC<Props> = ({
	onClick,
	maxWidth = "800px",
	data,
	colors = mockColors,
	defaultColor = "#b8b8b8",
}) => {
	const lastRecords = data.slice(-7);

	const getBackgroundColor = (value: number, colors: ColorProps[]) => {
		// if value is less than the first color, return the first color
		// if value is more than the last color, return the last color
		// else return the color that is greater than the value
		const firstColor = colors[0];
		const lastColor = colors[colors.length - 1];
		if (value <= firstColor.value) {
			return firstColor.color;
		} else if (value >= lastColor.value) {
			return lastColor.color;
		} else {
			return colors.find((color) => color.value > value)?.color;
		}
	};

	const days = ["S", "M", "T", "W", "T", "F", "S"];

	const getWeekDay = (date: string) => {
		const day = new Date(date).getDay();
		return days[day];
	};
	const getDay = (date: string) => {
		return new Date(date).getDate();
	};

	return (
		<Stack
			wrap={"nowrap"}
			style={{
				scrollbarWidth: "none",
				WebkitOverflowScrolling: "touch",
				maxWidth,
			}}
		>
			{lastRecords.map((record) => {
				const handleClicked = () => {
					onClick?.(record.date);
				};

				const isThisDayToday = new Date(record.date).getDate() === new Date().getDate();

				return (
					<Card
						contentClassname="flex flex-col items-center justify-center"
						onClick={onClick && handleClicked}
						key={record.date}
						className="w-full aspect-square flex items-center justify-center"
						padding="none"
						customBackground={getBackgroundColor(record.value, colors) ?? defaultColor}
						hasBorder={isThisDayToday}
					>
						<Text centered>{getWeekDay(record.date) + " " + getDay(record.date)}</Text>
						<Text centered size={"1.5em"}>
							{record.value.toString()}
						</Text>
					</Card>
				);
			})}
		</Stack>
	);
};

export default WeeklyTracker;
