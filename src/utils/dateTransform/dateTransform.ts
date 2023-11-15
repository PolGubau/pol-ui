export type ParsedDate = `${number}-${number}-${number}`;

export const dateTimeToDate = (dateString: string): ParsedDate => {
	// input example: "2021-04-20T00:00:00.000Z"
	// output example: "20-04-2021"
	const date = new Date(dateString);
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${day}-${month}-${year}`;
};
export const whichDayInDays = (numberOfDats: number): string => {
	// input example: "10-05-2023"
	// output example if param is 6 : "2023-05-16T00:00:00.000Z"
	const date = new Date();
	date.setDate(date.getDate() + numberOfDats);

	return date.toISOString();
};

export const dateToDateTime = (date: string): string => {
	// input example: "20-04-2021"
	// output example: "2021-04-20T00:00:00.000Z"
	const dateArray = date.split("-");
	const day = dateArray[0];
	const month = dateArray[1];
	const year = dateArray[2];

	return `${year}-${month}-${day}T00:00:00.000Z`;
};

export const getToday = (): string => {
	const today = new Date();
	const isoString = today.toISOString();
	return isoString;
};

/* generate a function that returns an array of dates, this dates are the week starting from the date passed as argument, explain the date format and the one expecting, generate types for the function
 Example date format: "2021-04-20T00:00:00.000Z"
 
 Example output: ["2021-04-18T00:00:00.000Z", "2021-04-19T00:00:00.000Z", "2021-04-20T00:00:00.000Z", "2021-04-21T00:00:00.000Z", "2021-04-22T00:00:00.000Z", "2021-04-23T00:00:00.000Z", "2021-04-24T00:00:00.000Z"] 
 */

export const getWeek = (date: string = getToday()): string[] => {
	const week: string[] = [];
	const day = new Date(date);
	const dayNumber = day.getDay();
	const weekStart = new Date(day);
	const weekEnd = new Date(day);
	weekStart.setDate(day.getDate() - dayNumber);
	weekEnd.setDate(day.getDate() + (6 - dayNumber));

	for (let i = weekStart.getDate(); i <= weekEnd.getDate(); i++) {
		const day = new Date(weekStart);
		day.setDate(i);
		week.push(day.toISOString());
	}
	return week;
};

export const getDaysBefore = (date: string, numberOfDays: number): string[] => {
	// return array of dates from date -x days to date to date -1 day

	const days: string[] = [];
	const day = new Date(date);
	const dayNumber = day.getDay();
	const weekStart = new Date(day);
	const weekEnd = new Date(day);
	weekStart.setDate(day.getDate() - dayNumber - numberOfDays);
	weekEnd.setDate(day.getDate() - dayNumber - 1);

	for (let i = weekStart.getDate(); i <= weekEnd.getDate(); i++) {
		const day = new Date(weekStart);
		day.setDate(i);
		days.push(day.toISOString());
	}
	return days;
};

export const getDaysAfter = (date: string, numberOfDays: number): string[] => {
	// return array of dates from date +1 day to date +x days

	const days: string[] = [];
	const day = new Date(date);
	const weekStart = new Date(day);
	const weekEnd = new Date(day);
	weekStart.setDate(day.getDate() + 1);
	weekEnd.setDate(day.getDate() + numberOfDays);

	for (let i = weekStart.getDate(); i <= weekEnd.getDate(); i++) {
		const day = new Date(weekStart);
		day.setDate(i);
		days.push(day.toISOString());
	}
	return days;
};

const days = ["S", "M", "T", "W", "T", "F", "S"];

export const getWeekDay = (date: string) => {
	const day = new Date(date).getDay();
	return days[day];
};
export const getDay = (date: string) => {
	return new Date(date).getDate();
};
