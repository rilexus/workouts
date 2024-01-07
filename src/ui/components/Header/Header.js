import React from "react";
import ArrowLeftOutlined from "ui/icons/ArrowLeftOutlined/ArrowLeftOutlined";
import { Link } from "react-router-dom";
import { useStyle } from "hooks";

const Header = ({ children }) => {
  const s = useStyle(
    {
      padding: "0.5rem 0 0.5rem 0",
      position: "fixed",
      top: 0,
      width: "100%",
      backgroundColor: "black",
    },
    []
  );

  return <div style={s}>{children}</div>;
};

export default Header;
