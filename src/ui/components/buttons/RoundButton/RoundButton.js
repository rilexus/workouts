import styled from "styled-components";
import StylelessButton from "../StylelessButton/StylelessButton";

const RoundButton = styled(StylelessButton)`
  height: 80px;
  width: 80px;
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transform: scale(1);
  transition: transform 20ms;
  &:active {
    transform: scale(0.95);
  }
`;

export default RoundButton;
