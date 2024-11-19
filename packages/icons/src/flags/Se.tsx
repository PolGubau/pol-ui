import * as React from "react";
function SvgSe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 63 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M48.06 3.031H14.063c-3.739 0-5.073.443-6.434 1.171A8.24 8.24 0 004.202 7.63c-.728 1.361-1.17 2.695-1.17 6.434v21.874c0 3.739.442 5.073 1.17 6.434A8.24 8.24 0 007.63 45.8c1.361.728 2.695 1.17 6.434 1.17h33.995c3.739 0 5.073-.442 6.434-1.17a8.24 8.24 0 003.428-3.428c.728-1.361 1.17-2.695 1.17-6.434V14.064c0-3.739-.442-5.073-1.17-6.434a8.24 8.24 0 00-3.428-3.428c-1.36-.728-2.695-1.17-6.434-1.17z"
        fill="#1D80AE"
        stroke="#fff"
        strokeWidth={3.03}
      />
      <path
        d="M26.517 4.547v15.15l31.06.001v10.607l-31.06-.001v15.152H15.91V30.304H4.546V19.699H15.91V4.547h10.606z"
        fill="#FFDA27"
      />
    </svg>
  );
}
export default SvgSe;
