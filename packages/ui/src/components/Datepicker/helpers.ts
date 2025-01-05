import { addDays } from "@/helpers";

export enum Views {
	Days = 0,
	Months = 1,
	Years = 2,
	Decades = 3,
}

export enum WeekStart {
	Saturday = 0,
	Sunday = 1,
	Monday = 2,
	Tuesday = 3,
	Wednesday = 4,
	Thursday = 5,
	Friday = 6,
}

export const isDateInRange = (
	date: Date,
	minDate?: Date,
	maxDate?: Date,
): boolean => {
	const dateTime = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate(),
	).getTime();

	if (minDate && maxDate) {
		const minDateTime = new Date(
			minDate.getFullYear(),
			minDate.getMonth(),
			minDate.getDate(),
		).getTime();
		const maxDateTime = new Date(
			maxDate.getFullYear(),
			maxDate.getMonth(),
			maxDate.getDate(),
		).getTime();
		return dateTime >= minDateTime && dateTime <= maxDateTime;
	}

	if (minDate) {
		const minDateTime = new Date(
			minDate.getFullYear(),
			minDate.getMonth(),
			minDate.getDate(),
		).getTime();
		return dateTime >= minDateTime;
	}

	if (maxDate) {
		const maxDateTime = new Date(
			maxDate.getFullYear(),
			maxDate.getMonth(),
			maxDate.getDate(),
		).getTime();
		return dateTime <= maxDateTime;
	}

	return true;
};

export const isDateEqual = (date: Date, selectedDate: Date): boolean => {
	const normalizedDate = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate(),
	);
	const currentDate = new Date(
		normalizedDate.getFullYear(),
		normalizedDate.getMonth(),
		normalizedDate.getDate(),
	);

	return currentDate.getTime() === selectedDate.getTime();
};

export const getFirstDateInRange = (
	date: Date,
	minDate?: Date,
	maxDate?: Date,
): Date => {
	let newDate = date;
	if (!isDateInRange(date, minDate, maxDate)) {
		if (minDate && date < minDate) {
			newDate = minDate;
		} else if (maxDate && date > maxDate) {
			newDate = maxDate;
		}
	}
	return newDate;
};

export const getFirstDayOfTheMonth = (
	date: Date,
	weekStart: WeekStart,
): Date => {
	const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
	const dayOfWeek = firstDayOfMonth.getDay();

	const diff = (dayOfWeek - weekStart + 7) % 7;
	return addDays(firstDayOfMonth, -diff);
};

export const getWeekDays = (
	lang = "en-US",
	weekStart: WeekStart = WeekStart.Monday,
): string[] => {
	const weekdays: string[] = [];
	const date = new Date(0);

	const formatter = new Intl.DateTimeFormat(lang, { weekday: "short" });

	for (let i = 0; i < 7; i++) {
		const dayIndex = (i + weekStart + 1) % 7;
		const formattedWeekday = formatter.format(addDays(date, dayIndex + 1));
		weekdays.push(
			formattedWeekday.slice(0, 2).charAt(0).toUpperCase() +
				formattedWeekday.slice(1, 3),
		);
	}

	return weekdays;
};

export const getFormattedDate = (
	language: string,
	date: Date,
	options?: Intl.DateTimeFormatOptions,
): string => {
	let defaultOptions: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "long",
		year: "numeric",
	};

	if (options) {
		defaultOptions = options;
	}

	return new Intl.DateTimeFormat(language, defaultOptions).format(date);
};

export const startOfYearPeriod = (date: Date, years: number): number => {
	const year = date.getFullYear();
	return Math.floor(year / years) * years;
};

export const isDateInDecade = (date: Date, startYear: number): boolean => {
	const year = date.getFullYear();
	const endYear = startYear + 9;
	return year >= startYear && year <= endYear;
};

export const isDateRangeInDecade = (
	startDate: Date,
	endDate: Date,
	decadeStart: number,
	decadeEnd: number,
): boolean => {
	const startYear = startDate.getFullYear();
	const endYear = endDate.getFullYear();

	if (decadeStart && decadeEnd) {
		// Check if the start and end years of the date range are within the decade
		const isStartYearInRange = isDateInRange(
			new Date(startYear, 0, 1),
			new Date(decadeStart, 0, 1),
			new Date(decadeEnd, 11, 31),
		);
		const isEndYearInRange = isDateInRange(
			new Date(endYear, 11, 31),
			new Date(decadeStart, 0, 1),
			new Date(decadeEnd, 11, 31),
		);

		return isStartYearInRange && isEndYearInRange;
	}

	// If decadeStart or decadeEnd is not provided, treat it as an open-ended range
	return true;
};
