import * as React from "react";
function SvgCo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 64 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2089_1956)">
        <path fill="#fff" d="M3.793 3.641h55.996v43.998H3.793z" />
        <path fill="#0EA6FB" d="M2.242 25.703h57.551v10.182H2.242z" />
        <path fill="#FFDA27" d="M2.242 5.258h57.551v20.447H2.242z" />
        <path fill="#F63030" d="M2.242 35.887h57.551v11.754H2.242z" />
        <circle
          cx={31.016}
          cy={25.707}
          r={4.652}
          fill="#FF9600"
          stroke="#FFDA27"
          strokeWidth={3}
        />
      </g>
      <rect
        x={3.793}
        y={3.703}
        width={56}
        height={44}
        rx={9}
        stroke="#fff"
        strokeWidth={3}
      />
      <defs>
        <clipPath id="clip0_2089_1956">
          <rect x={3.793} y={3.703} width={56} height={44} rx={9} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgCo;
