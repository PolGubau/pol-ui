import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={169}
    height={102}
    fill="none"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M50.638 0C22.67 0 0 22.671 0 50.638c0 27.966 22.671 50.637 50.638 50.637h67.62c27.966 0 50.638-22.67 50.638-50.637S146.224 0 118.258 0h-67.62Zm66.373 13.04c-20.764 0-37.596 16.834-37.596 37.598s16.832 37.597 37.596 37.597c20.765 0 37.597-16.833 37.597-37.597 0-20.764-16.832-37.597-37.597-37.597Z"
      clipRule="evenodd"
    />
  </svg>
);
export { SvgComponent as SwitchIcon };
