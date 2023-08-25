import { anyObject } from "../ ../../../types";
import { SelectItems } from "../types";

export const mockSelectIdName: anyObject[] = [
	{ id: 1, name: "Pol Gubau" },
	{ id: 2, name: "Polseres" },
	{ id: 3, name: "NotRealPol" },
	{ id: 4, name: "CodedByPol" },
	{ id: 5, name: "Polderless" },
];
export const mockSelectJustNames: SelectItems[] = [
	{ name: "Pol Gubau" },
	{ name: "Polseres" },
	{ name: "NotRealPol" },
	{ name: "CodedByPol" },
	{ name: "Polderless" },
];
export const withComplexeObject: SelectItems[] = [
	{
		id: 1,
		title: "Pol Gubau",
		avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
		year: 1972,
		single: true,
	},
	{
		id: 2,
		title: "Polseres",
		avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
		year: 1987,
		single: false,
	},
	{
		id: 3,
		title: "NotRealPol",
		avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
		year: 2018,
		single: false,
	},
	{
		id: 4,
		title: "CodedByPol",
		avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg",
		year: 1999,
		single: false,
	},
	{
		id: 5,
		title: "Polderless",

		avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
		year: 2001,
		single: true,
	},
];
export const withComplexeObjectWithName: SelectItems[] = [
	{
		id: 1,
		name: "Pol Gubau",
		avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
		year: 1972,
		single: true,
	},
	{
		id: 2,
		name: "Polseres",
		avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
		year: 1987,
		single: false,
	},
	{
		id: 3,
		name: "NotRealPol",
		avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
		year: 2018,
		single: false,
	},
	{
		id: 4,
		name: "CodedByPol",
		avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg",
		year: 1999,
		single: false,
	},
	{
		id: 5,
		name: "Polderless",

		avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
		year: 2001,
		single: true,
	},
];
