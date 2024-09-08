import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={117}
    height={117}
    fill="none"
  >
    <path
      className="w-auto h-auto"
      fill="currentColor"
      fillRule="evenodd"
      d="M116.303 11.667c0-6.22-5.066-11.263-11.316-11.263H11.366C5.116.404.05 5.447.05 11.667S5.116 22.93 11.366 22.93h66.302L3.364 96.883a11.225 11.225 0 0 0 0 15.928c4.42 4.398 11.584 4.398 16.004 0L93.67 38.858v65.989c0 6.22 5.066 11.263 11.316 11.263 6.25 0 11.316-5.043 11.316-11.263v-93.18Z"
      clipRule="evenodd"
    />
  </svg>
);
export { SvgComponent as ArrowIcon };
