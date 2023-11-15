import { generateUUID } from "./generateUUID";

describe("generateUUID", () => {
	it("should generate a valid UUID", () => {
		const uuid = generateUUID();
		expect(uuid).toMatch(/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/);
	});
});
