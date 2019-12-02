import React from 'react';
import { SideNav, Nav as BaseNav } from 'react-sidenav';
import styled from 'styled-components';
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as BaseNavigation,
  ExampleBody as Body,
} from './containers';
import {MdDashboard, MdVerifiedUser} from 'react-icons/md'
import { FaCartPlus, FaFirstOrder, FaCube } from "react-icons/fa";

const AppContainer = styled(BaseAppContainer)`
  height: calc(100vh - 40px);
`;

const Navigation = styled(BaseNavigation)`
  background: #303641;
  color: #8d97ad;
  font-size: 1em;
  letter-spacing: 2px;
  width: 100px;
  line-height: 22px;
`;

const IconCnt = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;

const Nav = styled(BaseNav)`
  flex-direction: column;
`;

const theme = {
  selectionColor: '#FFF',
  hoverBgColor: '#181b20',
  selectionBgColor: '#00BCD4',
};

const Text = styled.div`
  font-size: 0.72em;
  text-transform: uppercase;
`;

// const Icon = props => <BaseIcon size={32} icon={props.icon} />;

export class RenderItems2 extends React.Component {
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
              <Text>Dashboard</Text>
            </Nav>
            <Nav id="2">
              <IconCnt>
                <MdVerifiedUser />
              </IconCnt>
              <Text>Users</Text>
            </Nav>
            <Nav id="3">
              <IconCnt>
                <FaCartPlus />
              </IconCnt>
              <Text>Deliveries</Text>
            </Nav>
            <Nav id="4">
              <IconCnt>
                <FaFirstOrder />
              </IconCnt>
              <Text>Orders</Text>
            </Nav>
            <Nav id="5">
              <IconCnt>
                <FaCube/>
              </IconCnt>
              <Text>Transactions</Text>
            </Nav>
          </SideNav>
        </Navigation>
      </AppContainer>
    );
  }
}
