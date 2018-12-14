import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PatientClarking from './components/Doctor Module/PatientClarking';
import Pharmacy from './components/Pharmacy Module/Pharmacy';
import Account from './components/Account Module/Account';
import Admin from './components/AdminModule/Admin';
import Patientlist from './components/Records Module/Patientlist';
import Lab from './components/Lab Module/Lab';
import ErrorBoundary from './components/MyErrorBoundary';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login/Login2';
import logo from './images/logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import './Style/index.css';
import { _fetchData } from './components/helpers';

const defaultUsers = [
  {
    username: 'admin',
    password: '@12345678',
  },
  {
    username: 'doctor',
    password: '@1234567',
  },
  {
    username: 'record',
    password: '@123456',
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: '',
      loggedIn: true,
      username: '',
      password: '',
      records: true,
      doctors: true,
      pharmacy: true,
      lab: true,
      account: true,
      admin: true,
      users: [],
      isOpen: false,
    };
  }

  // static childContextTypes = {
  //   username: PropTypes.String,
  // };

  // getChildContext() {
  //   return {
  //     username: this.getUsername(),
  //   };
  // }

  // getUsername = () => 'Mustapha';

  componentDidMount() {
    this.fetchUsers();
  }

  //Get all the users from the database
  fetchUsers = () => {
    const cb = data => this.setState({ users: data });
    _fetchData({ route: 'users/usersList', callback: cb });
  };

  /**
   * The username and password validation for the login
   * is done with the handleLogin method
   */
  handleLogin = e => {
    e.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      return this.setState({ msg: 'Please enter your username and password!' });
    } else {
      const users = this.state.users;
      const username = this.state.username.trim();
      const password = this.state.password.trim();

      if (username === 'admin' && password === 'admin') {
        return this.setState({
          loggedIn: true,
          records: true,
          doctors: true,
          pharmacy: true,
          lab: true,
          admin: true,
        });
        localStorage.setItem('username', this.state.username);
      } else {
        this.setState({
          msg: 'You have entered wrong username or password',
        });
      }
    }
  };

  /**
   * These two methods handleUsernameChange and handlePasswordChange handle the onChange event
   * of the username and password text fields. They are passed down to the child form
   * which implements them
   */
  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
    this.setState({ msg: '' });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
    this.setState({ msg: '' });
  };

  logout = () => {
    const user = localStorage.getItem('username');
    this.setState({ loggedIn: false, username: '' });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <ErrorBoundary>
        {/* Conditional rendering which check if the user is a valid user or not */}
        {!this.state.loggedIn && (
          <Login
            handleLogin={this.handleLogin}
            message={this.state.msg}
            username={this.state.username}
            handleUsernameChange={this.handleUsernameChange}
            password={this.state.password}
            handlePasswordChange={this.handlePasswordChange}
          />
        )}
        {this.state.loggedIn && (
          <Router basename={process.env.PUBLIC_URL}>
            <div>
              <div />
              {/* The header goes here */}
              <Navbar color="secondary" dark expand="md">
                <NavbarBrand href="https://di-hub.com/" target="_blank">
                  <img
                    src={logo}
                    alt="logo"
                    className="img-thumbnail"
                    height="50em"
                    width="80em"
                  />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar className="">
                    {this.state.records && (
                      <NavItem>
                        <NavLink to="/patientlist" className="nav">
                          Record Module
                        </NavLink>
                      </NavItem>
                    )}
                    {this.state.doctors && (
                      <NavItem>
                        <NavLink to="/patient_clarking" className="nav">
                          Doctors Module
                        </NavLink>
                      </NavItem>
                    )}
                    {this.state.pharmacy && (
                      <NavItem>
                        <NavLink to="/pharmacy" className="nav">
                          Pharmacy Module
                        </NavLink>
                      </NavItem>
                    )}
                    {this.state.account && (
                      <NavItem>
                        <NavLink to="/account" className="nav">
                          Account Module
                        </NavLink>
                      </NavItem>
                    )}
                    {this.state.lab && (
                      <NavItem>
                        <NavLink to="/lab" className="nav">
                          Laboratory Module
                        </NavLink>
                      </NavItem>
                    )}
                    {this.state.admin && (
                      <NavItem>
                        <NavLink to="/admin" className="nav">
                          Admin
                        </NavLink>
                      </NavItem>
                    )}
                    <NavItem className="">
                      User:{' '}
                      <b>
                        <em>{this.state.username.toUpperCase()}</em>
                      </b>
                      <Button color="danger" onClick={this.logout}>
                        Logout
                      </Button>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              <br />
              {/* ... and the contents go here */}
              <div className="">
                {this.state.records && (
                  <Route
                    className="active"
                    path="/patientlist"
                    component={Patientlist}
                  />
                )}
                {this.state.doctors && (
                  <Route path="/patient_clarking" component={PatientClarking} />
                )}
                {this.state.pharmacy && (
                  <Route path="/pharmacy" component={Pharmacy} />
                )}
                {this.state.lab && <Route path="/lab" component={Lab} />}
                {this.state.account && (
                  <Route path="/account" component={Account} />
                )}
                {this.state.admin && <Route path="/admin" component={Admin} />}
              </div>
            </div>
          </Router>
        )}
        <div className="row">
          <span
            className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
            style={{ fontFamily: 'cursive' }}>
            {/* &copy; di-hub - HMS Team */}
          </span>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
