import * as React from "react";
function SvgUy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 64 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2089_1929)">
        <path fill="#fff" d="M3.793 3.422h55.996V47.42H3.793z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M58.823 27.746v5.327H5.555v-5.327h53.268zM58.823 37.602v5.327H5.555v-5.327h53.268zM58.823 17.89v5.328H24.738V17.89h34.085zM58.823 8.035v5.327H24.738V8.035h34.085z"
          fill="#0EA6FB"
        />
        <circle
          cx={14.398}
          cy={16.23}
          r={4.652}
          fill="#FF9600"
          stroke="#FFDA27"
          strokeWidth={3}
        />
      </g>
      <rect
        x={3.793}
        y={3.484}
        width={56}
        height={44}
        rx={9}
        stroke="#fff"
        strokeWidth={3}
      />
      <defs>
        <clipPath id="clip0_2089_1929">
          <rect x={3.793} y={3.484} width={56} height={44} rx={9} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgUy;
