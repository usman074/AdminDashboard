import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: grid;
  // grid-template-columns: [column-one] 1fr [column-two] 1fr [column-three] 1fr [column-four] 1fr [column-end];
  // grid-template-rows: [row-one] auto [row-two] auto [row-three] auto [row-four] auto [row-end];
  grid-template-columns: 1fr 1fr 1fr 1fr;
  // grid-template-rows: auto auto;
  grid-template-areas:
    "server users revenue booking"
    "files messages activities pageviews"
    "profile activity widgetsOne widgetsTwo"
    "map map map map";
  // grid-template-rows: auto;
  gap: 15px 15px;

  @media (min-width: 576px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "server users"
      "revenue booking"
      "files messages"
      "activities pageviews"
      "profile activity"
      "widgetsOne widgetsTwo"
      "map map";
  }
  @media (min-width: 0px) and (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "server"
      "users"
      "revenue"
      "booking"
      "files"
      "messages"
      "activities"
      "pageviews"
      "profile"
      "activity"
      "widgetsOne"
      "widgetsTwo"
      "map";
  }
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SectionOne = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 15px 15px;
  @media (min-width: 576px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 0px) and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 15px 15px;
  margin-top: 15px;
  @media (min-width: 576px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 0px) and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionTwoLeft = styled.div`
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 15px 15px;
  @media (min-width: 0px) and (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-column: 1/2;
  }
`;

export const SectionTwoRight = styled.div`
  grid-column: 3/5;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 15px 15px;

  @media (min-width: 576px) and (max-width: 767px) {
    grid-column: 1/3;
  }
  @media (min-width: 0px) and (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-column: 1/2;
  }
`;

export const SectionThree = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin-top: 15px;
`;
