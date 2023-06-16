import React from "react";

const PrimaryTitle = ({ children }) => {
  return (
    <h1
      style={{
        fontSize: "2rem",
      }}
    >
      {children}
    </h1>
  );
};

export default PrimaryTitle;
