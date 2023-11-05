import React from "react";
import { useStyle } from "hooks/useStyle";

const View = ({ children, ...rest }) => {
  const s = useStyle({ padding: "3rem 1rem 0 1rem" }, []);
  return (
    <div {...rest} style={s}>
      {children}
    </div>
  );
};

export default View;
