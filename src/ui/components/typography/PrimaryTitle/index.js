import React from "react";

const PrimaryTitle = ({ children }) => {
  return (
    <h1
      style={{
        fontWeight: 400,
        fontSize: "1.5rem",
      }}
    >
      {children}
    </h1>
  );
};

export default PrimaryTitle;
