import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 256px auto;
  grid-template-areas: "logo header";
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  @media (min-width: 0px) and (max-width: 767px) {
    grid-template-columns: 100px auto;
  }
`;

const FlexRowSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FlexRowSpaceAround = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const LogoArea = styled(FlexRowSpaceAround)`
  grid-area: logo;
`;

export const HeaderArea = styled(FlexRowSpaceBetween)`
  padding: 0px 15px;
  grid-area: header;

  @media (min-width: 0px) and (max-width: 980px) {
    flex-direction: column;
    align-items: flex-end;
    padding: 15px 15px;
  }
`;

export const Logo = styled.div`
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
`;

export const FlexStartAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flext-start;
  @media (min-width: 0px) and (max-width: 980px) {
    margin-bottom: 5px;
  }
`;

export const IconContent = styled.span`
  font-size: 0.8rem;
  margin-left: 5px;
  color: ${(props) => (props.style ? props.style.color : "#504f4fd9")};
  @media (min-width: 0px) and (max-width: 517px) {
    display: none;
  }
`;
