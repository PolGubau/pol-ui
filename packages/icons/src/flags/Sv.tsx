import * as React from "react";
function SvgSv(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 63 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2091_2085)">
        <path fill="#fff" d="M3.449 3.313h55.996v43.998H3.449z" />
        <path
          d="M14.97 4.898h33.996c3.31 0 4.51.345 5.72.992a6.746 6.746 0 012.806 2.807c.647 1.21.991 2.41.991 5.719v2.604H5.453v-2.604c0-3.31.345-4.51.992-5.72A6.746 6.746 0 019.25 5.89c1.21-.647 2.41-.992 5.72-.992zM58.483 33.684v2.603c0 3.31-.344 4.51-.991 5.72a6.746 6.746 0 01-2.807 2.806c-1.21.647-2.41.992-5.719.992H14.971c-3.31 0-4.51-.345-5.72-.992a6.746 6.746 0 01-2.806-2.806c-.647-1.21-.992-2.41-.992-5.72v-2.603h53.03z"
          fill="#0EA6FB"
        />
        <path
          d="M30.753 22.247a.8.8 0 011.385 0l2.278 3.946a.8.8 0 01-.693 1.2h-4.556a.8.8 0 01-.693-1.2l2.279-3.946z"
          fill="#8FD130"
        />
        <circle
          cx={31.445}
          cy={25.313}
          r={5.152}
          stroke="#FFDA27"
          strokeWidth={2}
        />
      </g>
      <rect
        x={3.449}
        y={3.375}
        width={56}
        height={44}
        rx={9}
        stroke="#fff"
        strokeWidth={3}
      />
      <defs>
        <clipPath id="clip0_2091_2085">
          <rect x={3.449} y={3.375} width={56} height={44} rx={9} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgSv;
