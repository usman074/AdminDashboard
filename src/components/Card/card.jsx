import React from "react";

import { CardWrapper } from "./style";
const Card = ({ startColumn, endColumn, startRow, endRow, gridArea }) => {
  return (
    <CardWrapper
      startColumn={startColumn}
      endColumn={endColumn}
      startRow={startRow}
      endRow={endRow}
      gridArea={gridArea}
    >
      Card {startColumn} {endColumn} {startRow} {endRow} {gridArea}
    </CardWrapper>
  );
};

export default Card;
