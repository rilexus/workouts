import React from "react";

const ArrowRightOutlined = ({
  stroke = "currentColor",
  fill = "currentColor",
  strokeWidth = "0",
  viewBox = "0 0 24 24",
  height = "1em",
  width = "1em",
  style,
}) => {
  return (
    <svg
      style={style}
      stroke={stroke}
      fill={fill}
      strokeWidth={strokeWidth}
      viewBox={viewBox}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </svg>
  );
};

export default ArrowRightOutlined;
