import React from "react";
import styled from "styled-components";
import { RoundButton } from "../RoundButton";
import { PlayIconFilled } from "ui/icons";

const Button = styled(RoundButton)``;

const PlayButton = (props) => {
  return (
    <Button {...props}>
      <PlayIconFilled fill={"yellow"} />
    </Button>
  );
};

export default PlayButton;
