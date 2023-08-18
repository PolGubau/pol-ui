import { MenuItem } from "../Menu";

export const mockmenu: MenuItem[] = [
	{
		id: "1",
		icon: "user",
		label: "Link 1",
		href: "/about",
	},
	{
		id: "2",
		label: "Button 1",
		icon: "plus",
		onClick: () => alert("Button 1 clicked"),
	},
	{
		id: "3",
		icon: "world",
		label: "Gummy bear",
		href: "https://th.bing.com/th/id/R.87acdf63d4b9ef685ba1a5c7defb8d1e?rik=InEEougN7Un4BQ&pid=ImgRaw&r=0",
	},
];
