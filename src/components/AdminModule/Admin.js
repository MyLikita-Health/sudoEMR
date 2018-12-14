import React, { Component } from 'react';
import CreateUser from './CreateUserForm';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Users from './Users';
import './admin.css';

export default class Admin extends Component {
  render() {
    return (
      <Router>
        <div className="admin">
          <h2 className="header">User Administration and Management</h2>
          <hr />
          <div className="admin-dashboard">
            <div className="admin-tab">
              <TabList />
            </div>

            <div className="admin-container">
              <Route
                className="active"
                path="/admin/newUser"
                component={CreateUser}
              />
              <Route path="/admin/doctors" component={Users} />
            </div>
          </div>
        </div>
      </Router>
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
