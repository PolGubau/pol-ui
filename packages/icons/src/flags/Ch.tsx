import * as React from "react";
function SvgCh(props: React.SVGProps<SVGSVGElement>) {
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
        d="M48.06 3.035H14.063c-3.739 0-5.073.443-6.434 1.17a8.24 8.24 0 00-3.428 3.429c-.728 1.36-1.17 2.695-1.17 6.434v21.874c0 3.739.442 5.073 1.17 6.434a8.24 8.24 0 003.428 3.428c1.361.728 2.695 1.17 6.434 1.17h33.995c3.739 0 5.073-.442 6.434-1.17a8.241 8.241 0 003.428-3.428c.728-1.361 1.17-2.695 1.17-6.434V14.068c0-3.739-.442-5.073-1.17-6.434a8.24 8.24 0 00-3.428-3.428c-1.36-.728-2.695-1.17-6.434-1.17z"
        fill="#F63030"
        stroke="#fff"
        strokeWidth={3.03}
      />
      <path
        d="M33.717 13.797c.419 0 .758.34.758.758v6.384c0 .418.339.758.757.758h6.403c.419 0 .758.34.758.758v4.946c0 .419-.34.758-.758.758l-6.402-.001a.758.758 0 00-.758.758v6.529c0 .418-.34.757-.758.757h-4.946a.758.758 0 01-.758-.757v-6.53a.758.758 0 00-.757-.757H20.48a.757.757 0 01-.757-.757v-4.946c0-.418.339-.757.757-.758h6.776c.418 0 .758-.34.758-.758v-6.384c0-.419.339-.758.757-.758h4.946z"
        fill="#fff"
      />
    </svg>
  );
}
export default SvgCh;
