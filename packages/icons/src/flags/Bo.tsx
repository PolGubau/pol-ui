import * as React from "react";
function SvgBo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 63 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2091_2128)">
        <path fill="#FFDA27" d="M3.063 3.445h55.996v43.998H3.063z" />
        <path
          d="M14.584 5.031h33.995c3.31 0 4.51.345 5.72.992a6.746 6.746 0 012.806 2.806c.647 1.21.992 2.41.992 5.72v2.604H5.067v-2.604c0-3.31.344-4.51.991-5.72a6.746 6.746 0 012.806-2.806c1.21-.647 2.41-.992 5.72-.992z"
          fill="#F63030"
        />
        <path
          d="M58.097 33.816v2.604c0 3.31-.345 4.51-.992 5.72a6.747 6.747 0 01-2.806 2.806c-1.21.647-2.41.992-5.72.992H14.584c-3.31 0-4.51-.345-5.72-.992a6.746 6.746 0 01-2.806-2.806c-.647-1.21-.992-2.41-.992-5.72v-2.604h53.03z"
          fill="#8FD130"
        />
        <circle
          cx={31.063}
          cy={25.508}
          r={4.652}
          fill="#0EA6FB"
          stroke="#F63030"
          strokeWidth={3}
        />
      </g>
      <rect
        x={3.063}
        y={3.508}
        width={56}
        height={44}
        rx={9}
        stroke="#fff"
        strokeWidth={3}
      />
      <defs>
        <clipPath id="clip0_2091_2128">
          <rect x={3.063} y={3.508} width={56} height={44} rx={9} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgBo;
