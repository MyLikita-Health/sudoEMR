import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
import Navbar from './nav-old'
import './Style/index.css';
import { _fetchData } from './components/helpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: '',
      // loggedIn: false,
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
      isLoading: true,
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
    let user = localStorage.getItem('user');
    console.log(user)
    this.setState({ user })
    // if(user)
    // this.fetchUsers();
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
      // const users = this.state.users;
      const username = this.state.username.trim();
      const password = this.state.password.trim();

      if (username === 'admin' && password === 'admin') {
        localStorage.setItem('user', this.state.username);

        this.setState(prevState => ({
          // loggedIn: true,
          records: true,
          doctors: true,
          pharmacy: true,
          lab: true,
          admin: true,
          user: prevState.username
        }));
        // localStorage.setItem('user', this.state.username);
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
        {!this.state.user && (
          <Login
            handleLogin={this.handleLogin}
            message={this.state.msg}
            username={this.state.username}
            handleUsernameChange={this.handleUsernameChange}
            password={this.state.password}
            handlePasswordChange={this.handlePasswordChange}
          />
        )}
        {this.state.user && (
          <Router basename={process.env.PUBLIC_URL}>
            <div>
              <div />
              {/* The header goes here */}
              <Navbar 
                records= {this.state.records}
                doctors= {this.state.doctors}
                pharmacy= {this.state.pharmacy}
                lab= {this.state.lab}
                account= {this.state.account}
                admin= {this.state.admin}
                username={this.state.username} 
              />
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
