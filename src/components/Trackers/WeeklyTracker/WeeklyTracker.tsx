import { Colors, Ten } from "../../../types";
import { getDay, getWeekDay } from "../../../utils";
import { Card, Stack } from "../../Layout";
import { Text } from "../../Text";

interface Props {
	bgColor?: Colors;
	onClick?: (YYYYMMDD: string) => void;
	maxWidth?: number;
	data: {
		date: string;
		value: number;
	}[];
}

const WeeklyTracker: React.FC<Props> = ({
	onClick,
	maxWidth = "800px",
	data,
	bgColor = Colors.accent,
}) => {
	const lastRecords = data.slice(-7);

	interface GetOpacity {
		allValues: number[];
		thisValue: number;
	}
	const getOpacity = ({ allValues, thisValue }: GetOpacity): Ten => {
		const max = Math.max(...allValues);

		// get the max value, this one will return 100, then take the percent of the others, example: 12,6. Then 12 will be 100 and 6 will be 50

		const percent = (thisValue * 100) / max;
		// now move the percent to the nearest 10

		const ten = Math.round(percent / 10) * 10;

		return ten as Ten;
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
						onClick={onClick && handleClicked}
						key={record.date}
						shadow={isThisDayToday ? "lg" : "none"}
						className={`w-full aspect-square flex items-center justify-center ${
							isThisDayToday ? "scale-110" : ""
						}`}
						padding="none"
						bgColor={bgColor}
						bgOpacity={getOpacity({ allValues: data.map((d) => d.value), thisValue: record.value })}
					>
						<Stack direction="column" justify="center" alignItems="center" gap={0}>
							<Text centered>{getWeekDay(record.date) + " " + getDay(record.date)}</Text>
							<Text centered size={"1.5em"}>
								{record.value.toString()}
							</Text>
						</Stack>
					</Card>
				);
			})}
		</Stack>
	);
};

export default WeeklyTracker;
