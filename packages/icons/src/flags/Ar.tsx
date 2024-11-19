import * as React from "react";
function SvgAr(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 63 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2089_1896)">
        <path fill="#fff" d="M3.449 3.891h55.996v43.998H3.449z" />
        <path
          d="M14.97 5.477h33.996c3.31 0 4.51.344 5.72.991a6.746 6.746 0 012.806 2.807c.647 1.21.991 2.41.991 5.719v2.604H5.453v-2.604c0-3.31.345-4.51.992-5.72A6.746 6.746 0 019.25 6.469c1.21-.647 2.41-.991 5.72-.991zM58.483 34.262v2.603c0 3.31-.344 4.51-.991 5.72a6.746 6.746 0 01-2.807 2.806c-1.21.647-2.41.992-5.719.992H14.971c-3.31 0-4.51-.345-5.72-.992a6.746 6.746 0 01-2.806-2.806c-.647-1.21-.992-2.41-.992-5.72v-2.603h53.03z"
          fill="#0EA6FB"
        />
        <circle
          cx={31.445}
          cy={25.891}
          r={4.652}
          fill="#FF9600"
          stroke="#FFDA27"
          strokeWidth={3}
        />
      </g>
      <rect
        x={3.449}
        y={3.953}
        width={56}
        height={44}
        rx={9}
        stroke="#fff"
        strokeWidth={3}
      />
      <defs>
        <clipPath id="clip0_2089_1896">
          <rect x={3.449} y={3.953} width={56} height={44} rx={9} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgAr;
