import styled from "styled-components";

export const Row = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.drawer ? "256px auto" : "1fr")};
  // grid-template-areas:
  //   "header header"
  //   "sidemenu maincontent";
  grid-template-areas: ${(props) =>
    props.drawer
      ? '"header header" "sidemenu maincontent"'
      : '"header" "maincontent"'};
  @media (min-width: 0px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "maincontent";
  }
`;

export const HeaderWrapper = styled.div`
  grid-area: header;
`;

export const MainContentWrapper = styled.div`
  grid-area: maincontent;

  margin-left: 15px;
  margin-right: 15px;
`;

export const SideMenuWrapper = styled.div`
  grid-area: sidemenu;
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
`;
