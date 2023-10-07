import React from "react";

const style = {
  fontWeight: 600,
  fontSize: "2rem",
};

const PrimaryTitle = ({ children }) => {
  return <h1 style={style}>{children}</h1>;
};

export default PrimaryTitle;
