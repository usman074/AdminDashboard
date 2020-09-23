import React, { useState, useEffect } from "react";
//Styled Components
import {
  HeaderWrapper,
  Logo,
  LogoArea,
  IconContent,
  HeaderArea,
  FlexStartAlign,
} from "./style";

import { Input, Space, Badge, Avatar, Tooltip, Typography } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  StarOutlined,
  MailOutlined,
  PlayCircleOutlined,
  UserOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
const Header = ({ toggleDrawer }) => {
  const { Paragraph } = Typography;

  const LogoStyle = {
    fontWeight: "bold",
    fontSize: "1.5rem",
  };

  const TaglineStyle = {
    fontWeight: "none",
    fontSize: "0.8rem",
  };

  return (
    <HeaderWrapper>
      <LogoArea>
        <Logo>
          <Paragraph
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#504f4fd9",
              margin: "0px",
            }}
          >
            Dashboard
          </Paragraph>
          <Paragraph
            style={{
              fontWeight: "none",
              fontSize: "0.8rem",
              color: "#504f4fd9",
              margin: "0px",
            }}
          >
            Admin Panel Template
          </Paragraph>
        </Logo>
        <MenuOutlined onClick={toggleDrawer} style={{ fontSize: "1.5rem" }} />
      </LogoArea>
      <HeaderArea>
        <FlexStartAlign>
          <Space size="large">
            <Input placeholder="Search" suffix={<SearchOutlined />} />
            <div>
              <Tooltip placement="topLeft" title={"Add New"}>
                <PlusCircleOutlined
                  style={{ fontSize: "0.8rem", color: "#504f4fd9" }}
                />
              </Tooltip>
              <IconContent>Add New</IconContent>
            </div>
            <div>
              <Tooltip placement="topLeft" title={"Favourites"}>
                <StarOutlined
                  style={{ fontSize: "0.8rem", color: "#504f4fd9" }}
                />
              </Tooltip>
              <IconContent>Favourites</IconContent>
            </div>
          </Space>
        </FlexStartAlign>
        <FlexStartAlign>
          <Space size="large">
            <SearchOutlined
              style={{ fontSize: "1.2rem", color: "#504f4fd9" }}
            />
            <Badge dot={true}>
              <MailOutlined
                style={{ fontSize: "1.2rem", color: "#504f4fd9" }}
              />
            </Badge>
            <PlayCircleOutlined
              style={{ fontSize: "1.2rem", color: "#504f4fd9" }}
            />
            <div>
              <Tooltip placement="topLeft" title={"Usman Iqbal"}>
                <Avatar size="medium" icon={<UserOutlined />} />
              </Tooltip>
              <IconContent> Usman Iqbal</IconContent>
            </div>
            <DownCircleOutlined style={{ color: "#504f4fd9" }} />
          </Space>
        </FlexStartAlign>
      </HeaderArea>
    </HeaderWrapper>
  );
};

export default Header;
