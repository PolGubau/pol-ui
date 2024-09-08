import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={149}
    height={113}
    fill="none"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m97.128 89.05-19.204 21.388c-2.333 2.597-6.453 2.427-8.563-.353L54.269 90.197a18.063 18.063 0 0 0-14.39-7.143H18.623C8.646 83.054.56 74.966.56 64.99V18.954C.56 8.978 8.646.89 18.622.89h111.565c9.976 0 18.063 8.087 18.063 18.063V64.99c0 9.975-8.087 18.063-18.063 18.063h-19.619a18.064 18.064 0 0 0-13.44 5.995Z"
    />
  </svg>
);
export { SvgComponent as PopoverIcon };
