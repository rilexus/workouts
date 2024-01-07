import { useStyle } from "hooks";
import { Link } from "react-router-dom";
import ArrowLeftOutlined from "ui/icons/ArrowLeftOutlined/ArrowLeftOutlined";
import React from "react";

const BackButton = ({ to }) => {
  const style = useStyle(
    {
      width: "2rem",
      height: "2rem",
      marginRight: "1rem",
      display: "flex",
      alignItems: "center",
    },
    []
  );

  return (
    <Link to={to} style={style}>
      <ArrowLeftOutlined width={"1.5rem"} height={"1.5rem"} />
    </Link>
  );
};

export default BackButton;
