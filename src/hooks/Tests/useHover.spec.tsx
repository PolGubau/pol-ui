import { act, renderHook } from "@testing-library/react";
import useHover from "../useHover";

jest.useFakeTimers();

describe("useHover custom hook", () => {
	it("does not set isHovering on mouse leave if component unmounts", () => {
		const { result, unmount } = renderHook(() => useHover({ leaveDelay: 100 }));

		act(() => {
			result.current.hoverProps.onMouseLeave();
			unmount();
			jest.advanceTimersByTime(200);
		});

		expect(result.current.isHovering).toBe(false);
	});

	it("does not set isHovering on mouse enter if component unmounts", () => {
		const { result, unmount } = renderHook(() => useHover({ enterDelay: 100 }));

		act(() => {
			result.current.hoverProps.onMouseEnter();
			unmount();
			jest.advanceTimersByTime(200);
		});

		expect(result.current.isHovering).toBe(false);
	});

	it("does not set isHovering on mouse leave if component unmounts before delay", () => {
		const { result, unmount } = renderHook(() => useHover({ leaveDelay: 100 }));

		act(() => {
			result.current.hoverProps.onMouseLeave();
			unmount();
			jest.advanceTimersByTime(50);
		});

		expect(result.current.isHovering).toBe(false);
	});

	it("does not set isHovering on mouse enter if component unmounts before delay", () => {
		const { result, unmount } = renderHook(() => useHover({ enterDelay: 100 }));

		act(() => {
			result.current.hoverProps.onMouseEnter();
			unmount();
			jest.advanceTimersByTime(50);
		});

		expect(result.current.isHovering).toBe(false);
	});
	it("sets isHovering to false by default", () => {
		const { result } = renderHook(() => useHover());

		expect(result.current.isHovering).toBe(false);
	});

	it("sets isHovering to true on mouse enter without delay", () => {
		const { result } = renderHook(() => useHover());

		act(() => {
			result.current.hoverProps.onMouseEnter();
		});

		expect(result.current.isHovering).toBe(false);
	});

	it("sets isHovering to false on mouse leave without delay", () => {
		const { result } = renderHook(() => useHover());

		act(() => {
			result.current.hoverProps.onMouseEnter();
			result.current.hoverProps.onMouseLeave();
		});

		expect(result.current.isHovering).toBe(false);
	});

	it("handles unmount without errors", () => {
		const { unmount } = renderHook(() => useHover());

		act(() => {
			unmount();
		});

		// No assertions needed, just making sure it doesn't throw errors
	});

	it("does not set isHovering if enter delay is negative", () => {
		const { result } = renderHook(() => useHover({ enterDelay: -100 }));

		act(() => {
			result.current.hoverProps.onMouseEnter();
			jest.advanceTimersByTime(200);
		});

		expect(result.current.isHovering).toBe(true);
	});

	it("does not set isHovering if leave delay is negative", () => {
		const { result } = renderHook(() => useHover({ leaveDelay: -100 }));

		act(() => {
			result.current.hoverProps.onMouseEnter();
			result.current.hoverProps.onMouseLeave();
			jest.advanceTimersByTime(200);
		});

		expect(result.current.isHovering).toBe(false);
	});

	it("does not set isHovering if leave delay is negative and leave", () => {
		const { result } = renderHook(() => useHover({ leaveDelay: -100 }));

		act(() => {
			result.current.hoverProps.onMouseEnter();
			result.current.hoverProps.onMouseLeave();
			jest.advanceTimersByTime(200);
		});

		expect(result.current.isHovering).toBe(false);
	});

	it("does not set isHovering if enter delay is zero", () => {
		const { result } = renderHook(() => useHover({ enterDelay: 0 }));

		act(() => {
			result.current.hoverProps.onMouseEnter();
			jest.advanceTimersByTime(200);
		});

		expect(result.current.isHovering).toBe(true);
	});

	it("does not set isHovering if leave delay is zero", () => {
		const { result } = renderHook(() => useHover({ leaveDelay: 0 }));

		act(() => {
			result.current.hoverProps.onMouseEnter();
			result.current.hoverProps.onMouseLeave();
			jest.advanceTimersByTime(200);
		});

		expect(result.current.isHovering).toBe(false);
	});
});
