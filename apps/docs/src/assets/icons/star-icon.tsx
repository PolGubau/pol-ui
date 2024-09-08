import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={123}
    height={122}
    fill="none"
  >
    <path
      fill="currentColor"
      d="M51.063 6.986c3.935-9.315 17.134-9.315 21.07 0l11.017 26.08a11.436 11.436 0 0 0 6.084 6.084l26.08 11.018c9.314 3.934 9.314 17.134 0 21.069l-26.08 11.017a11.436 11.436 0 0 0-6.084 6.084L72.132 114.42c-3.935 9.314-17.134 9.314-21.069 0l-11.017-26.08a11.436 11.436 0 0 0-6.085-6.085L7.881 71.237c-9.314-3.935-9.314-17.135 0-21.07l26.08-11.017a11.436 11.436 0 0 0 6.085-6.084l11.017-26.08Z"
    />
  </svg>
);
export { SvgComponent as StarIcon };
