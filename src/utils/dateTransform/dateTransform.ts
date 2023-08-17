export const dateTimeToDate = (dateString: string): string => {
	// input example: "2021-04-20T00:00:00.000Z"
	// output example: "20-04-2021"
	const date = new Date(dateString);
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${day}-${month}-${year}`;
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
