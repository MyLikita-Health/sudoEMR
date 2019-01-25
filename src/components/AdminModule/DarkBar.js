import React from 'react';
import { SideNav, Nav } from 'react-sidenav';
import styled from 'styled-components';
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as BaseNavigation,
//   ExampleBody as Body,
} from './containers';
import { NavLink } from 'react-router-dom';
import { MdDashboard, MdVerifiedUser } from 'react-icons/md';
import { FaCartPlus, FaFirstOrder, FaCube } from 'react-icons/fa';

const AppContainer = styled(BaseAppContainer)`
  height: calc(100vh - 100px);
`;

const Navigation = styled(BaseNavigation)`
  background: #6c757d;
  color: #8d97ad;
  font-size: 1em;
  letter-spacing: 2px;
  width: 240px;
  line-height: 22px;
`;

const IconCnt = styled.div`
  color: #6a56a5;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;

const theme = {
  selectionColor: '#FFF',
  hoverBgColor: '#181b20',
};

const Text = styled.div`
  padding-left: 8px;
`;

export class RenderItems extends React.Component {
  state = { selectedPath: '1' };

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
            onItemSelection={this.onItemSelection}>
            <Nav id="1">
              <IconCnt>
                <MdDashboard />
              </IconCnt>
              <NavLink
                className="admin-sidebar"
                to={`/admin/dashboard`}>
                Dashboard
              </NavLink>
            </Nav>
            <Nav id="2">
              <IconCnt>
                <MdVerifiedUser />
              </IconCnt>
              <NavLink
                className="admin-sidebar"
                to={`/admin/users`}>
                Users
              </NavLink>
            </Nav>
            <Nav id="3">
              <IconCnt>
                <FaCartPlus />
              </IconCnt>
              <NavLink
                className="admin-sidebar"
                to={`/admin/new-user`}>
                Add User
              </NavLink>
            </Nav>
            {/* <Nav id="4">
              <IconCnt>
                <FaFirstOrder />
              </IconCnt>
              <NavLink
                className="admin-sidebar"
                to={`/admin/users`}>
                Old Users
              </NavLink>
            
            </Nav>
            <Nav id="5">
              <IconCnt>
                <FaCube />
              </IconCnt>
              <NavLink
                className="admin-sidebar"
                to={`/admin/users`}>
                Users
              </NavLink>
            </Nav> */}
          </SideNav>
        </Navigation>
        
      </AppContainer>
    );
  }
}
