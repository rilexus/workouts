import styled from "styled-components";
import StylelessButton from "../StylelessButton/StylelessButton";

const RoundButton = styled(StylelessButton)`
  padding: 1rem 1.1rem;
  border-radius: 6rem;
  outline: none;
  transform: scale(1);
  transition: transform 20ms;
  &:active {
    transform: scale(0.95);
  }
`;

export default RoundButton;
