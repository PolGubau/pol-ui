import { renderHook } from "@testing-library/react";
import useClickOutside from "../useClickOutside";

describe("useClickOutside custom hook", () => {
	it("attaches event listener on mount and detaches on unmount", () => {
		const addEventListenerSpy = jest.spyOn(document, "addEventListener");
		const removeEventListenerSpy = jest.spyOn(document, "removeEventListener");

		const ref = { current: document.createElement("div") };
		const callback = jest.fn();

		const { unmount } = renderHook(() => useClickOutside(ref, callback));

		expect(addEventListenerSpy).toHaveBeenCalledWith("mousedown", expect.any(Function));

		unmount();

		expect(removeEventListenerSpy).toHaveBeenCalledWith("mousedown", expect.any(Function));
	});

	it("invokes callback on outside click", () => {
		const addEventListenerSpy = jest.spyOn(document, "addEventListener");
		const removeEventListenerSpy = jest.spyOn(document, "removeEventListener");

		const ref = { current: document.createElement("div") };
		const callback = jest.fn();

		renderHook(() => useClickOutside(ref, callback));

		const clickEvent = new MouseEvent("mousedown", { bubbles: true });
		document.body.dispatchEvent(clickEvent);

		expect(callback).toHaveBeenCalled();

		addEventListenerSpy.mockRestore();
		removeEventListenerSpy.mockRestore();
	});

	it("does not invoke callback on inside click", () => {
		const addEventListenerSpy = jest.spyOn(document, "addEventListener");
		const removeEventListenerSpy = jest.spyOn(document, "removeEventListener");

		const ref = { current: document.createElement("div") };
		const callback = jest.fn();

		renderHook(() => useClickOutside(ref, callback));

		const clickEvent = new MouseEvent("mousedown", { bubbles: true });
		ref.current.dispatchEvent(clickEvent);

		expect(callback).not.toHaveBeenCalled();

		addEventListenerSpy.mockRestore();
		removeEventListenerSpy.mockRestore();
	});
	it("does not throw error if ref is null", () => {
		const addEventListenerSpy = jest.spyOn(document, "addEventListener");
		const removeEventListenerSpy = jest.spyOn(document, "removeEventListener");

		const ref = { current: null };
		const callback = jest.fn();

		renderHook(() => useClickOutside(ref, callback));

		const clickEvent = new MouseEvent("mousedown", { bubbles: true });
		document.body.dispatchEvent(clickEvent);

		expect(callback).not.toHaveBeenCalled();

		addEventListenerSpy.mockRestore();
		removeEventListenerSpy.mockRestore();
	});
});
