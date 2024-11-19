import * as React from "react";
function SvgCat(props: React.SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.06 3.035H14.063c-3.739 0-5.073.443-6.434 1.17a8.24 8.24 0 00-3.428 3.429c-.728 1.36-1.17 2.695-1.17 6.434v21.874c0 3.739.442 5.073 1.17 6.434a8.24 8.24 0 003.428 3.428c1.361.728 2.695 1.17 6.434 1.17h33.995c3.739 0 5.073-.442 6.434-1.17a8.241 8.241 0 003.428-3.428c.728-1.361 1.17-2.695 1.17-6.434V14.068c0-3.739-.442-5.073-1.17-6.434a8.24 8.24 0 00-3.428-3.428c-1.36-.728-2.695-1.17-6.434-1.17z"
        fill="#F73030"
        stroke="#fff"
        strokeWidth={3.03}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.067 4.55h33.996c3.309 0 4.51.345 5.719.992a6.746 6.746 0 012.806 2.807c.13.244.249.487.354.747H5.187a7.71 7.71 0 01.354-.747 6.746 6.746 0 012.807-2.807c1.21-.647 2.41-.991 5.72-.991zM57.575 13.64c.002.139.002.28.002.427v4.12H4.547v-4.12c0-.146 0-.288.002-.426h53.026zM57.577 22.73v4.546H4.547V22.73h53.03zM57.577 35.94c0 .146 0 .288-.002.426H4.55a44.01 44.01 0 01-.002-.427V31.82h53.03v4.12zM56.942 40.914a7.69 7.69 0 01-.354.747 6.746 6.746 0 01-2.806 2.807c-1.21.647-2.41.991-5.72.991H14.068c-3.31 0-4.51-.344-5.72-.991a6.746 6.746 0 01-2.806-2.807 7.714 7.714 0 01-.354-.747h51.755z"
        fill="#FFDA27"
      />
    </svg>
  );
}
export default SvgCat;
