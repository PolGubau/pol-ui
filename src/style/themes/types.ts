interface IThreeSizes {
	small: string;
	normal: string;
	large: string;
}

interface IThreeTones {
	dark: string;
	normal: string;
	light: string;
}

export interface ITheme {
	breakpoints: {
		mobile: string;
		tablet: string;
		desktop: string;
		desktopLarge: string;
	};
	shadows: IThreeSizes;
	fonts: {
		main: string;
		secondary: string;
	};
	borderRadius: IThreeSizes;
	spacing: IThreeSizes;

	fontSize: {
		small: string;
		normal: string;
		large: string;
		title: string;
	};
	colors: {
		background: IThreeTones;
		main: IThreeTones;
		secondary: IThreeTones;
		text: IThreeTones;
		error: IThreeTones;
	};
}
