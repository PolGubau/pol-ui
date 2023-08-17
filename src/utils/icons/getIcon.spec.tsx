import { TbCheck } from "react-icons/tb";
import { getIcon } from "./getIcon";

describe("getIcon Function", () => {
	it("should return a valid React component for a valid icon name", () => {
		const iconName = "check";
		const expectedComponent = <TbCheck />;

		const result = getIcon(iconName);
		expect(result).toStrictEqual(expectedComponent);
	});

	it("should return null for an invalid icon name", () => {
		const invalidIconName = "invalidIconName";

		const result = getIcon(invalidIconName);
		expect(result).toBeNull();
	});
});
