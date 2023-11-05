import React from "react";
import { useStyle } from "hooks";

const Absolute = ({ children, style }) => {
  const s = useStyle(
    {
      ...style,
      position: "absolute",
    },
    [style]
  );
  return <div style={s}>{children}</div>;
};

export { Absolute };
