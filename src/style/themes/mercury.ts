import { ITheme } from "./types";

export const mercury: ITheme = {
	breakpoints: {
		mobile: "480px",
		tablet: "768px",
		desktop: "1024px",
		desktopLarge: "1920px",
	},
	borderRadius: {
		small: "5px",
		normal: "10px",
		large: "20px",
	},

	spacing: {
		small: "5px",
		normal: "10px",
		large: "15px",
	},
	fonts: {
		main: "Poppins",
		secondary: "Roboto",
	},
	fontSize: {
		small: "12px",
		normal: "14px",
		large: "16px",
		title: "24px",
	},
	shadows: {
		small: "0px 1px 5px rgba(0, 0, 0, 0.16)",
		normal: "0px 3px 6px rgba(0, 0, 0, 0.16)",
		large: "0px 6px 16px rgba(0, 0, 0, 0.16)",
	},
	colors: {
		background: {
			dark: "#fafafa",
			normal: "#a6a6a6",
			light: "#ffffff",
		},
		main: {
			dark: "#00AAA1",
			normal: "#00AAA1",
			light: "#d7f7f1",
		},
		secondary: {
			dark: "#aaa9b2",
			normal: "#e2e2ee",
			light: "#f3f2ff",
		},
		text: {
			dark: "#262335",
			normal: "#3C2C5B",
			light: "#8782A5",
		},
		error: {
			dark: "#CC0000",
			normal: "#ffb5b5",
			light: "#ffe5e5",
		},
	},
};
