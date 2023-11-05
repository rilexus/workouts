import React from "react";
import { useStyle } from "hooks";

const Fixed = ({ children, style }) => {
  const s = useStyle(
    {
      ...style,
      position: "fixed",
    },
    [style]
  );
  return <div style={s}>{children}</div>;
};

export { Fixed };
