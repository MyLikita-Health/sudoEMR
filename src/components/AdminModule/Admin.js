import React, { Component } from 'react';
import {
  MemoryRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { AppContainer, Navigation, Body, Title } from './containers';
// import { AppNavigation } from './AppNavigation';
import {RenderItems} from './DarkBar'
import CreateUser from './CreateUserForm';
import Users from './Users';
import './admin.css';

export default class Admin extends Component {
  render() {
    return (
      <AppContainer>
        <Navigation>
          <Title> User Admin </Title>
          <RenderItems />
        </Navigation>
        <Body>
          <Switch>
            <Route path="/admin/new-user" component={CreateUser} />
            <Route path="/admin/users" component={Users} />
          </Switch>
        </Body>
      </AppContainer>
    );
  }
}

const TabList = props => {
  return (
    <ul className="sidebar" type="none">
      <TabListItem to="newUser" title="Create New User" />
      <TabListItem to="doctors" title="List all Users" />
    </ul>
  );
};
const TabListItem = ({ to, title }) => {
  return (
    <li>
      <NavLink
        style={{ textDecoration: 'none', color: 'white' }}
        to={`/admin/${to}`}>
        {title}
      </NavLink>
    </li>
  );
};
