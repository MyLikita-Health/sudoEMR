import React from 'react';
import styled from 'styled-components';
import { withRR4, Nav, NavIcon } from 'react-sidenav';
// import { FaHome } from 'react-icons/fa';

const Text = styled.div`
  padding-left: 8px;
`;

const theme = {
  hoverBgColor: '#f5f5f5',
  selectionBgColor: '#f5f5f5',
  selectionIconColor: '#03A9F4',
};

// const SideNav = withRR4();

export class AppNavigation extends React.Component {
  render() {
    return (
      //   <SideNav theme={theme} defaultSelectedPath={'home'}>
      <div>
        <Nav id="home">
          <NavIcon>H</NavIcon>
          <Text>Home</Text>
        </Nav>
        <Nav id="basic">
          <NavIcon>B</NavIcon>
          <Text>Basic Example</Text>
        </Nav>
      </div>
      //   </SideNav>
    );
  }
}
