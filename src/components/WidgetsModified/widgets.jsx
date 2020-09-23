import React from "react";

import Card from "../Card";
import { ContentWrapper, FlexColumn } from "./style";
const WidgetsModified = () => {
  return (
    <>
      <ContentWrapper>
        <Card gridArea="server" />
        <Card gridArea="users" />
        <Card gridArea="revenue" />
        <Card gridArea="booking" />

        <Card gridArea="files" />
        <Card gridArea="messages" />
        <Card gridArea="activities" />
        <Card gridArea="pageviews" />

        <Card gridArea="profile" />
        <Card gridArea="activity" />
        <Card gridArea="newWidget" />
        <Card gridArea="downloaded" />
        <Card gridArea="load" />
        <Card gridArea="usage" />
        <Card gridArea="numbers" />
        <Card gridArea="smallGraph" />
        <Card gridArea="downloads" />
        <Card gridArea="uploads" />
        <Card gridArea="smallTable" />
        <Card gridArea="Calendar" />

        {/* <FlexColumn>
          <Card
            gridArea="profile"
          />

          <Card
            gridArea="profile"
          />
        </FlexColumn>

        <FlexColumn>
          <Card
            gridArea="activity"
          />

          <Card
            gridArea="activity"
          />
        </FlexColumn>

        <FlexColumn>
          <Card
            gridArea="widgetsOne"
          />

          <Card
            gridArea="widgetsOne"
          />
          <Card
            gridArea="widgetsOne"
          />

          <Card
            gridArea="widgetsOne"
          />
        </FlexColumn>

        <FlexColumn>
          <Card
            gridArea="widgetsTwo"
          />

          <Card
            gridArea="widgetsTwo"
          />
          <Card
            gridArea="widgetsTwo"
          />

          <Card
            gridArea="widgetsTwo"
          />
        </FlexColumn> */}

        <Card gridArea="map" />
      </ContentWrapper>
    </>
  );
};

export default WidgetsModified;
