import styled from "styled-components";
import { Menu, Switch, List } from "antd";

const { SubMenu } = Menu;

export const SideMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-areas:
    "profile"
    "highlights"
    "menu"
    "songsPercentage"
    "audioPlayer"
    "list";
`;

export const FlexRowSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FlexColumnSpaceBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: ${(props) => (props.style ? props.style.height : "300px")};
`;

export const ProfileArea = styled(FlexRowSpaceBetween)`
  grid-area: profile;
`;

export const StatusDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.style ? props.style.color : "black")};
  color: #77f377d1;
  border-radius: 50%;
  display: inline-block;
`;

export const HiglightsArea = styled(FlexRowSpaceBetween)`
  grid-area: highlights;
  margin: 40px 0px;
`;

export const HighLights = styled.div`
  background-color: #3581a4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 60px !important;
  height: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10%;
`;

export const MenuArea = styled.div`
  grid-area: menu;
  margin: 40px 0px;
`;

export const MenuStyled = styled(Menu)`
  // width: 100%;
  background-color: transparent;
  border: none;
`;

export const MenuItemStyled = styled(Menu.Item)`
  color: #0db0f1c9;
  &.ant-menu-item-selected {
    background-color: rgb(0 76 109) !important;
    color: white;
  }
  &.ant-menu-item-selected::after {
    border: none;
  }
`;

export const SubMenuStyled = styled(SubMenu)`
  color: #0db0f1c9;
  &&.ant-menu-submenu > .ant-menu {
    background-color: transparent;
  }
`;

export const SwitchStyled = styled(Switch)`
  &.ant-switch-checked {
    background-color: green;
  }
  &.ant-switch {
    height: 15px;
    min-width: 30px;
  }
  &&.ant-switch .ant-switch-handle {
    width: 11px !important;
    height: 11px !important;
  }
  &&.ant-switch-checked .ant-switch-handle {
    left: calc(100% - 10px - 2px);
  }
`;

export const SongsPercentageArea = styled.div`
  grid-area: songsPercentage;
  margin: 40px 0px;
`;

export const ProgressBarWidth = styled.div`
  width: 100%;
`;

export const AudioPlayerArea = styled.div`
  grid-area: audioPlayer;
`;

export const IconsAlign = styled(FlexRowSpaceBetween)`
  width: 100%;
`;

export const ListArea = styled.div`
  grid-area: list;
  margin: 50px 0px;
`;

export const ListStyled = styled(List)`
  background-color: #3581a4;
  padding: 10px;
  width: 100%;
  height: 275px;
  overflow-y: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  &&.ant-list-split .ant-list-item {
    border: none;
  }
`;

export const ListItemAlign = styled(FlexRowSpaceBetween)`
  width: 100%;
`;
export const TextEllipsis = styled.div`
  width: 120px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: white;
`;
