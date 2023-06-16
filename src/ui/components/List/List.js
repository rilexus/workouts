import styled from "styled-components";
import { gray } from "ui/css/colors";

const List = styled.ul`
  list-style: none;
`;
const ListElement = styled.li`
  border-bottom: 1px solid ${gray("90")};
  padding: 1rem 1rem;
  font-size: 1rem;
`;

List.Element = ListElement;

export default List;
