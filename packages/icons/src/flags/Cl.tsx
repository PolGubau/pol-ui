import * as React from "react";
function SvgCl(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 63 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2089_1860)">
        <path fill="#fff" d="M3.211 3.453h55.996v43.998H3.211z" />
        <path fill="#F63030" d="M1.66 25.516h57.551v23.273H1.66z" />
        <path fill="#0EA6FB" d="M1.66 2.18h23.648v23.273H1.66z" />
        <path
          d="M14.365 19.362l-1.53.816a1.046 1.046 0 01-1.42-.438 1.061 1.061 0 01-.107-.671l.297-1.753a.76.76 0 00-.215-.667l-1.25-1.237a1.069 1.069 0 01-.012-1.505c.162-.165.373-.273.6-.306l1.714-.253a.753.753 0 00.567-.417l.768-1.578a1.046 1.046 0 011.883 0l.767 1.578c.11.225.322.38.568.417l1.713.252a1.066 1.066 0 01.588 1.812l-1.25 1.237a.76.76 0 00-.214.667l.296 1.753a1.055 1.055 0 01-.859 1.218 1.044 1.044 0 01-.667-.109l-1.53-.816a.75.75 0 00-.707 0z"
          fill="#fff"
        />
      </g>
      <rect
        x={3.211}
        y={3.516}
        width={56}
        height={44}
        rx={9}
        stroke="#fff"
        strokeWidth={3}
      />
      <defs>
        <clipPath id="clip0_2089_1860">
          <rect x={3.211} y={3.516} width={56} height={44} rx={9} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgCl;
