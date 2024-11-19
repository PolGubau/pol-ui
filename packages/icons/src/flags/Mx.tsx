import * as React from "react";
function SvgMx(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 63 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2091_2018)">
        <path fill="#fff" d="M3.262 3.699h55.996v43.998H3.262z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.29 4.633v42.066H4.683V4.633h17.605z"
          fill="#8FD130"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M58.285 4.633v42.066H40.68V4.633h17.605z"
          fill="#F63030"
        />
        <path
          d="M35.91 24.765c0 2.685-2.116 4.8-4.652 4.8s-4.652-2.115-4.652-4.8c0-2.685 2.116-4.8 4.652-4.8s4.652 2.115 4.652 4.8z"
          fill="#9B5F38"
          stroke="#9B5F38"
          strokeWidth={3}
        />
        <path
          d="M26.063 30.445l.249.225a7.187 7.187 0 009.86-.225v0"
          stroke="#8FD130"
          strokeWidth={1.265}
          strokeLinecap="round"
        />
      </g>
      <rect
        x={3.262}
        y={3.762}
        width={56}
        height={44}
        rx={9}
        stroke="#fff"
        strokeWidth={3}
      />
      <defs>
        <clipPath id="clip0_2091_2018">
          <rect x={3.262} y={3.762} width={56} height={44} rx={9} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgMx;
