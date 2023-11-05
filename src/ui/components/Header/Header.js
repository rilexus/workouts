import React, { useCallback } from "react";
import ArrowLeftOutlined from "ui/icons/ArrowLeftOutlined/ArrowLeftOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { Flex, StylelessButton } from "ui/components";
import { useStyle } from "hooks";

const INDEX_PAGE_PATHNAME = "/";

const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  const style = useStyle(
    {
      width: "2rem",
      height: "2rem",
      marginRight: "1rem",
    },
    []
  );

  return location.pathname === INDEX_PAGE_PATHNAME ? null : (
    <StylelessButton onClick={goBack} style={style}>
      <ArrowLeftOutlined width={"1.5rem"} height={"1.5rem"} />
    </StylelessButton>
  );
};

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

  return (
    <div style={s}>
      <Flex align={"center"}>
        <BackButton />
        {children}
      </Flex>
    </div>
  );
};

export default Header;
