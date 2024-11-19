import * as React from "react";
function SvgPe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 63 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2091_2114)">
        <path fill="#fff" d="M2.887 3.793h55.996v43.998H2.887z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.914 4.727v42.066H4.31V4.727h17.605zM57.91 4.727v42.066H40.305V4.727H57.91z"
          fill="#F63030"
        />
        <circle
          cx={31.063}
          cy={25.762}
          r={5.152}
          stroke="#50B500"
          strokeWidth={2}
        />
        <rect
          x={28.441}
          y={23.313}
          width={4.891}
          height={4.891}
          rx={1}
          fill="#F63030"
        />
      </g>
      <rect
        x={2.887}
        y={3.855}
        width={56}
        height={44}
        rx={9}
        stroke="#fff"
        strokeWidth={3}
      />
      <defs>
        <clipPath id="clip0_2091_2114">
          <rect x={2.887} y={3.855} width={56} height={44} rx={9} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgPe;
