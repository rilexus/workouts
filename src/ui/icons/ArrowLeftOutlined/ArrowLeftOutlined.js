import React from "react";

const ArrowLeftOutlined = ({
  stroke = "currentColor",
  fill = "currentColor",
  strokeWidth = "0",
  viewBox = "0 0 1024 1024",
  height = "1em",
  width = "1em",
}) => (
  <svg
    stroke={stroke}
    fill={fill}
    strokeWidth={strokeWidth}
    viewBox={viewBox}
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
  </svg>
);

export default ArrowLeftOutlined;
