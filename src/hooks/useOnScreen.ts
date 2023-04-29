import { useEffect, useState } from "react";
import { UseOnScreenOptions } from "types";

function useOnScreen(
  ref: React.RefObject<HTMLElement>,
  { once = false, rootMargin = "0px" }: UseOnScreenOptions = {}
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);

        if (entry.isIntersecting && once) {
          observer.unobserve(entry.target);
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, once, rootMargin]);

  return isIntersecting;
}

export default useOnScreen;

/** 
 * @Example
 *   const isVisible = useOnScreen(imgRef, { once: true, rootMargin: '-100px' });
 * @description This hook allows you to easily detect when an element is visible on the screen as well as specify how much of the element should be visible before being considered on screen. Perfect for lazy loading images or triggering animations when the user has scrolled down to a particular section.
 * 
 * @param {React.RefObject<HTMLElement>} ref - The ref of the element to observe.
 * @param {UseOnScreenOptions} options - The options to use for the IntersectionObserver.
 * @param {boolean} options.once - Whether to stop observing the element after it has been intersected once.
 * @param {string} options.rootMargin - The root margin to use for the IntersectionObserver.
 * 
 * @returns {boolean} - Whether the element is currently visible on the screen.
 * 
 * @author Pol Gubau Amores
 * @version 0.0.42
 * @since 0.0.42
 * 
 * 

 */
