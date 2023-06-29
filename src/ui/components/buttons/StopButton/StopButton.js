import { CloseIconOutlined } from "ui/icons";
import React from "react";
import RoundButton from "../RoundButton/RoundButton";
import styled from "styled-components";

const Button = styled(RoundButton)`
  background-color: #4b4b4b;
`;

const StopButton = (props) => {
  return (
    <Button {...props}>
      <CloseIconOutlined
        style={{
          display: "block",
        }}
        height={"2rem"}
        width={"2rem"}
        fill={"white"}
      />
    </Button>
  );
};
export default StopButton;
