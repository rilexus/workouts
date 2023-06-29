import React from "react";
import styled from "styled-components";
import { RoundButton } from "../RoundButton";
import { PlayIconFilled } from "ui/icons";
import { color } from "ui/css/colors";

const Button = styled(RoundButton)`
  background-color: ${color("yellow.80")};
`;

const PlayButton = (props) => {
  return (
    <Button {...props}>
      <PlayIconFilled
        style={{
          display: "block",
        }}
        height={"2rem"}
        width={"2rem"}
        fill={"yellow"}
      />
    </Button>
  );
};

export default PlayButton;
