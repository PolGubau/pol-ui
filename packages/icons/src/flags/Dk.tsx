import * as React from "react";
function SvgDk(props: React.SVGProps<SVGSVGElement>) {
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
        d="M48.06 3.027H14.063c-3.739 0-5.073.443-6.434 1.171a8.24 8.24 0 00-3.428 3.428c-.728 1.361-1.17 2.695-1.17 6.434v21.874c0 3.739.442 5.073 1.17 6.434a8.24 8.24 0 003.428 3.428c1.361.728 2.695 1.17 6.434 1.17h33.995c3.739 0 5.073-.442 6.434-1.17a8.24 8.24 0 003.428-3.428c.728-1.361 1.17-2.695 1.17-6.434V14.06c0-3.739-.442-5.073-1.17-6.434a8.24 8.24 0 00-3.428-3.428c-1.36-.728-2.695-1.17-6.434-1.17z"
        fill="#F73030"
        stroke="#fff"
        strokeWidth={3.03}
      />
      <path d="M28.032 4.543h-9.09v40.91h9.09V4.542z" fill="#fff" />
      <path d="M57.578 29.544v-9.09H4.548v9.09h53.03z" fill="#fff" />
    </svg>
  );
}
export default SvgDk;
