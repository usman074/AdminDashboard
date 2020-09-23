import React from "react";

import Card from "../Card";
import {
  SectionOne,
  SectionTwo,
  SectionTwoLeft,
  SectionTwoRight,
  SectionThree,
  ContentWrapper,
  FlexColumn,
} from "./style";
const Widgets = () => {
  return (
    <>
      <ContentWrapper>
        <Card
          startColumn="column-one"
          endColumn="column-two"
          startRow="row-one"
          endRow="row-two"
          gridArea="server"
        />
        <Card
          startColumn="column-two"
          endColumn="column-three"
          startRow="row-one"
          endRow="row-two"
          gridArea="users"
        />
        <Card
          startColumn="column-three"
          endColumn="column-four"
          startRow="row-one"
          endRow="row-two"
          gridArea="revenue"
        />
        <Card
          startColumn="column-four"
          endColumn="column-end"
          startRow="row-one"
          endRow="row-two"
          gridArea="booking"
        />

        <Card
          startColumn="column-one"
          endColumn="column-two"
          startRow="row-two"
          endRow="row-three"
          gridArea="files"
        />
        <Card
          startColumn="column-two"
          endColumn="column-three"
          startRow="row-two"
          endRow="row-three"
          gridArea="messages"
        />
        <Card
          startColumn="column-three"
          endColumn="column-four"
          startRow="row-two"
          endRow="row-three"
          gridArea="activities"
        />
        <Card
          startColumn="column-four"
          endColumn="column-end"
          startRow="row-two"
          endRow="row-three"
          gridArea="pageviews"
        />

        <FlexColumn>
          <Card
            startColumn="column-one"
            endColumn="column-two"
            startRow="row-three"
            endRow="row-four"
            gridArea="profile"
          />

          <Card
            startColumn="column-two"
            endColumn="column-three"
            startRow="row-three"
            endRow="row-four"
            gridArea="profile"
          />
        </FlexColumn>

        <FlexColumn>
          <Card
            startColumn="column-one"
            endColumn="column-two"
            startRow="row-three"
            endRow="row-four"
            gridArea="activity"
          />

          <Card
            startColumn="column-two"
            endColumn="column-three"
            startRow="row-three"
            endRow="row-four"
            gridArea="activity"
          />
        </FlexColumn>

        <FlexColumn>
          <Card
            startColumn="column-three"
            endColumn="column-four"
            startRow="row-three"
            endRow="row-four"
            gridArea="widgetsOne"
          />

          <Card
            startColumn="column-four"
            endColumn="column-end"
            startRow="row-three"
            endRow="row-four"
            gridArea="widgetsOne"
          />
          <Card
            startColumn="column-three"
            endColumn="column-four"
            startRow="row-three"
            endRow="row-four"
            gridArea="widgetsOne"
          />

          <Card
            startColumn="column-four"
            endColumn="column-end"
            startRow="row-three"
            endRow="row-four"
            gridArea="widgetsOne"
          />
        </FlexColumn>

        <FlexColumn>
          <Card
            startColumn="column-three"
            endColumn="column-four"
            startRow="row-three"
            endRow="row-four"
            gridArea="widgetsTwo"
          />

          <Card
            startColumn="column-four"
            endColumn="column-end"
            startRow="row-three"
            endRow="row-four"
            gridArea="widgetsTwo"
          />
          <Card
            startColumn="column-three"
            endColumn="column-four"
            startRow="row-three"
            endRow="row-four"
            gridArea="widgetsTwo"
          />

          <Card
            startColumn="column-four"
            endColumn="column-end"
            startRow="row-three"
            endRow="row-four"
            gridArea="widgetsTwo"
          />
        </FlexColumn>

        <Card
          startColumn="column-one"
          endColumn="column-end"
          startRow="row-four"
          endRow="row-end"
          gridArea="map"
        />
      </ContentWrapper>

      {/* <SectionOne>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
        <div>Card 4</div>
        <div>Card 5</div>
        <div>Card 6</div>
        <div>Card 7</div>
        <div>Card 8</div>
      </SectionOne>

      <SectionTwo>
        <SectionTwoLeft>
          <div>Profile Card</div>
          <div>Activity Card</div>
          <div>Small Table</div>
          <div>Calendar Card</div>
        </SectionTwoLeft>
        <SectionTwoRight>
          <div>New Widget</div>
          <div>Downloaded</div>
          <div>Load</div>
          <div>Usage</div>
          <div>Numbers</div>
          <div>Small Graph</div>
          <div>Downloads</div>
          <div>Uploads</div>
        </SectionTwoRight>
      </SectionTwo>

      <SectionThree>Map</SectionThree> */}
    </>
  );
};

export default Widgets;
