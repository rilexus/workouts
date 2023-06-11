import React from "react";
import { PauseIconOutlined } from "ui/icons";
import styled from "styled-components";
import RoundButton from "../RoundButton/RoundButton";

const Button = styled(RoundButton)`
  background-color: #805810;
`;

const PauseButton = (props) => {
  return (
    <Button {...props}>
      <PauseIconOutlined height={"2rem"} width={"2rem"} fill={"orange"} />
    </Button>
  );
};

export default PauseButton;
