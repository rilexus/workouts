import React from "react";

const Header = ({ children }) => {
  return (
    <div
      style={{
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      {children}
    </div>
  );
};

export default Header;
