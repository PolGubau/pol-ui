import { create } from "@storybook/theming/create";

export default create({
	base: "light",
	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: "monospace",

	brandTitle: "Pol UI",
	brandUrl: "https://polui.vercel.app",
	brandImage: "./logo.png",
	brandTarget: "_self",

	// //
	// colorPrimary: "#3A10E5",
	// colorSecondary: "#585C6D",

	// // UI
	// appBg: "rgb(42, 41, 69)",
	// appContentBg: "rgb(42, 41, 69)",
	// appBorderColor: "rgb(42, 41, 69)",
	// appBorderRadius: 15,

	// // Text colors
	// textColor: "rgb(250, 240, 240)",
	// textInverseColor: "#282828",

	// // Toolbar default and active colors
	// barTextColor: "rgb(250, 240, 240)",
	// barSelectedColor: "rgb(242, 153, 70)",
	// barBg: "rgb(42, 41, 69)",

	// // Form colors
	// inputBg: "rgb(42, 41, 69)",
	// inputBorder: "rgb(250, 240, 240)",
	// inputTextColor: "rgb(250, 240, 240)",
	// inputBorderRadius: 5,
});
