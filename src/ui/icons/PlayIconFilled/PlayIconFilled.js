import React from "react";

const PlayIconFilled = ({
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
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
    </svg>
  );
};

export default PlayIconFilled;
