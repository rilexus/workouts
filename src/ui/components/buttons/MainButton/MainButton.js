import React from "react";
import styled from "styled-components";
import { rounded2xl } from "ui/css";
import StylelessButton from "ui/components/buttons/StylelessButton/StylelessButton";

const Button = styled(StylelessButton)`
  padding: 1rem 2rem;
  ${rounded2xl};
`;

const MainButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default MainButton;
