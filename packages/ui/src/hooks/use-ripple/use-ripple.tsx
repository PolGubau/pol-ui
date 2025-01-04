"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";

import { px } from "../../helpers/px/px";

/**
 * @name Options
 * @description The options to use for the ripple
 * @param duration <number> The duration of the ripple animation
 * @param timingFunction <string> The timing function of the ripple animation
 * @param disabled <boolean> Whether the ripple is disabled
 * @param className <string> The class name to apply to the ripple
 * @param opacity <number> The opacity of the ripple
 * @param containerClassName <string> The class name to apply to the ripple container
 * @param ignoreNonLeftClick <boolean> Whether to ignore non left clicks
 * @param onSpawn <function> A function that is called when the ripple is spawned
 * @param cancelAutomatically <boolean> Whether to cancel the ripple automatically
 * @param ref <React.RefObject<T>> The ref to the ripple host element
 * @returns <Options> The options to use for the ripple
 * @author Pol Gubau Amores - https://polgubau.com
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface RippleOptions<T extends HTMLElement = any> {
  duration: number;
  // color: string;
  timingFunction: string;
  disabled?: boolean;
  className: string;
  opacity: number;
  containerClassName: string;
  ignoreNonLeftClick: boolean;
  onSpawn?: (ctx: {
    /** the ripple element */
    readonly ripple: HTMLDivElement;

    /** cancels the current ripple animation */
    readonly cancelRipple: () => void;

    /** the ref to the ripple host element */
    readonly ref: React.RefObject<T>;

    /** the event that triggered the ripple (ts: casting required) */
    readonly event: unknown;

    /** the ripple container element */
    readonly container: HTMLDivElement;
  }) => void;
  cancelAutomatically: boolean;
  ref: React.RefObject<T>;
}

export interface MinimalEvent {
  clientX: number;
  clientY: number;

  nativeEvent?: {
    which?: number;
    type?: string;
  };
}

const self = () => document;
const completedFactor = 0.4;
const className = "bg-secondary-50";
const containerClassName = "ripple--container";

/**
 * @name useRipple
 * @description Creates a ripple hook with the specified options
 * @param inputOptions The options to use for the ripple
 * @returns A tuple containing the ref and the event handler
 * @example
 * const [ref, event] = useRipple();
 * const [ref, event] = useRipple({color: 'blue'});
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function useRipple<T extends HTMLElement = any>(inputOptions?: Partial<RippleOptions<T>>) {
  const internalRef = useRef<T>(null);

  const { ref, ...options }: RippleOptions = {
    duration: 850,
    cancelAutomatically: false,
    timingFunction: "cubic-bezier(.42,.36,.28,.88)",
    disabled: false,
    opacity: 0.1,
    className,
    containerClassName,
    ignoreNonLeftClick: true,
    ref: internalRef,
    ...(inputOptions ?? {}),
  };

  const event = useCallback(
    (event: MinimalEvent) => {
      if (
        !ref.current ||
        (options.disabled ??
          (options.ignoreNonLeftClick && event.nativeEvent?.which !== 1 && event.nativeEvent?.type === "mousedown"))
      ) {
        return;
      }
      const target = ref.current;
      if (window.getComputedStyle(target).position === "static") {
        applyStyles([["position", "relative"]], target);
      }

      if (!target) {
        return;
      }

      const existingContainer = target.querySelector(`.${options.containerClassName}`);

      const container = existingContainer ?? createRippleContainer(options.containerClassName);

      if (!existingContainer) {
        target.appendChild(container);
      }

      // Used to ensure overflow: hidden is registered properly on IOS Safari before ripple is shown
      requestAnimationFrame(() => {
        const begun = Date.now();
        const ripple = centerElementToPointer(event, target, createRipple(target, event, options));
        const events = ["mouseup", "touchend"] as const;
        const cancelRipple = () => {
          const now = Date.now();
          const diff = now - begun;
          // Ensure the transform animation is complete before cancellation
          setTimeout(
            () => {
              cancelRippleAnimation(ripple, options);
            },
            diff > 0.4 * options.duration ? 0 : completedFactor * options.duration - diff,
          );
          for (const event of events) {
            self().removeEventListener(event, cancelRipple);
          }
        };
        if (options.cancelAutomatically || isTouchDevice()) {
          setTimeout(() => {
            cancelRippleAnimation(ripple, options);
          }, options.duration * completedFactor);
        } else {
          for (const event of events) {
            self().addEventListener(event, cancelRipple);
          }
        }

        container.appendChild(ripple);
        options.onSpawn?.({
          ripple,
          cancelRipple,
          event,
          ref,
          container,
        });
      });
    },
    [ref, options],
  );
  return [ref, event] as const;
}

/**
 * @name customRipple
 * @description Creates a custom ripple hook with the specified options
 * @param inputOptions The options to use for the ripple
 * @returns A function that takes override options and returns a ripple hook
 * @example
 * const useCustomRipple = customRipple({color: 'red'});
 * const [ref, event] = useCustomRipple({color: 'blue'});
 * const [ref, event] = useCustomRipple();
 * const [ref, event] = useCustomRipple({color: 'blue', duration: 1000});
 * const [ref, event] = useCustomRipple({color: 'blue', duration: 1000, opacity: 0.5});
 * const [ref, event] = useCustomRipple({color: 'blue', duration: 1000, opacity: 0.5, className: 'my-ripple'});
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function customRipple<T extends HTMLElement = any>(inputOptions?: Partial<Omit<RippleOptions<T>, "ref">>) {
  return (overrideOptions?: Partial<RippleOptions<T>>) =>
    useRipple({
      ...inputOptions,
      ...overrideOptions,
    });
}

/**
 * @name centerElementToPointer
 * @param event <MinimalEvent> The event that triggered the ripple (ts: casting required)
 * @param ref <HTMLElement> The ref to the ripple host element
 * @param element <T extends HTMLElement> The element to center
 * @returns <T extends HTMLElement> The centered element
 * @description Centers the specified element to the pointer
 * @example
 * const element = document.createElement('div');
 * const event = {clientX: 0, clientY: 0};
 * const ref = document.createElement('div');
 * const centeredElement = centerElementToPointer(event, ref, element);
 * console.info(centeredElement.style.top); // 0px
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */
function centerElementToPointer<T extends HTMLElement>(event: MinimalEvent, ref: HTMLElement, element: T): T {
  const { top, left } = ref.getBoundingClientRect();
  element.style.setProperty("top", px(event.clientY - top));
  element.style.setProperty("left", px(event.clientX - left));
  return element;
}

/**
 * @name createRipple
 * @param ref <T extends HTMLElement> The ref to the ripple host element
 * @param event <MinimalEvent> The event that triggered the ripple (ts: casting required)
 * @param param2 <Omit<Options<T>, 'ref'>> The options to use for the ripple
 * @param ctx <Document> The context to use for the ripple
 * @returns <HTMLDivElement> The ripple element
 * @description Creates a ripple element
 * @example
 * const element = document.createElement('div');
 * const event = {clientX: 0, clientY: 0};
 * const options = {duration: 1000, timingFunction: 'ease-in-out', className: 'my-ripple', opacity: 0.5};
 * const ripple = createRipple(element, event, options);
 * console.info(ripple.style.opacity); // 0.5
 * console.info(ripple.style.transition); // transform 600ms ease-in-out, opacity 650ms ease-in-out 130ms
 * console.info(ripple.style.transform); // translate(-50%, -50%) scale(1)
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */
function createRipple<T extends HTMLElement>(
  ref: T,
  event: MinimalEvent,
  { duration, timingFunction, className, opacity }: Omit<RippleOptions, "ref">,
  ctx = document,
): HTMLDivElement {
  const element = ctx.createElement("div");
  const { clientX, clientY } = event;
  const { height, width, top, left } = ref.getBoundingClientRect();
  const maxHeight = Math.max(clientY - top, height - clientY + top);
  const maxWidth = Math.max(clientX - left, width - clientX + left);
  const size = px(Math.hypot(maxHeight, maxWidth) * 2);
  const styles = [
    ["position", "absolute"],
    ["height", size],
    ["width", size],
    ["transform", "translate(-50%, -50%) scale(0)"],
    ["pointer-events", "none"],
    ["border-radius", "50%"],
    ["opacity", opacity.toString()],
    [
      "transition",
      `transform ${duration * 0.6}ms ${timingFunction}, opacity ${Math.max(duration * 0.05, 140)}ms ease-out`,
    ],
  ];

  element.classList.add(className);

  window.requestAnimationFrame(() => {
    applyStyles([["transform", "translate(-50%, -50%) scale(1)"]], element);
  });

  return applyStyles(styles, element);
}

/**
 * @name applyStyles
 * @param styles <string[][]> The styles to apply
 * @param target <T extends HTMLElement> The target element
 * @returns <T extends HTMLElement> The target element
 * @description Applies the specified styles to the target element
 * @example
 * const element = document.createElement('div');
 * const styles = [['color', 'red'], ['background-color', 'blue']];
 * const styledElement = applyStyles(styles, element);
 * console.info(styledElement.style.color); // red
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */
function applyStyles<T extends HTMLElement>(styles: string[][], target: T): T {
  if (!target) {
    return target;
  }

  for (const [property, value] of styles) {
    property && value && target.style.setProperty(property, value);
  }
  return target;
}

/**
 * @name cancelRippleAnimation
 * @param element <T> The ripple element
 * @param options <Omit<Options<T>, 'color' | 'ref' | 'onSpawn' | 'cancelAutomatically'>> The options to use for the ripple
 * @description Cancels the ripple animation
 * @example
 * const [ref, event] = useRipple();
 * const [ref, event] = useRipple({color: 'blue'});
 * const [ref, event] = useRipple({color: 'blue', duration: 1000});
 * const [ref, event] = useRipple({color: 'blue', duration: 1000, opacity: 0.5});
 * @author Pol Gubau Amores - https://polgubau.com
 */
function cancelRippleAnimation<T extends HTMLElement>(
  element: T,
  options: Omit<RippleOptions<T>, "color" | "ref" | "onSpawn" | "cancelAutomatically">,
) {
  const { duration, timingFunction } = options;
  applyStyles(
    [
      ["opacity", "0"],
      [
        "transition",
        `transform ${duration * 0.6}ms ${timingFunction}, opacity ${duration * 0.65}ms ease-in-out ${
          duration * 0.13
        }ms`,
      ],
    ],
    element,
  );
  if (!window) {
    return;
  }
  window.requestAnimationFrame(() => {
    element.addEventListener("transitionend", (e) => {
      if (e.propertyName === "opacity") {
        element.remove();
      }
    });
  });
}

/**
 * @name createRippleContainer
 * @description Creates a ripple container
 * @param className string - The class name to apply to the container
 * @returns HTMLDivElement - The ripple container
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */
function createRippleContainer(className: string): HTMLDivElement {
  const container = self().createElement("div");
  container.classList.add(className);

  return applyStyles(
    [
      ["position", "absolute"],
      ["height", "100%"],
      ["width", "100%"],
      ["border-radius", "inherit"],
      ["top", "0"],
      ["left", "0"],
      ["pointer-events", "none"],
      ["overflow", "hidden"],
    ],
    container,
  );
}

/**
 * @name isTouchDevice
 * @description Checks if the current device is a touch device
 * @returns A boolean indicating if the current device is a touch device
 * @example
 * const isTouch = isTouchDevice();
 * if (isTouch) {
 *  // do something
 * }
 *  @see https://stackoverflow.com/a/4819886/13188385 - source
 */
function isTouchDevice(): boolean {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    ((navigator as any)?.msMaxTouchPoints ?? false)
  );
}
