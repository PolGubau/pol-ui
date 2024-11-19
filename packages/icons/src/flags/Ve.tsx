import * as React from "react";
function SvgVe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 63 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2091_2068)">
        <path fill="#0EA6FB" d="M3.449 3.094h55.996v43.998H3.449z" />
        <path
          d="M41.738 28.73v0c-3.56-9.513-17.017-9.513-20.578 0v0"
          stroke="#fff"
          strokeWidth={2.851}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0.95 3.33"
        />
        <path
          d="M13.568 4.098h36.1c3.514 0 4.788.36 6.073 1.039a7.117 7.117 0 012.98 2.941c.688 1.268 1.054 2.526 1.054 5.994v2.729H3.46v-2.729c0-3.468.366-4.726 1.053-5.994a7.118 7.118 0 012.98-2.941c1.285-.678 2.56-1.04 6.074-1.04z"
          fill="#FFDA27"
        />
        <path
          d="M59.512 33.465v2.703c0 3.437-.362 4.683-1.043 5.94a7.051 7.051 0 01-2.953 2.913c-1.273.672-2.535 1.03-6.017 1.03H13.732c-3.482 0-4.744-.358-6.017-1.03a7.051 7.051 0 01-2.953-2.914c-.68-1.256-1.043-2.502-1.043-5.939v-2.703h55.793z"
          fill="#F63030"
        />
      </g>
      <rect
        x={3.449}
        y={3.156}
        width={56}
        height={44}
        rx={9}
        stroke="#fff"
        strokeWidth={3}
      />
      <defs>
        <clipPath id="clip0_2091_2068">
          <rect x={3.449} y={3.156} width={56} height={44} rx={9} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgVe;
