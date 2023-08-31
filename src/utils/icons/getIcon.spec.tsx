import { TbApps } from "react-icons/tb";
import { IconNames } from "../../components";
import { getIcon } from "./getIcon";

describe("getIcon function", () => {
	it("returns correct icon for valid icon name", () => {
		const iconName = IconNames.apps;

		const icon = getIcon(iconName);

		expect(icon).toEqual(<TbApps />);
	});

	it("returns null for invalid icon name", () => {
		const iconName = "InvalidIcon";

		const icon = getIcon(iconName);

		expect(icon).toBeUndefined();
	});

	it("returns null and logs an error for missing icons", () => {
		const iconName = "MissingIcon";

		const icon = getIcon(iconName);

		expect(icon).toBeUndefined();
	});

	it("returns null and logs an error when icons is not provided", () => {
		const iconName = "";

		const icon = getIcon(iconName);

		expect(icon).toBeUndefined();
	});
});
