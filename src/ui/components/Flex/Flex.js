import React from "react";
import { useStyle } from "hooks";

const Flex = ({ children, align = "normal" }) => {
  const style = useStyle(
    {
      display: "flex",
      alignItems: align,
    },
    [align]
  );
  return <div style={style}>{children}</div>;
};

export default Flex;
