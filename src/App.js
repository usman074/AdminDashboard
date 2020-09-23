import React, { useState, useEffect } from "react";

//Components
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import BreadCrumb from "./components/BreadCrumb";
import Widgets from "./components/Widgets";
import WidgetsModified from "./components/WidgetsModified";

//User Provider
import { UserProvider } from "./contexts/userContext.js";

//External Libs
import { Route, Redirect, Switch } from "react-router-dom";

//Configs

import logo from "./logo.svg";
import "./App.css";
import {
  Row,
  HeaderWrapper,
  SideMenuWrapper,
  MainContentWrapper,
} from "./style";

function App() {
  const [drawerVisible, setDrawerVisible] = useState(true);

  const handleToggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const updateDrawerView = () => {
    if (window.innerWidth <= 767) {
      setDrawerVisible(false);
    } else {
      setDrawerVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDrawerView);
    return function removeListener() {
      window.removeEventListener("resize", updateDrawerView);
    };
  });

  return (
    <div className="App">
      <Row drawer={drawerVisible}>
        <HeaderWrapper>
          <Header toggleDrawer={handleToggleDrawer} />
        </HeaderWrapper>
        <SideMenuWrapper>
          <SideMenu drawerVisible={drawerVisible} />
        </SideMenuWrapper>
        <MainContentWrapper>
          <BreadCrumb />
          {/* <Widgets /> */}
          <WidgetsModified />
        </MainContentWrapper>
      </Row>
    </div>
  );
}

export default App;
