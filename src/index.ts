import { Button, IconButton, Text, Icon, Field, Switch } from "./components";

import {
	getIcon,
	generateUUID,
	toCamelCase,
	toKebabCase,
	toUpperCase,
	toLowerCase,
	capitalize,
	removeWhitespace,
	reverseString,
	truncateString,
	formatString,
	randomString,
	lowerAndNoSpace,
	getLocalStorage,
	setToLocalStorage,
	removeFromLocalStorage,

	// sorters
	sortStrings,
	sortNumbers,
	sortDates,

	// dates
	dateTimeToDate,
	dateToDateTime,
	getToday,
} from "./utils";

import { Identifier } from "./common.d";

export {
	// components
	Button,
	IconButton,
	Text,
	Icon,
	Field,
	Switch,

	// utils
	generateUUID,

	// string conversion
	getIcon,
	toCamelCase,
	toKebabCase,
	toUpperCase,
	toLowerCase,
	capitalize,
	removeWhitespace,
	reverseString,
	truncateString,
	formatString,
	randomString,
	lowerAndNoSpace,

	// storage functions
	getLocalStorage,
	setToLocalStorage,
	removeFromLocalStorage,

	// sorters
	sortStrings,
	sortNumbers,
	sortDates,

	// dates
	dateTimeToDate,
	dateToDateTime,
	getToday,
};

export type { Identifier };
