import React from "react";

const StopIconFilled = ({
  stroke = "currentColor",
  fill = "currentColor",
  strokeWidth = "0",
  viewBox = "0 0 16 16",
  height = "1em",
  width = "1em",
}) => {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      strokeWidth={strokeWidth}
      viewBox={viewBox}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"></path>
    </svg>
  );
};

export default StopIconFilled;
