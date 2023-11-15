import { applyMaxWidth } from "../../../style";
import { Color, Colors, SizesWithFull } from "../../../types";
import { getDaysAfter, getDaysBefore, getToday } from "../../../utils";
import { Card, Stack } from "../../Layout";
import { Text } from "../../Text";

interface Props {
	onClick?: (YYYYMMDD: string) => void;
	startDate?: string;
	maxWidth?: SizesWithFull;
	daysBefore?: number;
	daysAfter?: number;
	defaultColor?: Color;
	todayColor?: Color;
}

const Week: React.FC<Props> = ({
	onClick,
	maxWidth = "xl",
	startDate = getToday(),
	daysAfter = 1,
	daysBefore = 5,
	defaultColor = Colors.background,
	todayColor = Colors.accent,
}) => {
	const days = ["S", "M", "T", "W", "T", "F", "S"];

	const before = getDaysBefore(startDate, daysBefore);
	const after = getDaysAfter(startDate, daysAfter);

	const dates = [...before, startDate, ...after];

	const getWeekDay = (date: string) => {
		const day = new Date(date).getDay();
		return days[day];
	};
	const getDay = (date: string) => {
		return new Date(date).getDate();
	};

	return (
		<Stack wrap={"nowrap"} className={`${applyMaxWidth(maxWidth)}`}>
			{dates.map((date) => {
				const handleClicked = () => {
					onClick?.(date);
				};

				const today = getToday().toString().substring(0, 10);
				const dateString = date.substring(0, 10);
				const isThisDayToday = today === dateString;

				return (
					<Card
						bgColor={isThisDayToday ? todayColor : defaultColor}
						contentClassname="flex flex-col items-center justify-center "
						onClick={onClick && handleClicked}
						key={date}
						className={`w-full aspect-square flex items-center justify-center ${
							onClick ? "cursor-pointer" : "cursor-default"
						}`}
						padding="none"
					>
						<Text>{getWeekDay(date)}</Text>
						<Text>{getDay(date).toString()}</Text>
					</Card>
				);
			})}
		</Stack>
	);
};

export default Week;
