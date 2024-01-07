import React from "react";
import styled from "styled-components";
import { rounded4xl } from "ui/css";
import StylelessButton from "ui/components/buttons/StylelessButton/StylelessButton";

const Button = styled(StylelessButton)`
  padding: 1rem 2rem;
  ${rounded4xl};
  background-color: #232323;

  transform: scale(1);
  transition: transform 70ms;

  &:active {
    transform: scale(0.97);
  }
  font-size: 1rem;
`;

const MainButton = Button;

export default MainButton;
