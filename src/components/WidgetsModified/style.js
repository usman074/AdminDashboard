import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "server users revenue booking"
    "files messages activities pageviews"
    "profile activity newWidget downloaded"
    "profile activity newWidget downloaded"
    "profile activity load usage"
    "profile activity load usage"
    "profile activity numbers smallGraph"
    "smallTable Calendar numbers smallGraph"
    "smallTable Calendar downloads uploads"
    ". . downloads uploads"
    "map map map map";
  gap: 15px 15px;

  @media (min-width: 576px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "server users"
      "revenue booking"
      "files messages"
      "activities pageviews"
      "profile activity"
      "smallTable Calendar"
      "newWidget downloaded"
      "load usage"
      "numbers smallGraph"
      "downloads uploads"
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
      "smallTable"
      "activity"
      "Calendar"
      "newWidget"
      "downloaded"
      "load"
      "usage"
      "numbers"
      "smallGraph"
      "downloads"
      "uploads"
      "map";
  }
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
