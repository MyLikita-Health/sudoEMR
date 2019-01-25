import React from "react";
import { SideNav, Nav } from "react-sidenav";
import styled from "styled-components";
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as Navigation,
  ExampleBody as Body
} from "./containers";

const AppContainer = styled(BaseAppContainer)`
  height: calc(100vh - 40px);
`;

const theme = {
  selectionColor: "#C51162"
};

export class Basic extends React.Component {
  state = { selectedPath: "1" };

  onItemSelection = arg => {
    this.setState({ selectedPath: arg.path });
  };

  render() {
    return (
      <AppContainer>
        <Navigation>
          <SideNav
            defaultSelectedPath="1"
            theme={theme}
            onItemSelection={this.onItemSelection}
          >
            <Nav id="1">
              Nav 1
              <Nav id="1">Nav 1.1</Nav>
              <Nav id="2">Nav 1.2</Nav>
            </Nav>
            <Nav id="2">Nav 2</Nav>
            <Nav id="3">
              Nav 3
              <Nav id="1">Nav 3.1</Nav>
              <Nav id="2">
                Nav 3.2
                <Nav id="1">Nav 3.2.1</Nav>
                <Nav id="2">Nav 3.2.2</Nav>
              </Nav>
            </Nav>
            <Nav id="4">Nav 4</Nav>
            <Nav id="5">Nav 5</Nav>
            <Nav id="4">Nav 6</Nav>
            <Nav id="5">Nav 7</Nav>
          </SideNav>
        </Navigation>
        <Body>
          This simple example shows how you can use react-sidenav to create a
          tree like structure
        </Body>
      </AppContainer>
    );
  }
}
