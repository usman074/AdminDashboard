import React, { useState, useEffect, createRef } from "react";
import {
  Drawer,
  Input,
  Avatar,
  Typography,
  Progress,
  Badge,
  List,
  Space,
} from "antd";
//Styled Components
import {
  SideMenuWrapper,
  ProfileArea,
  StatusDot,
  HiglightsArea,
  HighLights,
  MenuArea,
  MenuStyled,
  MenuItemStyled,
  SubMenuStyled,
  SwitchStyled,
  SongsPercentageArea,
  ProgressBarWidth,
  AudioPlayerArea,
  IconsAlign,
  ListArea,
  ListStyled,
  ListItemAlign,
  TextEllipsis,
  FlexRowSpaceBetween,
  FlexColumnSpaceBetween,
} from "./style";

import {
  UserOutlined,
  PoweroffOutlined,
  AppstoreOutlined,
  LineChartOutlined,
  SettingOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const SideMenu = ({ drawerVisible }) => {
  const { Text, Title } = Typography;
  const drawerBoxRef = createRef();
  const drawerPlacement = "left";
  const [drawerStyle, setDrawerStyle] = useState({
    position: "absolute",
    top: "57px",
  });

  const updateDimensions = () => {
    if (window.innerWidth <= 980) {
      const copyDrawerStyle = { ...drawerStyle };
      copyDrawerStyle.top = "104px";
      setDrawerStyle(copyDrawerStyle);
    } else {
      const copyDrawerStyle = { ...drawerStyle };
      copyDrawerStyle.top = "57px";
      setDrawerStyle(copyDrawerStyle);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return function removeListener() {
      window.removeEventListener("resize", updateDimensions);
    };
  });

  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <>
      {/* <div ref={drawerBoxRef} /> */}
      <Drawer
        placement={drawerPlacement}
        visible={drawerVisible}
        key={drawerPlacement}
        mask={false}
        getContainer={drawerBoxRef.current}
        maskClosable
        drawerStyle={{
          backgroundColor: "rgb(13 101 140)",
          // backgroundImage:
          //   "linear-gradient(rgb(38, 122, 159), rgb(0 97 154 / 74%))",
        }}
        style={drawerStyle}
        headerStyle={{ display: "none" }}
      >
        <SideMenuWrapper>
          <ProfileArea>
            <Avatar size="large" icon={<UserOutlined />} />
            <div>
              <Text strong={true} style={{ color: "white" }}>
                Usman Iqbal
              </Text>
              <div>
                <StatusDot style={{ color: "#77f377d1" }}></StatusDot>
                <Text
                  strong={true}
                  style={{ color: "#77f377d1", marginLeft: "3px" }}
                >
                  ONLINE
                </Text>
              </div>
            </div>
            <PoweroffOutlined
              style={{ color: "#ff0000e3", fontSize: "1rem" }}
            />
          </ProfileArea>
          <HiglightsArea>
            <HighLights>
              <Title level={5} style={{ color: "white" }}>
                789
              </Title>
              <Text style={{ color: "#09b1ff", fontSize: "0.6rem" }}>
                SALES
              </Text>
            </HighLights>
            <HighLights>
              <Title level={5} style={{ color: "white" }}>
                1,234
              </Title>
              <Text style={{ color: "#09b1ff", fontSize: "0.6rem" }}>
                ORDER
              </Text>
            </HighLights>
            <HighLights>
              <Title level={5} style={{ color: "white" }}>
                $900
              </Title>
              <Text style={{ color: "#09b1ff", fontSize: "0.6rem" }}>
                REVENUE
              </Text>
            </HighLights>
          </HiglightsArea>

          <MenuArea>
            <MenuStyled
              onClick={handleClick}
              defaultSelectedKeys={["dashboard"]}
              mode="inline"
            >
              <MenuItemStyled key="dashboard" icon={<LineChartOutlined />}>
                Dashboard
              </MenuItemStyled>
              <MenuItemStyled key="layouts" icon={<LineChartOutlined />}>
                Layouts
              </MenuItemStyled>

              <SubMenuStyled
                key="clients"
                title="Clients"
                icon={<LineChartOutlined />}
              >
                <MenuItemStyled key="microsoft">
                  <FlexRowSpaceBetween>
                    <div>
                      <span>
                        <AppstoreOutlined />
                      </span>
                      Microsoft
                    </div>
                    <SwitchStyled defaultChecked></SwitchStyled>
                  </FlexRowSpaceBetween>
                </MenuItemStyled>

                <MenuItemStyled key="apple">
                  <FlexRowSpaceBetween>
                    <div>
                      <span>
                        <AppstoreOutlined />
                      </span>
                      Apple
                    </div>
                    <SwitchStyled defaultChecked></SwitchStyled>
                  </FlexRowSpaceBetween>
                </MenuItemStyled>

                <MenuItemStyled key="sony">
                  <FlexRowSpaceBetween>
                    <div>
                      <span>
                        <AppstoreOutlined />
                      </span>
                      Sony
                    </div>
                    <SwitchStyled defaultChecked></SwitchStyled>
                  </FlexRowSpaceBetween>
                </MenuItemStyled>
              </SubMenuStyled>

              <MenuItemStyled key="messages">
                <FlexRowSpaceBetween>
                  <div>
                    <span>
                      <AppstoreOutlined />
                    </span>
                    Messages
                  </div>
                  <Badge style={{ backgroundColor: "green" }} count={25} />
                </FlexRowSpaceBetween>
              </MenuItemStyled>

              <MenuItemStyled key="settings" icon={<LineChartOutlined />}>
                Settings
              </MenuItemStyled>

              <MenuItemStyled key="profile">
                <FlexRowSpaceBetween>
                  <div>
                    <span>
                      <AppstoreOutlined />
                    </span>
                    Profile
                  </div>
                  <Badge style={{ backgroundColor: "green" }} text="50%" />
                </FlexRowSpaceBetween>
              </MenuItemStyled>
            </MenuStyled>
          </MenuArea>
          <SongsPercentageArea>
            <FlexColumnSpaceBetween style={{ height: "300px" }}>
              <Progress type="circle" percent={75} />
              <ProgressBarWidth>
                <FlexRowSpaceBetween>
                  <Text style={{ color: "#09b1ff" }}>CLASSICAL</Text>
                  <Text style={{ color: "white" }}>22%</Text>
                </FlexRowSpaceBetween>
                <Progress showInfo={false} percent={22} status="active" />

                <FlexRowSpaceBetween>
                  <Text style={{ color: "white" }}>ALTERNATIVE</Text>
                  <Text style={{ color: "white" }}>38%</Text>
                </FlexRowSpaceBetween>
                <Progress showInfo={false} percent={38} status="active" />

                <FlexRowSpaceBetween>
                  <Text style={{ color: "#09b1ff" }}>ROCK</Text>
                  <Text style={{ color: "white" }}>40%</Text>
                </FlexRowSpaceBetween>
                <Progress showInfo={false} percent={40} status="active" />
              </ProgressBarWidth>
            </FlexColumnSpaceBetween>
          </SongsPercentageArea>

          <AudioPlayerArea>
            <FlexColumnSpaceBetween style={{ height: "85px" }}>
              <Progress
                style={{ marginBottom: "10px" }}
                showInfo={false}
                percent={40}
                status="active"
              />
              <IconsAlign>
                <StepBackwardOutlined />
                <StepForwardOutlined />
                <PlayCircleOutlined />
                <PauseCircleOutlined />
                <FastBackwardOutlined />
                <FastForwardOutlined />
              </IconsAlign>
              <Text style={{ color: "white", marginTop: "15px" }}>
                EMINEM - RAP GOD
              </Text>
            </FlexColumnSpaceBetween>
          </AudioPlayerArea>

          <ListArea>
            <ListStyled>
              <List.Item>
                <Input
                  style={{ borderRadius: "10px" }}
                  placeholder="Search"
                  suffix={<SearchOutlined />}
                />
              </List.Item>
              <List.Item>
                <ListItemAlign>
                  <Space>
                    <StatusDot style={{ color: "#77f377d1" }}></StatusDot>
                    <TextEllipsis>Sylvain Guiheneuc</TextEllipsis>
                  </Space>
                </ListItemAlign>
              </List.Item>
              <List.Item>
                <ListItemAlign>
                  <Space>
                    <StatusDot style={{ color: "#5abd5ad1" }}></StatusDot>
                    <TextEllipsis>Padurariu Alexander</TextEllipsis>
                  </Space>
                  <div>
                    <Badge style={{ backgroundColor: "green" }} count={3} />
                  </div>
                </ListItemAlign>
              </List.Item>
              <List.Item>
                <ListItemAlign>
                  <Space>
                    <StatusDot style={{ color: "#c8f31dd1" }}></StatusDot>
                    <TextEllipsis>Frances Gunn</TextEllipsis>
                  </Space>
                </ListItemAlign>
              </List.Item>
              <List.Item>
                <ListItemAlign>
                  <Space>
                    <StatusDot style={{ color: "#ec4343d1" }}></StatusDot>
                    <TextEllipsis>Anna Anikiana</TextEllipsis>
                  </Space>
                </ListItemAlign>
              </List.Item>
              <List.Item>
                <ListItemAlign>
                  <Space>
                    <StatusDot style={{ color: "#0948bbd1" }}></StatusDot>
                    <TextEllipsis>Ales Krivek</TextEllipsis>
                  </Space>
                </ListItemAlign>
              </List.Item>
              <List.Item>
                <ListItemAlign>
                  <Space>
                    <StatusDot style={{ color: "#60e2ffd1" }}></StatusDot>
                    <TextEllipsis>Alex Guiheneuc</TextEllipsis>
                  </Space>
                </ListItemAlign>
              </List.Item>
            </ListStyled>
          </ListArea>
        </SideMenuWrapper>
      </Drawer>
    </>
  );
};

export default SideMenu;
