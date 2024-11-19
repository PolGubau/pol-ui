import * as React from "react";
function SvgIn(props: React.SVGProps<SVGSVGElement>) {
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
        fill="#fff"
        stroke="#fff"
        strokeWidth={3.03}
      />
      <path
        d="M14.064 4.547H48.06c3.31 0 4.51.344 5.72.992a6.746 6.746 0 012.806 2.806c.647 1.21.991 2.41.991 5.72v2.603H4.547v-2.604c0-3.31.344-4.51.992-5.719a6.746 6.746 0 012.806-2.807c1.21-.647 2.41-.991 5.72-.991z"
        fill="#FF9600"
      />
      <path
        d="M57.577 33.332v2.604c0 3.31-.344 4.51-.991 5.72a6.746 6.746 0 01-2.807 2.806c-1.21.647-2.41.991-5.72.991H14.065c-3.31 0-4.51-.344-5.719-.991a6.746 6.746 0 01-2.807-2.807c-.647-1.21-.991-2.41-.991-5.72v-2.603h53.03z"
        fill="#8FD130"
      />
      <path
        d="M31.06 31.063a6.06 6.06 0 110-12.122 6.06 6.06 0 010 12.122zm0-3.03a3.03 3.03 0 100-6.061 3.03 3.03 0 000 6.06z"
        fill="#1D80AE"
      />
    </svg>
  );
}
export default SvgIn;
