import styled from "styled-components";

export const CardWrapper = styled.div`
  // grid-column-start: ${(props) => props.startColumn};
  // grid-column-end: ${(props) => props.endColumn};
  // grid-row-start: ${(props) => props.startRow};
  // grid-row-end: ${(props) => props.endRow};
  grid-area: ${(props) => props.gridArea};
  border: 1px solid red;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;
