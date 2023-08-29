import { IconData, IconNames } from "../../components";
import { getIcon } from "./getIcon";

describe("getIcon function", () => {
	const mockIcons: IconData[] = [
		{ name: IconNames.alarm, icon: "alarm" },
		{ name: IconNames.apps, icon: "app" },
		{ name: IconNames.ar, icon: "ar" },
	];

	it("returns correct icon for valid icon name", () => {
		const iconName = IconNames.apps;
		const expectedIcon = "app";

		const icon = getIcon(iconName, mockIcons);

		expect(icon).toBe(expectedIcon);
	});

	it("returns null for invalid icon name", () => {
		const iconName = "InvalidIcon";

		const icon = getIcon(iconName, mockIcons);

		expect(icon).toBeNull();
	});

	it("returns null and logs an error for missing icons", () => {
		const iconName = "MissingIcon";

		const icon = getIcon(iconName, []);

		expect(icon).toBeNull();
	});

	it("returns null and logs an error when icons is not provided", () => {
		const iconName = "";

		const icon = getIcon(iconName);

		expect(icon).toBeNull();
	});
});
